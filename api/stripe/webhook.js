import Stripe from 'stripe';
import { loadStripeConfig, serverSupabase } from '../_stripe-settings.js';

// Vercel requires raw body for Stripe signature verification.
export const config = {
  api: { bodyParser: false },
};

async function readRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const supabase = serverSupabase();
  const stripeConfig = await loadStripeConfig(supabase);

  if (!stripeConfig.secret_key || !stripeConfig.webhook_secret) {
    console.error('Stripe not fully configured — rejecting webhook.');
    return res.status(503).json({ error: 'Stripe not configured' });
  }

  const stripe = new Stripe(stripeConfig.secret_key);
  const rawBody = await readRawBody(req);
  const signature = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, stripeConfig.webhook_secret);
  } catch (err) {
    console.error('Stripe signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded':
        await handleCheckoutCompleted(supabase, event.data.object);
        break;
      case 'checkout.session.async_payment_failed':
        await markFailedSession(supabase, event.data.object);
        break;
      case 'invoice.payment_succeeded':
        await handleInvoicePaid(supabase, stripe, stripeConfig, event.data.object);
        break;
      case 'charge.refunded':
        await handleChargeRefunded(supabase, event.data.object);
        break;
      default:
        break;
    }
  } catch (err) {
    console.error(`Webhook handler for ${event.type} failed:`, err);
    return res.status(500).json({ error: err.message });
  }

  return res.status(200).json({ received: true });
}

async function handleCheckoutCompleted(supabase, session) {
  const meta = session.metadata || {};
  const customerDetails = session.customer_details || {};

  const nurse_email = (
    meta.nurse_email ||
    customerDetails.email ||
    session.customer_email ||
    ''
  ).toLowerCase();

  if (!nurse_email) {
    console.warn('checkout.session.completed missing email, session', session.id);
    return;
  }

  const payload = {
    nurse_email,
    nurse_name: meta.nurse_name || customerDetails.name || null,
    nurse_phone: meta.nurse_phone || customerDetails.phone || null,
    program: meta.program || 'accelerator',
    plan: meta.plan || (session.mode === 'subscription' ? 'payment_plan' : 'full'),
    amount_cents: session.amount_total || 0,
    currency: (session.currency || 'usd').toLowerCase(),
    ambassador_id: emptyToNull(meta.ambassador_id),
    referral_code: emptyToNull(meta.referral_code),
    referral_id: emptyToNull(meta.referral_id),
    cohort_cycle_id: emptyToNull(meta.cohort_cycle_id),
    cohort_cycle_label: emptyToNull(meta.cohort_cycle_label),
    stripe_checkout_session_id: session.id,
    stripe_customer_id: session.customer || null,
    stripe_payment_intent_id: session.payment_intent || null,
    stripe_subscription_id: session.subscription || null,
    status: 'paid',
  };

  const contactId = await upsertAcceleratorContact(supabase, {
    email: nurse_email,
    name: payload.nurse_name,
    phone: payload.nurse_phone,
    sessionId: session.id,
    plan: payload.plan,
    amountCents: payload.amount_cents,
  });
  if (contactId) payload.contact_id = contactId;

  const { data: existing } = await supabase
    .from('enrollments')
    .select('id, status')
    .eq('stripe_checkout_session_id', session.id)
    .maybeSingle();

  if (existing) {
    if (existing.status === 'paid') return; // already processed
    await supabase.from('enrollments').update(payload).eq('id', existing.id);
  } else {
    await supabase.from('enrollments').insert(payload);
  }
}

async function handleInvoicePaid(supabase, stripe, stripeConfig, invoice) {
  if (!invoice.subscription) return; // ignore non-subscription invoices

  const { data: enroll } = await supabase
    .from('enrollments')
    .select('id, notes')
    .eq('stripe_subscription_id', invoice.subscription)
    .maybeSingle();

  if (enroll) {
    const note = `Installment paid: $${(invoice.amount_paid / 100).toFixed(2)} on ${new Date().toISOString().slice(0, 10)}`;
    const combined = enroll.notes ? `${enroll.notes}\n${note}` : note;
    await supabase.from('enrollments').update({ notes: combined }).eq('id', enroll.id);
  }

  // Auto-cancel after N installments if the admin configured one.
  const installments = stripeConfig.price_plan_installments;
  if (installments && Number.isInteger(installments) && installments > 0) {
    try {
      // Count paid invoices on this subscription.
      const invoices = await stripe.invoices.list({
        subscription: invoice.subscription,
        limit: installments + 5,
      });
      const paidCount = (invoices.data || []).filter((i) => i.status === 'paid').length;
      if (paidCount >= installments) {
        await stripe.subscriptions.update(invoice.subscription, { cancel_at_period_end: true });
      }
    } catch (err) {
      console.warn('Could not schedule subscription auto-cancel:', err.message);
    }
  }
}

async function handleChargeRefunded(supabase, charge) {
  const { data: enroll } = await supabase
    .from('enrollments')
    .select('id, status')
    .eq('stripe_payment_intent_id', charge.payment_intent)
    .maybeSingle();

  if (!enroll) return;
  if (enroll.status === 'refunded') return;

  // The enrollments_attribute_on_paid trigger unwinds the referral and
  // cancels any 'due' payouts when status flips to 'refunded'.
  await supabase.from('enrollments').update({ status: 'refunded' }).eq('id', enroll.id);
}

async function markFailedSession(supabase, session) {
  await supabase
    .from('enrollments')
    .update({ status: 'failed' })
    .eq('stripe_checkout_session_id', session.id);
}

function emptyToNull(v) {
  if (v === undefined || v === null || v === '') return null;
  return v;
}

function parseName(fullName = '') {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    first_name: parts[0] || null,
    last_name: parts.slice(1).join(' ') || null,
  };
}

const LIFECYCLE_RANK = {
  Explorer: 1,
  DIYer: 2,
  Builder: 3,
  'Established Owner': 4,
};

function shouldUpgradeLifecycle(current, proposed) {
  return (LIFECYCLE_RANK[proposed] || 0) > (LIFECYCLE_RANK[current] || 0);
}

async function upsertAcceleratorContact(supabase, { email, name, phone, sessionId, plan, amountCents }) {
  const emailLower = email.toLowerCase();
  const { first_name, last_name } = parseName(name || '');

  const { data: existing } = await supabase
    .from('contacts')
    .select('*')
    .ilike('email', emailLower)
    .maybeSingle();

  let contactId;
  if (existing) {
    const updates = {
      updated_at: new Date().toISOString(),
      interest: 'accelerator_cohort',
    };
    if (!existing.first_name && first_name) updates.first_name = first_name;
    if (!existing.last_name && last_name) updates.last_name = last_name;
    if (!existing.phone && phone) updates.phone = phone;
    if (shouldUpgradeLifecycle(existing.lifecycle_stage, 'Builder')) {
      updates.lifecycle_stage = 'Builder';
    }

    await supabase.from('contacts').update(updates).eq('id', existing.id);
    contactId = existing.id;
  } else {
    const { data: created } = await supabase
      .from('contacts')
      .insert({
        first_name,
        last_name,
        email: emailLower,
        phone: phone || null,
        interest: 'accelerator_cohort',
        status: 'new',
        source: 'stripe_checkout',
        lifecycle_stage: 'Builder',
        intent: 'accelerator',
        lead_score: 80,
        score_reasons: [
          { signal: 'Completed Accelerator checkout', points: 80 },
        ],
      })
      .select('id')
      .maybeSingle();
    contactId = created?.id;
  }

  if (!contactId) return null;

  await assignTag(supabase, contactId, 'Accelerator Enrolled');
  await assignTag(supabase, contactId, 'Accelerator Inquiry');
  await upsertPipelineStage(supabase, contactId, 'Accelerator', 'Enrolled');
  await supabase.from('activity_log').insert({
    contact_id: contactId,
    type: 'payment',
    description: 'Completed Accelerator checkout',
    metadata: {
      source: 'stripe_checkout',
      routed_pipeline: 'Accelerator',
      stage: 'Enrolled',
      stripe_checkout_session_id: sessionId,
      plan,
      amount_cents: amountCents,
    },
  });

  return contactId;
}

async function assignTag(supabase, contactId, tagName) {
  const { data: existingTag } = await supabase
    .from('tags')
    .select('id')
    .eq('name', tagName)
    .maybeSingle();

  let tagId = existingTag?.id;
  if (!tagId) {
    const { data: created } = await supabase
      .from('tags')
      .insert({ name: tagName })
      .select('id')
      .maybeSingle();
    tagId = created?.id;
  }

  if (!tagId) return;

  await supabase
    .from('contact_tags')
    .upsert({ contact_id: contactId, tag_id: tagId }, { onConflict: 'contact_id,tag_id', ignoreDuplicates: true });
}

async function upsertPipelineStage(supabase, contactId, pipelineName, stage) {
  const { data: pipeline } = await supabase
    .from('pipelines')
    .select('id')
    .eq('name', pipelineName)
    .maybeSingle();

  if (!pipeline) return;

  const { data: existing } = await supabase
    .from('pipeline_contacts')
    .select('id, stage')
    .eq('pipeline_id', pipeline.id)
    .eq('contact_id', contactId)
    .maybeSingle();

  if (existing) {
    if (existing.stage !== 'Completed') {
      await supabase
        .from('pipeline_contacts')
        .update({ stage, entered_stage_at: new Date().toISOString() })
        .eq('id', existing.id);
    }
  } else {
    await supabase.from('pipeline_contacts').insert({
      pipeline_id: pipeline.id,
      contact_id: contactId,
      stage,
    });
  }

  const { data: general } = await supabase
    .from('pipelines')
    .select('id')
    .eq('name', 'General')
    .maybeSingle();

  if (general) {
    await supabase
      .from('pipeline_contacts')
      .delete()
      .eq('pipeline_id', general.id)
      .eq('contact_id', contactId);
  }
}

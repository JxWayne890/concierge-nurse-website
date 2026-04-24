import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      plan,
      nurse_email,
      nurse_name,
      nurse_phone,
      ref,
      success_url,
      cancel_url,
    } = req.body || {};

    if (!plan || !['full', 'payment_plan'].includes(plan)) {
      return res.status(400).json({ error: 'Invalid plan. Must be "full" or "payment_plan".' });
    }
    if (!nurse_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nurse_email)) {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    const priceId = plan === 'full'
      ? process.env.STRIPE_PRICE_ID_ACCELERATOR_FULL
      : process.env.STRIPE_PRICE_ID_ACCELERATOR_PAYMENT_PLAN;

    if (!priceId) {
      return res.status(500).json({
        error: 'Stripe price ID is not configured for this plan.',
      });
    }

    // Resolve ambassador by referral code (if provided and still active).
    let ambassador_id = null;
    let referral_code = null;
    if (ref) {
      const { data: amb } = await supabase
        .from('ambassadors')
        .select('id, referral_code, status')
        .eq('referral_code', ref)
        .maybeSingle();
      if (amb && amb.status === 'active') {
        ambassador_id = amb.id;
        referral_code = amb.referral_code;
      }
    }

    // Resolve the active cohort cycle.
    const { data: cycle } = await supabase
      .from('cohort_cycles')
      .select('id, label')
      .eq('is_active', true)
      .maybeSingle();

    // Try to match a pending referral by email (and cycle, if set).
    // If an ambassador was pre-logged, we'll use their ambassador_id as the
    // attribution source even if the nurse didn't click a coded link.
    let referral_id = null;
    if (cycle) {
      const { data: pending } = await supabase
        .from('referrals')
        .select('id, ambassador_id')
        .eq('cohort_cycle_id', cycle.id)
        .ilike('referred_email', nurse_email.trim())
        .eq('status', 'pending')
        .order('created_at', { ascending: true })
        .limit(1);
      if (pending && pending[0]) {
        referral_id = pending[0].id;
        if (!ambassador_id) ambassador_id = pending[0].ambassador_id;
      }
    }

    const origin =
      req.headers.origin ||
      (req.headers.host ? `https://${req.headers.host}` : '');

    const metadata = {
      program: 'accelerator',
      plan,
      nurse_email: nurse_email.trim().toLowerCase(),
      nurse_name: (nurse_name || '').trim(),
      nurse_phone: (nurse_phone || '').trim(),
      ambassador_id: ambassador_id || '',
      referral_code: referral_code || '',
      referral_id: referral_id || '',
      cohort_cycle_id: cycle?.id || '',
      cohort_cycle_label: cycle?.label || '',
    };

    const sessionConfig = {
      mode: plan === 'payment_plan' ? 'subscription' : 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: nurse_email.trim().toLowerCase(),
      client_reference_id: referral_code || nurse_email.trim().toLowerCase(),
      success_url:
        success_url ||
        `${origin}/accelerator/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:
        cancel_url ||
        `${origin}/accelerator/enroll${ref ? `?ref=${encodeURIComponent(ref)}` : ''}`,
      allow_promotion_codes: true,
      metadata,
    };

    // Subscription mode also stores metadata on the subscription itself so we
    // can attribute future invoice events without looking up the original
    // session.
    if (plan === 'payment_plan') {
      sessionConfig.subscription_data = { metadata };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return res.status(200).json({ url: session.url, session_id: session.id });
  } catch (err) {
    console.error('create-session error:', err);
    return res.status(500).json({ error: err.message || 'Unknown error' });
  }
}

import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { campaign_id } = req.body;

  if (!campaign_id) {
    return res.status(400).json({ error: 'campaign_id is required' });
  }

  // Fetch campaign
  const { data: campaign, error: campErr } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', campaign_id)
    .single();

  if (campErr || !campaign) {
    return res.status(404).json({ error: 'Campaign not found' });
  }

  // Get recipient emails via tags
  const tagIds = campaign.recipient_tag_ids || [];
  if (tagIds.length === 0) {
    return res.status(400).json({ error: 'No recipient segments selected' });
  }

  const { data: contactTags } = await supabase
    .from('contact_tags')
    .select('contact_id')
    .in('tag_id', tagIds);

  const contactIds = [...new Set((contactTags || []).map((ct) => ct.contact_id))];

  if (contactIds.length === 0) {
    return res.status(400).json({ error: 'No contacts in selected segments' });
  }

  const { data: contacts } = await supabase
    .from('contacts')
    .select('id, email, first_name')
    .in('id', contactIds)
    .not('email', 'is', null);

  if (!contacts || contacts.length === 0) {
    return res.status(400).json({ error: 'No valid email addresses found' });
  }

  let sent = 0;
  let failed = 0;
  const errors = [];

  // Send emails in batches of 10
  for (let i = 0; i < contacts.length; i += 10) {
    const batch = contacts.slice(i, i + 10);

    const promises = batch.map(async (contact) => {
      try {
        // Simple personalization — replace {firstName} in body
        const personalizedBody = campaign.body
          .replace(/\{firstName\}/g, contact.first_name || 'there');

        await resend.emails.send({
          from: `${campaign.from_name} <${campaign.from_email}>`,
          to: contact.email,
          subject: campaign.subject || campaign.name,
          html: personalizedBody,
        });

        sent++;

        // Create campaign_recipient record
        await supabase.from('campaign_recipients').insert({
          campaign_id: campaign.id,
          contact_id: contact.id,
          status: 'sent',
        });
      } catch (err) {
        failed++;
        errors.push({ email: contact.email, error: err.message });
      }
    });

    await Promise.all(promises);
  }

  // Update campaign status
  await supabase
    .from('campaigns')
    .update({
      status: 'sent',
      sent_at: new Date().toISOString(),
      recipient_count: contacts.length,
    })
    .eq('id', campaign.id);

  // Update campaign stats
  await supabase
    .from('campaign_stats')
    .update({
      sent,
      delivered: sent,
      bounced: failed,
    })
    .eq('campaign_id', campaign.id);

  // Log activity for each sent contact
  const activityRows = contacts.slice(0, sent).map((c) => ({
    contact_id: c.id,
    type: 'campaign_sent',
    description: `Received email campaign: ${campaign.name}`,
    metadata: { campaign_id: campaign.id, campaign_name: campaign.name },
  }));

  if (activityRows.length > 0) {
    await supabase.from('activity_log').insert(activityRows);
  }

  return res.status(200).json({
    success: true,
    sent,
    failed,
    total: contacts.length,
    errors: errors.length > 0 ? errors : undefined,
  });
}

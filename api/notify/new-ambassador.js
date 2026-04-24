import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { loadBrandSettings } from '../_email-helpers.js';
import { wrapInBrandTemplate } from '../../src/lib/emailBrand.js';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY
);

const SITE_ORIGIN = process.env.PUBLIC_SITE_ORIGIN || 'https://www.conciergenursesociety.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { full_name, email, phone, cohort_graduated } = req.body || {};
  if (!full_name || !email) {
    return res.status(400).json({ error: 'full_name and email are required' });
  }

  try {
    const brand = await loadBrandSettings(supabase);

    // Send the notification to whoever owns the brand's from_email — that's
    // Tracy's inbox for this project.
    const notifyTo = brand?.from_email || 'info@conciergenursesociety.com';
    const fromName = brand?.from_name || 'Concierge Nurse Business Society';
    const fromEmail = brand?.from_email || 'info@conciergenursesociety.com';

    const rows = [
      ['Name', full_name],
      ['Email', email],
      phone ? ['Phone', phone] : null,
      cohort_graduated ? ['Cohort Graduated', cohort_graduated] : null,
    ].filter(Boolean);

    const bodyHtml = `
      <p>A new Ambassador just signed up and is waiting for approval.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:18px 0;font-size:14px;line-height:1.5;">
        ${rows.map(([k, v]) => `
          <tr>
            <td style="padding:4px 16px 4px 0;color:#6b6b6b;font-weight:600;">${escapeHtml(k)}</td>
            <td style="padding:4px 0;color:#1a1a1a;">${escapeHtml(String(v))}</td>
          </tr>
        `).join('')}
      </table>
      <p style="margin-top:24px;">
        <a href="${SITE_ORIGIN}/admin/ambassadors"
           style="display:inline-block;background:#0b1b32;color:#c9a84c;padding:12px 20px;text-decoration:none;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;font-size:12px;">
           Review in Admin →
        </a>
      </p>
      <p style="color:#9b9b9b;font-size:12px;margin-top:32px;">
        Approve or pause them from the Ambassadors admin. They'll be pending until you activate their account, and their referral code gets assigned the moment you do.
      </p>
    `;

    const html = wrapInBrandTemplate({ body: bodyHtml, brand, unsubscribeUrl: null });
    const subject = `New Ambassador: ${full_name}`;

    const sendResult = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: notifyTo,
      subject,
      html,
    });

    if (sendResult.error) {
      console.error('Resend error on new-ambassador notify:', sendResult.error);
      return res.status(500).json({ error: sendResult.error.message || 'Email send failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('new-ambassador notify error:', err);
    return res.status(500).json({ error: err.message || 'Unknown error' });
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

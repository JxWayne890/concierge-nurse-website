// Shared email-building helpers. Prefixed with `_` so Vercel treats it as
// private (not exposed as a route).

import { wrapInBrandTemplate } from '../src/lib/emailBrand.js';

const SITE_ORIGIN = process.env.PUBLIC_SITE_ORIGIN || 'https://www.conciergenursesociety.com';

export async function loadBrandSettings(supabase) {
  try {
    const { data } = await supabase.from('brand_settings').select('*').limit(1).maybeSingle();
    return data || null;
  } catch (err) {
    console.error('Failed to load brand settings:', err);
    return null;
  }
}

export function personalizeText(text, contact) {
  if (!text) return '';
  return String(text)
    .replace(/\{firstName\}/g, contact.first_name || 'there')
    .replace(/\{lastName\}/g, contact.last_name || '')
    .replace(/\{email\}/g, contact.email || '');
}

export function buildCampaignEmailHtml({ body, contact, campaignId, recipientId, brand }) {
  const personalized = personalizeText(body || '', contact);
  const trackedBody = wrapLinksForTracking(personalized, { recipientId });
  const unsubscribeUrl = unsubscribeUrlFor({ contactId: contact.id, campaignId });
  const wrapped = wrapInBrandTemplate({ body: trackedBody, brand, unsubscribeUrl });
  const pixel = `<img src="${SITE_ORIGIN}/api/track/open?rid=${recipientId}" width="1" height="1" alt="" style="display:none;border:0;" />`;
  return wrapped + pixel;
}

export function buildSequenceEmailHtml({ body, contact, sequenceId, brand }) {
  const personalized = personalizeText(body || '', contact);
  const unsubscribeUrl = unsubscribeUrlFor({ contactId: contact.id, sequenceId });
  return wrapInBrandTemplate({ body: personalized, brand, unsubscribeUrl });
}

function unsubscribeUrlFor({ contactId, campaignId, sequenceId }) {
  const params = [`id=${contactId}`];
  if (campaignId) params.push(`campaign=${campaignId}`);
  if (sequenceId) params.push(`sequence=${sequenceId}`);
  return `${SITE_ORIGIN}/api/unsubscribe?${params.join('&')}`;
}

export function wrapLinksForTracking(html, { recipientId }) {
  if (!html || !recipientId) return html || '';
  return html.replace(/<a\b([^>]*?)href=(["'])([^"']+)\2([^>]*)>/gi, (match, pre, quote, url, post) => {
    if (/data-skip-tracking=/i.test(pre + post)) return match;
    if (/^(mailto:|tel:|#)/i.test(url)) return match;
    if (url.includes('/api/unsubscribe') || url.includes('/api/track/')) return match;
    const wrapped = `${SITE_ORIGIN}/api/track/click?rid=${recipientId}&url=${encodeURIComponent(url)}`;
    return `<a${pre}href=${quote}${wrapped}${quote}${post}>`;
  });
}

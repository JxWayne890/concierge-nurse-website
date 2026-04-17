// Shared brand-email template. Pure JS — no Node or browser APIs — so it can
// be imported from both Vercel serverless functions (api/) and the admin UI.

export const DEFAULT_BRAND = {
  business_name: 'Concierge Nurse Business Society',
  logo_url: null,
  photo_url: null,
  from_name: 'Concierge Nurse Business Society',
  from_email: 'hello@conciergenursesociety.com',
  brand_color: '#C9A84C',
  footer_text: 'Concierge Nurse Business Society',
  website_url: 'https://www.conciergenursesociety.com',
  social_facebook: null,
  social_instagram: null,
  social_linkedin: null,
};

export function mergeBrand(brand) {
  return { ...DEFAULT_BRAND, ...(brand || {}) };
}

export function wrapInBrandTemplate({ body, brand, unsubscribeUrl }) {
  const b = mergeBrand(brand);
  return [
    `<div style="max-width:600px;margin:0 auto;font-family:Georgia,serif;background:#ffffff;color:#1F2937;">`,
    brandLogoHeader(b),
    `<div style="padding:24px 20px 0;">${body || ''}</div>`,
    brandSignatureFooter(b, unsubscribeUrl),
    `</div>`,
  ].join('');
}

function brandLogoHeader(b) {
  if (!b.logo_url) return '';
  return `<div style="padding:24px 20px 0;text-align:center;">`
    + `<img src="${escapeAttr(b.logo_url)}" alt="${escapeAttr(b.business_name || '')}" style="max-height:60px;max-width:240px;display:inline-block;border:0;" />`
    + `</div>`;
}

function brandSignatureFooter(b, unsubscribeUrl) {
  const photoCell = b.photo_url
    ? `<td style="width:70px;vertical-align:top;padding-right:16px;">`
      + `<img src="${escapeAttr(b.photo_url)}" width="56" height="56" style="border-radius:50%;display:block;border:0;" alt="" />`
      + `</td>`
    : '';
  const websiteLine = b.website_url
    ? `<p style="margin:4px 0 0;font-size:12px;"><a href="${escapeAttr(b.website_url)}" data-skip-tracking="1" style="color:${escapeAttr(b.brand_color || '#C9A84C')};text-decoration:none;">${escapeHtml(stripProtocol(b.website_url))}</a></p>`
    : '';
  const unsubscribeLine = unsubscribeUrl
    ? `<p style="margin:24px 0 0;text-align:center;font-size:11px;color:#999999;">`
      + `<a href="${escapeAttr(unsubscribeUrl)}" data-skip-tracking="1" style="color:#999999;text-decoration:underline;">Unsubscribe</a>`
      + `</p>`
    : '';
  return `<div style="margin:40px 20px 0;padding:24px 0 20px;border-top:1px solid #E5E7EB;">`
    + `<table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;border-collapse:collapse;">`
    + `<tr>`
    + photoCell
    + `<td style="vertical-align:top;">`
    + `<p style="margin:0;font-size:14px;color:#0A1628;font-weight:bold;font-family:Georgia,serif;">${escapeHtml(b.from_name || '')}</p>`
    + `<p style="margin:4px 0 0;font-size:13px;color:#6B7280;">${escapeHtml(b.footer_text || '')}</p>`
    + websiteLine
    + `</td>`
    + `</tr>`
    + `</table>`
    + buildSocialLinks(b)
    + unsubscribeLine
    + `</div>`;
}

function buildSocialLinks(b) {
  const entries = [
    ['Facebook', b.social_facebook],
    ['Instagram', b.social_instagram],
    ['LinkedIn', b.social_linkedin],
  ].filter(([, url]) => !!url);
  if (entries.length === 0) return '';
  const color = b.brand_color || '#C9A84C';
  const links = entries
    .map(([label, url]) =>
      `<a href="${escapeAttr(url)}" data-skip-tracking="1" style="color:${escapeAttr(color)};font-size:12px;text-decoration:none;margin:0 8px;">${label}</a>`
    )
    .join('');
  return `<p style="margin:16px 0 0;text-align:center;">${links}</p>`;
}

function stripProtocol(url) {
  return String(url || '').replace(/^https?:\/\//i, '').replace(/\/$/, '');
}

function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(s) {
  return escapeHtml(s);
}

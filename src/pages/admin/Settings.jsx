import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';
import ImageUpload from '../../components/admin/ImageUpload';

const DEFAULT_BRAND_FORM = {
  business_name: 'Concierge Nurse Business Society',
  logo_url: '',
  photo_url: '',
  from_name: 'Concierge Nurse Business Society',
  from_email: 'hello@conciergenursesociety.com',
  brand_color: '#C9A84C',
  footer_text: 'Concierge Nurse Business Society',
  website_url: 'https://www.conciergenursesociety.com',
  social_facebook: '',
  social_instagram: '',
  social_linkedin: '',
};

export default function Settings() {
  const { session } = useAuth();
  const [brand, setBrand] = useState(DEFAULT_BRAND_FORM);
  const [brandRowId, setBrandRowId] = useState(null);
  const [brandLoading, setBrandLoading] = useState(true);
  const [brandSaving, setBrandSaving] = useState(false);
  const [brandError, setBrandError] = useState('');

  const [profile, setProfile] = useState({
    businessName: '',
    timezone: 'ET',
  });
  const [integrations, setIntegrations] = useState({
    resendKey: '',
    twilioSid: '',
    twilioToken: '',
    twilioPhone: '',
  });
  const [saved, setSaved] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    async function loadBrand() {
      const { data } = await supabase.from('brand_settings').select('*').limit(1).maybeSingle();
      if (data) {
        setBrandRowId(data.id);
        setBrand({
          business_name: data.business_name || DEFAULT_BRAND_FORM.business_name,
          logo_url: data.logo_url || '',
          photo_url: data.photo_url || '',
          from_name: data.from_name || DEFAULT_BRAND_FORM.from_name,
          from_email: data.from_email || DEFAULT_BRAND_FORM.from_email,
          brand_color: data.brand_color || DEFAULT_BRAND_FORM.brand_color,
          footer_text: data.footer_text || DEFAULT_BRAND_FORM.footer_text,
          website_url: data.website_url || DEFAULT_BRAND_FORM.website_url,
          social_facebook: data.social_facebook || '',
          social_instagram: data.social_instagram || '',
          social_linkedin: data.social_linkedin || '',
        });
      }
      setBrandLoading(false);
    }
    loadBrand();

    setProfile({
      businessName: localStorage.getItem('cnbs_business_name') || '',
      timezone: localStorage.getItem('cnbs_timezone') || 'ET',
    });
    setIntegrations({
      resendKey: localStorage.getItem('cnbs_resend_key') || '',
      twilioSid: localStorage.getItem('cnbs_twilio_sid') || '',
      twilioToken: localStorage.getItem('cnbs_twilio_token') || '',
      twilioPhone: localStorage.getItem('cnbs_twilio_phone') || '',
    });
  }, []);

  async function saveBrand() {
    setBrandSaving(true);
    setBrandError('');
    const payload = {
      ...brand,
      logo_url: brand.logo_url || null,
      photo_url: brand.photo_url || null,
      social_facebook: brand.social_facebook || null,
      social_instagram: brand.social_instagram || null,
      social_linkedin: brand.social_linkedin || null,
      updated_at: new Date().toISOString(),
    };

    let result;
    if (brandRowId) {
      result = await supabase.from('brand_settings').update(payload).eq('id', brandRowId).select().single();
    } else {
      result = await supabase.from('brand_settings').insert(payload).select().single();
      if (result.data) setBrandRowId(result.data.id);
    }

    if (result.error) {
      setBrandError(result.error.message);
    } else {
      setSaved((s) => ({ ...s, brand: true }));
      setTimeout(() => setSaved((s) => ({ ...s, brand: false })), 2000);
    }
    setBrandSaving(false);
  }

  function saveProfile() {
    localStorage.setItem('cnbs_business_name', profile.businessName);
    localStorage.setItem('cnbs_timezone', profile.timezone);
    setSaved((s) => ({ ...s, profile: true }));
    setTimeout(() => setSaved((s) => ({ ...s, profile: false })), 2000);
  }

  function saveIntegration(key) {
    if (key === 'resend') {
      localStorage.setItem('cnbs_resend_key', integrations.resendKey);
    } else {
      localStorage.setItem('cnbs_twilio_sid', integrations.twilioSid);
      localStorage.setItem('cnbs_twilio_token', integrations.twilioToken);
      localStorage.setItem('cnbs_twilio_phone', integrations.twilioPhone);
    }
    setSaved((s) => ({ ...s, [key]: true }));
    setTimeout(() => setSaved((s) => ({ ...s, [key]: false })), 2000);
  }

  async function handleExport() {
    setExporting(true);
    const { data } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    const contacts = data || [];

    const headers = ['first_name', 'last_name', 'email', 'phone', 'lifecycle_stage', 'status', 'source', 'business_name', 'annual_revenue', 'created_at'];
    const csvRows = [headers.join(',')];
    contacts.forEach((c) => {
      csvRows.push(headers.map((h) => {
        const val = c[h] || '';
        return `"${String(val).replace(/"/g, '""')}"`;
      }).join(','));
    });

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-export-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setExporting(false);
  }

  async function handleDeleteAll() {
    setDeleting(true);
    await supabase.from('activity_log').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('notes').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('contact_tags').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('contacts').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    setDeleting(false);
    setDeleteConfirm(false);
  }

  function setBrandField(patch) {
    setBrand((b) => ({ ...b, ...patch }));
  }

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-navy mb-8">Settings</h1>

      <div className="space-y-8 max-w-2xl">
        {/* Branding */}
        <div className="bg-white border border-cream-dark p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40">Branding</h3>
            <span className="text-[0.6rem] text-charcoal/40">Used in every email you send</span>
          </div>

          {brandLoading ? (
            <div className="py-8 text-center">
              <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-slate text-xs">Loading brand settings…</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Business Name</label>
                <input
                  type="text"
                  value={brand.business_name}
                  onChange={(e) => setBrandField({ business_name: e.target.value })}
                  className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <ImageUpload
                  label="Logo"
                  shape="square"
                  currentUrl={brand.logo_url}
                  onUpload={(url) => setBrandField({ logo_url: url })}
                  onClear={() => setBrandField({ logo_url: '' })}
                  helpText="Displayed at the top of every email (max ~240×60)."
                />
                <ImageUpload
                  label="Profile Photo"
                  shape="circle"
                  currentUrl={brand.photo_url}
                  onUpload={(url) => setBrandField({ photo_url: url })}
                  onClear={() => setBrandField({ photo_url: '' })}
                  helpText="Shown in the email signature (square crop works best)."
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Default From Name</label>
                  <input
                    type="text"
                    value={brand.from_name}
                    onChange={(e) => setBrandField({ from_name: e.target.value })}
                    className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Default From Email</label>
                  <input
                    type="email"
                    value={brand.from_email}
                    onChange={(e) => setBrandField({ from_email: e.target.value })}
                    className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Brand Color</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={brand.brand_color || '#C9A84C'}
                      onChange={(e) => setBrandField({ brand_color: e.target.value })}
                      className="h-[46px] w-14 border border-cream-dark cursor-pointer"
                    />
                    <input
                      type="text"
                      value={brand.brand_color}
                      onChange={(e) => setBrandField({ brand_color: e.target.value })}
                      className="flex-1 px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Website URL</label>
                  <input
                    type="url"
                    value={brand.website_url}
                    onChange={(e) => setBrandField({ website_url: e.target.value })}
                    className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Footer Text</label>
                <input
                  type="text"
                  value={brand.footer_text}
                  onChange={(e) => setBrandField({ footer_text: e.target.value })}
                  className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <p className="text-[0.65rem] text-charcoal/40 mt-1">Small line of text shown next to your signature at the bottom of every email.</p>
              </div>

              <div className="pt-2">
                <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40 mb-2">Social Links (optional)</p>
                <div className="space-y-3">
                  <input
                    type="url"
                    placeholder="Facebook URL"
                    value={brand.social_facebook}
                    onChange={(e) => setBrandField({ social_facebook: e.target.value })}
                    className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="url"
                    placeholder="Instagram URL"
                    value={brand.social_instagram}
                    onChange={(e) => setBrandField({ social_instagram: e.target.value })}
                    className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="url"
                    placeholder="LinkedIn URL"
                    value={brand.social_linkedin}
                    onChange={(e) => setBrandField({ social_linkedin: e.target.value })}
                    className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              {brandError && (
                <div className="bg-red-50 border border-red-200 p-3 text-red-700 text-sm">{brandError}</div>
              )}

              <button onClick={saveBrand} disabled={brandSaving} className="btn-primary text-sm">
                {brandSaving ? 'Saving…' : saved.brand ? 'Saved!' : 'Save Branding'}
              </button>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="bg-white border border-cream-dark p-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Business Name</label>
              <input
                type="text"
                value={profile.businessName}
                onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Email</label>
              <input
                type="text"
                value={session?.user?.email || ''}
                readOnly
                className="w-full px-4 py-3 border border-cream-dark bg-cream text-sm text-slate"
              />
            </div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Timezone</label>
              <select
                value={profile.timezone}
                onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
                className="w-full px-4 py-3 border border-cream-dark bg-white text-sm text-charcoal focus:outline-none focus:border-gold"
              >
                <option value="ET">Eastern Time (ET)</option>
                <option value="CT">Central Time (CT)</option>
                <option value="MT">Mountain Time (MT)</option>
                <option value="PT">Pacific Time (PT)</option>
              </select>
            </div>
            <button onClick={saveProfile} className="btn-primary text-sm">
              {saved.profile ? 'Saved!' : 'Save Profile'}
            </button>
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white border border-cream-dark p-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-4">Integrations</h3>

          {/* Resend */}
          <div className="mb-6 pb-6 border-b border-cream-dark">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-charcoal">Resend (Email)</span>
              <span className={`inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase border ${
                integrations.resendKey ? 'bg-green-50 text-green-700 border-green-200' : 'bg-cream text-charcoal/40 border-cream-dark'
              }`}>
                {integrations.resendKey ? 'Connected' : 'Not configured'}
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">API Key</label>
                <input
                  type="password"
                  value={integrations.resendKey}
                  onChange={(e) => setIntegrations({ ...integrations, resendKey: e.target.value })}
                  placeholder="re_..."
                  className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <button onClick={() => saveIntegration('resend')} className="btn-navy text-sm">
                {saved.resend ? 'Saved!' : 'Save'}
              </button>
            </div>
          </div>

          {/* Twilio */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-charcoal">Twilio (SMS)</span>
              <span className={`inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase border ${
                integrations.twilioSid ? 'bg-green-50 text-green-700 border-green-200' : 'bg-cream text-charcoal/40 border-cream-dark'
              }`}>
                {integrations.twilioSid ? 'Connected' : 'Not configured'}
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Account SID</label>
                <input
                  type="password"
                  value={integrations.twilioSid}
                  onChange={(e) => setIntegrations({ ...integrations, twilioSid: e.target.value })}
                  className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Auth Token</label>
                <input
                  type="password"
                  value={integrations.twilioToken}
                  onChange={(e) => setIntegrations({ ...integrations, twilioToken: e.target.value })}
                  className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Phone Number</label>
                <input
                  type="text"
                  value={integrations.twilioPhone}
                  onChange={(e) => setIntegrations({ ...integrations, twilioPhone: e.target.value })}
                  placeholder="+1234567890"
                  className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <button onClick={() => saveIntegration('twilio')} className="btn-navy text-sm">
                {saved.twilio ? 'Saved!' : 'Save'}
              </button>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-white border border-cream-dark p-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-4">Data Management</h3>
          <div className="flex flex-wrap gap-3">
            <button onClick={handleExport} disabled={exporting} className="btn-navy text-sm">
              {exporting ? 'Exporting...' : 'Export All Contacts'}
            </button>
            {deleteConfirm ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-red-600">Are you sure? This cannot be undone.</span>
                <button onClick={handleDeleteAll} disabled={deleting} className="px-4 py-2.5 bg-red-600 text-white text-sm hover:bg-red-700 transition-colors">
                  {deleting ? 'Deleting...' : 'Yes, Delete All'}
                </button>
                <button onClick={() => setDeleteConfirm(false)} className="btn-navy text-sm">Cancel</button>
              </div>
            ) : (
              <button onClick={() => setDeleteConfirm(true)} className="px-4 py-2.5 border border-red-300 text-red-600 text-sm hover:bg-red-50 transition-colors">
                Delete All Contacts
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

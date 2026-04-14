import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../lib/AuthContext';

export default function Settings() {
  const { session } = useAuth();
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

  function saveProfile() {
    localStorage.setItem('cnbs_business_name', profile.businessName);
    localStorage.setItem('cnbs_timezone', profile.timezone);
    setSaved((s) => ({ ...s, profile: true }));
    setTimeout(() => setSaved((s) => ({ ...s, profile: false })), 2000);
  }

  function saveIntegration(key) {
    const map = {
      resend: ['cnbs_resend_key', integrations.resendKey],
      twilio: [null, null],
    };
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

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-navy mb-8">Settings</h1>

      <div className="space-y-8 max-w-2xl">
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

import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '../../lib/supabase';

function smsSegments(len) {
  if (len <= 160) return 1;
  return Math.ceil(len / 153);
}

export default function NewSMSCampaign() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [tagCounts, setTagCounts] = useState({});
  const [form, setForm] = useState({ name: '', body: '' });
  const [selectedTags, setSelectedTags] = useState([]);
  const [schedule, setSchedule] = useState('now');
  const [scheduledAt, setScheduledAt] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: tagData } = await supabase.from('tags').select('*').order('name');
      setTags(tagData || []);

      const { data: ctData } = await supabase.from('contact_tags').select('tag_id');
      const counts = {};
      (ctData || []).forEach((r) => { counts[r.tag_id] = (counts[r.tag_id] || 0) + 1; });
      setTagCounts(counts);
    }
    load();
  }, []);

  function toggleTag(id) {
    setSelectedTags((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);
  }

  function totalRecipients() {
    return selectedTags.reduce((sum, id) => sum + (tagCounts[id] || 0), 0);
  }

  async function handleSubmit(asDraft = false) {
    if (!form.name.trim()) return;
    setSaving(true);

    let status = 'draft';
    let sent_at = null;
    let scheduled_at = null;

    if (!asDraft) {
      if (schedule === 'now') {
        status = 'sent';
        sent_at = new Date().toISOString();
        console.log(`STUB: Would send SMS via Twilio to ${totalRecipients()} recipients`);
      } else {
        status = 'scheduled';
        scheduled_at = scheduledAt || null;
      }
    }

    const { data, error } = await supabase.from('campaigns').insert({
      name: form.name.trim(),
      type: 'sms',
      status,
      body: form.body,
      recipient_tag_ids: selectedTags,
      recipient_count: totalRecipients(),
      sent_at,
      scheduled_at,
    }).select().single();

    if (data) {
      await supabase.from('campaign_stats').insert({ campaign_id: data.id });
      navigate(`/admin/campaigns/${data.id}`);
    } else {
      console.error('Error creating campaign:', error);
      setSaving(false);
    }
  }

  const charCount = form.body.length;
  const segments = smsSegments(charCount);

  return (
    <div>
      <Link to="/admin/campaigns" className="inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-navy no-underline mb-6 transition-colors">
        <ArrowLeft size={14} /> Back to campaigns
      </Link>

      <h1 className="font-heading text-2xl font-bold text-navy mb-8">New SMS Campaign</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left — Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-cream-dark p-6 space-y-4">
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Campaign Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Message Body</label>
              <textarea
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors resize-none"
              />
              <div className="flex items-center justify-between mt-2">
                <span className={`text-xs ${charCount > 160 ? 'text-amber-600' : 'text-charcoal/40'}`}>
                  {charCount}/160
                </span>
                <span className="text-xs text-charcoal/40">
                  {segments} segment{segments !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Sidebar */}
        <div className="space-y-6">
          {/* Recipients */}
          <div className="bg-white border border-cream-dark p-6">
            <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-2">Recipients</h3>
            <p className="text-[0.6rem] text-charcoal/40 mb-4">Only contacts with phone numbers will receive SMS.</p>
            {tags.length === 0 ? (
              <p className="text-slate text-sm">No segments created yet.</p>
            ) : (
              <div className="space-y-2">
                {tags.map((tag) => (
                  <label key={tag.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag.id)}
                      onChange={() => toggleTag(tag.id)}
                      className="accent-gold"
                    />
                    <span className="text-sm text-charcoal">{tag.name}</span>
                    <span className="text-[0.65rem] text-charcoal/40 ml-auto">{tagCounts[tag.id] || 0}</span>
                  </label>
                ))}
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-cream-dark">
              <p className="text-sm text-charcoal font-semibold">{totalRecipients()} recipients</p>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white border border-cream-dark p-6">
            <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-4">Schedule</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="schedule" value="now" checked={schedule === 'now'} onChange={() => setSchedule('now')} className="accent-gold" />
                <span className="text-sm text-charcoal">Send Now</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="schedule" value="later" checked={schedule === 'later'} onChange={() => setSchedule('later')} className="accent-gold" />
                <span className="text-sm text-charcoal">Schedule</span>
              </label>
              {schedule === 'later' && (
                <input
                  type="datetime-local"
                  value={scheduledAt}
                  onChange={(e) => setScheduledAt(e.target.value)}
                  className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                />
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={() => handleSubmit(false)}
              disabled={saving || !form.name.trim()}
              className="btn-primary text-sm w-full"
            >
              {saving ? 'Saving...' : schedule === 'now' ? 'Send Campaign' : 'Schedule Campaign'}
            </button>
            <button
              onClick={() => handleSubmit(true)}
              disabled={saving || !form.name.trim()}
              className="btn-navy text-sm w-full"
            >
              Save as Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

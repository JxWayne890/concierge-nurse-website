import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function CampaignDetail() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [stats, setStats] = useState(null);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [
        { data: campaignData },
        { data: statsData },
        { data: tagData },
      ] = await Promise.all([
        supabase.from('campaigns').select('*').eq('id', id).single(),
        supabase.from('campaign_stats').select('*').eq('campaign_id', id).single(),
        supabase.from('tags').select('*'),
      ]);

      setCampaign(campaignData);
      setStats(statsData);
      setTags(tagData || []);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate text-sm">Loading...</p>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div>
        <p className="text-slate text-sm mb-4">Campaign not found.</p>
        <Link to="/admin/campaigns" className="text-gold text-sm">Back to campaigns</Link>
      </div>
    );
  }

  const isEmail = campaign.type === 'email';
  const s = stats || {};

  function rate(num, denom) {
    if (!denom || denom === 0) return '0%';
    return ((num / denom) * 100).toFixed(1) + '%';
  }

  const recipientTagNames = (campaign.recipient_tag_ids || [])
    .map((tid) => tags.find((t) => t.id === tid)?.name)
    .filter(Boolean);

  const STATUS_COLORS = {
    draft: 'bg-cream text-charcoal/60 border-cream-dark',
    scheduled: 'bg-blue-50 text-blue-700 border-blue-200',
    sent: 'bg-green-50 text-green-700 border-green-200',
  };

  return (
    <div>
      <Link to="/admin/campaigns" className="inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-navy no-underline mb-6 transition-colors">
        <ArrowLeft size={14} /> Back to campaigns
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy">{campaign.name}</h1>
          <div className="flex items-center gap-3 mt-2">
            <span className={`inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase border ${
              isEmail ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-purple-50 text-purple-700 border-purple-200'
            }`}>
              {campaign.type}
            </span>
            <span className={`inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase border ${STATUS_COLORS[campaign.status] || STATUS_COLORS.draft}`}>
              {campaign.status}
            </span>
            {campaign.sent_at && (
              <span className="text-slate text-xs">Sent {new Date(campaign.sent_at).toLocaleString()}</span>
            )}
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className={`grid ${isEmail ? 'sm:grid-cols-3 lg:grid-cols-6' : 'sm:grid-cols-2 lg:grid-cols-4'} gap-4 mb-8`}>
        <div className="bg-white border border-cream-dark p-4">
          <p className="text-2xl font-bold text-navy">{s.sent || 0}</p>
          <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Sent</p>
        </div>
        <div className="bg-white border border-cream-dark p-4">
          <p className="text-2xl font-bold text-navy">{s.delivered || 0}</p>
          <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Delivered</p>
        </div>
        {isEmail ? (
          <>
            <div className="bg-white border border-cream-dark p-4">
              <p className="text-2xl font-bold text-navy">{s.opened || 0}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Opened</p>
            </div>
            <div className="bg-white border border-cream-dark p-4">
              <p className="text-2xl font-bold text-navy">{s.clicked || 0}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Clicked</p>
            </div>
            <div className="bg-white border border-cream-dark p-4">
              <p className="text-2xl font-bold text-navy">{s.bounced || 0}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Bounced</p>
            </div>
            <div className="bg-white border border-cream-dark p-4">
              <p className="text-2xl font-bold text-navy">{s.unsubscribed || 0}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Unsubscribed</p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white border border-cream-dark p-4">
              <p className="text-2xl font-bold text-navy">{s.bounced || 0}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Failed</p>
            </div>
            <div className="bg-white border border-cream-dark p-4">
              <p className="text-2xl font-bold text-navy">{s.unsubscribed || 0}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Unsubscribed</p>
            </div>
          </>
        )}
      </div>

      {/* Metrics */}
      {isEmail && (
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-cream-dark p-4">
            <p className="text-xl font-bold text-gold">{rate(s.opened, s.delivered)}</p>
            <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Open Rate</p>
          </div>
          <div className="bg-white border border-cream-dark p-4">
            <p className="text-xl font-bold text-gold">{rate(s.clicked, s.delivered)}</p>
            <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Click Rate</p>
          </div>
          <div className="bg-white border border-cream-dark p-4">
            <p className="text-xl font-bold text-gold">{rate(s.delivered, s.sent)}</p>
            <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Delivery Rate</p>
          </div>
        </div>
      )}

      {/* Info section */}
      <div className="bg-white border border-cream-dark p-6">
        <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-4">Campaign Details</h3>
        <div className="space-y-3 text-sm">
          {isEmail && campaign.subject && (
            <div>
              <span className="text-charcoal/40">Subject:</span>{' '}
              <span className="text-charcoal">{campaign.subject}</span>
            </div>
          )}
          {isEmail && campaign.from_email && (
            <div>
              <span className="text-charcoal/40">From:</span>{' '}
              <span className="text-charcoal">{campaign.from_name} &lt;{campaign.from_email}&gt;</span>
            </div>
          )}
          {!isEmail && campaign.body && (
            <div>
              <span className="text-charcoal/40">Message:</span>{' '}
              <span className="text-charcoal">{campaign.body}</span>
            </div>
          )}
          <div>
            <span className="text-charcoal/40">Recipients:</span>{' '}
            <span className="text-charcoal">{campaign.recipient_count || 0} contacts</span>
          </div>
          {recipientTagNames.length > 0 && (
            <div>
              <span className="text-charcoal/40">Segments:</span>{' '}
              <span className="flex flex-wrap gap-2 mt-1">
                {recipientTagNames.map((name) => (
                  <span key={name} className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase bg-cream text-charcoal/60 border border-cream-dark">
                    {name}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

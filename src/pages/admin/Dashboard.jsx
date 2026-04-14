import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus, Mail, TrendingUp, RefreshCw } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, thisWeek: 0, subscribers: 0, consulting: 0 });
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (isInitial = false) => {
    if (isInitial) setLoading(true);
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const [
      { count: total },
      { count: thisWeek },
      { data: recent },
    ] = await Promise.all([
      supabase.from('contacts').select('*', { count: 'exact', head: true }),
      supabase.from('contacts').select('*', { count: 'exact', head: true }).gte('created_at', weekAgo),
      supabase.from('contacts').select('*').order('created_at', { ascending: false }).limit(10),
    ]);

    const { data: tagCounts } = await supabase
      .from('contact_tags')
      .select('tag_id, tags(name)')
      .order('created_at', { ascending: false });

    const subscriberCount = tagCounts?.filter(
      (t) => t.tags?.name === 'Newsletter Subscriber' || t.tags?.name === 'Community Signup'
    ).length || 0;

    const consultingCount = tagCounts?.filter(
      (t) => t.tags?.name === 'Consulting Inquiry'
    ).length || 0;

    setStats({ total: total || 0, thisWeek: thisWeek || 0, subscribers: subscriberCount, consulting: consultingCount });
    setRecentLeads(recent || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load(true);

    // Realtime: refresh when contacts table changes
    const channel = supabase
      .channel('dashboard-contacts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, () => {
        load();
      })
      .subscribe();

    // Fallback: poll every 10 seconds in case realtime isn't connected
    const interval = setInterval(() => load(), 10000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, [load]);

  if (loading) {
    return <p className="text-slate text-sm">Loading dashboard...</p>;
  }

  const statCards = [
    { label: 'Total Leads', value: stats.total, icon: Users, color: 'text-navy' },
    { label: 'This Week', value: stats.thisWeek, icon: UserPlus, color: 'text-green-600' },
    { label: 'Subscribers', value: stats.subscribers, icon: Mail, color: 'text-blue-600' },
    { label: 'Consulting', value: stats.consulting, icon: TrendingUp, color: 'text-gold' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy">Dashboard</h1>
        <button onClick={load} className="flex items-center gap-2 text-sm text-charcoal/40 hover:text-navy transition-colors">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {statCards.map((s) => (
          <div key={s.label} className="bg-white border border-cream-dark p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40">
                {s.label}
              </span>
              <s.icon size={18} className={s.color} />
            </div>
            <p className="font-heading text-3xl font-bold text-navy">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Recent leads */}
      <div className="bg-white border border-cream-dark">
        <div className="px-6 py-4 border-b border-cream-dark flex items-center justify-between">
          <h2 className="font-heading text-lg font-bold text-navy">Recent Leads</h2>
          <Link to="/admin/leads" className="text-gold text-sm font-semibold no-underline hover:underline">
            View All
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-slate text-sm">No leads yet. They will appear here once someone submits a form.</p>
          </div>
        ) : (
          <div className="divide-y divide-cream-dark">
            {recentLeads.map((lead) => (
              <Link
                key={lead.id}
                to={`/admin/leads/${lead.id}`}
                className="flex items-center justify-between px-6 py-4 hover:bg-cream/50 transition-colors no-underline"
              >
                <div>
                  <p className="text-navy font-semibold text-sm">
                    {lead.first_name || ''} {lead.last_name || ''}
                    {!lead.first_name && !lead.last_name && <span className="text-slate italic">No name</span>}
                  </p>
                  <p className="text-slate text-xs">{lead.email}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase bg-cream text-charcoal/60 border border-cream-dark">
                    {lead.lifecycle_stage || 'Explorer'}
                  </span>
                  <p className="text-slate text-[0.65rem] mt-1">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

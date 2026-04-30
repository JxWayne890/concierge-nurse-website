import { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, UserPlus, Mail, TrendingUp, RefreshCw, Eye, BarChart3, Globe, GitBranch } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const RANGE_OPTIONS = [
  { label: '7 Days', value: 7 },
  { label: '30 Days', value: 30 },
  { label: '90 Days', value: 90 },
];

function daysAgo(n) {
  return new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, thisWeek: 0, subscribers: 0, consulting: 0 });
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasLoaded = useRef(false);

  // Pipeline state
  const [pipelineSummary, setPipelineSummary] = useState([]);

  // Analytics state
  const [range, setRange] = useState(7);
  const [viewStats, setViewStats] = useState({ today: 0, period: 0, unique: 0 });
  const [chartData, setChartData] = useState([]);
  const [topPages, setTopPages] = useState([]);

  const loadLeads = useCallback(async () => {
    if (!hasLoaded.current) setLoading(true);
    const weekAgo = daysAgo(7);

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
    hasLoaded.current = true;
  }, []);

  const loadAnalytics = useCallback(async () => {
    const periodStart = daysAgo(range);
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    // Fetch page views for the period
    const { data: views } = await supabase
      .from('page_views')
      .select('path, created_at')
      .gte('created_at', periodStart)
      .order('created_at', { ascending: true });

    if (!views) {
      setViewStats({ today: 0, period: 0, unique: 0 });
      setChartData([]);
      setTopPages([]);
      return;
    }

    // Today count
    const todayCount = views.filter((v) => new Date(v.created_at) >= todayStart).length;

    // Unique paths (rough unique visitors proxy — unique path+day combos)
    const uniqueDays = new Set();
    views.forEach((v) => {
      const day = new Date(v.created_at).toDateString();
      uniqueDays.add(day);
    });

    setViewStats({
      today: todayCount,
      period: views.length,
      unique: uniqueDays.size,
    });

    // Build chart data — group by day
    const dayMap = {};
    // Pre-fill all days in range
    for (let i = range - 1; i >= 0; i--) {
      const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
      const key = d.toISOString().slice(0, 10);
      dayMap[key] = { date: key, count: 0 };
    }
    views.forEach((v) => {
      const key = v.created_at.slice(0, 10);
      if (dayMap[key]) dayMap[key].count++;
    });
    setChartData(Object.values(dayMap));

    // Top pages
    const pageCounts = {};
    views.forEach((v) => {
      pageCounts[v.path] = (pageCounts[v.path] || 0) + 1;
    });
    const sorted = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([path, count]) => ({ path, count }));
    setTopPages(sorted);
  }, [range]);

  useEffect(() => {
    loadLeads();

    const channel = supabase
      .channel('dashboard-contacts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, () => {
        loadLeads();
      })
      .subscribe();

    const interval = setInterval(() => loadLeads(), 10000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, [loadLeads]);

  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  // Load pipeline summary
  useEffect(() => {
    async function loadPipelines() {
      const { data: pipelines } = await supabase.from('pipelines').select('id, name, stages').order('created_at');
      if (!pipelines) return;

      const { data: allPc } = await supabase.from('pipeline_contacts').select('pipeline_id, stage');

      const summary = pipelines.map((p) => {
        const stages = typeof p.stages === 'string' ? JSON.parse(p.stages) : p.stages;
        const contacts = (allPc || []).filter((pc) => pc.pipeline_id === p.id);
        const stageCounts = {};
        stages.forEach((s) => { stageCounts[s] = 0; });
        contacts.forEach((pc) => {
          if (stageCounts[pc.stage] !== undefined) stageCounts[pc.stage]++;
        });
        return { id: p.id, name: p.name, stages, stageCounts, total: contacts.length };
      });

      setPipelineSummary(summary);
    }
    loadPipelines();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate text-sm">Loading dashboard...</p>
      </div>
    );
  }

  const maxChart = Math.max(...chartData.map((d) => d.count), 1);

  return (
    <div className="pb-20">
      <div className="flex items-end justify-between mb-12">
        <h1 className="avery-title text-5xl text-navy italic tracking-tight font-light">Daily Brief</h1>
        <p className="text-sm tracking-widest uppercase font-medium text-navy/70">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
        <button onClick={() => { loadLeads(); loadAnalytics(); }} className="flex items-center gap-2 text-xs font-light uppercase tracking-widest text-navy/30 hover:text-navy transition-colors">
          <RefreshCw size={12} /> Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-navy/10 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <Users size={64} strokeWidth={1} className="text-gold" />
          </div>
          <p className="text-xs tracking-widest uppercase font-semibold text-navy/70 mb-4">Total Contacts</p>
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading text-5xl text-navy tracking-tight group-hover:text-gold transition-colors duration-500">{stats.total}</h2>
            <span className="text-sm font-medium text-navy/60">Active</span>
          </div>
        </div>
        <div className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-navy/10 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <UserPlus size={64} strokeWidth={1} className="text-gold" />
          </div>
          <p className="text-xs tracking-widest uppercase font-semibold text-navy/70 mb-4">New This Week</p>
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading text-5xl text-navy tracking-tight group-hover:text-gold transition-colors duration-500">{stats.thisWeek}</h2>
            <span className="text-sm font-medium text-green-600/80">+{stats.thisWeek}%</span>
          </div>
        </div>
        <div className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-navy/10 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <Award size={64} strokeWidth={1} className="text-gold" />
          </div>
          <p className="text-xs tracking-widest uppercase font-semibold text-navy/70 mb-4">Newsletter</p>
          <h2 className="font-heading text-3xl text-navy tracking-tight group-hover:text-gold transition-colors duration-500 truncate mt-2">{stats.subscribers}</h2>
          <p className="text-sm font-medium text-navy/60 mt-2">Active Subscribers</p>
        </div>
        <div className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-navy/10 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <DollarSign size={64} strokeWidth={1} className="text-gold" />
          </div>
          <p className="text-xs tracking-widest uppercase font-semibold text-navy/70 mb-4">Consulting</p>
          <div className="flex items-baseline gap-3">
            <h2 className="font-heading text-5xl text-navy tracking-tight group-hover:text-gold transition-colors duration-500">{stats.consulting}</h2>
            <span className="text-sm font-medium text-amber-600/80">Inquiries</span>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex items-end justify-between mb-8 px-2">
          <h2 className="font-heading text-2xl text-navy italic font-light tracking-wide">Traffic & Engagement</h2>
          <div className="flex bg-white rounded-full p-1 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
            {RANGE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setRange(opt.value)}
                className={`px-5 py-2 text-[0.65rem] font-light uppercase tracking-widest rounded-full transition-all duration-500 ${
                  range === opt.value
                    ? 'bg-navy/5 text-navy font-medium'
                    : 'text-navy/30 hover:text-navy/60'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-navy/40">Today</span>
              <Eye size={16} strokeWidth={1.5} className="text-navy/30" />
            </div>
            <p className="font-heading text-4xl text-navy tracking-tight">{viewStats.today}</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-navy/40">Last {range} Days</span>
              <BarChart3 size={16} strokeWidth={1.5} className="text-navy/30" />
            </div>
            <p className="font-heading text-4xl text-navy tracking-tight">{viewStats.period}</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-navy/40">Active Days</span>
              <Globe size={16} strokeWidth={1.5} className="text-navy/30" />
            </div>
            <p className="font-heading text-4xl text-navy tracking-tight">{viewStats.unique}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <h3 className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-navy/40 mb-8">Daily Page Views</h3>
            {chartData.length === 0 ? (
              <p className="text-navy/50 font-medium text-sm text-center py-12">No data yet. Views will appear as visitors browse the site.</p>
            ) : (
              <div className="flex items-end gap-1 h-52">
                {chartData.map((d) => {
                  const height = maxChart > 0 ? (d.count / maxChart) * 100 : 0;
                  return (
                    <div key={d.date} className="flex-1 flex flex-col items-center group relative">
                      <div className="absolute bottom-full mb-3 hidden group-hover:block z-10">
                        <div className="bg-white shadow-xl text-navy text-[0.65rem] font-light tracking-wide px-3 py-2 rounded-lg border border-navy/5 whitespace-nowrap">
                          {formatDate(d.date)} &mdash; <span className="font-medium text-gold">{d.count} views</span>
                        </div>
                      </div>
                      <div
                        className="w-full bg-gold/20 group-hover:bg-gold/60 transition-all duration-300 rounded-t-sm min-h-[4px]"
                        style={{ height: `${Math.max(height, 2)}%` }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <h3 className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-navy/40 mb-8">Top Pages</h3>
            {topPages.length === 0 ? (
              <p className="text-navy/30 text-sm font-light italic">No data yet.</p>
            ) : (
              <div className="space-y-6">
                {topPages.map((p) => (
                  <div key={p.path} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-navy font-light tracking-wide truncate max-w-[75%]" title={p.path}>{p.path === '/' ? 'Homepage' : p.path}</span>
                      <span className="text-[0.65rem] font-medium text-navy/40 shrink-0">{p.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {pipelineSummary.length > 0 && (
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/10 col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-heading text-2xl text-navy tracking-tight">Lifecycle Stages</h3>
              <span className="text-sm tracking-widest uppercase font-semibold text-navy/50">Current Contacts</span>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {pipelineSummary.map((p) => (
                <div key={p.id}>
                  <h4 className="text-navy font-semibold mb-4">{p.name}</h4>
                  <div className="space-y-4">
                    {p.stages.map((stage) => {
                      const count = p.stageCounts[stage] || 0;
                      return (
                        <div key={stage} className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold tracking-wide text-navy">{stage}</span>
                          <span className="text-sm font-bold text-navy">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex items-end justify-between mb-6 px-2">
          <h2 className="font-heading text-2xl text-navy italic font-light tracking-wide">Recent Activity</h2>
          <Link to="/admin/leads" className="text-[0.65rem] uppercase tracking-widest font-light text-gold hover:text-navy transition-colors no-underline">
            View All
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <p className="text-navy/30 text-sm italic font-light">No leads yet. They will appear here once someone submits a form.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5 overflow-hidden">
            <div className="divide-y divide-navy/5">
              {recentLeads.map((lead) => (
                <Link
                  key={lead.id}
                  to={`/admin/leads/${lead.id}`}
                  className="group flex items-center justify-between px-8 py-6 hover:bg-[#FDFCFB] transition-colors duration-500 no-underline"
                >
                  <div>
                    <p className="font-heading text-lg text-navy tracking-wide group-hover:text-gold transition-colors duration-500">
                      {lead.first_name || ''} {lead.last_name || ''}
                      {!lead.first_name && !lead.last_name && <span className="text-navy/30 italic font-light">No name</span>}
                    </p>
                    <p className="text-navy/40 text-xs font-light mt-1 tracking-wide">{lead.email}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

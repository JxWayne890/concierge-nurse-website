import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Tag, Send, Settings, LogOut, GitBranch, Workflow, FileText, BookUser, Award, HandCoins, Handshake, Receipt } from 'lucide-react';
import { supabase } from '../lib/supabase';

const navItems = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Leads', path: '/admin/leads', icon: Users },
  { label: 'Pipelines', path: '/admin/pipelines', icon: GitBranch },
  { label: 'Segments', path: '/admin/segments', icon: Tag },
  { label: 'Campaigns', path: '/admin/campaigns', icon: Send },
  { label: 'Sequences', path: '/admin/sequences', icon: Workflow },
  { label: 'Blog', path: '/admin/blog', icon: FileText },
  { label: 'Directory', path: '/admin/directory', icon: BookUser },
  { label: 'Ambassadors', path: '/admin/ambassadors', icon: Award, countKey: 'pendingAmbassadors' },
  { label: 'Referrals', path: '/admin/referrals', icon: Handshake, countKey: 'pendingReferrals' },
  { label: 'Enrollments', path: '/admin/enrollments', icon: Receipt },
  { label: 'Payouts', path: '/admin/payouts', icon: HandCoins, countKey: 'duePayouts' },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ pendingAmbassadors: 0, pendingReferrals: 0, duePayouts: 0 });

  useEffect(() => {
    let cancelled = false;

    async function loadCounts() {
      const [ambRes, refRes, payRes] = await Promise.all([
        supabase.from('ambassadors').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('referrals').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('payouts').select('*', { count: 'exact', head: true }).eq('status', 'due'),
      ]);
      if (cancelled) return;
      setCounts({
        pendingAmbassadors: ambRes.count || 0,
        pendingReferrals: refRes.count || 0,
        duePayouts: payRes.count || 0,
      });
    }

    loadCounts();
    const interval = setInterval(loadCounts, 30000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#F0ECE4] flex font-sans selection:bg-gold/20">
      {/* Floating Minimalist Sidebar */}
      <aside className="w-64 flex flex-col shrink-0 border-r border-navy/10 bg-[#F0ECE4]">
        <div className="p-10 pb-6">
          <Link to="/" className="no-underline flex flex-col items-start">
            <span className="avery-title text-4xl text-navy tracking-tight mb-2">CNBS</span>
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-navy/80">Concierge Desk</span>
          </Link>
        </div>

        <nav className="flex-1 py-8 px-8 space-y-3 overflow-y-auto">
          {navItems.map((item) => {
            const count = item.countKey ? counts[item.countKey] : 0;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/admin'}
                className={({ isActive }) =>
                  `group flex items-center gap-4 py-2 no-underline transition-all duration-500 ${
                    isActive
                      ? 'text-navy translate-x-1'
                      : 'text-navy/70 hover:text-navy hover:translate-x-1'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isActive ? 'bg-navy' : 'bg-transparent group-hover:bg-navy/30'}`} />
                    <span className={`flex-1 transition-all duration-500 ${isActive ? 'font-heading text-xl italic tracking-wide' : 'font-normal text-base tracking-wide'}`}>
                      {item.label}
                    </span>
                    {count > 0 && (
                      <span className="inline-flex items-center justify-center min-w-[24px] h-6 px-2 bg-navy/10 text-navy text-xs font-bold rounded-full">
                        {count}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-8 pt-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 py-2 text-sm font-medium tracking-widest uppercase text-navy/70 hover:text-navy transition-colors w-full"
          >
            <LogOut size={16} strokeWidth={2} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content - airy and spacious */}
      <main className="flex-1 px-12 py-10 overflow-auto">
        <div className="max-w-[1400px] mx-auto h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

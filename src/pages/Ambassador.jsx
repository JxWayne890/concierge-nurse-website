import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ExternalLink, LayoutDashboard } from 'lucide-react';
import SEO from '../components/SEO';
import { useAuth } from '../lib/AuthContext';

const TABS = [
  { id: 'program', label: 'The Program' },
  { id: 'signup', label: 'Apply' },
];

function useActiveTab() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === 'undefined') return 'program';
    const hash = window.location.hash.slice(1);
    return TABS.some((t) => t.id === hash) ? hash : 'program';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      setActiveTab(TABS.some((t) => t.id === hash) ? hash : 'program');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectTab = (id) => {
    if (window.location.hash.slice(1) !== id) {
      window.history.pushState(null, '', `#${id}`);
    }
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return [activeTab, selectTab];
}

function SectionCard({ children, className = '' }) {
  return <div className={`bg-white border border-cream-dark p-6 md:p-8 mb-8 ${className}`}>{children}</div>;
}

function SectionHeading({ children }) {
  return <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">{children}</h2>;
}

export default function Ambassador() {
  const [activeTab, selectTab] = useActiveTab();
  const { session, isAmbassador, isAdmin } = useAuth();
  const showPortalBanner = !!session && (isAmbassador || isAdmin);

  return (
    <>
      <SEO
        title="Ambassador Pathway — Concierge Nurse Business Society"
        description="Get rewarded for referring nurses to the Concierge Nurse Six Step Business Method Cohort Accelerator. Earn up to $1,200 per cycle plus Founding Ambassador recognition."
        canonical="/ambassador"
      />

      {/* Hero with tabs */}
      <section className="bg-navy pt-20 xl:pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center pb-8 md:pb-10">
          <p className="section-label mb-4">Concierge Nurse Business Society</p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4">
            Ambassador Pathway
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            You built your business. Now get rewarded for helping the next nurse do the same.
          </p>
        </div>

        {/* Tab nav */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <nav className="flex flex-wrap justify-center">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => selectTab(tab.id)}
                  className={`px-5 md:px-7 py-4 text-[0.7rem] md:text-xs font-semibold tracking-[0.2em] uppercase border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'text-gold border-gold'
                      : 'text-white/60 border-transparent hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Portal banner for signed-in users */}
      {showPortalBanner && (
        <section className="bg-gold/10 border-b border-gold/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-navy text-sm font-semibold">
              Welcome back — your Ambassador portal has your dashboard, referrals, and payouts.
            </p>
            <Link
              to="/ambassador/portal"
              className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase no-underline hover:bg-navy/85 transition-colors"
            >
              <LayoutDashboard size={12} /> Go to Portal
            </Link>
          </div>
        </section>
      )}

      {/* Tab content */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          {activeTab === 'program' && <ProgramTab />}
          {activeTab === 'signup' && <SignUpTab onGoto={selectTab} />}
        </div>
      </section>

      {/* Footer copy */}
      <section className="bg-cream border-t border-cream-dark py-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-charcoal/50 text-xs">
            Concierge Nurse Business Society © 2026 | Ambassador Pathway
          </p>
        </div>
      </section>
    </>
  );
}

/* ------------------------------- Tab: Program ------------------------------ */

function ProgramTab() {
  const steps = [
    {
      n: '01',
      title: 'Identify',
      body: 'Think about the nurses in your life who are where you were before the Accelerator. Stuck, curious, ready but unsure how to start.',
    },
    {
      n: '02',
      title: 'Share',
      body: 'Once approved, sign in to your private Ambassador portal for referral tools, tracking, and approved sharing resources.',
    },
    {
      n: '03',
      title: 'Earn',
      body: 'When your referral enrolls and pays, you get paid. Cash via Venmo within one week of their payment clearing.',
    },
  ];

  const tiers = [
    {
      refs: '1 Referral',
      amount: '$300',
      sub: 'cash via Venmo',
      perks: ['Paid within 1 week of enrollment', 'Ambassador recognition in the Society'],
    },
    {
      refs: '2 Referrals',
      amount: '$700',
      sub: 'total cash via Venmo',
      perks: ['$400 bonus on top of first $300', 'Ambassador recognition in the Society', 'Priority access to future offerings'],
    },
    {
      refs: '3 Referrals',
      amount: '$1,200',
      sub: 'total cash via Venmo',
      perks: ['$500 bonus on top of $700', 'Founding Ambassador recognition', 'Priority access to future offerings'],
      top: true,
    },
  ];

  return (
    <div>
      <SectionCard>
        <SectionHeading>How It Works</SectionHeading>
        <p className="text-charcoal/80 leading-relaxed mb-8">
          You know what this program did for you. When you refer a nurse who enrolls in the Concierge Nurse Six Step Business Method Cohort Accelerator, you earn cash. The more nurses you bring in, the more you earn. Tiers reset each cohort cycle.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-cream-dark border-t-2 border-gold p-5">
              <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-2">Step {s.n}</p>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-charcoal/75 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard>
        <SectionHeading>Reward Tiers</SectionHeading>
        <p className="text-charcoal/80 leading-relaxed mb-8">
          Tiers reset each cohort cycle. Every referral counts toward the next tier within that cycle.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((t) => (
            <div
              key={t.refs}
              className={`relative border p-6 ${
                t.top ? 'bg-gold/5 border-gold' : 'bg-cream-dark border-cream-dark'
              }`}
            >
              {t.top && (
                <span className="absolute -top-3 right-4 bg-navy text-gold px-2 py-1 text-[0.55rem] font-semibold tracking-[0.2em] uppercase inline-flex items-center gap-1">
                  <Star size={10} /> Top Tier
                </span>
              )}
              <p className="text-charcoal/60 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-center mb-2">
                {t.refs}
              </p>
              <p className="font-heading text-5xl font-bold text-navy text-center mb-1">{t.amount}</p>
              <p className="text-charcoal/60 text-xs text-center mb-5">{t.sub}</p>
              <ul className="space-y-2">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-charcoal/80">
                    <Check size={14} className="text-gold shrink-0 mt-1" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard>
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center shrink-0 shadow-lg">
            <Star size={24} className="text-navy" fill="currentColor" />
          </div>
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mb-3">The Founding Ambassador Badge</h2>
            <p className="text-charcoal/80 leading-relaxed">
              Hit tier three and you earn the Founding Ambassador designation. This is permanent recognition that you helped build this community from the ground up. This isn't a title you buy. It's one you earn.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard>
        <SectionHeading>The Details</SectionHeading>
        <div className="space-y-4 text-charcoal/80 leading-relaxed">
          <p>This program is exclusively for Concierge Nurse Business Society members who have completed the Concierge Nurse Six Step Business Method Cohort Accelerator.</p>
          <p>A referral counts when the nurse you referred enrolls in the Concierge Nurse Six Step Business Method Cohort Accelerator and their payment clears. Payment plans count once the first payment is processed.</p>
          <p>Tiers reset each cohort cycle. If you refer 2 nurses for the May cohort, you earn $700 total. When the next cohort opens, your count starts fresh.</p>
          <p>Your referred nurse must mention your name at enrollment so we can track and credit you properly.</p>
          <p>All cash payouts are sent via Venmo within one week of the referred nurse's payment clearing.</p>
          <p>The Founding Ambassador designation is permanent once earned.</p>
        </div>
      </SectionCard>
    </div>
  );
}

/* ------------------------------- Tab: Sign Up ------------------------------ */

function SignUpTab() {
  const steps = [
    { n: '1', title: 'Submit the Form', body: `Takes 2 minutes. Your info goes straight to Tracy's dashboard.` },
    { n: '2', title: 'Get Confirmed', body: `Tracy confirms your Ambassador status. You're officially in.` },
    { n: '3', title: 'Start Sharing', body: 'Use your private Ambassador portal for approved scripts, posts, DM responses, and referral tracking.' },
  ];

  return (
    <div>
      <SectionCard>
        <SectionHeading>Become an Ambassador</SectionHeading>
        <p className="text-charcoal/80 leading-relaxed">
          Register below to officially join the Ambassador Pathway. Once you're signed up, Tracy will confirm your enrollment and you can start referring nurses immediately.
        </p>
      </SectionCard>

      <div className="bg-navy p-8 md:p-12 mb-8 text-center">
        <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-5 shadow-lg">
          <Star size={24} className="text-navy" fill="currentColor" />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">Ready to Start Earning?</h3>
        <p className="text-white/70 max-w-lg mx-auto mb-3 text-sm md:text-base leading-relaxed">
          The sign-up takes about 2 minutes. You'll share your name, contact info, Venmo handle, and which cohort you graduated from.
        </p>
        <p className="text-white/60 text-xs md:text-sm max-w-lg mx-auto mb-8">
          Your responses go directly to Tracy. Once confirmed, you're officially an Ambassador.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/ambassador/signup"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold/90 transition-colors no-underline"
          >
            Create My Account <ExternalLink size={14} />
          </Link>
          <Link
            to="/ambassador/login"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase no-underline transition-colors"
          >
            I already have an account →
          </Link>
        </div>
      </div>

      <SectionCard>
        <SectionHeading>What Happens After You Sign Up</SectionHeading>
        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-cream-dark border-t-2 border-gold p-5">
              <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-2">Step {s.n}</p>
              <h4 className="font-heading text-lg font-bold text-navy mb-2">{s.title}</h4>
              <p className="text-charcoal/75 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

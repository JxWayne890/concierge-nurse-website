import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Calendar, CheckCircle2, Clock, FileText, Play, Star, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { submitAcceleratorWaitlist } from '../lib/api';

const methodSteps = [
  { num: '01', title: 'Clarify', desc: 'Define your business identity, your ideal client, and the specific problem you solve in the concierge nurse market.' },
  { num: '02', title: 'Validate', desc: 'Test your offer in the real market and confirm there are clients ready to pay for what you are building.' },
  { num: '03', title: 'Financial Blueprint', desc: 'Build the financial framework of your business: pricing, revenue model, and the numbers behind a profitable concierge nurse business.' },
  { num: '04', title: 'Operationalize', desc: 'Build the legal, administrative, and operational structure your business needs to run professionally and confidently.' },
  { num: '05', title: 'Get Visible', desc: 'Build your client acquisition strategy and the marketing foundation that brings the right clients to your business.' },
  { num: '06', title: 'Protect', desc: 'Put the legal protections, business agreements, and professional infrastructure in place to safeguard everything you have built.' },
];

const included = [
  {
    icon: Play,
    title: 'Six Weeks of Live Cohort Sessions',
    body: 'Live instruction Tuesdays and Fridays at 10:30 AM EST. Direct access to Tracy throughout the cohort.',
  },
  {
    icon: Clock,
    title: 'Full Interactive On-Demand Replays',
    body: 'Every session available on demand. Watch on your schedule, anytime, any time zone.',
  },
  {
    icon: Users,
    title: 'Private Cohort Community',
    body: 'A private Heartbeat community with the nurses building alongside you for the full six weeks.',
  },
  {
    icon: Award,
    title: 'Free 30-Minute Healthcare Attorney Consultation',
    body: 'A complimentary 30-minute private consultation with a healthcare attorney, schedulable any time during the six weeks.',
  },
  {
    icon: FileText,
    title: 'Complete Business Toolkit ($997 value)',
    body: 'The RN Concierge Business Toolkit and the HIPAA Business Compliance Toolkit, included at no additional cost.',
  },
  {
    icon: Users,
    title: 'Invitation to The Concierge Nurse Business Society Membership',
    body: 'An exclusive invitation to join the membership community for cohort graduates only. The only place to continue building alongside other concierge nurse business owners.',
  },
  {
    icon: Star,
    title: 'You Are Seen in This Cohort',
    body: 'Small intentional group sizes mean every nurse gets real attention, direct answers, and personalized guidance within the group experience.',
  },
];

const schedule = [
  ['Virtual Open House (Orientation)', 'Wednesday, May 20, 2026 at 10:30 AM EST', 'A 15-minute walkthrough for enrolled cohort nurses. Heartbeat platform orientation, Zoom setup, and live Q&A.'],
  ['Week 1 — Clarify', 'Tuesday, May 26 and Friday, May 29', ''],
  ['Week 2 — Validate', 'Tuesday, June 2 and Friday, June 5', ''],
  ['Week 3 — Financial Blueprint', 'Tuesday, June 9 and Friday, June 12', ''],
  ['Week 4 — Operationalize', 'Tuesday, June 16 and Friday, June 19', ''],
  ['Week 5 — Get Visible', 'Tuesday, June 23 and Friday, June 26', ''],
  ['Week 6 — Protect', 'Tuesday, June 30 and Friday, July 3', ''],
];

export default function Accelerator() {
  const [form, setForm] = useState({ full_name: '', email: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      await submitAcceleratorWaitlist(form);
      setStatus('success');
      setForm({ full_name: '', email: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  const acceleratorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'The Concierge Nurse Six Step Business Method Cohort Accelerator',
    description:
      'A six-week live cohort for experienced nurses building a concierge nurse business using the proven six-step method.',
    provider: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
    instructor: { '@type': 'Person', name: 'Tracy Pekurny, RN' },
    courseMode: 'online',
    duration: 'P6W',
    educationalLevel: 'Professional',
  };

  return (
    <>
      <SEO
        title="Concierge Nurse Six Step Business Method Cohort Accelerator"
        description="Six weeks of live instruction for experienced nurses building a concierge nurse business using Tracy Pekurny's proven six-step method."
        canonical="/accelerator"
        type="article"
        schema={acceleratorSchema}
      />

      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            <p className="section-label mb-4">Six-Week Live Cohort</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
              The Concierge Nurse Six Step Business Method{' '}
              <span className="text-gold-gradient">Cohort Accelerator</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-8">
              Six weeks. Live instruction. A small cohort of experienced nurses
              building a concierge nurse business using the proven six-step
              method. Structured. Strategic. Results-driven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#method" className="btn-primary flex items-center justify-center gap-2">
                See the Method <ArrowRight size={14} />
              </a>
              <a href="#enroll" className="btn-secondary flex items-center justify-center gap-2">
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream border-y border-cream-dark py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            '5-Star Rated by Cohort Graduates',
            '6 Weeks Live Cohort Experience',
            '6-Step Proven Method with Reviews',
            'RN Concierge Business Toolkit + HIPAA Toolkit Bundle Included as Bonus',
          ].map((label) => (
            <p key={label} className="text-navy text-sm font-semibold leading-relaxed">
              {label}
            </p>
          ))}
        </div>
      </section>

      <section id="method" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label mb-4">The Method</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5">
              Six Steps. Six Weeks. One Proven Method.
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-slate text-[0.95rem] leading-relaxed">
              Each week builds on the last. By the end of six weeks, you will
              have the foundation, strategy, and systems to launch your concierge
              nurse business with clarity and confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodSteps.map((step) => (
              <div key={step.num} className="bg-cream/50 border border-cream-dark p-7">
                <span className="text-gold font-heading text-3xl font-bold">{step.num}</span>
                <h3 className="font-heading text-xl font-bold text-navy mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label mb-4">Everything You Get</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5">
              What is Included
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-slate text-[0.95rem] leading-relaxed">
              Six weeks of live instruction, the complete business toolkit, and
              continued access to the only community built exclusively for
              concierge nurse business owners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div key={item.title} className="bg-white p-7 border border-cream-dark">
                <item.icon size={20} className="text-gold mb-5" />
                <h3 className="font-heading text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            A Live Cohort, Not a Course
          </h2>
          <div className="space-y-5 text-white/60 text-[0.98rem] leading-relaxed">
            <p>
              The Cohort Accelerator compresses months of research, circling,
              and second-guessing into six weeks of structured instruction. You
              do not have to launch your business in six weeks. You build the
              foundation, at your own pace, with everything you need to move
              forward.
            </p>
            <p>
              Live sessions happen Tuesdays and Fridays at 10:30 AM EST. Attend
              live for the full experience, or watch the same-day recording with
              detailed notes, presentation slides, and summaries. Everything is
              posted within 24 hours.
            </p>
            <p>
              Between sessions, the private Heartbeat community is where the real
              work happens. Post your questions, get live feedback from Tracy and
              your cohort peers, access additional resources, and build alongside
              nurses who get exactly where you are.
            </p>
          </div>
          <div className="flex gap-1 justify-center mt-10 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="text-white/40 text-sm text-center">5-Star Rated by Cohort Graduates</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="section-label mb-4">After You Graduate</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5">
                The Only Room Built for Concierge Nurse Business Owners
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-charcoal text-[0.95rem] leading-relaxed mb-4">
                Graduation is when your invitation opens. The Concierge Nurse
                Business Society Membership is exclusive to Cohort Accelerator
                graduates. It is the only ongoing community where concierge
                nurse business owners stay connected, keep building, and grow
                alongside other graduates who speak the same language.
              </p>
              <p className="text-charcoal text-[0.95rem] leading-relaxed mb-6">
                This is where momentum continues after the cohort ends.
              </p>
              <Link to="/society" className="btn-secondary inline-flex items-center justify-center gap-2">
                See the Society <ArrowRight size={14} />
              </Link>
            </div>
            <div className="md:col-span-2 bg-cream/50 border border-cream-dark p-8">
              <p className="section-label mb-3">Inside the Society</p>
              <ul className="space-y-3 text-slate text-sm">
                {[
                  'Private community on Heartbeat',
                  'Two monthly group coaching sessions with Tracy',
                  'Discounted business platform partner pricing',
                  'Cross-marketing access',
                  'Quarterly guest experts',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="bg-white border border-cream-dark p-8 lg:p-10">
            <div className="text-center max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar size={24} className="text-gold" />
                <span className="font-heading text-2xl font-bold text-navy">
                  May 2026 Next Cohort Enrollment Window
                </span>
              </div>
              <p className="text-charcoal text-[0.95rem] leading-relaxed mb-8">
                Cohort sizes are intentionally small. Join the waitlist for early
                access to enrollment, bonuses, and direct updates from Tracy.
              </p>

              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 p-6 mb-6">
                  <p className="text-green-800 font-semibold mb-1">You are on the waitlist!</p>
                  <p className="text-green-700 text-sm">We will notify you when enrollment opens.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.full_name}
                    onChange={update('full_name')}
                    className="w-full px-4 py-3 border border-cream-dark text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full px-4 py-3 border border-cream-dark text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                  {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}
                  <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">
                    {status === 'submitting' ? 'Joining...' : 'Join the Waitlist'}
                  </button>
                </form>
              )}

              <div className="border-t border-cream-dark pt-6 mt-2 mb-6">
                <p className="text-charcoal/65 text-xs uppercase tracking-[0.2em] mb-3">Ready to enroll?</p>
                <Link
                  to="/accelerator/enroll"
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white w-full px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase no-underline hover:bg-navy/85 transition-colors"
                >
                  Secure My Spot
                </Link>
              </div>

              <p className="text-slate text-xs">
                Have questions?{' '}
                <Link to="/strategy" className="text-gold underline">
                  Book a Clarity Consult
                </Link>{' '}
                to discuss if the Cohort Accelerator is right for you.
              </p>
            </div>

            <details className="mt-10 border-t border-cream-dark pt-8">
              <summary className="cursor-pointer font-heading text-xl font-bold text-navy">
                May 2026 Cohort Schedule
              </summary>
              <p className="text-slate text-sm mt-3 mb-6">All sessions live on Zoom at 10:30 AM EST</p>
              <div className="space-y-4">
                {schedule.map(([title, date, note]) => (
                  <div key={title} className="border-b border-cream-dark pb-4 last:border-0">
                    <p className="font-semibold text-navy text-sm">{title}</p>
                    <p className="text-charcoal/70 text-sm">{date}</p>
                    {note && <p className="text-slate text-xs mt-1 leading-relaxed">{note}</p>}
                  </div>
                ))}
              </div>
              <p className="text-slate text-xs mt-6 leading-relaxed">
                The final session falls on the Friday before Fourth of July
                weekend. Schedule adjustments will be communicated in advance to
                enrolled nurses.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}

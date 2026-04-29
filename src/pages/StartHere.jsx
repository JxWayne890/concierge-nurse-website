import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Compass, Rocket, TrendingUp, Wrench } from 'lucide-react';
import SEO from '../components/SEO';

const paths = [
  {
    id: 'explorer',
    icon: Compass,
    color: 'bg-cream',
    title: 'The Explorer',
    tagline: 'Curious & Learning',
    identity: 'I am curious about concierge nursing and want to learn before I commit to anything.',
    description:
      'You are exploring concierge nursing as a possible next chapter in your career. You want to understand the model, the opportunity, and whether it is the right fit for you before making any financial or time commitments.',
    bestFor: [
      'Nurses curious about concierge nursing',
      'Nurses who want to learn before investing',
      'Anyone new to the concierge nurse business model',
    ],
    nextSteps: [
      { label: 'Join the Free Facebook Community', link: '/community' },
      { label: 'Join the Free Heartbeat Community', link: '/community' },
      { label: 'Subscribe to the Email List', link: '/community' },
    ],
  },
  {
    id: 'self-paced-builder',
    icon: Wrench,
    color: 'bg-white',
    title: 'The Self-Paced Builder',
    tagline: 'Ready to Operationalize',
    identity: 'I know what I am offering and who I am serving. I need the business templates and agreements to launch.',
    description:
      'You have done the foundational work. You have clarity on your offer and your ideal client. Now you need the operational documents: consents, waivers, service agreements, intake forms, and templates to run your business professionally and confidently.',
    bestFor: [
      'Nurses who have validated their offer and identified their ideal client',
      'Nurses ready to operationalize their business',
      'Nurses who have clarity and want the templates to launch',
    ],
    nextSteps: [
      { label: 'RN Concierge Business Toolkit', link: '/toolkits' },
      { label: 'HIPAA Business Compliance Toolkit', link: '/toolkits' },
      { label: 'HIPAA + RN Business Bundle', link: '/toolkits' },
      { label: '2026 Concierge Nurse Planner', link: '/toolkits' },
    ],
    note:
      'Both toolkits are also included as a bonus inside the Concierge Nurse Six Step Business Method Cohort Accelerator.',
  },
  {
    id: 'cohort-builder',
    icon: Rocket,
    color: 'bg-cream',
    title: 'The Cohort Builder',
    tagline: 'Ready for Structured Instruction',
    identity: 'I am ready to build a complete concierge nurse business with live instruction, structure, and accountability.',
    description:
      'You want a proven six-step method, live cohort instruction, direct access to Tracy, and the operational toolkits included as part of the build. This is the structured path for nurses ready to move with guidance.',
    bestFor: [
      'Nurses ready for live group instruction',
      'Nurses who want the six-step method and direct guidance',
      'Nurses who value structure, accountability, and a small cohort experience',
    ],
    nextSteps: [
      { label: 'Explore the Cohort Accelerator', link: '/accelerator' },
      { label: 'Book a Clarity Consult', link: '/strategy' },
    ],
  },
  {
    id: 'established',
    icon: TrendingUp,
    color: 'bg-white',
    title: 'The Established Owner',
    tagline: 'Scaling or Refining What Exists',
    identity: 'I already have a concierge nurse business and I need help refining or scaling what I have built.',
    description:
      'You are generating revenue. The business is real. But growth has stalled, systems are inefficient, or you are working harder than you should for the results you are getting. You need a strategic diagnostic and a clear implementation pathway.',
    bestFor: [
      'Concierge nurse businesses generating six to seven figures',
      'Owners who have hit a growth ceiling',
      'Businesses ready for systems and operational refinement',
    ],
    nextSteps: [
      { label: 'Explore Business Diagnostics & Implementation Pathway', link: '/consulting' },
    ],
  },
];

export default function StartHere() {
  return (
    <>
      <SEO
        title="Start Here - Find Your Path to a Concierge Nurse Business"
        description="Choose the right next step for your concierge nurse business based on where you are now: exploring, operationalizing, building, or scaling."
        canonical="/start-here"
      />

      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Start Here</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Choose <span className="text-gold-gradient">Your Path</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Every nurse is at a different stage. Identify where you are right
            now and we will guide you to the right resources, programs, and
            support for your next step.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-8">
          {paths.map((path) => (
            <div
              key={path.id}
              id={path.id}
              className={`${path.color} border border-cream-dark p-8 lg:p-12`}
            >
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center">
                      <path.icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-navy">
                        {path.title}
                      </h2>
                      <p className="text-gold text-[0.7rem] font-semibold tracking-[0.12em] uppercase">
                        {path.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="font-accent text-lg italic text-charcoal/70 mb-4 leading-relaxed">
                    "{path.identity}"
                  </p>

                  <p className="text-slate text-[0.95rem] leading-relaxed mb-6">
                    {path.description}
                  </p>

                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-charcoal/40 mb-3">
                      Best For
                    </p>
                    <div className="space-y-2">
                      {path.bestFor.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
                          <span className="text-charcoal/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {path.note && (
                    <p className="mt-6 text-xs leading-relaxed text-navy/60 border-l-2 border-gold pl-4">
                      {path.note}
                    </p>
                  )}
                </div>

                <div className="bg-navy p-8">
                  <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-5">
                    Your Next Steps
                  </p>
                  <div className="space-y-3">
                    {path.nextSteps.map((step) => (
                      <Link
                        key={step.label}
                        to={step.link}
                        className="flex items-center justify-between gap-3 text-white/80 hover:text-gold text-sm no-underline py-3 border-b border-white/10 last:border-0 transition-colors group"
                      >
                        <span>{step.label}</span>
                        <ArrowRight size={14} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Still Not Sure?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Start with a free community or book a Clarity Consult for a
            personalized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community" className="btn-primary">
              Join Free Community
            </Link>
            <Link to="/strategy" className="btn-secondary">
              Book a Clarity Consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

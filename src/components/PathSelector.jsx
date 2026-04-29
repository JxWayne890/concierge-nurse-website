import { Link } from 'react-router-dom';
import { Compass, Wrench, TrendingUp, ArrowRight } from 'lucide-react';

const paths = [
  {
    id: 'explorer',
    icon: Compass,
    title: 'The Explorer',
    subtitle: 'CURIOUS & LEARNING',
    identity: '"I am curious about concierge nursing and want to learn before I commit to anything."',
    description:
      'You are exploring concierge nursing as a possible next chapter in your career. You want to understand the model, the opportunity, and whether it is the right fit for you before making any financial or time commitments.',
    bestFor: [
      'Nurses curious about concierge nursing',
      'Nurses who want to learn before investing',
      'Anyone new to the concierge nurse business model',
    ],
    nextSteps: [
      'Join the Free Facebook Community',
      'Join the Free Heartbeat Community',
      'Subscribe to the Email List',
    ],
    cta: 'Explore Free Resources',
    link: '/community',
  },
  {
    id: 'self-paced-builder',
    icon: Wrench,
    title: 'The Self-Paced Builder',
    subtitle: 'READY TO OPERATIONALIZE',
    identity: '"I know what I am offering and who I am serving. I need the business templates and agreements to launch."',
    description:
      'You have done the foundational work. You have clarity on your offer and your ideal client. Now you need the operational documents: consents, waivers, service agreements, intake forms, and templates to run your business professionally and confidently.',
    bestFor: [
      'Nurses who have validated their offer and identified their ideal client',
      'Nurses ready to operationalize their business',
      'Nurses who have clarity and want the templates to launch',
    ],
    nextSteps: [
      'RN Concierge Business Toolkit',
      'HIPAA Business Compliance Toolkit',
      'HIPAA + RN Business Bundle',
      '2026 Concierge Nurse Planner',
    ],
    note: 'Both toolkits are also included as a bonus inside the Concierge Nurse Six Step Business Method Cohort Accelerator.',
    cta: 'Browse Toolkits',
    link: '/toolkits',
  },
  {
    id: 'established',
    icon: TrendingUp,
    title: 'The Established Owner',
    subtitle: 'SCALING OR REFINING WHAT EXISTS',
    identity: '"I already have a concierge nurse business and I need help refining or scaling what I have built."',
    description:
      'You are generating revenue. The business is real. But growth has stalled, systems are inefficient, or you are working harder than you should for the results you are getting. You need a strategic diagnostic and a clear implementation pathway.',
    bestFor: [
      'Concierge nurse businesses generating six to seven figures',
      'Owners who have hit a growth ceiling',
      'Businesses ready for systems and operational refinement',
    ],
    nextSteps: [
      'Explore Business Diagnostics & Implementation Pathway'
    ],
    cta: 'Learn About Consulting',
    link: '/consulting',
  },
];

export default function PathSelector() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="section-label mb-6 tracking-[0.3em]">START HERE</p>
          <h2 className="avery-title text-5xl md:text-7xl lg:text-[6.5rem] text-navy mb-8 leading-[0.9]">
            CHOOSE YOUR PATH
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-slate text-[0.95rem] leading-relaxed">
            Every nurse is at a different stage. Identify where you are right now and we will guide you to the right resources, programs, and support for your next step.
          </p>
        </div>

        {/* Path Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {paths.map((path) => (
            <div
              key={path.id}
              className="path-card group bg-white border border-cream-dark rounded-sm p-8 flex flex-col relative shadow-sm"
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <p className="text-gold text-[0.65rem] font-bold tracking-[0.15em] uppercase mb-3">
                  {path.subtitle}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-navy flex items-center justify-center flex-shrink-0">
                    <path.icon size={26} className="text-gold" />
                  </div>
                  <h3 className="avery-title text-3xl lg:text-5xl text-navy">
                    {path.title}
                  </h3>
                </div>
              </div>

              {/* Identity quote */}
              <p className="font-accent text-[1.05rem] italic text-navy/80 mb-5 leading-relaxed font-semibold">
                {path.identity}
              </p>

              {/* Description */}
              <p className="text-slate text-sm leading-relaxed mb-8 flex-1">
                {path.description}
              </p>

              <div className="space-y-6 mb-8 border-t border-navy/10 pt-6">
                {/* Best For */}
                <div>
                  <p className="text-navy text-xs font-bold tracking-[0.1em] uppercase mb-3">
                    BEST FOR
                  </p>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {path.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        <span className="text-charcoal/75 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next Steps */}
                <div>
                  <p className="text-navy text-xs font-bold tracking-[0.1em] uppercase mb-3">
                    YOUR NEXT STEPS
                  </p>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {path.nextSteps.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1 flex-shrink-0" />
                        <span className="text-navy font-medium text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {path.note && (
                <p className="text-slate text-[0.65rem] italic mb-6 leading-relaxed bg-cream p-3 border-l-2 border-gold">
                  Note: {path.note}
                </p>
              )}

              {/* CTA */}
              <Link to={path.link} className="btn-secondary w-full text-center mt-auto">
                {path.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

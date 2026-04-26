import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Zap, Crown } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'RN Concierge Business Clarity Consult',
    subtitle: 'Your Strategic Starting Point',
    description:
      'A focused 60-minute Zoom session for nurses who are just starting or stuck in the early phases. We work on one thing: getting clear on the problem you solve and who you solve it for. You walk away with a digital outline of next steps, delivered within 48 hours. The clarity you need before you can move forward.',
    details: ['60-minute Zoom session', 'Digital outline within 48 hours', 'For early-stage nurses'],
    highlight: true,
    cta: 'Book a Clarity Consult',
  },
  {
    icon: Zap,
    title: 'VIP Bridge Consultation',
    subtitle: 'Continued Strategic Support',
    description:
      'A single session for previous consult or Accelerator clients who want continued private strategic support as they implement and grow.',
    details: ['Single strategic session', 'For returning clients', 'Focused implementation support'],
    highlight: false,
    cta: 'Learn More',
  },
  {
    icon: Crown,
    title: '1:1 Private Coaching',
    subtitle: 'Premium & Limited',
    description:
      'Direct strategic guidance throughout your entire build. Limited to two to three seats per quarter. This is the highest level of private access and support Tracy offers.',
    details: ['Limited to 2-3 seats per quarter', 'Direct strategic guidance', 'High-touch premium support'],
    highlight: false,
    cta: 'Inquire About Availability',
  },
];

export default function StrategySection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">Strategy & Coaching</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            Expert Guidance, Tailored to You
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-slate text-[0.95rem] leading-relaxed">
            When you are ready for more than tools and templates, these strategic
            sessions and coaching pathways give you the direct guidance and
            accountability to build with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`p-8 flex flex-col ${
                svc.highlight
                  ? 'bg-navy text-white border border-gold/20 relative'
                  : 'bg-white border border-cream-dark'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {svc.highlight && (
                <span className="absolute top-0 right-0 text-[0.6rem] font-bold tracking-[0.12em] uppercase bg-gold text-navy px-3 py-1.5">
                  Recommended
                </span>
              )}

              <div className={`w-10 h-10 flex items-center justify-center mb-5 ${
                svc.highlight ? 'bg-white/10' : 'bg-navy'
              }`}>
                <svc.icon size={18} className="text-gold" />
              </div>

              <p className={`text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-2 ${
                svc.highlight ? 'text-gold' : 'text-gold'
              }`}>
                {svc.subtitle}
              </p>

              <h3 className={`font-heading text-xl font-bold mb-3 ${
                svc.highlight ? 'text-white' : 'text-navy'
              }`}>
                {svc.title}
              </h3>

              <p className={`text-sm leading-relaxed mb-5 ${
                svc.highlight ? 'text-white/60' : 'text-slate'
              }`}>
                {svc.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1 list-none p-0 m-0">
                {svc.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className={`text-xs ${svc.highlight ? 'text-white/50' : 'text-charcoal/60'}`}>
                      {d}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/strategy"
                className={`flex items-center justify-center gap-2 font-semibold text-[0.75rem] tracking-[0.08em] uppercase py-3 transition-all ${
                  svc.highlight
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {svc.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* VIP Bridge 3-Session note */}
        <div className="mt-8 bg-white border border-cream-dark p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-lg font-bold text-navy">VIP Bridge 3-Session Series</h4>
            <p className="text-slate text-sm mt-1">
              Three private sessions over six weeks for high-touch implementation
              support. Includes an AI-built presentation and landing page.
            </p>
          </div>
          <Link to="/strategy" className="btn-navy whitespace-nowrap flex items-center gap-2">
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Zap, Layers } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'RN Concierge Business Clarity Consult',
    subtitle: 'Recommended',
    description:
      'A focused 60-minute private Zoom session for nurses who are just starting or stuck in the early phases. We work on one thing: getting clear on the problem you solve and who you solve it for. You walk away with a digital outline of next steps, delivered within 48 hours.',
    details: ['60-minute private Zoom', 'Focused on offer and ideal client clarity', 'Digital outline within 48 hours'],
    highlight: true,
    cta: 'Learn More',
  },
  {
    icon: Zap,
    title: 'VIP Bridge Consultation',
    subtitle: 'Continued Private Strategy',
    description:
      'A private one-hour Zoom session for nurses who have already completed the Clarity Consult or the Cohort Accelerator and want focused strategic time with Tracy without waiting for the next cohort. Ideal for working through a specific decision, a stuck point, or a piece of your build that needs a second set of eyes.',
    details: ['60-minute private Zoom', 'For Clarity Consult and Accelerator clients', 'Focused on one decision or stuck point'],
    highlight: false,
    cta: 'Learn More',
  },
];

export default function StrategySection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="section-label mb-6 tracking-[0.3em]">Strategy & Coaching</p>
          <h2 className="avery-title text-5xl md:text-7xl lg:text-[6.5rem] text-navy mb-8 leading-[0.9] uppercase">
            Work with Tracy Directly
          </h2>
          <p className="text-slate text-[0.95rem] leading-relaxed">
            Two private pathways for nurses who want strategic guidance from Tracy
            outside the cohort. Choose the level of access that fits where you are
            right now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 max-w-5xl mx-auto gap-6">
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

              <h3 className={`avery-title text-3xl lg:text-4xl mb-4 leading-tight uppercase ${
                svc.highlight ? 'text-white' : 'text-navy'
              }`}>
                {svc.title}
              </h3>

              <p className={`text-base lg:text-lg leading-relaxed mb-8 flex-1 ${
                svc.highlight ? 'text-white/80' : 'text-slate'
              }`}>
                {svc.description}
              </p>

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
      </div>
    </section>
  );
}

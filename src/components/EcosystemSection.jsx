import { BookOpen, Hammer, HeartHandshake, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    num: '01',
    title: 'Learn',
    description: 'Explore the concierge nursing model through free communities, resources, and educational content designed to help you decide if this path is right for you.',
  },
  {
    icon: Hammer,
    num: '02',
    title: 'Build',
    description: 'Use proven toolkits or join the Accelerator cohort to build your concierge nursing business from the ground up with a step-by-step framework.',
  },
  {
    icon: HeartHandshake,
    num: '03',
    title: 'Get Support',
    description: 'Access strategy sessions, private coaching, and expert guidance tailored to where you are in your business journey. Never build alone.',
  },
  {
    icon: TrendingUp,
    num: '04',
    title: 'Scale',
    description: 'For established owners generating revenue, get deep business diagnostics and a strategic implementation pathway to break through your ceiling.',
  },
];

export default function EcosystemSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">The Ecosystem</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            A Clear Pathway at Every Stage
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-slate text-[0.95rem] leading-relaxed">
            This is not a single program. It is a complete business-building
            ecosystem designed to meet you exactly where you are and guide you forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-[1px] bg-gold/20" />
              )}

              <div className="text-center">
                <div className="w-16 h-16 bg-navy mx-auto flex items-center justify-center mb-5 relative">
                  <step.icon size={24} className="text-gold" />
                  <span className="absolute -top-2 -right-2 text-[0.6rem] font-bold tracking-wider text-gold bg-cream px-1.5 py-0.5 border border-gold/30">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

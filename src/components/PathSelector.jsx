import { Link } from 'react-router-dom';
import { Compass, Wrench, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const paths = [
  {
    id: 'explorer',
    icon: Compass,
    title: 'Explorer',
    identity: '"I\'m curious about concierge nursing and want to learn before I commit to anything."',
    description:
      'You have been thinking about this for a while. You want to understand the concierge nursing model before making any moves. Start with free resources and our community.',
    cta: 'Explore Free Resources',
    link: '/community',
    items: ['Free communities', 'Educational resources', 'Email updates on workshops & events'],
  },
  {
    id: 'diyer',
    icon: Wrench,
    title: 'DIYer',
    identity: '"I want to start building on my own and I need the right tools."',
    description:
      'You are ready to take action and want practical, proven tools to start building your concierge nursing business at your own pace.',
    cta: 'Browse Toolkits',
    link: '/toolkits',
    items: ['RN Concierge Business Toolkit', 'HIPAA Compliance Toolkit', 'Business Planner'],
  },
  {
    id: 'builder',
    icon: Rocket,
    title: 'Builder',
    identity: '"I want hands-on guidance and accountability to build this the right way."',
    description:
      'You know you need more than tools. You want expert guidance, a proven framework, and accountability to build your business step by step.',
    cta: 'See Coaching Options',
    link: '/strategy',
    items: ['Clarity Consult', 'Accelerator Cohort', '1:1 Private Coaching'],
  },
  {
    id: 'established',
    icon: TrendingUp,
    title: 'Established Owner',
    identity: '"I already have a concierge nurse business and I need help fixing or scaling what I\'ve built."',
    description:
      'You are generating revenue but you have hit a ceiling. You need a strategic diagnostic to identify what is broken and a clear pathway to fix it.',
    cta: 'Learn About Consulting',
    link: '/consulting',
    items: ['Business Diagnostics', 'Implementation Pathway', 'Systems & Operations Review'],
  },
];

export default function PathSelector() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">Your Journey Starts Here</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            Where Are You Right Now?
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-slate text-[0.95rem] leading-relaxed">
            Every nurse is at a different stage. Find the path that matches where
            you are today, and we will guide you to exactly what you need next.
          </p>
        </div>

        {/* Path Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {paths.map((path) => (
            <Link
              key={path.id}
              to={path.link}
              className="path-card group bg-white border border-cream-dark rounded-sm p-8 flex flex-col no-underline"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-navy flex items-center justify-center mb-6">
                <path.icon size={22} className="text-gold" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                {path.title}
              </h3>

              {/* Identity quote */}
              <p className="font-accent text-[0.95rem] italic text-charcoal/70 mb-4 leading-relaxed">
                {path.identity}
              </p>

              {/* Description */}
              <p className="text-slate text-sm leading-relaxed mb-5">
                {path.description}
              </p>

              {/* Items */}
              <ul className="space-y-2 mb-6 flex-1 list-none p-0 m-0">
                {path.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-charcoal/60 text-xs">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-2 text-gold font-semibold text-[0.75rem] tracking-[0.08em] uppercase group-hover:gap-3 transition-all">
                {path.cta}
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

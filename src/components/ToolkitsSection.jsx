import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Package, CalendarDays } from 'lucide-react';

const toolkits = [
  {
    icon: FileText,
    title: 'RN Concierge Business Toolkit',
    description:
      'Everything you need to structure, launch, and operate your concierge nursing business. Built for nurses who want to move with clarity and confidence.',
    tag: 'Most Popular',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance Upgrade Toolkit',
    description:
      'Ensure your concierge nursing practice meets HIPAA compliance standards with this focused, practical toolkit.',
    tag: null,
  },
  {
    icon: Package,
    title: 'HIPAA + RN Business Toolkit Bundle',
    description:
      'Get both toolkits at a bundled price. The complete foundation for launching a compliant, well-structured concierge nursing business.',
    tag: 'Best Value',
  },
  {
    icon: CalendarDays,
    title: '2026 Concierge Nurse Planner',
    description:
      'A purpose-built planner designed specifically for concierge nurse business owners. Stay organized, strategic, and on track all year.',
    tag: null,
  },
];

export default function ToolkitsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">For the DIYer</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            Toolkits & Resources
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-slate text-[0.95rem] leading-relaxed">
            Ready to start building on your own terms? These proven resources
            give you the structure, strategy, and tools to move forward with
            confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolkits.map((tk) => (
            <div
              key={tk.title}
              className="bg-cream/50 border border-cream-dark p-7 flex flex-col group hover:border-gold/40 transition-all duration-300"
            >
              {tk.tag && (
                <span className="self-start text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy bg-gold/20 px-3 py-1 mb-4">
                  {tk.tag}
                </span>
              )}
              <div className="w-10 h-10 bg-navy flex items-center justify-center mb-5">
                <tk.icon size={18} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-3">
                {tk.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed flex-1 mb-6">
                {tk.description}
              </p>
              <div className="flex items-center gap-2 text-gold font-semibold text-[0.72rem] tracking-[0.08em] uppercase group-hover:gap-3 transition-all cursor-pointer">
                Learn More <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/toolkits" className="btn-navy inline-flex items-center gap-2">
            View All Toolkits <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

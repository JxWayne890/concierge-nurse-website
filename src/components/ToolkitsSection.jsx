import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Package, CalendarDays } from 'lucide-react';

const toolkits = [
  {
    icon: FileText,
    title: 'RN Concierge Business Toolkit',
    description:
      'The complete set of business templates and operational documents for nurses ready to operationalize their concierge nurse business. Service agreements, intake forms, consents, waivers, and the documentation you need to run your business professionally and confidently.',
    tag: 'Most Popular',
    includes: [
      'Service agreement templates',
      'Client intake forms',
      'Consent and waiver templates',
      'Communication and scheduling templates',
      'Business positioning and offer guides',
      'AND MORE'
    ]
  },
  {
    icon: Shield,
    title: 'HIPAA Business Compliance Toolkit',
    description:
      'Business-side HIPAA documentation and templates for nurses building a concierge nurse business. Administrative documents that help you set up your business communications, technology consents, and client documentation with confidence.',
    tag: null,
    includes: [
      'Business HIPAA consent templates',
      'Technology and communication consent templates',
      'Home visit administrative addendum',
      'Termination of services notice template',
      'Business documentation guides',
      'AND MORE'
    ]
  },
  {
    icon: Package,
    title: 'HIPAA + RN Concierge Business Toolkit Bundle',
    description:
      'Both toolkits at a bundled price. The complete set of business templates and administrative documentation for nurses operationalizing a concierge nurse business with structure, organization, and confidence.',
    tag: 'Best Value',
    includes: [
      'Everything in both individual toolkits',
      'Bundled at a reduced price',
      'Complete business and administrative foundation',
      'Immediate digital access'
    ]
  },
  {
    icon: CalendarDays,
    title: '2026 Concierge Nurse Planner',
    description:
      'A business planner template designed specifically for concierge nurse business owners. Built in Canva, fully customizable. Print it, bind it, or use it on your iPad. Ready to use, ready to make your own.',
    tag: null,
    includes: [
      'Editable Canva template',
      'Designed for concierge nurse business owners',
      'Print, bind, or use digitally',
      'Fully customizable to fit your business',
      'Instant digital download'
    ]
  },
];

export default function ToolkitsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="section-label mb-6 tracking-[0.3em]">Self-Paced Resources</p>
          <h2 className="avery-title text-5xl md:text-7xl lg:text-[6.5rem] text-navy mb-8 leading-[0.9]">
            TOOLKITS & RESOURCES
          </h2>
          <p className="text-slate text-[0.95rem] leading-relaxed">
            Professional resources designed for nurses building a concierge
            nurse business. Built from real experience inside the work.
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
              <h3 className="avery-title text-2xl lg:text-3xl text-navy mb-4 leading-tight uppercase">
                {tk.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed flex-1 mb-6">
                {tk.description}
              </p>
              {tk.includes && (
                <div className="mb-6">
                  <p className="text-[0.65rem] font-bold tracking-[0.1em] text-navy uppercase mb-3">What Is Included:</p>
                  <ul className="space-y-2">
                    {tk.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-charcoal/80 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex items-center gap-2 text-gold font-semibold text-[0.72rem] tracking-[0.08em] uppercase group-hover:gap-3 transition-all cursor-pointer mt-auto">
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

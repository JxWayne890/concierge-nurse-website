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
            <Link
              to="/toolkits"
              key={tk.title}
              className="bg-cream/50 p-8 flex flex-col justify-between group hover:bg-navy transition-all duration-500 min-h-[320px]"
            >
              <div className="flex flex-col items-start gap-8">
                {tk.tag ? (
                  <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-navy bg-gold/20 px-3 py-1 group-hover:bg-gold/30 group-hover:text-white transition-colors">
                    {tk.tag}
                  </span>
                ) : (
                  <span className="h-[24px]" /> // Placeholder for alignment
                )}
                
                <h3 className="avery-title text-3xl lg:text-4xl text-navy group-hover:text-white transition-colors leading-[1.1] uppercase">
                  {tk.title}
                </h3>
              </div>
              
              <div className="flex items-center justify-between w-full mt-auto">
                <div className="w-12 h-12 flex items-center justify-center transition-colors">
                  <tk.icon size={20} className="text-navy/50 group-hover:text-gold transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-gold font-body text-[0.65rem] tracking-[0.15em] uppercase transition-all">
                  Explore <ArrowRight size={13} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
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

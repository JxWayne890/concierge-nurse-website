import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Package, CalendarDays } from 'lucide-react';

const toolkits = [
  {
    icon: FileText,
    title: 'RN Concierge Business Toolkit',
    description:
      'The complete set of business templates and operational documents for nurses ready to operationalize their concierge nurse business. Service agreements, intake forms, consents, waivers, and the documentation you need to run your business professionally and confidently.',
    tag: 'Most Popular',
  },
  {
    icon: Shield,
    title: 'HIPAA Business Compliance Toolkit',
    description:
      'Business-side HIPAA documentation and templates for nurses building a concierge nurse business. Administrative documents that help you set up your business communications, technology consents, and client documentation with confidence.',
    tag: null,
  },
  {
    icon: Package,
    title: 'HIPAA + RN Concierge Business Bundle',
    description:
      'Both toolkits at a bundled price. The complete set of business templates and administrative documentation for nurses operationalizing a concierge nurse business with structure, organization, and confidence.',
    tag: 'Best Value',
  },
  {
    icon: CalendarDays,
    title: '2026 Concierge Nurse Planner',
    description:
      'A business planner template designed specifically for concierge nurse business owners. Built in Canva, fully customizable. Print it, bind it, or use it on your iPad. Ready to use, ready to make your own.',
    tag: 'New Release',
  },
];

export default function ToolkitsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Editorial Featured Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24 lg:mb-32">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="section-label mb-6 tracking-[0.3em]">Society Resources</p>
            <h2 className="avery-title text-5xl md:text-7xl lg:text-[6.5rem] text-navy mb-8 leading-[0.9] uppercase">
              THE<br/>SOCIETY<br/>RESOURCES
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-navy/70 text-[1.05rem] lg:text-[1.15rem] leading-relaxed mb-10 font-body max-w-xl">
              Professional resources designed for nurses building a concierge nurse business. From legal toolkits to our signature 2026 Planner, these tools are built from real-world experience inside the work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/toolkits" className="btn-navy px-10 py-4 text-center">
                SHOP ALL RESOURCES
              </Link>
              <Link to="/strategy" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white px-10 py-4 text-center">
                WORK WITH TRACY
              </Link>
            </div>
          </div>

          {/* Large Mockup Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-gold/5 -rotate-3 transition-transform duration-700 group-hover:rotate-0" />
            <div className="relative">
              <img 
                src="/images/planner-mockup-tester.png" 
                alt="Concierge Nurse Planner 2026 Mockup" 
                className="w-full h-auto shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Subtle floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl border border-navy/5 hidden md:block">
                <p className="font-heading text-navy text-xl leading-tight">2026<br/><span className="text-gold uppercase tracking-widest text-[0.6rem]">Now Available</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolkits.map((tk) => (
            <Link
              to="/toolkits"
              key={tk.title}
              className="bg-cream/40 p-8 lg:p-10 flex flex-col justify-between group hover:bg-navy transition-all duration-500 min-h-[400px] border border-transparent hover:border-navy"
            >
              <div className="flex flex-col items-start gap-8">
                {tk.tag ? (
                  <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-gold border border-gold/30 px-3 py-1 group-hover:bg-gold group-hover:text-white transition-all">
                    {tk.tag}
                  </span>
                ) : (
                  <div className="h-[26px]" /> 
                )}
                
                <h3 className="avery-title text-3xl lg:text-4xl text-navy group-hover:text-white transition-colors leading-[1.05] uppercase">
                  {tk.title}
                </h3>
                <p className="font-body text-navy/60 text-[0.85rem] leading-relaxed group-hover:text-white/70 transition-colors line-clamp-4">
                  {tk.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between w-full mt-auto pt-8">
                <div className="w-10 h-10 flex items-center justify-center border border-navy/10 group-hover:border-gold/30 rounded-full transition-colors">
                  <tk.icon size={18} className="text-navy group-hover:text-gold transition-colors" />
                </div>
                <div className="flex items-center gap-2 text-gold font-body text-[0.65rem] tracking-[0.2em] uppercase transition-all">
                  Details <ArrowRight size={13} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

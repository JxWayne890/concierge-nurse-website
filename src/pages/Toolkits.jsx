import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Package, CalendarDays, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const products = [
  {
    icon: FileText,
    title: 'RN Concierge Business Toolkit',
    tag: 'Most Popular',
    description:
      'The complete resource package for nurses who are ready to build a concierge nursing business. This toolkit gives you the templates, checklists, frameworks, and guides you need to structure your business from the ground up.',
    features: [
      'Business structure and setup guides',
      'Service packaging frameworks',
      'Client onboarding templates',
      'Marketing and positioning guides',
      'Financial planning tools',
    ],
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance Upgrade Toolkit',
    tag: null,
    description:
      'Ensure your concierge nursing practice meets HIPAA compliance standards. This focused toolkit walks you through everything you need to protect your clients and your business.',
    features: [
      'HIPAA compliance checklists',
      'Policy and procedure templates',
      'Risk assessment tools',
      'Documentation frameworks',
      'Staff training guides',
    ],
  },
  {
    icon: Package,
    title: 'HIPAA + RN Concierge Business Toolkit Bundle',
    tag: 'Best Value',
    description:
      'Get both the RN Concierge Business Toolkit and the HIPAA Compliance Toolkit at a bundled price. This is the complete foundation for launching a compliant, well-structured concierge nursing business.',
    features: [
      'Everything in both individual toolkits',
      'Bundled at a reduced price',
      'Complete business + compliance foundation',
      'Immediate digital access',
    ],
  },
  {
    icon: CalendarDays,
    title: '2026 Concierge Nurse Planner',
    tag: null,
    description:
      'A purpose-built planner designed specifically for concierge nurse business owners. More than a calendar, this planner is designed to keep you organized, strategic, and on track throughout the year.',
    features: [
      'Purpose-built for concierge nurse businesses',
      'Strategic planning sections',
      'Revenue tracking tools',
      'Client management pages',
      'Quarterly review frameworks',
    ],
  },
];

export default function Toolkits() {
  const toolkitSchema = products.map(p => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.title,
    "description": p.description,
    "brand": { "@type": "Organization", "name": "Concierge Nurse Business Society" }
  }));

  return (
    <>
      <SEO
        title="Concierge Nursing Business Toolkits & Resources"
        description="Self-paced business toolkits for nurses building a concierge nursing practice. Includes the RN Concierge Business Toolkit, HIPAA Compliance Toolkit, and 2026 Concierge Nurse Planner."
        canonical="/toolkits"
        schema={toolkitSchema}
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">For the DIYer</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Toolkits & <span className="text-gold-gradient">Resources</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Proven, practical resources designed specifically for nurses building
            concierge nursing businesses. Built from real experience, not theory.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-8">
          {products.map((product, i) => (
            <div
              key={product.title}
              className={`${i % 2 === 0 ? 'bg-cream/50' : 'bg-white'} border border-cream-dark p-8 lg:p-12`}
            >
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                      <product.icon size={22} className="text-gold" />
                    </div>
                    <div>
                      {product.tag && (
                        <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-navy bg-gold/20 px-3 py-1 mb-2 inline-block">
                          {product.tag}
                        </span>
                      )}
                      <h2 className="font-heading text-2xl font-bold text-navy">
                        {product.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-slate text-[0.95rem] leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                <div className="bg-navy p-8">
                  <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-4">
                    What is Included
                  </p>
                  <div className="space-y-3 mb-6">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-primary w-full">Get This Toolkit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upsell */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Want More Than Tools?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            If you are ready for hands-on guidance and accountability, explore
            the Accelerator or book a Clarity Consult for personalized strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/accelerator" className="btn-primary flex items-center justify-center gap-2">
              See the Accelerator <ArrowRight size={14} />
            </Link>
            <Link to="/strategy" className="btn-secondary flex items-center justify-center gap-2">
              Book a Clarity Consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

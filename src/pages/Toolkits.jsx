import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, CheckCircle2, FileText, Package, Shield, ShoppingBag } from 'lucide-react';
import SEO from '../components/SEO';

const products = [
  {
    icon: FileText,
    title: 'RN Concierge Business Toolkit',
    tag: 'Most Popular',
    description:
      'The complete set of business templates and operational documents for nurses ready to operationalize their concierge nurse business. Service agreements, intake forms, consents, waivers, and the documentation you need to run your business professionally and confidently.',
    features: [
      'Service agreement templates',
      'Client intake forms',
      'Consent and waiver templates',
      'Communication and scheduling templates',
      'Business positioning and offer guides',
      'Additional launch templates and guides',
    ],
    purchaseHref: import.meta.env.VITE_STRIPE_RN_TOOLKIT_URL || '',
  },
  {
    icon: Shield,
    title: 'HIPAA Toolkit',
    tag: null,
    description:
      'Business-side HIPAA documentation templates for nurses building a concierge nurse business. These digital templates help you organize communications, technology consents, and client documentation. They are not a legal compliance guarantee.',
    features: [
      'HIPAA-focused consent templates',
      'Technology and communication consent templates',
      'Home visit administrative addendum',
      'Termination of services notice template',
      'Documentation setup guides',
      'Additional privacy and admin templates',
    ],
    purchaseHref: import.meta.env.VITE_STRIPE_HIPAA_TOOLKIT_URL || '',
  },
  {
    icon: Package,
    title: 'HIPAA + RN Concierge Business Toolkit Bundle',
    tag: 'Best Value',
    description:
      'Both toolkits at a bundled price. The complete set of business templates and administrative documentation for nurses operationalizing a concierge nurse business with structure, organization, and confidence.',
    features: [
      'Everything in both individual toolkits',
      'Bundled at a reduced price',
      'Complete business and administrative foundation',
      'Immediate digital access',
    ],
    purchaseHref: import.meta.env.VITE_STRIPE_TOOLKIT_BUNDLE_URL || '',
  },
  {
    icon: CalendarDays,
    title: '2026 Concierge Nurse Planner',
    tag: null,
    description:
      'A business planner template designed specifically for concierge nurse business owners. Built in Canva, fully customizable. Print it, bind it, or use it on your iPad. Ready to use, ready to make your own.',
    features: [
      'Editable Canva template',
      'Designed for concierge nurse business owners',
      'Print, bind, or use digitally',
      'Fully customizable to fit your business',
      'Instant digital download',
    ],
    purchaseHref: import.meta.env.VITE_STRIPE_PLANNER_URL || '',
  },
];

export default function Toolkits() {
  const toolkitSchema = products.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.title,
    description: p.description,
    brand: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
  }));

  return (
    <>
      <SEO
        title="Toolkits & Resources for Concierge Nurse Businesses"
        description="Self-paced business toolkits and professional resources for nurses operationalizing a concierge nurse business with structure and confidence."
        canonical="/toolkits"
        schema={toolkitSchema}
      />

      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Self-Paced Resources</p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5">
            Toolkits & <span className="text-gold-gradient">Resources</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Professional resources designed for nurses building a concierge
            nurse business. Built from real experience inside the work.
          </p>
        </div>
      </section>

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
                  <div className="flex flex-col sm:flex-row gap-3">
                    {product.purchaseHref ? (
                      <a
                        href={product.purchaseHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-navy inline-flex items-center justify-center gap-2 no-underline"
                      >
                        Purchase <ShoppingBag size={14} />
                      </a>
                    ) : (
                      <span className="btn-navy inline-flex items-center justify-center gap-2 opacity-60 cursor-not-allowed">
                        Stripe Link Pending <ShoppingBag size={14} />
                      </span>
                    )}
                    <Link
                      to="/contact"
                      className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white inline-flex items-center justify-center gap-2 no-underline"
                    >
                      Ask a Question
                    </Link>
                  </div>
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
                  {product.purchaseHref ? (
                    <a
                      href={product.purchaseHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full inline-flex items-center justify-center gap-2 no-underline"
                    >
                      Buy Now <ArrowRight size={14} />
                    </a>
                  ) : (
                    <span className="btn-primary w-full inline-flex items-center justify-center gap-2 opacity-60 cursor-not-allowed">
                      Stripe Link Pending <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready for Structured Instruction?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Explore the Cohort Accelerator for live group instruction and the
            proven six-step method, or book a Clarity Consult for a focused
            conversation on where to start.
          </p>
          <Link to="/strategy" className="btn-primary inline-flex items-center justify-center gap-2">
            Book a Clarity Consult <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

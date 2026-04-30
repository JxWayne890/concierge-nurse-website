import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, CheckCircle2, FileText, Package, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { submitContactForm } from '../lib/api';

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
      'AND MORE',
    ],
  },
  {
    icon: Shield,
    title: 'HIPAA Business Compliance Toolkit',
    tag: null,
    description:
      'Business-side HIPAA documentation and templates for nurses building a concierge nurse business. Administrative documents that help you set up your business communications, technology consents, and client documentation with confidence.',
    features: [
      'Business HIPAA consent templates',
      'Technology and communication consent templates',
      'Home visit administrative addendum',
      'Termination of services notice template',
      'Business documentation guides',
      'AND MORE',
    ],
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
  },
];

export default function Toolkits() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    interest: 'toolkits_resources',
    selected_toolkits: [],
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function toggleToolkit(title) {
    setForm((prev) => {
      const exists = prev.selected_toolkits.includes(title);
      return {
        ...prev,
        selected_toolkits: exists
          ? prev.selected_toolkits.filter((item) => item !== title)
          : [...prev.selected_toolkits, title],
      };
    });
  }

  function startToolkitInquiry(title) {
    setForm((prev) => ({
      ...prev,
      selected_toolkits: prev.selected_toolkits.includes(title)
        ? prev.selected_toolkits
        : [...prev.selected_toolkits, title],
    }));
    document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      await submitContactForm(form);
      setStatus('success');
      setForm({ first_name: '', last_name: '', email: '', interest: 'toolkits_resources', selected_toolkits: [], message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

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
                  <button
                    type="button"
                    onClick={() => startToolkitInquiry(product.title)}
                    className="btn-primary w-full"
                  >
                    Inquire About This Toolkit
                  </button>
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

      <section id="inquire" className="py-24 bg-white border-t border-cream-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-cream border border-cream-dark p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Inquire About Toolkits
              </h2>
              <p className="text-slate text-sm leading-relaxed">
                Interested in a specific toolkit or a custom bundle for your team? 
                Fill out the form below and we will follow up with details and next steps.
              </p>
            </div>

            {status === 'success' ? (
              <div className="bg-navy/5 border border-gold/30 p-8 text-center">
                <p className="text-gold font-bold mb-2">Request submitted!</p>
                <p className="text-navy/70 text-sm">We will get back to you via email within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-navy/40 mb-2 block">First Name</label>
                    <input type="text" required value={form.first_name} onChange={update('first_name')} className="w-full px-4 py-3 bg-white border border-cream-dark text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-navy/40 mb-2 block">Last Name</label>
                    <input type="text" required value={form.last_name} onChange={update('last_name')} className="w-full px-4 py-3 bg-white border border-cream-dark text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-navy/40 mb-2 block">Email Address</label>
                  <input type="email" required value={form.email} onChange={update('email')} className="w-full px-4 py-3 bg-white border border-cream-dark text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-navy/40 mb-2 block">Which toolkits are you interested in?</label>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4">
                    {products.map((product) => (
                      <label
                        key={product.title}
                        className="flex items-start gap-3 bg-white border border-cream-dark px-4 py-3 text-sm text-navy cursor-pointer hover:border-gold/50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={form.selected_toolkits.includes(product.title)}
                          onChange={() => toggleToolkit(product.title)}
                          className="mt-1 accent-gold"
                        />
                        <span>{product.title}</span>
                      </label>
                    ))}
                  </div>
                  <textarea rows={4} value={form.message} onChange={update('message')} className="w-full px-4 py-3 bg-white border border-cream-dark text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="e.g. HIPAA Toolkit, Business Bundle, or a custom request..." />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <button type="submit" disabled={status === 'submitting'} className="btn-navy w-full disabled:opacity-60">
                  {status === 'submitting' ? 'Sending Request...' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

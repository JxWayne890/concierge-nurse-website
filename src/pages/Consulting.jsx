import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Cog, Map, CheckCircle2, Target, TrendingUp, AlertCircle, FileText, Globe, ListChecks } from 'lucide-react';
import SEO from '../components/SEO';
import { submitConsultingInquiry } from '../lib/api';

const consultingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Concierge Nurse Business Diagnostic",
  "provider": { "@type": "Organization", "name": "Concierge Nurse Business Society" },
  "description": "A live 60-minute strategic session with a full written report, website analysis, and prioritized action roadmap for established concierge nurse business owners.",
  "offers": {
    "@type": "Offer",
    "price": "1200",
    "priceCurrency": "USD"
  }
};

export default function Consulting() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    business_name: '',
    annual_revenue: '',
    biggest_challenge: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      await submitConsultingInquiry(form);
      setStatus('success');
      setForm({ full_name: '', email: '', business_name: '', annual_revenue: '', biggest_challenge: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <SEO
        title="Business Diagnostics for Established Concierge Nurse Business Owners"
        description="The Concierge Nurse Business Diagnostic is a live 60-minute strategic session with a full written report, website analysis, and prioritized action roadmap. For established businesses only. $1,200."
        canonical="/consulting"
        schema={consultingSchema}
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="section-label mb-4">For Established Business Owners</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
              Business Diagnostics &{' '}
              <span className="text-gold-gradient">Implementation Pathway</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-8">
              Already launched your concierge nurse business but not getting
              consistent clients? This is the strategic diagnostic and
              implementation fix for established concierge nurse business owners.
            </p>
            <a href="#inquire" className="btn-primary inline-flex items-center gap-2">
              Inquire About Consulting <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Is this for you */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-4">Is This For You?</p>
              <h2 className="font-heading text-3xl font-bold text-navy mb-5">
                This Service Is Designed For Established Owners Who...
              </h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4">
                {[
                  'Are generating six to seven figures in revenue',
                  'Have hit a growth ceiling they cannot break through',
                  'Have systems and processes that are breaking or inefficient',
                  'Are working harder than they should for the results they are getting',
                  'Know something is wrong but cannot identify exactly what',
                  'Need a strategic partner, not another course or template',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal text-[0.95rem]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label mb-4">This Is Not For</p>
              <h2 className="font-heading text-3xl font-bold text-navy mb-5">
                If You Are Just Starting Out...
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-slate text-[0.95rem] leading-relaxed mb-6">
                This consulting service is designed for businesses that are
                already operational and generating revenue. If you are in the
                early stages of building your concierge nursing business, the
                following may be a better fit:
              </p>
              <div className="space-y-3">
                <Link to="/strategy" className="flex items-center gap-3 p-4 bg-cream border border-cream-dark hover:border-gold/40 transition-all no-underline group">
                  <Target size={18} className="text-gold flex-shrink-0" />
                  <div>
                    <p className="text-navy font-semibold text-sm">Clarity Consult</p>
                    <p className="text-slate text-xs">For nurses exploring or early-stage</p>
                  </div>
                  <ArrowRight size={14} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/accelerator" className="flex items-center gap-3 p-4 bg-cream border border-cream-dark hover:border-gold/40 transition-all no-underline group">
                  <TrendingUp size={18} className="text-gold flex-shrink-0" />
                  <div>
                    <p className="text-navy font-semibold text-sm">The Accelerator</p>
                    <p className="text-slate text-xs">For nurses ready to build from scratch</p>
                  </div>
                  <ArrowRight size={14} className="text-gold ml-auto group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label mb-4">The Process</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5">
              How It Works
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                num: '01',
                title: 'Deep Business Diagnostic',
                desc: 'A comprehensive analysis of your systems, processes, revenue streams, operations, and team. We identify exactly what is limiting your growth and what needs to change.',
              },
              {
                icon: Cog,
                num: '02',
                title: 'Full Diagnostic Report',
                desc: 'You receive a detailed report of findings with prioritized recommendations, clear next steps, and a complete picture of where your business stands.',
              },
              {
                icon: Map,
                num: '03',
                title: 'Strategic Implementation Pathway',
                desc: 'A custom roadmap designed to fix what is broken, optimize what is working, and position your business for sustainable, scalable growth.',
              },
            ].map((step) => (
              <div key={step.num} className="bg-white border border-cream-dark p-8 text-center">
                <div className="w-14 h-14 bg-navy mx-auto flex items-center justify-center mb-5 relative">
                  <step.icon size={22} className="text-gold" />
                  <span className="absolute -top-2 -right-2 text-[0.6rem] font-bold tracking-wider text-gold bg-cream px-1.5 py-0.5 border border-gold/30">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label mb-4">Your Investment</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5">
              The Concierge Nurse Business Diagnostic
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-slate text-[0.95rem] leading-relaxed">
              A live 60-minute strategic session where I go through every layer
              of your business, followed by a detailed written report with my
              findings and a prioritized action roadmap you can implement
              immediately.
            </p>
          </div>

          <div className="bg-cream border border-cream-dark p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* What is included */}
              <div>
                <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-charcoal/40 mb-5">
                  What Is Included
                </p>
                <div className="space-y-4">
                  {[
                    { icon: BarChart3, label: 'Live 60-minute deep-dive diagnostic session' },
                    { icon: FileText, label: 'Detailed written report of findings' },
                    { icon: Globe, label: 'Full website analysis' },
                    { icon: ListChecks, label: 'Prioritized action roadmap for immediate implementation' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon size={14} className="text-gold" />
                      </div>
                      <span className="text-charcoal text-[0.95rem] leading-snug pt-1">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing card */}
              <div className="bg-navy p-8 lg:p-10 text-center">
                <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-4">
                  One-Time Investment
                </p>
                <p className="font-heading text-5xl font-bold text-white mb-2">
                  $1,200
                </p>
                <div className="w-12 h-px bg-gold/30 mx-auto my-5" />
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  If you move forward with coaching or the Accelerator, $600 gets
                  credited toward your investment.
                </p>
                <p className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-white/30 mb-5">
                  For established concierge nurse businesses only
                </p>
                <a href="#inquire" className="btn-primary w-full flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquire" className="py-24 bg-navy">
        <div className="max-w-xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Inquire About Consulting
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            This service begins with a conversation. Share a bit about your
            business and Tracy will follow up to discuss next steps.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 border border-gold/30 p-6 text-center">
              <p className="text-gold font-semibold mb-1">Inquiry submitted!</p>
              <p className="text-white/60 text-sm">Tracy will follow up with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="Full name" value={form.full_name} onChange={update('full_name')} className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors" />
                <input type="email" required placeholder="Email address" value={form.email} onChange={update('email')} className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors" />
              </div>
              <input type="text" placeholder="Business name" value={form.business_name} onChange={update('business_name')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors" />
              <input type="text" placeholder="Approximate annual revenue" value={form.annual_revenue} onChange={update('annual_revenue')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors" />
              <textarea placeholder="Briefly describe your biggest business challenge right now" rows={4} value={form.biggest_challenge} onChange={update('biggest_challenge')} className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">
                {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Lightbulb, Layers, Video, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import { submitContactForm } from '../lib/api';

const strategySchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'RN Concierge Business Clarity Consult',
    provider: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
    description:
      'A focused 60-minute private Zoom session for nurses building a concierge nurse business.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'VIP Bridge Consultation',
    provider: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
    description:
      'Continued private strategic support for Clarity Consult and Cohort Accelerator clients.',
  },
];

const clarityPoints = [
  { icon: Video, text: '60-minute private Zoom session' },
  { icon: Lightbulb, text: 'Focused on offer and ideal client clarity' },
  { icon: FileText, text: 'Digital outline delivered within 48 hours' },
  { icon: CheckCircle2, text: 'Single session, no ongoing coaching' },
];

const graduateOffers = [
  {
    icon: Zap,
    eyebrow: 'Continued Support',
    title: 'VIP Bridge Consultation — Single Session',
    body:
      'A focused 60-minute private Zoom session for Cohort Accelerator graduates. Schedule during the cohort or anytime within six to eight weeks after graduation. Use this session to work through a specific bottleneck, a strategic question, or a piece of your business that needs focused attention.',
    bullets: [
      '60-minute private session',
      'Exclusive to Cohort Accelerator graduates',
      'Schedule during or after the cohort',
    ],
  },
  {
    icon: Layers,
    eyebrow: 'Extended Support',
    title: 'VIP Bridge 3-Session Series',
    body:
      'Three private 60-minute sessions scheduled over six to eight weeks after the cohort. Designed for graduates who want continued strategic support as they implement, refine, and launch.',
    bullets: [
      'Three 60-minute sessions over 6 to 8 weeks',
      'Exclusive to Cohort Accelerator graduates',
      'Continued strategic support',
    ],
  },
];

export default function Strategy() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    interest: 'clarity_consult',
    message: '',
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
      await submitContactForm(form);
      setStatus('success');
      setForm({ first_name: '', last_name: '', email: '', interest: 'clarity_consult', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <SEO
        title="Consultations - Concierge Nurse Business Society"
        description="Direct strategy sessions with Tracy for nurses starting, building, or refining a concierge nurse business."
        canonical="/strategy"
        schema={strategySchema}
      />

      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Consultations</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Direct Strategy with <span className="text-gold-gradient">Tracy</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Focused consultation sessions designed for specific moments in your
            build. Whether you need clarity on where to start, support after the
            cohort, or a strategic diagnostic for an established business, these
            sessions give you direct, expert guidance from Tracy.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="bg-navy p-8 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[0.6rem] font-bold tracking-[0.12em] uppercase bg-gold text-navy px-4 py-2">
              Recommended Starting Point
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-4">
                  A Focused Starting Point
                </p>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5">
                  RN Concierge Business Clarity Consult
                </h2>
                <p className="text-white/60 text-[0.95rem] leading-relaxed mb-8">
                  A focused 60-minute private Zoom session with Tracy for nurses
                  who are just starting or stuck in the early phases. We work on
                  one thing: getting clear on the problem you solve and who you
                  solve it for. You walk away with a digital outline of next
                  steps, delivered within 48 hours. No coaching, no full business
                  diagnostic. Just the clarity you need before you can move
                  forward.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {clarityPoints.map((item) => (
                    <div key={item.text} className="flex items-start gap-2">
                      <item.icon size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <a href="#book" className="btn-primary no-underline inline-block">Book a Clarity Consult</a>
              </div>

              <div className="bg-[#F8F6F1] border border-gold/20 p-8">
                <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-6">
                  Who This Is For
                </p>
                <div className="space-y-4">
                  {[
                    'Nurses just starting their concierge nurse business',
                    'Nurses stuck in the early phases needing direction',
                    'Nurses unsure of who they serve or what they offer',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-navy/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label mb-4">Additional Support for Cohort Graduates</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5">
              Continued Strategic Support After the Cohort
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-slate text-[0.95rem] leading-relaxed">
              Two consultation pathways for graduates of the Cohort Accelerator
              who want continued strategic support as they implement and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {graduateOffers.map((offer) => (
              <div key={offer.title} className="bg-white border border-cream-dark p-8 flex flex-col">
                <div className="w-10 h-10 bg-navy flex items-center justify-center mb-5">
                  <offer.icon size={18} className="text-gold" />
                </div>
                <p className="text-gold text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-2">
                  {offer.eyebrow}
                </p>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {offer.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-5 flex-1">
                  {offer.body}
                </p>
                <ul className="space-y-2 mb-6 list-none p-0 m-0">
                  {offer.bullets.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-charcoal/60 text-xs">{d}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book" className="btn-navy w-full no-underline inline-block text-center">Inquire</a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="book" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-cream border border-cream-dark p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                Inquire About a Consult
              </h2>
              <p className="text-slate text-sm leading-relaxed">
                Ready to get clear? Fill out the form below and Tracy will follow
                up to schedule your 60-minute strategy session.
              </p>
            </div>

            {status === 'success' ? (
              <div className="bg-navy/5 border border-gold/30 p-8 text-center">
                <p className="text-gold font-bold mb-2">Request submitted!</p>
                <p className="text-navy/70 text-sm">Tracy will follow up with you via email within 48 hours to schedule your session.</p>
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
                  <label className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-navy/40 mb-2 block">Briefly describe your current business stage or challenge</label>
                  <textarea rows={4} value={form.message} onChange={update('message')} className="w-full px-4 py-3 bg-white border border-cream-dark text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
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

      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Find the Right Starting Point
          </h2>
          <p className="text-white/55 mb-8 leading-relaxed">
            Three clear paths based on where you are right now.
          </p>
          <div className="space-y-3 text-left bg-white/5 border border-white/10 p-6 mb-8">
            {[
              'If you are exploring or just starting: Book the RN Concierge Business Clarity Consult',
              'If you are ready to build a complete concierge nurse business: Join the Cohort Accelerator',
              'If you have an established concierge nurse business and need strategic support: Explore Business Diagnostics & Implementation Pathway',
            ].map((line) => (
              <p key={line} className="text-white/65 text-sm leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <Link to="/strategy" className="btn-primary inline-flex items-center gap-2">
            Book a Clarity Consult <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

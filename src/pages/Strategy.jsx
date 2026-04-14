import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Zap, Crown, Layers, CheckCircle2, Clock, FileText, Video } from 'lucide-react';
import SEO from '../components/SEO';

const strategySchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clarity Consult",
    "provider": { "@type": "Organization", "name": "Concierge Nurse Business Society" },
    "description": "One-on-one strategic consultation for nurses building concierge nursing businesses"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "VIP Bridge Session",
    "provider": { "@type": "Organization", "name": "Concierge Nurse Business Society" },
    "description": "Intensive strategy session with implementation support for concierge nurse entrepreneurs"
  }
];

export default function Strategy() {
  return (
    <>
      <SEO
        title="Strategy Sessions & Coaching - Concierge Nurse Business Society"
        description="Book a Clarity Consult, VIP Bridge session, or inquire about 1:1 private coaching. Personalized strategy and accountability for nurses building concierge nursing businesses."
        canonical="/strategy"
        schema={strategySchema}
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Strategy & Coaching</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Expert Guidance,{' '}
            <span className="text-gold-gradient">Tailored to You</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            When you are ready for more than tools and templates, these strategic
            sessions and coaching pathways give you direct access to Tracy for
            personalized guidance and accountability.
          </p>
        </div>
      </section>

      {/* Clarity Consult - Featured */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="bg-navy p-8 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[0.6rem] font-bold tracking-[0.12em] uppercase bg-gold text-navy px-4 py-2">
              Recommended Starting Point
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Lightbulb size={24} className="text-gold" />
                  <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
                    Your Strategic Starting Point
                  </p>
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5">
                  RN Concierge Business Clarity Consult
                </h2>
                <p className="text-white/60 text-[0.95rem] leading-relaxed mb-8">
                  A 60-minute private 1:1 Zoom strategy session with Tracy.
                  This is not a teaching session. It is a diagnostic designed to
                  expose exactly where you are, what is holding you back, and
                  what you need to do next. Within 48 hours you will receive a
                  personalized 30-day digital action plan.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Video, text: '60-minute private Zoom session' },
                    { icon: FileText, text: 'Personalized 30-day action plan' },
                    { icon: Lightbulb, text: 'Diagnostic, not a teaching session' },
                    { icon: Clock, text: 'Action plan delivered within 48 hours' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-2">
                      <item.icon size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white/60 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary">Book Your Clarity Consult</button>
              </div>

              <div className="bg-white/5 border border-white/10 p-8">
                <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-6">
                  Why Start Here
                </p>
                <div className="space-y-4">
                  {[
                    'Get clarity on exactly where you are in your business journey',
                    'Identify the specific gaps and obstacles in your current approach',
                    'Receive a personalized action plan tailored to your situation',
                    'Understand which program or pathway is right for your stage',
                    'Consult fee may be applied toward Accelerator enrollment',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label mb-4">Additional Support</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-5">
              Continued Coaching & Strategic Support
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* VIP Bridge */}
            <div className="bg-white border border-cream-dark p-8 flex flex-col">
              <div className="w-10 h-10 bg-navy flex items-center justify-center mb-5">
                <Zap size={18} className="text-gold" />
              </div>
              <p className="text-gold text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-2">
                Continued Support
              </p>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                VIP Bridge Consultation
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-5 flex-1">
                A single private session for previous consult or Accelerator
                clients who want continued strategic support as they implement
                and grow.
              </p>
              <ul className="space-y-2 mb-6 list-none p-0 m-0">
                {['Single strategic session', 'For returning clients', 'Implementation focused'].map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-charcoal/60 text-xs">{d}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-navy w-full">Inquire</button>
            </div>

            {/* VIP Bridge 3-Session */}
            <div className="bg-white border border-cream-dark p-8 flex flex-col">
              <div className="w-10 h-10 bg-navy flex items-center justify-center mb-5">
                <Layers size={18} className="text-gold" />
              </div>
              <p className="text-gold text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-2">
                Extended Support
              </p>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                VIP Bridge 3-Session Series
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-5 flex-1">
                Three private sessions over six weeks for high-touch
                implementation support. Includes an AI-built presentation and
                landing page.
              </p>
              <ul className="space-y-2 mb-6 list-none p-0 m-0">
                {['Three sessions over six weeks', 'High-touch implementation', 'Includes AI-built deliverables'].map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-charcoal/60 text-xs">{d}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-navy w-full">Inquire</button>
            </div>

            {/* 1:1 Private Coaching */}
            <div className="bg-navy border border-gold/20 p-8 flex flex-col relative">
              <span className="absolute top-0 right-0 text-[0.6rem] font-bold tracking-[0.12em] uppercase bg-gold text-navy px-3 py-1.5">
                Limited
              </span>
              <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-5">
                <Crown size={18} className="text-gold" />
              </div>
              <p className="text-gold text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-2">
                Premium & Limited
              </p>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                1:1 Private Coaching
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
                Direct strategic guidance throughout your entire build. This is
                the highest level of private access and support Tracy offers.
                Limited to two to three seats per quarter.
              </p>
              <ul className="space-y-2 mb-6 list-none p-0 m-0">
                {['Limited to 2-3 seats per quarter', 'Direct strategic guidance', 'High-touch premium support'].map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-white/50 text-xs">{d}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Inquire About Availability</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Not Sure Which Option is Right?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Start with the Clarity Consult. It is the best way to get a
            personalized recommendation for your situation.
          </p>
          <button className="btn-primary">Book a Clarity Consult</button>
        </div>
      </section>
    </>
  );
}

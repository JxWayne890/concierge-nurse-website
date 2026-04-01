import { Link } from 'react-router-dom';
import { Mail, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Get In Touch</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Contact <span className="text-gold-gradient">& Book</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to take the next step? Whether you want to book a session,
            ask a question, or explore how we can work together, we are here to
            help.
          </p>
        </div>
      </section>

      {/* Quick Links + Form */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                Quick Actions
              </h2>
              <div className="gold-divider mb-4" />

              <Link to="/strategy" className="flex items-center gap-4 p-5 bg-cream border border-cream-dark hover:border-gold/40 transition-all no-underline group">
                <Calendar size={22} className="text-gold flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-navy font-semibold text-sm">Book a Clarity Consult</p>
                  <p className="text-slate text-xs">60-minute strategy session</p>
                </div>
                <ArrowRight size={14} className="text-gold group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link to="/accelerator" className="flex items-center gap-4 p-5 bg-cream border border-cream-dark hover:border-gold/40 transition-all no-underline group">
                <MessageCircle size={22} className="text-gold flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-navy font-semibold text-sm">Join the Accelerator Waitlist</p>
                  <p className="text-slate text-xs">Next cohort: May 2026</p>
                </div>
                <ArrowRight size={14} className="text-gold group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link to="/community" className="flex items-center gap-4 p-5 bg-cream border border-cream-dark hover:border-gold/40 transition-all no-underline group">
                <Mail size={22} className="text-gold flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-navy font-semibold text-sm">Join Free Community</p>
                  <p className="text-slate text-xs">Facebook or Heartbeat</p>
                </div>
                <ArrowRight size={14} className="text-gold group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="bg-navy p-6 mt-6">
                <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-3">
                  Email
                </p>
                <a href="mailto:hello@conciergenursebusiness.com" className="text-white/70 text-sm no-underline hover:text-gold transition-colors">
                  hello@conciergenursebusiness.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-cream border border-cream-dark p-8 lg:p-10">
              <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                Send a Message
              </h2>
              <p className="text-slate text-sm mb-8">
                Have a question or want to discuss how we can work together? Fill
                out the form and we will get back to you within 48 hours.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/60 mb-2 block">
                      First Name
                    </label>
                    <input type="text" className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/60 mb-2 block">
                      Last Name
                    </label>
                    <input type="text" className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/60 mb-2 block">
                    Email
                  </label>
                  <input type="email" className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>

                <div>
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/60 mb-2 block">
                    I am interested in
                  </label>
                  <select className="w-full px-4 py-3 border border-cream-dark bg-white text-sm text-charcoal focus:outline-none focus:border-gold transition-colors">
                    <option value="">Select an option</option>
                    <option>Clarity Consult</option>
                    <option>Accelerator Cohort</option>
                    <option>Toolkits & Resources</option>
                    <option>1:1 Private Coaching</option>
                    <option>Business Consulting (Established Owners)</option>
                    <option>VIP Bridge Session</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/60 mb-2 block">
                    Message
                  </label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

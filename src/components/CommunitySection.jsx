import { useState } from 'react';
import { Users, MessageCircle, Mail } from 'lucide-react';
import { submitSubscribe } from '../lib/api';

export default function CommunitySection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitSubscribe({ email, source: 'community_section' });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="section-label mb-6 tracking-[0.3em]">Community</p>
          <h2 className="avery-title text-5xl md:text-7xl lg:text-[6.5rem] text-navy mb-8 leading-[0.9]">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-slate text-[0.95rem] leading-relaxed">
            Two free communities for nurses exploring and building concierge
            nurse businesses. Choose the platform that fits how you like to
            connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="#"
            className="bg-cream border border-cream-dark p-8 text-center group hover:border-gold/40 transition-all duration-300 no-underline"
          >
            <div className="w-14 h-14 bg-navy mx-auto flex items-center justify-center mb-5">
              <Users size={24} className="text-gold" />
            </div>
            <h3 className="avery-title text-2xl lg:text-3xl text-navy mb-4 leading-tight uppercase">
              Facebook Community
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-5">
              Connect with nurses at every stage of the journey. Ask questions,
              share wins, and stay close to the conversation.
            </p>
            <span className="text-gold font-semibold text-[0.72rem] tracking-[0.08em] uppercase group-hover:underline">
              Join Free
            </span>
          </a>

          <a
            href="#"
            className="bg-cream border border-cream-dark p-8 text-center group hover:border-gold/40 transition-all duration-300 no-underline"
          >
            <div className="w-14 h-14 bg-navy mx-auto flex items-center justify-center mb-5">
              <MessageCircle size={24} className="text-gold" />
            </div>
            <h3 className="avery-title text-2xl lg:text-3xl text-navy mb-4 leading-tight uppercase">
              Heartbeat Community
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-5">
              Our private community platform with weekly content, discussions,
              and direct access to resources.
            </p>
            <span className="text-gold font-semibold text-[0.72rem] tracking-[0.08em] uppercase group-hover:underline">
              Join Free
            </span>
          </a>

          <div className="bg-navy border border-gold/20 p-8 text-center">
            <div className="w-14 h-14 bg-white/10 mx-auto flex items-center justify-center mb-5">
              <Mail size={24} className="text-gold" />
            </div>
            <h3 className="avery-title text-2xl lg:text-3xl text-white mb-4 leading-tight uppercase">
              Email Insider Access
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Be the first to hear about workshops, waitlist for cohort
              enrollment, free trainings, and new resources.
            </p>

            {status === 'success' ? (
              <p className="text-gold text-sm font-semibold">Subscribed!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                {status === 'error' && (
                  <p className="text-red-400 text-xs">Something went wrong. Try again.</p>
                )}
                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

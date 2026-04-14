import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, ArrowRight, Mail } from 'lucide-react';
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-4">Always Free</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-5">
            Join the Community
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-slate text-[0.95rem] leading-relaxed">
            Not ready to commit? No pressure. Start here. Join thousands of
            nurses exploring and building concierge nursing businesses.
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
            <h3 className="font-heading text-lg font-bold text-navy mb-2">
              Facebook Community
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-5">
              Connect with nurses at every stage. Ask questions, share wins, and
              stay connected.
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
              <Heart size={24} className="text-gold" />
            </div>
            <h3 className="font-heading text-lg font-bold text-navy mb-2">
              Heartbeat Community
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-5">
              Our dedicated community platform with resources, discussions, and
              direct access to support.
            </p>
            <span className="text-gold font-semibold text-[0.72rem] tracking-[0.08em] uppercase group-hover:underline">
              Join Free
            </span>
          </a>

          <div className="bg-navy border border-gold/20 p-8 text-center">
            <div className="w-14 h-14 bg-white/10 mx-auto flex items-center justify-center mb-5">
              <Mail size={24} className="text-gold" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-2">
              Email Insider Access
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Be the first to hear about workshops, enrollment windows, free
              trainings, and new resources.
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

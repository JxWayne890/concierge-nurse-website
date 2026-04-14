import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Mail, ArrowRight, MessageCircle, BookOpen, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import { submitSubscribe } from '../lib/api';

export default function Community() {
  const [form, setForm] = useState({ first_name: '', email: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      await submitSubscribe({ ...form, source: 'community_page' });
      setStatus('success');
      setForm({ first_name: '', email: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <SEO
        title="Free Concierge Nurse Business Community & Resources"
        description="Join the free Concierge Nurse Business Society community on Facebook or Heartbeat. Connect with nurses building concierge nursing businesses, access resources, and get support."
        canonical="/community"
      />
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Always Free</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
            Join the <span className="text-gold-gradient">Community</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Start here. No commitment, no cost. Connect with nurses at every
            stage of their concierge nursing journey and get access to free
            resources, support, and community.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Facebook */}
            <div className="bg-cream border border-cream-dark p-10">
              <div className="w-14 h-14 bg-navy flex items-center justify-center mb-6">
                <Users size={26} className="text-gold" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                Facebook Community
              </h2>
              <p className="text-slate text-[0.95rem] leading-relaxed mb-6">
                Our active Facebook group is where nurses connect, ask
                questions, share wins, and support each other through the
                journey of building concierge nursing businesses.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: MessageCircle, text: 'Active discussions and Q&A' },
                  { icon: BookOpen, text: 'Free educational content and tips' },
                  { icon: Calendar, text: 'Event and workshop announcements' },
                  { icon: Users, text: 'Peer support from nurses at every stage' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={16} className="text-gold flex-shrink-0" />
                    <span className="text-charcoal/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="btn-navy inline-flex items-center gap-2">
                Join Facebook Community <ArrowRight size={14} />
              </a>
            </div>

            {/* Heartbeat */}
            <div className="bg-cream border border-cream-dark p-10">
              <div className="w-14 h-14 bg-navy flex items-center justify-center mb-6">
                <Heart size={26} className="text-gold" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                Heartbeat Community
              </h2>
              <p className="text-slate text-[0.95rem] leading-relaxed mb-6">
                Our dedicated community platform offers a more focused,
                organized space for discussions, resources, and direct support
                outside of social media.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: MessageCircle, text: 'Organized discussion channels' },
                  { icon: BookOpen, text: 'Resource library access' },
                  { icon: Calendar, text: 'Community events and networking' },
                  { icon: Users, text: 'Direct access to support' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={16} className="text-gold flex-shrink-0" />
                    <span className="text-charcoal/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="btn-navy inline-flex items-center gap-2">
                Join Heartbeat Community <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-24 bg-navy">
        <div className="max-w-xl mx-auto px-6 lg:px-10 text-center">
          <div className="w-16 h-16 bg-white/10 mx-auto flex items-center justify-center mb-6">
            <Mail size={28} className="text-gold" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Get Insider Access
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Be the first to hear about workshops, enrollment windows, free
            trainings, new resources, and exclusive opportunities. Join the
            email list and stay connected.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 border border-gold/30 p-6">
              <p className="text-gold font-semibold mb-1">You are subscribed!</p>
              <p className="text-white/60 text-sm">Check your inbox for a welcome message.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto">
              <input
                type="text"
                placeholder="First name"
                value={form.first_name}
                onChange={(e) => setForm((prev) => ({ ...prev, first_name: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-gold transition-colors"
              />

              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-60">
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-white/30 text-xs mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Membership teaser */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Post-Graduation</p>
          <h2 className="font-heading text-3xl font-bold text-navy mb-5">
            Concierge Nurse Business Society Membership
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-slate text-[0.95rem] leading-relaxed mb-4">
            An invite-only membership exclusively for graduates of the
            Concierge Nurse Business Method Accelerator. This ongoing community
            provides continued accountability, strategic support, guest
            experts, and connection with fellow alumni.
          </p>
          <p className="text-charcoal/50 text-sm mb-8">
            Hosted on Heartbeat. Open only to Accelerator graduates.
          </p>
          <Link to="/accelerator" className="btn-navy inline-flex items-center gap-2">
            Learn About the Accelerator <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}

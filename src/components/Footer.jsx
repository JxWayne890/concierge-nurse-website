import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitSubscribe } from '../lib/api';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/tracypekurny', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/tracy.pekurny', icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tracy-pekurny-296031149/', icon: LinkedInIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@tracypekurny', icon: TikTokIcon },
];

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14.8 8.2V6.7c0-.8.6-1 1.1-1h2.1V2.2L15 2.1c-3.4 0-4.2 2.1-4.2 4.3v1.8H8v3.9h2.8V22h4v-9.9h3l.5-3.9h-3.5Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M5.2 7.8H2V22h3.2V7.8ZM3.6 2C2.5 2 1.8 2.8 1.8 3.8s.7 1.8 1.8 1.8 1.8-.8 1.8-1.8S4.7 2 3.6 2ZM22 13.9c0-4.4-2.3-6.4-5.4-6.4-2.5 0-3.6 1.4-4.2 2.3h-.1v-2h-3V22h3.2v-7.1c0-1.9.4-3.7 2.7-3.7 2.2 0 2.3 2.1 2.3 3.8v7H22v-8.1Z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.6 2c.3 2.6 1.8 4.2 4.4 4.4v3.7c-1.5.1-2.9-.4-4.3-1.3v6.9c0 8.7-9.5 11.4-13.4 5.2-2.5-4-.9-9.9 4.7-10.1 1.1-.1 2.1.2 3.1.6v3.9c-.4-.2-.8-.3-1.2-.4-2.6-.8-4.9 1.7-4.1 4.2.5 1.6 2 2.6 3.7 2.3 1.6-.3 2.7-1.5 2.7-3.6V2h4.4Z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitSubscribe({ email, source: 'footer_newsletter' });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <footer className="bg-navy text-white pt-24 pb-12">

      {/* Massive Logo Section */}
      <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
        <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-normal tracking-tight text-white leading-none whitespace-nowrap overflow-hidden">
          CONCIERGE NURSE
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">

          {/* Column 1: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="avery-sub text-white/50 mb-8">Navigation</h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Start Here', path: '/start-here' },
                { label: 'Accelerator', path: '/accelerator' },
                { label: 'Society', path: '/society' },
                { label: 'Toolkits', path: '/toolkits' },
                { label: 'Strategy', path: '/strategy' },
                { label: 'Consulting', path: '/consulting' },
                { label: 'Blog', path: '/blog' },
                { label: 'Community', path: '/community' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-gold text-sm tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="avery-sub text-white/50 mb-8">Resources</h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { label: 'What Is a Concierge Nurse?', path: '/resources/what-is-a-concierge-nurse' },
                { label: 'Approved Resources', path: '/resources' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-gold text-sm tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col items-center text-center px-4">
            <h4 className="avery-sub text-white mb-4">
              Join the Society & Get the Free<br/>Business Playbook
            </h4>
            <p className="text-white/60 text-xs leading-relaxed mb-8 max-w-xs">
              Get insider access to workshops, enrollment windows, free resources,
              and strategies for building your concierge nursing business.
            </p>

            {status === 'success' ? (
              <p className="text-gold text-sm font-semibold">Subscribed!</p>
            ) : (
              <form
                className="w-full max-w-sm"
                onSubmit={handleSubmit}
              >
                <div className="flex border-b border-white/30 pb-2">
                  <input
                    type="email"
                    required
                    placeholder="Email Address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none"
                  />
                  <button type="submit" disabled={status === 'submitting'} className="text-white uppercase tracking-widest text-xs hover:text-gold transition-colors font-medium disabled:opacity-60">
                    {status === 'submitting' ? '...' : 'SIGN UP'}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>
                )}
              </form>
            )}
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="avery-sub text-white/50 mb-8">Connect</h4>
            <ul className="space-y-4 text-center md:text-right">
              <li>
                <Link to="/blog" className="text-white hover:text-gold text-sm tracking-wide transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/strategy" className="text-white hover:text-gold text-sm tracking-wide transition-colors">
                  Book a Call
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gold text-sm tracking-wide transition-colors">
                  Meeting Planner
                </Link>
              </li>
            </ul>
            <div className="flex gap-5 mt-8 text-white/85">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:border-gold hover:bg-gold hover:text-navy transition-colors"
                >
                  <link.icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 text-center flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <p className="text-white/30 text-[0.65rem] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Concierge Nurse
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-white/30 hover:text-white text-[0.65rem] uppercase tracking-widest transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/30 hover:text-white text-[0.65rem] uppercase tracking-widest transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="text-white/30 hover:text-white text-[0.65rem] uppercase tracking-widest transition-colors">
              Disclaimer
            </Link>
            <Link to="/admin/login" className="text-white/30 hover:text-white text-[0.65rem] uppercase tracking-widest transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

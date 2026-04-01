import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      
      {/* Massive Logo Section */}
      <div className="max-w-[1400px] mx-auto px-6 mb-20 text-center">
        <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-normal tracking-tight text-white leading-none whitespace-nowrap overflow-hidden">
          CONCIERGE NURSE
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="avery-sub text-white/50 mb-8">Navigation</h4>
            <ul className="space-y-4 text-center md:text-left">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Start Here', path: '/start-here' },
                { label: 'Accelerator', path: '/accelerator' },
                { label: 'Toolkits', path: '/toolkits' },
                { label: 'Strategy', path: '/strategy' },
                { label: 'Consulting', path: '/consulting' },
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

          {/* Column 2: Newsletter */}
          <div className="flex flex-col items-center text-center px-4">
            <h4 className="avery-sub text-white mb-4">
              Join the Society & Get the Free<br/>Business Playbook
            </h4>
            <p className="text-white/60 text-xs leading-relaxed mb-8 max-w-xs">
              Get insider access to workshops, enrollment windows, free resources,
              and strategies for building your concierge nursing business.
            </p>
            <form
              className="w-full max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex border-b border-white/30 pb-2">
                <input
                  type="email"
                  placeholder="Email Address..."
                  className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none"
                />
                <button type="submit" className="text-white uppercase tracking-widest text-xs hover:text-gold transition-colors font-medium">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="avery-sub text-white/50 mb-8">Connect</h4>
            <ul className="space-y-4 text-center md:text-right">
              <li>
                <a href="#" className="text-white hover:text-gold text-sm tracking-wide transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gold text-sm tracking-wide transition-colors">
                  Book a Call
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gold text-sm tracking-wide transition-colors">
                  Meeting Planner
                </a>
              </li>
            </ul>
            <div className="flex gap-6 mt-8 font-body text-xs uppercase tracking-widest text-white/80">
              <span className="hover:text-gold cursor-pointer transition-colors">IG</span>
              <span className="hover:text-gold cursor-pointer transition-colors">FB</span>
              <span className="hover:text-gold cursor-pointer transition-colors">LI</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 text-center flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <p className="text-white/30 text-[0.65rem] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Concierge Nurse
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white text-[0.65rem] uppercase tracking-widest transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-white text-[0.65rem] uppercase tracking-widest transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

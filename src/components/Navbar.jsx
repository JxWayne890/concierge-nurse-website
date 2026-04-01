import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Start Here', path: '/start-here' },
  { label: 'Accelerator', path: '/accelerator' },
  { label: 'Toolkits', path: '/toolkits' },
  { label: 'Strategy', path: '/strategy' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Community', path: '/community' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-navy-light/20">
      <nav className="max-w-[1400px] mx-auto px-6 h-[70px] md:h-[100px] flex items-center justify-between">
        
        {/* Desktop Left Nav */}
        <div className="hidden xl:flex items-center gap-6 w-1/3">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`avery-sub transition-colors ${
                location.pathname === link.path ? 'text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Left Spacer */}
        <div className="flex xl:hidden w-1/3"></div>

        {/* Center Logo */}
        <div className="w-1/3 flex justify-center">
          <Link to="/" className="flex flex-col items-center leading-none text-center no-underline gap-1 pt-1" onClick={() => setMobileOpen(false)}>
            <span className="avery-title text-2xl sm:text-3xl tracking-[0.1em] text-white">
              CONCIERGE NURSE
            </span>
            <span className="font-body text-[0.55rem] tracking-[0.3em] font-medium text-gold uppercase hidden sm:block">
              Business Society
            </span>
          </Link>
        </div>

        {/* Desktop Right Nav & Actions */}
        <div className="hidden xl:flex items-center justify-end gap-6 w-1/3">
          {navLinks.slice(4).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`avery-sub transition-colors ${
                location.pathname === link.path ? 'text-gold' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2">
            <div className="flex gap-4 text-white/80 text-[0.6rem] uppercase tracking-widest font-body">
              <span className="cursor-pointer hover:text-white transition-colors">IG</span>
              <span className="cursor-pointer hover:text-white transition-colors">FB</span>
            </div>
            <Link to="/contact" className="btn-white text-white border-white/50 hover:bg-white hover:text-navy hover:border-white" style={{ padding: '0.6rem 1.5rem', fontSize: '0.6rem' }}>
              CONTACT / BOOK
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden w-1/3 flex justify-end">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 text-white"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-menu-overlay animate-menu-fade">
          {/* Menu Header with X */}
          <div className="h-[70px] px-6 flex items-center justify-between border-b border-white/5">
            <div className="w-1/3"></div>
            <div className="w-1/3 flex justify-center">
              <span className="avery-title text-xl tracking-[0.1em] text-white">
                CNS
              </span>
            </div>
            <div className="w-1/3 flex justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          {/* Menu Links Content */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center space-y-2 py-12">
            {navLinks.map((link, index) => (
              <div 
                key={link.path} 
                className="animate-link-slide" 
                style={{ animationDelay: `${index * 0.05 + 0.1}s` }}
              >
                <Link
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`mobile-nav-link ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <div 
              className="animate-link-slide pt-8 pb-4" 
              style={{ animationDelay: `${navLinks.length * 0.05 + 0.1}s` }}
            >
              <div className="w-8 h-[1px] bg-gold/40 mx-auto" />
            </div>

            <div 
              className="animate-link-slide w-full px-12" 
              style={{ animationDelay: `${navLinks.length * 0.05 + 0.2}s` }}
            >
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-white w-full text-white border-white/30"
                style={{ fontSize: '0.75rem', padding: '1rem' }}
              >
                CONTACT / BOOK NOW
              </Link>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="p-12 pb-16 flex flex-col items-center gap-6 animate-link-slide" style={{ animationDelay: `${navLinks.length * 0.05 + 0.3}s` }}>
            <div className="flex gap-8 text-white/60 text-[0.7rem] uppercase tracking-[0.3em] font-body">
              <span className="cursor-pointer hover:text-gold transition-colors">Instagram</span>
              <span className="cursor-pointer hover:text-gold transition-colors">Facebook</span>
            </div>
            <p className="text-white/30 text-[0.55rem] uppercase tracking-[0.2em] font-body">
              © 2026 Concierge Nurse Business Society
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

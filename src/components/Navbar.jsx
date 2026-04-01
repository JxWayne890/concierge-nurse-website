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
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-navy h-screen overflow-y-auto">
          <div className="px-6 py-12 flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`avery-sub text-lg ${
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-12 h-[1px] bg-gold my-4" />
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-white text-white"
            >
              Contact / Book
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

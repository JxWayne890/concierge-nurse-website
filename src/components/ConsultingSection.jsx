import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Cog, Map } from 'lucide-react';

export default function ConsultingSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #0a1628 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="section-label mb-6 tracking-[0.3em]">For Established Business Owners</p>
            <h2 className="avery-title text-5xl md:text-6xl lg:text-[5rem] text-navy leading-[0.9] mb-8 uppercase">
              Business Diagnostics &{' '}
              <span className="text-gold-gradient block mt-2">Implementation Pathway</span>
            </h2>
            <p className="text-navy/70 text-[0.95rem] leading-relaxed mb-8 max-w-lg">
              You built the business. Revenue is coming in. But something is not
              working the way it should. Growth has stalled, systems are
              breaking, or you are working harder than you need to. This is the
              diagnostic and the strategic fix.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: BarChart3, title: 'Deep Business Diagnostic', text: 'A comprehensive review of your systems, processes, revenue streams, and operations to identify exactly what is limiting your growth.' },
                { icon: Cog, title: 'Full Diagnostic Report', text: 'A detailed report of findings with prioritized recommendations and clear next steps.' },
                { icon: Map, title: 'Strategic Implementation Pathway', text: 'A custom roadmap designed to fix what is broken, optimize what is working, and position your business for sustainable scale.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-navy/60 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/consulting" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white inline-flex items-center gap-2">
              Explore Consulting <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-[#F8F6F1] border border-gold/30 p-10 max-w-sm w-full">
              <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-6">
                Designed For
              </p>
              <div className="space-y-5">
                {[
                  'Concierge nurse businesses generating six to seven figures',
                  'Owners who have hit a growth ceiling',
                  'Businesses with broken or inefficient systems',
                  'Owners working harder than necessary',
                  'Established businesses ready for strategic optimization',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 pb-5 border-b border-navy/10 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span className="text-[#1B2A4A] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function FeaturedPrograms() {
  return (
    <section className="w-full flex flex-col bg-navy pt-8 pb-32">
      <div className="max-w-[1600px] w-full mx-auto p-4 lg:p-8 flex flex-col gap-4 lg:gap-8">

        {/* Top Split Row */}
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 h-auto lg:h-[650px]">

          {/* Left Block - The Accelerator (photo + frosted glass, matching Clarity Consult) */}
          <div
            className="flex-1 relative bg-cover bg-center flex items-center justify-center p-8 min-h-[500px] max-md:hidden"
            style={{ backgroundImage: 'url("/images/accelerator-bg.jpg")' }}
          >
            <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay" />
            <div className="relative z-10 bg-cream/40 backdrop-blur-xl border border-white/30 p-12 lg:p-16 w-full max-w-md flex flex-col items-center text-center shadow-2xl">
              {/* Gold corner ornaments */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/50" />

              <p className="font-body text-gold text-[0.6rem] lg:text-[0.65rem] tracking-[0.3em] uppercase mb-3">
                Live Cohort · Six Weeks · Flagship
              </p>
              <h3 className="avery-title text-4xl lg:text-6xl text-navy mb-6 tracking-normal leading-[0.95] uppercase">
                THE<br/>ACCELERATOR
              </h3>
              <div className="gold-divider mx-auto mb-6" />
              <p className="font-body text-navy/70 text-[0.7rem] lg:text-[0.78rem] leading-relaxed mb-10 max-w-[300px]">
                Six weeks. Live instruction. A small cohort of experienced nurses building a concierge nurse business using the proven six-step method. Structured. Strategic. Results-driven.
              </p>
              <Link to="/accelerator" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white uppercase tracking-widest text-[0.65rem] px-8 py-[0.6rem]">
                JOIN THE WAITLIST
              </Link>
            </div>
          </div>

          {/* Mobile — Accelerator */}
          <div className="md:hidden relative min-h-[75vh] flex flex-col">
            <div
              className="absolute inset-0 bg-cover"
              style={{ backgroundImage: 'url("/images/accelerator-bg.jpg")', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            <div className="relative z-10 flex-grow flex flex-col justify-end px-6 pb-10">
              <p className="font-body text-gold text-[0.6rem] tracking-[0.25em] uppercase mb-4">
                Live Cohort
              </p>
              <h3 className="font-heading font-normal text-[2.25rem] text-white mb-4 leading-[1.05] tracking-tight uppercase">
                THE<br/>ACCELERATOR
              </h3>
              <div className="gold-divider mb-5" />
              <p className="font-body text-white/75 text-[0.72rem] leading-relaxed mb-7 max-w-[300px]">
                Six weeks. Live instruction. A small cohort of experienced nurses building a concierge nurse business using the proven six-step method.
              </p>
              <Link to="/accelerator" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white text-center py-3.5 text-[0.65rem] tracking-[0.2em] uppercase">
                JOIN THE WAITLIST
              </Link>
            </div>
          </div>

          {/* Right Block - Clarity Consult */}
          <div
            className="flex-1 relative bg-cover bg-center flex items-center justify-center p-8 min-h-[500px] max-md:hidden"
            style={{ backgroundImage: 'url("/images/clarity-consult-bg.png")'}}
          >
             <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay"></div>
             <div className="relative z-10 bg-cream/40 backdrop-blur-xl border border-white/30 p-12 lg:p-16 w-full max-w-md flex flex-col items-center text-center shadow-2xl">
                <div className="w-10 h-10 border border-gold/70 text-gold flex items-center justify-center font-body text-[0.6rem] tracking-[0.18em] mb-5">
                  CN
                </div>
                <p className="font-body text-gold text-[0.6rem] lg:text-[0.65rem] tracking-[0.3em] uppercase mb-3">
                  RN Concierge Business
                </p>
                <h3 className="avery-title text-4xl lg:text-6xl text-navy mb-8 tracking-normal leading-[0.95]">
                  CLARITY CONSULT
                </h3>
                <p className="font-body text-navy/70 text-[0.7rem] lg:text-[0.78rem] leading-relaxed mb-10 pb-2 max-w-[300px]">
                  A focused 60-minute private Zoom session for nurses who are just starting or stuck in the early phases. We work on one thing: getting clear on the problem you solve and who you solve it for. You walk away with a digital outline of next steps, delivered within 48 hours.
                </p>
                <Link to="/strategy" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white uppercase tracking-widest text-[0.65rem] px-8 py-[0.6rem]">
                  BOOK YOUR SESSION
                </Link>
             </div>
          </div>

          {/* Mobile — Clarity Consult (hero style) */}
          <div className="md:hidden relative min-h-[75vh] flex flex-col">
            <div
              className="absolute inset-0 bg-cover"
              style={{ backgroundImage: 'url("/images/clarity-consult-bg.png")', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            <div className="relative z-10 flex-grow flex flex-col justify-end px-6 pb-10">
              <div className="w-9 h-9 border border-gold/70 text-gold flex items-center justify-center font-body text-[0.55rem] tracking-[0.18em] mb-5">
                CN
              </div>
              <p className="font-body text-gold text-[0.6rem] tracking-[0.25em] uppercase mb-4">
                RN Concierge Business
              </p>
              <h3 className="font-heading font-normal text-[2.25rem] text-white mb-4 leading-[1.05] tracking-tight uppercase">
                CLARITY<br/>CONSULT
              </h3>
              <p className="font-body text-white/75 text-[0.72rem] leading-relaxed mb-7 max-w-[300px]">
                A focused 60-minute private Zoom session for nurses who are just starting or stuck in the early phases. We work on one thing: getting clear on the problem you solve and who you solve it for. You walk away with a digital outline of next steps, delivered within 48 hours.
              </p>
              <Link to="/strategy" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white text-center py-3.5 text-[0.65rem] tracking-[0.2em] uppercase">
                BOOK YOUR SESSION
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Block - Business Diagnostics */}
        {/* Desktop */}
        <div className="w-full relative h-[600px] lg:h-[800px] flex items-center justify-center p-8 hidden md:flex overflow-hidden">
           <img 
             src="/images/consulting-bg.jpg" 
             alt="Luxury Office Consulting" 
             className="absolute inset-0 w-full h-full object-cover z-0"
           />
           <div className="relative z-10 bg-white/20 backdrop-blur-xl border border-white/30 p-16 lg:p-24 w-full max-w-6xl flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
             <h2 className="avery-title text-6xl md:text-[7rem] lg:text-[10rem] text-navy tracking-normal leading-[0.85] mb-6 select-none uppercase">
               CONSULTING
             </h2>
             <p className="avery-italic text-navy/80 text-sm lg:text-[1.1rem] leading-relaxed mb-12 max-w-xl font-light px-4">
               For established concierge nurse business owners doing six to seven figures who have hit a ceiling. Deep diagnostics. Strategic implementation. Real results.
             </p>
             <Link to="/consulting" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white text-[0.65rem] px-12 py-3 tracking-widest">
               INQUIRE NOW
             </Link>
           </div>
        </div>

        {/* Mobile — Consulting */}
        <div className="md:hidden relative min-h-[75vh] flex flex-col">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/consulting-bg.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
          <div className="relative z-10 flex-grow flex flex-col justify-end px-6 pb-10">
            <p className="font-body text-gold text-[0.6rem] tracking-[0.25em] uppercase mb-4">
              For Established Owners
            </p>
            <h3 className="font-heading font-normal text-[2.25rem] text-white mb-4 leading-[1.05] tracking-tight uppercase">
              BUSINESS<br/>CONSULTING
            </h3>
            <p className="font-body text-white/80 text-[0.8rem] leading-relaxed mb-7 max-w-[300px]">
              For concierge nurse business owners doing six to seven figures who have hit a ceiling. Deep diagnostics. Strategic implementation.
            </p>
            <Link to="/consulting" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white text-center py-3.5 px-8 text-[0.65rem] tracking-[0.2em] uppercase">
              INQUIRE NOW
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

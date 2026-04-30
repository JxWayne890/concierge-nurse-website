import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <div className="flex flex-col relative">
      
      {/* Top Dark Statement Section */}
      <section className="bg-navy relative py-24 lg:py-32 overflow-hidden z-10 flex flex-col justify-center items-center min-h-[360px] lg:min-h-[460px]">

        {/* Text Content */}
        <div className="relative z-20 w-full overflow-hidden">
          <div className="marquee-left flex w-max">
            {[0, 1, 2, 3].map((i) => (
              <h2 key={i} className="font-heading text-white text-[5rem] md:text-[8rem] lg:text-[11rem] leading-normal tracking-normal whitespace-nowrap opacity-95 pointer-events-none select-none uppercase px-10 pb-4">
                THE CONCIERGE NURSE
              </h2>
            ))}
          </div>
        </div>
      </section>

      {/* Cream Problem / Credibility Section */}
      <section className="bg-[#f5f2eb] pt-16 lg:pt-32 pb-20 lg:pb-32 relative z-0">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Desktop Layout — typography-forward quote card */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Parallax Stacked Collage */}
            <div className="lg:col-span-5 relative group pt-10 pb-16">
              {/* Back Image Frame */}
              <div className="relative w-[85%] aspect-[3/4] ml-auto overflow-hidden shadow-2xl">
                <img 
                  src="/images/about-tracy-desk.jpg" 
                  alt="Tracy Pekurny"
                  className="w-full h-full object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-navy/5 mix-blend-overlay" />
              </div>

              {/* Floating Word Graphic (Stacked Over Bottom Left) */}
              <div className="absolute bottom-4 -left-6 lg:-left-12 w-[90%] bg-white/60 backdrop-blur-xl border border-white/50 p-8 lg:p-10 shadow-2xl transition-all duration-[1000ms] ease-out translate-y-6 opacity-95 group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                <p className="avery-italic text-[1.75rem] lg:text-[2.1rem] text-navy leading-[1.2] mb-6">
                  "I built what I teach. Every framework, every tool, every system comes from real experience."
                </p>
                <div className="gold-divider mb-5" />
                <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-navy/60 font-semibold">
                  — Tracy Pekurny, RN
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col pt-8 pl-8">
               <p className="section-label text-gold mb-5">About Tracy</p>
               <h3 className="avery-title text-6xl md:text-7xl lg:text-[6.5rem] text-navy mb-10 leading-[0.9] uppercase">
                 BUILT BY A NURSE. <br/> FOR NURSES.
               </h3>
               <div className="navy-divider mb-8 h-[2px] w-12" />
               <div className="space-y-6 text-navy/70 text-[0.95rem] leading-loose max-w-lg">
                 <p>Tracy Pekurny is a registered nurse with more than twenty years of clinical experience and over a decade as an entrepreneur. She built her own concierge nurse business before she ever taught one.</p>
                 <p>She created the Concierge Nurse Business Society to give experienced nurses what did not exist when she started: a clear, step-by-step pathway to building an independent concierge nurse business with clinical integrity and legal protection.</p>
               </div>
               <div className="mt-16">
                 <Link to="/about" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white inline-block">
                   MORE ABOUT TRACY
                 </Link>
               </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center">

            {/* Mobile Stacked Collage */}
            <div className="relative w-full pt-4 pb-16 mb-8">
              <div className="relative w-[85%] aspect-[4/5] ml-auto overflow-hidden shadow-xl">
                <img 
                  src="/images/about-tracy-desk.jpg" 
                  alt="Tracy Pekurny"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 left-0 w-[90%] bg-white/60 backdrop-blur-xl border border-white/50 p-6 shadow-2xl">
                <p className="avery-italic text-[1.6rem] text-navy leading-[1.2] mb-5">
                  "I built what I teach. Every framework, every tool, every system comes from real experience."
                </p>
                <div className="gold-divider mb-4" />
                <p className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-navy/60 font-semibold">
                  — Tracy Pekurny, RN
                </p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <p className="section-label text-gold mb-4">About Tracy</p>
              <h3 className="avery-title text-2xl text-navy leading-tight uppercase">
                BUILT BY A NURSE.<br/>FOR NURSES.
              </h3>
            </div>

            {/* Divider */}
            <div className="w-10 h-[1px] bg-navy/30 mb-6" />

            {/* Body text */}
            <div className="text-center space-y-4 text-navy/65 text-[0.85rem] leading-relaxed max-w-sm mb-8">
              <p>Tracy Pekurny is a registered nurse with more than twenty years of clinical experience and over a decade as an entrepreneur. She built her own concierge nurse business before she ever taught one.</p>
              <p>She created the Concierge Nurse Business Society to give experienced nurses what did not exist when she started: a clear, step-by-step pathway to building an independent concierge nurse business with clinical integrity and legal protection.</p>
            </div>

            {/* CTA */}
            <Link to="/about" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white">
              MORE ABOUT TRACY
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

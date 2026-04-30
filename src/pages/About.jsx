import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="bg-[#f5f2eb] min-h-screen">
      <SEO
        title="About Tracy Pekurny - Concierge Nurse Business Coach & Strategist"
        description="Meet Tracy Pekurny, registered nurse and business strategist who built her own concierge nursing business and now helps other nurses do the same through proven frameworks and hands-on coaching."
        canonical="/about"
        type="website"
      />

      {/* Editorial Hero Layout (Avery Knox Style) */}
      <section className="relative pt-32 lg:pt-48 pb-0 overflow-hidden flex flex-col justify-between" style={{ minHeight: '100vh' }}>
        
        {/* Background Images Layer */}
        <div 
          className="absolute top-0 left-0 w-full h-[95%] flex justify-between pointer-events-none z-0"
          style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
        >
           {/* Left Image */}
           <img 
             src="/images/about-tracy-left.jpg" 
             alt="" 
             className="w-[40%] lg:w-[32%] object-cover object-top opacity-[0.12] lg:opacity-[0.35] grayscale-[15%]" 
           />
           {/* Right Image */}
           <img 
             src="/images/about-tracy-right.png" 
             alt="" 
             className="w-[40%] lg:w-[32%] object-cover object-top opacity-[0.12] lg:opacity-[0.35] grayscale-[15%] -scale-x-100" 
           />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex-grow flex items-center justify-center lg:justify-end py-10 lg:py-0">
           
           <div className="relative w-full max-w-[1000px] flex">
             
             {/* Text Block */}
             <div className="relative z-10 w-full lg:w-[85%] ml-auto py-8 lg:py-20 pl-6 lg:pl-20 pr-6 lg:pr-0">
                <p className="avery-italic text-navy/70 text-lg lg:text-[1.35rem] mb-12 text-left">
                  Registered Nurse. Entrepreneur. Business Strategist.
                </p>
                
                <h3 className="avery-italic text-[2.2rem] lg:text-[3.2rem] text-navy leading-[1.05] mb-10 text-left max-w-3xl drop-shadow-sm">
                  "I built what I teach. Every framework, every tool, every system comes from real experience."
                </h3>

                <div className="space-y-6 text-navy/70 text-[0.95rem] lg:text-[1.05rem] leading-[1.8] max-w-lg text-left font-body">
                  <p>
                    Tracy did not start the Concierge Nurse Business Society because she read about concierge nursing in a textbook. She started it because she lived it.
                  </p>
                  <p>
                    She built her own private-pay nursing business from scratch, navigated every obstacle, made the mistakes, found the solutions, and created the systems that actually work.
                  </p>
                </div>

                <div className="mt-14 text-left">
                  <Link to="/strategy" className="btn-secondary border-gold text-gold hover:bg-gold hover:text-navy px-10">
                    WORK WITH TRACY
                  </Link>
                </div>
             </div>
           </div>

        </div>

        {/* Bottom Continuous Marquee */}
        <div className="relative z-20 w-full overflow-hidden mt-10 lg:mt-20 pb-4 pt-4">
          <div className="marquee-left flex w-max">
            {[0, 1, 2, 3].map((i) => (
              <h2 key={i} className="font-heading text-navy text-[6rem] md:text-[9rem] lg:text-[15rem] leading-[0.75] tracking-tight whitespace-nowrap opacity-[0.95] pointer-events-none select-none uppercase pr-16 drop-shadow-sm">
                EVERYTHING ABOUT
              </h2>
            ))}
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 lg:py-32 bg-cream">
        {/* Desktop — sticky title + scrolling text */}
        <div className="hidden lg:flex max-w-[1000px] mx-auto px-12 gap-16">
          <div className="w-1/3">
            <h2 className="avery-title text-4xl text-navy uppercase leading-tight sticky top-32">
              THE STORY <br/>BEHIND THE <br/>SOCIETY
            </h2>
          </div>
          <div className="w-2/3 space-y-8 font-body text-navy/70 text-[0.95rem] leading-loose">
            <p>What she discovered along the way was that there was no roadmap for nurses who wanted to build an independent concierge nurse business. No strategic framework. No step-by-step method. No business ecosystem designed specifically for RNs entering this emerging space.</p>
            <p>So she built one.</p>
            <p>The Concierge Nurse Business Society is the result of years of real-world business building, strategic consulting, and direct experience inside the work. It is a method designed for nurses, by a nurse, with structure that does not exist anywhere else in this category.</p>
            <p>The Society is a complete ecosystem with education, toolkits, cohort-based instruction, consultations, and consulting services, designed to meet experienced nurses at every stage of building their concierge nurse business.</p>
          </div>
        </div>

        {/* Mobile — centered editorial flow */}
        <div className="lg:hidden max-w-sm mx-auto px-6 flex flex-col items-center text-center">
          <p className="section-label text-gold mb-4">Her Story</p>
          <h2 className="avery-title text-2xl text-navy uppercase leading-tight mb-6">
            THE STORY BEHIND<br/>THE SOCIETY
          </h2>
          <div className="w-10 h-[1px] bg-navy/25 mb-8" />

          {/* Pull quote */}
          <p className="avery-italic text-navy text-xl leading-snug mb-8">
            "So she built one."
          </p>

          <div className="space-y-5 font-body text-navy/60 text-[0.85rem] leading-relaxed">
            <p>There was no roadmap for nurses who wanted to build an independent concierge nurse business. No strategic framework. No step-by-step method.</p>
            <p>The Concierge Nurse Business Society is the result of years of real-world business building, strategic consulting, and direct experience inside the work.</p>
            <p>It is a complete ecosystem with education, toolkits, cohort-based instruction, consultations, and consulting services, designed to meet experienced nurses at every stage of building their concierge nurse business.</p>
          </div>
        </div>
      </section>

      {/* What Sets This Apart */}
      <section className="py-24 lg:py-40 bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 lg:mb-32">
            <p className="section-label text-gold mb-6 tracking-[0.3em]">The Difference</p>
            <h2 className="avery-title text-5xl md:text-7xl lg:text-[8rem] text-white uppercase leading-[0.85] tracking-tight">
              WHAT SETS<br/>THIS APART
            </h2>
          </div>

          {/* Desktop grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-x-20 gap-y-24">
            {[
              'Built from real concierge nurse business experience inside the work, not from a coaching framework borrowed from another industry.',
              'A proprietary six-step method developed, tested, and refined inside live cohorts of working RNs.',
              'Five-star rated by Cohort Accelerator graduates.',
              'Multiple pathways designed for nurses at every stage of building their concierge nurse business.',
              'Strategic, structured business education focused on real outcomes, not motivation or mindset alone.',
              'A complete ecosystem of education, toolkits, cohorts, consultations, and consulting, all built specifically for the concierge nurse business model.',
            ].map((item, i) => (
              <div key={i} className="flex flex-col relative pt-12 border-t border-white/10">
                <span className="absolute -top-12 left-0 avery-italic text-gold opacity-30 text-[6rem] leading-none select-none">
                  0{i+1}.
                </span>
                <p className="font-body text-white/90 text-lg leading-relaxed mt-6 relative z-10">{item}</p>
              </div>
            ))}
          </div>

          {/* Mobile — stacked cards with number accent */}
          <div className="lg:hidden flex flex-col gap-16 max-w-sm mx-auto">
            {[
              'Built from real concierge nurse business experience inside the work, not from a coaching framework borrowed from another industry.',
              'A proprietary six-step method developed, tested, and refined inside live cohorts of working RNs.',
              'Five-star rated by Cohort Accelerator graduates.',
              'Multiple pathways designed for nurses at every stage of building their concierge nurse business.',
              'Strategic, structured business education focused on real outcomes, not motivation or mindset alone.',
              'A complete ecosystem of education, toolkits, cohorts, consultations, and consulting, all built specifically for the concierge nurse business model.',
            ].map((item, i) => (
              <div key={i} className="flex flex-col relative pt-10 border-t border-white/10">
                <span className="absolute -top-10 left-0 avery-italic text-gold opacity-30 text-[5rem] leading-none select-none">
                  0{i+1}.
                </span>
                <p className="font-body text-white/90 text-[0.95rem] leading-relaxed mt-4 relative z-10">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-navy-dark border-t border-white/5 py-12 lg:py-16">
        {/* Desktop */}
        <div className="hidden sm:flex justify-center gap-6 items-center">
          <Link to="/start-here" className="btn-secondary border-gold text-gold hover:bg-gold hover:text-navy uppercase tracking-widest text-[0.65rem] px-10 py-4">
            Find Your Path
          </Link>
          <span className="text-white/20">|</span>
          <Link to="/strategy" className="btn-secondary border-white/50 text-white hover:bg-white hover:text-navy hover:border-white uppercase tracking-widest text-[0.65rem] px-10 py-4">
            Book a Consult
          </Link>
        </div>

        {/* Mobile — stacked full-width buttons */}
        <div className="sm:hidden flex flex-col gap-3 px-8 max-w-sm mx-auto">
          <Link to="/start-here" className="btn-secondary border-gold text-gold hover:bg-gold hover:text-navy text-center py-3.5 text-[0.65rem] tracking-[0.2em] uppercase">
            Find Your Path
          </Link>
          <Link to="/strategy" className="btn-secondary border-white/40 text-white/80 hover:bg-white hover:text-navy hover:border-white text-center py-3.5 text-[0.65rem] tracking-[0.2em] uppercase">
            Book a Consult
          </Link>
        </div>
      </section>

    </div>
  );
}

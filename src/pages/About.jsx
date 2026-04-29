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

      {/* Editorial Hero Layout */}
      <section className="relative pt-[180px] pb-32 overflow-hidden flex flex-col items-center border-b border-navy/5">
        
        {/* Top content */}
        <div className="relative z-10 text-center w-full flex flex-col items-center px-4">
          <p className="avery-italic flex text-navy/70 text-lg lg:text-xl mb-4 text-center">
            Registered Nurse. Founder. Strategist.
          </p>
        </div>

        {/* Photo + quote content */}
        <div className="relative z-20 mt-8 lg:mt-12 w-full max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          
          {/* Overlapping Photo (Starts higher via negative margins on desktop to overlap text) */}
          <div className="w-full max-w-[380px] lg:-mt-[120px] shadow-2xl z-30 ml-0 lg:ml-24">
            <div className="w-full aspect-[3/4] bg-cover bg-center border border-white/20" style={{ backgroundImage: 'url("/images/about-tracy-ai.png")'}} />
          </div>

          {/* Text block on the right */}
          <div className="flex flex-col mt-4 lg:mt-8 max-w-md bg-transparent">
             <p className="avery-italic text-2xl lg:text-[1.75rem] text-navy leading-tight mb-8 drop-shadow-sm">
               "I built what I teach. Every framework, every tool, every system comes from real experience."
             </p>
             <div className="font-body text-navy/60 text-[0.85rem] leading-relaxed space-y-4 mb-10 w-[90%] lg:w-[85%]">
                <p>
                  Tracy did not start the Concierge Nurse Business Society because she read about concierge nursing in a textbook. She started it because she lived it.
                </p>
                <p>
                  She built her own concierge nurse business from the beginning, navigated the real challenges of running a private-pay model, refined the systems, and developed the frameworks that now form the foundation of every program she teaches.
                </p>
             </div>
             <div>
               <Link to="/accelerator" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white uppercase tracking-widest text-[0.65rem] px-8 py-3">
                 EXPLORE THE COHORT ACCELERATOR
               </Link>
             </div>
          </div>
        </div>

        {/* Parallax scrolling text at bottom of hero */}
        <div className="relative z-10 w-full overflow-hidden mt-16 lg:mt-24">
          <div className="marquee-left flex w-max">
            {[0, 1, 2, 3].map((i) => (
              <h1 key={i} className="font-heading text-navy text-[5rem] md:text-[8rem] lg:text-[12rem] leading-[0.85] tracking-normal whitespace-nowrap opacity-90 select-none uppercase pointer-events-none px-10">
                TWENTY YEARS NURSING. A DECADE BUILDING.
              </h1>
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
      <section className="py-24 lg:py-32 bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-20">
            {/* Mobile label */}
            <p className="section-label text-gold mb-3 lg:hidden">The Difference</p>
            <h2 className="avery-title text-2xl lg:text-5xl text-white uppercase tracking-wide">
              WHAT SETS THIS APART
            </h2>
            <div className="w-10 h-[1px] bg-white/20 mx-auto mt-6 lg:hidden" />
          </div>

          {/* Desktop grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-16">
            {[
              'Built from real concierge nurse business experience inside the work, not from a coaching framework borrowed from another industry.',
              'A proprietary six-step method developed, tested, and refined inside live cohorts of working RNs.',
              'Five-star rated by Cohort Accelerator graduates.',
              'Multiple pathways designed for nurses at every stage of building their concierge nurse business.',
              'Strategic, structured business education focused on real outcomes, not motivation or mindset alone.',
              'A complete ecosystem of education, toolkits, cohorts, consultations, and consulting, all built specifically for the concierge nurse business model.',
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-t border-white/20 pt-6">
                <span className="avery-italic text-gold text-4xl mb-6">0{i+1}.</span>
                <p className="font-body text-white/80 text-sm leading-loose">{item}</p>
              </div>
            ))}
          </div>

          {/* Mobile — stacked cards with number accent */}
          <div className="lg:hidden flex flex-col gap-6 max-w-sm mx-auto">
            {[
              'Built from real concierge nurse business experience inside the work, not from a coaching framework borrowed from another industry.',
              'A proprietary six-step method developed, tested, and refined inside live cohorts of working RNs.',
              'Five-star rated by Cohort Accelerator graduates.',
              'Multiple pathways designed for nurses at every stage of building their concierge nurse business.',
              'Strategic, structured business education focused on real outcomes, not motivation or mindset alone.',
              'A complete ecosystem of education, toolkits, cohorts, consultations, and consulting, all built specifically for the concierge nurse business model.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/[0.04] rounded-sm p-5 border border-white/[0.06]">
                <span className="avery-italic text-gold text-2xl leading-none shrink-0 mt-0.5">0{i+1}</span>
                <p className="font-body text-white/75 text-[0.8rem] leading-relaxed">{item}</p>
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

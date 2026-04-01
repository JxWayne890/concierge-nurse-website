import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function About() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start with just the "E" visible at left edge, then scroll reveals full text
  // Negative = pushed far right off screen, scroll pulls it left
  const textTranslateX = -50 - (offsetY * 0.65);

  return (
    <div className="bg-[#f5f2eb] min-h-screen">
      
      {/* Editorial Hero Layout */}
      <section className="relative pt-[180px] pb-32 overflow-hidden flex flex-col items-center border-b border-navy/5">
        
        {/* Faded background images (B&W effect) */}
        <div className="absolute left-[15%] top-[10%] w-[25%] h-[60%] opacity-20 mix-blend-luminosity grayscale z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://i.imgur.com/9rJwMd8.jpg")'}} />
        </div>
        <div className="absolute right-[5%] top-[10%] w-[25%] h-[60%] opacity-20 mix-blend-luminosity grayscale z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://i.imgur.com/m2huabH.jpg")'}} />
        </div>

        {/* Top content */}
        <div className="relative z-10 text-center w-full flex flex-col items-center px-4">
          <p className="avery-italic flex text-navy/70 text-lg lg:text-xl mb-4 text-center">
            Registered Nurse. Entrepreneur. Business Strategist.
          </p>
        </div>

        {/* Photo + quote content */}
        <div className="relative z-20 mt-8 lg:mt-12 w-full max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          
          {/* Overlapping Photo (Starts higher via negative margins on desktop to overlap text) */}
          <div className="w-full max-w-[380px] lg:-mt-[120px] shadow-2xl z-30 ml-0 lg:ml-24">
            <div className="w-full aspect-[3/4] bg-cover bg-center border border-white/20" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661601614742-99052b0cc812?auto=format&fit=crop&q=80&w=1000")'}} />
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
                  She built her own private-pay nursing business from scratch, navigated every obstacle, made the mistakes, found the solutions, and created the systems that actually work.
                </p>
             </div>
             <div>
               <Link to="/start-here" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white uppercase tracking-widest text-[0.65rem] px-8 py-3">
                 WORK WITH TRACY
               </Link>
             </div>
          </div>
        </div>

        {/* Parallax scrolling text at bottom of hero */}
        <div className="relative z-10 w-full overflow-hidden mt-16 lg:mt-24">
          <div
            className="transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${textTranslateX}px)` }}
          >
            <h1 className="font-heading text-navy text-[7rem] md:text-[10rem] lg:text-[13rem] leading-[0.8] tracking-tighter whitespace-nowrap opacity-90 select-none uppercase pointer-events-none">
              EVERYTHING ABOUT TRACY
            </h1>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="avery-title text-3xl lg:text-4xl text-navy uppercase leading-tight sticky top-32">
              THE STORY <br/>BEHIND THE <br/>SOCIETY
            </h2>
          </div>
          <div className="lg:w-2/3 space-y-8 font-body text-navy/70 text-[0.95rem] leading-loose">
            <p>
              What she discovered along the way was that there was no roadmap for
              nurses who wanted to leave the bedside and build independent,
              private-pay concierge nursing businesses. There was no strategic
              framework. No step-by-step method. No business ecosystem designed
              specifically for RNs entering this space.
            </p>
            <p>
              So she built one.
            </p>
            <p>
              The Concierge Nurse Business Society is the result of years of
              real-world business building, strategic consulting, and hands-on
              coaching. It is not a generic coaching program repackaged for
              nurses.
            </p>
            <p>
              It is a purpose-built ecosystem with education, toolkits,
              cohort-based learning, strategy sessions, private coaching, and
              consulting services, all designed to meet nurses at every stage
              of their journey.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets This Apart */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="avery-title text-4xl lg:text-5xl text-white uppercase tracking-wide">
              WHAT SETS THIS APART
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              'Built from real-world concierge nursing experience, not theory',
              'A proprietary six-step method validated by every cohort',
              'Five-star rated by every graduate of the Accelerator',
              'Multiple pathways designed for nurses at every stage',
              'Strategic business-building focused on real outcomes',
              'A complete ecosystem, not a one-size-fits-all program',
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-t border-white/20 pt-6">
                <span className="avery-italic text-gold text-4xl mb-6">0{i+1}.</span>
                <p className="font-body text-white/80 text-sm leading-loose">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-navy-dark border-t border-white/5 py-16 flex justify-center">
         <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link to="/start-here" className="btn-secondary border-gold text-gold hover:bg-gold hover:text-navy uppercase tracking-widest text-[0.65rem] px-10 py-4">
              Find Your Path
            </Link>
            <span className="text-white/20 hidden sm:block">|</span>
            <Link to="/strategy" className="btn-secondary border-white/50 text-white hover:bg-white hover:text-navy hover:border-white uppercase tracking-widest text-[0.65rem] px-10 py-4">
              Book a Consult
            </Link>
         </div>
      </section>

    </div>
  );
}

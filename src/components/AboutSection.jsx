import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate progress based on distance from viewport
        const distance = window.innerHeight - rect.top;
        if (distance > 0 && rect.bottom > 0) {
          setOffsetY(distance);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations - High-Speed Scroll (0.85) to ensure full text reveals rapidly
  const textTranslateX = 350 - (offsetY * 0.85); // High starting offset, much faster slide Left on scroll down
  const frontImageY = (offsetY * 0.12); // Pronounced 3D depth effect movement

  return (
    <div ref={sectionRef} className="flex flex-col relative">
      
      {/* Top Dark Statement Section */}
      <section className="bg-navy relative pt-40 pb-56 overflow-hidden z-10 flex flex-col justify-center items-center h-[90vh] lg:h-auto min-h-[600px]">
        
        {/* Faded side images */}
        <div className="absolute left-[5%] top-[10%] w-1/4 h-[80%] opacity-30 mix-blend-luminosity z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://i.imgur.com/AkyJPBt.jpeg")'}} />
        </div>
        <div className="absolute right-[5%] top-[10%] w-1/4 h-[80%] opacity-30 mix-blend-luminosity z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://i.imgur.com/l1V9Kxn.jpeg")'}} />
        </div>

        {/* Text Content */}
        <div className="relative z-20 text-center w-full mt-12 display-flex flex-col items-center">
          <p className="avery-italic text-[#d8d0c1] text-xl lg:text-3xl mb-4 font-light drop-shadow-md lg:absolute lg:-top-16 lg:left-1/2 lg:-translate-x-1/2 w-full">
            You were never meant to stay at the bedside forever.
          </p>
          <div 
            className="transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${textTranslateX}px)` }}
          >
            <h2 className="font-heading text-white text-[7rem] md:text-[10rem] lg:text-[12rem] leading-[0.7] tracking-tighter whitespace-nowrap opacity-95 pointer-events-none select-none uppercase">
              BEYOND THE BEDSIDE
            </h2>
          </div>
        </div>
      </section>

      {/* Breakout Intersecting Image - Static */}
      <div 
        className="relative z-30 flex justify-center -mt-[250px] lg:-mt-[350px] pointer-events-none px-6"
      >
        <div 
          className="w-full max-w-[320px] lg:max-w-[380px] aspect-[4/5] bg-cover bg-center shadow-2xl pointer-events-auto border-4 border-navy shadow-navy/20" 
          style={{ backgroundImage: 'url("https://i.imgur.com/x905uKk.jpeg")'}}
        />
      </div>

      {/* Cream Problem / Credibility Section */}
      <section className="bg-[#f5f2eb] pt-32 lg:pt-64 pb-32 -mt-[50px] lg:-mt-[100px] relative z-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Flow - Image & Quote */}
            <div className="lg:col-span-5 relative order-last lg:order-first mt-16 lg:mt-0">
              <div className="absolute -top-12 lg:-top-24 left-0 lg:-left-12 p-0 w-[300px] z-20 pointer-events-none">
                <p className="avery-italic text-2xl lg:text-3xl text-navy leading-snug drop-shadow-sm">
                  "I built what I teach. Every framework, every tool, every system comes from real experience."
                </p>
              </div>
              <div 
                className="w-full aspect-[3/4] max-w-[320px] ml-auto bg-cover bg-center shadow-md relative z-10" 
                style={{ backgroundImage: 'url("https://i.imgur.com/DvpjpEH.jpg")'}}
              />
            </div>

            {/* Right Flow - Text */}
            <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-24 lg:pl-12">
               <h3 className="avery-title text-3xl sm:text-4xl lg:text-5xl text-navy mb-12 leading-tight uppercase">
                 THE PROBLEM, CREDIBILITY <br/> AND TRANSFORMATION
               </h3>
               <div className="navy-divider mb-8 h-[2px] w-12" />
               <div className="space-y-6 text-navy/70 text-sm md:text-[0.95rem] leading-loose max-w-lg">
                 <p>
                   Tracy is not a life coach with a vague promise. She is a registered nurse, entrepreneur, and business strategist who has built exactly what she teaches.
                 </p>
                 <p>
                   She created the Concierge Nurse Business Society to give nurses something that did not exist when she started: a clear, strategic, step-by-step pathway to building an independent, private-pay concierge nursing business.
                 </p>
               </div>
               
               <div className="mt-16">
                 <Link to="/about" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white inline-block">
                   MORE ABOUT TRACY
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

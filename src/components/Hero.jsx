function InstagramIcon({ size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-navy flex flex-col justify-between overflow-hidden h-screen max-md:-mt-[72px] max-md:pt-[72px] md:-mt-[90px] md:pt-[90px] relative">
      
      {/* Top Part: Content Wrapper */}
      <div className="w-full flex-grow flex flex-col items-center pt-4 lg:pt-12 px-6 lg:px-8 xl:px-12 max-w-[1600px] mx-auto">
        
        {/* Desktop Layout — photo on left, text on right */}
        <div className="hidden md:flex relative w-full h-full min-h-[450px] items-center">
          
          {/* Image Container */}
          <div className="absolute inset-y-0 left-0 h-full w-[60%] flex items-end justify-start z-0">
            <img 
              src="https://i.imgur.com/j8BWW8E.jpeg" 
              alt="Tracy Pekurny"
              className="h-full w-auto object-contain object-left-bottom"
              style={{
                maskImage: 'linear-gradient(to right, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)'
              }}
            />
          </div>

          {/* Social Icons at Bottom Left */}
          <div className="absolute bottom-10 left-10 lg:left-12 flex gap-5 z-20">
            <a href="#" className="w-12 h-12 bg-navy/40 backdrop-blur-md border border-white/60 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300 shadow-lg group">
              <InstagramIcon size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="#" className="w-12 h-12 bg-navy/40 backdrop-blur-md border border-white/60 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300 shadow-lg group">
              <FacebookIcon size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="relative z-10 w-full flex justify-end">
             <div className="p-12 lg:p-16 max-w-3xl text-center flex flex-col items-center w-full md:w-[65%] lg:w-[60%]">
                <p className="font-accent italic text-white text-2xl lg:text-3xl mb-1 drop-shadow-md">
                  You're a
                </p>
                <h1 className="font-heading font-normal text-6xl md:text-[6rem] lg:text-[7.5rem] text-white leading-[0.85] tracking-tight uppercase drop-shadow-md">
                  Registered<br/>Nurse
                </h1>
                <p className="font-accent italic text-white text-3xl md:text-4xl lg:text-5xl mt-6 leading-snug drop-shadow-md">
                  ready to build a<br/>
                  <em className="not-italic font-accent italic text-4xl md:text-5xl lg:text-[4.5rem]">concierge</em><br/>
                  nursing business.
                </p>

                <div className="flex flex-col items-center gap-2 mt-8 mb-6">
                  <span className="bg-black/90 text-white font-body text-[0.75rem] lg:text-sm tracking-[0.2em] uppercase px-4 py-2">
                    You have the clinical skills.
                  </span>
                  <span className="bg-black/90 text-white font-body text-[0.75rem] lg:text-sm tracking-[0.2em] uppercase px-4 py-2">
                    Now let's master the business side.
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 w-full">
                  <span className="h-px flex-grow bg-gradient-to-r from-transparent to-gold max-w-[80px]" />
                  <p className="font-accent text-gold text-sm lg:text-base tracking-[0.2em] uppercase text-center">
                    Concierge Nurse Business Society
                  </p>
                  <span className="h-px flex-grow bg-gradient-to-l from-transparent to-gold max-w-[80px]" />
                </div>
             </div>
          </div>
        </div>

        {/* Mobile Layout — Full-bleed hero image with overlay text */}
        <div className="flex md:hidden flex-col w-full h-full relative">
          
          {/* Image at Top */}
          <div className="absolute inset-x-0 top-0 h-[50%] z-0 overflow-hidden">
            <img 
              src="https://i.imgur.com/j8BWW8E.jpeg" 
              alt="Tracy Pekurny"
              className="w-full h-full object-cover object-[center_top]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
              }}
            />
          </div>

          {/* Content pinned to bottom, centered */}
          <div className="relative z-10 w-full flex-grow flex flex-col justify-end items-center text-center px-6 pb-12 pt-20">
            <p className="font-accent italic text-white/90 text-xl mb-2 leading-tight">
              You're a
            </p>
            <h1 className="avery-title text-6xl text-white leading-[0.85] tracking-tight uppercase mb-4">
              Registered<br/>Nurse
            </h1>
            <p className="font-accent italic text-white/90 text-xl leading-snug mb-8">
              ready to build a <em className="not-italic font-accent italic text-gold text-2xl">concierge</em><br/>
              nursing business.
            </p>

            {/* Elegant Subheadline Block */}
            <div className="flex flex-col items-center mb-10 w-full max-w-[280px]">
              <div className="py-4 w-full">
                <p className="text-white/70 font-body text-[0.6rem] tracking-[0.25em] uppercase text-center mb-2">
                  You have the clinical skills.
                </p>
                <p className="text-gold font-body text-[0.6rem] tracking-[0.25em] uppercase text-center font-medium">
                  Now master the business side.
                </p>
              </div>
            </div>

            {/* Mobile Social Icons matching desktop style */}
            <div className="flex justify-center gap-5 z-20">
              <a href="#" className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-300">
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

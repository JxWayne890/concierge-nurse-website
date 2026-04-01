import { Link } from 'react-router-dom';

export default function FeaturedPrograms() {
  return (
    <section className="w-full flex flex-col bg-navy pt-8 pb-32">
      <div className="max-w-[1600px] w-full mx-auto p-4 lg:p-8 flex flex-col gap-4 lg:gap-8">

        {/* Top Split Row */}
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 h-auto lg:h-[650px]">

          {/* Left Block - The Accelerator */}
          <div
            className="flex-1 relative bg-cover bg-center flex flex-col items-center justify-center p-12 min-h-[500px]"
            style={{ backgroundImage: 'url("https://i.imgur.com/gC6qRpI.jpeg")'}}
          >
            <div className="absolute inset-0 bg-navy/60 z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
               <h3 className="avery-title text-4xl lg:text-5xl text-white mb-6 uppercase tracking-wider drop-shadow-md">
                 THE ACCELERATOR
               </h3>
               <p className="font-body text-white/80 text-xs lg:text-[0.85rem] leading-relaxed mb-10 drop-shadow">
                 A six-week live cohort where you build your entire concierge nursing business from the ground up. Not a course. Not theory. Real business, built step by step.
               </p>
               <Link to="/accelerator" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white text-[0.65rem] px-8 tracking-[0.2em]">
                 JOIN THE WAITLIST
               </Link>
            </div>
          </div>

          {/* Right Block - Clarity Consult */}
          <div
            className="flex-1 relative bg-cover bg-center flex items-center justify-center p-8 min-h-[500px]"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200")'}}
          >
             <div className="absolute inset-0 bg-white/10 z-0 mix-blend-overlay"></div>

             <div className="relative z-10 bg-cream p-12 lg:p-16 w-full max-w-md flex flex-col items-center text-center shadow-2xl">
                <h3 className="avery-title text-3xl lg:text-[2.5rem] text-navy mb-6 tracking-normal">
                  CLARITY CONSULT
                </h3>
                <p className="font-body text-navy/70 text-xs lg:text-[0.8rem] leading-relaxed mb-10 pb-2 max-w-[280px]">
                  A 60-minute private strategy session to expose exactly where you are, what is holding you back, and what your next move should be. Walk away with a personalized 30-day action plan.
                </p>
                <Link to="/strategy" className="btn-secondary border-navy text-navy hover:bg-navy hover:text-white uppercase tracking-widest text-[0.65rem] px-8 py-[0.6rem]">
                  BOOK YOUR SESSION
                </Link>
             </div>
          </div>

        </div>

        {/* Bottom Full-Width Block - Business Diagnostics */}
        <div
          className="w-full relative h-[450px] lg:h-[650px] bg-cover bg-center flex flex-col items-center justify-center p-8"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1600")'}}
        >
           <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/30 z-0"></div>

           <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mt-auto lg:mt-32 pb-12 lg:pb-0">
             <h2 className="avery-title text-6xl md:text-[5.5rem] lg:text-[7.5rem] text-white tracking-widest leading-[0.9] mb-6 drop-shadow-xl select-none">
               CONSULTING
             </h2>
             <p className="avery-italic text-white/90 text-sm lg:text-md leading-relaxed mb-12 max-w-md font-light px-4 drop-shadow-md">
               For established concierge nurse business owners doing six to seven figures who have hit a ceiling. Deep diagnostics. Strategic implementation. Real results.
             </p>
             <Link to="/consulting" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white text-[0.65rem] px-8 tracking-widest">
               INQUIRE NOW
             </Link>
           </div>
        </div>

      </div>
    </section>
  );
}

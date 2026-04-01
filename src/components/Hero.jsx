import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-navy flex flex-col justify-between overflow-hidden h-[calc(100vh-72px)] relative">
      
      {/* Top Part: Content Wrapper */}
      <div className="w-full flex-grow flex flex-col items-center pt-4 lg:pt-12 px-6 lg:px-8 xl:px-12 max-w-[1600px] mx-auto">
        
        {/* Desktop Layout Overlay */}
        <div 
          className="hidden md:flex relative w-full h-full min-h-[450px] items-center bg-cover border border-white/10"
          style={{ backgroundImage: 'url("https://i.imgur.com/V5zt5SD.jpeg")', backgroundPosition: 'center 15%' }}
        >
           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,22,40,0.7)_0%,rgba(10,22,40,0.1)_60%,transparent_100%)]"></div>
           
           <div className="relative z-10 p-12 lg:p-16 max-w-3xl">
              <h1 className="font-heading font-normal text-6xl lg:text-[5.8rem] text-white mb-6 leading-[1.02] drop-shadow-md tracking-tight uppercase">
                BUILD, LAUNCH <br/>
                <span className="italic normal-case text-gold px-1">&</span> SCALE YOUR <br/>
                NURSING BUSINESS
              </h1>
              
              <p className="font-body text-white/90 text-sm lg:text-[1rem] leading-loose mb-10 max-w-md drop-shadow-md">
                Strategic business-building for nurses who refuse to settle for the bedside. Education, consulting, and hands-on coaching to scale to six figures and beyond.
              </p>
              
              <Link to="/start-here" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white shadow-sm">
                FIND YOUR PATH
              </Link>
           </div>
        </div>

        <div className="flex md:hidden flex-col w-full h-full pb-10 pt-4">
           {/* Invisible Frame, Perfect Square Photo */}
           <div className="px-14 w-full mb-4">
             <div 
               className="w-full aspect-square bg-cover bg-center shrink-0"
               style={{ backgroundImage: 'url("https://i.imgur.com/V5zt5SD.jpeg")'}}
             />
           </div>
           
           {/* Left-Aligned Text Content */}
           <div className="w-full flex-grow flex flex-col items-start justify-center text-left pt-10">
              <h1 className="font-heading font-normal text-[3.1rem] text-white mb-6 leading-[1.02] tracking-tight uppercase">
                BUILD, LAUNCH <br/>
                <span className="italic normal-case text-gold px-1">&</span> SCALE YOUR <br/>
                NURSING BUSINESS
              </h1>
              
              <p className="font-body text-white/90 text-[1.1rem] leading-relaxed mb-10 max-w-sm">
                Strategic business-building for nurses who refuse to settle for the bedside. Education, consulting, and hands-on coaching to scale to six figures and beyond.
              </p>
              
              <Link to="/start-here" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white w-full max-w-[260px] text-center py-4 text-[0.75rem] tracking-widest uppercase mt-auto">
                FIND YOUR PATH
              </Link>
           </div>
        </div>

      </div>

      {/* Trust Bar Row (Desktop Only) */}
      <div className="hidden md:flex w-full items-center justify-center gap-12 lg:gap-16 pb-10 pt-4">
          <p className="font-body text-white/40 text-[0.65rem] tracking-[0.2em] uppercase whitespace-nowrap pt-1">
            Featured In
          </p>
          <div className="flex items-center gap-12 lg:gap-20 opacity-80">
            <span className="font-heading text-3xl text-white tracking-[0.1em] font-light uppercase">
              LOGO
            </span>
            <span className="font-heading text-3xl text-white tracking-[0.1em] font-light uppercase">
              LOGO
            </span>
            <span className="font-heading text-3xl text-white tracking-[0.1em] font-light uppercase">
              LOGO
            </span>
            <span className="font-heading text-3xl text-white tracking-[0.1em] font-light uppercase">
              LOGO
            </span>
          </div>
      </div>
      
    </section>
  );
}

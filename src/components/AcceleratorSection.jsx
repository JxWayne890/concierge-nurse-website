import { Link } from 'react-router-dom';

export default function AcceleratorSection() {
  return (
    <section className="bg-navy py-12 lg:py-24 flex flex-col items-center overflow-hidden">
      
      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12">
        
        {/* Large Embedded Image Block for Accelerator */}
        <div 
          className="relative w-full min-h-[65vh] lg:min-h-[85vh] flex items-center justify-center bg-cover bg-center border border-white/10 overflow-hidden"
          style={{ backgroundImage: 'url("https://i.imgur.com/gC6qRpI.jpeg")'}}
        >
           {/* Lighter overlay to ensure image is clearly visible */}
           <div className="absolute inset-0 bg-navy/30"></div>
           
           {/* Text Content inside the image */}
           <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl text-center flex flex-col items-center">
              <h2 className="font-heading font-normal text-5xl lg:text-[6rem] text-white mb-8 leading-tight tracking-tight uppercase">
                THE <br/>
                ACCELERATOR
              </h2>
              
              <p className="font-body text-white/90 text-sm lg:text-[1.1rem] leading-loose mb-12 max-w-2xl">
                A six-week live cohort where you build your entire concierge nursing business from the ground up. Not a course. Not theory. Real business, built step by step.
              </p>
              
              <Link to="/accelerator" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white px-10 py-4 text-xs tracking-[0.3em] uppercase">
                JOIN THE WAITLIST
              </Link>
           </div>
        </div>
      </div>
      
    </section>
  );
}

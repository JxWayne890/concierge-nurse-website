import { Link } from 'react-router-dom';

export default function AcceleratorSection() {
  return (
    <section className="bg-cream py-12 lg:py-24 flex flex-col items-center overflow-hidden">

      <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12">

        {/* Large Typography Block for Accelerator */}
        <div className="relative w-full min-h-[65vh] lg:min-h-[85vh] flex items-center justify-center bg-navy overflow-hidden">

          {/* Subtle gold corner ornaments */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold/50" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-gold/50" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-gold/50" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-gold/50" />

          {/* Text Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl text-center flex flex-col items-center">
            <p className="font-body text-gold text-[0.65rem] lg:text-[0.7rem] tracking-[0.35em] uppercase mb-6">
              Live Cohort · Six Weeks · Flagship
            </p>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-[3.75rem] text-white mb-8 leading-[1.1] tracking-tight uppercase">
              THE CONCIERGE NURSE <br/>
              SIX STEP BUSINESS METHOD <br/>
              <span className="text-gold">COHORT ACCELERATOR</span>
            </h2>
            <div className="gold-divider mx-auto mb-8" />

            <p className="font-body text-white/90 text-sm lg:text-[1.05rem] leading-loose mb-8 max-w-2xl">
              Six weeks. Live instruction. A small cohort of experienced nurses building a concierge nurse business using the proven six-step method. Structured. Strategic. Results-driven.
            </p>

            <div className="text-left w-full max-w-lg mb-12 bg-white/5 border border-white/10 p-6">
              <p className="text-gold font-bold text-[0.65rem] tracking-[0.15em] uppercase mb-4 text-center">What is Included:</p>
              <ul className="space-y-3">
                {[
                  'Six weeks of live instruction and Q&A',
                  'Both Toolkits and the Planner included',
                  'Business structuring, offer development, pricing strategy, operations, and marketing modules',
                  'Private community cohort group'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span className="text-white/80 text-[0.85rem] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/accelerator" className="btn-white text-white border-white bg-transparent hover:bg-white hover:text-navy hover:border-white px-10 py-4 text-xs tracking-[0.3em] uppercase">
              JOIN THE WAITLIST
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

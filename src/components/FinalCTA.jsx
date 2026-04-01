import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="section-label mb-6">Ready to Begin?</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Your Concierge Nursing Business{' '}
          <span className="text-gold-gradient">Starts Here</span>
        </h2>
        <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you are just getting curious, ready to build, or looking to
          scale what you have already started, there is a clear next step
          waiting for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link to="/start-here" className="btn-primary flex items-center justify-center gap-2">
            Choose Your Path <ArrowRight size={14} />
          </Link>
          <Link to="/strategy" className="btn-secondary flex items-center justify-center gap-2">
            Book a Clarity Consult
          </Link>
          <Link to="/community" className="btn-white flex items-center justify-center gap-2">
            Join Free Community
          </Link>
        </div>

        <p className="text-white/30 text-sm">
          Not sure where to start?{' '}
          <Link to="/start-here" className="text-gold hover:text-gold-light underline transition-colors">
            Take the guided path quiz
          </Link>{' '}
          and we will point you in the right direction.
        </p>
      </div>
    </section>
  );
}

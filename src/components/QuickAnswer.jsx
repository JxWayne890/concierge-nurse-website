import { Lightbulb } from 'lucide-react';

export default function QuickAnswer({ children }) {
  return (
    <div className="bg-cream border border-gold/30 p-6 sm:p-8 mb-10 relative">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-gold/10 flex items-center justify-center mt-0.5">
          <Lightbulb size={16} className="text-gold" />
        </div>
        <div>
          <p className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-gold mb-2">
            Quick Answer
          </p>
          <div className="text-charcoal text-[0.95rem] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

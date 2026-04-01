import { Star, BookOpen, Users, Target } from 'lucide-react';

const items = [
  { icon: Star, text: 'Five-Star Rated by Every Cohort Graduate' },
  { icon: BookOpen, text: 'Education, Consulting & Hands-On Coaching' },
  { icon: Users, text: 'Trusted by Nurses Building Private-Pay Businesses' },
  { icon: Target, text: 'Strategic Business-Building, Not Theory' },
];

export default function TrustStrip() {
  return (
    <section className="bg-cream border-y border-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <item.icon size={16} className="text-gold flex-shrink-0" />
              <span className="text-charcoal/70 text-[0.78rem] font-medium tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

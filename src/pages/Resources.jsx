import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const approvedResources = [
  {
    icon: BookOpen,
    title: 'What Is a Concierge Nurse?',
    description:
      'A category-awareness guide to understanding concierge nursing, who it serves, and how this emerging business model differs from traditional care settings.',
    link: '/resources/what-is-a-concierge-nurse',
  },
  {
    icon: Layers,
    title: 'Concierge Nursing Niches Guide',
    description:
      'A high-level guide to the kinds of concierge nurse business categories nurses are exploring as this private-pay model grows.',
    link: '/resources/concierge-nursing-niches',
  },
];

const resourceSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Concierge Nurse Business Resources',
  description:
    'Approved category-awareness resources for nurses exploring concierge nurse businesses.',
  url: 'https://www.conciergenursesociety.com/resources',
  provider: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
};

export default function Resources() {
  return (
    <>
      <SEO
        title="Concierge Nurse Business Resources"
        description="Approved category-awareness resources for nurses exploring concierge nurse businesses."
        canonical="/resources"
        type="website"
        schema={resourceSchema}
      />

      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Resources</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
            Concierge Nurse <span className="text-gold-gradient">Business Resources</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            A small approved library for nurses learning about the emerging
            concierge nurse business category.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {approvedResources.map((resource) => (
            <Link
              key={resource.title}
              to={resource.link}
              className="block bg-white border border-cream-dark p-8 no-underline group hover:border-gold/40 transition-colors"
            >
              <div className="w-12 h-12 bg-navy flex items-center justify-center mb-6">
                <resource.icon size={22} className="text-gold" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {resource.title}
              </h2>
              <p className="text-slate text-sm leading-relaxed mb-6">
                {resource.description}
              </p>
              <span className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.15em] font-semibold">
                Read Resource <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

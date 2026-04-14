import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'honest-answer', text: 'The Honest Answer' },
  { id: 'what-determines-income', text: 'What Determines Your Income' },
  { id: 'revenue-math', text: 'Understanding the Revenue Math' },
  { id: 'realistic-timeline', text: 'A Realistic Timeline' },
  { id: 'building-blocks', text: 'The Building Blocks of Higher Income' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "Is Concierge Nursing Saturated?",
    description: "Understand the market opportunity for new concierge nurses.",
    link: "/resources/mindset/is-concierge-nursing-saturated",
    category: "Mindset",
  },
  {
    title: "What If I Fail?",
    description: "Managing financial risk when starting your business.",
    link: "/resources/mindset/what-if-nursing-business-fails",
    category: "Mindset",
  },
  {
    title: "Concierge Nurse Pricing Guide",
    description: "Learn how to price your services for profitability.",
    link: "/resources/concierge-nurse-pricing-guide",
    category: "Planning",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to make six figures as a concierge nurse?",
      "acceptedAnswer": { "@type": "Answer", "text": "It varies significantly. Some nurses reach six-figure revenue within 12 to 18 months; others take two to three years. Timeline depends on your market, pricing, marketing effort, and referral network development." }
    },
    {
      "@type": "Question",
      "name": "Can I make six figures working part-time?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on your pricing and efficiency. Higher rates, package pricing, and a strong referral pipeline can make significant income possible with fewer hours than traditional nursing, but six figures typically requires a substantial client volume." }
    },
    {
      "@type": "Question",
      "name": "What are the biggest expenses that reduce my take-home pay?",
      "acceptedAnswer": { "@type": "Answer", "text": "Self-employment taxes (approximately 15.3%), income taxes, liability insurance, business insurance, phone and email systems, marketing costs, supplies, and mileage are the primary expenses. Budget carefully to understand your true net income." }
    },
    {
      "@type": "Question",
      "name": "Should I quit my hospital job immediately to go full-time?",
      "acceptedAnswer": { "@type": "Answer", "text": "Many successful concierge nurses start their business while still employed and transition gradually as client volume grows. This reduces financial pressure during the startup phase." }
    },
    {
      "@type": "Question",
      "name": "Is the income consistent or unpredictable?",
      "acceptedAnswer": { "@type": "Answer", "text": "Income can be variable, especially in the early months. Building multiple referral sources, offering recurring service plans, and maintaining a strong marketing presence helps stabilize revenue over time." }
    }
  ]
};

export default function SixFigures() {
  return (
    <ResourceLayout
      title="Can I Really Make Six Figures as a Concierge Nurse?"
      description="An honest look at the income potential of concierge nursing, including what determines your earning potential, realistic timelines, and the business factors that matter most."
      canonical="/resources/mindset/can-concierge-nurses-make-six-figures"
      category="Mindset"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >

      <QuickAnswer>
        <p>
          Yes, six-figure income is achievable in concierge nursing, but it does not happen overnight and it is not guaranteed. Your income depends on your pricing, the volume of clients you serve, your specialization, your referral network, and how effectively you run your business. Some concierge nurses reach six figures within their first year or two; others build more gradually. The potential is real, but it requires treating this as a business, not just a nursing job.
        </p>
      </QuickAnswer>

      <p>
        This question deserves an honest, nuanced answer — not hype. Let us walk through the real factors that determine concierge nursing income and give you a framework for understanding your earning potential.
      </p>

      <h2 id="honest-answer">The Honest Answer</h2>
      <p>
        Six-figure income is absolutely possible in concierge nursing. It is also not automatic. The nurses who reach this level treat their practice as a business, not a side gig. They price strategically, build referral relationships, market consistently, and deliver exceptional care. What concierge nursing offers that hospital employment does not is the removal of the income ceiling.
      </p>

      <h2 id="what-determines-income">What Determines Your Income</h2>
      <p>
        Your income is shaped by your pricing, client volume, specialization, geographic market, and business acumen. Each of these factors is within your control and can be developed strategically. How to optimize each one is a core focus of our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.
      </p>

      <h2 id="revenue-math">Understanding the Revenue Math</h2>
      <p>
        Gross revenue depends on your rate structure and client volume. But gross revenue is not take-home pay — you must account for self-employment taxes, income taxes, insurance, supplies, marketing, and other business expenses. Understanding the real math behind concierge nursing income is essential for setting realistic expectations. Our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> includes detailed financial planning frameworks.
      </p>

      <h2 id="realistic-timeline">A Realistic Timeline</h2>
      <p>
        Building a concierge nursing practice takes time. The first months focus on business setup and establishing referral relationships. Income grows as your reputation builds and referral networks develop. Many nurses supplement with part-time hospital work during the startup phase. The specific timeline depends on your market, effort, and strategy.
      </p>

      <h2 id="building-blocks">The Building Blocks of Higher Income</h2>
      <p>
        Surgeon referral relationships, service packages, testimonials, strategic rate increases, and business skill development are all building blocks of growing income. Each requires specific strategies and execution that we teach in our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.
      </p>

      <p>
        The income potential in concierge nursing is real, but it requires commitment, strategy, and patience. For guided support, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>


      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take to make six figures as a concierge nurse?</h3>
            <p>It varies significantly. Some nurses reach six-figure revenue within 12 to 18 months; others take two to three years. Timeline depends on your market, pricing, marketing effort, and referral network development.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I make six figures working part-time?</h3>
            <p>It depends on your pricing and efficiency. Higher rates, package pricing, and a strong referral pipeline can make significant income possible with fewer hours than traditional nursing, but six figures typically requires a substantial client volume.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What are the biggest expenses that reduce my take-home pay?</h3>
            <p>Self-employment taxes (approximately 15.3%), income taxes, liability insurance, business insurance, phone and email systems, marketing costs, supplies, and mileage are the primary expenses. Budget carefully to understand your true net income.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I quit my hospital job immediately to go full-time?</h3>
            <p>Many successful concierge nurses start their business while still employed and transition gradually as client volume grows. This reduces financial pressure during the startup phase.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is the income consistent or unpredictable?</h3>
            <p>Income can be variable, especially in the early months. Building multiple referral sources, offering recurring service plans, and maintaining a strong marketing presence helps stabilize revenue over time.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

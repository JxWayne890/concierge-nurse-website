import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'thinking-ahead', text: "Why Think About Exit Now?" },
  { id: 'sellable-business', text: "Building a Sellable Business" },
  { id: 'valuation', text: "How Nursing Businesses Are Valued" },
  { id: 'preparing', text: "Preparing for Sale" },
  { id: 'alternatives', text: "Alternatives to Selling" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "How to Go from Solo Nurse to Agency",
    description: "Agencies are more sellable than solo practices.",
    link: '/resources/scaling/solo-nurse-to-nursing-agency',
    category: 'Scaling',
  },
  {
    title: "Year-End Review",
    description: "Regular reviews keep your business in sell-ready shape.",
    link: '/resources/planning/concierge-nursing-year-end-review',
    category: 'Planning',
  },
  {
    title: "The Concierge Nursing Business Model vs. Traditional Employment",
    description: "Understanding business value in the concierge model.",
    link: '/resources/trends/concierge-nursing-vs-traditional-employment',
    category: 'Industry Trends',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a concierge nursing business be sold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but the saleability depends on how the business is structured. Businesses that depend entirely on the owner are difficult to sell. Businesses with documented systems, a team, recurring revenue, and transferable client relationships are more attractive to buyers."
      }
    },
    {
      "@type": "Question",
      "name": "What makes a concierge nursing business valuable to a buyer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buyers look for recurring revenue, documented systems and processes, a team that operates independently, strong referral relationships, a recognizable brand, and clean financial records. The less the business depends on you personally, the more valuable it is."
      }
    },
    {
      "@type": "Question",
      "name": "How is a nursing business valued?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small service businesses are typically valued at a multiple of annual revenue or net profit. The specific multiple depends on growth trends, client retention rates, revenue predictability, and the quality of business systems. A business broker or accountant can provide a formal valuation."
      }
    },
    {
      "@type": "Question",
      "name": "What if I want to retire but not sell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alternatives to selling include winding down gradually (reducing clients over time), transitioning to a part-time advisory role, merging with another practice, or passing the business to a family member or trusted employee. Each option has different financial and emotional implications."
      }
    }
  ]
};

export default function SellExit() {
  return (
    <ResourceLayout
      title={"How to Sell or Exit Your Concierge Nursing Business"}
      description={"Plan your exit strategy — how to build a concierge nursing business that can be sold, what buyers look for, and how to prepare for a successful transition."}
      canonical="/resources/scaling/sell-exit-concierge-nursing-business"
      category="Scaling"
      categorySlug="/resources/scaling"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Every business owner should think about their exit strategy, even if exit is years away. Building a sellable concierge nursing business means creating systems that run without you, developing a team that delivers consistent quality, documenting everything, and building a brand with transferable value. Whether you ultimately sell, merge, or wind down, planning ahead gives you options and maximizes the value of what you have built.
        </p>
      </QuickAnswer>

      <h2 id="thinking-ahead">Why Think About Exit Now?</h2>
      <p>Even if you love your work and have no plans to leave, thinking about exit strategy makes your business better today. A business built to be sellable is a well-run business — documented systems, reliable team, predictable revenue, and clean finances. These qualities make your practice more enjoyable to run, more profitable, and more resilient.</p>

      <h2 id="sellable-business">Building a Sellable Business</h2>
      <p>The biggest factor in saleability is whether the business can operate without you. A solo practice where you are the only nurse, the brand, and the sales force has limited value to a buyer. A multi-nurse practice with systems, a <Link to="/resources/scaling/concierge-nursing-training-manual" className="text-gold hover:text-gold/80 underline">training manual</Link>, documented processes, and transferable referral relationships has real market value.</p>
      <ul>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Build systems that work without your personal involvement</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Develop a team that delivers consistent quality</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Create recurring revenue through retainer models and long-term client relationships</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Maintain clean, accurate financial records</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Build a brand that is bigger than your personal name</span></li>
      </ul>

      <h2 id="valuation">How Nursing Businesses Are Valued</h2>
      <p>Small healthcare service businesses are typically valued as a multiple of annual revenue or net profit. Multiples vary based on revenue trends, client retention, predictability, and business systems quality. A business broker experienced in healthcare businesses can provide a formal valuation when you are ready.</p>

      <h2 id="preparing">Preparing for Sale</h2>
      <p>Start preparing at least one to two years before a planned sale. Clean up your finances, document all processes, strengthen client relationships, and ensure your team can operate independently. The preparation period is when you make your business as attractive as possible to buyers.</p>

      <h2 id="alternatives">Alternatives to Selling</h2>
      <p>Selling is not the only exit option. You can transition to an advisory role, merge with another practice, gradually wind down, or pass the business to a successor. The <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> can help you evaluate which exit path best fits your personal and financial goals.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can a concierge nursing business be sold?</h3>
            <p>Yes, but the saleability depends on how the business is structured. Businesses that depend entirely on the owner are difficult to sell. Businesses with documented systems, a team, recurring revenue, and transferable client relationships are more attractive to buyers.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What makes a concierge nursing business valuable to a buyer?</h3>
            <p>Buyers look for recurring revenue, documented systems and processes, a team that operates independently, strong referral relationships, a recognizable brand, and clean financial records. The less the business depends on you personally, the more valuable it is.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How is a nursing business valued?</h3>
            <p>Small service businesses are typically valued at a multiple of annual revenue or net profit. The specific multiple depends on growth trends, client retention rates, revenue predictability, and the quality of business systems. A business broker or accountant can provide a formal valuation.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if I want to retire but not sell?</h3>
            <p>Alternatives to selling include winding down gradually (reducing clients over time), transitioning to a part-time advisory role, merging with another practice, or passing the business to a family member or trusted employee. Each option has different financial and emotional implications.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

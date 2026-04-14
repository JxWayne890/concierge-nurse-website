import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'demand-drivers', text: "What Is Driving Demand" },
  { id: 'supply-drivers', text: "What Is Driving Supply" },
  { id: 'market-factors', text: "Market and Economic Factors" },
  { id: 'evidence', text: "Evidence of Growth" },
  { id: 'opportunity', text: "What This Means for You" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "The Future of Concierge Nursing",
    description: "Where concierge nursing is headed in 2026 and beyond.",
    link: '/resources/trends/future-of-concierge-nursing',
    category: 'Industry Trends',
  },
  {
    title: "Why Patients Are Choosing Private-Pay Nursing",
    description: "The consumer perspective on concierge nursing demand.",
    link: '/resources/trends/patients-choosing-private-pay-nursing',
    category: 'Industry Trends',
  },
  {
    title: "What Is a Concierge Nurse?",
    description: "Understand the model driving this growth.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is concierge nursing growing so fast?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concierge nursing growth is driven by consumer dissatisfaction with traditional healthcare, the rise of outpatient and same-day surgery, nurse burnout and workforce shortages, the normalization of cash-pay healthcare, and an aging population that wants to age in place with professional support."
      }
    },
    {
      "@type": "Question",
      "name": "Is the concierge nursing market saturated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. While awareness is growing, the vast majority of potential clients have never heard of concierge nursing and most geographic markets remain underserved. The opportunity is still early-stage in most areas."
      }
    },
    {
      "@type": "Question",
      "name": "How does the nursing shortage affect concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The nursing shortage creates opportunity in two ways: it pushes more nurses to explore independent practice alternatives, and it reduces the quality of institutional care, driving more patients toward private-pay options."
      }
    },
    {
      "@type": "Question",
      "name": "Will insurance companies start covering concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is unlikely in the near term. Concierge nursing's value proposition is built on personalization and availability that insurance-based models cannot support. The cash-pay model is a feature, not a limitation."
      }
    }
  ]
};

export default function FastestGrowingNiche() {
  return (
    <ResourceLayout
      title={"Why Concierge Nursing Is the Fastest-Growing Nursing Niche"}
      description={"Understand the forces driving concierge nursing growth — consumer demand, workforce trends, healthcare delivery changes, and economic factors creating unprecedented opportunity."}
      canonical="/resources/trends/concierge-nursing-fastest-growing-niche"
      category="Industry Trends"
      categorySlug="/resources/trends"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Concierge nursing is growing rapidly because of a convergence of demand-side and supply-side factors. On the demand side: an aging population, the rise of outpatient surgery, consumer expectation for premium healthcare experiences, and frustration with insurance-limited care. On the supply side: nurse burnout, workforce shortages pushing nurses toward alternative careers, and the maturation of business education resources for nurse entrepreneurs.
        </p>
      </QuickAnswer>

      <h2 id="demand-drivers">What Is Driving Demand</h2>
      <p>Consumer demand for concierge nursing is rising because traditional healthcare often fails to deliver personalized, timely, convenient care. Patients who can afford private-pay services are choosing them — and the demographic of people who can and will pay is expanding.</p>
      <p>The growth of outpatient and same-day surgery means more patients recovering at home without clinical oversight. Aging baby boomers want to stay in their homes with professional health monitoring. Post-surgical patients want premium recovery experiences. And <Link to="/resources/trends/patients-choosing-private-pay-nursing" className="text-gold hover:text-gold/80 underline">more patients are choosing private-pay</Link> across all demographics.</p>

      <h2 id="supply-drivers">What Is Driving Supply</h2>
      <p><Link to="/resources/trends/nurses-leaving-hospitals-entrepreneurship" className="text-gold hover:text-gold/80 underline">Nurses are leaving hospitals</Link> in record numbers. Burnout, understaffing, moral injury, and the desire for autonomy are pushing experienced nurses toward independent practice. The availability of business education resources, mentorship programs, and communities like the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link> makes the transition more accessible than ever.</p>

      <h2 id="market-factors">Market and Economic Factors</h2>
      <p>The <Link to="/resources/trends/rise-of-cash-pay-healthcare" className="text-gold hover:text-gold/80 underline">rise of cash-pay healthcare</Link> has normalized direct payment for medical services. Low barriers to entry (compared to opening a clinic) and the mobile nature of the work make concierge nursing accessible to nurses in diverse geographic and financial situations.</p>

      <h2 id="evidence">Evidence of Growth</h2>
      <p>Growth is visible in the expansion of online communities for concierge nurses, the increasing number of training programs, growing consumer search volume for concierge nursing services, and the emergence of multi-nurse agencies in markets where solo practitioners once dominated.</p>

      <h2 id="opportunity">What This Means for You</h2>
      <p>If you are considering concierge nursing, the timing is favorable. The market is growing but not saturated, resources for starting are more available than ever, and consumer awareness is building. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> helps you capitalize on this window of opportunity with a proven launch framework.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Why is concierge nursing growing so fast?</h3>
            <p>Concierge nursing growth is driven by consumer dissatisfaction with traditional healthcare, the rise of outpatient and same-day surgery, nurse burnout and workforce shortages, the normalization of cash-pay healthcare, and an aging population that wants to age in place with professional support.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is the concierge nursing market saturated?</h3>
            <p>No. While awareness is growing, the vast majority of potential clients have never heard of concierge nursing and most geographic markets remain underserved. The opportunity is still early-stage in most areas.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How does the nursing shortage affect concierge nursing?</h3>
            <p>The nursing shortage creates opportunity in two ways: it pushes more nurses to explore independent practice alternatives, and it reduces the quality of institutional care, driving more patients toward private-pay options.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Will insurance companies start covering concierge nursing?</h3>
            <p>This is unlikely in the near term. Concierge nursing's value proposition is built on personalization and availability that insurance-based models cannot support. The cash-pay model is a feature, not a limitation.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'when-expand', text: "When Geographic Expansion Makes Sense" },
  { id: 'market-research', text: "Researching Your New Market" },
  { id: 'staffing', text: "Staffing a Remote Location" },
  { id: 'operations', text: "Operational Considerations" },
  { id: 'financial-planning', text: "Financial Planning for Expansion" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "How to Go from Solo Nurse to Agency",
    description: "Multi-location expansion builds on the agency foundation.",
    link: '/resources/scaling/solo-nurse-to-nursing-agency',
    category: 'Scaling',
  },
  {
    title: "How to Hire Your First Subcontractor",
    description: "Staffing is the biggest challenge in new locations.",
    link: '/resources/scaling/hire-first-subcontractor-nursing',
    category: 'Scaling',
  },
  {
    title: "Concierge Nursing for Rural Nurses",
    description: "New locations may include underserved rural markets.",
    link: '/resources/for/concierge-nursing-rural-nurses',
    category: 'For You',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if my concierge nursing business is ready for a second location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your first location should be running smoothly without your daily presence, you should have strong systems and a capable team, your finances should support the investment, and you should have identified a market with genuine demand for concierge nursing services."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate business entity for a second location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily, but it depends on state regulations and your liability strategy. If expanding to a different state, you will need to register as a foreign entity or create a new entity in that state. Consult your healthcare attorney."
      }
    },
    {
      "@type": "Question",
      "name": "What is the biggest challenge of running a multi-location nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maintaining consistent quality across locations you cannot personally oversee daily. Strong training systems, reliable team leads, clear communication protocols, and regular quality audits are essential."
      }
    },
    {
      "@type": "Question",
      "name": "Can I expand virtually instead of physically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Virtual concierge nursing services can extend your reach without the overhead of a physical location. Many practices combine local in-person services with virtual services that serve a broader geographic area."
      }
    }
  ]
};

export default function SecondLocation() {
  return (
    <ResourceLayout
      title={"How to Open a Second Location for Your Nursing Business"}
      description={"A guide to expanding your concierge nursing business to a second geographic market — market research, staffing, operations, and financial planning."}
      canonical="/resources/scaling/open-second-location-nursing-business"
      category="Scaling"
      categorySlug="/resources/scaling"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Opening a second location extends your concierge nursing brand to a new geographic market. This is a significant step that requires a proven first location, strong operational systems, reliable team leadership, market research confirming demand, and financial reserves for the investment. Most concierge nursing businesses benefit from establishing a strong multi-nurse operation in one market before expanding geographically.
        </p>
      </QuickAnswer>

      <h2 id="when-expand">When Geographic Expansion Makes Sense</h2>
      <p>Geographic expansion makes sense when your first location runs without your constant involvement, you have systems that can be replicated, and there is clear demand in another market. It does not make sense as a fix for problems in your current market — solve those first.</p>

      <h2 id="market-research">Researching Your New Market</h2>
      <p>Study the target market's demographics, existing concierge nursing competition, referral source landscape (surgeons, physicians, hospitals), cost of living and pricing considerations, and regulatory environment. The market that works for your first location may not translate directly to a new area.</p>

      <h2 id="staffing">Staffing a Remote Location</h2>
      <p>You need someone you trust to be the face of your brand in the new market. This person — whether an employee, subcontractor, or partner — sets the tone for the new location. Use your <Link to="/resources/scaling/concierge-nursing-training-manual" className="text-gold hover:text-gold/80 underline">training manual</Link> to ensure consistency, but allow for local adaptation.</p>

      <h2 id="operations">Operational Considerations</h2>
      <p>Multi-location operations require communication systems, centralized scheduling and documentation, financial tracking by location, and quality assurance processes that work remotely. Technology is your ally — invest in <Link to="/resources/best/crm-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">CRM</Link> and <Link to="/resources/best/scheduling-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">scheduling software</Link> that support multi-location management.</p>

      <h2 id="financial-planning">Financial Planning for Expansion</h2>
      <p>Budget for startup costs in the new market including marketing, staffing, insurance, and a financial runway for the ramp-up period before the new location becomes profitable. Do not fund expansion by draining your first location's reserves. The <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> can help you plan expansion finances responsibly.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I know if my concierge nursing business is ready for a second location?</h3>
            <p>Your first location should be running smoothly without your daily presence, you should have strong systems and a capable team, your finances should support the investment, and you should have identified a market with genuine demand for concierge nursing services.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a separate business entity for a second location?</h3>
            <p>Not necessarily, but it depends on state regulations and your liability strategy. If expanding to a different state, you will need to register as a foreign entity or create a new entity in that state. Consult your healthcare attorney.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the biggest challenge of running a multi-location nursing business?</h3>
            <p>Maintaining consistent quality across locations you cannot personally oversee daily. Strong training systems, reliable team leads, clear communication protocols, and regular quality audits are essential.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I expand virtually instead of physically?</h3>
            <p>Yes. Virtual concierge nursing services can extend your reach without the overhead of a physical location. Many practices combine local in-person services with virtual services that serve a broader geographic area.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

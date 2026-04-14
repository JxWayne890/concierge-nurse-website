import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'federal-requirements', text: 'Federal Requirements: EIN and Tax Registration' },
  { id: 'state-business-registration', text: 'State Business Registration' },
  { id: 'professional-licenses', text: 'Professional Licenses and Certifications' },
  { id: 'local-permits', text: 'Local Business Permits and Licenses' },
  { id: 'home-based-business', text: 'Home-Based Business Considerations' },
  { id: 'specialty-permits', text: 'Specialty Permits and Registrations' },
  { id: 'maintaining-compliance', text: 'Maintaining Ongoing Compliance' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'LLC vs. PLLC for Your Nursing Business',
    description: 'Understand which business entity you need before applying for licenses.',
    link: '/resources/legal/nursing-business-llc-vs-pllc',
    category: 'Legal & Compliance',
  },
  {
    title: 'HIPAA for Cash-Pay Nursing Practices',
    description: 'Learn whether HIPAA applies to your practice and what compliance looks like.',
    link: '/resources/legal/hipaa-cash-pay-nursing-practice',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Insurance Requirements',
    description: 'Another essential step in legally operating your nursing business.',
    link: '/resources/legal/concierge-nurse-insurance-requirements',
    category: 'Legal & Compliance',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a business license to be a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. At minimum, you need a federal EIN, state business registration, and an active nursing license. Most localities also require a general business license."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an EIN cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An EIN is completely free from the IRS. Apply directly at irs.gov. Be cautious of third-party websites that charge for this free service."
      }
    },
    {
      "@type": "Question",
      "name": "Can I run a concierge nursing business from home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many cases, yes. Check your local zoning ordinances and HOA rules. Restrictions are typically minimal if you use home only as an administrative base."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate nursing license for my private practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your existing RN or NP license covers your practice regardless of setting, as long as it is active and in good standing."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I operate without the required licenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consequences include fines, cease-and-desist orders, loss of LLC protection, potential criminal penalties, and Board of Nursing disciplinary action."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get all the necessary licenses and permits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan for a total setup timeline of four to eight weeks. An EIN is immediate; LLC formation takes one to four weeks; local licenses take one to two weeks."
      }
    }
  ]
};

export default function BusinessLicenses() {
  return (
    <ResourceLayout
      title="Business Licenses and Permits for Concierge Nurses"
      description="A complete guide to the federal, state, and local licenses, permits, and registrations you need to legally operate a concierge nursing business."
      canonical="/resources/legal/concierge-nursing-business-licenses"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the Business Launch Toolkit',
        description: 'Includes a complete licensing checklist and step-by-step formation guide for concierge nurses in every state.',
        buttonText: 'View Toolkits',
        buttonLink: '/toolkits',
      }}
    >
      <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal leading-relaxed">
            <strong>Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. Consult with a healthcare attorney in your state for specific guidance.
          </p>
        </div>
      </div>

      <QuickAnswer>
        <p>
          To legally operate a concierge nursing business, you need a federal EIN, state business entity registration, an active nursing license, and local business licenses or permits. Additional registrations may be required depending on your services and location.
        </p>
      </QuickAnswer>

      <h2 id="federal-requirements">Federal Requirements: EIN and Tax Registration</h2>
      <p>
        Every concierge nursing business needs an Employer Identification Number (EIN) from the IRS. It serves as your business's tax ID and is required for opening a business bank account, filing tax returns, and hiring employees. The EIN is free and can be obtained immediately online.
      </p>
      <p className="text-navy font-medium mt-4">Tracy walks through federal registration inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="state-business-registration">State Business Registration</h2>
      <p>
        You must register your business entity with your state by filing formation documents for your <Link to="/resources/legal/nursing-business-llc-vs-pllc" className="text-gold hover:text-gold/80">LLC or PLLC</Link>. Depending on your state, you may also need state tax registrations and a DBA filing if operating under a different name than your registered entity.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides state-specific formation guidance inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="professional-licenses">Professional Licenses and Certifications</h2>
      <p>
        Your nursing license is the foundation of your practice. You need an active, unrestricted RN or NP license in your state. You may also need an NPI number, specialty certifications, a multistate license for interstate practice, and DEA registration if you are an NP with prescriptive authority.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers licensure requirements in detail inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="local-permits">Local Business Permits and Licenses</h2>
      <p>
        Most cities and counties require a general business license to operate within their jurisdiction. Depending on your services and location, you may also need health department permits or fire and safety approvals. Requirements vary significantly by locality.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides a local licensing research framework inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="home-based-business">Home-Based Business Considerations</h2>
      <p>
        Many concierge nurses operate from home as an administrative base. This may require checking zoning ordinances, HOA or lease restrictions, and potentially obtaining a home occupation permit. Your homeowner's insurance may not cover business activities, so additional coverage may be needed.
      </p>
      <p className="text-navy font-medium mt-4">Tracy addresses home-based business setup inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="specialty-permits">Specialty Permits and Registrations</h2>
      <p>
        Depending on your services, you may need additional permits such as medical waste disposal compliance, a CLIA waiver for point-of-care testing, or state pharmacy board registration. These specialty requirements depend on the clinical services you offer.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers specialty compliance inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="maintaining-compliance">Maintaining Ongoing Compliance</h2>
      <p>
        Getting your initial licenses is just the beginning. Ongoing compliance requires tracking renewal dates, completing continuing education, filing annual reports, and staying informed about regulatory changes. Creating a compliance calendar is essential for keeping your business in good standing.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides compliance tracking tools inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do I need a business license to be a concierge nurse?</h3>
          <p>Yes. You need a federal EIN, state business registration, an active nursing license, and typically a local business license.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">How much does an EIN cost?</h3>
          <p>An EIN is completely free from the IRS. Apply directly at irs.gov.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can I run a concierge nursing business from home?</h3>
          <p>In many cases, yes. Check local zoning ordinances and any HOA or lease restrictions that may apply.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do I need a separate nursing license for private practice?</h3>
          <p>No. Your existing license covers your practice regardless of setting, as long as it is active and in good standing.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

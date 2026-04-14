import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-llc', text: 'What Is an LLC?' },
  { id: 'what-is-pllc', text: 'What Is a PLLC?' },
  { id: 'llc-vs-pllc-comparison', text: 'LLC vs. PLLC: Side-by-Side Comparison' },
  { id: 'states-requiring-pllc', text: 'States That Require a PLLC for Nurses' },
  { id: 'how-to-form', text: 'How to Form Your Business Entity' },
  { id: 'cost-comparison', text: 'Cost Comparison' },
  { id: 'choosing-the-right-entity', text: 'Choosing the Right Entity for Your Practice' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Business Licenses and Permits for Concierge Nurses',
    description: 'Learn what federal, state, and local licenses you need to operate legally.',
    link: '/resources/legal/concierge-nursing-business-licenses',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Insurance Requirements',
    description: 'Understand the insurance coverage every concierge nurse needs.',
    link: '/resources/legal/concierge-nurse-insurance-requirements',
    category: 'Legal & Compliance',
  },
  {
    title: 'Client Contracts and Service Agreements',
    description: 'Essential clauses every concierge nursing contract should include.',
    link: '/resources/legal/concierge-nursing-client-contracts',
    category: 'Legal & Compliance',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a registered nurse form an LLC instead of a PLLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your state. Some states allow nurses to form a standard LLC, while others require licensed healthcare professionals to form a PLLC. Check your state's Secretary of State website or consult a local business attorney to confirm."
      }
    },
    {
      "@type": "Question",
      "name": "Does a PLLC protect me from malpractice claims?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A PLLC protects you from business debts and liabilities of other members, but it does not shield you from personal malpractice claims. Professional liability insurance is essential regardless of entity type."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to form a PLLC for a nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Formation costs vary by state but typically range from $50 to $500 for filing fees alone. Additional costs for operating agreements, registered agents, and attorney review vary."
      }
    },
    {
      "@type": "Question",
      "name": "Can I change from an LLC to a PLLC later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in most states you can convert by filing amendment paperwork. The process and fees vary by state, so consult with an attorney for your specific situation."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate business bank account for my LLC or PLLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Maintaining a separate business bank account is critical. Commingling funds can pierce the corporate veil and eliminate your liability protection."
      }
    },
    {
      "@type": "Question",
      "name": "Should I form my LLC or PLLC before getting clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally, yes. Forming your business entity before seeing clients ensures you have liability protection from day one."
      }
    }
  ]
};

export default function LlcVsPllc() {
  return (
    <ResourceLayout
      title="Do I Need an LLC or PLLC for My Concierge Nursing Business?"
      description="Understand the differences between an LLC and PLLC for your concierge nursing business, including formation requirements, liability protection, costs, and which states require each entity type."
      canonical="/resources/legal/nursing-business-llc-vs-pllc"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the Business Launch Toolkit',
        description: 'Step-by-step guidance on entity formation, insurance, contracts, and everything you need to legally start your concierge nursing practice.',
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
          Whether you need an LLC or PLLC depends on your state. A PLLC is a special entity required by some states for licensed professionals. Both provide liability protection, but requirements vary by state and license type.
        </p>
      </QuickAnswer>

      <h2 id="what-is-llc">What Is an LLC?</h2>
      <p>
        A Limited Liability Company (LLC) is a business structure that separates your personal assets from business liabilities. It offers flexibility in management and tax treatment, and is the most common entity type for small businesses including nursing practices.
      </p>
      <p className="text-navy font-medium mt-4">Tracy walks through entity selection and formation inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="what-is-pllc">What Is a PLLC?</h2>
      <p>
        A Professional Limited Liability Company (PLLC) is a specialized LLC for licensed professionals including nurses, physicians, and attorneys. It functions similarly to a standard LLC but requires all members to hold active professional licenses. Importantly, a PLLC does not protect you from your own malpractice claims.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers PLLC-specific requirements inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="llc-vs-pllc-comparison">LLC vs. PLLC: Side-by-Side Comparison</h2>
      <p>
        The key differences between an LLC and PLLC come down to formation requirements, owner eligibility, and regulatory oversight. Both offer the same liability protection for business debts and the same tax flexibility. The right choice depends on what your state mandates for licensed healthcare providers.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides a state-specific decision framework inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="states-requiring-pllc">States That Require a PLLC for Nurses</h2>
      <p>
        Not all states recognize or require the PLLC designation. Some states require licensed healthcare professionals to form a PLLC, while others allow a standard LLC. The rules differ by profession and change periodically, so verifying current requirements with your Secretary of State office is essential.
      </p>
      <p className="text-navy font-medium mt-4">Tracy maintains an updated state requirements reference inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="how-to-form">How to Form Your Business Entity</h2>
      <p>
        Forming an LLC or PLLC involves several steps including choosing a business name, designating a registered agent, filing formation documents, drafting an operating agreement, and obtaining an EIN. A PLLC requires additional steps such as providing proof of professional licensure during the filing process.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides step-by-step formation guidance inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="cost-comparison">Cost Comparison</h2>
      <p>
        Formation costs vary significantly by state and can range from under $100 to several thousand dollars when factoring in filing fees, registered agent services, operating agreements, and attorney review. Annual maintenance costs such as reports and franchise taxes also vary widely.
      </p>
      <p className="text-navy font-medium mt-4">Tracy breaks down costs by state inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="choosing-the-right-entity">Choosing the Right Entity for Your Practice</h2>
      <p>
        For most concierge nurses, the choice comes down to what your state requires. If your state mandates a PLLC for healthcare providers, you must comply. If either structure is allowed, a standard LLC is typically simpler to maintain. Regardless of entity type, maintaining separate finances, carrying insurance, and using written contracts are non-negotiable.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers entity selection strategy inside the <Link to="/strategy" className="text-gold hover:underline">strategy sessions</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can a registered nurse form an LLC instead of a PLLC?</h3>
          <p>It depends on your state. Some states allow nurses to form a standard LLC, while others require a PLLC for licensed healthcare professionals.</p>
        </div>

        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Does a PLLC protect me from malpractice claims?</h3>
          <p>No. A PLLC protects against business debts but does not shield you from personal malpractice claims. Professional liability insurance is essential.</p>
        </div>

        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">How much does it cost to form a PLLC?</h3>
          <p>Costs vary by state, typically ranging from $50 to $500 for filing fees. Additional costs for legal review and registered agents apply.</p>
        </div>

        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can I change from an LLC to a PLLC later?</h3>
          <p>Yes, most states allow conversion through amendment paperwork. Consult an attorney for your state's specific process.</p>
        </div>

        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do I need a separate business bank account?</h3>
          <p>Yes. Keeping business and personal finances separate is critical to maintaining your liability protection.</p>
        </div>

        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Should I form my entity before getting clients?</h3>
          <p>Ideally, yes. Having your entity in place ensures liability protection from day one of your practice.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

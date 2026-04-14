import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'professional-liability', text: 'Professional Liability Insurance (Malpractice)' },
  { id: 'general-liability', text: 'General Liability Insurance' },
  { id: 'business-property', text: 'Business Property Insurance' },
  { id: 'cyber-liability', text: 'Cyber Liability Insurance' },
  { id: 'workers-compensation', text: 'Workers Compensation Insurance' },
  { id: 'additional-coverages', text: 'Additional Coverages to Consider' },
  { id: 'cost-ranges', text: 'Insurance Cost Ranges' },
  { id: 'choosing-a-provider', text: 'Choosing an Insurance Provider' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'LLC vs. PLLC for Your Nursing Business',
    description: 'Understand which business entity gives you the best liability protection.',
    link: '/resources/legal/nursing-business-llc-vs-pllc',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Scope of Practice',
    description: 'Know what you can and cannot do to stay within legal boundaries.',
    link: '/resources/legal/concierge-nurse-scope-of-practice',
    category: 'Legal & Compliance',
  },
  {
    title: 'Client Contracts and Service Agreements',
    description: 'Protect your practice with proper contract language and liability clauses.',
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
      "name": "Do concierge nurses need malpractice insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Professional liability insurance is essential for any concierge nurse. Your business entity does not protect you from personal malpractice claims."
      }
    },
    {
      "@type": "Question",
      "name": "How much does professional liability insurance cost for a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary by scope and license type, typically ranging from $100 to $500 per year for RNs and higher for NPs."
      }
    },
    {
      "@type": "Question",
      "name": "Is general liability insurance different from malpractice insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Malpractice covers professional nursing claims while general liability covers non-professional incidents like slips and falls. Most concierge nurses need both."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need cyber liability insurance for my nursing practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you store any client health information electronically, cyber liability insurance is strongly recommended to cover data breach costs."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use my employer's malpractice insurance for my concierge nursing side business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Employer-provided insurance only covers activities within your employment. Independent practice requires separate coverage."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Business Owner's Policy (BOP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A BOP bundles general liability and business property insurance, often at a lower cost. It does not include professional liability coverage."
      }
    }
  ]
};

export default function InsuranceRequirements() {
  return (
    <ResourceLayout
      title="Concierge Nurse Insurance Requirements: What Coverage You Need"
      description="A comprehensive guide to the insurance coverage every concierge nurse needs, including professional liability, general liability, cyber liability, and business property insurance with cost ranges."
      canonical="/resources/legal/concierge-nurse-insurance-requirements"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the Business Launch Toolkit',
        description: 'Includes insurance checklists, vendor recommendations, and step-by-step setup guidance for your concierge nursing practice.',
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
          Every concierge nurse needs, at minimum, professional liability (malpractice) insurance and general liability insurance. Depending on your practice model, you may also need cyber liability, business property, and workers compensation coverage.
        </p>
      </QuickAnswer>

      <h2 id="professional-liability">Professional Liability Insurance (Malpractice)</h2>
      <p>
        Professional liability insurance is the most critical coverage for any concierge nurse. It protects you if a client alleges your professional services caused harm, covering legal defense costs, settlements, and judgments. There are two policy types -- occurrence-based and claims-made -- and understanding the difference is important for long-term protection.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers how to evaluate and select the right malpractice policy inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="general-liability">General Liability Insurance</h2>
      <p>
        General liability insurance covers non-professional incidents such as a client slipping at your office or property damage during a home visit. Many landlords and facility owners require proof of general liability before allowing you to use their space.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides insurance setup checklists inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="business-property">Business Property Insurance</h2>
      <p>
        Business property insurance covers your equipment and supplies against damage, theft, or loss. Your homeowner's insurance likely does not cover business property, so a separate policy or rider is necessary if you work from home.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers property coverage decisions inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="cyber-liability">Cyber Liability Insurance</h2>
      <p>
        Cyber liability insurance is increasingly important for healthcare providers who store client information electronically. A data breach involving protected health information can be extraordinarily expensive, and this coverage helps with notification costs, legal defense, and regulatory fines.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers data security and insurance requirements inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="workers-compensation">Workers Compensation Insurance</h2>
      <p>
        Workers compensation is required in most states once you hire employees. Solo practitioners generally do not need it, but requirements vary by state. Research your state's rules before hiring anyone.
      </p>
      <p className="text-navy font-medium mt-4">Tracy addresses hiring and insurance obligations inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="additional-coverages">Additional Coverages to Consider</h2>
      <p>
        Depending on your practice model, you may also want to consider commercial auto insurance if you drive to clients, business interruption insurance, and umbrella insurance for additional liability coverage beyond your base policies.
      </p>
      <p className="text-navy font-medium mt-4">Tracy helps you build a complete insurance plan inside the <Link to="/strategy" className="text-gold hover:underline">strategy sessions</Link>.</p>

      <h2 id="cost-ranges">Insurance Cost Ranges</h2>
      <p>
        Insurance costs vary based on your state, scope of practice, coverage limits, and carrier. Professional liability for RNs typically starts at a few hundred dollars per year, while NPs pay more due to broader scope. General liability, cyber liability, and property coverage each have their own cost ranges that depend on your specific practice.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides cost benchmarks and vendor recommendations inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="choosing-a-provider">Choosing an Insurance Provider</h2>
      <p>
        When selecting insurance, look for carriers that specialize in healthcare professional coverage, check their financial stability ratings, and carefully review policy terms and exclusions. The right provider understands the unique risks of independent nursing practice.
      </p>
      <p className="text-navy font-medium mt-4">Tracy walks through provider selection inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do concierge nurses need malpractice insurance?</h3>
          <p>Yes. Professional liability insurance is essential. Your business entity does not protect you from personal malpractice claims.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">How much does professional liability insurance cost?</h3>
          <p>Costs vary by scope of practice and license type. RNs typically pay less than NPs due to differences in scope.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Is general liability different from malpractice insurance?</h3>
          <p>Yes. Malpractice covers professional nursing claims. General liability covers non-professional incidents. Most concierge nurses need both.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do I need cyber liability insurance?</h3>
          <p>If you store client health information electronically or offer telehealth, cyber liability insurance is strongly recommended.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can I use my employer's insurance for my side business?</h3>
          <p>No. Employer-provided insurance only covers your employment activities. Independent practice requires separate coverage.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">What is a Business Owner's Policy (BOP)?</h3>
          <p>A BOP bundles general liability and property insurance at a lower combined cost. Professional liability must be purchased separately.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

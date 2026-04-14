import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'covered-entity-definition', text: 'What Is a HIPAA Covered Entity?' },
  { id: 'cash-pay-and-hipaa', text: 'When Does Cash-Pay Trigger HIPAA?' },
  { id: 'electronic-transactions', text: 'The Electronic Transactions Trigger' },
  { id: 'business-associates', text: 'Business Associates and Your Obligations' },
  { id: 'state-privacy-laws', text: 'State Privacy Laws Beyond HIPAA' },
  { id: 'best-practices', text: 'Privacy Best Practices for All Concierge Nurses' },
  { id: 'hipaa-compliance-steps', text: 'HIPAA Compliance Steps If You Are Covered' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Client Contracts and Service Agreements',
    description: 'Include HIPAA acknowledgments and privacy terms in your client agreements.',
    link: '/resources/legal/concierge-nursing-client-contracts',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Insurance Requirements',
    description: 'Cyber liability insurance helps protect against data breach costs.',
    link: '/resources/legal/concierge-nurse-insurance-requirements',
    category: 'Legal & Compliance',
  },
  {
    title: 'Telehealth and Virtual Concierge Nursing',
    description: 'Virtual care platforms must meet privacy and security requirements.',
    link: '/resources/legal/telehealth-virtual-concierge-nursing',
    category: 'Legal & Compliance',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a cash-pay concierge nurse a HIPAA covered entity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. HIPAA applies to providers who transmit health information electronically in connection with standard insurance transactions. Strictly cash-pay practices may not be covered entities."
      }
    },
    {
      "@type": "Question",
      "name": "Should I follow HIPAA rules even if I'm not technically a covered entity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Following HIPAA standards as a best practice protects clients, builds trust, and reduces legal risk. State privacy laws may also impose similar requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What triggers HIPAA coverage for a healthcare provider?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transmitting health information electronically in connection with standard insurance transactions such as claims and eligibility inquiries. Using email or EHRs alone does not trigger coverage."
      }
    },
    {
      "@type": "Question",
      "name": "Do state privacy laws apply even if HIPAA does not?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every state has privacy laws governing personal and health information. Some are more protective than HIPAA."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use regular email to communicate with clients about their health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you are a HIPAA covered entity, you must use encrypted communication. Even if not covered, encrypted communication is a best practice."
      }
    }
  ]
};

export default function HipaaCashPay() {
  return (
    <ResourceLayout
      title="HIPAA for Cash-Pay Nursing Practices: Are You a Covered Entity?"
      description="Understand when HIPAA applies to cash-pay concierge nursing practices, the covered entity definition, electronic transaction triggers, and state privacy laws that may affect your practice."
      canonical="/resources/legal/hipaa-cash-pay-nursing-practice"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the HIPAA Compliance Toolkit',
        description: 'Privacy policies, client consent forms, and data security checklists designed for concierge nursing practices.',
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
          A cash-pay concierge nurse is not automatically a HIPAA covered entity. HIPAA coverage is triggered by transmitting health information electronically for standard insurance transactions. However, state privacy laws still apply, and adopting HIPAA-level privacy practices is strongly recommended regardless.
        </p>
      </QuickAnswer>

      <h2 id="covered-entity-definition">What Is a HIPAA Covered Entity?</h2>
      <p>
        HIPAA defines three types of covered entities: health plans, healthcare clearinghouses, and healthcare providers who transmit health information electronically in connection with standard transactions. Simply being a healthcare provider does not automatically make you a covered entity -- it is the electronic transmission of specific insurance-related transactions that triggers coverage.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers covered entity determination inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="cash-pay-and-hipaa">When Does Cash-Pay Trigger HIPAA?</h2>
      <p>
        If your practice is entirely cash-pay and you never submit electronic insurance claims or eligibility inquiries, you are likely not a covered entity. However, billing even one client's insurance electronically, or submitting electronic referral authorizations, may trigger HIPAA coverage for your entire practice. The rules around superbills are a gray area that warrants legal consultation.
      </p>
      <p className="text-navy font-medium mt-4">Tracy helps determine your specific HIPAA status inside the <Link to="/strategy" className="text-gold hover:underline">strategy sessions</Link>.</p>

      <h2 id="electronic-transactions">The Electronic Transactions Trigger</h2>
      <p>
        The standard transactions that trigger HIPAA coverage include healthcare claims, payment and remittance, eligibility inquiries, referral authorizations, and enrollment transactions. Important clarification: simply using email, EHRs, or digital tools does not make you a covered entity. The trigger is specifically transmitting information in connection with insurance-related transactions.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers transaction analysis inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="business-associates">Business Associates and Your Obligations</h2>
      <p>
        If you are a HIPAA covered entity, vendors who handle protected health information on your behalf are business associates and require Business Associate Agreements. This includes EHR providers, cloud storage services, telehealth platforms, and billing software. Even non-covered entities benefit from working with vendors who take data security seriously.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides vendor evaluation checklists inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="state-privacy-laws">State Privacy Laws Beyond HIPAA</h2>
      <p>
        Every state has privacy laws governing personal and health information, and many are more protective than HIPAA. These state laws cover data breach notification, health information confidentiality, special categories of information, and consumer privacy. They apply regardless of your HIPAA covered entity status.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers state privacy compliance inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="best-practices">Privacy Best Practices for All Concierge Nurses</h2>
      <p>
        Whether or not HIPAA applies, implementing strong privacy protections is essential. This includes using encrypted communications, securing all devices, limiting access to client information, creating a written privacy policy, obtaining informed consent, and having a data breach response plan. These practices build client trust and reduce legal risk.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides privacy policy templates and security checklists inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="hipaa-compliance-steps">HIPAA Compliance Steps If You Are Covered</h2>
      <p>
        If your practice is a covered entity, compliance requires designating privacy and security officers, conducting risk assessments, developing written policies, providing a Notice of Privacy Practices, executing Business Associate Agreements, implementing safeguards, and establishing a breach notification process. These are significant but manageable responsibilities.
      </p>
      <p className="text-navy font-medium mt-4">Tracy walks through HIPAA compliance step by step inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Is a cash-pay concierge nurse a HIPAA covered entity?</h3>
          <p>Not necessarily. Coverage depends on whether you transmit health information electronically for standard insurance transactions.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Should I follow HIPAA rules even if not covered?</h3>
          <p>Yes. Following HIPAA standards protects clients, builds trust, and reduces legal risk. State laws may also impose similar requirements.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do state privacy laws apply even without HIPAA?</h3>
          <p>Yes. Every state has privacy laws that may be more protective than HIPAA and apply regardless of your covered entity status.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can I use regular email with clients?</h3>
          <p>If you are a covered entity, encrypted communication is required. Even if not, encrypted communication is strongly recommended as a best practice.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

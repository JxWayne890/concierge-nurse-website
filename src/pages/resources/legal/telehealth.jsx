import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'telehealth-regulations', text: 'Telehealth Regulations for Nurses' },
  { id: 'nurse-licensure-compact', text: 'The Nurse Licensure Compact (NLC)' },
  { id: 'interstate-practice', text: 'Interstate Practice Without the Compact' },
  { id: 'platform-requirements', text: 'Telehealth Platform Requirements' },
  { id: 'documentation-standards', text: 'Documentation Standards for Virtual Care' },
  { id: 'services-suitable', text: 'Concierge Nursing Services Suitable for Telehealth' },
  { id: 'informed-consent-telehealth', text: 'Informed Consent for Telehealth' },
  { id: 'reimbursement-billing', text: 'Billing for Virtual Concierge Services' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'HIPAA for Cash-Pay Nursing Practices',
    description: 'Privacy and security requirements are critical for telehealth services.',
    link: '/resources/legal/hipaa-cash-pay-nursing-practice',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Scope of Practice',
    description: 'Your scope applies equally to in-person and virtual services.',
    link: '/resources/legal/concierge-nurse-scope-of-practice',
    category: 'Legal & Compliance',
  },
  {
    title: 'Client Contracts and Service Agreements',
    description: 'Include telehealth-specific terms in your client agreements.',
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
      "name": "Can a concierge nurse provide telehealth services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both RNs and NPs can provide many services via telehealth. You must be licensed in the state where the client is physically located."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be licensed in the state where my telehealth client is located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nursing practice is governed by the state where the client is located, not where the nurse is located."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Nurse Licensure Compact?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The NLC allows nurses with a multistate license to practice in all compact member states without additional licenses."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Zoom or FaceTime for telehealth visits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you are a HIPAA covered entity, you must use a HIPAA-compliant platform. Even if not covered, a secure healthcare platform is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need separate informed consent for telehealth services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many states require specific telehealth consent addressing virtual care limitations, technology requirements, and privacy risks."
      }
    },
    {
      "@type": "Question",
      "name": "What telehealth documentation is required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Document telehealth encounters with the same thoroughness as in-person visits, plus platform used, locations of both parties, and consent confirmation."
      }
    }
  ]
};

export default function Telehealth() {
  return (
    <ResourceLayout
      title="Telehealth and Virtual Concierge Nursing: Legal Considerations"
      description="A guide to the legal requirements for providing telehealth and virtual concierge nursing services, including interstate licensing, the Nurse Licensure Compact, platform requirements, and documentation standards."
      canonical="/resources/legal/telehealth-virtual-concierge-nursing"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the Business Launch Toolkit',
        description: 'Includes telehealth setup checklists, consent templates, and platform comparison guides for concierge nurses.',
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
          Concierge nurses can provide many services via telehealth, but you must be licensed in the state where the client is located. The Nurse Licensure Compact enables multistate practice. You need a secure platform, telehealth-specific consent, and documentation equivalent to in-person care.
        </p>
      </QuickAnswer>

      <h2 id="telehealth-regulations">Telehealth Regulations for Nurses</h2>
      <p>
        Telehealth regulation is primarily governed at the state level. Each state has its own rules about what qualifies as telehealth, which modalities are allowed, prescriptive authority via telehealth, and informed consent requirements. The fundamental rule is that you are practicing in the state where your client is located, not where you are.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers state-specific telehealth rules inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="nurse-licensure-compact">The Nurse Licensure Compact (NLC)</h2>
      <p>
        The NLC allows RNs and LPN/VNs to hold one multistate license and practice across all compact member states. This is the most significant enabler of interstate telehealth for nurses. However, the NLC has limitations -- it applies to RNs and LPNs, not APRNs, and not all states are members. Your home state must be a compact state to obtain a multistate license.
      </p>
      <p className="text-navy font-medium mt-4">Tracy maintains NLC guidance and interstate strategy inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="interstate-practice">Interstate Practice Without the Compact</h2>
      <p>
        Without a multistate license, you must obtain a separate nursing license in each state where clients are located. This involves applying for licensure by endorsement in each target state. Factor license fees and maintenance into your business costs when planning a telehealth expansion.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers multi-state licensing strategy inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="platform-requirements">Telehealth Platform Requirements</h2>
      <p>
        If your practice is a <Link to="/resources/legal/hipaa-cash-pay-nursing-practice" className="text-gold hover:text-gold/80">HIPAA covered entity</Link>, your platform must provide encryption, a Business Associate Agreement, and appropriate security features. Standard consumer platforms typically do not meet these requirements. Even non-covered entities should use secure, healthcare-oriented platforms as a best practice.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides platform comparison guides inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="documentation-standards">Documentation Standards for Virtual Care</h2>
      <p>
        Telehealth encounters should be documented with the same rigor as in-person visits. Additionally, you should record the telehealth modality used, the platform, the physical location of both parties, consent confirmation, and any technical issues encountered during the session.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides telehealth documentation templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="services-suitable">Concierge Nursing Services Suitable for Telehealth</h2>
      <p>
        Many concierge nursing services translate well to virtual delivery, including health education and coaching, care coordination, medication management support, pre- and post-surgical support, chronic disease check-ins, and remote monitoring review. Services requiring hands-on clinical care generally need in-person delivery.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers virtual service design inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="informed-consent-telehealth">Informed Consent for Telehealth</h2>
      <p>
        Telehealth-specific informed consent should address the nature and limitations of virtual care, technology requirements, privacy risks of electronic communication, backup plans for technology failure, and the client's right to refuse telehealth. Many states require this as a separate document.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides telehealth consent templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="reimbursement-billing">Billing for Virtual Concierge Services</h2>
      <p>
        As a cash-pay concierge nurse, billing for telehealth is straightforward since you are not navigating insurance rules. Key decisions include whether to price virtual visits the same as in-person, choosing between time-based and visit-based billing, and clearly disclosing telehealth billing terms in your contract.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers telehealth pricing strategy inside the <Link to="/strategy" className="text-gold hover:underline">strategy sessions</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can a concierge nurse provide telehealth services?</h3>
          <p>Yes. You must be licensed in the state where the client is located and comply with that state's telehealth regulations.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do I need a license where my client is located?</h3>
          <p>Yes. Nursing practice is governed by the client's state. The NLC enables multistate practice for RNs in compact states.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can I use Zoom or FaceTime?</h3>
          <p>HIPAA covered entities must use compliant platforms. Even if not covered, a secure healthcare platform is recommended.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do I need separate telehealth consent?</h3>
          <p>Yes. Many states require specific telehealth informed consent beyond standard clinical consent.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

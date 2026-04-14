import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-contracts-matter', text: 'Why Written Contracts Matter' },
  { id: 'essential-clauses', text: 'Essential Clauses for Every Contract' },
  { id: 'scope-of-services', text: 'Defining Scope of Services' },
  { id: 'payment-terms', text: 'Payment Terms and Fee Structure' },
  { id: 'cancellation-termination', text: 'Cancellation and Termination Policies' },
  { id: 'liability-limitations', text: 'Liability Limitations and Hold Harmless' },
  { id: 'informed-consent', text: 'Informed Consent' },
  { id: 'hipaa-privacy', text: 'HIPAA and Privacy Acknowledgments' },
  { id: 'additional-provisions', text: 'Additional Provisions to Consider' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Concierge Nurse Scope of Practice',
    description: 'Your contract should reflect what you can legally do within your scope.',
    link: '/resources/legal/concierge-nurse-scope-of-practice',
    category: 'Legal & Compliance',
  },
  {
    title: 'HIPAA for Cash-Pay Nursing Practices',
    description: 'Understand your privacy obligations to include the right acknowledgments.',
    link: '/resources/legal/hipaa-cash-pay-nursing-practice',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Insurance Requirements',
    description: 'Insurance works hand-in-hand with contract protections.',
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
      "name": "Do concierge nurses need client contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Written contracts are essential for protecting both you and your clients by defining services, payment terms, and liability boundaries."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a template contract or do I need a lawyer to draft one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A template can be a starting point, but having a healthcare attorney review and customize it for your state and services is strongly recommended."
      }
    },
    {
      "@type": "Question",
      "name": "What should a concierge nursing contract include about scope of services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Specifically list included services, clearly state what is excluded, and note that services are provided within your nursing license scope."
      }
    },
    {
      "@type": "Question",
      "name": "Should I include a cancellation policy in my contract?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. A clear cancellation policy protects your time and revenue. Include notice requirements and consequences for late cancellations."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate informed consent form?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can include consent in your main agreement or use separate forms. Many nurses use both general consent and procedure-specific forms."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I update my client contracts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Review contracts at least annually or whenever you change services, pricing, or policies, or when state laws change."
      }
    }
  ]
};

export default function ClientContracts() {
  return (
    <ResourceLayout
      title="Concierge Nursing Client Contracts and Service Agreements: What to Include"
      description="A guide to creating client contracts for your concierge nursing practice, covering essential clauses, scope of services, payment terms, cancellation policies, and liability protections."
      canonical="/resources/legal/concierge-nursing-client-contracts"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the Business Launch Toolkit',
        description: 'Includes contract templates, informed consent forms, and client onboarding checklists for concierge nurses.',
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
          Every concierge nursing contract should include a clear scope of services, payment terms, cancellation policies, liability limitations, informed consent, and privacy acknowledgments. A well-drafted contract protects both you and your clients. Always have a healthcare attorney review your contracts.
        </p>
      </QuickAnswer>

      <h2 id="why-contracts-matter">Why Written Contracts Matter</h2>
      <p>
        A written contract is the legal backbone of your practice. It provides clarity about what services will be provided, legal protection if disputes arise, professional credibility, clear scope boundaries, and a basis for collecting payment. Operating without one exposes you to significant risk.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides ready-to-use contract templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="essential-clauses">Essential Clauses for Every Contract</h2>
      <p>
        Every concierge nursing service agreement should include identification of parties, effective date and term, scope of services, payment terms, cancellation and termination provisions, liability and indemnification language, informed consent, privacy acknowledgments, governing law, and signatures from both parties.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers essential clause drafting inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="scope-of-services">Defining Scope of Services</h2>
      <p>
        The scope of services clause is arguably the most important part of your contract. It should clearly describe what you will provide and what you will not provide, including service location, hours, availability, and emergency protocols. A vague scope is an invitation for misunderstandings and liability.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides scope of services templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="payment-terms">Payment Terms and Fee Structure</h2>
      <p>
        Clear payment terms prevent the most common source of client disputes. Your contract should specify your fee structure, payment timing, accepted methods, late payment consequences, and an insurance disclaimer stating that you operate on a cash-pay basis.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers pricing and payment strategy inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="cancellation-termination">Cancellation and Termination Policies</h2>
      <p>
        A clear cancellation policy protects your time and revenue while giving clients a fair way to end the relationship. Address appointment cancellation notice requirements, consequences for no-shows, how either party can terminate the agreement, and your refund policy for prepaid services.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides cancellation policy language inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="liability-limitations">Liability Limitations and Hold Harmless</h2>
      <p>
        Liability language works alongside your <Link to="/resources/legal/concierge-nurse-insurance-requirements" className="text-gold hover:text-gold/80">insurance coverage</Link> and <Link to="/resources/legal/nursing-business-llc-vs-pllc" className="text-gold hover:text-gold/80">business entity</Link> to manage risk. While you cannot contract away liability for negligence, you can set reasonable boundaries including limitation of liability caps, hold harmless provisions, and no-guarantee-of-outcomes language.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers liability provisions inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="informed-consent">Informed Consent</h2>
      <p>
        Informed consent is both an ethical obligation and a legal protection. The client must understand and voluntarily agree to services, including their nature, risks, benefits, and alternatives. For clinical procedures, consider using separate procedure-specific consent forms in addition to your general agreement.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides informed consent templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="hipaa-privacy">HIPAA and Privacy Acknowledgments</h2>
      <p>
        Whether or not your practice is a <Link to="/resources/legal/hipaa-cash-pay-nursing-practice" className="text-gold hover:text-gold/80">HIPAA covered entity</Link>, your contract should address privacy. Include a privacy notice acknowledgment, consent to collect and use health information, communication preferences, and third-party disclosure authorization.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides HIPAA acknowledgment language inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="additional-provisions">Additional Provisions to Consider</h2>
      <p>
        Depending on your practice model, you may want to include dispute resolution procedures, force majeure clauses, non-solicitation language, an entire agreement clause, and a severability provision. These additional protections strengthen your contract's effectiveness.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers advanced contract provisions inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do concierge nurses need client contracts?</h3>
          <p>Yes. Written contracts are essential for protecting both you and your clients.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can I use a template or do I need a lawyer?</h3>
          <p>A template is a good starting point, but having a healthcare attorney customize it for your state is strongly recommended.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Should I include a cancellation policy?</h3>
          <p>Absolutely. Clear cancellation terms protect your time and revenue.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">How often should I update my contracts?</h3>
          <p>Review at least annually or whenever you change services, pricing, policies, or when state laws change.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

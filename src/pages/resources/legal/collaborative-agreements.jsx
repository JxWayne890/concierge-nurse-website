import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-collaborative-agreement', text: 'What Is a Collaborative Agreement?' },
  { id: 'who-needs-one', text: 'Who Needs a Collaborative Agreement?' },
  { id: 'full-practice-authority', text: 'Full Practice Authority States' },
  { id: 'reduced-practice-states', text: 'Reduced and Restricted Practice States' },
  { id: 'what-agreement-includes', text: 'What a Collaborative Agreement Includes' },
  { id: 'finding-collaborating-physician', text: 'Finding a Collaborating Physician' },
  { id: 'costs-and-negotiation', text: 'Costs and Negotiation' },
  { id: 'rn-considerations', text: 'Standing Orders and RN Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Concierge Nurse Scope of Practice',
    description: 'Understand the legal boundaries of what you can do as an RN or NP.',
    link: '/resources/legal/concierge-nurse-scope-of-practice',
    category: 'Legal & Compliance',
  },
  {
    title: 'LLC vs. PLLC for Your Nursing Business',
    description: 'Choose the right business entity for your concierge nursing practice.',
    link: '/resources/legal/nursing-business-llc-vs-pllc',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Insurance Requirements',
    description: 'Ensure you have adequate coverage for your practice model.',
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
      "name": "Do RN concierge nurses need a collaborative agreement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, no. Collaborative agreements are primarily for NPs. However, RNs offering services requiring physician orders need a prescriber relationship."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a collaborative agreement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary widely, from free to several thousand dollars monthly, depending on your practice volume, oversight level, and geographic area."
      }
    },
    {
      "@type": "Question",
      "name": "Can I practice in a full practice authority state without a collaborating physician?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In full practice authority states, NPs can evaluate, diagnose, order tests, and prescribe without a collaborative agreement."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if my collaborating physician retires or moves?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You must find a replacement before continuing services that require oversight. Have a contingency plan in place."
      }
    },
    {
      "@type": "Question",
      "name": "Does the collaborating physician need to be in the same specialty as my NP certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "State requirements vary. Regardless of legal requirements, collaborating with a physician in a related specialty is practical for quality care."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have a collaborative agreement with a physician in another state?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most states, the collaborating physician must be licensed in the same state where you practice. Some states also have proximity requirements."
      }
    }
  ]
};

export default function CollaborativeAgreements() {
  return (
    <ResourceLayout
      title="Do Concierge Nurses Need a Collaborative Agreement?"
      description="Learn when a collaborative agreement with a physician is required for your concierge nursing practice, which states grant full practice authority, and how to find and negotiate with a collaborating physician."
      canonical="/resources/legal/concierge-nurse-collaborative-agreement"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the Business Launch Toolkit',
        description: 'Includes collaborative agreement templates and physician outreach strategies for concierge nurse practitioners.',
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
          Whether you need a collaborative agreement depends on your license type and state. NPs in states without full practice authority typically need one. RNs do not generally need a formal agreement but may need physician relationships for services requiring orders.
        </p>
      </QuickAnswer>

      <h2 id="what-is-collaborative-agreement">What Is a Collaborative Agreement?</h2>
      <p>
        A collaborative agreement is a formal legal arrangement between a nurse practitioner and a physician that defines the terms of their professional relationship. The agreement outlines authorized services, prescriptive authority parameters, chart review requirements, and communication protocols. It is a regulatory requirement in certain states, not an employment relationship.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides collaborative agreement templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="who-needs-one">Who Needs a Collaborative Agreement?</h2>
      <p>
        NPs in states without full practice authority are the primary group requiring collaborative agreements. RNs do not typically need a formal agreement, but those offering clinical services requiring physician orders (IV therapy, medication administration) need an arrangement with a prescribing provider. Understanding your <Link to="/resources/legal/concierge-nurse-scope-of-practice" className="text-gold hover:text-gold/80">scope of practice</Link> is key to determining your needs.
      </p>
      <p className="text-navy font-medium mt-4">Tracy helps determine your specific requirements inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="full-practice-authority">Full Practice Authority States</h2>
      <p>
        Full Practice Authority (FPA) means NPs can evaluate, diagnose, interpret tests, and prescribe without a collaborative agreement. The number of FPA states has been growing steadily, and several additional states grant FPA after a transition period of supervised practice. Always verify your state's current status.
      </p>
      <p className="text-navy font-medium mt-4">Tracy maintains updated practice authority references inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="reduced-practice-states">Reduced and Restricted Practice States</h2>
      <p>
        In reduced practice states, NPs have some independent authority but need a collaborative agreement for certain functions. In restricted practice states, physician supervision is required for a broader range of activities. Practicing without a required agreement can result in disciplinary action from your Board of Nursing.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers state-specific compliance strategies inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="what-agreement-includes">What a Collaborative Agreement Includes</h2>
      <p>
        A well-drafted agreement typically covers identification of both parties, scope of authorized services, prescriptive authority parameters, chart review schedules, consultation protocols, availability requirements, and termination clauses. Each state has its own requirements for what must be included.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides agreement frameworks and templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="finding-collaborating-physician">Finding a Collaborating Physician</h2>
      <p>
        Finding the right collaborating physician is one of the more challenging aspects of launching a concierge NP practice. Leveraging existing clinical relationships, connecting through medical societies, and approaching concierge or direct primary care physicians are common strategies that work well in this space.
      </p>
      <p className="text-navy font-medium mt-4">Tracy shares physician outreach strategies inside the <Link to="/strategy" className="text-gold hover:underline">strategy sessions</Link>.</p>

      <h2 id="costs-and-negotiation">Costs and Negotiation</h2>
      <p>
        Collaborative agreement costs range from free to several thousand dollars monthly, depending on the level of oversight, your practice volume, and your geographic area. Negotiating effectively requires clarity about what you are asking for and what you offer in return. Factor these costs into your business plan.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers negotiation strategies inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="rn-considerations">Standing Orders and RN Considerations</h2>
      <p>
        Concierge RN practices offering clinical services need a legal mechanism for physician authorization, typically through standing orders or individual patient orders. Standing orders must be reviewed periodically and comply with your state's Board of Nursing regulations.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers standing order setup inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Do RN concierge nurses need a collaborative agreement?</h3>
          <p>Generally, no. RNs may need prescriber relationships for specific orders, but formal collaborative agreements are primarily an NP requirement.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">How much does a collaborative agreement cost?</h3>
          <p>Costs range from free to several thousand dollars monthly, depending on oversight level, practice volume, and location.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can I practice without a collaborating physician in an FPA state?</h3>
          <p>Yes. Full practice authority states allow NPs to practice independently without a collaborative agreement.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">What if my collaborating physician leaves?</h3>
          <p>You must find a replacement before continuing services that require oversight. Always have a contingency plan.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'np-advantage', text: "The NP Advantage in Concierge Nursing" },
  { id: 'scope-expansion', text: "Expanded Scope and Services" },
  { id: 'practice-models', text: "Concierge NP Practice Models" },
  { id: 'regulatory', text: "Regulatory and Collaborative Agreements" },
  { id: 'getting-started', text: "Getting Started as a Concierge NP" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Should I Get My MSN or DNP?",
    description: "Evaluating advanced degrees for concierge practice.",
    link: '/resources/certifications/concierge-nurse-msn-dnp',
    category: 'Certifications',
  },
  {
    title: "The Rise of Cash-Pay Healthcare",
    description: "The payment model that enables NP concierge practice.",
    link: '/resources/trends/rise-of-cash-pay-healthcare',
    category: 'Industry Trends',
  },
  {
    title: "How to Price Concierge Nursing Services",
    description: "Premium pricing for NP-level services.",
    link: '/resources/how-to-price-concierge-nursing-services',
    category: 'Financial',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can nurse practitioners do concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. NPs are exceptionally well-positioned for concierge practice because their expanded scope allows prescribing, diagnosing, and comprehensive assessment capabilities that RNs cannot offer. This expands the service menu and increases the value to clients."
      }
    },
    {
      "@type": "Question",
      "name": "What services can a concierge NP offer that an RN cannot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on state scope of practice, NPs can prescribe medications, order and interpret lab work and diagnostic tests, perform comprehensive health assessments, diagnose conditions, and provide ongoing primary care management — all on a private-pay basis."
      }
    },
    {
      "@type": "Question",
      "name": "Do NPs need collaborative agreements for concierge practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on your state. Full practice authority states allow NPs to practice independently. Other states require a collaborative agreement with a physician. Research your state's requirements before launching your practice."
      }
    },
    {
      "@type": "Question",
      "name": "Is the concierge model profitable for NPs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. NPs can command premium rates for their expanded scope of services. The direct primary care and concierge NP model eliminates insurance billing overhead while allowing NPs to spend more time with each client — a combination that many NPs find both financially and professionally rewarding."
      }
    }
  ]
};

export default function NursePractitioners() {
  return (
    <ResourceLayout
      title={"Concierge Nursing for Nurse Practitioners: Expanding Your Practice"}
      description={"How nurse practitioners can leverage the concierge model to build a direct-pay practice with expanded scope, higher autonomy, and premium client relationships."}
      canonical="/resources/for/concierge-nursing-nurse-practitioners"
      category="For You"
      categorySlug="/resources/for"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Nurse practitioners are uniquely positioned for concierge practice because their expanded scope of practice — prescribing, diagnosing, ordering labs — creates a broader service menu than RN-level concierge nursing. As a concierge NP, you can offer comprehensive primary care, wellness management, acute care visits, and specialized services on a direct-pay basis with full autonomy over your clinical practice and business.
        </p>
      </QuickAnswer>

      <h2 id="np-advantage">The NP Advantage in Concierge Nursing</h2>
      <p>NPs bring something to concierge nursing that RNs cannot: advanced clinical capabilities. You can diagnose, prescribe, order labs, and manage complex conditions independently (in full practice authority states). This expands what you can offer clients and positions your practice closer to a concierge primary care model — one of the most lucrative and in-demand models in direct-pay healthcare.</p>

      <h2 id="scope-expansion">Expanded Scope and Services</h2>
      <p>As a concierge NP, your service menu can include comprehensive health assessments and annual physicals, chronic disease management, acute care visits for common conditions, medication management and prescribing, lab ordering and interpretation, preventive care and wellness planning, and health coaching and lifestyle management.</p>

      <h2 id="practice-models">Concierge NP Practice Models</h2>
      <p>Concierge NP practices typically follow one of several models: a membership/retainer model (patients pay monthly for comprehensive access), a fee-for-service model (patients pay per visit), or a hybrid combining retainer access with additional service fees. The <Link to="/resources/trends/rise-of-cash-pay-healthcare" className="text-gold hover:text-gold/80 underline">cash-pay healthcare</Link> movement has normalized all of these models.</p>

      <h2 id="regulatory">Regulatory and Collaborative Agreements</h2>
      <p>Your regulatory requirements depend on your state. Full practice authority states allow independent NP practice. Reduced and restricted practice states require some form of physician oversight or collaborative agreement. Research your state's requirements thoroughly and consult a healthcare attorney before launching.</p>

      <h2 id="getting-started">Getting Started as a Concierge NP</h2>
      <p>The steps mirror those for RN concierge practice — business formation, insurance, marketing, referral building — with the addition of NP-specific considerations like DEA registration (if prescribing controlled substances), collaborative agreement setup (if required), lab account establishment, and clinical protocol development. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> can be adapted for NP-level practice building.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can nurse practitioners do concierge nursing?</h3>
            <p>Absolutely. NPs are exceptionally well-positioned for concierge practice because their expanded scope allows prescribing, diagnosing, and comprehensive assessment capabilities that RNs cannot offer. This expands the service menu and increases the value to clients.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What services can a concierge NP offer that an RN cannot?</h3>
            <p>Depending on state scope of practice, NPs can prescribe medications, order and interpret lab work and diagnostic tests, perform comprehensive health assessments, diagnose conditions, and provide ongoing primary care management — all on a private-pay basis.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do NPs need collaborative agreements for concierge practice?</h3>
            <p>This depends on your state. Full practice authority states allow NPs to practice independently. Other states require a collaborative agreement with a physician. Research your state's requirements before launching your practice.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is the concierge model profitable for NPs?</h3>
            <p>Yes. NPs can command premium rates for their expanded scope of services. The direct primary care and concierge NP model eliminates insurance billing overhead while allowing NPs to spend more time with each client — a combination that many NPs find both financially and professionally rewarding.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

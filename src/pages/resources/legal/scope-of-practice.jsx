import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-scope-of-practice', text: 'What Is Scope of Practice?' },
  { id: 'rn-scope', text: 'Registered Nurse (RN) Scope of Practice' },
  { id: 'np-scope', text: 'Nurse Practitioner (NP) Scope of Practice' },
  { id: 'state-variations', text: 'State-by-State Variations' },
  { id: 'independent-activities', text: 'Activities You Can Perform Independently' },
  { id: 'physician-oversight', text: 'When Physician Oversight Is Required' },
  { id: 'gray-areas', text: 'Gray Areas in Concierge Nursing' },
  { id: 'staying-compliant', text: 'Staying Within Your Scope' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Do Concierge Nurses Need a Collaborative Agreement?',
    description: 'Learn when a physician collaboration is required for your practice model.',
    link: '/resources/legal/concierge-nurse-collaborative-agreement',
    category: 'Legal & Compliance',
  },
  {
    title: 'Concierge Nurse Insurance Requirements',
    description: 'Ensure you have adequate malpractice coverage for the services you provide.',
    link: '/resources/legal/concierge-nurse-insurance-requirements',
    category: 'Legal & Compliance',
  },
  {
    title: 'Telehealth and Virtual Concierge Nursing',
    description: 'Understand the legal considerations for providing virtual nursing services.',
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
      "name": "Can a concierge nurse diagnose medical conditions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RNs cannot diagnose medical conditions. NPs can diagnose within their scope and specialty certification, subject to state regulations."
      }
    },
    {
      "@type": "Question",
      "name": "Can a concierge RN start an IV or administer medications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An RN can generally perform these tasks, but in independent practice this typically requires a valid physician order. Rules vary by state."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a nursing diagnosis and a medical diagnosis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A medical diagnosis identifies a disease or condition and requires physician or NP authority. A nursing diagnosis identifies patient responses to health conditions and guides nursing interventions."
      }
    },
    {
      "@type": "Question",
      "name": "Can concierge nurses provide health coaching without restrictions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Health coaching and wellness education are generally within RN scope. However, coaching should not cross into medical advice or diagnosis."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I practice outside my scope?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consequences can include Board of Nursing disciplinary action, license suspension, criminal charges, civil liability, and loss of insurance coverage."
      }
    }
  ]
};

export default function ScopeOfPractice() {
  return (
    <ResourceLayout
      title="Concierge Nurse Scope of Practice: What You Can and Cannot Do"
      description="Understand the legal boundaries of concierge nursing practice for RNs and NPs, including state variations, independent activities, physician oversight requirements, and common gray areas."
      canonical="/resources/legal/concierge-nurse-scope-of-practice"
      category="Legal & Compliance"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
      cta={{
        title: 'Get the Business Launch Toolkit',
        description: 'Includes scope of practice checklists and service menu templates designed for concierge nurses.',
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
          Your scope of practice is defined by your state's Nurse Practice Act, your license type (RN vs. NP), and your education and training. Understanding your specific scope is critical because practicing outside it can result in license revocation, legal liability, and loss of insurance coverage.
        </p>
      </QuickAnswer>

      <h2 id="what-is-scope-of-practice">What Is Scope of Practice?</h2>
      <p>
        Scope of practice refers to the activities a licensed healthcare professional is legally permitted to perform. It is defined by your state's Nurse Practice Act, Board of Nursing regulations, and your individual education, training, and demonstrated competency. When operating independently, you are solely responsible for staying within these boundaries.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers scope of practice analysis for your specific state inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="rn-scope">Registered Nurse (RN) Scope of Practice</h2>
      <p>
        RN scope centers on assessment, planning, implementation, and evaluation of patient care. In a concierge setting, this typically includes health assessments, health education, care coordination, patient advocacy, and nursing procedures performed under valid physician orders. RNs generally cannot diagnose medical conditions, prescribe medications, or order diagnostic tests independently.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides RN service menu templates inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="np-scope">Nurse Practitioner (NP) Scope of Practice</h2>
      <p>
        NPs have an expanded scope that may include medical diagnosis, prescriptive authority, ordering and interpreting tests, developing treatment plans, and performing procedures within their specialty. The extent of NP authority depends heavily on your state's practice authority classification.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers NP practice authority considerations inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="state-variations">State-by-State Variations</h2>
      <p>
        Nursing scope of practice varies significantly from state to state. States are categorized into full practice authority, reduced practice, and restricted practice for NPs. For RNs, variations are less dramatic but still significant. Always consult your specific state's Nurse Practice Act before defining your service offerings.
      </p>
      <p className="text-navy font-medium mt-4">Tracy maintains state-specific guidance inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="independent-activities">Activities You Can Perform Independently</h2>
      <p>
        Many concierge nursing services do not require physician orders and can be offered independently by RNs, including health and wellness education, health risk assessments, care coordination, patient advocacy, and chronic disease self-management support. These services form the foundation of many successful concierge practices.
      </p>
      <p className="text-navy font-medium mt-4">Tracy helps you build your independent service menu inside the <Link to="/toolkits" className="text-gold hover:underline">Toolkits</Link>.</p>

      <h2 id="physician-oversight">When Physician Oversight Is Required</h2>
      <p>
        Certain concierge nursing activities require a physician or authorized prescriber's order, including medication administration, IV therapy with additives, invasive procedures, and ordering diagnostic tests. If your practice includes these services, you need a relationship with a prescribing provider.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers physician relationship setup inside the <Link to="/consulting" className="text-gold hover:underline">consulting sessions</Link>.</p>

      <h2 id="gray-areas">Gray Areas in Concierge Nursing</h2>
      <p>
        Several emerging service areas create scope-of-practice questions including IV hydration services, the boundary between health coaching and medical advice, aesthetic and wellness services, and interstate telehealth. These gray areas require careful research and often benefit from legal consultation.
      </p>
      <p className="text-navy font-medium mt-4">Tracy addresses gray area scenarios inside the <Link to="/strategy" className="text-gold hover:underline">strategy sessions</Link>.</p>

      <h2 id="staying-compliant">Staying Within Your Scope</h2>
      <p>
        Protecting your license requires ongoing vigilance. This means thoroughly reading your state's Nurse Practice Act, reviewing Board of Nursing advisory opinions, documenting everything carefully, and defining your services clearly in client contracts. When in doubt, contact your Board of Nursing for clarification before offering a service.
      </p>
      <p className="text-navy font-medium mt-4">Tracy provides compliance frameworks inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can a concierge nurse diagnose medical conditions?</h3>
          <p>RNs cannot diagnose medical conditions. NPs can diagnose within their scope and specialty, subject to state regulations.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can a concierge RN start an IV or administer medications?</h3>
          <p>Generally yes, but in independent practice this typically requires a valid physician order. Rules vary by state.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">Can concierge nurses provide health coaching without restrictions?</h3>
          <p>Health coaching and wellness education are generally within RN scope and do not require physician oversight, as long as you do not cross into medical advice or diagnosis.</p>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-navy mb-2">What happens if I practice outside my scope?</h3>
          <p>Consequences include Board of Nursing disciplinary action, license suspension, criminal charges, civil liability, and loss of insurance coverage.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

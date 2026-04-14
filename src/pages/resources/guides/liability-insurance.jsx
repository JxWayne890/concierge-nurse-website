import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'types-of-insurance', text: 'Types of Insurance You Need' },
  { id: 'professional-liability', text: 'Professional Liability (Malpractice) Insurance' },
  { id: 'general-liability', text: 'General Liability Insurance' },
  { id: 'how-to-get-coverage', text: 'How to Get Coverage' },
  { id: 'what-to-look-for', text: 'What to Look for in a Policy' },
  { id: 'common-mistakes', text: 'Common Mistakes to Avoid' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'Do I Need an LLC or PLLC for My Concierge Nursing Business?', description: 'Insurance and entity formation work together to protect you.', link: '/resources/legal/nursing-business-llc-vs-pllc', category: 'Legal & Compliance' },
  { title: 'How to Get Your NPI Number as a Concierge Nurse', description: 'Another foundational step in establishing your practice.', link: '/resources/guides/concierge-nurse-npi-number', category: 'Guides' },
  { title: 'How to Handle a Medical Emergency as a Concierge Nurse', description: 'Proper protocols reduce liability and protect your clients.', link: '/resources/guides/concierge-nurse-medical-emergency', category: 'Guides' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does liability insurance cost for a concierge nurse?", "acceptedAnswer": { "@type": "Answer", "text": "Professional liability insurance for concierge nurses typically costs between $500 and $2,000 per year depending on your state, coverage limits, specialty, and claims history. General liability insurance is usually an additional $300 to $800 per year. Some providers offer bundled packages." } },
    { "@type": "Question", "name": "Do I need insurance even if I have an LLC?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. An LLC protects your personal assets from business debts, but it does not protect you from professional malpractice claims. Professional liability insurance covers claims arising from your nursing care, which your LLC cannot shield you from." } },
    { "@type": "Question", "name": "What is the difference between occurrence and claims-made policies?", "acceptedAnswer": { "@type": "Answer", "text": "An occurrence policy covers incidents that happen during the policy period regardless of when the claim is filed. A claims-made policy only covers claims filed while the policy is active. Occurrence policies are generally preferred because they provide lifetime coverage for incidents during the policy period, even if a claim is filed years later." } },
    { "@type": "Question", "name": "Can I use my hospital employer's malpractice insurance for my concierge nursing side business?", "acceptedAnswer": { "@type": "Answer", "text": "No. Employer-provided insurance typically only covers you while performing duties within your employment. Your independent concierge nursing practice requires its own separate professional liability policy." } },
    { "@type": "Question", "name": "Should I get insurance before my first client?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You should have active professional liability and general liability insurance before you see your first client. Practicing without insurance exposes your personal assets to significant financial risk from even a single claim." } }
  ]
};

export default function LiabilityInsurance() {
  return (
    <ResourceLayout title="How to Set Up Liability Insurance for Concierge Nursing" description="Learn what insurance coverage concierge nurses need, how much it costs, the difference between professional and general liability, and how to choose the right policy for your practice." canonical="/resources/guides/concierge-nurse-liability-insurance" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>Every concierge nurse needs professional liability (malpractice) insurance and general liability insurance. Expect approximately $500 to $2,000 per year for professional liability and $300 to $800 per year for general liability. Have coverage in place before your first client.</p>
      </QuickAnswer>

      <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal leading-relaxed"><strong>Important:</strong> Insurance requirements and costs vary by state. This guide provides general information — consult with an insurance professional familiar with healthcare businesses in your state.</p>
        </div>
      </div>

      <p>Liability insurance is non-negotiable for concierge nurses. Even with an LLC, your business entity does not shield you from claims arising from your professional nursing care. The right coverage protects your livelihood and your ability to continue practicing.</p>

      <h2 id="types-of-insurance">Types of Insurance You Need</h2>
      <p>At minimum, you need professional liability (malpractice) and general liability coverage. Depending on your practice, you may also benefit from a business owner's policy, commercial auto insurance, or cyber liability insurance. Understanding which types apply to your situation is important for comprehensive protection.</p>

      <h2 id="professional-liability">Professional Liability (Malpractice) Insurance</h2>
      <p>This covers legal defense costs, settlements, and judgments from claims related to your nursing care. You will encounter occurrence policies (generally preferred — they cover incidents during the policy period regardless of when the claim is filed) and claims-made policies. Understanding this distinction matters for your long-term protection.</p>

      <h2 id="general-liability">General Liability Insurance</h2>
      <p>This covers non-clinical incidents — a client tripping over your equipment, property damage in a client's home, or injuries at your office. As an in-home care provider, these scenarios are part of your risk profile.</p>

      <h2 id="how-to-get-coverage">How to Get Coverage</h2>
      <p>Several well-known providers specialize in nursing malpractice insurance. The process involves researching providers, comparing quotes, reviewing coverage details, and confirming that your specific services are covered. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include provider recommendations and a policy comparison framework.</p>

      <h2 id="what-to-look-for">What to Look for in a Policy</h2>
      <p>Key factors include coverage limits, covered services (ensure your specific nursing services are included), whether defense costs are within or in addition to the coverage limit, and license defense coverage for Board of Nursing investigations.</p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>The most common mistakes are assuming an LLC is enough, relying on employer coverage for independent practice, choosing the cheapest policy without understanding exclusions, and not updating your policy when you add new services.</p>

      <p>Insurance is part of a comprehensive risk management strategy alongside proper <Link to="/resources/guides/concierge-nurse-client-documentation" className="text-gold hover:text-gold/80">documentation</Link> and clear <Link to="/resources/guides/concierge-nurse-client-boundaries" className="text-gold hover:text-gold/80">client boundaries</Link>. For guided setup, explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How much does liability insurance cost for a concierge nurse?</h3><p>Professional liability: $500 to $2,000/year. General liability: $300 to $800/year. Costs vary by state and coverage.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need insurance even if I have an LLC?</h3><p>Yes. Your LLC does not protect against malpractice claims. Insurance is essential.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the difference between occurrence and claims-made policies?</h3><p>Occurrence covers incidents during the policy period regardless of when claims are filed. Claims-made only covers claims filed while active. Occurrence is generally preferred.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use my employer's insurance for my concierge nursing business?</h3><p>No. Employer insurance only covers your employment role, not independent practice.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I get insurance before my first client?</h3><p>Yes. Always have active coverage before providing any services.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

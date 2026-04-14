import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-documentation-matters', text: 'Why Documentation Matters' },
  { id: 'what-to-document', text: 'What to Document for Every Visit' },
  { id: 'documentation-methods', text: 'Documentation Methods and Tools' },
  { id: 'hipaa-storage', text: 'HIPAA-Compliant Storage' },
  { id: 'common-documentation-errors', text: 'Common Documentation Errors' },
  { id: 'record-retention', text: 'Record Retention Requirements' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Set Up a HIPAA-Compliant Email System', description: 'Sending documentation securely to physicians and clients.', link: '/resources/guides/hipaa-compliant-email-nursing', category: 'Guides' },
  { title: 'How to Handle a Medical Emergency as a Concierge Nurse', description: 'Emergency documentation has specific additional requirements.', link: '/resources/guides/concierge-nurse-medical-emergency', category: 'Guides' },
  { title: 'How to Set Up Liability Insurance for Concierge Nursing', description: 'Documentation is your primary defense if a claim is filed.', link: '/resources/guides/concierge-nurse-liability-insurance', category: 'Guides' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do I need an electronic health record system for my concierge nursing practice?", "acceptedAnswer": { "@type": "Answer", "text": "While an EHR is not legally required for most private-pay concierge nurses, using one provides significant advantages: HIPAA-compliant storage, structured note templates, easy retrieval, and professional-looking reports to share with physicians. Many affordable EHR options exist for solo practitioners." } },
    { "@type": "Question", "name": "How long do I need to keep client records?", "acceptedAnswer": { "@type": "Answer", "text": "Record retention requirements vary by state but typically range from 5 to 10 years from the last date of service. For minor clients, records must often be kept until a specified time after they reach the age of majority. Check your state's specific requirements and always err on the side of keeping records longer." } },
    { "@type": "Question", "name": "Should I send visit notes to the referring surgeon?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with the client's consent. Sending concise visit summaries to the referring surgeon or physician demonstrates professionalism, supports continuity of care, and strengthens your referral relationship. Use HIPAA-compliant communication methods and obtain client authorization first." } },
    { "@type": "Question", "name": "Can I use paper charts instead of electronic records?", "acceptedAnswer": { "@type": "Answer", "text": "Paper documentation is legally acceptable but presents challenges for HIPAA compliance, including secure storage, backup requirements, and disaster protection. If you use paper records, store them in a locked, fireproof filing cabinet and never leave them in your vehicle." } },
    { "@type": "Question", "name": "What should I do if I make a mistake in my documentation?", "acceptedAnswer": { "@type": "Answer", "text": "Never use white-out or completely erase an entry. In paper records, draw a single line through the error, write the correction, and initial and date the change. In electronic records, use the amendment feature. Altering records after the fact can be considered falsification and can be used against you in legal proceedings." } }
  ]
};

export default function Documentation() {
  return (
    <ResourceLayout title="How to Document Client Visits as a Concierge Nurse" description="Learn best practices for documenting client visits in your concierge nursing practice, including what to record, HIPAA-compliant storage, documentation tools, and record retention requirements." canonical="/resources/guides/concierge-nurse-client-documentation" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>Document every client visit thoroughly and promptly using a consistent format. Use HIPAA-compliant storage and complete your notes as close to the time of service as possible. If it was not documented, it was not done.</p>
      </QuickAnswer>

      <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal leading-relaxed"><strong>Important:</strong> Documentation requirements vary by state. Follow your state's Nurse Practice Act and applicable regulations.</p>
        </div>
      </div>

      <p>Documentation is simultaneously the least exciting and most important administrative task in your practice. Thorough records protect you legally, support quality care, enable communication with other providers, and demonstrate your professional value.</p>

      <h2 id="why-documentation-matters">Why Documentation Matters</h2>
      <p>Your documentation serves as legal protection, enables continuity of care, strengthens physician communication, and tracks client progress over time. In a legal dispute, it is your primary evidence.</p>

      <h2 id="what-to-document">What to Document for Every Visit</h2>
      <p>A complete visit note includes date and time, vital signs, assessment findings, interventions performed, client response, education provided, and plan of care. The specific format and level of detail required for different visit types is something we cover in our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> with ready-to-use templates.</p>

      <h2 id="documentation-methods">Documentation Methods and Tools</h2>
      <p>Options range from EHR systems to practice management platforms to structured templates. The right choice depends on your workflow, budget, and client volume. Using consistent templates ensures you never miss critical elements. Our toolkits include documentation templates for common visit types.</p>

      <h2 id="hipaa-storage">HIPAA-Compliant Storage</h2>
      <p>Electronic records require encrypted, HIPAA-compliant cloud systems with BAAs. Paper records need locked, fireproof storage. Mobile devices must be encrypted and password-protected. Proper storage is a compliance requirement regardless of your documentation method.</p>

      <h2 id="common-documentation-errors">Common Documentation Errors</h2>
      <p>Late documentation, vague descriptions, omitting client education, and copy-paste errors are the most common pitfalls. Each can have legal and clinical consequences.</p>

      <h2 id="record-retention">Record Retention Requirements</h2>
      <p>Requirements vary by state but generally require 5 to 10 years from the last date of service. Check your state's specific requirements and create a retention policy.</p>

      <p>Professional documentation is the backbone of risk management. For templates and guided setup, explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need an electronic health record system?</h3><p>Not legally required, but highly recommended for HIPAA compliance, templates, and professional reporting.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How long do I need to keep client records?</h3><p>Typically 5 to 10 years from last date of service. Check your state's specific requirements.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I send visit notes to the referring surgeon?</h3><p>Yes, with client consent. It demonstrates professionalism and strengthens referral relationships.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use paper charts?</h3><p>Legally acceptable, but harder to secure for HIPAA compliance. Store in a locked, fireproof cabinet.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What should I do if I make a documentation mistake?</h3><p>Never erase. Draw a single line through the error, write the correction, and initial and date the change.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'preparation', text: 'Preparation Before an Emergency Happens' },
  { id: 'recognizing-emergencies', text: 'Recognizing a Medical Emergency' },
  { id: 'step-by-step-response', text: 'Step-by-Step Emergency Response' },
  { id: 'documentation-after', text: 'Documentation After an Emergency' },
  { id: 'communicating-with-surgeon', text: 'Communicating with the Surgeon or Physician' },
  { id: 'emotional-aftermath', text: 'Managing the Emotional Aftermath' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Document Client Visits as a Concierge Nurse', description: 'Proper documentation is critical during and after any emergency.', link: '/resources/guides/concierge-nurse-client-documentation', category: 'Guides' },
  { title: 'How to Set Up Liability Insurance for Concierge Nursing', description: 'Insurance protects you if a medical emergency leads to a claim.', link: '/resources/guides/concierge-nurse-liability-insurance', category: 'Guides' },
  { title: 'How to Set Boundaries with Concierge Nursing Clients', description: 'Know the limits of what you can handle independently.', link: '/resources/guides/concierge-nurse-client-boundaries', category: 'Guides' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Should I call 911 or the surgeon first during an emergency?", "acceptedAnswer": { "@type": "Answer", "text": "Always call 911 first if the situation is life-threatening — airway compromise, severe hemorrhage, signs of stroke, chest pain, or loss of consciousness. Stabilize the client and then contact the surgeon. For non-life-threatening but urgent concerns, contact the surgeon or on-call physician first for guidance." } },
    { "@type": "Question", "name": "Am I liable if something goes wrong during a medical emergency at a client's home?", "acceptedAnswer": { "@type": "Answer", "text": "As a licensed nurse, you are expected to perform within your scope of practice and standard of care. Proper documentation, following established emergency protocols, and maintaining liability insurance are your best protections. Good Samaritan laws may also apply in certain situations, depending on your state." } },
    { "@type": "Question", "name": "What emergency supplies should I carry?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum, carry a blood pressure cuff, pulse oximeter, stethoscope, thermometer, basic wound care supplies, gloves, a flashlight, and a printed emergency protocol card with important phone numbers. Some concierge nurses also carry an AED and a basic first aid kit. The specific supplies depend on your scope of practice and the types of clients you serve." } },
    { "@type": "Question", "name": "What if my client refuses to go to the emergency room?", "acceptedAnswer": { "@type": "Answer", "text": "If a competent adult refuses emergency care, document their refusal thoroughly, including that you explained the risks of refusing treatment. Have them sign a refusal of treatment form if possible. Notify their physician or surgeon immediately. You cannot force a competent adult to accept treatment, but you must document your clinical assessment and the client's informed refusal." } },
    { "@type": "Question", "name": "Should I administer medications during an emergency?", "acceptedAnswer": { "@type": "Answer", "text": "Only administer medications within your scope of practice and as prescribed by the client's physician. As an RN, you can administer prescribed medications but cannot prescribe new ones. In a true life-threatening emergency, follow your BLS/ACLS training and contact 911 for advanced interventions." } }
  ]
};

export default function MedicalEmergency() {
  return (
    <ResourceLayout title="How to Handle a Medical Emergency as a Concierge Nurse" description="Learn how to prepare for and respond to medical emergencies in the home setting as a concierge nurse, including emergency protocols, documentation requirements, and communication with physicians." canonical="/resources/guides/concierge-nurse-medical-emergency" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>In a medical emergency, ensure scene safety, assess the client, call 911 if life-threatening, provide interventions within your scope, contact the surgeon, and document everything thoroughly. Preparation and established protocols are essential for safe independent practice.</p>
      </QuickAnswer>

      <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal leading-relaxed"><strong>Critical:</strong> This guide provides general guidance. Always follow your state's Nurse Practice Act, your organization's protocols, and your clinical training. Keep your BLS and any relevant certifications current.</p>
        </div>
      </div>

      <p>Practicing as a concierge nurse means you are often the only healthcare provider present when something goes wrong. This requires thorough preparation, clear protocols, and the confidence to act decisively while knowing when to call for help.</p>

      <h2 id="preparation">Preparation Before an Emergency Happens</h2>
      <p>The best emergency response starts long before the emergency occurs. Keep certifications current, review each client's history before every visit, carry essential supplies, have emergency contacts readily accessible, and know the home layout and nearest hospital. Preparation is the foundation of safe independent practice.</p>

      <h2 id="recognizing-emergencies">Recognizing a Medical Emergency</h2>
      <p>Your clinical assessment skills are your greatest asset. Being alert for airway compromise, hemorrhage, cardiovascular emergencies, neurological changes, severe allergic reactions, and signs of infection or sepsis is critical. Knowing what to watch for in each client's specific situation requires clinical training that goes beyond a general overview.</p>

      <h2 id="step-by-step-response">Step-by-Step Emergency Response</h2>
      <p>The emergency response framework involves staying calm, performing a rapid assessment, activating EMS when needed, intervening within your scope, contacting the physician, notifying emergency contacts, and transferring care to EMS. The specific clinical protocols for different emergency scenarios are covered in our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.</p>

      <h2 id="documentation-after">Documentation After an Emergency</h2>
      <p>Thorough documentation after an emergency protects you legally and supports continuity of care. Document as soon as possible, including the timeline, assessments, interventions, contacts made, and disposition. This is one area where detail and precision matter enormously.</p>

      <h2 id="communicating-with-surgeon">Communicating with the Surgeon or Physician</h2>
      <p>Clear, structured clinical communication during emergencies is essential. Using a standardized framework ensures you convey critical information concisely under pressure. This is a skill we develop extensively in our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.</p>

      <h2 id="emotional-aftermath">Managing the Emotional Aftermath</h2>
      <p>Medical emergencies can be emotionally taxing when practicing alone. Debriefing with colleagues or mentors, reflecting on what went well, and connecting with a <Link to="/community" className="text-gold hover:text-gold/80">community of concierge nurses</Link> who understand your experience are all important for long-term wellbeing.</p>

      <p>Being prepared for emergencies is a hallmark of competent, professional practice. For comprehensive clinical and business guidance, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I call 911 or the surgeon first?</h3><p>Call 911 first for life-threatening situations. For urgent but non-life-threatening concerns, contact the surgeon first.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Am I liable if something goes wrong during an emergency?</h3><p>Perform within your scope, document thoroughly, and maintain liability insurance for protection.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What emergency supplies should I carry?</h3><p>At minimum: BP cuff, pulse ox, stethoscope, thermometer, gloves, wound care supplies, and emergency contact card.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What if my client refuses to go to the emergency room?</h3><p>Document the refusal thoroughly, explain risks, and notify their physician immediately.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I administer medications during an emergency?</h3><p>Only within your scope and as prescribed. Follow BLS/ACLS training and call 911 for advanced interventions.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

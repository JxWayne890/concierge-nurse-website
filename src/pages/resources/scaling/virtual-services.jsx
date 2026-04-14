import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-virtual', text: "Why Virtual Services Make Sense" },
  { id: 'types', text: "Types of Virtual Services to Offer" },
  { id: 'technology', text: "Technology and Platform Considerations" },
  { id: 'legal', text: "Legal and Scope of Practice" },
  { id: 'pricing-virtual', text: "Pricing Virtual Services" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "How AI Is Changing Concierge Nursing",
    description: "Technology trends that complement virtual services.",
    link: '/resources/trends/ai-and-concierge-nursing',
    category: 'Industry Trends',
  },
  {
    title: "How to Create Passive Income as a Concierge Nurse",
    description: "Virtual services can become scalable revenue streams.",
    link: '/resources/scaling/passive-income-concierge-nurse',
    category: 'Scaling',
  },
  {
    title: "Concierge Nursing for Rural Nurses",
    description: "Virtual services help rural nurses extend their reach.",
    link: '/resources/for/concierge-nursing-rural-nurses',
    category: 'For You',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can concierge nurses provide virtual services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, within your scope of practice. RNs can provide health education, care coordination, wellness coaching, and certain assessment services virtually. NPs can provide a broader range of telehealth services including diagnoses and prescriptions. Check your state telehealth regulations."
      }
    },
    {
      "@type": "Question",
      "name": "What technology do I need for virtual concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At minimum, a HIPAA-compliant video platform, reliable internet, a professional background setup, and a way to share and collect documents securely. Some nurses add remote monitoring devices for clients who need ongoing vital sign tracking."
      }
    },
    {
      "@type": "Question",
      "name": "How do I price virtual concierge nursing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Virtual services are typically priced lower than in-person visits since they do not involve travel time or physical presence. However, your expertise and time still have value. Consider package pricing for ongoing virtual wellness programs."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate license for telehealth in other states?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, you must be licensed in the state where the patient is located at the time of the virtual visit. Multi-state licensing through the Nurse Licensure Compact can help if you plan to serve clients across state lines."
      }
    }
  ]
};

export default function VirtualServices() {
  return (
    <ResourceLayout
      title={"How to Add Virtual Services to Your Concierge Nursing Practice"}
      description={"Expand your concierge nursing practice with virtual services — telehealth consultations, remote monitoring, wellness coaching, and digital health programs."}
      canonical="/resources/scaling/add-virtual-services-concierge-nursing"
      category="Scaling"
      categorySlug="/resources/scaling"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Virtual services allow concierge nurses to extend their reach, serve clients between in-person visits, and create scalable revenue streams. Options include virtual wellness consultations, post-visit follow-up calls, remote health monitoring, patient education sessions, and care coordination. The key is choosing virtual services that complement your in-person practice and stay within your scope.
        </p>
      </QuickAnswer>

      <h2 id="why-virtual">Why Virtual Services Make Sense</h2>
      <p>Virtual services add value to your concierge nursing practice in several ways: they extend your availability without adding drive time, allow you to serve clients who are not in immediate need of in-person care, create additional revenue opportunities, and position your practice as modern and accessible.</p>

      <h2 id="types">Types of Virtual Services to Offer</h2>
      <ul>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Post-visit follow-ups</strong> — Check-in calls after in-person visits to assess progress and answer questions</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Wellness consultations</strong> — Virtual health assessments, lifestyle coaching, and care planning</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Care coordination</strong> — Managing appointments, communicating with providers, and coordinating services</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Patient education</strong> — Teaching sessions on medication management, disease management, or health literacy</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Remote monitoring oversight</strong> — Reviewing data from home health monitoring devices and intervening as needed</span></li>
      </ul>

      <h2 id="technology">Technology and Platform Considerations</h2>
      <p>Your virtual platform must be HIPAA-compliant if you discuss or share any protected health information. Several telehealth platforms offer nurse-friendly features including virtual waiting rooms, document sharing, and recording capabilities. Invest in good lighting, a professional background, and a quality microphone — client perception of virtual visits is heavily influenced by audio and video quality.</p>

      <h2 id="legal">Legal and Scope of Practice</h2>
      <p>Virtual nursing services are governed by the same scope of practice rules as in-person services — plus additional telehealth regulations. Key considerations include state telehealth laws, multi-state licensing (the Nurse Licensure Compact), informed consent for virtual care, and documentation requirements for virtual visits. Consult a healthcare attorney before launching virtual services.</p>

      <h2 id="pricing-virtual">Pricing Virtual Services</h2>
      <p>Price virtual services based on the value of your expertise and time, not just the absence of travel. While virtual visits may command slightly lower rates than in-person visits, they should still reflect your clinical knowledge and the convenience you provide to clients.</p>
      <p>Explore our <Link to="/resources/how-to-price-concierge-nursing-services" className="text-gold hover:text-gold/80 underline">pricing guide</Link> for comprehensive pricing strategies. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> covers virtual service development as part of practice building.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can concierge nurses provide virtual services?</h3>
            <p>Yes, within your scope of practice. RNs can provide health education, care coordination, wellness coaching, and certain assessment services virtually. NPs can provide a broader range of telehealth services including diagnoses and prescriptions. Check your state telehealth regulations.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What technology do I need for virtual concierge nursing?</h3>
            <p>At minimum, a HIPAA-compliant video platform, reliable internet, a professional background setup, and a way to share and collect documents securely. Some nurses add remote monitoring devices for clients who need ongoing vital sign tracking.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I price virtual concierge nursing services?</h3>
            <p>Virtual services are typically priced lower than in-person visits since they do not involve travel time or physical presence. However, your expertise and time still have value. Consider package pricing for ongoing virtual wellness programs.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a separate license for telehealth in other states?</h3>
            <p>Generally, you must be licensed in the state where the patient is located at the time of the virtual visit. Multi-state licensing through the Nurse Licensure Compact can help if you plan to serve clients across state lines.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-wound-care', text: 'Why Wound Care Certification Matters' },
  { id: 'certification-types', text: 'Types of Wound Care Certifications' },
  { id: 'who-should-get', text: 'Which Concierge Nurses Should Get Certified' },
  { id: 'requirements', text: 'Requirements and How to Prepare' },
  { id: 'business-impact', text: 'Impact on Your Practice and Revenue' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Certifications That Help You Stand Out',
    description: 'How wound care fits into your overall certification strategy.',
    link: '/resources/certifications/concierge-nurse-certifications',
    category: 'Certifications',
  },
  {
    title: 'A Day in the Life of a Post-Op Recovery Concierge Nurse',
    description: 'Wound care is central to post-op nursing — see it in action.',
    link: '/resources/day-in-the-life/post-op-recovery-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: 'A Day in the Life of a Geriatric Concierge Nurse',
    description: 'Wound care skills are essential for geriatric nursing clients.',
    link: '/resources/day-in-the-life/geriatric-concierge-nurse',
    category: 'Day in the Life',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is wound care certification worth it for concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, particularly for concierge nurses in post-surgical recovery and geriatric niches. Wound care is one of the most commonly requested clinical services, and certification demonstrates expertise that builds confidence with referral sources and clients."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between WCC and CWOCN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WCC (Wound Care Certified) is a certification focused specifically on wound management. CWOCN (Certified Wound, Ostomy, and Continence Nurse) is a broader certification covering wound care, ostomy management, and continence care. CWOCN requires a BSN and specific clinical hours. WCC has fewer prerequisites and is often more accessible for concierge nurses."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get wound care certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preparation time varies by certification. WCC preparation programs typically run 40-60 hours of coursework. CWOCN programs are longer, often requiring several months of didactic and clinical training. Plan to study for two to four months for the WCC exam."
      }
    },
    {
      "@type": "Question",
      "name": "Can concierge nurses do wound care without certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic wound care is within the RN scope of practice. However, certification expands your knowledge of complex wound management, demonstrates expertise to referral sources, and may be required by your liability insurer for advanced wound care services."
      }
    }
  ]
};

export default function WoundCare() {
  return (
    <ResourceLayout
      title="Wound Care Certification for Concierge Nurses"
      description="Explore whether wound care certification is right for your concierge nursing practice — types of certifications available, requirements, and how it impacts your service offerings and referral relationships."
      canonical="/resources/certifications/concierge-nurse-wound-care-certification"
      category="Certifications"
      categorySlug="/resources/certifications"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Wound care certification is one of the highest-value clinical certifications for concierge nurses, especially those in post-surgical recovery and geriatric care niches. It deepens your clinical expertise, expands your service offerings, and strengthens referral relationships with surgeons who need reliable aftercare for their patients. The WCC (Wound Care Certified) credential is the most accessible option for most concierge nurses.
        </p>
      </QuickAnswer>

      <h2 id="why-wound-care">Why Wound Care Certification Matters</h2>
      <p>
        Wound care is one of the most requested services in concierge nursing. Post-surgical clients need wound assessment, dressing changes, and infection monitoring. Geriatric clients may have chronic wounds or pressure injuries requiring ongoing management. Certification signals to surgeons and referral sources that you have specialized expertise beyond basic nursing training.
      </p>

      <h2 id="certification-types">Types of Wound Care Certifications</h2>
      <p>
        Several wound care certifications are available, including the WCC (Wound Care Certified), CWOCN (Certified Wound, Ostomy, and Continence Nurse), and CWS (Certified Wound Specialist). Each has different prerequisites and scope. For most concierge nurses, the WCC is the best balance of accessibility, recognition, and clinical value.
      </p>

      <h2 id="who-should-get">Which Concierge Nurses Should Get Certified</h2>
      <p>
        Wound care certification is particularly valuable if you work in post-surgical recovery, geriatric care, or any niche where skin integrity and wound management are common client needs. Even as a general concierge nurse, having the certification expands your service menu and makes you more valuable to referral sources.
      </p>

      <h2 id="requirements">Requirements and How to Prepare</h2>
      <p>
        Requirements vary by certification, including clinical experience hours, educational prerequisites, and exam preparation. Research the specific certification that aligns with your goals, and consult the certifying body for current requirements. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> includes guidance on choosing and sequencing your certifications strategically.
      </p>

      <h2 id="business-impact">Impact on Your Practice and Revenue</h2>
      <p>
        Wound care certification expands your service menu, strengthens referral relationships with surgeons, supports premium pricing for specialized services, and reduces liability risk through demonstrated competency. For the full picture on certifications, visit our <Link to="/resources/certifications/concierge-nurse-certifications" className="text-gold hover:text-gold/80 underline">certifications overview</Link>.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is wound care certification worth it for concierge nurses?</h3>
            <p>Yes, particularly for concierge nurses in post-surgical recovery and geriatric care niches. Wound care is one of the most commonly requested clinical services, and certification demonstrates expertise that builds confidence with referral sources and clients.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the difference between WCC and CWOCN?</h3>
            <p>WCC (Wound Care Certified) is a certification focused specifically on wound management. CWOCN (Certified Wound, Ostomy, and Continence Nurse) is a broader certification covering wound care, ostomy management, and continence care. CWOCN requires a BSN and specific clinical hours. WCC has fewer prerequisites and is often more accessible for concierge nurses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take to get wound care certified?</h3>
            <p>Preparation time varies by certification. WCC preparation programs typically run 40-60 hours of coursework. CWOCN programs are longer, often requiring several months of didactic and clinical training. Plan to study for two to four months for the WCC exam.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can concierge nurses do wound care without certification?</h3>
            <p>Basic wound care is within the RN scope of practice. However, certification expands your knowledge of complex wound management, demonstrates expertise to referral sources, and may be required by your liability insurer for advanced wound care services.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'honest-answer', text: "The Honest Answer" },
  { id: 'experience-matters', text: "Why Clinical Experience Matters" },
  { id: 'what-you-can-do', text: "What New Grads Can Do Now" },
  { id: 'building-toward', text: "Building Toward Concierge Nursing" },
  { id: 'exceptions', text: "When New Grads Can Start Sooner" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "What Is a Concierge Nurse?",
    description: "Understand the model you are working toward.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
  {
    title: "Certifications That Help You Stand Out",
    description: "Certifications to pursue during your clinical experience phase.",
    link: '/resources/certifications/concierge-nurse-certifications',
    category: 'Certifications',
  },
  {
    title: "Why Hospital Nurses Are Leaving for Entrepreneurship",
    description: "The career path you may eventually follow.",
    link: '/resources/trends/nurses-leaving-hospitals-entrepreneurship',
    category: 'Industry Trends',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a new grad nurse start a concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technically, yes — you have a license. Practically, most mentors recommend building two to three years of clinical experience first. This gives you the assessment skills, clinical confidence, and professional credibility that clients and referral sources expect."
      }
    },
    {
      "@type": "Question",
      "name": "How much experience do I need before going into concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no universal requirement, but two to three years of clinical experience in a relevant area is commonly recommended. The specific amount depends on your nursing specialty and the concierge niche you plan to enter."
      }
    },
    {
      "@type": "Question",
      "name": "What should new grads do to prepare for concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Focus on building strong clinical skills, pursue relevant certifications, learn about business fundamentals, save money for your eventual startup costs, and study the concierge nursing market. Use your early career to become an excellent clinician."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any concierge nursing niches that work for newer nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wellness-focused niches like health coaching, IV hydration (with proper certification and supervision), and preventive care assessments may be more accessible to newer nurses than acute care niches like post-surgical recovery."
      }
    }
  ]
};

export default function NewGrads() {
  return (
    <ResourceLayout
      title={"Concierge Nursing for New Grad Nurses: Is It Too Soon?"}
      description={"Can new graduate nurses start a concierge nursing business? An honest look at the advantages, challenges, and recommendations for new grads interested in concierge nursing."}
      canonical="/resources/for/concierge-nursing-new-grad-nurses"
      category="For You"
      categorySlug="/resources/for"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Most concierge nursing mentors recommend building two to three years of clinical experience before starting an independent practice. Clinical confidence, assessment skills, and professional credibility are built through hands-on experience that cannot be shortcut. That said, new grads can start preparing now — learning business fundamentals, building their clinical foundation intentionally, and positioning themselves for a concierge nursing career in the near future.
        </p>
      </QuickAnswer>

      <h2 id="honest-answer">The Honest Answer</h2>
      <p>Can you legally start a concierge nursing business as a new grad? Yes — you have a license. Should you? In most cases, not yet. Concierge nursing requires you to practice independently, make clinical judgments without a team to consult, and build trust with clients and referral sources who expect experienced care. These capabilities develop through clinical experience.</p>

      <h2 id="experience-matters">Why Clinical Experience Matters</h2>
      <p>In a hospital, you have backup: charge nurses, physicians, rapid response teams, and colleagues to consult. In a client's home, you are the clinical expert. When something unexpected happens — a wound that looks different than expected, a blood pressure reading that concerns you, a client whose mental status has changed — you need the clinical judgment that comes from experience, not just education.</p>

      <h2 id="what-you-can-do">What New Grads Can Do Now</h2>
      <ul>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Choose a clinical position that aligns with your intended concierge niche</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Pursue <Link to="/resources/certifications/concierge-nurse-certifications" className="text-gold hover:text-gold/80 underline">certifications</Link> that will serve your future practice</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Study business fundamentals — marketing, finance, and entrepreneurship</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Join the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link> to learn from practicing concierge nurses</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span>Save money for your eventual startup costs</span></li>
      </ul>

      <h2 id="building-toward">Building Toward Concierge Nursing</h2>
      <p>Treat your early clinical years as an apprenticeship for your future practice. Every assessment you perform, every patient interaction, and every clinical challenge builds the foundation for your concierge nursing career. Be intentional about what you learn and where you work.</p>

      <h2 id="exceptions">When New Grads Can Start Sooner</h2>
      <p>Some wellness-oriented niches may be accessible earlier — health education, preventive screening, wellness coaching — where the clinical acuity is lower. Even in these niches, having a strong clinical foundation improves your confidence and credibility. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> helps you evaluate readiness and build a realistic timeline for your launch.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can a new grad nurse start a concierge nursing business?</h3>
            <p>Technically, yes — you have a license. Practically, most mentors recommend building two to three years of clinical experience first. This gives you the assessment skills, clinical confidence, and professional credibility that clients and referral sources expect.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much experience do I need before going into concierge nursing?</h3>
            <p>There is no universal requirement, but two to three years of clinical experience in a relevant area is commonly recommended. The specific amount depends on your nursing specialty and the concierge niche you plan to enter.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should new grads do to prepare for concierge nursing?</h3>
            <p>Focus on building strong clinical skills, pursue relevant certifications, learn about business fundamentals, save money for your eventual startup costs, and study the concierge nursing market. Use your early career to become an excellent clinician.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are there any concierge nursing niches that work for newer nurses?</h3>
            <p>Wellness-focused niches like health coaching, IV hydration (with proper certification and supervision), and preventive care assessments may be more accessible to newer nurses than acute care niches like post-surgical recovery.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

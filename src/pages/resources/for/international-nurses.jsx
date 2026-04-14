import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'unique-strengths', text: "Your Unique Strengths" },
  { id: 'licensure', text: "Licensure Requirements" },
  { id: 'cultural-advantage', text: "Cultural and Language Advantages" },
  { id: 'market-positioning', text: "Positioning Your Practice" },
  { id: 'challenges', text: "Challenges and How to Navigate Them" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "What Is a Concierge Nurse?",
    description: "Understand the US concierge nursing model.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
  {
    title: "Certifications That Help You Stand Out",
    description: "US certifications to strengthen your credentials.",
    link: '/resources/certifications/concierge-nurse-certifications',
    category: 'Certifications',
  },
  {
    title: "Concierge Nursing Startup Costs",
    description: "Financial planning for starting your practice.",
    link: '/resources/concierge-nursing-startup-costs',
    category: 'Getting Started',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can international nurses start a concierge nursing business in the US?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you hold a valid US nursing license. Internationally educated nurses must complete the credential evaluation and NCLEX process to obtain US licensure. Once licensed, you have the same entrepreneurial opportunities as any US-educated nurse."
      }
    },
    {
      "@type": "Question",
      "name": "Is being internationally educated a disadvantage in concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all — it can be an advantage. Your multilingual abilities, cultural competency, and global perspective are assets in diverse communities. Many clients specifically seek nurses who speak their language or understand their cultural background."
      }
    },
    {
      "@type": "Question",
      "name": "What is the licensure process for internationally educated nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The general process includes credential evaluation through an approved agency (like CGFNS), passing the NCLEX-RN exam, meeting individual state licensure requirements, and potentially completing additional education or clinical hours depending on your credentials."
      }
    },
    {
      "@type": "Question",
      "name": "Which niches are best for internationally educated nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any niche that aligns with your clinical experience. Nurses who speak multiple languages often find success in diverse communities, geriatric care (where cultural sensitivity matters deeply), and medical tourism concierge services."
      }
    }
  ]
};

export default function InternationalNurses() {
  return (
    <ResourceLayout
      title={"Concierge Nursing for International and Foreign-Educated Nurses"}
      description={"How internationally educated nurses can build concierge nursing businesses in the US — licensure, cultural strengths, language advantages, and unique market positioning."}
      canonical="/resources/for/concierge-nursing-international-nurses"
      category="For You"
      categorySlug="/resources/for"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Internationally educated nurses bring unique strengths to concierge nursing — multilingual capabilities, cultural competency, diverse clinical experience, and perspectives that resonate with the increasingly diverse US patient population. Once you hold a valid US nursing license, the concierge nursing opportunity is fully open to you. Your international background is an asset to leverage, not a barrier to overcome.
        </p>
      </QuickAnswer>

      <h2 id="unique-strengths">Your Unique Strengths</h2>
      <p>International nurses often speak multiple languages, understand diverse cultural health beliefs and practices, have clinical experience from different healthcare systems, and bring a global perspective to patient care. These are genuine competitive advantages in concierge nursing, particularly in multicultural communities.</p>

      <h2 id="licensure">Licensure Requirements</h2>
      <p>To practice concierge nursing in the US, you must hold a valid US nursing license. The pathway for internationally educated nurses typically includes credential evaluation, NCLEX passage, and state-specific requirements. This process takes time and investment but is a one-time foundation for your career.</p>

      <h2 id="cultural-advantage">Cultural and Language Advantages</h2>
      <p>In many US communities, there are populations who would deeply value a nurse who speaks their language and understands their cultural approach to health and illness. This is a powerful market position — you can serve clients who feel underserved by English-only, culturally homogeneous healthcare options.</p>

      <h2 id="market-positioning">Positioning Your Practice</h2>
      <p>Highlight your multilingual capabilities, cultural competency, and international experience in your marketing. Position yourself as a nurse who can provide personalized care that respects cultural values and communicates in the client's preferred language. This differentiation helps you stand out in the <Link to="/resources/trends/patients-choosing-private-pay-nursing" className="text-gold hover:text-gold/80 underline">private-pay market</Link>.</p>

      <h2 id="challenges">Challenges and How to Navigate Them</h2>
      <p>Challenges may include US business formation unfamiliarity, building professional networks from scratch, and navigating a healthcare system different from what you trained in. The <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link> provides community support, and the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> guides you through US business formation and practice building step by step.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can international nurses start a concierge nursing business in the US?</h3>
            <p>Yes, if you hold a valid US nursing license. Internationally educated nurses must complete the credential evaluation and NCLEX process to obtain US licensure. Once licensed, you have the same entrepreneurial opportunities as any US-educated nurse.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is being internationally educated a disadvantage in concierge nursing?</h3>
            <p>Not at all — it can be an advantage. Your multilingual abilities, cultural competency, and global perspective are assets in diverse communities. Many clients specifically seek nurses who speak their language or understand their cultural background.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the licensure process for internationally educated nurses?</h3>
            <p>The general process includes credential evaluation through an approved agency (like CGFNS), passing the NCLEX-RN exam, meeting individual state licensure requirements, and potentially completing additional education or clinical hours depending on your credentials.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Which niches are best for internationally educated nurses?</h3>
            <p>Any niche that aligns with your clinical experience. Nurses who speak multiple languages often find success in diverse communities, geriatric care (where cultural sensitivity matters deeply), and medical tourism concierge services.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

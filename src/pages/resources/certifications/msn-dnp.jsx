import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'do-you-need', text: 'Do You Need an Advanced Degree?' },
  { id: 'msn-overview', text: 'The MSN Path for Concierge Nurses' },
  { id: 'dnp-overview', text: 'The DNP Path for Concierge Nurses' },
  { id: 'roi-analysis', text: 'Return on Investment Analysis' },
  { id: 'alternatives', text: 'Alternatives to Advanced Degrees' },
  { id: 'when-it-makes-sense', text: 'When an Advanced Degree Makes Sense' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Is a Concierge Nursing Certification Worth It?',
    description: 'Evaluating certification programs versus advanced degrees.',
    link: '/resources/certifications/concierge-nursing-certification-worth-it',
    category: 'Certifications',
  },
  {
    title: 'Concierge Nursing for Nurse Practitioners',
    description: 'How NPs can expand their practice with concierge services.',
    link: '/resources/for/concierge-nursing-nurse-practitioners',
    category: 'For You',
  },
  {
    title: 'Certifications That Help You Stand Out',
    description: 'Clinical certifications that may deliver better ROI than a degree.',
    link: '/resources/certifications/concierge-nurse-certifications',
    category: 'Certifications',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need an MSN or DNP to be a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A BSN with an active RN license is sufficient to start and run a concierge nursing practice. An advanced degree is not required for most concierge nursing services. The decision to pursue an MSN or DNP should be based on whether you want to expand your scope of practice or pursue specific career goals."
      }
    },
    {
      "@type": "Question",
      "name": "Will an MSN help me earn more as a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Your concierge nursing income is determined by your rates, client volume, and business skills — not your degree. An MSN that leads to NP licensure can expand your scope and service offerings, which may increase revenue. But the degree alone does not guarantee higher earnings in a private practice model."
      }
    },
    {
      "@type": "Question",
      "name": "Should I get my MSN before or after starting my concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most concierge nursing mentors recommend starting your business first. Practical business experience will help you decide whether an advanced degree serves your goals. You can always pursue an MSN later, and the clinical and business experience you gain will make the academic work more relevant."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an MSN and a DNP for concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An MSN (Master of Science in Nursing) can lead to advanced practice roles like NP, CNS, or nurse educator. A DNP (Doctor of Nursing Practice) is a terminal practice degree that emphasizes leadership, evidence-based practice, and systems-level thinking. For concierge nursing, the MSN-NP path offers the most direct clinical expansion."
      }
    }
  ]
};

export default function MsnDnp() {
  return (
    <ResourceLayout
      title="Should I Get My MSN or DNP as a Concierge Nurse?"
      description="An honest analysis of whether pursuing a Master's or Doctoral nursing degree makes sense for your concierge nursing career — including ROI, time investment, and practical alternatives."
      canonical="/resources/certifications/concierge-nurse-msn-dnp"
      category="Certifications"
      categorySlug="/resources/certifications"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          For most concierge nurses, an advanced degree is not necessary to build a successful practice. Your RN license, clinical experience, and business skills are what drive your success. However, an MSN leading to NP licensure can significantly expand your scope of practice and service offerings. A DNP is rarely necessary for concierge nursing but may align with long-term leadership or academic goals. Evaluate the time, cost, and opportunity cost before enrolling.
        </p>
      </QuickAnswer>

      <h2 id="do-you-need">Do You Need an Advanced Degree?</h2>
      <p>
        The short answer is no. Concierge nursing is a business model, not a clinical specialty requiring an advanced degree. Your RN license, clinical experience, and business skills drive your success. However, an MSN leading to NP licensure can significantly expand your scope, and a DNP may align with long-term leadership or academic goals.
      </p>

      <h2 id="msn-overview">The MSN Path for Concierge Nurses</h2>
      <p>
        The MSN-NP path is the most directly relevant for concierge nurses — as an NP, you can prescribe, order diagnostics, and offer concierge primary care. Other MSN tracks (CNS, Administration) may also align with specific goals. An MSN typically takes two to three years of part-time study.
      </p>

      <h2 id="dnp-overview">The DNP Path for Concierge Nurses</h2>
      <p>
        The DNP is the terminal practice degree in nursing, emphasizing leadership and evidence-based practice. For most concierge nurses, it is not a practical necessity — the investment is substantial and the direct revenue impact is often minimal. It makes sense primarily for those pursuing teaching, policy work, or advanced professional branding.
      </p>

      <h2 id="roi-analysis">Return on Investment Analysis</h2>
      <p>
        Advanced degrees are expensive in both tuition and opportunity cost. Consider what else you could do with that time and money — building your practice, investing in marketing, or completing clinical certifications that deliver faster returns. An NP license can expand your service menu significantly, while a DNP may not change your day-to-day revenue.
      </p>

      <h2 id="alternatives">Alternatives to Advanced Degrees</h2>
      <p>
        Before enrolling, consider whether <Link to="/resources/certifications/concierge-nurse-certifications" className="text-gold hover:text-gold/80 underline">targeted clinical certifications</Link>, business mentorship through the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link>, hands-on practice experience, or targeted business courses might serve your concierge nursing goals more efficiently.
      </p>

      <h2 id="when-it-makes-sense">When an Advanced Degree Makes Sense</h2>
      <p>
        Pursue an MSN or DNP when you have a clear, specific reason tied to your goals — like wanting to prescribe and provide concierge primary care as an NP. If you are uncertain, start or grow your practice first. Real-world business experience will clarify whether additional education serves your vision.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need an MSN or DNP to be a concierge nurse?</h3>
            <p>No. A BSN with an active RN license is sufficient to start and run a concierge nursing practice. An advanced degree is not required for most concierge nursing services.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Will an MSN help me earn more as a concierge nurse?</h3>
            <p>Not necessarily. Your concierge nursing income is determined by your rates, client volume, and business skills — not your degree. An MSN that leads to NP licensure can expand your scope and service offerings, which may increase revenue. But the degree alone does not guarantee higher earnings.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I get my MSN before or after starting my concierge nursing business?</h3>
            <p>Most concierge nursing mentors recommend starting your business first. Practical business experience will help you decide whether an advanced degree serves your goals.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the difference between an MSN and a DNP for concierge nursing?</h3>
            <p>An MSN can lead to advanced practice roles like NP, CNS, or nurse educator. A DNP is a terminal practice degree that emphasizes leadership, evidence-based practice, and systems-level thinking. For concierge nursing, the MSN-NP path offers the most direct clinical expansion.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'shortage-impact', text: "How the Shortage Affects Patient Care" },
  { id: 'gap-filling', text: "Concierge Nurses Fill the Gap" },
  { id: 'nurse-perspective', text: "The Nurse's Perspective" },
  { id: 'positioning', text: "Positioning Your Practice" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Why Hospital Nurses Are Leaving for Entrepreneurship",
    description: "The workforce dynamics behind the shortage.",
    link: '/resources/trends/nurses-leaving-hospitals-entrepreneurship',
    category: 'Industry Trends',
  },
  {
    title: "The Future of Concierge Nursing",
    description: "How workforce trends shape the industry's future.",
    link: '/resources/trends/future-of-concierge-nursing',
    category: 'Industry Trends',
  },
  {
    title: "Concierge Nursing for Nurses Over 50",
    description: "Experienced nurses bring tremendous value to concierge care.",
    link: '/resources/for/concierge-nursing-nurses-over-50',
    category: 'For You',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the nursing shortage benefit concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The shortage degrades the quality of institutional care, pushing patients toward private alternatives. It also pushes experienced nurses to explore independent practice, increasing the supply of qualified concierge nurses. Both sides fuel growth."
      }
    },
    {
      "@type": "Question",
      "name": "Is it ethical to leave the hospital during a nursing shortage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is a personal decision. Many nurses find they can provide higher-quality care to individual clients as concierge nurses than they could in an understaffed hospital. Your career decisions should prioritize your wellbeing and professional fulfillment."
      }
    },
    {
      "@type": "Question",
      "name": "Will the nursing shortage end?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Workforce projections suggest the shortage will persist for years due to nursing school capacity limitations, faculty shortages, an aging nursing workforce, and ongoing burnout-driven exits. This creates a sustained environment for concierge nursing growth."
      }
    },
    {
      "@type": "Question",
      "name": "Do hospitals view concierge nurses negatively?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some may. But surgeons and physicians who refer patients to concierge nurses see the value clearly. And an increasing number of health systems are exploring partnerships with private-pay nursing services to fill gaps in their own care delivery."
      }
    }
  ]
};

export default function NursingShortageOpportunity() {
  return (
    <ResourceLayout
      title={"How the Nursing Shortage Is Creating Opportunity for Concierge Nurses"}
      description={"The national nursing shortage is creating demand for concierge nursing on both sides — more patients need private care, and more nurses are seeking independent practice."}
      canonical="/resources/trends/nursing-shortage-concierge-nursing-opportunity"
      category="Industry Trends"
      categorySlug="/resources/trends"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          The national nursing shortage creates a dual opportunity for concierge nurses: institutional understaffing degrades patient care quality, pushing consumers toward private-pay alternatives, while nurse burnout and dissatisfaction push experienced clinicians toward independent practice. This convergence means more demand for concierge services and more qualified nurses available to provide them.
        </p>
      </QuickAnswer>

      <h2 id="shortage-impact">How the Shortage Affects Patient Care</h2>
      <p>When hospitals are understaffed, patients receive less attention. Discharge happens faster, follow-up is less thorough, and patients often go home feeling unprepared and unsupported. This creates the exact gap that concierge nurses fill — personalized, attentive care during the most vulnerable moments of a patient's health journey.</p>

      <h2 id="gap-filling">Concierge Nurses Fill the Gap</h2>
      <p>Concierge nurses provide what short-staffed hospitals cannot: one-on-one attention, unhurried assessments, thorough patient education, and continuity of care. For post-surgical patients discharged quickly, elderly clients who cannot get timely follow-up, and families navigating complex health situations, a concierge nurse becomes an essential bridge.</p>

      <h2 id="nurse-perspective">The Nurse's Perspective</h2>
      <p>The same shortage that creates patient demand also creates nurse supply. <Link to="/resources/trends/nurses-leaving-hospitals-entrepreneurship" className="text-gold hover:text-gold/80 underline">Experienced nurses are leaving hospitals</Link> not because they do not care about nursing — but because they care deeply and cannot deliver the care they believe in within broken systems. Concierge nursing offers a way to practice nursing as it should be practiced.</p>

      <h2 id="positioning">Positioning Your Practice</h2>
      <p>Position your practice as the solution to a real problem. You are not taking patients away from hospitals — you are providing care that hospitals cannot deliver. This framing resonates with referral sources, clients, and the broader healthcare community.</p>
      <p>Start building your practice with the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link>, designed for nurses ready to transition from institutional settings to independent practice.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How does the nursing shortage benefit concierge nurses?</h3>
            <p>The shortage degrades the quality of institutional care, pushing patients toward private alternatives. It also pushes experienced nurses to explore independent practice, increasing the supply of qualified concierge nurses. Both sides fuel growth.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it ethical to leave the hospital during a nursing shortage?</h3>
            <p>This is a personal decision. Many nurses find they can provide higher-quality care to individual clients as concierge nurses than they could in an understaffed hospital. Your career decisions should prioritize your wellbeing and professional fulfillment.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Will the nursing shortage end?</h3>
            <p>Workforce projections suggest the shortage will persist for years due to nursing school capacity limitations, faculty shortages, an aging nursing workforce, and ongoing burnout-driven exits. This creates a sustained environment for concierge nursing growth.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do hospitals view concierge nurses negatively?</h3>
            <p>Some may. But surgeons and physicians who refer patients to concierge nurses see the value clearly. And an increasing number of health systems are exploring partnerships with private-pay nursing services to fill gaps in their own care delivery.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

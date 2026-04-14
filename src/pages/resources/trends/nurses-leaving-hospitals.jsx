import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'burnout-crisis', text: "The Burnout Crisis" },
  { id: 'autonomy-desire', text: "The Desire for Autonomy" },
  { id: 'income-potential', text: "Income and Financial Potential" },
  { id: 'what-holds-back', text: "What Holds Nurses Back" },
  { id: 'making-transition', text: "Making the Transition Successfully" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "The Nursing Shortage and Concierge Nursing Opportunity",
    description: "How the shortage connects to the entrepreneurship trend.",
    link: '/resources/trends/nursing-shortage-concierge-nursing-opportunity',
    category: 'Industry Trends',
  },
  {
    title: "Concierge Nursing for Nurses Over 50",
    description: "Experienced nurses bring the most to independent practice.",
    link: '/resources/for/concierge-nursing-nurses-over-50',
    category: 'For You',
  },
  {
    title: "What Is a Concierge Nurse?",
    description: "The model that attracts departing hospital nurses.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are so many nurses leaving hospitals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The primary drivers are burnout from chronic understaffing, moral injury from being unable to provide adequate care, desire for schedule flexibility and work-life balance, stagnant compensation relative to workload, and the availability of alternative career paths including entrepreneurship."
      }
    },
    {
      "@type": "Question",
      "name": "Is it risky to leave a hospital job for concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any career transition carries risk. You can mitigate it by building your practice part-time before leaving, saving a financial runway, and joining a mentorship program. Many nurses find the risk of staying in a burnout-inducing job is greater than the risk of entrepreneurship."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need years of experience before going independent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clinical experience strengthens your practice, but there is no magic number of years required. Most mentors recommend at least two to three years of clinical experience so you have a strong foundation. Some niches require more specialized experience."
      }
    },
    {
      "@type": "Question",
      "name": "Can I go back to hospital nursing if entrepreneurship does not work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your nursing license and clinical experience do not expire because you tried entrepreneurship. Many nurses maintain per diem or part-time hospital positions while building their practice, keeping the door open."
      }
    }
  ]
};

export default function NursesLeavingHospitals() {
  return (
    <ResourceLayout
      title={"Why Hospital Nurses Are Leaving for Entrepreneurship"}
      description={"Understand why experienced nurses are leaving hospital employment for independent practice — burnout, autonomy, income potential, and the growing appeal of entrepreneurship."}
      canonical="/resources/trends/nurses-leaving-hospitals-entrepreneurship"
      category="Industry Trends"
      categorySlug="/resources/trends"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Hospital nurses are leaving for entrepreneurship in growing numbers, driven by burnout, desire for autonomy, income potential, and the increasing availability of business education and mentorship for nurses. This trend feeds the supply side of concierge nursing — experienced clinicians bringing their skills to a practice model that lets them deliver care the way they believe it should be delivered.
        </p>
      </QuickAnswer>

      <h2 id="burnout-crisis">The Burnout Crisis</h2>
      <p>Nurse burnout is not new, but it has reached a critical point. Chronic understaffing means nurses care for more patients with less support. The emotional toll of being unable to provide the care patients need — moral injury — drives many experienced nurses to seek alternatives. Concierge nursing offers the opposite: one client at a time, adequate time for each visit, and the ability to deliver genuinely excellent care.</p>

      <h2 id="autonomy-desire">The Desire for Autonomy</h2>
      <p>Nurses are highly trained professionals who often have little control over their work environment, schedule, or care delivery in hospital settings. Concierge nursing offers complete autonomy — you choose your clients, set your schedule, define your services, and deliver care according to your professional judgment.</p>

      <h2 id="income-potential">Income and Financial Potential</h2>
      <p>While hospital nurses receive steady paychecks, that income has a ceiling. Concierge nurses set their own rates and have uncapped income potential. The private-pay model means your income reflects the value you deliver, not a predetermined wage scale. However, entrepreneurial income is also variable and requires business skills to maximize.</p>

      <h2 id="what-holds-back">What Holds Nurses Back</h2>
      <p>Fear is the biggest barrier: fear of losing a steady paycheck, fear of not knowing how to run a business, fear of failure, and imposter syndrome. These fears are normal and addressable. Programs like the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> exist specifically to help nurses navigate the transition with structure and support.</p>

      <h2 id="making-transition">Making the Transition Successfully</h2>
      <p>Start while you are still employed. Build your business foundation — LLC, insurance, marketing — on your days off. Take your first clients part-time. Save a financial runway. Join a <Link to="/community" className="text-gold hover:text-gold/80 underline">professional community</Link> for support. Transition to full-time concierge nursing when your practice can support you. There is no rule that says you have to leap — you can bridge.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Why are so many nurses leaving hospitals?</h3>
            <p>The primary drivers are burnout from chronic understaffing, moral injury from being unable to provide adequate care, desire for schedule flexibility and work-life balance, stagnant compensation relative to workload, and the availability of alternative career paths including entrepreneurship.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it risky to leave a hospital job for concierge nursing?</h3>
            <p>Any career transition carries risk. You can mitigate it by building your practice part-time before leaving, saving a financial runway, and joining a mentorship program. Many nurses find the risk of staying in a burnout-inducing job is greater than the risk of entrepreneurship.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need years of experience before going independent?</h3>
            <p>Clinical experience strengthens your practice, but there is no magic number of years required. Most mentors recommend at least two to three years of clinical experience so you have a strong foundation. Some niches require more specialized experience.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I go back to hospital nursing if entrepreneurship does not work?</h3>
            <p>Yes. Your nursing license and clinical experience do not expire because you tried entrepreneurship. Many nurses maintain per diem or part-time hospital positions while building their practice, keeping the door open.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

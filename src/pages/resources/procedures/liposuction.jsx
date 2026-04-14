import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-to-expect', text: 'What to Expect During Recovery' },
  { id: 'nursing-services', text: 'Concierge Nursing Services Provided' },
  { id: 'complications', text: 'Complications to Watch For' },
  { id: 'patient-concerns', text: 'Common Patient Concerns' },
  { id: 'why-concierge-nurse', text: 'Why Hire a Concierge Nurse' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "Concierge Nursing Care After Rhinoplasty",
    description: "Learn what concierge nursing care looks like after rhinoplasty, including what to expect during reco...",
    link: "/resources/procedures/concierge-nursing-after-rhinoplasty",
    category: 'Procedures',
  },
  {
    title: "Concierge Nursing Care After Breast Augmentation",
    description: "Understand what concierge nursing care involves after breast augmentation surgery, including recover...",
    link: "/resources/procedures/concierge-nursing-after-breast-augmentation",
    category: 'Procedures',
  },
  {
    title: "Concierge Nursing Care After Mommy Makeover",
    description: "Comprehensive guide to concierge nursing care after a mommy makeover, covering multi-procedure recov...",
    link: "/resources/procedures/concierge-nursing-after-mommy-makeover",
    category: 'Procedures',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do I need a concierge nurse after liposuction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most patients benefit from nursing visits during the first 1 to 7 days after surgery, when complications are most likely and mobility is most limited. The exact duration depends on the complexity of your procedure, your overall health, and your home support system. Your concierge nurse can adjust the care plan as your recovery progresses." }
    },
    {
      "@type": "Question",
      "name": "What does a concierge nurse do after liposuction?",
      "acceptedAnswer": { "@type": "Answer", "text": "A concierge nurse provides skilled nursing care in your home, including wound monitoring, pain management, medication administration, complication detection, mobility assistance, and communication with your surgeon. They bring clinical expertise to your home environment for a safer, more comfortable recovery." }
    },
    {
      "@type": "Question",
      "name": "Is a concierge nurse covered by insurance after liposuction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Concierge nursing is typically a private-pay service not covered by insurance. However, some clients submit superbills to their insurance for potential out-of-network reimbursement. The investment in professional post-operative nursing care can help prevent costly complications and emergency room visits." }
    },
    {
      "@type": "Question",
      "name": "How much does a concierge nurse cost after liposuction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Rates vary by location, duration of care, and the specific services provided. Most concierge nurses charge hourly rates or offer package pricing for post-surgical recovery. Contact a concierge nurse in your area for specific pricing, or visit our pricing guide for general information." }
    },
    {
      "@type": "Question",
      "name": "Can a concierge nurse communicate with my surgeon during recovery?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Professional communication with your surgical team is a key part of concierge nursing care. Your nurse can provide clinical updates to your surgeon, relay concerns, and receive updated orders — ensuring continuity of care between the surgical office and your home." }
    }
  ]
};

export default function Liposuction() {
  return (
    <ResourceLayout
      title="Concierge Nursing Care After Liposuction"
      description="Learn how concierge nurses support liposuction recovery with drain management, compression garment care, fluid monitoring, and complication detection in the home setting."
      canonical="/resources/procedures/concierge-nursing-after-liposuction"
      category="Procedures"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Concierge nursing care after liposuction provides professional, in-home nursing support during the critical recovery period. Your concierge nurse monitors your surgical sites, manages pain, watches for complications, assists with mobility, and communicates with your surgeon — all in the comfort of your home. Recovery time is typically 1 to 2 weeks for initial recovery, with compression garments worn for 4 to 8 weeks.
        </p>
      </QuickAnswer>

      <p>
        Recovering at home after surgery presents real challenges. Many patients feel anxious about managing their recovery without medical professionals nearby, uncertain about what is normal versus concerning, and physically limited in the first days after the procedure. A concierge nurse bridges the gap between the surgical center and your home, providing skilled clinical care and peace of mind during the most critical phase of recovery.
      </p>

      <h2 id="what-to-expect">What to Expect During Recovery</h2>
      <p>
        Recovery timelines vary by individual, procedure complexity, and overall health. The first 48 to 72 hours are typically the most challenging, with the highest pain levels and greatest mobility limitations. Your surgeon will provide specific post-operative instructions, and a concierge nurse ensures those instructions are followed precisely while watching for anything that deviates from expected recovery patterns.
      </p>

      <h2 id="nursing-services">Concierge Nursing Services Provided</h2>
      <p>
        A concierge nurse provides skilled, hands-on clinical care in your home — including wound monitoring, pain management, medication administration, mobility assistance, and ongoing communication with your surgeon. The specific services are tailored to your procedure and your surgeon's protocols, ensuring you receive personalized care rather than a one-size-fits-all approach.
      </p>
      <p>
        If you are a nurse interested in learning how to deliver post-operative concierge care, our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> provides the clinical frameworks and business training to build this into a successful practice.
      </p>

      <h2 id="complications">Complications to Watch For</h2>
      <p>
        While most recoveries proceed smoothly, every surgical procedure carries risks. A trained concierge nurse knows the specific warning signs to monitor for — from infection and bleeding to more serious complications that require immediate medical attention. Early detection by a skilled nurse can mean the difference between a simple intervention and a hospital readmission.
      </p>

      <h2 id="patient-concerns">Common Patient Concerns</h2>
      <p>
        Patients commonly experience anxiety about their recovery timeline, concern about what is normal versus abnormal, sleep disruption, and difficulty with daily activities. Having a concierge nurse available to address these concerns in real-time provides reassurance and prevents unnecessary worry. Many things that feel alarming are actually normal parts of healing — but only a trained professional can make that determination.
      </p>

      <h2 id="why-concierge-nurse">Why Hire a Concierge Nurse</h2>
      <p>
        A concierge nurse brings clinical expertise to your home, detects complications early, serves as a liaison with your surgical team, provides peace of mind for you and your family, and supports better overall outcomes. Professional post-operative monitoring is an investment in safer, more comfortable healing.
      </p>

      <p>
        If you are a nurse interested in providing post-operative concierge care, our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> teaches you how to build a successful practice around surgical recovery. If you are a patient seeking concierge nursing care, <Link to="/contact" className="text-gold hover:text-gold/80">contact us</Link> and we can help connect you with a qualified concierge nurse in your area.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long do I need a concierge nurse after liposuction?</h3>
            <p>Most patients benefit from nursing visits during the first 1 to 7 days when complications are most likely and mobility is most limited. Your nurse adjusts the care plan as your recovery progresses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What does a concierge nurse do during recovery?</h3>
            <p>Your nurse provides wound monitoring, pain management, medication administration, complication detection, mobility assistance, and communication with your surgeon — all in your home.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is concierge nursing covered by insurance?</h3>
            <p>Concierge nursing is typically private-pay. Some clients submit superbills for potential out-of-network reimbursement. The investment helps prevent costly complications and ER visits.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much does post-operative concierge nursing cost?</h3>
            <p>Rates vary by location and service duration. Most concierge nurses offer hourly rates or recovery packages. Visit our <Link to="/resources/concierge-nurse-pricing-guide" className="text-gold hover:text-gold/80">pricing guide</Link> for general information.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can my nurse communicate with my surgeon?</h3>
            <p>Yes. Professional communication with your surgical team is a core part of concierge nursing care, ensuring continuity between the surgeon's office and your home recovery.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

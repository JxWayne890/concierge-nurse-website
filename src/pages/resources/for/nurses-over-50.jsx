import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'your-advantage', text: "Your Experience Is Your Greatest Asset" },
  { id: 'physical-demands', text: "Managing Physical Demands" },
  { id: 'niche-alignment', text: "Niches That Leverage Your Experience" },
  { id: 'technology', text: "Technology Comfort" },
  { id: 'financial-planning', text: "Financial Planning at This Stage" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "A Day in the Life of a Geriatric Concierge Nurse",
    description: "A niche where life experience is invaluable.",
    link: '/resources/day-in-the-life/geriatric-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: "Why Hospital Nurses Are Leaving for Entrepreneurship",
    description: "The career transition many experienced nurses are making.",
    link: '/resources/trends/nurses-leaving-hospitals-entrepreneurship',
    category: 'Industry Trends',
  },
  {
    title: "A Day in the Life of a Part-Time Concierge Nurse",
    description: "Part-time models work well for nurses approaching retirement.",
    link: '/resources/day-in-the-life/part-time-concierge-nurse',
    category: 'Day in the Life',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it too late to start a concierge nursing business at 50 or older?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not. Nurses over 50 bring decades of clinical expertise, professional networks, and life experience that younger nurses simply do not have. Many concierge nursing clients specifically prefer experienced nurses. Your age is an advantage, not a limitation."
      }
    },
    {
      "@type": "Question",
      "name": "Can concierge nursing work as a transition to retirement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many nurses over 50 use concierge nursing as a bridge between full-time employment and retirement. You can start part-time, control your client load, and scale your practice up or down based on your energy and financial needs."
      }
    },
    {
      "@type": "Question",
      "name": "How do I handle the physical demands of concierge nursing at this age?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concierge nursing is generally less physically demanding than hospital nursing — no 12-hour shifts on your feet, no heavy patient lifting, and no mandatory overtime. You control your schedule and workload, allowing you to manage physical demands sustainably."
      }
    },
    {
      "@type": "Question",
      "name": "Do clients prefer older or younger nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many clients, particularly elderly and post-surgical clients, prefer experienced nurses. Your clinical confidence, professional maturity, and ability to remain calm in complex situations are qualities that come with years of practice."
      }
    }
  ]
};

export default function NursesOver50() {
  return (
    <ResourceLayout
      title={"Concierge Nursing for Nurses Over 50"}
      description={"Why experienced nurses over 50 are uniquely positioned for concierge nursing success — leveraging decades of clinical expertise, life experience, and professional credibility."}
      canonical="/resources/for/concierge-nursing-nurses-over-50"
      category="For You"
      categorySlug="/resources/for"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Nurses over 50 are among the best-positioned professionals for concierge nursing. Your decades of clinical experience, professional credibility, established networks, and life wisdom are exactly what concierge clients value. Concierge nursing also offers a physically sustainable practice model compared to hospital work — no 12-hour shifts, no mandatory overtime, and complete control over your workload.
        </p>
      </QuickAnswer>

      <h2 id="your-advantage">Your Experience Is Your Greatest Asset</h2>
      <p>Clients and referral sources trust experienced nurses. When a surgeon refers a patient to a post-op recovery nurse, they want someone with clinical depth. When a family hires a geriatric care nurse for their aging parent, they want someone who has seen it all and can handle anything. That nurse is you.</p>

      <h2 id="physical-demands">Managing Physical Demands</h2>
      <p>Concierge nursing is significantly less physically taxing than hospital nursing. You see one client at a time, set your own schedule, and can limit the number of visits per day. No more lifting patients, running between rooms, or standing for 12 hours. You design a practice that your body can sustain.</p>

      <h2 id="niche-alignment">Niches That Leverage Your Experience</h2>
      <p>Geriatric care, chronic disease management, care coordination, and patient advocacy are niches where decades of experience translate directly into clinical excellence. Your <Link to="/resources/day-in-the-life/geriatric-concierge-nurse" className="text-gold hover:text-gold/80 underline">ability to connect with elderly clients</Link>, navigate complex health systems, and communicate effectively with families and physicians is refined over a career.</p>

      <h2 id="technology">Technology Comfort</h2>
      <p>If technology feels intimidating, know that concierge nursing technology is straightforward — scheduling apps, basic documentation, and communication tools. You do not need to be a tech expert. Start with simple tools and build comfort gradually. The <Link to="/resources/best/scheduling-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">scheduling</Link> and <Link to="/resources/best/crm-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">CRM</Link> tools available today are designed for ease of use.</p>

      <h2 id="financial-planning">Financial Planning at This Stage</h2>
      <p>Your financial considerations may differ from a 30-year-old launching a practice. You may have retirement savings to protect, healthcare needs to cover independently, and a specific timeline before full retirement. Plan your practice to complement your financial picture — part-time, full-time, or as a gradual transition. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> helps you build a practice that aligns with your life stage and goals.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it too late to start a concierge nursing business at 50 or older?</h3>
            <p>Absolutely not. Nurses over 50 bring decades of clinical expertise, professional networks, and life experience that younger nurses simply do not have. Many concierge nursing clients specifically prefer experienced nurses. Your age is an advantage, not a limitation.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can concierge nursing work as a transition to retirement?</h3>
            <p>Yes. Many nurses over 50 use concierge nursing as a bridge between full-time employment and retirement. You can start part-time, control your client load, and scale your practice up or down based on your energy and financial needs.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I handle the physical demands of concierge nursing at this age?</h3>
            <p>Concierge nursing is generally less physically demanding than hospital nursing — no 12-hour shifts on your feet, no heavy patient lifting, and no mandatory overtime. You control your schedule and workload, allowing you to manage physical demands sustainably.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do clients prefer older or younger nurses?</h3>
            <p>Many clients, particularly elderly and post-surgical clients, prefer experienced nurses. Your clinical confidence, professional maturity, and ability to remain calm in complex situations are qualities that come with years of practice.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

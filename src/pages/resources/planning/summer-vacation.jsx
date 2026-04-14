import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'you-deserve-time-off', text: 'Yes, You Can Take Vacation' },
  { id: 'plan-ahead', text: 'Planning Your Time Off in Advance' },
  { id: 'client-communication', text: 'Communicating with Clients' },
  { id: 'coverage-options', text: 'Coverage Options While You Are Away' },
  { id: 'financial-planning', text: 'Financial Planning for Time Off' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Holiday Season Strategies for Concierge Nurses',
    description: 'Managing your practice during the holiday season.',
    link: '/resources/planning/concierge-nurse-holiday-season',
    category: 'Planning',
  },
  {
    title: 'How to Hire Your First Subcontractor',
    description: 'A subcontractor can cover for you during vacations.',
    link: '/resources/scaling/hire-first-subcontractor-nursing',
    category: 'Scaling',
  },
  {
    title: 'A Day in the Life of a Part-Time Concierge Nurse',
    description: 'Part-time models offer built-in schedule flexibility.',
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
      "name": "How do solo concierge nurses take vacations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With advance planning. Give clients at least four to six weeks notice, arrange coverage if possible, adjust your schedule before and after to accommodate urgent needs, and include vacation provisions in your service agreements from the start."
      }
    },
    {
      "@type": "Question",
      "name": "Should I build vacation time into my pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Factor in the number of weeks you want to take off each year when setting your annual revenue goals and rates. If you want four weeks off, your rates need to support 48 working weeks of income."
      }
    },
    {
      "@type": "Question",
      "name": "What if a client has an emergency while I am on vacation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Have an emergency protocol in place that directs clients to call 911 for true emergencies and provides a backup nurse contact for urgent but non-emergency needs. Communicate this protocol clearly before you leave."
      }
    },
    {
      "@type": "Question",
      "name": "How many vacation weeks should a concierge nurse take per year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is personal, but most business advisors recommend at least two to four weeks of time off per year to prevent burnout and maintain quality of care. Build this into your business plan from the beginning."
      }
    }
  ]
};

export default function SummerVacation() {
  return (
    <ResourceLayout
      title="Summer Planning: Vacation Policies for Solo Concierge Nurses"
      description="How to take time off as a solo concierge nurse without losing clients or revenue — vacation policies, coverage planning, and client communication strategies."
      canonical="/resources/planning/concierge-nurse-vacation-policy"
      category="Planning"
      categorySlug="/resources/planning"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Taking vacation as a solo concierge nurse requires planning, but it is both possible and necessary. Build time off into your business model from the start — include vacation provisions in service agreements, plan financially for non-working weeks, communicate with clients well in advance, and arrange backup coverage when possible. Your longevity in this career depends on rest.
        </p>
      </QuickAnswer>

      <h2 id="you-deserve-time-off">Yes, You Can Take Vacation</h2>
      <p>
        Clients understand and respect boundaries around time off when those boundaries are communicated clearly and professionally. Most clients will wait for you, and very few will leave your practice because you took a planned vacation. The key is planning ahead and communicating proactively.
      </p>

      <h2 id="plan-ahead">Planning Your Time Off in Advance</h2>
      <p>
        Plan your vacation time at the beginning of the year as part of your <Link to="/resources/planning/concierge-nursing-q1-planning" className="text-gold hover:text-gold/80 underline">Q1 planning process</Link>. Block those dates before filling your schedule, give clients adequate advance notice, and plan your visit schedule around your time off so clients are recently seen before you leave and know when to expect you back.
      </p>

      <h2 id="client-communication">Communicating with Clients</h2>
      <p>
        Include your vacation policy in your service agreement so expectations are set from the beginning. When a specific vacation approaches, notify clients in person and follow up with a written reminder including your dates, emergency contacts, and return schedule. Be straightforward and professional — you are a business owner exercising good business practice.
      </p>

      <h2 id="coverage-options">Coverage Options While You Are Away</h2>
      <p>
        Depending on your clients' needs, options include colleague coverage from other concierge nurses, a <Link to="/resources/scaling/hire-first-subcontractor-nursing" className="text-gold hover:text-gold/80 underline">subcontractor</Link> maintaining visits, physician backup for clinical questions, or a simple pause in service for stable clients. Building coverage relationships before you need them is important.
      </p>

      <h2 id="financial-planning">Financial Planning for Time Off</h2>
      <p>
        Build vacation costs into your pricing by calculating your annual revenue goal based on working weeks, not 52 weeks. Your rates should support your income even during non-working periods. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> covers financial planning fundamentals including pricing for sustainability and time off.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do solo concierge nurses take vacations?</h3>
            <p>With advance planning. Give clients at least four to six weeks notice, arrange coverage if possible, adjust your schedule before and after to accommodate urgent needs, and include vacation provisions in your service agreements from the start.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I build vacation time into my pricing?</h3>
            <p>Yes. Factor in the number of weeks you want to take off each year when setting your annual revenue goals and rates. If you want four weeks off, your rates need to support 48 working weeks of income.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if a client has an emergency while I am on vacation?</h3>
            <p>Have an emergency protocol in place that directs clients to call 911 for true emergencies and provides a backup nurse contact for urgent but non-emergency needs. Communicate this protocol clearly before you leave.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many vacation weeks should a concierge nurse take per year?</h3>
            <p>This is personal, but most business advisors recommend at least two to four weeks of time off per year to prevent burnout and maintain quality of care. Build this into your business plan from the beginning.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

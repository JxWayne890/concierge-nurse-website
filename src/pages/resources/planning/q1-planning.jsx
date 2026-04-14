import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-q1-matters', text: 'Why Q1 Planning Matters' },
  { id: 'financial-review', text: 'Review Last Year\'s Financial Performance' },
  { id: 'set-goals', text: 'Setting Goals for the Year' },
  { id: 'marketing-plan', text: 'Q1 Marketing Plan' },
  { id: 'operations', text: 'Operational Updates and Improvements' },
  { id: 'ce-planning', text: 'Continuing Education and Certification Goals' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Year-End Review: How to Audit Your Business',
    description: 'The year-end review feeds directly into your Q1 plan.',
    link: '/resources/planning/concierge-nursing-year-end-review',
    category: 'Planning',
  },
  {
    title: 'How to Prepare for Tax Season',
    description: 'Q1 is tax prep time — get your finances in order.',
    link: '/resources/planning/concierge-nursing-tax-season',
    category: 'Planning',
  },
  {
    title: 'Best Accounting Software for Nurse-Owned Businesses',
    description: 'Tools to track your financial goals throughout Q1.',
    link: '/resources/best/accounting-software-nursing-business',
    category: 'Best Of',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I start Q1 planning for my concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally, start Q1 planning in December so you can hit the ground running on January 1. Review the previous year's performance, set new goals, and create an action plan before the new year begins."
      }
    },
    {
      "@type": "Question",
      "name": "What should a concierge nurse focus on in Q1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Q1 priorities typically include financial review and goal setting, updating your marketing strategy, refreshing your referral relationships, reviewing and updating service agreements, and planning continuing education for the year."
      }
    },
    {
      "@type": "Question",
      "name": "How do I set realistic business goals for the year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Base your goals on last year's data. Look at your revenue, client volume, and referral sources. Set goals that stretch you but are grounded in your actual business trajectory. Break annual goals into quarterly milestones."
      }
    },
    {
      "@type": "Question",
      "name": "Should I raise my rates in Q1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Q1 is a natural time to evaluate pricing. If your rates have not changed in a year or more, consider an adjustment. Review your costs, market rates, and the value you deliver before making changes."
      }
    }
  ]
};

export default function Q1Planning() {
  return (
    <ResourceLayout
      title="Q1 Planning for Your Concierge Nursing Business"
      description="Start the year strong with a strategic Q1 plan for your concierge nursing business — set goals, review finances, and position yourself for growth."
      canonical="/resources/planning/concierge-nursing-q1-planning"
      category="Planning"
      categorySlug="/resources/planning"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Q1 is the most strategic quarter for your concierge nursing business. It is when you review last year's performance, set goals for the new year, update your marketing plan, refresh referral relationships, and make operational improvements. How you plan in January and February sets the trajectory for the entire year.
        </p>
      </QuickAnswer>

      <h2 id="why-q1-matters">Why Q1 Planning Matters</h2>
      <p>
        Most concierge nurses start the year with good intentions but no structured plan. By March, they are back in reactive mode. A dedicated Q1 planning process ensures you are driving your business forward intentionally rather than just responding to whatever comes your way.
      </p>

      <h2 id="financial-review">Review Last Year's Financial Performance</h2>
      <p>
        Before you can plan forward, you need to understand where you have been. Review your total revenue, expenses, profit margins, and which services and referral sources performed best. Good <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting software</Link> makes this review straightforward. The <Link to="/toolkits" className="text-gold hover:text-gold/80 underline">Toolkits</Link> include financial review templates to guide this process.
      </p>

      <h2 id="set-goals">Setting Goals for the Year</h2>
      <p>
        Set specific goals for revenue, client volume, service development, and referral relationship growth. Base your goals on last year's data and your growth ambitions, and break them into quarterly milestones so you can track progress throughout the year.
      </p>

      <h2 id="marketing-plan">Q1 Marketing Plan</h2>
      <p>
        Q1 is an excellent time to refresh your marketing. Review what worked last year and double down on your most effective channels. Pick two or three marketing activities and execute them well rather than spreading yourself thin. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> includes marketing planning frameworks designed for concierge nurses.
      </p>

      <h2 id="operations">Operational Updates and Improvements</h2>
      <p>
        Q1 is the time to review and update the operational foundations of your practice — service agreements, insurance coverage, supplies, systems, and license renewal requirements. These annual updates keep your practice compliant and running smoothly.
      </p>

      <h2 id="ce-planning">Continuing Education and Certification Goals</h2>
      <p>
        Plan your continuing education for the year in Q1 rather than scrambling before deadlines. See our guide on <Link to="/resources/certifications/concierge-nurse-certifications" className="text-gold hover:text-gold/80 underline">certifications that help you stand out</Link> for strategic certification planning. A <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> can help you build a personalized Q1 plan tailored to your practice goals.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">When should I start Q1 planning for my concierge nursing business?</h3>
            <p>Ideally, start Q1 planning in December so you can hit the ground running on January 1. Review the previous year&apos;s performance, set new goals, and create an action plan before the new year begins.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should a concierge nurse focus on in Q1?</h3>
            <p>Q1 priorities typically include financial review and goal setting, updating your marketing strategy, refreshing your referral relationships, reviewing and updating service agreements, and planning continuing education for the year.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I set realistic business goals for the year?</h3>
            <p>Base your goals on last year&apos;s data. Look at your revenue, client volume, and referral sources. Set goals that stretch you but are grounded in your actual business trajectory. Break annual goals into quarterly milestones.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I raise my rates in Q1?</h3>
            <p>Q1 is a natural time to evaluate pricing. If your rates have not changed in a year or more, consider an adjustment. Review your costs, market rates, and the value you deliver before making changes.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-review', text: 'Why a Year-End Review Matters' },
  { id: 'financial-audit', text: 'Financial Audit' },
  { id: 'client-analysis', text: 'Client and Service Analysis' },
  { id: 'marketing-review', text: 'Marketing and Referral Review' },
  { id: 'operations', text: 'Operational Assessment' },
  { id: 'personal-reflection', text: 'Personal and Professional Reflection' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Q1 Planning for Your Concierge Nursing Business',
    description: 'Your year-end review feeds directly into Q1 planning.',
    link: '/resources/planning/concierge-nursing-q1-planning',
    category: 'Planning',
  },
  {
    title: 'Tax Season Preparation',
    description: 'Your financial audit helps prepare for tax season.',
    link: '/resources/planning/concierge-nursing-tax-season',
    category: 'Planning',
  },
  {
    title: 'Best Accounting Software for Nurse-Owned Businesses',
    description: 'Good software makes your year-end financial review easier.',
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
      "name": "When should I do my year-end business review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start in early December so you have time to reflect thoroughly and create plans for the new year. Many concierge nurses use the quieter days between Christmas and New Year's to finalize their review and set goals."
      }
    },
    {
      "@type": "Question",
      "name": "What should a year-end review include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A comprehensive year-end review covers financial performance, client and service analysis, marketing effectiveness, operational efficiency, professional development progress, and personal satisfaction. Each area informs your strategy for the coming year."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a year-end review take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan for four to six hours spread across several sessions. Trying to do everything in one sitting leads to superficial analysis. Break it into sections — financial review one day, client analysis another, and so on."
      }
    },
    {
      "@type": "Question",
      "name": "What if my year-end review shows my business is not where I want it to be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That is exactly what the review is for — honest assessment. Identify specifically what is not working, determine root causes, and create an actionable plan to address them in the new year. Every business has areas for improvement."
      }
    }
  ]
};

export default function YearEndReview() {
  return (
    <ResourceLayout
      title="Year-End Review: How to Audit Your Concierge Nursing Business"
      description="A step-by-step framework for conducting a year-end audit of your concierge nursing business — financial review, client analysis, goal assessment, and planning for next year."
      canonical="/resources/planning/concierge-nursing-year-end-review"
      category="Planning"
      categorySlug="/resources/planning"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A year-end review is a structured assessment of your concierge nursing business across five areas: financial performance, client and service analysis, marketing effectiveness, operations, and personal satisfaction. Done well, it gives you the data and clarity to make strategic decisions for the coming year. Spend four to six hours on this process — it is one of the highest-return activities for your business.
        </p>
      </QuickAnswer>

      <h2 id="why-review">Why a Year-End Review Matters</h2>
      <p>
        A year-end review gives you an honest, data-driven picture of where your business stands and what needs to change. Without it, you are operating on assumptions rather than evidence. You do not need a business degree — just your financial records, client data, and honest self-reflection.
      </p>

      <h2 id="financial-audit">Financial Audit</h2>
      <p>
        Start with the numbers. Review your total revenue, expenses by category, net profit, monthly trends, and revenue per client. Good <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting software</Link> makes this review straightforward. The <Link to="/toolkits" className="text-gold hover:text-gold/80 underline">Toolkits</Link> include financial review templates to structure your audit.
      </p>

      <h2 id="client-analysis">Client and Service Analysis</h2>
      <p>
        Review your client base, retention rates, most-requested services, and revenue per service type. This analysis reveals where your practice is strongest and where growth opportunities exist for the coming year.
      </p>

      <h2 id="marketing-review">Marketing and Referral Review</h2>
      <p>
        Assess how clients found you this year and which referral relationships drove the most business. Double down on what works and identify new referral sources to cultivate in the coming year.
      </p>

      <h2 id="operations">Operational Assessment</h2>
      <p>
        Evaluate whether your systems, tools, and agreements are still serving you. Operational improvements like better <Link to="/resources/best/scheduling-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">scheduling</Link> or <Link to="/resources/best/crm-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">CRM tools</Link> can save hours per week and improve client experience.
      </p>

      <h2 id="personal-reflection">Personal and Professional Reflection</h2>
      <p>
        Reflect honestly on your personal experience. Is the business supporting the lifestyle you wanted? Your year-end review feeds directly into your <Link to="/resources/planning/concierge-nursing-q1-planning" className="text-gold hover:text-gold/80 underline">Q1 plan</Link>. A <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> can help you turn your review insights into an actionable plan for the coming year.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">When should I do my year-end business review?</h3>
            <p>Start in early December so you have time to reflect thoroughly and create plans for the new year. Many concierge nurses use the quieter days between Christmas and New Year&apos;s to finalize their review and set goals.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should a year-end review include?</h3>
            <p>A comprehensive year-end review covers financial performance, client and service analysis, marketing effectiveness, operational efficiency, professional development progress, and personal satisfaction. Each area informs your strategy for the coming year.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does a year-end review take?</h3>
            <p>Plan for four to six hours spread across several sessions. Trying to do everything in one sitting leads to superficial analysis. Break it into sections — financial review one day, client analysis another, and so on.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if my year-end review shows my business is not where I want it to be?</h3>
            <p>That is exactly what the review is for — honest assessment. Identify specifically what is not working, determine root causes, and create an actionable plan to address them in the new year. Every business has areas for improvement.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

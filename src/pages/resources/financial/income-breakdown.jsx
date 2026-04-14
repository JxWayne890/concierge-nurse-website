import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do concierge nurses make per year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concierge nurse income varies widely based on location, specialty, experience, and business model. Income depends on your hourly or package rates, the number of clients you serve, and your operating expenses. Some concierge nurses work part-time while building their business, while others operate full-time practices with multiple revenue streams."
      }
    },
    {
      "@type": "Question",
      "name": "Do concierge nurses make more than hospital nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concierge nurses have the potential to earn more than hospital nurses, but income is not guaranteed. As a business owner, your income depends on your ability to attract and retain clients, set appropriate rates, and manage expenses. The earning ceiling is higher, but so is the responsibility for generating that income."
      }
    },
    {
      "@type": "Question",
      "name": "What are the biggest expenses for a concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The primary expenses include professional liability insurance, business insurance, marketing costs, supplies and equipment, continuing education, business software and tools, transportation costs, and professional association memberships. Overhead is generally lower than many other healthcare businesses since concierge nurses typically do not lease clinical space."
      }
    },
    {
      "@type": "Question",
      "name": "Can I start a concierge nursing business part-time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many concierge nurses start part-time while maintaining their hospital or clinical position. This approach reduces financial risk and allows you to build your client base before depending on the business for full-time income. The transition timeline varies, but many nurses spend six to eighteen months building before going full-time."
      }
    },
    {
      "@type": "Question",
      "name": "How do concierge nurses get paid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most concierge nurses are paid directly by clients via credit card, bank transfer, or check. Services are typically private-pay and not billed through insurance. Payment structures vary and can include hourly rates, flat-fee packages, retainer agreements, or a combination depending on the service and client relationship."
      }
    }
  ]
};

export default function IncomeBreakdown() {
  return (
    <ResourceLayout
      title="How Much Do Concierge Nurses Make? Income Breakdown"
      description="An honest look at concierge nurse income potential, the factors that influence earnings, typical expenses, and how to think realistically about building a profitable practice."
      canonical="/resources/financial/concierge-nurse-income"
      category="Financial"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'income-reality', text: 'The Income Reality of Concierge Nursing' },
        { id: 'factors-that-influence', text: 'Factors That Influence Your Income' },
        { id: 'revenue-before-expenses', text: 'Understanding Revenue Before Expenses' },
        { id: 'common-expenses', text: 'Common Business Expenses' },
        { id: 'calculating-take-home', text: 'Calculating Your Actual Take-Home Pay' },
        { id: 'increasing-income', text: 'Strategies for Increasing Your Income' },
        { id: 'income-timeline', text: 'Realistic Income Timeline' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        {
          title: 'How to Set Your Rates as a Concierge Nurse',
          description: 'Pricing frameworks that maximize your income while attracting ideal clients.',
          link: '/resources/financial/concierge-nurse-rates',
          category: 'Financial',
        },
        {
          title: 'Concierge Nursing Revenue Models',
          description: 'Compare hourly, package, and retainer models to find the best fit for your practice.',
          link: '/resources/financial/concierge-nursing-revenue-models',
          category: 'Financial',
        },
        {
          title: 'Financial Planning for Your First Year',
          description: 'Budget and financial strategies for your first year in concierge nursing.',
          link: '/resources/financial/concierge-nursing-first-year-finances',
          category: 'Financial',
        },
      ]}
    >
      <QuickAnswer>
        <p>
          Concierge nurse income varies significantly based on your location, specialty, pricing model, client volume, and business expenses. There is no single number because every practice is different. Your earning potential depends on your ability to attract clients, price your services well, and run your business efficiently.
        </p>
      </QuickAnswer>

      <h2 id="income-reality" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        The Income Reality of Concierge Nursing
      </h2>
      <p>
        Income in concierge nursing is not a salary handed to you — it is revenue you generate minus expenses. That distinction matters. Concierge nursing offers a higher earning ceiling than traditional employment, but that ceiling is yours to build toward through effective marketing, appropriate pricing, and strong business management.
      </p>
      <p>
        The concierge nurses who earn the most combine solid clinical skills with strong business acumen. Understanding how income works in this model is the first step toward building a practice that supports the lifestyle you want.
      </p>
      <p className="text-navy font-medium mt-4">Tracy walks you through realistic income planning inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="factors-that-influence" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Factors That Influence Your Income
      </h2>
      <p>
        Several key factors shape what you can earn: your geographic location and local market demand, the specialty and services you offer, your years of experience and credentials, which revenue model you choose (hourly, packages, or retainers), and how effectively you attract and retain clients. Each of these creates leverage points that either raise or lower your earning potential.
      </p>
      <p className="text-navy font-medium mt-4">Learn how to position these factors in your favor with a <Link to="/strategy" className="text-gold hover:underline">Strategy Session</Link>.</p>

      <h2 id="revenue-before-expenses" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Understanding Revenue Before Expenses
      </h2>
      <p>
        Revenue is the total amount your clients pay you — it is not your income. After accounting for business expenses and taxes, your take-home pay is a portion of your gross revenue. Not all working hours are billable; time spent on marketing, administration, and travel reduces the percentage of hours that generate direct income.
      </p>

      <h2 id="common-expenses" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Common Business Expenses
      </h2>
      <p>
        Typical expenses for a concierge nursing business include professional liability insurance, general business insurance, marketing, clinical supplies, transportation, continuing education, business software, and health insurance if you leave employer-sponsored coverage. The good news is that overhead is generally lower than most healthcare businesses since concierge nurses typically do not lease clinical space.
      </p>

      <h2 id="calculating-take-home" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Calculating Your Actual Take-Home Pay
      </h2>
      <p>
        Your take-home pay is gross revenue minus business expenses and taxes. As a self-employed individual, you are responsible for self-employment taxes in addition to income taxes. Working with a qualified accountant is essential for understanding your true numbers. Our <Link to="/resources/financial/concierge-nurse-tax-guide" className="text-gold hover:text-gold/80 underline">tax guide</Link> covers the basics.
      </p>
      <p className="text-navy font-medium mt-4">Get Tracy's financial framework and take-home pay worksheet in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="increasing-income" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Strategies for Increasing Your Income
      </h2>
      <p>
        The most effective income-growth levers include raising your rates as demand and experience grow, shifting from hourly billing to higher-value packages, building retainer relationships for recurring revenue, and adding specialized premium services. The right combination of strategies depends on your niche and client base.
      </p>
      <p className="text-navy font-medium mt-4">Tracy teaches her proven income-growth strategies inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="income-timeline" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Realistic Income Timeline
      </h2>
      <p>
        Building a concierge nursing income takes time. Most nurses do not replace their hospital income overnight. The early months are focused on setup and first client acquisition, with revenue building gradually as your referral network and reputation grow. By year two, most established concierge nurses see more predictable and growing income.
      </p>
      <p>
        For more on managing finances during startup, see our <Link to="/resources/financial/concierge-nursing-first-year-finances" className="text-gold hover:text-gold/80 underline">first-year financial planning</Link> guide. For personalized income strategy, explore our <Link to="/consulting" className="text-gold hover:text-gold/80 underline">consulting services</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much do concierge nurses make per year?</h3>
            <p>Income varies widely based on location, specialty, experience, and business model. Every practice is different, and earnings depend on your rates, client volume, and expenses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do concierge nurses make more than hospital nurses?</h3>
            <p>The earning ceiling is higher, but income is not guaranteed. As a business owner, what you earn depends on your ability to attract clients and manage your practice effectively.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What are the biggest expenses for a concierge nursing business?</h3>
            <p>Primary expenses include liability insurance, marketing, supplies, transportation, and continuing education. Overhead is generally lower than most healthcare businesses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I start a concierge nursing business part-time?</h3>
            <p>Yes. Many concierge nurses start part-time while keeping their hospital position, reducing financial risk while building their client base.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do concierge nurses get paid?</h3>
            <p>Most concierge nurses are paid directly by clients. Services are typically private-pay with payment structures including hourly rates, packages, or retainers.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

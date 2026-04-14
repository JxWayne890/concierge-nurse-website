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
      "name": "How much money do I need to start a concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Startup costs for a concierge nursing business are relatively low compared to most healthcare businesses. You will need funds for business registration, professional liability insurance, a website, basic marketing materials, clinical supplies, and business software. The exact amount depends on your location and scope of services, but the barrier to entry is lower than many expect."
      }
    },
    {
      "@type": "Question",
      "name": "Should I keep my hospital job while starting a concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most financial advisors and experienced concierge nurses recommend maintaining your current income while building your business on the side. This approach reduces financial pressure, gives you time to build a client base, and allows you to transition gradually. Many successful concierge nurses worked part-time in their hospital role for six to eighteen months before going full-time in their business."
      }
    },
    {
      "@type": "Question",
      "name": "When should I expect to start making money in my concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most concierge nurses begin generating some revenue within the first one to three months. However, this initial revenue often does not cover all business expenses. Reaching a point where your business revenue covers expenses and provides a reliable income typically takes six to twelve months of consistent effort."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate bank account for my concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Open a dedicated business checking account and keep all business income and expenses completely separate from your personal finances. This simplifies tax preparation, provides a clear picture of your business financial health, and is essential for maintaining the legal separation between you and your business entity."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I save before starting my concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aim to have three to six months of personal living expenses saved in addition to your startup costs. This emergency fund provides a financial cushion while your business revenue builds. If you plan to maintain part-time employment during the transition, you may need less savings since you will still have some income."
      }
    }
  ]
};

export default function FirstYearFinances() {
  return (
    <ResourceLayout
      title="Financial Planning for Your First Year in Concierge Nursing"
      description="A practical financial roadmap for your first year as a concierge nurse, covering startup costs, budgeting, cash flow management, and the financial milestones to target."
      canonical="/resources/financial/concierge-nursing-first-year-finances"
      category="Financial"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'financial-reality', text: 'The Financial Reality of Year One' },
        { id: 'startup-costs', text: 'Estimating Your Startup Costs' },
        { id: 'personal-financial-prep', text: 'Personal Financial Preparation' },
        { id: 'business-banking', text: 'Setting Up Business Banking and Bookkeeping' },
        { id: 'cash-flow-management', text: 'Managing Cash Flow in Year One' },
        { id: 'quarterly-milestones', text: 'Quarterly Financial Milestones' },
        { id: 'common-financial-mistakes', text: 'Common First-Year Financial Mistakes' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        {
          title: 'How Much Do Concierge Nurses Make?',
          description: 'Understand income potential and the factors that influence earnings.',
          link: '/resources/financial/concierge-nurse-income',
          category: 'Financial',
        },
        {
          title: 'Tax Guide for Concierge Nurse Business Owners',
          description: 'Essential tax planning for self-employed concierge nurses.',
          link: '/resources/financial/concierge-nurse-tax-guide',
          category: 'Financial',
        },
        {
          title: 'When Does a Concierge Nursing Business Become Profitable?',
          description: 'Understanding the timeline from startup costs to profitability.',
          link: '/resources/financial/concierge-nursing-profitability',
          category: 'Financial',
        },
      ]}
    >
      <QuickAnswer>
        <p>
          Your first year in concierge nursing is primarily an investment year. Plan for it by estimating startup costs, saving three to six months of living expenses, opening a dedicated business bank account, and expecting revenue to build gradually rather than all at once.
        </p>
      </QuickAnswer>

      <h2 id="financial-reality" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        The Financial Reality of Year One
      </h2>
      <p>
        Year one is not about maximizing profit — it is about building the foundation for a sustainable business. Revenue typically grows gradually as your marketing efforts gain traction and referral relationships develop. The good news is that concierge nursing has relatively low startup costs since you do not need clinical space, staff, or expensive equipment.
      </p>
      <p>
        The nurses who weather year one successfully are the ones who plan for a ramp-up period rather than expecting immediate full-time income.
      </p>
      <p className="text-navy font-medium mt-4">Tracy shares her first-year financial roadmap inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="startup-costs" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Estimating Your Startup Costs
      </h2>
      <p>
        Common startup expense categories include business entity formation, professional liability insurance, general business insurance, a professional website, marketing materials, clinical supplies, and business software. Every practice has different needs, and amounts vary by state and scope of services. The barrier to entry is lower than most healthcare businesses.
      </p>

      <h2 id="personal-financial-prep" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Personal Financial Preparation
      </h2>
      <p>
        Before spending on your business, secure your personal finances. Build an emergency fund of three to six months of living expenses, review and reduce personal expenses where possible, and research health insurance options if you plan to leave employer-sponsored coverage. Running out of money before the business becomes self-sustaining is the number one reason new businesses fail.
      </p>

      <h2 id="business-banking" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Setting Up Business Banking and Bookkeeping
      </h2>
      <p>
        Open a dedicated business checking account from day one and never mix personal and business funds. Set up accounting software to track every transaction as it happens. Consider working with a bookkeeper or accountant who understands self-employment taxes. Our <Link to="/resources/financial/concierge-nurse-tax-guide" className="text-gold hover:text-gold/80 underline">tax guide</Link> covers the tax implications.
      </p>

      <h2 id="cash-flow-management" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Managing Cash Flow in Year One
      </h2>
      <p>
        Cash flow management is critical in your first year. The fundamentals include collecting payment promptly, setting aside a portion of every payment for taxes, and keeping expenses lean by investing only in essentials that directly generate clients. Resist the urge to overspend before revenue justifies it.
      </p>
      <p className="text-navy font-medium mt-4">Get Tracy's cash flow management system and first-year budget template in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="quarterly-milestones" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Quarterly Financial Milestones
      </h2>
      <p>
        A healthy first year follows a general progression: foundation-building in quarter one (entity, insurance, website, first clients), growth in quarter two (increasing revenue, active referral relationships), refinement in quarter three (revenue covering expenses, pricing adjustments), and sustainability in quarter four (consistent income, year-end tax planning, goals set for year two). Individual timelines vary.
      </p>

      <h2 id="common-financial-mistakes" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Common First-Year Financial Mistakes
      </h2>
      <p>
        The most common pitfalls include not saving for self-employment taxes, underpricing services out of insecurity, overspending on non-essentials before landing clients, mixing personal and business finances, and failing to track expenses. Awareness of these mistakes helps you avoid them.
      </p>
      <p>
        For deeper guidance, explore our <Link to="/resources/financial/concierge-nurse-income" className="text-gold hover:text-gold/80 underline">income breakdown</Link> and <Link to="/resources/financial/concierge-nursing-profitability" className="text-gold hover:text-gold/80 underline">profitability guide</Link>. For personalized financial planning, explore our <Link to="/consulting" className="text-gold hover:text-gold/80 underline">consulting services</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much money do I need to start a concierge nursing business?</h3>
            <p>Startup costs are relatively low compared to most healthcare businesses. The exact amount depends on your location and services, but the barrier to entry is lower than many expect.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I keep my hospital job while starting a concierge nursing business?</h3>
            <p>Most experienced concierge nurses recommend building your business on the side first. This reduces financial pressure and allows you to transition gradually.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">When should I expect to start making money in my concierge nursing business?</h3>
            <p>Most nurses generate some revenue within one to three months, but reaching reliable income that covers expenses typically takes six to twelve months of consistent effort.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a separate bank account for my concierge nursing business?</h3>
            <p>Yes. Keep all business income and expenses completely separate from personal finances for tax, legal, and financial clarity.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much should I save before starting my concierge nursing business?</h3>
            <p>Aim for three to six months of living expenses plus your startup costs. If maintaining part-time employment, you may need less.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

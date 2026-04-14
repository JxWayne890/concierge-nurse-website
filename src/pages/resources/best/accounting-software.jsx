import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-you-need-it', text: "Why You Need Accounting Software" },
  { id: 'features', text: "Features to Look For" },
  { id: 'solo-practice', text: "Software for Solo Practices" },
  { id: 'growing-practice', text: "Software for Growing Practices" },
  { id: 'bookkeeper', text: "When to Hire a Bookkeeper" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Tax Season Preparation",
    description: "Good accounting software makes tax time straightforward.",
    link: '/resources/planning/concierge-nursing-tax-season',
    category: 'Planning',
  },
  {
    title: "Best CRM Software for Concierge Nurses",
    description: "CRM handles clients while accounting handles finances.",
    link: '/resources/best/crm-software-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: "Year-End Review",
    description: "Your accounting data powers your year-end business audit.",
    link: '/resources/planning/concierge-nursing-year-end-review',
    category: 'Planning',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need accounting software for my concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Even a solo practice needs to track income, expenses, mileage, and prepare for taxes. Spreadsheets work temporarily, but dedicated accounting software saves time, reduces errors, and makes tax preparation significantly easier."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most important feature in accounting software for nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Expense tracking and categorization. As a self-employed nurse, accurately tracking and categorizing business expenses is critical for tax deductions and financial clarity. Invoice creation and mileage tracking are close seconds."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use free accounting software for my nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free tools exist and can work for very simple practices. However, most concierge nurses quickly outgrow free options and benefit from paid software with better reporting, invoicing, and tax preparation features. The cost is a tax-deductible business expense."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use the same software my accountant recommends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally, yes. If you plan to work with an accountant or bookkeeper, ask which software they prefer before choosing. Many accountants have preferred platforms that streamline collaboration and reduce your professional service costs."
      }
    }
  ]
};

export default function AccountingSoftware() {
  return (
    <ResourceLayout
      title={"Best Accounting Software for Nurse-Owned Businesses"}
      description={"Compare accounting software options for your concierge nursing business — features to look for, common tools, and how to choose the right one for your practice size."}
      canonical="/resources/best/accounting-software-nursing-business"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Every concierge nursing business needs accounting software to track income, categorize expenses, generate invoices, and prepare for taxes. For solo practitioners, look for simple, affordable tools with strong expense tracking and invoicing. For growing practices with employees or subcontractors, choose software that handles payroll and more complex reporting. The right choice depends on your practice size, budget, and whether you work with an accountant.
        </p>
      </QuickAnswer>

      <h2 id="why-you-need-it">Why You Need Accounting Software</h2>
      <p>
        Accounting software automates income and expense tracking, invoicing, mileage tracking, and <Link to="/resources/planning/concierge-nursing-tax-season" className="text-gold hover:text-gold/80 underline">tax preparation</Link>. It gives you a clear picture of your business health at any time — what you are earning, where money is going, and whether you are on track for your goals.
      </p>

      <h2 id="features">Features to Look For</h2>
      <p>
        Prioritize income and expense tracking with bank feed integration, invoicing with online payment options, mileage tracking, tax preparation reports, receipt capture, and financial reporting. The right features depend on your practice size and whether you work with an accountant.
      </p>

      <h2 id="solo-practice">Software for Solo Practices</h2>
      <p>
        Solo concierge nurses need simple, affordable tools designed for freelancers and sole proprietors. Start simple and upgrade as your practice grows — do not over-invest in features you will not use.
      </p>

      <h2 id="growing-practice">Software for Growing Practices</h2>
      <p>
        If you are <Link to="/resources/scaling/solo-nurse-to-nursing-agency" className="text-gold hover:text-gold/80 underline">scaling to a multi-nurse practice</Link>, you may need payroll processing, contractor payment tracking, client-based profitability reporting, and multi-user access.
      </p>

      <h2 id="bookkeeper">When to Hire a Bookkeeper</h2>
      <p>
        Consider hiring a bookkeeper when your records take too long to manage or your tax situation becomes complex. A bookkeeper handles day-to-day transactions, while an accountant provides tax strategy and financial planning. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> covers financial management foundations for your nursing business.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need accounting software for my concierge nursing business?</h3>
            <p>Yes. Even a solo practice needs to track income, expenses, mileage, and prepare for taxes. Spreadsheets work temporarily, but dedicated accounting software saves time, reduces errors, and makes tax preparation significantly easier.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the most important feature in accounting software for nurses?</h3>
            <p>Expense tracking and categorization. As a self-employed nurse, accurately tracking and categorizing business expenses is critical for tax deductions and financial clarity. Invoice creation and mileage tracking are close seconds.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use free accounting software for my nursing business?</h3>
            <p>Free tools exist and can work for very simple practices. However, most concierge nurses quickly outgrow free options and benefit from paid software with better reporting, invoicing, and tax preparation features. The cost is a tax-deductible business expense.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I use the same software my accountant recommends?</h3>
            <p>Ideally, yes. If you plan to work with an accountant or bookkeeper, ask which software they prefer before choosing. Many accountants have preferred platforms that streamline collaboration and reduce your professional service costs.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

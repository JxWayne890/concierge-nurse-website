import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'self-employment', text: 'Understanding Self-Employment Taxes' },
  { id: 'quarterly-estimates', text: 'Quarterly Estimated Tax Payments' },
  { id: 'common-deductions', text: 'Common Tax Deductions for Concierge Nurses' },
  { id: 'record-keeping', text: 'Record-Keeping Best Practices' },
  { id: 'hiring-professional', text: 'Working with a Tax Professional' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Best Accounting Software for Nurse-Owned Businesses',
    description: 'Track income and expenses throughout the year for easier tax prep.',
    link: '/resources/best/accounting-software-nursing-business',
    category: 'Best Of',
  },
  {
    title: 'Q1 Planning for Your Concierge Nursing Business',
    description: 'Tax preparation fits naturally into your Q1 planning process.',
    link: '/resources/planning/concierge-nursing-q1-planning',
    category: 'Planning',
  },
  {
    title: 'Year-End Review: How to Audit Your Business',
    description: 'A year-end review simplifies tax preparation significantly.',
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
      "name": "What taxes do concierge nurses pay as self-employed business owners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Self-employed concierge nurses pay federal income tax, self-employment tax (Social Security and Medicare), and state income tax (in most states). You may also owe local business taxes depending on your jurisdiction."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to make quarterly estimated tax payments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you expect to owe more than $1,000 in federal taxes for the year, the IRS generally requires quarterly estimated payments. Missing these payments can result in penalties. Work with a tax professional to calculate your estimated payments."
      }
    },
    {
      "@type": "Question",
      "name": "What can concierge nurses deduct on their taxes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common deductions include business-related mileage, medical supplies, liability insurance premiums, continuing education costs, home office expenses, marketing costs, professional memberships, and business software subscriptions. Keep receipts and records for all deductions."
      }
    },
    {
      "@type": "Question",
      "name": "Should I hire a CPA or do my own taxes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most concierge nurse business owners benefit from working with a CPA or tax professional who understands self-employment and small business taxation. The cost of professional tax preparation is itself a business deduction and often saves money through properly claimed deductions."
      }
    }
  ]
};

export default function TaxSeason() {
  return (
    <ResourceLayout
      title="How to Prepare Your Concierge Nursing Business for Tax Season"
      description="A practical guide to organizing your concierge nursing business finances for tax season — deductions, quarterly estimates, and working with a tax professional."
      canonical="/resources/planning/concierge-nursing-tax-season"
      category="Planning"
      categorySlug="/resources/planning"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Tax season does not have to be stressful if you prepare throughout the year. As a self-employed concierge nurse, you are responsible for tracking income and expenses, making quarterly estimated tax payments, claiming legitimate business deductions, and filing your annual return. The key is consistent record-keeping and working with a tax professional who understands self-employment taxation.
        </p>
      </QuickAnswer>

      <h2 id="self-employment">Understanding Self-Employment Taxes</h2>
      <p>
        As a self-employed concierge nurse, you pay both the employer and employee portions of Social Security and Medicare taxes in addition to your regular income taxes. This self-employment tax burden surprises many first-time business owners. Planning for it throughout the year prevents a painful surprise in April.
      </p>

      <h2 id="quarterly-estimates">Quarterly Estimated Tax Payments</h2>
      <p>
        Self-employed concierge nurses must generally pay taxes quarterly rather than having them withheld from a paycheck. Setting up a separate savings account for taxes and setting aside a percentage of each payment is essential. A tax professional can help you calculate the right amount for your situation.
      </p>

      <h2 id="common-deductions">Common Tax Deductions for Concierge Nurses</h2>
      <p>
        Concierge nursing businesses have many legitimate deductions including business mileage, medical supplies, liability insurance, continuing education, home office expenses, software subscriptions, and marketing costs. Use <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting software</Link> to categorize expenses throughout the year. A tax professional familiar with self-employed healthcare providers can ensure you claim everything you are entitled to.
      </p>

      <h2 id="record-keeping">Record-Keeping Best Practices</h2>
      <p>
        Good record-keeping makes tax season manageable. The essentials include keeping business and personal finances separate, recording income and expenses consistently, saving receipts digitally, and tracking mileage. These habits are simple but they make all the difference at tax time.
      </p>

      <h2 id="hiring-professional">Working with a Tax Professional</h2>
      <p>
        Working with a CPA or enrolled agent who understands self-employment taxation is a worthwhile investment for most concierge nurse business owners. The cost is itself a business deduction, and a good professional often saves you more than they charge through properly claimed deductions. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> covers financial foundations for your nursing business, including tax planning basics.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What taxes do concierge nurses pay as self-employed business owners?</h3>
            <p>Self-employed concierge nurses pay federal income tax, self-employment tax (Social Security and Medicare), and state income tax (in most states). You may also owe local business taxes depending on your jurisdiction.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need to make quarterly estimated tax payments?</h3>
            <p>If you expect to owe more than $1,000 in federal taxes for the year, the IRS generally requires quarterly estimated payments. Missing these payments can result in penalties. Work with a tax professional to calculate your estimated payments.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What can concierge nurses deduct on their taxes?</h3>
            <p>Common deductions include business-related mileage, medical supplies, liability insurance premiums, continuing education costs, home office expenses, marketing costs, professional memberships, and business software subscriptions. Keep receipts and records for all deductions.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I hire a CPA or do my own taxes?</h3>
            <p>Most concierge nurse business owners benefit from working with a CPA or tax professional who understands self-employment and small business taxation. The cost of professional tax preparation is itself a business deduction and often saves money through properly claimed deductions.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

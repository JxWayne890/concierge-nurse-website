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
      "name": "What taxes do concierge nurses have to pay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As a self-employed concierge nurse, you are responsible for federal income tax, state income tax if applicable, and self-employment tax which covers Social Security and Medicare. Self-employment tax is approximately 15.3 percent of your net business income. You are also responsible for making quarterly estimated tax payments rather than having taxes withheld from a paycheck."
      }
    },
    {
      "@type": "Question",
      "name": "What can concierge nurses deduct on their taxes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common deductions include professional liability insurance, business insurance, marketing expenses, clinical supplies and equipment, vehicle mileage for client visits, continuing education and certifications, business software subscriptions, home office expenses, professional association dues, and health insurance premiums. Keep detailed records and receipts for all business expenses."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to make quarterly estimated tax payments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The IRS requires self-employed individuals to make quarterly estimated tax payments if they expect to owe more than one thousand dollars in taxes for the year. Quarterly payments are due in April, June, September, and January. Failing to make these payments can result in penalties and interest."
      }
    },
    {
      "@type": "Question",
      "name": "Should I hire an accountant for my concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A qualified accountant who understands self-employment and small business taxation can help you maximize your deductions, structure your business tax-efficiently, make accurate quarterly estimated payments, and avoid costly mistakes. The money you save in legitimate deductions and penalty avoidance typically far exceeds the accountant's fees."
      }
    },
    {
      "@type": "Question",
      "name": "What business structure is best for taxes as a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most concierge nurses start as a single-member LLC, which provides liability protection while keeping tax filing simple. As your income grows, an S-corporation election may reduce your self-employment tax burden. Consult with a tax professional to determine the best structure for your specific situation and income level."
      }
    }
  ]
};

export default function TaxGuide() {
  return (
    <ResourceLayout
      title="Tax Guide for Concierge Nurse Business Owners"
      description="Essential tax information for self-employed concierge nurses covering self-employment tax, quarterly payments, common deductions, business structure, and tax planning strategies."
      canonical="/resources/financial/concierge-nurse-tax-guide"
      category="Financial"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'tax-overview', text: 'Tax Overview for Self-Employed Nurses' },
        { id: 'self-employment-tax', text: 'Understanding Self-Employment Tax' },
        { id: 'quarterly-payments', text: 'Quarterly Estimated Tax Payments' },
        { id: 'common-deductions', text: 'Common Tax Deductions for Concierge Nurses' },
        { id: 'business-structure', text: 'Choosing the Right Business Structure' },
        { id: 'record-keeping', text: 'Record Keeping Best Practices' },
        { id: 'working-with-professionals', text: 'Working with Tax Professionals' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        {
          title: 'Financial Planning for Your First Year',
          description: 'Budget and financial strategies for your first year in concierge nursing.',
          link: '/resources/financial/concierge-nursing-first-year-finances',
          category: 'Financial',
        },
        {
          title: 'How Much Do Concierge Nurses Make?',
          description: 'Understand income potential including the impact of taxes on take-home pay.',
          link: '/resources/financial/concierge-nurse-income',
          category: 'Financial',
        },
        {
          title: 'When Does a Concierge Nursing Business Become Profitable?',
          description: 'Factor taxes into your profitability calculations.',
          link: '/resources/financial/concierge-nursing-profitability',
          category: 'Financial',
        },
      ]}
    >
      <QuickAnswer>
        <p>
          As a self-employed concierge nurse, you are responsible for federal income tax, state income tax, and self-employment tax. You must make quarterly estimated tax payments and should track all business expenses for deductions. Working with a qualified accountant is essential.
        </p>
      </QuickAnswer>

      <p className="text-sm italic text-slate mt-4 mb-8">
        Disclaimer: This guide provides general tax information for educational purposes. It is not tax advice. Tax laws change frequently and vary by state. Consult a qualified tax professional for guidance specific to your situation.
      </p>

      <h2 id="tax-overview" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Tax Overview for Self-Employed Nurses
      </h2>
      <p>
        Moving from hospital employment to self-employment changes your tax situation fundamentally. No one is withholding taxes for you, and you are now responsible for the full amount of Social Security and Medicare taxes. The three main categories to understand are federal income tax, self-employment tax, and state income tax. While your total obligation may be higher than as an employee, you gain access to many legitimate business deductions.
      </p>

      <h2 id="self-employment-tax" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Understanding Self-Employment Tax
      </h2>
      <p>
        Self-employment tax covers Social Security and Medicare — the same FICA taxes that were previously split between you and your employer. As a self-employed individual, you pay both halves. This is in addition to your regular income tax, and many new business owners underestimate their total obligation because they overlook this layer.
      </p>

      <h2 id="quarterly-payments" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Quarterly Estimated Tax Payments
      </h2>
      <p>
        The IRS requires self-employed individuals to make estimated tax payments four times per year. These cover both income tax and self-employment tax. Setting aside a portion of every client payment into a separate tax savings account ensures you have funds available when payments are due. Your accountant can help you determine the right calculation method.
      </p>
      <p className="text-navy font-medium mt-4">Tracy covers tax planning essentials and recommended accountant criteria in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="common-deductions" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Common Tax Deductions for Concierge Nurses
      </h2>
      <p>
        Business deductions reduce your taxable income. Common deductions for concierge nurses include professional liability insurance, business insurance, vehicle mileage, clinical supplies, marketing expenses, continuing education, business software, home office expenses, health insurance premiums, professional memberships, and phone and internet costs. Tracking every expense from day one is essential — every legitimate deduction reduces your tax bill.
      </p>

      <h2 id="business-structure" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Choosing the Right Business Structure
      </h2>
      <p>
        Your business structure affects how you are taxed. Most concierge nurses start as a single-member LLC for simplicity and liability protection. As income grows, an S-corporation election may reduce self-employment tax obligations. The right structure depends on your income level and situation — a decision best made with a qualified tax professional.
      </p>

      <h2 id="record-keeping" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Record Keeping Best Practices
      </h2>
      <p>
        Good record keeping is the foundation of tax efficiency. Digitize receipts immediately, track mileage daily, reconcile accounts monthly, retain records for at least seven years, and keep business and personal expenses completely separate. These habits protect you in an audit and ensure you capture every deduction.
      </p>

      <h2 id="working-with-professionals" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Working with Tax Professionals
      </h2>
      <p>
        Hiring a CPA or enrolled agent experienced with self-employed healthcare professionals is one of the best investments for your business. Engage proactively — not just at tax time — and schedule quarterly check-ins to keep your estimated payments on track.
      </p>
      <p>
        For more on your business finances, see our <Link to="/resources/financial/concierge-nursing-first-year-finances" className="text-gold hover:text-gold/80 underline">first-year financial planning</Link> and <Link to="/resources/financial/concierge-nursing-profitability" className="text-gold hover:text-gold/80 underline">profitability</Link> guides. For personalized guidance, explore our <Link to="/consulting" className="text-gold hover:text-gold/80 underline">consulting services</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What taxes do concierge nurses have to pay?</h3>
            <p>Federal income tax, state income tax (if applicable), and self-employment tax covering Social Security and Medicare. You must make quarterly estimated payments.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What can concierge nurses deduct on their taxes?</h3>
            <p>Common deductions include insurance, mileage, supplies, marketing, continuing education, software, home office expenses, and health insurance premiums.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need to make quarterly estimated tax payments?</h3>
            <p>Yes, if you expect to owe more than one thousand dollars in taxes for the year. Payments are due in April, June, September, and January.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I hire an accountant for my concierge nursing business?</h3>
            <p>Yes. A qualified accountant saves you money through proper deductions and structure, and helps you avoid costly mistakes.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What business structure is best for taxes as a concierge nurse?</h3>
            <p>Most start as a single-member LLC. As income grows, an S-corp election may help. Consult a tax professional for your specific situation.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

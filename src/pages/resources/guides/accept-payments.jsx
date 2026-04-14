import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'payment-methods', text: 'Payment Methods for Concierge Nurses' },
  { id: 'payment-processors', text: 'Payment Processing Options' },
  { id: 'invoicing', text: 'Setting Up Professional Invoicing' },
  { id: 'when-to-collect', text: 'When to Collect Payment' },
  { id: 'superbills', text: 'Providing Superbills for Insurance Reimbursement' },
  { id: 'tax-considerations', text: 'Tax Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Open a Business Bank Account for Your Nursing Practice',
    description: 'Set up the bank account your payment processor deposits into.',
    link: '/resources/guides/nursing-business-bank-account',
    category: 'Guides',
  },
  {
    title: 'How to Create a Cancellation and No-Show Policy',
    description: 'Protect your revenue with clear payment and cancellation policies.',
    link: '/resources/guides/concierge-nurse-cancellation-policy',
    category: 'Guides',
  },
  {
    title: 'Concierge Nurse Pricing Guide',
    description: 'Learn how to price your concierge nursing services.',
    link: '/resources/concierge-nurse-pricing-guide',
    category: 'Planning',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I accept cash payments as a concierge nurse?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can accept cash, but always provide a receipt and record the transaction immediately. Cash payments are harder to track for tax purposes and do not create an automatic paper trail. Many concierge nurses prefer electronic payments for cleaner record-keeping." }
    },
    {
      "@type": "Question",
      "name": "What percentage do payment processors charge?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most payment processors charge between 2.5% and 3.5% per transaction for credit and debit card payments. Some processors offer lower rates for higher volumes. ACH bank transfers are typically cheaper, often under 1% per transaction." }
    },
    {
      "@type": "Question",
      "name": "Can I require prepayment before a visit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, and many concierge nurses do. Requiring payment or a deposit before the visit reduces no-shows and ensures you are compensated for your time. Include your prepayment policy in your client service agreement." }
    },
    {
      "@type": "Question",
      "name": "Do I need to provide superbills to clients?",
      "acceptedAnswer": { "@type": "Answer", "text": "You are not required to provide superbills, but doing so is a valuable service for clients who want to seek reimbursement from their insurance company. A superbill includes procedure codes, diagnosis codes, your NPI number, and the amount charged." }
    },
    {
      "@type": "Question",
      "name": "Should I accept insurance as a concierge nurse?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most concierge nurses operate on a cash-pay or private-pay model and do not contract with insurance companies. This simplifies your business operations and allows you to set your own rates. However, providing superbills lets clients seek out-of-network reimbursement on their own." }
    }
  ]
};

export default function AcceptPayments() {
  return (
    <ResourceLayout
      title="How to Accept Payments as a Concierge Nurse"
      description="A complete guide to setting up payment processing for your concierge nursing business, including payment methods, invoicing, superbills, prepayment policies, and tax tracking."
      canonical="/resources/guides/concierge-nurse-accept-payments"
      category="Guides"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Most concierge nurses accept payments through credit/debit cards, digital wallets, and occasionally checks or cash. Setting up a professional payment system that deposits into your <Link to="/resources/guides/nursing-business-bank-account" className="text-gold hover:text-gold/80">business bank account</Link> is essential for clean financial records and a professional client experience.
        </p>
      </QuickAnswer>

      <p>
        Getting paid professionally is a critical part of running your concierge nursing business. The right payment infrastructure makes it easy for clients to pay, keeps your records clean for tax purposes, and reinforces your professional image.
      </p>

      <h2 id="payment-methods">Payment Methods for Concierge Nurses</h2>
      <p>
        Offering multiple payment options reduces friction. Common methods include credit and debit cards, ACH bank transfers, digital wallets like Zelle and Venmo for Business, checks, and cash. Each has different processing fees and record-keeping implications that factor into your business decisions.
      </p>

      <h2 id="payment-processors">Payment Processing Options</h2>
      <p>
        Several payment processors work well for concierge nursing — each with different strengths for in-person payments, online invoicing, recurring billing, and integration with business software. Choosing the right one depends on how you deliver and bill for services. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include specific processor comparisons and setup guidance.
      </p>

      <h2 id="invoicing">Setting Up Professional Invoicing</h2>
      <p>
        Professional invoices reinforce credibility and create clear financial records. Every invoice should include your business information, client details, itemized services, dates, amounts, and payment instructions. The specifics of invoice design and automation are covered in our toolkits.
      </p>

      <h2 id="when-to-collect">When to Collect Payment</h2>
      <p>
        Establishing clear payment timing — whether prepayment, at time of service, card on file, or net terms — prevents awkward conversations and protects your income. Many concierge nurses find prepayment dramatically reduces no-shows.
      </p>

      <h2 id="superbills">Providing Superbills for Insurance Reimbursement</h2>
      <p>
        Even as a private-pay provider, offering superbills is a valuable client service. A superbill allows clients to seek out-of-network reimbursement from their insurance. It requires specific codes and provider information that you will learn to include as part of your business setup.
      </p>

      <h2 id="tax-considerations">Tax Considerations</h2>
      <p>
        As a self-employed business owner, you need to plan for self-employment taxes, quarterly estimated payments, and proper expense tracking from day one. Setting aside a percentage of every payment for taxes is essential to avoid surprises.
      </p>

      <p>
        Professional payment systems are a key piece of your business infrastructure. For comprehensive guidance on payments, pricing, and financial management, explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or connect through <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I accept cash payments as a concierge nurse?</h3>
            <p>You can, but always provide a receipt and record it immediately. Electronic payments create cleaner records.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What percentage do payment processors charge?</h3>
            <p>Most charge 2.5% to 3.5% for cards. ACH transfers are typically under 1%.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I require prepayment before a visit?</h3>
            <p>Yes. Many concierge nurses require prepayment or a deposit to reduce no-shows.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need to provide superbills to clients?</h3>
            <p>Not required, but it is a valuable service for clients seeking out-of-network insurance reimbursement.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I accept insurance as a concierge nurse?</h3>
            <p>Most concierge nurses operate private-pay for simplicity. Superbills let clients pursue reimbursement independently.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

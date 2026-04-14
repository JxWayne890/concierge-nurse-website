import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-separate-account', text: 'Why You Need a Separate Business Account' },
  { id: 'what-to-look-for', text: 'What to Look for in a Business Bank' },
  { id: 'documents-you-need', text: 'Documents You Need to Open Your Account' },
  { id: 'step-by-step', text: 'Step-by-Step Process' },
  { id: 'online-vs-local', text: 'Online Banks vs. Local Banks' },
  { id: 'setting-up-your-system', text: 'Setting Up Your Financial System' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Get a Business EIN for Your Nursing Practice',
    description: 'You need an EIN before you can open a business bank account.',
    link: '/resources/guides/nursing-business-ein',
    category: 'Guides',
  },
  {
    title: 'How to Accept Payments as a Concierge Nurse',
    description: 'Set up payment processing that connects to your business account.',
    link: '/resources/guides/concierge-nurse-accept-payments',
    category: 'Guides',
  },
  {
    title: 'Do I Need an LLC or PLLC for My Concierge Nursing Business?',
    description: 'Your business entity formation documents are needed to open your account.',
    link: '/resources/legal/nursing-business-llc-vs-pllc',
    category: 'Legal & Compliance',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I use my personal bank account for my concierge nursing business?",
      "acceptedAnswer": { "@type": "Answer", "text": "While technically possible for sole proprietors, it is strongly discouraged. Commingling personal and business funds can pierce the corporate veil of your LLC, eliminating your liability protection. It also makes tax preparation significantly more difficult and can trigger IRS scrutiny." }
    },
    {
      "@type": "Question",
      "name": "What documents do I need to open a business bank account?",
      "acceptedAnswer": { "@type": "Answer", "text": "You typically need your EIN confirmation letter (CP 575), Articles of Organization or Certificate of Formation, Operating Agreement, a valid government-issued photo ID, and your business address. Some banks also require a business license." }
    },
    {
      "@type": "Question",
      "name": "Do I need a business credit card too?",
      "acceptedAnswer": { "@type": "Answer", "text": "A business credit card is not required but is recommended. It helps build business credit, keeps expenses separate, and provides rewards or cash back on business purchases. Many banks offer a business credit card when you open your checking account." }
    },
    {
      "@type": "Question",
      "name": "How much money do I need to open a business bank account?",
      "acceptedAnswer": { "@type": "Answer", "text": "Minimum opening deposits vary by bank, ranging from $0 to $100 for most business checking accounts. Some banks also require a minimum balance to avoid monthly fees, which typically ranges from $500 to $1,500." }
    },
    {
      "@type": "Question",
      "name": "Should I choose an online bank or a local bank for my nursing business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Both have advantages. Online banks often offer lower fees and higher interest rates. Local banks provide in-person service, cash deposit capabilities, and relationship-based lending. Many concierge nurses use both — a local bank for day-to-day operations and an online savings account for reserves." }
    }
  ]
};

export default function BankAccount() {
  return (
    <ResourceLayout
      title="How to Open a Business Bank Account for Your Nursing Practice"
      description="A step-by-step guide to opening a business bank account for your concierge nursing practice, including required documents, what to look for in a bank, and how to set up your financial system."
      canonical="/resources/guides/nursing-business-bank-account"
      category="Guides"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A dedicated business bank account is essential for maintaining your LLC liability protection and keeping clean financial records. You will need your EIN, formation documents, and a photo ID to open one. Most accounts can be set up in a single bank visit.
        </p>
      </QuickAnswer>

      <p>
        Opening a dedicated business bank account is one of the most important foundational steps for your concierge nursing practice. It is not just organizational — it is a legal necessity if you want to maintain the liability protection your LLC or PLLC provides.
      </p>

      <h2 id="why-separate-account">Why You Need a Separate Business Account</h2>
      <p>
        Mixing personal and business funds — called commingling — can "pierce the corporate veil," allowing a court to disregard your LLC protection. A dedicated business account also simplifies tax preparation, reinforces your professional image, and provides audit protection with clean, separated records.
      </p>

      <h2 id="what-to-look-for">What to Look for in a Business Bank</h2>
      <p>
        Evaluate banks based on monthly fees, transaction limits, online and mobile banking capabilities, integration with accounting software, and business credit card availability. The right bank should match the needs of a mobile concierge nursing practice.
      </p>

      <h2 id="documents-you-need">Documents You Need to Open Your Account</h2>
      <p>
        Most banks require your <Link to="/resources/guides/nursing-business-ein" className="text-gold hover:text-gold/80">EIN confirmation letter</Link> (CP 575), Articles of Organization or Certificate of Formation, Operating Agreement, a government-issued photo ID, and sometimes a business license. Call ahead to confirm your bank's specific requirements.
      </p>

      <h2 id="step-by-step">Step-by-Step Process</h2>
      <p>
        The general process involves completing your LLC formation and EIN first, researching and comparing banks, confirming document requirements, visiting the bank with all materials, and then setting up online banking and payment processing connections. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> provide a detailed checklist for each step.
      </p>

      <h2 id="online-vs-local">Online Banks vs. Local Banks</h2>
      <p>
        Online banks typically offer lower fees and higher savings rates. Local banks provide in-person support and cash deposit capabilities. Many concierge nurses use a hybrid approach — a local checking account for daily operations and an online savings account for tax reserves.
      </p>

      <h2 id="setting-up-your-system">Setting Up Your Financial System</h2>
      <p>
        Good financial habits from day one are essential: separating tax savings, paying yourself consistently, never mixing personal and business expenses, and reconciling monthly. The specifics of how to structure your financial system are covered in depth in our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link>.
      </p>

      <p>
        For a comprehensive view of launching your concierge nursing business — including banking, payments, and financial setup — explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or connect through <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use my personal bank account for my concierge nursing business?</h3>
            <p>Strongly discouraged. Commingling funds can eliminate your LLC liability protection and creates tax complications.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What documents do I need to open a business bank account?</h3>
            <p>Typically your EIN letter, Articles of Organization, Operating Agreement, and a photo ID. Call your bank to confirm.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a business credit card too?</h3>
            <p>Not required, but recommended for building business credit and keeping expenses separated.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much money do I need to open a business bank account?</h3>
            <p>Opening deposits range from $0 to $100. Some accounts require minimum balances of $500 to $1,500 to avoid fees.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I choose an online bank or a local bank?</h3>
            <p>Both have advantages. Many concierge nurses use a local bank for operations and an online account for savings.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

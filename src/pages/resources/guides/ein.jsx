import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-ein', text: 'What Is an EIN?' },
  { id: 'why-you-need-ein', text: 'Why Your Nursing Business Needs an EIN' },
  { id: 'how-to-apply', text: 'How to Apply for an EIN' },
  { id: 'what-you-need', text: 'What You Need Before Applying' },
  { id: 'after-you-receive-ein', text: 'After You Receive Your EIN' },
  { id: 'common-mistakes', text: 'Common Mistakes to Avoid' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Get Your NPI Number as a Concierge Nurse',
    description: 'Step-by-step guide to obtaining your National Provider Identifier.',
    link: '/resources/guides/concierge-nurse-npi-number',
    category: 'Guides',
  },
  {
    title: 'How to Open a Business Bank Account for Your Nursing Practice',
    description: 'Set up your business banking with the right documentation.',
    link: '/resources/guides/nursing-business-bank-account',
    category: 'Guides',
  },
  {
    title: 'Do I Need an LLC or PLLC for My Concierge Nursing Business?',
    description: 'Understand which business entity structure is right for your state.',
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
      "name": "Is it free to get an EIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Applying for an EIN through the IRS website (irs.gov) is completely free. Avoid third-party websites that charge fees for this service."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use my Social Security Number instead of an EIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sole proprietors without employees can technically use their SSN for tax purposes. However, an EIN is strongly recommended because it protects your SSN from exposure on business documents, is required to open a business bank account, and is necessary if you ever hire employees."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to form my LLC before getting an EIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If you are forming an LLC or PLLC, you should complete the entity formation with your state first. The IRS will ask for your legal business name and entity type during the EIN application, which must match your formation documents."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get an EIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you apply online, you receive your EIN immediately upon completing the application. Fax applications take about four business days. Mail applications can take four to six weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get an EIN if I am a sole proprietor without an LLC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sole proprietors can and should obtain an EIN even without a formal business entity. This protects your Social Security Number and is required to open a business bank account at most financial institutions."
      }
    }
  ]
};

export default function Ein() {
  return (
    <ResourceLayout
      title="How to Get a Business EIN for Your Nursing Practice"
      description="Step-by-step guide to applying for a free Employer Identification Number (EIN) from the IRS for your concierge nursing business, including what you need and common mistakes to avoid."
      canonical="/resources/guides/nursing-business-ein"
      category="Guides"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          An EIN (Employer Identification Number) is a free federal tax ID for your business, obtained through the IRS. It is required to open a business bank account, file taxes, and hire employees. Online applications are processed immediately.
        </p>
      </QuickAnswer>

      <p>
        An Employer Identification Number is essentially a Social Security Number for your business. Obtaining one is a critical early step after forming your business entity, and it is required before you can open a business bank account or file business tax returns.
      </p>

      <h2 id="what-is-ein">What Is an EIN?</h2>
      <p>
        The EIN is a nine-digit number issued by the IRS that identifies your concierge nursing business for tax reporting purposes. Every business entity — LLCs, PLLCs, corporations, and partnerships — needs one. Even sole proprietors benefit from having an EIN rather than using their personal SSN on business documents.
      </p>

      <h2 id="why-you-need-ein">Why Your Nursing Business Needs an EIN</h2>
      <p>
        Your EIN is used to open a <Link to="/resources/guides/nursing-business-bank-account" className="text-gold hover:text-gold/80">business bank account</Link>, file federal and state taxes, hire employees or contractors, protect your personal identity on business documents, and build business credit. It is a foundational piece of your business infrastructure.
      </p>

      <h2 id="how-to-apply">How to Apply for an EIN</h2>
      <p>
        The IRS provides EINs at no cost through irs.gov. The online application takes about 10 minutes and you receive your EIN immediately upon completion. You will select your entity type, enter your business information, and provide responsible party details. Fax and mail options are also available but take significantly longer.
      </p>
      <p>
        Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include guided walkthroughs for every step of the EIN application so you complete it correctly the first time.
      </p>

      <h2 id="what-you-need">What You Need Before Applying</h2>
      <p>
        Before starting your application, have your Social Security Number, legal business name (exactly as registered with your state), business entity type, business address, and formation date ready. Your EIN application must match your state formation documents exactly.
      </p>

      <h2 id="after-you-receive-ein">After You Receive Your EIN</h2>
      <p>
        Save your CP 575 confirmation letter securely — you will need it for banking and other applications. Use your EIN on all business documents instead of your SSN, and set up your accounting system with it for proper tax tracking.
      </p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>
        The most common mistakes include paying third-party services for a free application, misspelling your business name (it must match state filings exactly), applying before forming your entity, and losing your confirmation letter. Each of these can create delays and complications downstream.
      </p>

      <p>
        Your EIN is a foundational piece of your business infrastructure. For a complete, guided setup of your concierge nursing business — including EIN, NPI, insurance, and banking — explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or connect through our <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it free to get an EIN?</h3>
            <p>Yes. The IRS provides EINs at no cost. Avoid third-party services that charge for this free application.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use my Social Security Number instead of an EIN?</h3>
            <p>Technically yes for sole proprietors, but an EIN is strongly recommended to protect your identity and is required for business banking.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need to form my LLC before getting an EIN?</h3>
            <p>Yes. Complete your entity formation first so your EIN application matches your state filings.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take to get an EIN?</h3>
            <p>Online applications provide your EIN immediately. Fax takes about four days, mail takes four to six weeks.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I get an EIN if I am a sole proprietor without an LLC?</h3>
            <p>Yes. Sole proprietors can and should obtain an EIN to protect their SSN and establish their business identity.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

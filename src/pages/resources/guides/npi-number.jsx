import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-npi', text: 'What Is an NPI Number?' },
  { id: 'do-concierge-nurses-need-npi', text: 'Do Concierge Nurses Need an NPI?' },
  { id: 'how-to-apply', text: 'How to Apply for Your NPI Number' },
  { id: 'type-1-vs-type-2', text: 'Type 1 vs. Type 2 NPI Numbers' },
  { id: 'after-you-get-your-npi', text: 'After You Get Your NPI' },
  { id: 'common-mistakes', text: 'Common Mistakes to Avoid' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Get a Business EIN for Your Nursing Practice',
    description: 'Step-by-step instructions for obtaining your federal tax ID number.',
    link: '/resources/guides/nursing-business-ein',
    category: 'Guides',
  },
  {
    title: 'How to Set Up Liability Insurance for Concierge Nursing',
    description: 'Protect your practice with the right insurance coverage.',
    link: '/resources/guides/concierge-nurse-liability-insurance',
    category: 'Guides',
  },
  {
    title: 'Do I Need an LLC or PLLC for My Concierge Nursing Business?',
    description: 'Understand which business entity is right for your state.',
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
      "name": "Is it free to get an NPI number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Applying for an NPI number through CMS is completely free. Be cautious of third-party websites that charge a fee to file the application on your behalf — you can do it yourself at no cost through the NPPES website."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get an NPI number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you apply online through the NPPES website, you typically receive your NPI number immediately or within a few business days. Paper applications submitted by mail can take several weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an NPI if I do not bill insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you are a cash-pay only concierge nurse and do not bill any insurance or government payer, an NPI is not legally required. However, many concierge nurses obtain one anyway because it adds professional credibility, some clients request it, and you may need it if you expand your services in the future."
      }
    },
    {
      "@type": "Question",
      "name": "Can an RN get an NPI number or is it only for nurse practitioners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any healthcare provider who is a HIPAA-covered entity can obtain an NPI number. Registered nurses who bill for services or are involved in electronic healthcare transactions are eligible. Nurse practitioners, who typically bill insurance directly, almost always need one."
      }
    },
    {
      "@type": "Question",
      "name": "Does my NPI number expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your NPI number is a lifetime identifier that does not expire. However, you are responsible for keeping your information current in the NPPES system. If your name, address, or practice information changes, you must update your NPI record."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate NPI for my business entity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you operate as a sole practitioner, your individual Type 1 NPI is typically sufficient. If you form a business entity (LLC or PLLC) that employs other providers or bills under the business name, you may need a Type 2 organizational NPI in addition to your individual NPI."
      }
    }
  ]
};

export default function NpiNumber() {
  return (
    <ResourceLayout
      title="How to Get Your NPI Number as a Concierge Nurse"
      description="Learn how to apply for a National Provider Identifier (NPI) number for your concierge nursing business, including step-by-step instructions, Type 1 vs. Type 2 differences, and common mistakes to avoid."
      canonical="/resources/guides/concierge-nurse-npi-number"
      category="Guides"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          An NPI number is a free, unique 10-digit identifier issued by CMS to healthcare providers. Many concierge nurses obtain one for professional credibility and referral network purposes, even if they operate as cash-pay only. The online application is straightforward and typically processed immediately.
        </p>
      </QuickAnswer>

      <p>
        The National Provider Identifier (NPI) is one of the foundational credentials you may need when launching a concierge nursing business. Understanding what it is, whether you need one, and how it fits into your overall business setup is an important part of building your practice on a solid professional foundation.
      </p>

      <h2 id="what-is-npi">What Is an NPI Number?</h2>
      <p>
        The NPI was established under HIPAA to create a standardized identification system for healthcare providers. It is a permanent, 10-digit number that stays with you for your entire career regardless of where you practice or what specialty you work in. The NPI is used for billing, electronic claims, provider identification, and is publicly searchable through the NPI Registry.
      </p>

      <h2 id="do-concierge-nurses-need-npi">Do Concierge Nurses Need an NPI?</h2>
      <p>
        Whether you need an NPI depends on how your business operates. If you bill any insurance, Medicare, or Medicaid, an NPI is legally required. If you operate as strictly cash-pay, it is not mandatory — but many concierge nurses obtain one anyway for professional credibility, referral network purposes, superbill documentation, and future flexibility.
      </p>

      <h2 id="how-to-apply">How to Apply for Your NPI Number</h2>
      <p>
        The application is free through the NPPES website (nppes.cms.hhs.gov) and takes about 15 minutes. You will need your nursing license number, Social Security Number, provider taxonomy code, and practice location information. The process involves creating an account, completing the application, and submitting — with most applicants receiving their NPI immediately.
      </p>
      <p>
        Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> walk you through the exact application process with screen-by-screen guidance so nothing gets missed.
      </p>

      <h2 id="type-1-vs-type-2">Type 1 vs. Type 2 NPI Numbers</h2>
      <p>
        <strong>Type 1 (Individual)</strong> is assigned to individual providers and sole proprietors — this is what most solo concierge nurses need. <strong>Type 2 (Organizational)</strong> is for business entities that employ multiple providers. Most concierge nurses starting out only need a Type 1. You can add a Type 2 later as your practice grows.
      </p>

      <h2 id="after-you-get-your-npi">After You Get Your NPI</h2>
      <p>
        Once you have your NPI, it becomes part of your professional credentialing. You will use it on superbills, invoices, and referral documentation. Keeping your NPPES record updated whenever your practice information changes is essential for maintaining accurate provider records.
      </p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>
        The most common pitfalls include paying third-party sites for a free service, selecting the wrong taxonomy code, not keeping your information updated, and applying for a Type 2 when a Type 1 is all you need. These mistakes can cause downstream issues with credentialing and billing.
      </p>

      <p>
        Getting your NPI is one of many foundational steps in setting up your concierge nursing business. For a complete, guided walkthrough of every setup step — including NPI, EIN, insurance, and more — explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or connect with our team through <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it free to get an NPI number?</h3>
            <p>Yes. The NPPES application is completely free. Avoid third-party sites that charge for this service.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take to get an NPI number?</h3>
            <p>Online applications are typically processed immediately. Paper applications can take several weeks.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need an NPI if I do not bill insurance?</h3>
            <p>Not legally required for cash-pay providers, but many concierge nurses obtain one for credibility and future flexibility.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can an RN get an NPI number or is it only for nurse practitioners?</h3>
            <p>Registered nurses involved in HIPAA-covered transactions are eligible. It is not limited to nurse practitioners.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Does my NPI number expire?</h3>
            <p>No. It is a permanent identifier, but you must keep your information current in the NPPES system.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a separate NPI for my business entity?</h3>
            <p>Solo practitioners typically only need a Type 1 individual NPI. A Type 2 organizational NPI may be needed if your business employs multiple providers.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

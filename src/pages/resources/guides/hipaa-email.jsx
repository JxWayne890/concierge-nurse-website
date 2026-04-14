import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-hipaa-email', text: 'Why Regular Email Is Not HIPAA Compliant' },
  { id: 'what-makes-email-compliant', text: 'What Makes an Email System HIPAA Compliant' },
  { id: 'recommended-options', text: 'HIPAA-Compliant Email Options for Nurses' },
  { id: 'setup-steps', text: 'How to Set Up Your HIPAA-Compliant Email' },
  { id: 'email-policies', text: 'Email Policies You Need' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Set Up a HIPAA-Compliant Phone System',
    description: 'Ensure your phone communications meet HIPAA requirements too.',
    link: '/resources/guides/hipaa-compliant-phone-nursing',
    category: 'Guides',
  },
  {
    title: 'How to Document Client Visits as a Concierge Nurse',
    description: 'Best practices for keeping HIPAA-compliant client records.',
    link: '/resources/guides/concierge-nurse-client-documentation',
    category: 'Guides',
  },
  {
    title: 'Do I Need an LLC or PLLC for My Concierge Nursing Business?',
    description: 'Understand your business structure requirements.',
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
      "name": "Can I use Gmail or Yahoo for my concierge nursing business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Standard free Gmail, Yahoo, or Outlook.com accounts are not HIPAA compliant and should not be used to send or receive protected health information. However, Google Workspace (paid version) can be made HIPAA compliant if you sign a Business Associate Agreement with Google and configure the account properly." }
    },
    {
      "@type": "Question",
      "name": "What is a Business Associate Agreement (BAA)?",
      "acceptedAnswer": { "@type": "Answer", "text": "A BAA is a legal contract between a healthcare provider and a vendor that handles protected health information. The agreement requires the vendor to safeguard PHI and outlines their responsibilities under HIPAA. You must have a signed BAA with any email provider you use to transmit patient information." }
    },
    {
      "@type": "Question",
      "name": "How much does HIPAA-compliant email cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Costs vary by provider but typically range from $6 to $25 per user per month. Google Workspace starts around $7/month per user, while dedicated HIPAA email providers like Hushmail or Paubox may range from $10 to $30 per month." }
    },
    {
      "@type": "Question",
      "name": "Do I need HIPAA-compliant email if I only see cash-pay clients?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. HIPAA applies to protected health information regardless of payment method. If you communicate any health information via email — appointment details, care instructions, medical history — you need a compliant system." }
    },
    {
      "@type": "Question",
      "name": "Can I email clients their care instructions after a visit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, as long as you use a HIPAA-compliant email system. Many concierge nurses email post-visit summaries and care instructions to clients. Ensure the email is encrypted and that you have documented the client's consent to receive health information via email." }
    }
  ]
};

export default function HipaaEmail() {
  return (
    <ResourceLayout
      title="How to Set Up a HIPAA-Compliant Email System"
      description="Learn how to choose and configure a HIPAA-compliant email system for your concierge nursing business, including provider options, BAA requirements, and email security best practices."
      canonical="/resources/guides/hipaa-compliant-email-nursing"
      category="Guides"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          HIPAA-compliant email requires a provider that offers encryption and will sign a Business Associate Agreement (BAA). Options like Google Workspace, Microsoft 365, Hushmail, and Paubox meet these requirements. Budget approximately $7 to $25 per month.
        </p>
      </QuickAnswer>

      <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal leading-relaxed">
            <strong>Important:</strong> HIPAA violations can result in significant fines. This guide provides general guidance, but consult with a HIPAA compliance specialist for your specific situation.
          </p>
        </div>
      </div>

      <p>
        As a concierge nurse communicating with clients about their health, you are legally required to use a HIPAA-compliant email system for any messages containing protected health information. Setting up compliant email is straightforward and affordable when you know what to look for.
      </p>

      <h2 id="why-hipaa-email">Why Regular Email Is Not HIPAA Compliant</h2>
      <p>
        Standard free email services lack the encryption, Business Associate Agreements, audit controls, and access controls required by HIPAA. Using free Gmail, Yahoo, or Outlook.com for patient communications puts you at risk for privacy violations.
      </p>

      <h2 id="what-makes-email-compliant">What Makes an Email System HIPAA Compliant</h2>
      <p>
        A compliant system must provide encryption (in transit and at rest), a signed BAA with the provider, access controls with strong authentication, audit logging capabilities, and proper data backup and retention.
      </p>

      <h2 id="recommended-options">HIPAA-Compliant Email Options for Nurses</h2>
      <p>
        Several providers work well for concierge nurses. Google Workspace and Microsoft 365 offer familiar email experiences with BAA options. Hushmail and Paubox are built specifically for healthcare. Each has different features and price points — choosing the right one depends on your workflow and budget.
      </p>

      <h2 id="setup-steps">How to Set Up Your HIPAA-Compliant Email</h2>
      <p>
        The general process involves choosing a provider, signing the BAA, configuring security settings, and setting up your professional email address. The specific configuration steps vary by provider. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include provider-specific setup guides to ensure you configure everything correctly.
      </p>

      <h2 id="email-policies">Email Policies You Need</h2>
      <p>
        Beyond the technology, you need clear policies for client consent, minimum necessary information standards, device security, and incident response procedures. These policies should be part of your practice's compliance framework.
      </p>

      <p>
        HIPAA-compliant email is part of building a professional, legally sound practice. For help navigating all compliance requirements, explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or connect through <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use Gmail or Yahoo for my concierge nursing business?</h3>
            <p>Free versions are not HIPAA compliant. Google Workspace (paid) can be made compliant with a signed BAA and proper configuration.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is a Business Associate Agreement (BAA)?</h3>
            <p>A legal contract between you and any vendor handling protected health information, outlining their HIPAA responsibilities.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much does HIPAA-compliant email cost?</h3>
            <p>Typically $7 to $25 per month depending on the provider. Google Workspace and Microsoft 365 are often the most cost-effective.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need HIPAA-compliant email if I only see cash-pay clients?</h3>
            <p>Yes. HIPAA applies to all protected health information regardless of payment method.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I email clients their care instructions after a visit?</h3>
            <p>Yes, using a HIPAA-compliant system with documented client consent to receive health information via email.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

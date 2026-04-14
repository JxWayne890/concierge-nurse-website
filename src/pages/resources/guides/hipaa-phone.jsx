import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-hipaa-phone', text: 'Why Your Phone System Needs to Be HIPAA Compliant' },
  { id: 'compliance-requirements', text: 'HIPAA Phone Compliance Requirements' },
  { id: 'phone-options', text: 'HIPAA-Compliant Phone Options for Concierge Nurses' },
  { id: 'voicemail-texting', text: 'Voicemail and Texting Compliance' },
  { id: 'setup-guide', text: 'Setting Up Your Phone System' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Set Up a HIPAA-Compliant Email System',
    description: 'Complete your HIPAA-compliant communication setup.',
    link: '/resources/guides/hipaa-compliant-email-nursing',
    category: 'Guides',
  },
  {
    title: 'How to Document Client Visits as a Concierge Nurse',
    description: 'Keep proper records of all client interactions.',
    link: '/resources/guides/concierge-nurse-client-documentation',
    category: 'Guides',
  },
  {
    title: 'How to Set Boundaries with Concierge Nursing Clients',
    description: 'Establish healthy communication expectations with clients.',
    link: '/resources/guides/concierge-nurse-client-boundaries',
    category: 'Guides',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I use my personal cell phone for my concierge nursing business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Using your personal cell phone number directly is not recommended for HIPAA compliance or work-life balance. Instead, use a HIPAA-compliant business phone service that provides a separate business number, which can ring to your personal phone through an app. This separates business and personal communications while maintaining compliance." }
    },
    {
      "@type": "Question",
      "name": "Is regular texting HIPAA compliant?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Standard SMS text messages are not encrypted and are stored on carrier servers. If you need to text clients about health-related matters, use a HIPAA-compliant messaging platform that provides encryption and a signed BAA." }
    },
    {
      "@type": "Question",
      "name": "Do I need a separate business phone number?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is strongly recommended. A dedicated business number looks professional, helps maintain work-life boundaries, and makes HIPAA compliance easier to manage. Many VoIP services let you add a business line to your existing phone." }
    },
    {
      "@type": "Question",
      "name": "How much does a HIPAA-compliant phone system cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Basic HIPAA-compliant VoIP services for solo practitioners typically cost $15 to $40 per month. More robust systems with features like secure texting, faxing, and call recording may cost $30 to $60 per month." }
    },
    {
      "@type": "Question",
      "name": "Can I leave voicemails with patient information?",
      "acceptedAnswer": { "@type": "Answer", "text": "You should use caution with voicemails. Best practice is to leave minimal information — your name, business name, and a callback number — without disclosing clinical details. If a client has provided written consent for detailed voicemails, you may include more information, but keep it to the minimum necessary." }
    }
  ]
};

export default function HipaaPhone() {
  return (
    <ResourceLayout
      title="How to Set Up a HIPAA-Compliant Phone System"
      description="Learn how to set up a HIPAA-compliant phone system for your concierge nursing business, including VoIP options, texting compliance, voicemail best practices, and provider recommendations."
      canonical="/resources/guides/hipaa-compliant-phone-nursing"
      category="Guides"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A HIPAA-compliant VoIP service provides a dedicated business phone number with encrypted communications and a signed BAA. Services designed for healthcare providers start around $15 to $40 per month and give you professional phone capabilities on your existing device.
        </p>
      </QuickAnswer>

      <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal leading-relaxed">
            <strong>Important:</strong> Standard phone calls over cellular networks are generally considered secure for HIPAA purposes. The primary compliance concerns relate to voicemail storage, text messaging, call recording, and systems that store or transmit PHI.
          </p>
        </div>
      </div>

      <p>
        Your phone is one of the primary ways you communicate with clients and referral partners. A professional business phone system meets HIPAA requirements while providing practical benefits like separate business identity, work-life boundaries, and call management features.
      </p>

      <h2 id="why-hipaa-phone">Why Your Phone System Needs to Be HIPAA Compliant</h2>
      <p>
        Phone communications involve PHI through calls discussing symptoms and care plans, voicemails containing clinical details, and text messages referencing procedures. If these communications are stored or transmitted through non-compliant systems, you risk privacy violations. A professional system also separates your business and personal communications.
      </p>

      <h2 id="compliance-requirements">HIPAA Phone Compliance Requirements</h2>
      <p>
        Your phone service provider must sign a BAA, provide encryption for stored voicemails and messages, offer password-protected access controls, and maintain audit trails. These are the baseline requirements for handling PHI through phone systems.
      </p>

      <h2 id="phone-options">HIPAA-Compliant Phone Options for Concierge Nurses</h2>
      <p>
        Healthcare-specific VoIP services, general business VoIP with BAA options, and secure messaging platforms all serve different needs. The right choice depends on whether you primarily need voice calling, secure texting, or an all-in-one communication platform. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include specific provider comparisons and setup guidance.
      </p>

      <h2 id="voicemail-texting">Voicemail and Texting Compliance</h2>
      <p>
        Voicemails should contain minimal information unless the client has provided written consent. Standard SMS is not HIPAA compliant for transmitting PHI — use a compliant messaging platform instead. These are critical compliance areas that require intentional policies from the start.
      </p>

      <h2 id="setup-guide">Setting Up Your Phone System</h2>
      <p>
        Setup involves choosing a provider, signing the BAA, selecting your business number, configuring hours and routing, and updating all client-facing materials with your new number. The specific steps are covered in our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link>.
      </p>

      <p>
        A properly configured phone system pairs with <Link to="/resources/guides/hipaa-compliant-email-nursing" className="text-gold hover:text-gold/80">HIPAA-compliant email</Link> and proper <Link to="/resources/guides/concierge-nurse-client-documentation" className="text-gold hover:text-gold/80">documentation</Link> for a complete communication framework. For personalized guidance, explore our <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use my personal cell phone for my concierge nursing business?</h3>
            <p>Use a HIPAA-compliant VoIP service that provides a separate business number and rings through an app on your phone.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is regular texting HIPAA compliant?</h3>
            <p>No. Standard SMS is not encrypted. Use a HIPAA-compliant messaging platform for health-related text communications.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a separate business phone number?</h3>
            <p>Strongly recommended for compliance, professionalism, and work-life boundaries.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much does a HIPAA-compliant phone system cost?</h3>
            <p>Basic systems cost $15 to $40 per month. More feature-rich healthcare platforms run $30 to $60 per month.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I leave voicemails with patient information?</h3>
            <p>Leave only your name, business name, and callback number unless the client has given written consent for detailed messages.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

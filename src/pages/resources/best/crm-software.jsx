import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-crm', text: "What Is CRM and Why Do Concierge Nurses Need It?" },
  { id: 'features', text: "Key Features for Nursing Practices" },
  { id: 'simple-options', text: "Simple CRM Options for Solo Nurses" },
  { id: 'advanced-options', text: "Advanced Options for Growing Practices" },
  { id: 'hipaa', text: "HIPAA Considerations" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Best Scheduling Software for Concierge Nurses",
    description: "Scheduling often integrates with or replaces CRM features.",
    link: '/resources/best/scheduling-software-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: "Best Accounting Software for Nurse-Owned Businesses",
    description: "CRM handles clients; accounting handles finances.",
    link: '/resources/best/accounting-software-nursing-business',
    category: 'Best Of',
  },
  {
    title: "A Day in the Life of a Geriatric Concierge Nurse",
    description: "Geriatric nurses with many clients rely heavily on CRM.",
    link: '/resources/day-in-the-life/geriatric-concierge-nurse',
    category: 'Day in the Life',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do concierge nurses need CRM software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you have more than a handful of clients, some form of CRM becomes essential. It helps you track client information, manage follow-ups, nurture referral relationships, and avoid letting anything fall through the cracks. You may not need enterprise CRM software, but you need a system."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a spreadsheet instead of CRM software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A spreadsheet works when you have very few clients. As your practice grows, a spreadsheet becomes unwieldy and risky — missed follow-ups, lost information, and no automation. CRM software is designed to manage these relationships at scale."
      }
    },
    {
      "@type": "Question",
      "name": "Does CRM software need to be HIPAA-compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you store any protected health information (PHI) in your CRM, yes. Many general CRM platforms are not HIPAA-compliant. Either use a healthcare-specific CRM with a Business Associate Agreement (BAA), or keep PHI out of your CRM entirely and use it only for business relationship management."
      }
    },
    {
      "@type": "Question",
      "name": "How much does CRM software cost for a small nursing practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Options range from free (basic features, limited contacts) to premium tiers. Most solo concierge nurses find good options in affordable monthly ranges. The cost is a business expense that pays for itself through better client retention and referral management."
      }
    }
  ]
};

export default function CRMSoftware() {
  return (
    <ResourceLayout
      title={"Best CRM Software for Concierge Nurses"}
      description={"Compare CRM (client relationship management) tools for concierge nursing practices — manage client information, track referrals, and grow your business systematically."}
      canonical="/resources/best/crm-software-concierge-nurses"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          CRM software helps concierge nurses manage client relationships, track referral sources, and systematize their business development. For solo practitioners, simple tools that track contacts, schedule follow-ups, and manage client communication are sufficient. For growing practices, look for platforms with pipeline management, automated reminders, and team collaboration features. Always consider HIPAA compliance if storing health information.
        </p>
      </QuickAnswer>

      <h2 id="what-is-crm">What Is CRM and Why Do Concierge Nurses Need It?</h2>
      <p>
        CRM (Client Relationship Management) software helps you manage relationships with clients, families, referral sources, and prospects without relying on memory or scattered notes. Your concierge nursing business runs on relationships, and a CRM ensures nothing falls through the cracks.
      </p>

      <h2 id="features">Key Features for Nursing Practices</h2>
      <p>
        Look for contact management, follow-up reminders, communication tracking, referral source tracking, and detailed notes that persist over time. The right features depend on your practice size and how you manage client and referral relationships.
      </p>

      <h2 id="simple-options">Simple CRM Options for Solo Nurses</h2>
      <p>
        Solo concierge nurses do not need enterprise software. Look for lightweight tools that handle contacts, reminders, and basic tracking. The best CRM is the one you will actually use — a simple tool you check daily beats an expensive platform that sits unused.
      </p>

      <h2 id="advanced-options">Advanced Options for Growing Practices</h2>
      <p>
        Growing practices need features like pipeline management, team access, automated workflows, and integration with <Link to="/resources/best/scheduling-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">scheduling</Link> and <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting</Link> tools.
      </p>

      <h2 id="hipaa">HIPAA Considerations</h2>
      <p>
        If you store any protected health information in your CRM, it must be HIPAA-compliant with a signed BAA. A common approach is keeping your CRM strictly for business relationships and using a separate HIPAA-compliant system for clinical documentation. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> covers technology stack selection for concierge nursing practices.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do concierge nurses need CRM software?</h3>
            <p>Once you have more than a handful of clients, some form of CRM becomes essential. It helps you track client information, manage follow-ups, nurture referral relationships, and avoid letting anything fall through the cracks. You may not need enterprise CRM software, but you need a system.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use a spreadsheet instead of CRM software?</h3>
            <p>A spreadsheet works when you have very few clients. As your practice grows, a spreadsheet becomes unwieldy and risky — missed follow-ups, lost information, and no automation. CRM software is designed to manage these relationships at scale.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Does CRM software need to be HIPAA-compliant?</h3>
            <p>If you store any protected health information (PHI) in your CRM, yes. Many general CRM platforms are not HIPAA-compliant. Either use a healthcare-specific CRM with a Business Associate Agreement (BAA), or keep PHI out of your CRM entirely and use it only for business relationship management.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much does CRM software cost for a small nursing practice?</h3>
            <p>Options range from free (basic features, limited contacts) to premium tiers. Most solo concierge nurses find good options in affordable monthly ranges. The cost is a business expense that pays for itself through better client retention and referral management.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

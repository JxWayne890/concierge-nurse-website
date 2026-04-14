import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'do-you-need', text: 'Do You Need Certifications to Be a Concierge Nurse?' },
  { id: 'clinical-certs', text: 'Clinical Certifications That Add Value' },
  { id: 'business-certs', text: 'Business and Coaching Certifications' },
  { id: 'niche-specific', text: 'Niche-Specific Certifications' },
  { id: 'how-to-choose', text: 'How to Choose the Right Certifications' },
  { id: 'roi', text: 'Return on Investment: Time and Money' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Is a Concierge Nursing Certification Worth It?',
    description: 'A deeper look at whether certification programs deliver real ROI.',
    link: '/resources/certifications/concierge-nursing-certification-worth-it',
    category: 'Certifications',
  },
  {
    title: 'BLS and ACLS Requirements for Concierge Nurses',
    description: 'The baseline certifications every concierge nurse should maintain.',
    link: '/resources/certifications/concierge-nurse-bls-acls',
    category: 'Certifications',
  },
  {
    title: 'IV Certification for Concierge Nurses',
    description: 'Whether IV therapy certification can expand your service offerings.',
    link: '/resources/certifications/concierge-nurse-iv-certification',
    category: 'Certifications',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What certifications do concierge nurses need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no single required certification for concierge nursing beyond your RN or LPN license. However, certifications like BLS, ACLS, wound care, IV therapy, and niche-specific credentials can differentiate you, expand your service offerings, and build client confidence."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a specific concierge nursing certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no nationally standardized concierge nursing certification at this time. Some programs offer certificates in concierge or private-duty nursing, but these vary in quality and recognition. Focus on clinical certifications that directly expand your scope and skills."
      }
    },
    {
      "@type": "Question",
      "name": "How many certifications should a concierge nurse have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quality matters more than quantity. Choose certifications that align with your niche and genuinely expand what you can offer clients. Two or three well-chosen certifications are more valuable than a long list of credentials that do not apply to your practice."
      }
    },
    {
      "@type": "Question",
      "name": "Do certifications help concierge nurses charge higher rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Certifications alone do not automatically justify higher rates, but they can support premium pricing. Clients and referral sources are more likely to trust (and pay more for) a nurse who can demonstrate specialized expertise through recognized credentials."
      }
    },
    {
      "@type": "Question",
      "name": "Can I start a concierge nursing business without extra certifications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your RN or LPN license, combined with relevant clinical experience, is sufficient to start. Many successful concierge nurses launch with their existing credentials and add certifications strategically as their practice grows and they identify specific skill gaps."
      }
    }
  ]
};

export default function CertificationsOverview() {
  return (
    <ResourceLayout
      title="Certifications That Help You Stand Out as a Concierge Nurse"
      description="A comprehensive guide to the certifications that matter most for concierge nurses — which ones to pursue, which to skip, and how to invest your education dollars wisely."
      canonical="/resources/certifications/concierge-nurse-certifications"
      category="Certifications"
      categorySlug="/resources/certifications"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          There is no single required certification for concierge nursing beyond your active nursing license. The certifications that help you stand out are the ones that directly expand your clinical capabilities, align with your niche, and give clients and referral sources confidence in your expertise. BLS is a baseline. Beyond that, choose strategically based on what you want to offer.
        </p>
      </QuickAnswer>

      <h2 id="do-you-need">Do You Need Certifications to Be a Concierge Nurse?</h2>
      <p>
        Legally, you need an active RN or LPN license. That is the only non-negotiable credential. Everything else is a strategic choice that should align with your niche, service offerings, and business goals. Certifications expand your scope of services, build credibility with referral sources, give clients confidence, and may be required by your liability insurer for certain services.
      </p>

      <h2 id="clinical-certs">Clinical Certifications That Add Value</h2>
      <p>
        The most commonly relevant clinical certifications for concierge nurses include <Link to="/resources/certifications/concierge-nurse-bls-acls" className="text-gold hover:text-gold/80 underline">BLS and ACLS</Link>, <Link to="/resources/certifications/concierge-nurse-iv-certification" className="text-gold hover:text-gold/80 underline">IV therapy certification</Link>, <Link to="/resources/certifications/concierge-nurse-wound-care-certification" className="text-gold hover:text-gold/80 underline">wound care certification</Link>, IBCLC for postpartum nurses, and Certified Case Manager for geriatric nurses. Each one should pass a simple test: does it expand your service menu, strengthen referral relationships, or meet an insurance requirement?
      </p>

      <h2 id="business-certs">Business and Coaching Certifications</h2>
      <p>
        Some concierge nurses pursue business-related certifications like health coaching or nurse coaching credentials. Be cautious — the value depends on what you learn and whether you apply it. A well-structured mentorship program like the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Concierge Nurse Accelerator</Link> may deliver more practical value than a generic business certificate.
      </p>

      <h2 id="niche-specific">Niche-Specific Certifications</h2>
      <p>
        Your niche should drive your certification choices. Post-op recovery nurses benefit from wound care and ACLS. Postpartum nurses benefit from NRP and lactation credentials. Geriatric nurses benefit from wound care and case management certification. The right certifications depend on what services you want to offer and what your referral sources expect.
      </p>

      <h2 id="how-to-choose">How to Choose the Right Certifications</h2>
      <p>
        Before investing in any certification, consider whether it expands your service menu, whether your referral sources value it, whether your insurer requires it, whether it comes from a recognized body, and whether you can recoup the investment through new revenue. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> and <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Sessions</Link> can help you build a personalized certification plan.
      </p>

      <h2 id="roi">Return on Investment: Time and Money</h2>
      <p>
        Certifications vary widely in cost and time investment. Think about ROI practically — will the certification allow you to add services, strengthen referral relationships, or justify premium pricing? If the answer is yes, the investment usually pays for itself. For a deeper analysis, read our guide on <Link to="/resources/certifications/concierge-nursing-certification-worth-it" className="text-gold hover:text-gold/80 underline">whether concierge nursing certification is worth it</Link>.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What certifications do concierge nurses need?</h3>
            <p>There is no single required certification for concierge nursing beyond your RN or LPN license. However, certifications like BLS, ACLS, wound care, IV therapy, and niche-specific credentials can differentiate you, expand your service offerings, and build client confidence.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is there a specific concierge nursing certification?</h3>
            <p>There is no nationally standardized concierge nursing certification at this time. Some programs offer certificates in concierge or private-duty nursing, but these vary in quality and recognition. Focus on clinical certifications that directly expand your scope and skills.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many certifications should a concierge nurse have?</h3>
            <p>Quality matters more than quantity. Choose certifications that align with your niche and genuinely expand what you can offer clients. Two or three well-chosen certifications are more valuable than a long list of credentials that do not apply to your practice.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do certifications help concierge nurses charge higher rates?</h3>
            <p>Certifications alone do not automatically justify higher rates, but they can support premium pricing. Clients and referral sources are more likely to trust (and pay more for) a nurse who can demonstrate specialized expertise through recognized credentials.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I start a concierge nursing business without extra certifications?</h3>
            <p>Yes. Your RN or LPN license, combined with relevant clinical experience, is sufficient to start. Many successful concierge nurses launch with their existing credentials and add certifications strategically as their practice grows and they identify specific skill gaps.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

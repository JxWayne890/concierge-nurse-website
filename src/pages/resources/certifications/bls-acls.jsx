import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-bls-matters', text: 'Why BLS Is Non-Negotiable for Concierge Nurses' },
  { id: 'acls-value', text: 'When ACLS Adds Value to Your Practice' },
  { id: 'where-to-certify', text: 'Where to Get Certified' },
  { id: 'renewal', text: 'Renewal Timelines and Requirements' },
  { id: 'insurance-requirements', text: 'Insurance and Liability Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Certifications That Help You Stand Out',
    description: 'The complete guide to which certifications matter most.',
    link: '/resources/certifications/concierge-nurse-certifications',
    category: 'Certifications',
  },
  {
    title: 'IV Certification for Concierge Nurses',
    description: 'Another high-value clinical certification to consider.',
    link: '/resources/certifications/concierge-nurse-iv-certification',
    category: 'Certifications',
  },
  {
    title: 'A Day in the Life of a Post-Op Recovery Concierge Nurse',
    description: 'See how BLS and ACLS skills apply in post-op nursing.',
    link: '/resources/day-in-the-life/post-op-recovery-concierge-nurse',
    category: 'Day in the Life',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do concierge nurses need BLS certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. BLS (Basic Life Support) is considered the baseline certification for any nurse providing direct client care. Most professional liability insurers require it, and clients and referral sources expect it. Keep your BLS current at all times."
      }
    },
    {
      "@type": "Question",
      "name": "Do concierge nurses need ACLS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ACLS is not universally required but is highly recommended for concierge nurses who work with post-surgical, cardiac, or elderly clients. It demonstrates advanced emergency preparedness and may be expected by surgical referral sources."
      }
    },
    {
      "@type": "Question",
      "name": "How often do BLS and ACLS need to be renewed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both BLS and ACLS certifications from the American Heart Association are valid for two years. Mark your renewal dates well in advance and complete recertification before your current certification expires."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take BLS and ACLS online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The American Heart Association offers blended learning options that combine online coursework with an in-person skills session. Fully online certifications from other providers may not be accepted by all employers or insurers, so verify acceptance before enrolling."
      }
    }
  ]
};

export default function BlsAcls() {
  return (
    <ResourceLayout
      title="BLS and ACLS Requirements for Concierge Nurses"
      description="Understand why BLS is essential and when ACLS certification adds value to your concierge nursing practice — plus where to get certified and how to stay current."
      canonical="/resources/certifications/concierge-nurse-bls-acls"
      category="Certifications"
      categorySlug="/resources/certifications"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          BLS (Basic Life Support) is the one certification every concierge nurse should maintain without exception. You are providing care in homes, recovery suites, and other non-hospital settings where you may be the only clinical professional present during an emergency. ACLS (Advanced Cardiovascular Life Support) is not always required but adds significant value if you work with post-surgical, cardiac, or elderly clients.
        </p>
      </QuickAnswer>

      <h2 id="why-bls-matters">Why BLS Is Non-Negotiable for Concierge Nurses</h2>
      <p>
        When you provide nursing care outside a hospital, you are often the only clinical professional present. BLS certification ensures you can respond to cardiac and respiratory emergencies in a home setting where there is no code team to call. Beyond clinical necessity, BLS is typically required by liability insurers, expected by referral sources, and may be mandated by your state board for license renewal.
      </p>

      <h2 id="acls-value">When ACLS Adds Value to Your Practice</h2>
      <p>
        ACLS is not universally required but adds significant value for concierge nurses working with post-surgical, cardiac, geriatric, or IV therapy clients. Surgeons and physicians are more confident referring to a nurse with ACLS training, and it demonstrates a higher level of emergency preparedness that VIP and high-acuity clients expect.
      </p>

      <h2 id="where-to-certify">Where to Get Certified</h2>
      <p>
        The American Heart Association (AHA) is the gold standard for BLS and ACLS certification, with universally recognized credentials accepted by insurers and licensing boards. AHA offers both in-person and blended learning formats. Verify that your insurer accepts certifications from any non-AHA provider before enrolling.
      </p>

      <h2 id="renewal">Renewal Timelines and Requirements</h2>
      <p>
        BLS and ACLS certifications are typically valid for two years. Stay ahead of your renewal dates to avoid gaps in your liability coverage. Renewal courses are shorter than initial certifications and keep you current with updated guidelines.
      </p>

      <h2 id="insurance-requirements">Insurance and Liability Considerations</h2>
      <p>
        Your professional liability insurance likely references BLS certification, and a lapse could affect your coverage. Some insurers offer lower premiums for nurses who hold both BLS and ACLS, or may require ACLS for certain services like IV therapy. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> helps you build your certification strategy alongside your practice foundation.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do concierge nurses need BLS certification?</h3>
            <p>Yes. BLS is considered the baseline certification for any nurse providing direct client care. Most professional liability insurers require it, and clients and referral sources expect it. Keep your BLS current at all times.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do concierge nurses need ACLS?</h3>
            <p>ACLS is not universally required but is highly recommended for concierge nurses who work with post-surgical, cardiac, or elderly clients. It demonstrates advanced emergency preparedness and may be expected by surgical referral sources.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How often do BLS and ACLS need to be renewed?</h3>
            <p>Both BLS and ACLS certifications from the American Heart Association are valid for two years. Mark your renewal dates well in advance and complete recertification before your current certification expires.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I take BLS and ACLS online?</h3>
            <p>The American Heart Association offers blended learning options that combine online coursework with an in-person skills session. Fully online certifications from other providers may not be accepted by all employers or insurers, so verify acceptance before enrolling.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

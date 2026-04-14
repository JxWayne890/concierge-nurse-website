import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-iv-cert', text: 'What Is IV Certification?' },
  { id: 'services-unlocked', text: 'Services IV Certification Unlocks' },
  { id: 'state-requirements', text: 'State Scope of Practice Considerations' },
  { id: 'how-to-get', text: 'How to Get IV Certified' },
  { id: 'business-case', text: 'The Business Case for IV Certification' },
  { id: 'risks', text: 'Risks and Liability Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Certifications That Help You Stand Out',
    description: 'See how IV certification fits into your overall credential strategy.',
    link: '/resources/certifications/concierge-nurse-certifications',
    category: 'Certifications',
  },
  {
    title: 'BLS and ACLS Requirements for Concierge Nurses',
    description: 'The baseline certifications to hold alongside IV certification.',
    link: '/resources/certifications/concierge-nurse-bls-acls',
    category: 'Certifications',
  },
  {
    title: 'How to Create Passive Income as a Concierge Nurse',
    description: 'IV therapy services can become a scalable revenue stream.',
    link: '/resources/scaling/passive-income-concierge-nurse',
    category: 'Scaling',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is IV certification worth it for concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For many concierge nurses, yes. IV certification opens up high-demand services like IV hydration therapy, vitamin infusions, and medication administration that clients will pay premium rates for. The certification cost is relatively modest compared to the revenue potential."
      }
    },
    {
      "@type": "Question",
      "name": "Can RNs start an IV without certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In many states, IV therapy is within the RN scope of practice and does not require a separate certification. However, getting certified demonstrates competency, may be required by your liability insurer, and gives clients confidence. Always check your specific state's requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to get IV certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most IV certification programs take one to three days for classroom and hands-on training, plus any required clinical hours. Some programs offer accelerated formats. The total time from enrollment to certification is typically two to four weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a physician's order to provide IV therapy as a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This varies by state. Some states require a physician's standing order or collaborative agreement for IV therapy. Others allow RNs to provide certain IV services independently. Research your state's nurse practice act and consult with a healthcare attorney for clarity."
      }
    },
    {
      "@type": "Question",
      "name": "What supplies do I need to offer mobile IV therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will need IV catheters, tubing, fluids, vitamin additives (if applicable), tourniquets, antiseptic supplies, sharps containers, gloves, and a portable IV pole or gravity hook. You also need a system for proper medical waste disposal and supply chain management."
      }
    }
  ]
};

export default function IVCertification() {
  return (
    <ResourceLayout
      title="IV Certification for Concierge Nurses: Is It Worth It?"
      description="Explore whether IV certification makes sense for your concierge nursing practice — what services it unlocks, what it costs, state requirements, and how to evaluate the business case."
      canonical="/resources/certifications/concierge-nurse-iv-certification"
      category="Certifications"
      categorySlug="/resources/certifications"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          IV certification is one of the most commercially valuable certifications a concierge nurse can hold. It opens the door to IV hydration therapy, vitamin infusions, and medication administration services — all of which are in high demand among wellness-oriented clients. Whether it is worth it for you depends on your state's scope of practice, your niche, and whether you want to invest in the supply chain and liability infrastructure IV services require.
        </p>
      </QuickAnswer>

      <h2 id="what-is-iv-cert">What Is IV Certification?</h2>
      <p>
        IV certification is a training program that verifies your competency in peripheral intravenous access, fluid administration, and complication management. For RNs, IV therapy is generally within your scope of practice, but the certification adds formal documentation of competency that matters for insurance, client confidence, and regulatory compliance.
      </p>

      <h2 id="services-unlocked">Services IV Certification Unlocks</h2>
      <p>
        IV certification can open the door to high-demand services including IV hydration therapy, vitamin and nutrient infusions, post-surgical IV support, and event-based wellness services. These services are popular in the private-pay wellness market and can become a significant revenue stream for your practice.
      </p>

      <h2 id="state-requirements">State Scope of Practice Considerations</h2>
      <p>
        IV therapy regulations vary significantly by state, including physician oversight requirements, vitamin infusion classifications, and business licensing needs. Consult with a healthcare attorney familiar with your state's regulations before launching IV services. The investment in legal guidance upfront prevents costly compliance issues later.
      </p>

      <h2 id="how-to-get">How to Get IV Certified</h2>
      <p>
        IV certification programs are available through nursing continuing education providers, community colleges, and specialized training companies. Look for programs that combine didactic instruction with hands-on skills practice and competency verification. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> covers how to add service lines like IV therapy strategically as part of your practice building.
      </p>

      <h2 id="business-case">The Business Case for IV Certification</h2>
      <p>
        IV therapy services command premium pricing and attract wellness-oriented clients who are willing to pay out of pocket. However, IV services also carry higher operating costs including supplies, waste disposal, and additional liability coverage. Run your own numbers before adding this service line to ensure the investment makes sense for your market.
      </p>

      <h2 id="risks">Risks and Liability Considerations</h2>
      <p>
        IV therapy carries clinical risks including infiltration, allergic reactions, infection, and fluid overload — all of which you must be prepared to manage in a home setting. Maintain current <Link to="/resources/certifications/concierge-nurse-bls-acls" className="text-gold hover:text-gold/80 underline">BLS and ACLS certifications</Link> and have documented emergency protocols before administering your first infusion. For a broader view of which certifications matter most, see our <Link to="/resources/certifications/concierge-nurse-certifications" className="text-gold hover:text-gold/80 underline">certifications overview</Link>.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is IV certification worth it for concierge nurses?</h3>
            <p>For many concierge nurses, yes. IV certification opens up high-demand services like IV hydration therapy, vitamin infusions, and medication administration that clients will pay premium rates for. The certification cost is relatively modest compared to the revenue potential.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can RNs start an IV without certification?</h3>
            <p>In many states, IV therapy is within the RN scope of practice and does not require a separate certification. However, getting certified demonstrates competency, may be required by your liability insurer, and gives clients confidence. Always check your specific state's requirements.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take to get IV certified?</h3>
            <p>Most IV certification programs take one to three days for classroom and hands-on training, plus any required clinical hours. Some programs offer accelerated formats. The total time from enrollment to certification is typically two to four weeks.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a physician's order to provide IV therapy as a concierge nurse?</h3>
            <p>This varies by state. Some states require a physician's standing order or collaborative agreement for IV therapy. Others allow RNs to provide certain IV services independently. Research your state's nurse practice act and consult with a healthcare attorney for clarity.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What supplies do I need to offer mobile IV therapy?</h3>
            <p>You will need IV catheters, tubing, fluids, vitamin additives (if applicable), tourniquets, antiseptic supplies, sharps containers, gloves, and a portable IV pole or gravity hook. You also need a system for proper medical waste disposal and supply chain management.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

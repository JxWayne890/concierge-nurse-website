import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-concierge-works', text: "Why the Concierge Model Works" },
  { id: 'practice-design', text: "Designing Your Practice Around Your Abilities" },
  { id: 'accommodations', text: "Self-Accommodations as a Business Owner" },
  { id: 'niche-selection', text: "Choosing the Right Niche" },
  { id: 'advocacy', text: "Advocacy and Representation" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "A Day in the Life of a Part-Time Concierge Nurse",
    description: "Part-time models offer flexibility for managing health needs.",
    link: '/resources/day-in-the-life/part-time-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: "How to Add Virtual Services",
    description: "Virtual services reduce physical demands.",
    link: '/resources/scaling/add-virtual-services-concierge-nursing',
    category: 'Scaling',
  },
  {
    title: "What Is a Concierge Nurse?",
    description: "A model built on flexibility and autonomy.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can nurses with disabilities do concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Concierge nursing is one of the most accommodating nursing practice models because you design your own schedule, choose your services, control your workload, and create your own work environment. You define the practice around your abilities and limitations."
      }
    },
    {
      "@type": "Question",
      "name": "What niches work best for nurses with physical limitations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Virtual concierge services, care coordination, patient advocacy, health education, and wellness coaching are niches that can be practiced with minimal physical demands. In-person niches can be adapted based on your specific abilities and the services you choose to offer."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to disclose my disability to clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You are not legally required to disclose a disability to clients unless it directly affects the care you provide. The decision to disclose is personal. Focus on communicating what you can do and the value you deliver, not on limitations."
      }
    },
    {
      "@type": "Question",
      "name": "Are there resources for nurse entrepreneurs with disabilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SBA and SCORE offer resources for entrepreneurs with disabilities. Disability-specific business grants may be available. Vocational rehabilitation services in your state may also support your business startup."
      }
    }
  ]
};

export default function NursesWithDisabilities() {
  return (
    <ResourceLayout
      title={"Concierge Nursing for Nurses with Disabilities"}
      description={"How the concierge nursing model can accommodate nurses with disabilities — flexible scheduling, practice design, and the ability to build a career on your own terms."}
      canonical="/resources/for/concierge-nursing-nurses-with-disabilities"
      category="For You"
      categorySlug="/resources/for"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          The concierge nursing model is uniquely accommodating for nurses with disabilities because you control every aspect of your practice — your schedule, your services, your workload, and your work environment. Unlike hospital employment where you must fit into a predetermined role, concierge nursing lets you design a practice that leverages your clinical strengths while respecting your physical, cognitive, or sensory needs.
        </p>
      </QuickAnswer>

      <h2 id="why-concierge-works">Why the Concierge Model Works</h2>
      <p>Traditional nursing employment often struggles to accommodate disabilities effectively. Twelve-hour shifts, mandatory overtime, physically demanding tasks, and inflexible scheduling make hospital nursing difficult or impossible for some disabled nurses. Concierge nursing removes every one of these barriers. You set your hours, choose your services, and build a practice that works with your body and mind — not against them.</p>

      <h2 id="practice-design">Designing Your Practice Around Your Abilities</h2>
      <p>As a business owner, you are your own accommodations department. Design your practice intentionally: choose services you can deliver comfortably and skillfully, set a visit schedule that respects your energy and physical capacity, select niches that align with your abilities, and use <Link to="/resources/scaling/add-virtual-services-concierge-nursing" className="text-gold hover:text-gold/80 underline">virtual services</Link> to reduce physical demands when appropriate.</p>

      <h2 id="accommodations">Self-Accommodations as a Business Owner</h2>
      <p>One of the most empowering aspects of business ownership for disabled nurses is the ability to self-accommodate without navigating workplace disability accommodation processes. You can invest in ergonomic equipment, build rest time into your schedule, use assistive technology freely, design your documentation processes for accessibility, and modify any aspect of your workflow without asking permission.</p>

      <h2 id="niche-selection">Choosing the Right Niche</h2>
      <p>Your niche should play to your strengths. Virtual services, care coordination, patient advocacy, health education, and chronic disease management can all be practiced with varying physical demands. In-person niches can be adapted — for example, a nurse with a mobility impairment can provide seated assessments and delegate physical tasks that exceed their capabilities.</p>

      <h2 id="advocacy">Advocacy and Representation</h2>
      <p>Your presence as a disabled nurse entrepreneur matters. Clients with their own disabilities may feel more comfortable with a nurse who understands their experience. Your practice can be a model of what is possible, demonstrating that nursing excellence is not limited by physical ability.</p>
      <p>Build your practice with the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link>, which provides flexible, self-paced business building guidance. And join the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link> for a supportive community.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can nurses with disabilities do concierge nursing?</h3>
            <p>Yes. Concierge nursing is one of the most accommodating nursing practice models because you design your own schedule, choose your services, control your workload, and create your own work environment. You define the practice around your abilities and limitations.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What niches work best for nurses with physical limitations?</h3>
            <p>Virtual concierge services, care coordination, patient advocacy, health education, and wellness coaching are niches that can be practiced with minimal physical demands. In-person niches can be adapted based on your specific abilities and the services you choose to offer.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I have to disclose my disability to clients?</h3>
            <p>You are not legally required to disclose a disability to clients unless it directly affects the care you provide. The decision to disclose is personal. Focus on communicating what you can do and the value you deliver, not on limitations.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are there resources for nurse entrepreneurs with disabilities?</h3>
            <p>The SBA and SCORE offer resources for entrepreneurs with disabilities. Disability-specific business grants may be available. Vocational rehabilitation services in your state may also support your business startup.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

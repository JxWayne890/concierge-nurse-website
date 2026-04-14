import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'choosing-bag', text: "Choosing the Right Nursing Bag" },
  { id: 'essential-supplies', text: "Essential Supplies Every Concierge Nurse Needs" },
  { id: 'niche-specific', text: "Niche-Specific Supplies" },
  { id: 'organization', text: "Organizing Your Bag for Efficiency" },
  { id: 'restocking', text: "Restocking and Maintenance" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "A Day in the Life of a Post-Op Recovery Concierge Nurse",
    description: "See how a post-op nurse uses their medical bag daily.",
    link: '/resources/day-in-the-life/post-op-recovery-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: "Concierge Nursing Startup Costs",
    description: "Medical supplies are a key startup expense — see the full picture.",
    link: '/resources/concierge-nursing-startup-costs',
    category: 'Getting Started',
  },
  {
    title: "A Day in the Life of a Geriatric Concierge Nurse",
    description: "Geriatric nurses carry specific supplies for their client population.",
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
      "name": "What kind of bag should a concierge nurse use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Look for a bag that is professional in appearance, durable, easy to clean, and organized with compartments. It should be large enough for your essential supplies but not so large that it looks cumbersome in a client home. Many nurses prefer structured bags that stand upright and open wide for easy access."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I spend on a nursing bag and initial supplies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan to invest in quality equipment that will last. The bag itself plus essential supplies typically runs a few hundred dollars. This is a business expense that you use daily, so quality matters more than finding the cheapest option."
      }
    },
    {
      "@type": "Question",
      "name": "What supplies do I need for my first concierge nursing visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At minimum: blood pressure cuff, stethoscope, pulse oximeter, thermometer, penlight, gloves, hand sanitizer, basic wound care supplies, documentation materials, and your business cards. Your specific niche may require additional items."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I restock my nursing bag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check and restock after every visit or at the end of each day. Do a comprehensive inventory weekly. Replace expired items immediately. Running out of supplies during a client visit is unprofessional and potentially dangerous."
      }
    }
  ]
};

export default function MedicalBags() {
  return (
    <ResourceLayout
      title={"Best Medical Bags and Supplies for Mobile Concierge Nurses"}
      description={"What to look for in a professional nursing bag and which supplies every mobile concierge nurse needs — organized by niche and visit type."}
      canonical="/resources/best/medical-bags-supplies-concierge-nurses"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Your nursing bag is your mobile office. It should be professional in appearance, well-organized, and stocked with everything you need for your specific client population. The right bag and supplies communicate competence before you even begin your assessment. Invest in quality equipment — it is a daily-use business tool and often the first thing clients notice.
        </p>
      </QuickAnswer>

      <h2 id="choosing-bag">Choosing the Right Nursing Bag</h2>
      <p>
        Your nursing bag makes a first impression. Prioritize professional appearance, durability, organization with multiple compartments, wipeable surfaces for infection control, and comfortable carrying options. A well-organized, professional bag communicates competence before you even begin your assessment.
      </p>

      <h2 id="essential-supplies">Essential Supplies Every Concierge Nurse Needs</h2>
      <p>
        Every concierge nurse's bag should include vital sign equipment, assessment tools, PPE, basic wound care supplies, documentation materials, and safety items. The specifics depend on your niche and client population. The <Link to="/toolkits" className="text-gold hover:text-gold/80 underline">Toolkits</Link> include niche-specific supply checklists so you know exactly what to carry.
      </p>

      <h2 id="niche-specific">Niche-Specific Supplies</h2>
      <p>
        Your niche determines what additional supplies you carry beyond the basics. Post-op nurses, postpartum nurses, geriatric nurses, and IV therapy nurses each need specialized equipment tailored to their client population. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> includes detailed supply checklists for each concierge nursing niche.
      </p>

      <h2 id="organization">Organizing Your Bag for Efficiency</h2>
      <p>
        An organized bag saves time during visits and projects professionalism. Group items by function and know exactly where everything is so you can access supplies without searching. Efficiency in your bag translates to confidence in your client interactions.
      </p>

      <h2 id="restocking">Restocking and Maintenance</h2>
      <p>
        Build a restocking routine into your schedule — check supplies after each visit, do comprehensive inventory weekly, and track expiration dates. For a full picture of startup costs including supplies, see our <Link to="/resources/concierge-nursing-startup-costs" className="text-gold hover:text-gold/80 underline">startup costs guide</Link>.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What kind of bag should a concierge nurse use?</h3>
            <p>Look for a bag that is professional in appearance, durable, easy to clean, and organized with compartments. It should be large enough for your essential supplies but not so large that it looks cumbersome in a client home. Many nurses prefer structured bags that stand upright and open wide for easy access.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much should I spend on a nursing bag and initial supplies?</h3>
            <p>Plan to invest in quality equipment that will last. The bag itself plus essential supplies typically runs a few hundred dollars. This is a business expense that you use daily, so quality matters more than finding the cheapest option.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What supplies do I need for my first concierge nursing visit?</h3>
            <p>At minimum: blood pressure cuff, stethoscope, pulse oximeter, thermometer, penlight, gloves, hand sanitizer, basic wound care supplies, documentation materials, and your business cards. Your specific niche may require additional items.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should I restock my nursing bag?</h3>
            <p>Check and restock after every visit or at the end of each day. Do a comprehensive inventory weekly. Replace expired items immediately. Running out of supplies during a client visit is unprofessional and potentially dangerous.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

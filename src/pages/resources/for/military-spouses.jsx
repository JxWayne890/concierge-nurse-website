import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-ideal', text: "Why Concierge Nursing Is Ideal for Military Spouses" },
  { id: 'portability', text: "Building a Portable Practice" },
  { id: 'licensing', text: "Multi-State Licensing and the Nurse Licensure Compact" },
  { id: 'pcs-moves', text: "Handling PCS Moves" },
  { id: 'community', text: "Finding Community and Support" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "A Day in the Life of a Part-Time Concierge Nurse",
    description: "Flexible scheduling that works around military life.",
    link: '/resources/day-in-the-life/part-time-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: "How to Add Virtual Services",
    description: "Virtual services travel with you across PCS moves.",
    link: '/resources/scaling/add-virtual-services-concierge-nursing',
    category: 'Scaling',
  },
  {
    title: "What Is a Concierge Nurse?",
    description: "Understand the concierge model.",
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
      "name": "Is concierge nursing good for military spouses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The portable, flexible nature of concierge nursing aligns perfectly with military life. You own the business, set your schedule, and can rebuild in a new location faster than finding traditional employment after a PCS move."
      }
    },
    {
      "@type": "Question",
      "name": "How do I handle licensing when we move to a new state?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Nurse Licensure Compact (NLC) allows nurses to practice in multiple compact states with a single license. If you move to a non-compact state, you will need to apply for licensure there. Many states have expedited licensing for military spouses."
      }
    },
    {
      "@type": "Question",
      "name": "Can I maintain clients after a PCS move?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In-person clients will transition, but virtual services can continue across moves if you maintain appropriate licensing. Building a practice model that includes virtual components gives you continuity through relocations."
      }
    },
    {
      "@type": "Question",
      "name": "Are there resources specifically for military spouse nurse entrepreneurs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Small Business Administration offers programs for military spouse entrepreneurs, and several nursing organizations provide resources specifically for military-connected nurses. The Nurse Licensure Compact is also particularly valuable for military families."
      }
    }
  ]
};

export default function MilitarySpouses() {
  return (
    <ResourceLayout
      title={"Concierge Nursing for Military Spouse Nurses"}
      description={"Why concierge nursing is an ideal career model for military spouse nurses — portable, flexible, and built to move with you through PCS relocations."}
      canonical="/resources/for/concierge-nursing-military-spouses"
      category="For You"
      categorySlug="/resources/for"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Concierge nursing is one of the most military-spouse-friendly career models available to nurses. It is portable — you can rebuild a practice in any new location. It is flexible — you control your schedule around deployments and family demands. And it is yours — PCS moves do not mean starting over with a new employer. You take your business, your brand, and your skills with you.
        </p>
      </QuickAnswer>

      <h2 id="why-ideal">Why Concierge Nursing Is Ideal for Military Spouses</h2>
      <p>Military spouse nurses face unique career challenges: frequent relocations, unpredictable schedules around deployments, and the difficulty of building seniority when you move every two to three years. Traditional nursing employment often means restarting at the bottom with each PCS move. Concierge nursing eliminates this cycle because you own the business, and businesses move with you.</p>

      <h2 id="portability">Building a Portable Practice</h2>
      <p>Design your practice for portability from the start. Your brand, website, business systems, and clinical expertise are location-independent. When you move, you rebuild your local client base and referral network — but your business infrastructure, reputation, and skills come with you. Adding <Link to="/resources/scaling/add-virtual-services-concierge-nursing" className="text-gold hover:text-gold/80 underline">virtual services</Link> creates revenue streams that survive relocation.</p>

      <h2 id="licensing">Multi-State Licensing and the Nurse Licensure Compact</h2>
      <p>The Nurse Licensure Compact (NLC) is particularly valuable for military spouses. A compact license lets you practice in any NLC member state without additional licensure. Additionally, many states offer expedited licensing for military spouses, and some waive fees or waiting periods.</p>

      <h2 id="pcs-moves">Handling PCS Moves</h2>
      <p>Plan your PCS transitions strategically. Give current clients adequate notice, transition care to a colleague if possible, research your new market before you arrive, and plan to restart local marketing immediately. Many military spouse nurses find they can rebuild a full caseload within two to four months of arriving at a new duty station.</p>

      <h2 id="community">Finding Community and Support</h2>
      <p>Isolation is a challenge for both military spouses and solo concierge nurses — you face it doubly. Join the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link> for a community that moves with you. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> provides structure for building (and rebuilding) your practice efficiently.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is concierge nursing good for military spouses?</h3>
            <p>Yes. The portable, flexible nature of concierge nursing aligns perfectly with military life. You own the business, set your schedule, and can rebuild in a new location faster than finding traditional employment after a PCS move.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I handle licensing when we move to a new state?</h3>
            <p>The Nurse Licensure Compact (NLC) allows nurses to practice in multiple compact states with a single license. If you move to a non-compact state, you will need to apply for licensure there. Many states have expedited licensing for military spouses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I maintain clients after a PCS move?</h3>
            <p>In-person clients will transition, but virtual services can continue across moves if you maintain appropriate licensing. Building a practice model that includes virtual components gives you continuity through relocations.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are there resources specifically for military spouse nurse entrepreneurs?</h3>
            <p>Yes. The Small Business Administration offers programs for military spouse entrepreneurs, and several nursing organizations provide resources specifically for military-connected nurses. The Nurse Licensure Compact is also particularly valuable for military families.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

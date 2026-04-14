import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'signs-ready', text: "Signs You Are Ready to Scale" },
  { id: 'business-structure', text: "Business Structure for an Agency" },
  { id: 'employee-vs-contractor', text: "Employees vs. Independent Contractors" },
  { id: 'first-hire', text: "Making Your First Hire" },
  { id: 'systems', text: "Systems You Need Before Scaling" },
  { id: 'mindset-shift', text: "The Mindset Shift from Nurse to CEO" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "How to Hire Your First Subcontractor",
    description: "Practical steps for bringing on your first team member.",
    link: '/resources/scaling/hire-first-subcontractor-nursing',
    category: 'Scaling',
  },
  {
    title: "How to Create a Training Manual",
    description: "Standardize care delivery across your team.",
    link: '/resources/scaling/concierge-nursing-training-manual',
    category: 'Scaling',
  },
  {
    title: "A Day in the Life of a Multi-Nurse Practice Owner",
    description: "See what running a multi-nurse practice really looks like.",
    link: '/resources/day-in-the-life/multi-nurse-practice-owner',
    category: 'Day in the Life',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I consider scaling from solo nurse to agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you consistently turn away clients due to capacity, have a waitlist forming, receive more referrals than you can handle, and your business finances support the investment of hiring. Do not scale prematurely — ensure your solo practice is stable and profitable first."
      }
    },
    {
      "@type": "Question",
      "name": "Should I hire employees or independent contractors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on your business model, budget, and state laws. Independent contractors offer flexibility and lower overhead but limited control. Employees allow more control over care quality and scheduling but come with higher costs and regulatory requirements. Consult a healthcare attorney."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to scale to an agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs include additional liability insurance, business entity updates, hiring expenses, training materials, expanded software subscriptions, and potentially office space. The exact investment varies widely based on your model and market."
      }
    },
    {
      "@type": "Question",
      "name": "Can I still see clients as an agency owner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many agency owners maintain a personal caseload initially. Over time, you may choose to step back from direct care to focus on operations, or maintain a small number of VIP clients while your team handles the broader caseload."
      }
    }
  ]
};

export default function SoloToAgency() {
  return (
    <ResourceLayout
      title={"How to Go from Solo Concierge Nurse to Nursing Agency"}
      description={"The complete roadmap for scaling your solo concierge nursing practice into a multi-nurse agency — when to expand, how to structure, and what to expect."}
      canonical="/resources/scaling/solo-nurse-to-nursing-agency"
      category="Scaling"
      categorySlug="/resources/scaling"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Scaling from solo concierge nurse to agency is a significant business evolution that requires stable demand, solid systems, and a willingness to shift your identity from clinician to CEO. The process involves formalizing your business structure, choosing between employees and contractors, building operational systems, hiring your first team member, and developing training and quality assurance processes. Do not rush it — premature scaling can sink a thriving solo practice.
        </p>
      </QuickAnswer>

      <h2 id="signs-ready">Signs You Are Ready to Scale</h2>
      <p>
        Scaling should be driven by genuine demand and strategic opportunity. Key indicators include consistently turning away clients, referral sources asking about your availability, solid financial reserves, documented systems, and genuine excitement about building a business beyond just doing nursing.
      </p>

      <h2 id="business-structure">Business Structure for an Agency</h2>
      <p>
        Your solo LLC or PLLC may need updating for a multi-nurse operation. Consult a healthcare attorney about entity structure, insurance requirements, and state-specific agency licensing. The <Link to="/consulting" className="text-gold hover:text-gold/80 underline">Consulting program</Link> can connect you with guidance on these decisions.
      </p>

      <h2 id="employee-vs-contractor">Employees vs. Independent Contractors</h2>
      <p>
        This is one of the most consequential decisions in scaling, with significant legal and financial implications. Each model has different trade-offs around control, cost, and compliance. Get legal advice specific to your state before making this choice — worker misclassification carries serious penalties.
      </p>

      <h2 id="first-hire">Making Your First Hire</h2>
      <p>
        Your first hire sets the tone for your agency culture. Read our guide on <Link to="/resources/scaling/hire-first-subcontractor-nursing" className="text-gold hover:text-gold/80 underline">hiring your first subcontractor</Link> for an overview of what to look for. The <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> provides personalized guidance on building your team.
      </p>

      <h2 id="systems">Systems You Need Before Scaling</h2>
      <p>
        Before bringing on team members, you need documented systems — a <Link to="/resources/scaling/concierge-nursing-training-manual" className="text-gold hover:text-gold/80 underline">training manual</Link>, care protocols, scheduling systems, quality assurance processes, and proper <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">financial tracking</Link>. These systems are what allow your practice to scale without sacrificing quality.
      </p>

      <h2 id="mindset-shift">The Mindset Shift from Nurse to CEO</h2>
      <p>
        The hardest part of scaling is psychological — trusting someone else to deliver care at your standard and shifting your role from clinician to leader. The <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> provides personalized guidance on the operational and mindset elements that determine scaling success.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">When should I consider scaling from solo nurse to agency?</h3>
            <p>When you consistently turn away clients due to capacity, have a waitlist forming, receive more referrals than you can handle, and your business finances support the investment of hiring. Do not scale prematurely — ensure your solo practice is stable and profitable first.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I hire employees or independent contractors?</h3>
            <p>This depends on your business model, budget, and state laws. Independent contractors offer flexibility and lower overhead but limited control. Employees allow more control over care quality and scheduling but come with higher costs and regulatory requirements. Consult a healthcare attorney.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much does it cost to scale to an agency?</h3>
            <p>Costs include additional liability insurance, business entity updates, hiring expenses, training materials, expanded software subscriptions, and potentially office space. The exact investment varies widely based on your model and market.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I still see clients as an agency owner?</h3>
            <p>Many agency owners maintain a personal caseload initially. Over time, you may choose to step back from direct care to focus on operations, or maintain a small number of VIP clients while your team handles the broader caseload.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

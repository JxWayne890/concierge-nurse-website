import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'when-to-hire', text: "When It Is Time to Hire" },
  { id: 'finding-candidates', text: "Where to Find Qualified Nurses" },
  { id: 'vetting', text: "Vetting and Interviewing" },
  { id: 'contracts', text: "Subcontractor Agreements" },
  { id: 'training-onboarding', text: "Training and Onboarding" },
  { id: 'managing', text: "Managing the Relationship" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "How to Go from Solo Nurse to Agency",
    description: "The bigger picture of scaling your practice.",
    link: '/resources/scaling/solo-nurse-to-nursing-agency',
    category: 'Scaling',
  },
  {
    title: "How to Create a Training Manual",
    description: "Your training manual is essential before bringing on a subcontractor.",
    link: '/resources/scaling/concierge-nursing-training-manual',
    category: 'Scaling',
  },
  {
    title: "Vacation Policies for Solo Concierge Nurses",
    description: "A subcontractor can cover while you take time off.",
    link: '/resources/planning/concierge-nurse-vacation-policy',
    category: 'Planning',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I look for in a concierge nursing subcontractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clinical competence in your niche, reliability, strong interpersonal skills, professional presentation, and alignment with your care philosophy. A great hospital nurse is not automatically a great concierge nurse — the skills are different."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a written contract with subcontractors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. A subcontractor agreement should cover scope of work, compensation, scheduling expectations, non-compete terms, confidentiality, liability insurance requirements, and termination provisions. Have an attorney review it."
      }
    },
    {
      "@type": "Question",
      "name": "How do I train a subcontractor to match my quality standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Create a comprehensive training manual, shadow them on their first visits, provide clear documentation templates, establish quality checkpoints, and give regular feedback. Your training manual should capture everything that makes your care distinctive."
      }
    },
    {
      "@type": "Question",
      "name": "What if a subcontractor does not meet my standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Address concerns early and directly. Provide specific feedback, offer additional training if the issue is skill-based, and document everything. If performance does not improve, end the relationship per your contract terms. One poor subcontractor can damage your reputation."
      }
    }
  ]
};

export default function FirstSubcontractor() {
  return (
    <ResourceLayout
      title={"How to Hire Your First Subcontractor as a Concierge Nurse"}
      description={"Step-by-step guide to hiring your first subcontractor for your concierge nursing practice — contracts, vetting, training, and managing the relationship."}
      canonical="/resources/scaling/hire-first-subcontractor-nursing"
      category="Scaling"
      categorySlug="/resources/scaling"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Hiring your first subcontractor is the pivotal step between solo practice and agency. Do it right by documenting your systems first, writing a clear subcontractor agreement, vetting candidates thoroughly for both clinical skill and cultural fit, investing in proper training, and managing the relationship with regular communication and quality oversight.
        </p>
      </QuickAnswer>

      <h2 id="when-to-hire">When It Is Time to Hire</h2>
      <p>You are ready for a subcontractor when demand consistently exceeds your capacity, your systems are documented well enough to teach someone else, and your finances support the investment of onboarding and training. Do not hire reactively — hire proactively when you can dedicate time to training.</p>

      <h2 id="finding-candidates">Where to Find Qualified Nurses</h2>
      <p>The best subcontractors often come through your professional network — nurses you have worked with, colleagues from your hospital days, or members of your <Link to="/community" className="text-gold hover:text-gold/80 underline">professional community</Link>. Nursing social media groups, job boards, and referrals from other nurse entrepreneurs are also sources. Personal referrals are generally the highest quality.</p>

      <h2 id="vetting">Vetting and Interviewing</h2>
      <p>Beyond verifying licensure, certifications, and insurance, assess interpersonal skills, reliability, and alignment with your brand. Ask situational questions about client interactions, boundary setting, and emergency management. Consider a paid trial period where you shadow the candidate during actual visits.</p>

      <h2 id="contracts">Subcontractor Agreements</h2>
      <p>Your subcontractor agreement is a critical document. It should clearly define the scope of work, compensation structure, scheduling expectations, insurance requirements, confidentiality obligations, non-compete and non-solicitation terms, and termination provisions. Have a healthcare attorney review your agreement before using it.</p>

      <h2 id="training-onboarding">Training and Onboarding</h2>
      <p>Your <Link to="/resources/scaling/concierge-nursing-training-manual" className="text-gold hover:text-gold/80 underline">training manual</Link> is the foundation of onboarding. Beyond the manual, plan for shadowed visits, documentation review, client introduction protocols, and a structured feedback process during the first 30 days. The investment you make in training directly impacts client satisfaction and your reputation.</p>

      <h2 id="managing">Managing the Relationship</h2>
      <p>Subcontractor relationships require ongoing management: regular check-ins, documentation review, client feedback collection, and professional development support. The balance is maintaining quality and brand consistency while respecting the independence that defines the subcontractor relationship.</p>
      <p>For comprehensive guidance on building your team, the <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> provides personalized scaling advice.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should I look for in a concierge nursing subcontractor?</h3>
            <p>Clinical competence in your niche, reliability, strong interpersonal skills, professional presentation, and alignment with your care philosophy. A great hospital nurse is not automatically a great concierge nurse — the skills are different.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a written contract with subcontractors?</h3>
            <p>Absolutely. A subcontractor agreement should cover scope of work, compensation, scheduling expectations, non-compete terms, confidentiality, liability insurance requirements, and termination provisions. Have an attorney review it.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I train a subcontractor to match my quality standards?</h3>
            <p>Create a comprehensive training manual, shadow them on their first visits, provide clear documentation templates, establish quality checkpoints, and give regular feedback. Your training manual should capture everything that makes your care distinctive.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if a subcontractor does not meet my standards?</h3>
            <p>Address concerns early and directly. Provide specific feedback, offer additional training if the issue is skill-based, and document everything. If performance does not improve, end the relationship per your contract terms. One poor subcontractor can damage your reputation.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

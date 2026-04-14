import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-manual', text: "Why You Need a Training Manual" },
  { id: 'core-sections', text: "Core Sections to Include" },
  { id: 'clinical-protocols', text: "Clinical Protocols and Standards" },
  { id: 'brand-experience', text: "Brand and Client Experience Standards" },
  { id: 'keeping-current', text: "Keeping Your Manual Current" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "How to Hire Your First Subcontractor",
    description: "Your training manual is essential before your first hire.",
    link: '/resources/scaling/hire-first-subcontractor-nursing',
    category: 'Scaling',
  },
  {
    title: "How to Go from Solo Nurse to Agency",
    description: "Training systems are foundational to scaling.",
    link: '/resources/scaling/solo-nurse-to-nursing-agency',
    category: 'Scaling',
  },
  {
    title: "A Day in the Life of a Multi-Nurse Practice Owner",
    description: "See how practice owners use their training systems daily.",
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
      "name": "When should I create a training manual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideally, before your first hire. Start documenting your processes and standards as a solo nurse so you have the foundation ready. Your manual should capture everything that makes your practice distinctive and ensure consistency as you add team members."
      }
    },
    {
      "@type": "Question",
      "name": "What should a concierge nursing training manual include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Company overview and values, clinical protocols and standards, documentation requirements, client interaction guidelines, emergency procedures, scheduling and communication policies, dress code, and quality assurance expectations."
      }
    },
    {
      "@type": "Question",
      "name": "How long should a training manual be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Length matters less than usability. A concise, well-organized manual that covers essential topics is better than an exhaustive document no one reads. Start with the essentials and expand over time based on team feedback and real-world situations."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I update the training manual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Review and update at least annually. Update immediately when policies change, new services are added, or you identify gaps based on team performance or client feedback."
      }
    }
  ]
};

export default function TrainingManual() {
  return (
    <ResourceLayout
      title={"How to Create a Training Manual for Your Concierge Nursing Team"}
      description={"Build a training manual that ensures consistent, high-quality care across your concierge nursing team — what to include, how to structure it, and how to keep it current."}
      canonical="/resources/scaling/concierge-nursing-training-manual"
      category="Scaling"
      categorySlug="/resources/scaling"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A training manual ensures every nurse on your team delivers care that matches your standards and brand. It should cover your clinical protocols, documentation requirements, client experience standards, emergency procedures, and operational policies. Create it before your first hire, keep it current, and use it as the foundation for onboarding and ongoing quality assurance.
        </p>
      </QuickAnswer>

      <h2 id="why-manual">Why You Need a Training Manual</h2>
      <p>Your reputation is built on consistent quality. Without a training manual, each nurse on your team delivers care based on their own interpretation of good practice. A manual standardizes the client experience and protects your brand.</p>

      <h2 id="core-sections">Core Sections to Include</h2>
      <ul>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Company overview</strong> — Mission, values, and the client experience you aim to deliver</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Clinical protocols</strong> — Standard assessment procedures, documentation templates, and care delivery standards</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Client interaction guidelines</strong> — Communication standards, professionalism expectations, and boundary management</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Emergency procedures</strong> — What to do in clinical emergencies, who to call, and how to document</span></li>
        <li className="flex items-start gap-3"><CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} /><span><strong>Operational policies</strong> — Scheduling, cancellation, tardiness, and communication protocols</span></li>
      </ul>

      <h2 id="clinical-protocols">Clinical Protocols and Standards</h2>
      <p>Document your standard assessment workflows, vital sign parameters that require escalation, wound care protocols, medication management procedures, and documentation requirements. These protocols ensure clinical consistency across your team regardless of which nurse is providing care.</p>

      <h2 id="brand-experience">Brand and Client Experience Standards</h2>
      <p>Your training manual should capture the intangible elements that define your practice — how nurses greet clients, what they wear, how they communicate, and how they handle difficult situations. This is what differentiates your agency from a staffing company that sends whoever is available.</p>

      <h2 id="keeping-current">Keeping Your Manual Current</h2>
      <p>A training manual is a living document. Schedule annual reviews and update whenever policies change or gaps emerge. Encourage team members to flag situations the manual does not address — these are opportunities to strengthen your training.</p>
      <p>For help building your agency infrastructure, the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> provides frameworks for creating operational documents like training manuals.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">When should I create a training manual?</h3>
            <p>Ideally, before your first hire. Start documenting your processes and standards as a solo nurse so you have the foundation ready. Your manual should capture everything that makes your practice distinctive and ensure consistency as you add team members.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should a concierge nursing training manual include?</h3>
            <p>Company overview and values, clinical protocols and standards, documentation requirements, client interaction guidelines, emergency procedures, scheduling and communication policies, dress code, and quality assurance expectations.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long should a training manual be?</h3>
            <p>Length matters less than usability. A concise, well-organized manual that covers essential topics is better than an exhaustive document no one reads. Start with the essentials and expand over time based on team feedback and real-world situations.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should I update the training manual?</h3>
            <p>Review and update at least annually. Update immediately when policies change, new services are added, or you identify gaps based on team performance or client feedback.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

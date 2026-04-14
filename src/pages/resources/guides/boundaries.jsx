import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-boundaries-matter', text: 'Why Boundaries Are Essential' },
  { id: 'communication-boundaries', text: 'Communication Boundaries' },
  { id: 'scope-of-practice', text: 'Scope of Practice Boundaries' },
  { id: 'time-and-scheduling', text: 'Time and Scheduling Boundaries' },
  { id: 'personal-boundaries', text: 'Personal and Emotional Boundaries' },
  { id: 'how-to-communicate', text: 'How to Communicate Boundaries Professionally' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Create a Cancellation and No-Show Policy', description: 'A cancellation policy is one of your most important boundaries.', link: '/resources/guides/concierge-nurse-cancellation-policy', category: 'Guides' },
  { title: 'How to Document Client Visits as a Concierge Nurse', description: 'Documentation protects you when boundaries are tested.', link: '/resources/guides/concierge-nurse-client-documentation', category: 'Guides' },
  { title: 'How to Handle a Medical Emergency as a Concierge Nurse', description: 'Know when a situation exceeds your scope and boundaries.', link: '/resources/guides/concierge-nurse-medical-emergency', category: 'Guides' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I say no to a client request without losing the client?", "acceptedAnswer": { "@type": "Answer", "text": "Frame it positively. Instead of 'I cannot do that,' say 'To provide you with the best and safest care, what I can do is [alternative]. For [their request], I would recommend [appropriate referral].' Most clients appreciate when a nurse advocates for proper care rather than overstepping." } },
    { "@type": "Question", "name": "What if a client calls me at all hours?", "acceptedAnswer": { "@type": "Answer", "text": "Set communication hours in your service agreement from day one. Use a business phone system with after-hours voicemail. If a client persistently calls outside business hours for non-emergencies, have a direct but compassionate conversation about your availability and redirect them to 911 or their physician for after-hours concerns." } },
    { "@type": "Question", "name": "Should I give clients my personal phone number?", "acceptedAnswer": { "@type": "Answer", "text": "No. Use a dedicated business phone number for all client communications. This protects your personal privacy, creates professional boundaries, and makes it easier to separate work and personal life." } },
    { "@type": "Question", "name": "How do I handle a client who wants me to perform tasks outside my scope of practice?", "acceptedAnswer": { "@type": "Answer", "text": "Be clear and non-apologetic: 'That falls outside my scope of practice as a registered nurse, and performing it could put your safety at risk and jeopardize my license. Let me help you connect with the right provider for that.' Never compromise your nursing license for any client request." } },
    { "@type": "Question", "name": "Is it okay to become friends with clients?", "acceptedAnswer": { "@type": "Answer", "text": "While building rapport is important, maintaining a professional relationship protects both you and the client. Becoming too personally involved can cloud clinical judgment, create expectations of free or discounted services, and make it difficult to enforce policies. You can be warm and caring while maintaining professional distance." } }
  ]
};

export default function Boundaries() {
  return (
    <ResourceLayout title="How to Set Boundaries with Concierge Nursing Clients" description="Learn how to establish and maintain professional boundaries with concierge nursing clients, including communication limits, scope of practice, scheduling policies, and scripts for difficult conversations." canonical="/resources/guides/concierge-nurse-client-boundaries" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>Set boundaries proactively in your client service agreement before care begins. Clear expectations around communication hours, scope of services, and scheduling protect your license, prevent burnout, and allow you to deliver sustainable, excellent care.</p>
      </QuickAnswer>

      <p>The one-on-one, in-home nature of concierge nursing creates unique boundary challenges. Learning to set and enforce boundaries gracefully is one of the most important skills for long-term success and personal wellbeing in this business.</p>

      <h2 id="why-boundaries-matter">Why Boundaries Are Essential</h2>
      <p>Boundaries protect your nursing license, prevent burnout, maintain professionalism, and actually improve client outcomes. They are not walls — they are the framework for sustainable, excellent care.</p>

      <h2 id="communication-boundaries">Communication Boundaries</h2>
      <p>Define business hours, set response time expectations, use a separate <Link to="/resources/guides/hipaa-compliant-phone-nursing" className="text-gold hover:text-gold/80">business phone</Link>, and clarify emergency protocols. These boundaries should be established in writing before the first visit.</p>

      <h2 id="scope-of-practice">Scope of Practice Boundaries</h2>
      <p>Clients may not understand what a nurse can and cannot do. Your service agreement should clearly define your services and what falls outside your scope. Never compromise your license for any client request, and always redirect to the appropriate provider.</p>

      <h2 id="time-and-scheduling">Time and Scheduling Boundaries</h2>
      <p>Start and end visits on time. Enforce your <Link to="/resources/guides/concierge-nurse-cancellation-policy" className="text-gold hover:text-gold/80">cancellation policy</Link>. Charge for additional time. Protect your days off. These practices sustain your business and your energy.</p>

      <h2 id="personal-boundaries">Personal and Emotional Boundaries</h2>
      <p>Maintain professional relationships, limit personal disclosure, and have a clear policy on gifts. You can be warm and empathetic while keeping appropriate professional distance.</p>

      <h2 id="how-to-communicate">How to Communicate Boundaries Professionally</h2>
      <p>The key is establishing boundaries early, in writing, and reviewing them during intake. When enforcement is needed, the language and approach matter. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include service agreement templates with boundary language built in, and our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> covers boundary communication in depth.</p>

      <p>Strong boundaries are the foundation of meaningful client relationships. For more guidance, explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I say no to a client without losing them?</h3><p>Frame it positively by offering what you can do and providing an appropriate referral for what you cannot.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What if a client calls me at all hours?</h3><p>Set communication hours in your service agreement from day one and use a business phone with after-hours voicemail.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I give clients my personal phone number?</h3><p>No. Always use a dedicated business phone number.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I handle requests outside my scope of practice?</h3><p>Be clear and non-apologetic. Explain the safety concern and help connect them with the right provider.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it okay to become friends with clients?</h3><p>Maintain professional boundaries. Being warm is different from personal friendship.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

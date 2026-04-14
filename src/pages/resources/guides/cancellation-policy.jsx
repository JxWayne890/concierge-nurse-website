import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-you-need-policy', text: 'Why You Need a Cancellation Policy' },
  { id: 'what-to-include', text: 'What to Include in Your Policy' },
  { id: 'sample-policy', text: 'Sample Cancellation Policy Language' },
  { id: 'communicating-policy', text: 'How to Communicate Your Policy' },
  { id: 'enforcing-policy', text: 'How to Enforce Your Policy' },
  { id: 'special-situations', text: 'Handling Special Situations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Accept Payments as a Concierge Nurse', description: 'Set up payment processing that supports prepayment and deposits.', link: '/resources/guides/concierge-nurse-accept-payments', category: 'Guides' },
  { title: 'How to Set Boundaries with Concierge Nursing Clients', description: 'Your cancellation policy is one of your most important boundaries.', link: '/resources/guides/concierge-nurse-client-boundaries', category: 'Guides' },
  { title: 'Concierge Nurse Pricing Guide', description: 'Factor cancellation revenue protection into your pricing strategy.', link: '/resources/concierge-nurse-pricing-guide', category: 'Planning' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is a reasonable cancellation notice period for concierge nursing?", "acceptedAnswer": { "@type": "Answer", "text": "Most concierge nurses require 24 to 48 hours notice for cancellations. For premium or extended visits (such as overnight post-surgical care), 48 to 72 hours is common. The key is choosing a timeframe that gives you a reasonable opportunity to fill the slot." } },
    { "@type": "Question", "name": "Should I charge the full fee or a partial fee for cancellations?", "acceptedAnswer": { "@type": "Answer", "text": "Policies vary, but common approaches include charging 50% of the service fee for late cancellations and 100% for no-shows. Some nurses charge a flat cancellation fee instead of a percentage. Choose a structure that feels fair but adequately protects your income." } },
    { "@type": "Question", "name": "What if a client has a genuine medical emergency and needs to cancel?", "acceptedAnswer": { "@type": "Answer", "text": "Build discretion into your policy. A reasonable approach is to waive the fee for documented medical emergencies while maintaining the policy for convenience cancellations. State in your policy that emergency exceptions are at your discretion." } },
    { "@type": "Question", "name": "How do I enforce my cancellation policy without losing clients?", "acceptedAnswer": { "@type": "Answer", "text": "Enforce consistently from the start. If you waive the fee for one client but not another, you create inconsistency that breeds resentment. Communicate the policy clearly during onboarding, get written acknowledgment, and apply it uniformly. Most clients respect a professional who values their time." } },
    { "@type": "Question", "name": "Should I require a deposit or prepayment to reduce no-shows?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Collecting a deposit or full prepayment at the time of booking significantly reduces no-shows. Clients who have already paid are much more likely to keep their appointment or provide adequate notice if they need to reschedule." } }
  ]
};

export default function CancellationPolicy() {
  return (
    <ResourceLayout title="How to Create a Cancellation and No-Show Policy" description="Learn how to create, communicate, and enforce a cancellation and no-show policy for your concierge nursing business that protects your income while maintaining client relationships." canonical="/resources/guides/concierge-nurse-cancellation-policy" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>A standard concierge nursing cancellation policy requires 24 to 48 hours notice, charges a fee for late cancellations and no-shows, and is included in the client service agreement. Prepayment at booking is the most effective no-show prevention.</p>
      </QuickAnswer>

      <p>A single no-show wastes your preparation time, travel time, and blocks a slot another client could have used. For a concierge nurse seeing limited clients per day, a clear cancellation policy is essential for a sustainable business.</p>

      <h2 id="why-you-need-policy">Why You Need a Cancellation Policy</h2>
      <p>A cancellation policy protects your income, signals professionalism, reduces no-shows through financial accountability, and sets clear expectations from the beginning of the client relationship.</p>

      <h2 id="what-to-include">What to Include in Your Policy</h2>
      <p>Your policy should address the notice period, late cancellation fee, no-show fee, acceptable cancellation methods, rescheduling options, and emergency exceptions. Each element should be specific and clearly written.</p>

      <h2 id="sample-policy">Sample Cancellation Policy Language</h2>
      <p>The exact language matters for enforceability and professionalism. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include ready-to-use cancellation policy templates integrated into complete service agreement documents, so you do not have to draft this from scratch.</p>

      <h2 id="communicating-policy">How to Communicate Your Policy</h2>
      <p>Include it in your service agreement, review it verbally at intake, post it on your website, and reference it in appointment confirmations. The policy should never surprise a client.</p>

      <h2 id="enforcing-policy">How to Enforce Your Policy</h2>
      <p>Consistent, matter-of-fact enforcement from the beginning is key. Prepayment at booking is the single most effective prevention tool. Appointment reminders give clients a natural opportunity to reschedule within the policy window.</p>

      <h2 id="special-situations">Handling Special Situations</h2>
      <p>Medical emergencies, first-time offenders, and chronic cancellers each require different approaches. Having a framework for these situations prevents emotional decision-making. These scenarios are covered in detail in our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.</p>

      <p>A clear cancellation policy is a sign of a well-run business. For complete policy templates and business systems, explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What is a reasonable cancellation notice period?</h3><p>24 to 48 hours for standard visits. 48 to 72 hours for premium or extended services.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I charge the full fee or a partial fee?</h3><p>Common approach: 50% for late cancellations, 100% for no-shows. Choose what protects your income fairly.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What about genuine medical emergencies?</h3><p>Build discretionary exceptions into your policy for documented medical emergencies.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I enforce without losing clients?</h3><p>Enforce consistently from day one. Communicate clearly during onboarding. Most clients respect it.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I require a deposit to reduce no-shows?</h3><p>Yes. Prepayment is the most effective no-show prevention tool available.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

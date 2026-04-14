import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-scheduling', text: "Why Scheduling Software Matters" },
  { id: 'features', text: "Must-Have Features" },
  { id: 'solo-vs-team', text: "Solo Practice vs. Team Scheduling Needs" },
  { id: 'client-booking', text: "Client Self-Booking: Pros and Cons" },
  { id: 'integration', text: "Integration with Your Other Tools" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Best CRM Software for Concierge Nurses",
    description: "CRM and scheduling often work together for client management.",
    link: '/resources/best/crm-software-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: "A Day in the Life of a Part-Time Concierge Nurse",
    description: "Scheduling efficiency is critical for part-time nurses.",
    link: '/resources/day-in-the-life/part-time-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: "How to Hire Your First Subcontractor",
    description: "Team scheduling becomes essential with your first hire.",
    link: '/resources/scaling/hire-first-subcontractor-nursing',
    category: 'Scaling',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do concierge nurses need scheduling software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you see more than a few clients per week, yes. Scheduling software prevents double-bookings, sends automatic reminders to clients, optimizes your route between visits, and saves hours of manual scheduling each week."
      }
    },
    {
      "@type": "Question",
      "name": "Should clients be able to book their own appointments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your practice model. Self-booking works well for recurring wellness visits and routine follow-ups. For acute or post-surgical clients, you may want more control over scheduling to manage your clinical workload and availability."
      }
    },
    {
      "@type": "Question",
      "name": "Can scheduling software send appointment reminders to clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most modern scheduling tools include automated reminder features via email, text, or both. Appointment reminders reduce no-shows and late cancellations, which directly protects your revenue."
      }
    },
    {
      "@type": "Question",
      "name": "What scheduling features matter most for concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Calendar management, automated client reminders, mobile access, and travel time buffering between appointments. For multi-nurse practices, add team scheduling, nurse-client matching, and shift management."
      }
    }
  ]
};

export default function SchedulingSoftware() {
  return (
    <ResourceLayout
      title={"Best Scheduling Software for Concierge Nurses"}
      description={"Find the right scheduling software for your concierge nursing practice — compare features, pricing considerations, and how to choose based on your practice model."}
      canonical="/resources/best/scheduling-software-concierge-nurses"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          The right scheduling software saves concierge nurses hours per week, reduces no-shows, and keeps your practice running smoothly. For solo nurses, look for simple calendar management with automated client reminders. For growing practices, you need team scheduling, client self-booking, and integration with your CRM and accounting tools. Choose software that works on mobile — you manage your schedule from the road, not a desk.
        </p>
      </QuickAnswer>

      <h2 id="why-scheduling">Why Scheduling Software Matters</h2>
      <p>
        Beyond a handful of clients, manual scheduling leads to errors, double-bookings, and missed revenue. Good scheduling software creates a professional client experience with automated reminders that reduce no-shows and travel time buffers that keep your day running smoothly.
      </p>

      <h2 id="features">Must-Have Features</h2>
      <p>
        Prioritize mobile access, automated client reminders, travel time buffering between appointments, calendar sync, and recurring appointment support. The right tool depends on your practice size and whether you need client self-booking capabilities.
      </p>

      <h2 id="solo-vs-team">Solo Practice vs. Team Scheduling Needs</h2>
      <p>
        Solo nurses need straightforward calendar management. Multi-nurse practices need team scheduling with nurse-client assignment, multiple calendars, and coverage management. If you are <Link to="/resources/scaling/hire-first-subcontractor-nursing" className="text-gold hover:text-gold/80 underline">bringing on your first subcontractor</Link>, upgrade your scheduling before they start.
      </p>

      <h2 id="client-booking">Client Self-Booking: Pros and Cons</h2>
      <p>
        Self-booking reduces your administrative workload for routine visits but may not be appropriate for acute or post-surgical scheduling where you need clinical control over timing. Consider a hybrid approach based on your service types.
      </p>

      <h2 id="integration">Integration with Your Other Tools</h2>
      <p>
        Your scheduling software should integrate with your <Link to="/resources/best/crm-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">CRM</Link> and <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting software</Link>. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> helps you build a complete, integrated technology stack for your practice.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do concierge nurses need scheduling software?</h3>
            <p>If you see more than a few clients per week, yes. Scheduling software prevents double-bookings, sends automatic reminders to clients, optimizes your route between visits, and saves hours of manual scheduling each week.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should clients be able to book their own appointments?</h3>
            <p>It depends on your practice model. Self-booking works well for recurring wellness visits and routine follow-ups. For acute or post-surgical clients, you may want more control over scheduling to manage your clinical workload and availability.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can scheduling software send appointment reminders to clients?</h3>
            <p>Most modern scheduling tools include automated reminder features via email, text, or both. Appointment reminders reduce no-shows and late cancellations, which directly protects your revenue.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What scheduling features matter most for concierge nurses?</h3>
            <p>Calendar management, automated client reminders, mobile access, and travel time buffering between appointments. For multi-nurse practices, add team scheduling, nurse-client matching, and shift management.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

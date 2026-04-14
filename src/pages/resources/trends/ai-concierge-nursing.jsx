import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'ai-not-replacing', text: "AI Is Not Replacing Concierge Nurses" },
  { id: 'documentation', text: "AI for Documentation and Administration" },
  { id: 'remote-monitoring', text: "AI-Powered Remote Monitoring" },
  { id: 'client-communication', text: "Enhancing Client Communication" },
  { id: 'staying-human', text: "Keeping the Human Touch" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "The Future of Concierge Nursing",
    description: "Where the industry is heading.",
    link: '/resources/trends/future-of-concierge-nursing',
    category: 'Industry Trends',
  },
  {
    title: "How to Add Virtual Services",
    description: "Technology and AI work together in virtual care.",
    link: '/resources/scaling/add-virtual-services-concierge-nursing',
    category: 'Scaling',
  },
  {
    title: "Best Scheduling Software for Concierge Nurses",
    description: "AI is enhancing scheduling and practice management tools.",
    link: '/resources/best/scheduling-software-concierge-nurses',
    category: 'Best Of',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will AI replace concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Concierge nursing is built on personal relationships, clinical judgment, and the human touch — things AI cannot replicate. AI will make concierge nurses more efficient and effective, but the core value of one-on-one, relationship-based nursing care remains fundamentally human."
      }
    },
    {
      "@type": "Question",
      "name": "How can concierge nurses use AI right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Current AI applications for concierge nurses include documentation assistance (AI-powered note-taking), scheduling optimization, client communication automation, remote monitoring data analysis, and business analytics. These tools save time and improve accuracy."
      }
    },
    {
      "@type": "Question",
      "name": "Should I be worried about AI as a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. AI enhances rather than threatens concierge nursing. Clients choose concierge nurses specifically for personal, human care. AI helps you deliver that care more efficiently while handling administrative tasks that take time away from clients."
      }
    },
    {
      "@type": "Question",
      "name": "What AI tools should concierge nurses learn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with AI documentation tools, scheduling software with AI features, and basic AI assistants for business tasks. You do not need to become a technology expert — just be willing to adopt tools that make your practice more efficient."
      }
    }
  ]
};

export default function AIConciergeNursing() {
  return (
    <ResourceLayout
      title={"How AI Is Changing Concierge Nursing"}
      description={"Explore how artificial intelligence is affecting concierge nursing — from documentation tools to remote monitoring — and how to leverage AI without losing the human touch."}
      canonical="/resources/trends/ai-and-concierge-nursing"
      category="Industry Trends"
      categorySlug="/resources/trends"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          AI is changing concierge nursing by automating administrative tasks, enhancing remote monitoring capabilities, and improving practice management — not by replacing the human connection that defines concierge care. Smart concierge nurses are adopting AI tools to spend less time on documentation and more time with clients. The nurses who thrive will be those who use AI as an efficiency multiplier while doubling down on the personal relationships that no algorithm can replicate.
        </p>
      </QuickAnswer>

      <h2 id="ai-not-replacing">AI Is Not Replacing Concierge Nurses</h2>
      <p>This bears repeating because the fear is real: AI is not coming for your job. Concierge nursing exists precisely because patients want a human — a skilled, empathetic, present human — providing their care. AI cannot hold a nervous post-surgical patient's hand, read the subtle social cues in an elderly client's home, or build the trust that makes a new mother open up about her struggles.</p>

      <h2 id="documentation">AI for Documentation and Administration</h2>
      <p>Where AI delivers immediate value is in the tasks that take you away from clients. AI-powered documentation tools can transcribe visit notes, suggest clinical language, and reduce the time you spend on paperwork. Practice management AI can handle scheduling optimization, appointment reminders, and routine client communications.</p>

      <h2 id="remote-monitoring">AI-Powered Remote Monitoring</h2>
      <p>AI algorithms can analyze data from remote monitoring devices — blood pressure readings, glucose levels, activity patterns — and alert you to concerning trends before they become emergencies. For geriatric concierge nurses managing multiple clients, this predictive capability is genuinely valuable.</p>

      <h2 id="client-communication">Enhancing Client Communication</h2>
      <p>AI can help you maintain connection between visits through automated check-in messages, personalized health reminders, and educational content delivery. These touchpoints keep you top of mind with clients and demonstrate ongoing care without requiring your direct time for every interaction.</p>

      <h2 id="staying-human">Keeping the Human Touch</h2>
      <p>The risk of AI is not replacement — it is distraction. Do not let technology reduce the personal nature of your service. Use AI for the background work so you can be more present, more attentive, and more connected during every client interaction. That is your competitive advantage.</p>
      <p>Stay ahead of industry trends by joining the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link>. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> covers technology adoption as part of building a modern practice.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Will AI replace concierge nurses?</h3>
            <p>No. Concierge nursing is built on personal relationships, clinical judgment, and the human touch — things AI cannot replicate. AI will make concierge nurses more efficient and effective, but the core value of one-on-one, relationship-based nursing care remains fundamentally human.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How can concierge nurses use AI right now?</h3>
            <p>Current AI applications for concierge nurses include documentation assistance (AI-powered note-taking), scheduling optimization, client communication automation, remote monitoring data analysis, and business analytics. These tools save time and improve accuracy.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I be worried about AI as a concierge nurse?</h3>
            <p>No. AI enhances rather than threatens concierge nursing. Clients choose concierge nurses specifically for personal, human care. AI helps you deliver that care more efficiently while handling administrative tasks that take time away from clients.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What AI tools should concierge nurses learn?</h3>
            <p>Start with AI documentation tools, scheduling software with AI features, and basic AI assistants for business tasks. You do not need to become a technology expert — just be willing to adopt tools that make your practice more efficient.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

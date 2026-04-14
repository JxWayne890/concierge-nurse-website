import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'you-already-know-more', text: 'You Already Know More Than You Think' },
  { id: 'skills-you-need', text: 'The Business Skills You Actually Need' },
  { id: 'how-to-learn', text: 'How to Learn What You Do Not Know' },
  { id: 'common-fears', text: 'Common Fears Addressed' },
  { id: 'first-steps', text: 'Your First Steps' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "How to Overcome Imposter Syndrome as a Nurse Entrepreneur",
    description: "Address the feeling of not being qualified enough.",
    link: "/resources/mindset/nurse-entrepreneur-imposter-syndrome",
    category: "Mindset",
  },
  {
    title: "Am I Too Old to Start a Concierge Nursing Business?",
    description: "Your experience is an asset, not a limitation.",
    link: "/resources/mindset/too-old-to-start-nursing-business",
    category: "Mindset",
  },
  {
    title: "What If I Fail?",
    description: "Managing risk and fear in your nursing business.",
    link: "/resources/mindset/what-if-nursing-business-fails",
    category: "Mindset",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need a business degree to start a concierge nursing business?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. A business degree is not necessary. The business skills needed for a concierge nursing practice are learnable through structured programs, mentorship, and self-study. Your nursing degree and clinical experience are far more important." }
    },
    {
      "@type": "Question",
      "name": "What is the hardest business skill for nurses to learn?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most nurses find marketing and self-promotion the most challenging because nursing culture emphasizes humility and teamwork over self-promotion. Reframing marketing as client education helps overcome this." }
    },
    {
      "@type": "Question",
      "name": "Should I take a business course before starting?",
      "acceptedAnswer": { "@type": "Answer", "text": "A nursing-specific business program is more valuable than a generic business course because it addresses the unique aspects of healthcare entrepreneurship. Our Accelerator program is designed specifically for this purpose." }
    },
    {
      "@type": "Question",
      "name": "Can I hire someone to handle the business side?",
      "acceptedAnswer": { "@type": "Answer", "text": "As your business grows, you can outsource bookkeeping, marketing, and administration. However, understanding the basics yourself ensures you can make informed decisions and manage your team effectively." }
    },
    {
      "@type": "Question",
      "name": "What if I make mistakes?",
      "acceptedAnswer": { "@type": "Answer", "text": "You will make mistakes — every entrepreneur does. Mistakes in business are rarely catastrophic and are almost always fixable. The bigger mistake is never starting at all." }
    }
  ]
};

export default function NoBusinessExperience() {
  return (
    <ResourceLayout
      title="I Do Not Have Business Experience — Can I Still Start a Concierge Nursing Business?"
      description="Why clinical expertise is your foundation and how nurses with no business background can learn the essential business skills needed to launch a successful concierge nursing practice."
      canonical="/resources/mindset/start-nursing-business-no-experience"
      category="Mindset"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >

      <QuickAnswer>
        <p>
          Yes. The vast majority of successful concierge nurses started with zero formal business experience. Nursing school did not teach you how to run a business, but it taught you skills that directly transfer: critical thinking, problem-solving, time management, patient education, and the ability to learn complex new material quickly. The business skills you need are learnable and more straightforward than mastering pharmacology or pathophysiology.
        </p>
      </QuickAnswer>

      <p>
        If nursing school taught you anything, it taught you how to learn hard things fast. Business fundamentals feel intimidating because they are unfamiliar, not because they are beyond your capability.
      </p>

      <h2 id="you-already-know-more">You Already Know More Than You Think</h2>
      <p>
        Assessment and critical thinking, communication, time management, documentation, and working under pressure — these nursing skills translate directly to business. You are not starting from zero. You are building on a foundation of professional competence that most new business owners do not have.
      </p>

      <h2 id="skills-you-need">The Business Skills You Actually Need</h2>
      <p>
        The business side of concierge nursing involves formation basics, marketing, pricing and financial management, and client management. None of these are as complex as pharmacology or pathophysiology. They are learnable, practical skills.
      </p>

      <h2 id="how-to-learn">How to Learn What You Do Not Know</h2>
      <p>
        A nursing-specific business program is far more valuable than a generic business course because it addresses the unique aspects of healthcare entrepreneurship. Our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> is designed specifically for nurses with clinical expertise but no business background, providing structured learning, community support, and mentorship.
      </p>

      <h2 id="common-fears">Common Fears Addressed</h2>
      <p>
        "I am not good at math" — software handles the complex calculations. "I do not know marketing" — marketing is simply educating the right people about how you help them. "I do not know how to sell" — you are educating, not selling. These fears feel real but they do not match the reality of what running a concierge nursing business actually requires.
      </p>

      <h2 id="first-steps">Your First Steps</h2>
      <p>
        Visit our <Link to="/start-here" className="text-gold hover:text-gold/80">Start Here</Link> page for a structured roadmap, connect with our <Link to="/community" className="text-gold hover:text-gold/80">community</Link> of nurse entrepreneurs, and explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> for guided support from day one.
      </p>


      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a business degree to start a concierge nursing business?</h3>
            <p>No. A business degree is not necessary. The business skills needed for a concierge nursing practice are learnable through structured programs, mentorship, and self-study. Your nursing degree and clinical experience are far more important.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the hardest business skill for nurses to learn?</h3>
            <p>Most nurses find marketing and self-promotion the most challenging because nursing culture emphasizes humility and teamwork over self-promotion. Reframing marketing as client education helps overcome this.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I take a business course before starting?</h3>
            <p>A nursing-specific business program is more valuable than a generic business course because it addresses the unique aspects of healthcare entrepreneurship. Our Accelerator program is designed specifically for this purpose.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I hire someone to handle the business side?</h3>
            <p>As your business grows, you can outsource bookkeeping, marketing, and administration. However, understanding the basics yourself ensures you can make informed decisions and manage your team effectively.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if I make mistakes?</h3>
            <p>You will make mistakes — every entrepreneur does. Mistakes in business are rarely catastrophic and are almost always fixable. The bigger mistake is never starting at all.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

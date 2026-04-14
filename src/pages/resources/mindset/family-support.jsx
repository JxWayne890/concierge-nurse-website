import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-family-matters', text: 'Why Family Support Matters' },
  { id: 'having-the-conversation', text: 'Having the Conversation' },
  { id: 'addressing-concerns', text: 'Addressing Common Family Concerns' },
  { id: 'involving-family', text: 'Involving Your Family in the Journey' },
  { id: 'when-family-disagrees', text: 'When Your Family Disagrees' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "What If I Fail?",
    description: "Address the financial risk concerns your family may have.",
    link: "/resources/mindset/what-if-nursing-business-fails",
    category: "Mindset",
  },
  {
    title: "Is It Selfish to Leave Bedside Nursing?",
    description: "Process the guilt that may affect family conversations.",
    link: "/resources/mindset/is-it-selfish-to-leave-bedside-nursing",
    category: "Mindset",
  },
  {
    title: "Can I Make Six Figures?",
    description: "Share the income potential with your family.",
    link: "/resources/mindset/can-concierge-nurses-make-six-figures",
    category: "Mindset",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What if my spouse is not supportive of starting a business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Have a prepared conversation with specific numbers and a clear plan. Address their concerns directly and honestly. If they remain unsupportive, seek outside mentorship and demonstrate progress through small, low-risk actions." }
    },
    {
      "@type": "Question",
      "name": "Should I start the business without telling my family?",
      "acceptedAnswer": { "@type": "Answer", "text": "This is not recommended, especially if you share finances with a partner. Transparency builds trust and prevents conflict. An honest conversation, even a difficult one, is better than secrecy." }
    },
    {
      "@type": "Question",
      "name": "How do I handle family members who think nursing entrepreneurship is not a real business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Educate them about the concierge nursing model, share examples of successful practices, and let your progress speak for itself. Some people need to see evidence before they understand the opportunity." }
    },
    {
      "@type": "Question",
      "name": "What if starting the business means less family time initially?",
      "acceptedAnswer": { "@type": "Answer", "text": "Be honest about the time investment required during the startup phase. Discuss a realistic timeline for when the business will provide more schedule flexibility, and set specific family time that is protected." }
    },
    {
      "@type": "Question",
      "name": "Can my family help with the business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Many concierge nurses involve family members in appropriate ways — branding, social media, administrative tasks, or simply being a sounding board for ideas. Involving family can build investment in the business success." }
    }
  ]
};

export default function FamilySupport() {
  return (
    <ResourceLayout
      title="How to Get Your Family on Board with Your Concierge Nursing Business"
      description="Practical strategies for having the conversation with your family about starting a concierge nursing business, addressing financial concerns, and building household support for your entrepreneurial journey."
      canonical="/resources/mindset/family-support-nursing-business"
      category="Mindset"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >

      <QuickAnswer>
        <p>
          Start with an honest, prepared conversation. Present your plan with specific numbers — startup costs, timeline to profitability, and risk mitigation steps (like starting while employed). Address their concerns directly rather than dismissing them. Involve your family in the journey by sharing your progress and celebrating milestones together. Most families become supportive once they understand the plan, the timeline, and that the risk is manageable.
        </p>
      </QuickAnswer>

      <p>
        Starting a business is a family decision, especially when it involves leaving stable employment or investing family savings. Your family's concerns deserve to be heard. The goal is to bring them alongside you with understanding and shared commitment.
      </p>

      <h2 id="why-family-matters">Why Family Support Matters</h2>
      <p>
        Emotional support makes difficult days manageable. Practical support with household logistics creates space for focused work. Financial alignment prevents conflict. And reduced household stress frees your energy for building the business. Family support is not optional — it is a success factor.
      </p>

      <h2 id="having-the-conversation">Having the Conversation</h2>
      <p>
        Coming with a plan rather than just a dream makes this conversation productive. Understanding what concierge nursing is, sharing the "why" behind your decision, and genuinely listening to concerns are all essential. How to structure this conversation effectively is something we help with in our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.
      </p>

      <h2 id="addressing-concerns">Addressing Common Family Concerns</h2>
      <p>
        "Can we afford this?" "What if it does not work?" "Why not stay at the hospital?" "Will this take time away from family?" — these are the questions your family will likely ask. Each has a genuine, reassuring answer grounded in the reality of concierge nursing as a business model. Our program prepares you to address each one with confidence.
      </p>

      <h2 id="involving-family">Involving Your Family in the Journey</h2>
      <p>
        Sharing milestones, letting family members help where appropriate, and celebrating wins together builds household investment in your success. When the business succeeds, it is a family achievement.
      </p>

      <h2 id="when-family-disagrees">When Your Family Disagrees</h2>
      <p>
        If family remains unsupportive despite your best efforts, seek support outside — our <Link to="/community" className="text-gold hover:text-gold/80">community</Link> of nurse entrepreneurs understands what you are going through. Demonstrate through action rather than argument. Set boundaries around negativity while remaining open to legitimate concerns. And remember that ultimately, this is your career decision.
      </p>

      <p>
        Building family support is part of building a sustainable business. For structured guidance, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>


      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if my spouse is not supportive of starting a business?</h3>
            <p>Have a prepared conversation with specific numbers and a clear plan. Address their concerns directly and honestly. If they remain unsupportive, seek outside mentorship and demonstrate progress through small, low-risk actions.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I start the business without telling my family?</h3>
            <p>This is not recommended, especially if you share finances with a partner. Transparency builds trust and prevents conflict. An honest conversation, even a difficult one, is better than secrecy.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I handle family members who think nursing entrepreneurship is not a real business?</h3>
            <p>Educate them about the concierge nursing model, share examples of successful practices, and let your progress speak for itself. Some people need to see evidence before they understand the opportunity.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if starting the business means less family time initially?</h3>
            <p>Be honest about the time investment required during the startup phase. Discuss a realistic timeline for when the business will provide more schedule flexibility, and set specific family time that is protected.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can my family help with the business?</h3>
            <p>Many concierge nurses involve family members in appropriate ways — branding, social media, administrative tasks, or simply being a sounding board for ideas. Involving family can build investment in the business success.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-imposter-syndrome', text: 'What Is Imposter Syndrome?' },
  { id: 'why-nurses', text: 'Why Nurses Are Especially Vulnerable' },
  { id: 'how-it-shows-up', text: 'How It Shows Up in Business' },
  { id: 'strategies', text: 'Strategies to Overcome It' },
  { id: 'daily-practices', text: 'Daily Confidence Practices' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "I Do Not Have Business Experience",
    description: "Your nursing skills transfer more than you realize.",
    link: "/resources/mindset/start-nursing-business-no-experience",
    category: "Mindset",
  },
  {
    title: "What If I Fail?",
    description: "Understanding real versus imagined risk.",
    link: "/resources/mindset/what-if-nursing-business-fails",
    category: "Mindset",
  },
  {
    title: "Is It Selfish to Leave Bedside Nursing?",
    description: "Release the guilt of pursuing something new.",
    link: "/resources/mindset/is-it-selfish-to-leave-bedside-nursing",
    category: "Mindset",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is imposter syndrome a sign that I should not start a business?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. It is a sign that you care about doing excellent work. Imposter syndrome affects high achievers disproportionately. It is a signal of ambition, not incompetence." }
    },
    {
      "@type": "Question",
      "name": "Will imposter syndrome go away once my business is established?",
      "acceptedAnswer": { "@type": "Answer", "text": "It tends to diminish as you gain evidence of success — client satisfaction, referrals, income growth. However, it can resurface whenever you stretch into new territory, which is normal and manageable." }
    },
    {
      "@type": "Question",
      "name": "How do I price my services if I feel I am not worth premium rates?",
      "acceptedAnswer": { "@type": "Answer", "text": "Base your pricing on the value you provide and market rates, not on how you feel about yourself. Your rates should reflect your clinical expertise, not your current confidence level." }
    },
    {
      "@type": "Question",
      "name": "Should I wait until I feel confident to launch?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Waiting for confidence before acting is a trap. Confidence is built through action and evidence. Launch, learn, adjust, and your confidence will follow." }
    },
    {
      "@type": "Question",
      "name": "Does everyone feel this way when starting a business?",
      "acceptedAnswer": { "@type": "Answer", "text": "The vast majority of new entrepreneurs experience self-doubt, especially those transitioning from employment to self-employment. You are not alone, and the feeling is not a predictor of failure." }
    }
  ]
};

export default function ImposterSyndrome() {
  return (
    <ResourceLayout
      title="How to Overcome Imposter Syndrome as a Nurse Entrepreneur"
      description="Understand why imposter syndrome is so common among nurse entrepreneurs and learn practical strategies to build confidence as you launch your concierge nursing business."
      canonical="/resources/mindset/nurse-entrepreneur-imposter-syndrome"
      category="Mindset"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >

      <QuickAnswer>
        <p>
          Imposter syndrome — the persistent feeling that you are not qualified enough despite clear evidence of your competence — is extremely common among nurse entrepreneurs. The shift from employee to business owner triggers identity uncertainty. The most effective strategies include acknowledging the feeling without obeying it, focusing on your documented clinical experience, taking action before you feel ready, and surrounding yourself with other nurses who understand the journey.
        </p>
      </QuickAnswer>

      <p>
        You have spent years providing critical care, saving lives, and making complex clinical decisions under pressure. Yet the moment you consider starting your own business, a voice says: "Who are you to do this?" That voice is imposter syndrome, and it affects accomplished professionals far more than those who lack actual competence.
      </p>

      <h2 id="what-is-imposter-syndrome">What Is Imposter Syndrome?</h2>
      <p>
        Imposter syndrome is the psychological pattern of doubting your accomplishments and fearing being "found out" as a fraud — despite objective evidence of competence. Research shows it disproportionately affects high achievers in demanding fields, which is exactly the profile of a nurse considering entrepreneurship.
      </p>

      <h2 id="why-nurses">Why Nurses Are Especially Vulnerable</h2>
      <p>
        Nursing culture emphasizes teamwork and humility over self-promotion. Your identity may be tied to your employer rather than yourself. Nursing demands perfection while entrepreneurship demands action amid uncertainty. And the healthcare system has likely undervalued you for years, eroding the self-worth needed to charge premium rates. All of these factors make imposter syndrome particularly common among nurse entrepreneurs.
      </p>

      <h2 id="how-it-shows-up">How It Shows Up in Business</h2>
      <p>
        Underpricing your services, perpetual preparation without launching, avoiding visibility and marketing, and constantly comparing yourself to others are all manifestations of imposter syndrome in business. Recognizing these patterns is the first step toward overcoming them.
      </p>

      <h2 id="strategies">Strategies to Overcome It</h2>
      <p>
        Documenting your qualifications, reframing "I am not a business person" to "I am a nurse learning business," taking action before feeling ready, and connecting with a <Link to="/community" className="text-gold hover:text-gold/80">community</Link> that normalizes these struggles are all effective approaches. Confidence comes from action and evidence, not the other way around.
      </p>

      <h2 id="daily-practices">Daily Confidence Practices</h2>
      <p>
        Building confidence as a nurse entrepreneur is an ongoing practice, not a one-time achievement. Our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> includes mindset development alongside business skills because we know that the inner work is just as important as the tactical work. You are surrounded by nurses who understand exactly what you are going through.
      </p>

      <p>
        Imposter syndrome does not disqualify you — it is a sign you are stretching beyond your comfort zone. For guided support, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>


      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is imposter syndrome a sign that I should not start a business?</h3>
            <p>No. It is a sign that you care about doing excellent work. Imposter syndrome affects high achievers disproportionately. It is a signal of ambition, not incompetence.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Will imposter syndrome go away once my business is established?</h3>
            <p>It tends to diminish as you gain evidence of success — client satisfaction, referrals, income growth. However, it can resurface whenever you stretch into new territory, which is normal and manageable.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I price my services if I feel I am not worth premium rates?</h3>
            <p>Base your pricing on the value you provide and market rates, not on how you feel about yourself. Your rates should reflect your clinical expertise, not your current confidence level.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I wait until I feel confident to launch?</h3>
            <p>No. Waiting for confidence before acting is a trap. Confidence is built through action and evidence. Launch, learn, adjust, and your confidence will follow.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Does everyone feel this way when starting a business?</h3>
            <p>The vast majority of new entrepreneurs experience self-doubt, especially those transitioning from employment to self-employment. You are not alone, and the feeling is not a predictor of failure.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

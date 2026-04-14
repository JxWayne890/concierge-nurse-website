import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'the-guilt', text: 'Understanding the Guilt' },
  { id: 'reframing', text: 'Reframing the Narrative' },
  { id: 'expanding-impact', text: 'How Concierge Nursing Expands Your Impact' },
  { id: 'your-wellbeing', text: 'Your Wellbeing Matters Too' },
  { id: 'making-the-transition', text: 'Making the Transition' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "How to Overcome Imposter Syndrome",
    description: "Build confidence in your new role as a nurse entrepreneur.",
    link: "/resources/mindset/nurse-entrepreneur-imposter-syndrome",
    category: "Mindset",
  },
  {
    title: "What If I Fail?",
    description: "Understanding and managing the real risks.",
    link: "/resources/mindset/what-if-nursing-business-fails",
    category: "Mindset",
  },
  {
    title: "How to Get Your Family on Board",
    description: "Navigate the transition with family support.",
    link: "/resources/mindset/family-support-nursing-business",
    category: "Mindset",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Am I abandoning my patients by leaving bedside nursing?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Your patients are cared for by the institution, not by you personally. When you leave, the hospital will fill your position. You are making a career decision, not abandoning anyone." }
    },
    {
      "@type": "Question",
      "name": "Can I still make a difference as a concierge nurse?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Many concierge nurses report making a deeper impact on individual patients than they ever could in a hospital setting, where time and staffing constraints limit personalized care." }
    },
    {
      "@type": "Question",
      "name": "What if my colleagues judge me for leaving?",
      "acceptedAnswer": { "@type": "Answer", "text": "Some may not understand your decision, and that is okay. Many will privately admire your courage. The colleagues who truly support you will be happy to see you thrive." }
    },
    {
      "@type": "Question",
      "name": "Should I feel guilty about making more money outside the hospital?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Your expertise has value. The hospital system undercompensates nurses relative to the value they provide. Earning what your skills are worth is not something to feel guilty about." }
    },
    {
      "@type": "Question",
      "name": "Can I go back to bedside nursing if concierge nursing does not work out?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your nursing license and clinical experience do not disappear. The nursing shortage means bedside positions are available. Trying something new does not close the door on going back." }
    }
  ]
};

export default function LeavingBedside() {
  return (
    <ResourceLayout
      title="Is It Selfish to Leave Bedside Nursing?"
      description="Address the guilt many nurses feel about leaving hospital nursing and understand why pursuing concierge nursing can actually expand your impact on patient care."
      canonical="/resources/mindset/is-it-selfish-to-leave-bedside-nursing"
      category="Mindset"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >

      <QuickAnswer>
        <p>
          No. Leaving bedside nursing is not selfish. It is a professional decision that allows you to practice nursing in a way that may actually serve patients more deeply — with more time, more personalization, and more autonomy. The guilt you feel is a product of a healthcare system that has conditioned nurses to equate self-sacrifice with value. You can still make a profound impact on patient care without sacrificing your own health, happiness, and professional fulfillment.
        </p>
      </QuickAnswer>

      <p>
        If you are reading this, you probably already know you want to leave bedside nursing. But something is holding you back — a sense of obligation, guilt about "abandoning" your colleagues, or the belief that choosing yourself is somehow selfish.
      </p>

      <h2 id="the-guilt">Understanding the Guilt</h2>
      <p>
        The guilt has specific sources: nursing culture glorifies self-sacrifice, understaffed units make every departure feel personal, your identity may be tied to "bedside nurse," and the calling narrative makes leaving feel like abandonment. These feelings are real and deserve to be examined honestly.
      </p>

      <h2 id="reframing">Reframing the Narrative</h2>
      <p>
        You are not leaving nursing — you are changing how and where you practice it. Staffing is a system problem, not your personal responsibility. Burnout helps no one. And wanting a sustainable, fulfilling career is not selfish — it is rational and healthy. You deserve a career that sustains you financially, emotionally, and physically.
      </p>

      <h2 id="expanding-impact">How Concierge Nursing Expands Your Impact</h2>
      <p>
        Concierge nursing often allows deeper patient relationships, truly personalized care, and the ability to fill critical care gaps for patients discharged too early or recovering alone. Many concierge nurses report making a deeper impact on individual patients than they ever could in a hospital setting. You are not diminishing your impact — you may be expanding it.
      </p>

      <h2 id="your-wellbeing">Your Wellbeing Matters Too</h2>
      <p>
        Healthcare workers experience some of the highest rates of burnout and compassion fatigue of any profession. Choosing a career path that protects your health is necessary, not selfish. You cannot pour from an empty cup.
      </p>

      <h2 id="making-the-transition">Making the Transition</h2>
      <p>
        Give yourself permission to want something different. Connect with nurses who have made the transition in our <Link to="/community" className="text-gold hover:text-gold/80">community</Link>. You are not leaving nursing — you are evolving within it. For guidance on building your next chapter, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>


      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Am I abandoning my patients by leaving bedside nursing?</h3>
            <p>No. Your patients are cared for by the institution, not by you personally. When you leave, the hospital will fill your position. You are making a career decision, not abandoning anyone.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I still make a difference as a concierge nurse?</h3>
            <p>Absolutely. Many concierge nurses report making a deeper impact on individual patients than they ever could in a hospital setting, where time and staffing constraints limit personalized care.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if my colleagues judge me for leaving?</h3>
            <p>Some may not understand your decision, and that is okay. Many will privately admire your courage. The colleagues who truly support you will be happy to see you thrive.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I feel guilty about making more money outside the hospital?</h3>
            <p>No. Your expertise has value. The hospital system undercompensates nurses relative to the value they provide. Earning what your skills are worth is not something to feel guilty about.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I go back to bedside nursing if concierge nursing does not work out?</h3>
            <p>Yes. Your nursing license and clinical experience do not disappear. The nursing shortage means bedside positions are available. Trying something new does not close the door on going back.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

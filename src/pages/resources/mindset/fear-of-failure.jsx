import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'real-vs-imagined', text: 'Real Risk vs. Imagined Risk' },
  { id: 'actual-costs', text: 'The Actual Costs of Starting' },
  { id: 'risk-mitigation', text: 'Practical Risk Mitigation' },
  { id: 'redefining-failure', text: 'Redefining Failure' },
  { id: 'worst-case', text: 'The Worst-Case Scenario' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "How to Overcome Imposter Syndrome",
    description: "Address the self-doubt that accompanies risk-taking.",
    link: "/resources/mindset/nurse-entrepreneur-imposter-syndrome",
    category: "Mindset",
  },
  {
    title: "Can I Make Six Figures as a Concierge Nurse?",
    description: "Understand the realistic income potential.",
    link: "/resources/mindset/can-concierge-nurses-make-six-figures",
    category: "Mindset",
  },
  {
    title: "How to Get Your Family on Board",
    description: "Navigate risk decisions with family support.",
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
      "name": "What is the worst that can happen if my concierge nursing business fails?",
      "acceptedAnswer": { "@type": "Answer", "text": "You lose your initial investment (typically $1,500 to $5,000) and the time you invested. Your nursing license, clinical skills, and employability remain intact. Most nurses find the skills they gained during the attempt are valuable regardless." }
    },
    {
      "@type": "Question",
      "name": "How much money do I need saved before starting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Budget $1,500 to $5,000 for startup costs. If planning to transition away from employment, save 3 to 6 months of personal expenses as a financial cushion. Many nurses start while still working to eliminate income pressure." }
    },
    {
      "@type": "Question",
      "name": "Can I go back to hospital nursing if my business does not work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The nursing shortage means hospital positions are widely available. Your license and experience do not disappear because you tried entrepreneurship." }
    },
    {
      "@type": "Question",
      "name": "How do I know if the business is going to work before I invest?",
      "acceptedAnswer": { "@type": "Answer", "text": "You cannot know with certainty, but you can reduce uncertainty by researching your local market, talking to potential referral sources, and starting while still employed to test demand before fully committing." }
    },
    {
      "@type": "Question",
      "name": "Is it better to start full-time or part-time?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most nurses benefit from starting part-time while still employed. This provides income stability, reduces pressure, and allows you to build the business gradually while validating demand." }
    }
  ]
};

export default function FearOfFailure() {
  return (
    <ResourceLayout
      title="What If I Fail? Managing Risk in Your Concierge Nursing Business"
      description="Understand the real (not imagined) risks of starting a concierge nursing business, learn practical risk mitigation strategies, and redefine what failure actually means."
      canonical="/resources/mindset/what-if-nursing-business-fails"
      category="Mindset"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >

      <QuickAnswer>
        <p>
          The financial risk of starting a concierge nursing business is relatively low compared to most businesses. Startup costs are modest, you do not need inventory or a physical location, and your nursing license gives you a safety net — you can always return to employment. The bigger risk is not starting at all and spending years wondering "what if." With practical risk mitigation (starting while employed, keeping expenses low, building gradually), you can test the waters without betting everything.
        </p>
      </QuickAnswer>

      <p>
        The fear of failure is one of the most common reasons nurses never start. It is also one of the least examined. When you actually dissect what "failure" means in this context, the fear becomes much more manageable.
      </p>

      <h2 id="real-vs-imagined">Real Risk vs. Imagined Risk</h2>
      <p>
        Fear magnifies risk. When you imagine failure, your mind jumps to catastrophic scenarios. The reality is far less dramatic: concierge nursing requires no massive upfront investment, no debt, no inventory, and no storefront. And your nursing license — your ultimate safety net — stays with you no matter what.
      </p>

      <h2 id="actual-costs">The Actual Costs of Starting</h2>
      <p>
        Startup costs for a concierge nursing business are modest compared to most businesses. Understanding the real financial exposure — rather than imagined worst cases — helps put risk in proper perspective. Our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> includes detailed financial planning so you know exactly what to budget.
      </p>

      <h2 id="risk-mitigation">Practical Risk Mitigation</h2>
      <p>
        Starting while still employed, building a financial cushion, keeping startup costs minimal, and setting a timeline for evaluation are all practical approaches to managing risk. These strategies allow you to test the waters without betting everything. Our program teaches you how to structure your launch for minimal risk.
      </p>

      <h2 id="redefining-failure">Redefining Failure</h2>
      <p>
        Starting and discovering you prefer a different model is not failure — it is market research. Returning to employment is not failure — it is making an informed decision. The business skills, confidence, and self-knowledge you gain are yours regardless of outcome. The only true failure is never trying.
      </p>

      <h2 id="worst-case">The Worst-Case Scenario</h2>
      <p>
        The honest worst case: you invest some money and time, the business does not generate what you hoped, and you close it. You still have your license, your skills, and a job market that needs nurses. Now compare that to the alternative: years of wondering "what if." Which is actually worse?
      </p>

      <p>
        Fear is normal. Letting it make your decisions is optional. For structured support in launching with minimized risk, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>


      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the worst that can happen if my concierge nursing business fails?</h3>
            <p>You lose your initial investment (typically $1,500 to $5,000) and the time you invested. Your nursing license, clinical skills, and employability remain intact. Most nurses find the skills they gained during the attempt are valuable regardless.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much money do I need saved before starting?</h3>
            <p>Budget $1,500 to $5,000 for startup costs. If planning to transition away from employment, save 3 to 6 months of personal expenses as a financial cushion. Many nurses start while still working to eliminate income pressure.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I go back to hospital nursing if my business does not work?</h3>
            <p>Yes. The nursing shortage means hospital positions are widely available. Your license and experience do not disappear because you tried entrepreneurship.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I know if the business is going to work before I invest?</h3>
            <p>You cannot know with certainty, but you can reduce uncertainty by researching your local market, talking to potential referral sources, and starting while still employed to test demand before fully committing.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it better to start full-time or part-time?</h3>
            <p>Most nurses benefit from starting part-time while still employed. This provides income stability, reduces pressure, and allows you to build the business gradually while validating demand.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

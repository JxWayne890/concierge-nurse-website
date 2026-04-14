import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'income', text: "Income Comparison" },
  { id: 'schedule', text: "Schedule and Lifestyle" },
  { id: 'autonomy', text: "Professional Autonomy" },
  { id: 'risk', text: "Risk and Security" },
  { id: 'fulfillment', text: "Professional Fulfillment" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Why Hospital Nurses Are Leaving for Entrepreneurship",
    description: "The workforce trend behind this comparison.",
    link: '/resources/trends/nurses-leaving-hospitals-entrepreneurship',
    category: 'Industry Trends',
  },
  {
    title: "What Is a Concierge Nurse?",
    description: "Understand the concierge nursing model in detail.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
  {
    title: "Concierge Nursing Startup Costs",
    description: "The financial reality of starting your own practice.",
    link: '/resources/concierge-nursing-startup-costs',
    category: 'Getting Started',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do concierge nurses earn more than hospital nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Income potential is higher but variable. Concierge nurses who build successful practices can significantly out-earn their hospital salary. However, income depends on business skills, client volume, and market. There is no guaranteed paycheck."
      }
    },
    {
      "@type": "Question",
      "name": "Do concierge nurses get benefits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not from an employer. As a business owner, you are responsible for your own health insurance, retirement savings, paid time off, and other benefits. These costs must be factored into your pricing and financial planning."
      }
    },
    {
      "@type": "Question",
      "name": "Which is more stable — hospital nursing or concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hospital employment offers more predictable income. Concierge nursing offers more control over your career trajectory. \"Stability\" means different things to different people — some find stability in a paycheck, others in owning their career."
      }
    },
    {
      "@type": "Question",
      "name": "Can I try concierge nursing without leaving my hospital job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and many nurses do exactly this. Starting part-time while maintaining your hospital position lets you build your practice gradually, test the model, and transition when you are ready financially and professionally."
      }
    }
  ]
};

export default function BusinessModelComparison() {
  return (
    <ResourceLayout
      title={"The Concierge Nursing Business Model vs. Traditional Healthcare Employment"}
      description={"A side-by-side comparison of the concierge nursing business model and traditional nursing employment — income, lifestyle, autonomy, risk, and long-term potential."}
      canonical="/resources/trends/concierge-nursing-vs-traditional-employment"
      category="Industry Trends"
      categorySlug="/resources/trends"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          The concierge nursing business model and traditional healthcare employment offer fundamentally different trade-offs. Traditional employment provides income stability, employer benefits, and lower financial risk. Concierge nursing offers higher income potential, schedule flexibility, professional autonomy, and the ability to deliver care on your terms. Neither is universally better — the right choice depends on your priorities, risk tolerance, and career goals.
        </p>
      </QuickAnswer>

      <h2 id="income">Income Comparison</h2>
      <p>Hospital nurses earn a predictable salary with overtime opportunities and shift differentials. Concierge nurses set their own rates and have no income ceiling, but income depends on business skills and client volume. In the early months, concierge income may be lower than hospital pay. Established concierge nurses often significantly exceed hospital salary.</p>
      <p>Remember that concierge nurses must cover their own taxes, insurance, supplies, and benefits — expenses that employers handle in traditional settings. Your pricing must account for all of these costs.</p>

      <h2 id="schedule">Schedule and Lifestyle</h2>
      <p>Traditional nursing means shift work, mandatory overtime, holiday rotations, and schedule changes beyond your control. Concierge nursing means you set your hours, choose your days, and design your schedule around your life. This flexibility is consistently cited as one of the top reasons nurses choose concierge practice.</p>

      <h2 id="autonomy">Professional Autonomy</h2>
      <p>In hospital settings, you practice within institutional protocols, report to management, and have limited say over your work environment. As a concierge nurse, you make every decision — from your care approach to your client base to your business strategy. This autonomy is liberating for some nurses and overwhelming for others.</p>

      <h2 id="risk">Risk and Security</h2>
      <p>Employment offers perceived security — a regular paycheck, employer-sponsored insurance, and someone else worrying about the business. Entrepreneurship carries financial risk, especially in the startup phase. However, many nurses argue that depending on a single employer for your livelihood is its own form of risk, especially in an era of layoffs and hospital closures.</p>

      <h2 id="fulfillment">Professional Fulfillment</h2>
      <p>Burnout rates among hospital nurses are well-documented. Concierge nurses consistently report higher professional satisfaction, largely because they can practice nursing the way they were trained to — with adequate time, individual attention, and clinical autonomy. The fulfillment of building something of your own adds another dimension of satisfaction.</p>
      <p>If you are weighing this decision, the <Link to="/start-here" className="text-gold hover:text-gold/80 underline">Start Here</Link> page helps you understand where to begin. And the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> provides the structure to make the transition with confidence.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do concierge nurses earn more than hospital nurses?</h3>
            <p>Income potential is higher but variable. Concierge nurses who build successful practices can significantly out-earn their hospital salary. However, income depends on business skills, client volume, and market. There is no guaranteed paycheck.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do concierge nurses get benefits?</h3>
            <p>Not from an employer. As a business owner, you are responsible for your own health insurance, retirement savings, paid time off, and other benefits. These costs must be factored into your pricing and financial planning.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Which is more stable — hospital nursing or concierge nursing?</h3>
            <p>Hospital employment offers more predictable income. Concierge nursing offers more control over your career trajectory. "Stability" means different things to different people — some find stability in a paycheck, others in owning their career.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I try concierge nursing without leaving my hospital job?</h3>
            <p>Yes, and many nurses do exactly this. Starting part-time while maintaining your hospital position lets you build your practice gradually, test the model, and transition when you are ready financially and professionally.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if my concierge nursing rates are too low?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signs your rates are too low include every prospect saying yes without hesitation, feeling resentful about the time you spend with clients, working long hours but not generating enough income to cover your expenses and pay yourself fairly, and clients treating your services as casual rather than professional."
      }
    },
    {
      "@type": "Question",
      "name": "Should I charge hourly or offer packages as a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most concierge nurses benefit from offering packages for defined services like post-surgical care and hourly rates for flexible or ongoing services. Packages allow you to capture more value per engagement because clients pay for the outcome, not just your time. Hourly rates work well for services where the scope is unpredictable."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I raise my concierge nursing rates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Review your rates at least annually. Consider raising rates when your demand exceeds your available time, when you gain significant new certifications or experience, when your cost of living or business expenses increase, or when you notice competitors charging more for similar services."
      }
    },
    {
      "@type": "Question",
      "name": "Should I publish my rates on my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are valid arguments for both approaches. Publishing rates filters out clients who cannot afford your services, saving everyone time. Not publishing rates allows you to customize pricing based on the specific engagement and have a conversation about value before discussing cost. Many concierge nurses choose to list starting rates or rate ranges rather than exact prices."
      }
    },
    {
      "@type": "Question",
      "name": "What if a potential client says my rates are too expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Price objections are often value objections in disguise. If a prospect does not understand the value of your services, any price feels too high. Respond by reinforcing the specific outcomes and benefits they receive. If they still cannot afford your services, they may not be your ideal client, and that is okay. Not every person who needs nursing care is a fit for concierge services."
      }
    },
    {
      "@type": "Question",
      "name": "How do I set rates when I am just starting out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research what other concierge nurses in your area charge, if that information is available. Calculate your minimum viable rate based on your expenses and income needs. Set your initial rates slightly below where you want to be long-term so you have room to raise them as you build experience and testimonials, but do not undercut the market significantly."
      }
    }
  ]
};

export default function SetRates() {
  return (
    <ResourceLayout
      title="How to Set Your Rates as a Concierge Nurse"
      description="A practical pricing framework for concierge nurses covering rate calculation, value-based pricing, package design, and strategies for communicating your rates with confidence."
      canonical="/resources/financial/concierge-nurse-rates"
      category="Financial"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'pricing-mindset', text: 'The Right Pricing Mindset' },
        { id: 'calculating-minimum-rate', text: 'Calculating Your Minimum Viable Rate' },
        { id: 'value-based-pricing', text: 'Value-Based Pricing for Concierge Nurses' },
        { id: 'pricing-structures', text: 'Choosing Your Pricing Structure' },
        { id: 'designing-packages', text: 'Designing Service Packages' },
        { id: 'communicating-rates', text: 'Communicating Your Rates with Confidence' },
        { id: 'raising-rates', text: 'When and How to Raise Your Rates' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        {
          title: 'Concierge Nursing Revenue Models',
          description: 'Compare hourly, package, and retainer models to optimize your income.',
          link: '/resources/financial/concierge-nursing-revenue-models',
          category: 'Financial',
        },
        {
          title: 'How Much Do Concierge Nurses Make?',
          description: 'Understand income potential and the factors that influence earnings.',
          link: '/resources/financial/concierge-nurse-income',
          category: 'Financial',
        },
        {
          title: 'When Does a Concierge Nursing Business Become Profitable?',
          description: 'Understanding the path from startup costs to profitability.',
          link: '/resources/financial/concierge-nursing-profitability',
          category: 'Financial',
        },
      ]}
    >
      <QuickAnswer>
        <p>
          Set your concierge nursing rates based on the value you provide, your specialty, your experience, and your local market — not just by guessing or matching what others charge. Most successful concierge nurses use a combination of hourly rates and flat-fee packages tailored to their services and client needs.
        </p>
      </QuickAnswer>

      <h2 id="pricing-mindset" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        The Right Pricing Mindset
      </h2>
      <p>
        After years of receiving a hospital salary, naming your own price feels uncomfortable. Many nurses default to undercharging because they feel guilty, fear rejection, or lack confidence in their business value. The mindset shift that matters: your rates reflect the value of your clinical expertise, professional judgment, and the peace of mind you provide — not just your hours. When you underprice, you undervalue the profession.
      </p>
      <p className="text-navy font-medium mt-4">Tracy helps you develop a confident pricing mindset in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="calculating-minimum-rate" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Calculating Your Minimum Viable Rate
      </h2>
      <p>
        Before thinking about what the market will bear, you need to know the minimum rate required to sustain your business and pay yourself. This involves understanding your income target, business expenses, tax obligations, and realistic billable hours. Your minimum rate is your floor, not your target — it is the number below which your business is not viable.
      </p>
      <p className="text-navy font-medium mt-4">Get Tracy's rate-calculation worksheet and formula inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="value-based-pricing" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Value-Based Pricing for Concierge Nurses
      </h2>
      <p>
        Value-based pricing means setting rates based on the outcomes you deliver, not just the cost of your time. A post-surgical patient who avoids complications, a family whose loved one's medications are properly coordinated — the value of these outcomes far exceeds an hourly rate. When you price through the lens of value, your services become complication prevention, peace of mind, and professional advocacy.
      </p>

      <h2 id="pricing-structures" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Choosing Your Pricing Structure
      </h2>
      <p>
        Most concierge nurses use a combination of pricing models: hourly rates for variable-scope services, flat-fee packages for defined engagements, retainer agreements for ongoing relationships, and tiered pricing to give clients options. The right structure depends on your service type and client relationship. See our <Link to="/resources/financial/concierge-nursing-revenue-models" className="text-gold hover:text-gold/80 underline">revenue models guide</Link> for a deeper comparison.
      </p>

      <h2 id="designing-packages" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Designing Service Packages
      </h2>
      <p>
        Packages bundle your services into a clear offering with a single price, making it easier for clients to say yes. Effective packages consider the complete client experience — what happens before, during, and after your engagement. A tiered approach (basic, standard, premium) gives clients the power to choose their investment level.
      </p>
      <p className="text-navy font-medium mt-4">Tracy shares her package design framework and naming strategies in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="communicating-rates" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Communicating Your Rates with Confidence
      </h2>
      <p>
        How you present your rates matters as much as the rates themselves. Leading with value before discussing price, stating your rates confidently, and knowing how to handle price objections are essential business skills. The way you talk about your pricing directly shapes how clients perceive your worth.
      </p>
      <p className="text-navy font-medium mt-4">Get Tracy's scripts and communication strategies in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="raising-rates" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        When and How to Raise Your Rates
      </h2>
      <p>
        Raising rates is a normal part of running a business. Your pricing should increase as your experience deepens, your reputation grows, and demand rises. Review your rates at least annually and have a strategy for communicating increases to existing clients.
      </p>
      <p>
        For more on building a financially sustainable practice, explore our guides on <Link to="/resources/financial/concierge-nurse-income" className="text-gold hover:text-gold/80 underline">concierge nurse income</Link> and <Link to="/resources/financial/concierge-nursing-profitability" className="text-gold hover:text-gold/80 underline">business profitability</Link>. For personalized pricing strategy, explore our <Link to="/consulting" className="text-gold hover:text-gold/80 underline">consulting services</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I know if my concierge nursing rates are too low?</h3>
            <p>Signs include every prospect saying yes without hesitation, feeling resentful about your time, and clients treating your services as casual rather than professional.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I charge hourly or offer packages as a concierge nurse?</h3>
            <p>Most concierge nurses benefit from both. Packages work well for defined services; hourly rates work for flexible or unpredictable engagements.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should I raise my concierge nursing rates?</h3>
            <p>Review rates at least annually. Raise them when demand exceeds your availability, you gain new credentials, or your costs increase.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I publish my rates on my website?</h3>
            <p>Both approaches are valid. Many concierge nurses list starting rates or ranges rather than exact prices to balance transparency with flexibility.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What if a potential client says my rates are too expensive?</h3>
            <p>Price objections are often value objections. Reinforce the outcomes you deliver. If they still cannot afford your services, they may not be your ideal client.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I set rates when I am just starting out?</h3>
            <p>Research your local market, calculate your minimum viable rate based on expenses and income needs, and set initial rates with room to grow.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

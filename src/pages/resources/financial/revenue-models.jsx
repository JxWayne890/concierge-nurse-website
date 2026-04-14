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
      "name": "What is the best revenue model for a new concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most new concierge nurses start with hourly billing because it is the simplest to implement and easiest for clients to understand. As you gain experience and develop defined service offerings, transition to package pricing for specific services. The ideal long-term model combines packages for defined engagements with retainer agreements for ongoing clients."
      }
    },
    {
      "@type": "Question",
      "name": "How does package pricing work for concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Package pricing bundles a defined set of services into a single flat fee. For example, a post-surgical recovery package might include a pre-surgery consultation, three post-operative home visits, on-call availability for seven days, and a follow-up check-in. The client pays one price for the complete package rather than an hourly rate."
      }
    },
    {
      "@type": "Question",
      "name": "What is a retainer model in concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A retainer model is when a client pays a fixed monthly fee for ongoing access to your nursing services. The retainer typically includes a set number of visits or hours per month, priority scheduling, and availability for consultations. Retainer models provide predictable monthly revenue and are common with long-term elderly care clients."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple revenue models at the same time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and most successful concierge nurses do. You might offer hourly rates for one-time consultations, packages for post-surgical care, and retainer agreements for ongoing elderly care coordination. Matching your pricing model to the type of service and client relationship maximizes your revenue and client satisfaction."
      }
    },
    {
      "@type": "Question",
      "name": "How do I transition from hourly billing to package pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start by tracking how long your typical engagements take and what services you consistently provide. Use this data to design packages that reflect your actual service delivery. Introduce packages for new clients while honoring existing hourly arrangements. Most clients prefer the predictability of package pricing over open-ended hourly billing."
      }
    }
  ]
};

export default function RevenueModels() {
  return (
    <ResourceLayout
      title="Concierge Nursing Revenue Models: Hourly vs. Packages vs. Retainer"
      description="A detailed comparison of hourly billing, flat-fee packages, and retainer agreements for concierge nurses, with guidance on choosing and combining models for maximum revenue."
      canonical="/resources/financial/concierge-nursing-revenue-models"
      category="Financial"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'why-model-matters', text: 'Why Your Revenue Model Matters' },
        { id: 'hourly-billing', text: 'Hourly Billing: Pros, Cons, and Best Uses' },
        { id: 'package-pricing', text: 'Package Pricing: Pros, Cons, and Best Uses' },
        { id: 'retainer-agreements', text: 'Retainer Agreements: Pros, Cons, and Best Uses' },
        { id: 'hybrid-approach', text: 'The Hybrid Approach' },
        { id: 'choosing-your-model', text: 'Choosing the Right Model for Your Practice' },
        { id: 'implementation-tips', text: 'Implementation Tips' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        {
          title: 'How to Set Your Rates as a Concierge Nurse',
          description: 'Pricing frameworks and rate-setting strategies for concierge nurses.',
          link: '/resources/financial/concierge-nurse-rates',
          category: 'Financial',
        },
        {
          title: 'When Does a Concierge Nursing Business Become Profitable?',
          description: 'Understanding the timeline and factors that drive profitability.',
          link: '/resources/financial/concierge-nursing-profitability',
          category: 'Financial',
        },
        {
          title: 'How to Market Your Concierge Nursing Business',
          description: 'Attract more clients to fill your chosen revenue model.',
          link: '/resources/marketing/concierge-nursing-business-marketing',
          category: 'Marketing',
        },
      ]}
    >
      <QuickAnswer>
        <p>
          The three primary revenue models for concierge nurses are hourly billing, flat-fee packages, and monthly retainer agreements. Most successful concierge nurses use a hybrid approach, combining models to match different service types and client relationships. The right mix maximizes your income while serving different client needs.
        </p>
      </QuickAnswer>

      <h2 id="why-model-matters" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Why Your Revenue Model Matters
      </h2>
      <p>
        Your revenue model shapes your entire business — how you market, what clients you attract, how you manage your time, and how predictable your income is. The wrong model creates friction; the right one aligns your time, your value, and your client's expectations.
      </p>

      <h2 id="hourly-billing" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Hourly Billing: Pros, Cons, and Best Uses
      </h2>
      <p>
        Hourly billing is the simplest model — you charge a set rate per hour for your time. It is easy to implement and works well for services with unpredictable scope like consultations and advocacy appointments. The downside is a natural income ceiling based on available hours and the fact that it does not fully capture the value of your expertise.
      </p>

      <h2 id="package-pricing" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Package Pricing: Pros, Cons, and Best Uses
      </h2>
      <p>
        Package pricing bundles a defined set of services into a single flat fee. It captures more value per engagement, gives clients price certainty, and rewards your efficiency. Packages work best for defined services like post-surgical recovery, medical travel companionship, and new patient assessments. The challenge is accurately estimating scope and setting clear boundaries.
      </p>

      <h2 id="retainer-agreements" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Retainer Agreements: Pros, Cons, and Best Uses
      </h2>
      <p>
        Retainer models involve a fixed monthly fee for ongoing access to your services. They provide predictable recurring revenue, reduce constant client acquisition pressure, and build deep long-term relationships. Retainers work exceptionally well for elderly care coordination, chronic disease management, and executive health monitoring.
      </p>

      <h2 id="hybrid-approach" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        The Hybrid Approach
      </h2>
      <p>
        The most successful concierge nursing practices combine models strategically — packages for defined engagements, retainers for ongoing relationships, and hourly rates for variable-scope consultations. This captures maximum value across different service types while building both one-time and recurring revenue.
      </p>
      <p className="text-navy font-medium mt-4">Tracy teaches you how to design and combine revenue models for maximum income inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="choosing-your-model" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Choosing the Right Model for Your Practice
      </h2>
      <p>
        Your ideal revenue model depends on your specialty, ideal client, and business goals. If you prioritize predictability, lean toward retainers. If you want to maximize per-engagement revenue, lean toward packages. If you are just starting out, hourly billing is the simplest entry point. Most practices evolve their model mix over time.
      </p>

      <h2 id="implementation-tips" className="font-heading text-2xl font-bold text-navy mt-12 mb-4">
        Implementation Tips
      </h2>
      <p>
        Whatever model you choose, put everything in writing with clear scope definitions, collect payment upfront or at the start of each period, and review your models regularly to ensure they reflect the true value and time investment of your services.
      </p>
      <p>
        For help with rates, read our <Link to="/resources/financial/concierge-nurse-rates" className="text-gold hover:text-gold/80 underline">rate-setting guide</Link>. For personalized revenue strategy, explore our <Link to="/consulting" className="text-gold hover:text-gold/80 underline">consulting services</Link>.
      </p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the best revenue model for a new concierge nurse?</h3>
            <p>Most start with hourly billing for simplicity, then transition to packages and retainers as they define their services and gain experience.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How does package pricing work for concierge nurses?</h3>
            <p>You bundle a defined set of services into a single flat fee. The client pays one price for the complete package rather than an hourly rate.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is a retainer model in concierge nursing?</h3>
            <p>A client pays a fixed monthly fee for ongoing access to your services, typically including a set number of visits and priority scheduling.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use multiple revenue models at the same time?</h3>
            <p>Yes, and most successful concierge nurses do. Matching your model to the service type maximizes revenue and client satisfaction.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I transition from hourly billing to package pricing?</h3>
            <p>Track your typical engagements, design packages based on actual service delivery, and introduce them to new clients while honoring existing arrangements.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

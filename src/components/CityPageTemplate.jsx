import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Users, Building2, TrendingUp } from 'lucide-react';
import ResourceLayout from './ResourceLayout';
import QuickAnswer from './QuickAnswer';

export default function CityPageTemplate({ cityData }) {
  const { name, state, stateAbbr, slug, populationTier } = cityData;

  const stateSlug = state.toLowerCase().replace(/\s+/g, '-');
  const statePageUrl = `/resources/states/concierge-nursing-business-in-${stateSlug}`;
  const isLargeMetro = populationTier === 'large metro';

  const headings = [
    { id: 'market-overview', text: `${name} Market Overview` },
    { id: 'demand-drivers', text: 'Demand Drivers' },
    { id: 'referral-sources', text: 'Key Referral Sources' },
    { id: 'competition', text: 'Competition Landscape' },
    { id: 'cost-of-living', text: 'Cost of Living & Pricing' },
    { id: 'networking', text: `Where to Network` },
    { id: 'getting-started', text: 'Getting Started' },
    { id: 'faq', text: 'Frequently Asked Questions' },
  ];

  const faqItems = [
    {
      question: `Is there enough demand for concierge nursing in ${name}, ${stateAbbr}?`,
      answer: `${name} is a ${populationTier} with growing demand for personalized healthcare. ${isLargeMetro ? 'Large metros typically support multiple concierge nursing niches.' : 'Mid-size metros often have strong demand with less competition.'} Tracy can help you evaluate your specific market inside the Accelerator.`,
    },
    {
      question: `What should I charge for concierge nursing services in ${name}?`,
      answer: `Pricing depends on your niche, local cost of living, and the depth of service you provide. Tracy covers her proven pricing framework inside the Accelerator and Business Toolkit.`,
    },
    {
      question: `Do I need a special license to practice concierge nursing in ${stateAbbr}?`,
      answer: `You need an active RN license in ${state}. Concierge nursing does not require a separate clinical license. Visit our ${state} state guide for ${stateAbbr}-specific requirements.`,
    },
    {
      question: `How do I find my first clients in ${name}?`,
      answer: `Building referral relationships with local physicians and specialists is the most effective approach. Tracy teaches her complete client acquisition system inside the Accelerator.`,
    },
    {
      question: `What niches work best for concierge nursing in ${name}?`,
      answer: `The best niche depends on ${name}'s demographics and your clinical background. Common niches include post-surgical recovery, geriatric care, and postpartum support. Tracy helps you choose the right niche in the Accelerator.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `How to Start a Concierge Nursing Business in ${name}, ${stateAbbr}`,
    description: `Market overview for nurses exploring concierge nursing in ${name}, ${stateAbbr}.`,
    author: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
    publisher: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
  };

  return (
    <ResourceLayout
      title={`How to Start a Concierge Nursing Business in ${name}, ${stateAbbr}`}
      description={`Considering concierge nursing in ${name}, ${stateAbbr}? Learn about the local market opportunity and how to get started with expert guidance.`}
      canonical={`/resources/cities/concierge-nursing-business-in-${slug}`}
      schema={articleSchema}
      category="City Guides"
      categorySlug="/resources"
      headings={headings}
      faqSchema={faqSchema}
      cta={{
        title: `Build Your ${name} Practice`,
        description: `Tracy's Accelerator gives you the complete roadmap to launch your concierge nursing business in ${name} — from niche selection to your first paying client.`,
        buttonText: 'Learn About the Accelerator',
        buttonLink: '/accelerator',
      }}
      relatedResources={[
        {
          title: `Concierge Nursing in ${state}`,
          description: `State-level licensing and business requirements for ${state}.`,
          link: statePageUrl,
          category: 'State Guide',
        },
      ]}
    >
      <QuickAnswer>
        <p>
          <strong>{name}, {stateAbbr}</strong> is a {populationTier} with solid potential for concierge nursing.{' '}
          {isLargeMetro
            ? 'The large, diverse population creates demand across multiple niches.'
            : `Mid-size metros like ${name} often have strong demand paired with less competition.`
          }{' '}
          Success depends on choosing the right niche, building referral relationships, and positioning yourself as the go-to concierge nurse in the area.
        </p>
      </QuickAnswer>

      {/* Market Overview */}
      <h2 id="market-overview">{name} Market Overview for Concierge Nursing</h2>
      <p>
        {name} is a {populationTier} area with a healthcare infrastructure that supports
        concierge nursing services. The metro's population demographics, economic profile, and
        healthcare landscape all contribute to the opportunity for nurse entrepreneurs.
      </p>
      <p>
        For state-level licensing and regulatory details, see our{' '}
        <Link to={statePageUrl} className="text-gold hover:underline">{state} concierge nursing guide</Link>.
      </p>

      {/* Demand Drivers */}
      <h2 id="demand-drivers">Demand Drivers in {name}</h2>
      <p>
        Several factors drive demand for concierge nursing in any market: an aging population
        that prefers to age in place, busy professionals who value convenience, post-surgical
        patients who want premium recovery care, and families seeking personalized support
        for chronic conditions or special needs.
      </p>
      <p>
        {isLargeMetro
          ? `As a large metro, ${name} has substantial populations in each of these categories, creating opportunity across multiple concierge nursing niches.`
          : `Mid-size metros like ${name} can be ideal because the demand is real but there are fewer concierge nurses competing for clients.`
        }
      </p>
      <p className="text-navy font-medium mt-4">
        Tracy teaches you how to evaluate market demand for your specific niche inside the{' '}
        <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.
      </p>

      {/* Key Referral Sources */}
      <h2 id="referral-sources">Key Referral Sources in {name}</h2>
      <p>
        Building a referral network is critical for any concierge nursing business. In {name},
        potential referral partners include physicians, surgeons, discharge planners, elder law
        attorneys, financial advisors, and other professionals who serve the same clientele you
        want to reach.
      </p>
      <p>
        The most successful concierge nurses build deep relationships with a small number of
        high-value referral sources rather than trying to reach everyone.
      </p>
      <p className="text-navy font-medium mt-4">
        Tracy's referral relationship framework is covered step by step in the{' '}
        <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.
      </p>

      {/* Competition */}
      <h2 id="competition">Competition Landscape</h2>
      <p>
        {isLargeMetro
          ? `${name} may have some existing concierge nursing providers, but the market is far from saturated. The concierge nursing model is still emerging, and many potential clients do not yet know the service exists.`
          : `Mid-size metros like ${name} typically have very few concierge nursing competitors. You may be one of the first in the area, giving you an opportunity to define the market.`
        }
      </p>
      <p>
        Understanding your competitive landscape is an important step before launching. Tracy
        walks you through competitive analysis as part of the{' '}
        <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link> curriculum.
      </p>

      {/* Cost of Living */}
      <h2 id="cost-of-living">Cost of Living and Pricing Considerations</h2>
      <p>
        Your pricing must reflect {name}'s cost of living, your operating expenses, and the
        value of your expertise.{' '}
        {isLargeMetro
          ? 'In a large metro, operating costs tend to be higher but clients expect and can afford premium rates.'
          : 'In a mid-size metro, lower overhead can mean strong profit margins even at moderate price points.'
        }
      </p>
      <p className="text-navy font-medium mt-4">
        Tracy's pricing framework helps you set rates that reflect your value. Get it inside the{' '}
        <Link to="/toolkits" className="text-gold hover:underline">Business Toolkit</Link>.
      </p>

      {/* Networking */}
      <h2 id="networking">Where to Network</h2>
      <p>
        Building your concierge nursing business in {name} requires getting in front of both
        referral sources and potential clients. Local nursing associations, chambers of commerce,
        healthcare events, and professional networking groups are all valuable channels.
      </p>
      <p className="text-navy font-medium mt-4">
        Tracy covers her complete networking and client acquisition strategy inside the{' '}
        <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.
      </p>

      {/* Getting Started */}
      <h2 id="getting-started">Getting Started in {name}</h2>
      <p>
        Launching a concierge nursing business in {name} involves choosing your niche, forming
        your legal entity in {state}, obtaining insurance, and building your referral network.
        The specifics depend on your clinical background, target market, and service model.
      </p>
      <div className="bg-cream border border-cream-dark p-6 mt-4">
        <p className="font-heading text-lg font-bold text-navy mb-2">Ready to get started?</p>
        <p className="mb-4">
          The Concierge Nurse Business Accelerator is a 6-week live program where Tracy walks you
          through every step of building your practice — from niche selection to your first client.
        </p>
        <Link to="/accelerator" className="btn-primary inline-flex items-center gap-2">
          Learn About the Accelerator
        </Link>
      </div>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, i) => (
            <div key={i}>
              <h3 className="font-heading text-lg font-semibold text-navy mb-2">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </ResourceLayout>
  );
}

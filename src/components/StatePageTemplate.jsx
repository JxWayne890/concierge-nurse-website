import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ExternalLink } from 'lucide-react';
import ResourceLayout from './ResourceLayout';
import QuickAnswer from './QuickAnswer';

export default function StatePageTemplate({ stateData }) {
  const {
    name,
    abbreviation,
    slug,
    isCompactState,
    requiresPLLC,
    capital,
    majorMetros,
    sosWebsite,
    bonWebsite,
  } = stateData;

  const entityType = requiresPLLC ? 'PLLC' : 'LLC';

  const headings = [
    { id: 'nursing-business-landscape', text: `${name} Nursing Business Landscape` },
    { id: 'scope-of-practice', text: `RN Scope of Practice in ${name}` },
    { id: 'llc-vs-pllc', text: `LLC vs PLLC Requirements in ${name}` },
    { id: 'business-registration', text: `Business Registration in ${name}` },
    { id: 'compact-status', text: 'Nurse Licensure Compact Status' },
    { id: 'insurance-requirements', text: 'Insurance Requirements' },
    { id: 'state-specific', text: `${name}-Specific Considerations` },
    { id: 'major-metros', text: 'Major Metro Areas' },
    { id: 'faq', text: 'Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: `Do I need a PLLC or LLC to start a concierge nursing business in ${name}?`,
      answer: requiresPLLC
        ? `${name} generally requires healthcare professionals offering clinical services to form a PLLC rather than a standard LLC. Consult with a business attorney in ${name} for guidance specific to your situation.`
        : `In ${name}, registered nurses can typically form a standard LLC for their concierge nursing business. Verify current requirements with the ${name} Secretary of State.`,
    },
    {
      question: `Is ${name} a Nurse Licensure Compact (NLC) state?`,
      answer: isCompactState
        ? `Yes, ${name} is a Nurse Licensure Compact member state. Nurses with a multistate license from a compact state can practice in ${name} without obtaining a separate license.`
        : `No, ${name} is not currently a member of the Nurse Licensure Compact. You must hold a ${name}-issued nursing license to practice in the state.`,
    },
    {
      question: `What insurance do I need for a concierge nursing business in ${name}?`,
      answer: `Concierge nurses in ${name} should carry professional liability insurance and general liability insurance at a minimum. The exact coverage types and amounts depend on your services. Tracy covers insurance planning in detail inside the Accelerator.`,
    },
    {
      question: `How do I get started with my concierge nursing business in ${name}?`,
      answer: `Starting a concierge nursing business in ${name} involves choosing your niche, forming your legal entity, getting insured, and building your client base. The Concierge Nurse Business Accelerator walks you through every step with Tracy's proven six-step method.`,
    },
    {
      question: `Can I operate a concierge nursing business from home in ${name}?`,
      answer: `Many concierge nurses operate from a home office, especially when services are delivered at client locations. Check local zoning ordinances in your city or county for any home-based business requirements.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `How to Start a Concierge Nursing Business in ${name}`,
    description: `Guide to launching a concierge nurse business in ${name} (${abbreviation}). Covers ${entityType} formation, licensing, and Nurse Licensure Compact status.`,
    author: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
    publisher: { '@type': 'Organization', name: 'Concierge Nurse Business Society' },
    datePublished: '2026-04-01',
    dateModified: '2026-04-01',
  };

  return (
    <ResourceLayout
      title={`How to Start a Concierge Nursing Business in ${name}`}
      description={`Key considerations for launching a concierge nurse business in ${name} (${abbreviation}): ${entityType} formation, licensing, compact status, and where to get expert guidance.`}
      canonical={`/resources/states/concierge-nursing-business-in-${slug}`}
      schema={articleSchema}
      faqSchema={faqSchema}
      category="State Guides"
      categorySlug="/resources"
      headings={headings}
      cta={{
        title: 'Get the Complete Startup Roadmap',
        description: `Tracy's Accelerator walks you through every step of building your concierge nursing business in ${name} — from entity formation to your first client.`,
        buttonText: 'Learn About the Accelerator',
        buttonLink: '/accelerator',
      }}
    >
      <QuickAnswer>
        <p>
          Starting a concierge nursing business in <strong>{name}</strong> requires
          forming {requiresPLLC ? 'a PLLC' : 'an LLC'}, maintaining an active RN license
          {isCompactState ? ' (multistate compact license accepted)' : ` issued by the ${name} Board of Nursing`},
          and obtaining appropriate business insurance. The specific steps and requirements
          depend on your niche, location, and service model.
        </p>
      </QuickAnswer>

      {/* Nursing Business Landscape */}
      <h2 id="nursing-business-landscape">{name} Nursing Business Landscape</h2>
      <p>
        {name} offers growing opportunities for nurses looking to build independent concierge
        nursing practices. As demand for personalized, private-pay healthcare continues to rise,
        nurse entrepreneurs in {name} are well-positioned to serve clients seeking premium
        in-home and on-demand nursing care.
      </p>
      <p>
        The capital, {capital}, and metro areas such as {majorMetros.slice(0, 3).join(', ')} are
        among the most active markets for concierge nursing services in the state.
      </p>
      <p className="text-navy font-medium mt-4">
        Tracy helps nurses in {name} identify the best niche and market for their practice inside the{' '}
        <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.
      </p>

      {/* Scope of Practice */}
      <h2 id="scope-of-practice">RN Scope of Practice in {name}</h2>
      <p>
        Registered nurses in {name} practice under the authority of the {name} Board of Nursing.
        Your concierge nursing services must fall within the legal scope of practice for RNs,
        which varies by state and determines what services you can offer independently versus
        those requiring physician oversight.
      </p>
      <div className="bg-cream border border-cream-dark p-6 mt-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
          <p>
            Verify your planned services against the current {name} Nurse Practice Act at the{' '}
            <a href={bonWebsite} target="_blank" rel="noopener noreferrer"
              className="text-gold underline hover:text-navy transition-colors inline-flex items-center gap-1">
              {name} Board of Nursing <ExternalLink size={12} />
            </a>
          </p>
        </div>
      </div>

      {/* LLC vs PLLC */}
      <h2 id="llc-vs-pllc">LLC vs PLLC Requirements in {name}</h2>
      <div className="bg-cream border border-cream-dark p-6 mb-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
          <p>
            <strong>{name} {requiresPLLC ? 'generally requires a PLLC' : 'allows a standard LLC'}</strong> for
            concierge nursing businesses. Consult with a business attorney for guidance specific
            to your situation.
          </p>
        </div>
      </div>
      <p>
        {requiresPLLC
          ? `In ${name}, licensed healthcare professionals offering clinical services are generally required to form a Professional Limited Liability Company (PLLC). A PLLC operates similarly to a standard LLC but has additional requirements related to professional licensure.`
          : `In ${name}, registered nurses can typically form a standard LLC to operate a concierge nursing business. The LLC provides personal asset protection and flexible tax treatment.`
        }
      </p>
      <p className="text-navy font-medium mt-4">
        Tracy covers entity selection, formation, and all legal setup steps in the{' '}
        <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link> and{' '}
        <Link to="/toolkits" className="text-gold hover:underline">Business Toolkit</Link>.
      </p>

      {/* Business Registration */}
      <h2 id="business-registration">Business Registration in {name}</h2>
      <p>
        Registering your concierge nursing business in {name} involves filing formation documents
        with the Secretary of State, obtaining an EIN from the IRS, and meeting any local
        registration requirements. The process, filing fees, and timeline vary.
      </p>
      <div className="bg-cream border border-cream-dark p-6 mt-4">
        <p>
          <strong>File online:</strong>{' '}
          <a href={sosWebsite} target="_blank" rel="noopener noreferrer"
            className="text-gold underline hover:text-navy transition-colors inline-flex items-center gap-1">
            {name} Secretary of State <ExternalLink size={12} />
          </a>
        </p>
      </div>

      {/* Compact Status */}
      <h2 id="compact-status">Nurse Licensure Compact Status</h2>
      <div className="bg-cream border border-cream-dark p-6 mb-4">
        <div className="flex items-start gap-3">
          {isCompactState ? (
            <CheckCircle2 size={16} className="text-gold mt-1 flex-shrink-0" />
          ) : (
            <XCircle size={16} className="text-red-500 mt-1 flex-shrink-0" />
          )}
          <p>
            <strong>{name} {isCompactState ? 'IS' : 'is NOT'} a Nurse Licensure Compact (NLC) member state.</strong>
          </p>
        </div>
      </div>
      <p>
        {isCompactState
          ? `As a compact state, ${name} allows nurses holding a multistate license to practice here without obtaining a separate license. This is valuable for concierge nurses serving clients across state lines or providing telehealth services.`
          : `Because ${name} has not joined the Nurse Licensure Compact, you must hold a ${name}-issued nursing license to practice in the state, even if you have a multistate license from another state.`
        }
      </p>

      {/* Insurance */}
      <h2 id="insurance-requirements">Insurance Requirements</h2>
      <p>
        Protecting your concierge nursing business with appropriate insurance coverage is essential.
        At a minimum, most concierge nurses carry professional liability insurance and general
        liability insurance. Depending on your services, you may also need additional coverage types.
      </p>
      <p className="text-navy font-medium mt-4">
        Tracy helps you determine exactly what coverage you need inside the{' '}
        <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.
      </p>

      {/* State-Specific */}
      <h2 id="state-specific">{name}-Specific Considerations</h2>
      {/* TRACY TO FILL: specific guidance for this state */}
      <p>
        Every state has unique regulations, market dynamics, and opportunities for concierge nurses.
        For personalized guidance on building your practice in {name}, consider a{' '}
        <Link to="/strategy" className="text-gold hover:underline">Clarity Consult</Link> with Tracy.
      </p>

      {/* Major Metro Areas */}
      <h2 id="major-metros">Major Metro Areas</h2>
      <p className="mb-6">
        These are the primary markets for concierge nursing services in {name}:
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {majorMetros.map((city) => {
          const citySlug = city.toLowerCase().replace(/[.\s]+/g, '-').replace(/'+/g, '');
          return (
            <div key={city} className="bg-cream border border-cream-dark p-6">
              <span className="font-heading text-lg font-bold text-navy">{city}</span>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                {faq.question}
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </ResourceLayout>
  );
}

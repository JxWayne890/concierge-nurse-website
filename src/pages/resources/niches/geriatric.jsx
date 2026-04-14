import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is', text: 'What Is Geriatric Concierge Nursing?' },
  { id: 'services', text: 'What Services Do Geriatric Concierge Nurses Provide?' },
  { id: 'clients', text: 'Who Are Your Ideal Clients?' },
  { id: 'background', text: 'What Nursing Background Do You Need?' },
  { id: 'getting-started', text: 'How to Get Started in Geriatric Concierge Nursing' },
  { id: 'costs', text: 'Startup Costs' },
  { id: 'get-clients', text: 'How to Get Geriatric Concierge Clients' },
  { id: 'challenges', text: 'Challenges and Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Chronic Disease Management Nursing',
    description: 'Build a practice around managing chronic conditions like diabetes, heart failure, and COPD.',
    link: '/resources/niches/chronic-disease-management-nursing',
    category: 'Niches',
  },
  {
    title: 'Medication Management Concierge Nursing',
    description: 'Help clients navigate complex medication regimens safely and effectively.',
    link: '/resources/niches/medication-management-concierge-nursing',
    category: 'Niches',
  },
  {
    title: 'How to Start a Concierge Nursing Business',
    description: 'The complete step-by-step guide to launching your private nursing practice.',
    link: '/resources/how-to-start-concierge-nursing-business',
    category: 'Getting Started',
  },
];

const cta = {
  title: 'Ready to Launch Your Geriatric Nursing Practice?',
  description: 'Get the tools, templates, and mentorship to build a thriving aging-in-place concierge nursing business.',
  buttonText: 'Join the Accelerator',
  buttonLink: '/accelerator',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between geriatric concierge nursing and home health nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geriatric concierge nursing is a private-pay, relationship-based service offering ongoing, personalized care management. Home health nursing is typically insurance-based, visit-limited, and focused on specific skilled nursing tasks."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need geriatric nursing certification to start this business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While not legally required in most states, a Gerontological Nursing Certification significantly enhances your credibility. Experience working with older adults provides a strong foundation."
      }
    },
    {
      "@type": "Question",
      "name": "Who pays for geriatric concierge nursing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geriatric concierge nursing is typically paid for privately by the client or their adult children. Some long-term care insurance policies may reimburse for certain services."
      }
    },
    {
      "@type": "Question",
      "name": "Can I provide geriatric concierge nursing in assisted living facilities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many families hire concierge nurses to provide an extra layer of oversight for loved ones in assisted living or memory care."
      }
    },
    {
      "@type": "Question",
      "name": "How is aging-in-place nursing different from elder care management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aging-in-place concierge nursing combines clinical nursing skills with care coordination. As a nurse, you bring clinical assessment and medication management that care managers cannot provide."
      }
    },
    {
      "@type": "Question",
      "name": "What is the market outlook for geriatric concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The aging population is growing rapidly, and the strong preference among older adults to age at home creates sustained demand for skilled in-home nursing support."
      }
    }
  ]
};

export default function Geriatric() {
  return (
    <ResourceLayout
      title="How to Start a Geriatric and Aging-in-Place Concierge Nursing Business"
      description="A comprehensive guide to building a concierge nursing business focused on geriatric care and aging-in-place support. Learn about services, ideal clients, startup steps, and how to attract referrals."
      canonical="/resources/niches/geriatric-concierge-nursing-business"
      category="Niches"
      categorySlug="/resources/concierge-nursing-niches"
      headings={headings}
      relatedResources={relatedResources}
      cta={cta}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A geriatric and aging-in-place concierge nursing business provides private, ongoing clinical support to older adults who want to remain safely in their homes. Services include health assessments, medication management, care coordination, fall prevention, and family communication — bridging the gap between physician visits and daily living needs.
        </p>
      </QuickAnswer>

      <h2 id="what-is">What Is Geriatric Concierge Nursing?</h2>
      <p>
        Geriatric concierge nursing is a private-pay nursing service designed to help older adults maintain their health, independence, and quality of life as they age at home. Unlike episodic home health visits ordered by a physician, geriatric concierge nurses build long-term relationships with clients and their families, providing consistent clinical oversight that adapts as needs evolve.
      </p>
      <p>
        The aging-in-place movement is reshaping how Americans think about growing older. Most older adults prefer to remain in their own homes, but aging at home comes with challenges — managing chronic conditions, keeping up with medications, preventing falls, and navigating complex healthcare systems. A geriatric concierge nurse serves as a trusted clinical partner connecting the client's entire healthcare team.
      </p>

      <h2 id="services">What Services Do Geriatric Concierge Nurses Provide?</h2>
      <p>
        Geriatric concierge nurses provide a broad range of services including comprehensive health assessments, medication management and reconciliation, care coordination across multiple providers, fall prevention assessments, chronic disease monitoring, regular family communication updates, transition of care support after hospitalizations, and advance care planning facilitation.
      </p>
      <p className="text-navy font-medium mt-4">Learn how to build your geriatric service model inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="clients">Who Are Your Ideal Clients?</h2>
      <p>
        Ideal clients include older adults living independently who want proactive clinical oversight, adults managing multiple chronic conditions, adult children of aging parents (often living at a distance), older adults in assisted living who need additional monitoring, and recently widowed seniors who have lost a primary caregiver. Adult children are frequently the ones who find and pay for your services.
      </p>

      <h2 id="background">What Nursing Background Do You Need?</h2>
      <p>
        Experience in geriatric nursing, medical-surgical nursing, home health, or community health provides the strongest foundation. Key competencies include comprehensive geriatric assessment, polypharmacy management, chronic disease management, fall risk assessment, and dementia recognition. A Gerontological Nursing Certification adds significant credibility.
      </p>

      <h2 id="getting-started">How to Get Started in Geriatric Concierge Nursing</h2>
      <p>
        Getting started involves evaluating your geriatric competencies, researching your local market demographics, forming your business entity, securing insurance, designing your service model (retainer and subscription models work well for this niche), and building referral relationships with geriatricians, elder law attorneys, and home care agencies.
      </p>
      <p className="text-navy font-medium mt-4">The <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link> provides step-by-step launch guidance tailored to your niche.</p>

      <h2 id="costs">Startup Costs for Geriatric Concierge Nursing</h2>
      <p>
        Startup costs include business formation, professional and general liability insurance, clinical supplies and assessment equipment, cognitive screening tools, website and branding, CRM software, and initial marketing and networking expenses. The investment is modest relative to the long-term client relationships this niche generates.
      </p>
      <p className="text-navy font-medium mt-4">Plan your budget with tools inside the <Link to="/toolkits" className="text-gold hover:underline">Business Toolkit</Link>.</p>

      <h2 id="get-clients">How to Get Geriatric Concierge Clients</h2>
      <p>
        The strongest referral sources for geriatric concierge nursing include geriatricians and primary care physicians, elder law attorneys, financial advisors, home care agencies, senior living communities, faith communities and senior centers, and online content marketing targeting adult children searching for help with aging parents.
      </p>
      <p className="text-navy font-medium mt-4">Master referral-building strategies in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="challenges">Challenges and Considerations</h2>
      <p>
        Challenges include managing long-term relationships as clients decline, navigating complex family dynamics, working with cognitive decline, maintaining scope of practice awareness, managing transportation and geography for in-home visits, and handling end-of-life transitions both professionally and emotionally. Understanding your <Link to="/resources/state-requirements-concierge-nursing" className="text-gold hover:text-gold/80 underline">state requirements</Link> is essential.
      </p>

      <h2 id="faq">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">What is the difference between geriatric concierge nursing and home health nursing?</h3>
          <p>Geriatric concierge nursing is a private-pay, relationship-based service offering ongoing, personalized care management. Home health nursing is typically insurance-based, visit-limited, and focused on specific skilled nursing tasks.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">Do I need geriatric nursing certification to start this business?</h3>
          <p>While not legally required in most states, a Gerontological Nursing Certification significantly enhances your credibility. Experience working with older adults provides a strong foundation.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">Who pays for geriatric concierge nursing services?</h3>
          <p>Geriatric concierge nursing is typically paid for privately by the client or their adult children. Some long-term care insurance policies may reimburse for certain services.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">Can I provide geriatric concierge nursing in assisted living facilities?</h3>
          <p>Yes. Many families hire concierge nurses to provide an extra layer of oversight for loved ones in assisted living or memory care.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">How is aging-in-place nursing different from elder care management?</h3>
          <p>Aging-in-place concierge nursing combines clinical nursing skills with care coordination. As a nurse, you bring clinical assessment and medication management that care managers cannot provide.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">What is the market outlook for geriatric concierge nursing?</h3>
          <p>The aging population is growing rapidly, and the strong preference among older adults to age at home creates sustained demand for skilled in-home nursing support.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is', text: 'What Is Postpartum Concierge Nursing?' },
  { id: 'services', text: 'What Services Do Postpartum Concierge Nurses Provide?' },
  { id: 'clients', text: 'Who Are Your Ideal Clients?' },
  { id: 'background', text: 'What Nursing Background Do You Need?' },
  { id: 'getting-started', text: 'How to Get Started in Postpartum Concierge Nursing' },
  { id: 'costs', text: 'Startup Costs' },
  { id: 'get-clients', text: 'How to Get Postpartum Clients' },
  { id: 'challenges', text: 'Challenges and Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Start a Concierge Nursing Business',
    description: 'The complete step-by-step guide to launching your private nursing practice from scratch.',
    link: '/resources/how-to-start-concierge-nursing-business',
    category: 'Getting Started',
  },
  {
    title: 'Post-Op Recovery Concierge Nursing',
    description: 'Learn how to build a business around post-surgical recovery care.',
    link: '/resources/niches/post-op-recovery-nursing-business',
    category: 'Niches',
  },
  {
    title: 'How to Price Concierge Nursing Services',
    description: 'Set rates that reflect your expertise and attract the right clients.',
    link: '/resources/how-to-price-concierge-nursing-services',
    category: 'Financial',
  },
];

const cta = {
  title: 'Ready to Launch Your Postpartum Nursing Practice?',
  description: 'Get expert guidance, templates, and community support to build a thriving postpartum concierge nursing business.',
  buttonText: 'Join the Accelerator',
  buttonLink: '/accelerator',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a postpartum concierge nurse and a postpartum doula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A postpartum concierge nurse is a licensed RN or LPN who can perform clinical assessments, monitor for complications, and provide evidence-based medical guidance. A postpartum doula provides non-clinical emotional and practical support. Both are valuable, but a nurse brings clinical expertise."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need labor and delivery experience to become a postpartum concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L&D or mother-baby experience is ideal but not the only path. Nurses with strong med-surg, pediatric, or community health backgrounds can transition with additional training."
      }
    },
    {
      "@type": "Question",
      "name": "Can a postpartum concierge nurse help with breastfeeding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Postpartum concierge nurses commonly provide breastfeeding support. Earning a lactation certification can significantly enhance your services and credibility."
      }
    },
    {
      "@type": "Question",
      "name": "How long do postpartum concierge nursing clients typically need services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients use services during the first 1-6 weeks after birth. The level of support varies from intensive first-week care to weekly check-ins over the first month or two."
      }
    },
    {
      "@type": "Question",
      "name": "Is postpartum concierge nursing covered by insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Postpartum concierge nursing is typically a private-pay service, giving you the freedom to set your own rates and deliver personalized care."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications enhance a postpartum concierge nursing business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Valuable certifications include CLC, IBCLC, NRP, and maternal-newborn nursing certification (RNC-MNN). These demonstrate specialized expertise."
      }
    }
  ]
};

export default function Postpartum() {
  return (
    <ResourceLayout
      title="How to Start a Postpartum Concierge Nursing Business"
      description="Learn how to build a concierge nursing business focused on postpartum care for new mothers and newborns. Covers services, required background, startup steps, and client acquisition strategies."
      canonical="/resources/niches/postpartum-concierge-nursing-business"
      category="Niches"
      categorySlug="/resources/concierge-nursing-niches"
      headings={headings}
      relatedResources={relatedResources}
      cta={cta}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A postpartum concierge nursing business provides private, in-home nursing care to new mothers and newborns during the critical weeks after birth. Services include newborn assessments, breastfeeding support, maternal recovery monitoring, and parent education — all delivered with the personalized attention that hospital discharge and traditional home health visits cannot match.
        </p>
      </QuickAnswer>

      <h2 id="what-is">What Is Postpartum Concierge Nursing?</h2>
      <p>
        Postpartum concierge nursing is a private-pay nursing service focused on supporting new mothers and their babies during the transition from hospital to home. The postpartum period — typically the first six weeks after delivery — is a time of significant physical recovery, emotional adjustment, and steep learning curves for new parents.
      </p>
      <p>
        In the traditional model, new parents receive a brief hospital stay followed by a gap of weeks before their next medical appointments. Postpartum concierge nurses fill this gap with skilled assessments, breastfeeding guidance, newborn care education, and maternal wellness monitoring. Unlike postpartum doulas who provide non-clinical support, concierge nurses bring clinical assessment skills that can identify early warning signs of complications.
      </p>

      <h2 id="services">What Services Do Postpartum Concierge Nurses Provide?</h2>
      <p>
        Postpartum concierge nursing services span both maternal and newborn care. Common offerings include maternal physical assessment, postpartum mood screening, breastfeeding support, newborn assessment and weight checks, newborn care education, medication management, and family confidence building. Your specific service menu will depend on your clinical background and state scope of practice.
      </p>
      <p className="text-navy font-medium mt-4">Get help designing your postpartum service packages inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="clients">Who Are Your Ideal Clients?</h2>
      <p>
        Postpartum concierge nursing serves families who want clinical-level support during the newborn period. Ideal clients include first-time parents, mothers recovering from cesarean delivery, families with NICU graduates, parents of multiples, high-net-worth families, and mothers who experienced high-risk pregnancies. These families value expert guidance and peace of mind during a vulnerable time.
      </p>

      <h2 id="background">What Nursing Background Do You Need?</h2>
      <p>
        The ideal background includes experience in labor and delivery, mother-baby, postpartum, or NICU nursing. Nurses from other backgrounds can transition with additional education. Key competencies include maternal postpartum assessment, newborn physical assessment, breastfeeding support, and recognition of postpartum complications. A lactation certification (CLC or IBCLC) is strongly recommended.
      </p>

      <h2 id="getting-started">How to Get Started in Postpartum Concierge Nursing</h2>
      <p>
        Building a postpartum concierge nursing business requires clinical readiness assessment, business entity formation, appropriate insurance, service package design, and referral network development. Each of these foundational steps must be completed thoughtfully to position your practice for success and legal compliance.
      </p>
      <p className="text-navy font-medium mt-4">The <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link> provides the complete roadmap for launching your postpartum practice.</p>

      <h2 id="costs">Startup Costs for Postpartum Concierge Nursing</h2>
      <p>
        Startup costs for a postpartum concierge nursing practice include business formation, insurance, clinical supplies (including an infant scale), potential lactation certification, website and branding, and initial marketing. Overall startup investment is moderate compared to many healthcare businesses.
      </p>
      <p className="text-navy font-medium mt-4">Get detailed budgeting tools inside the <Link to="/toolkits" className="text-gold hover:underline">Business Toolkit</Link>.</p>

      <h2 id="get-clients">How to Get Postpartum Clients</h2>
      <p>
        Postpartum nursing clients come through a combination of healthcare referrals and direct consumer marketing. Key referral sources include OB/GYN practices, midwifery practices, pediatrician offices, childbirth education classes, and social media parenting communities. Building relationships with these referral partners is essential for steady client flow.
      </p>
      <p className="text-navy font-medium mt-4">Learn proven client acquisition strategies in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="challenges">Challenges and Considerations</h2>
      <p>
        Key challenges in postpartum concierge nursing include the emotional intensity of working with new families, unpredictable timing around births, scope of practice boundaries, differentiating from doulas, managing self-care to avoid compassion fatigue, and liability considerations when working with newborns. Comprehensive insurance, thorough documentation, and joining a <Link to="/community" className="text-gold hover:text-gold/80 underline">professional community</Link> help address these challenges.
      </p>

      <h2 id="faq">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">What is the difference between a postpartum concierge nurse and a postpartum doula?</h3>
          <p>A postpartum concierge nurse is a licensed RN or LPN who can perform clinical assessments, monitor for complications, and provide evidence-based medical guidance. A postpartum doula provides non-clinical emotional and practical support. Both are valuable, but a nurse brings clinical expertise.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">Do I need labor and delivery experience to become a postpartum concierge nurse?</h3>
          <p>L&D or mother-baby experience is ideal but not the only path. Nurses with strong med-surg, pediatric, or community health backgrounds can transition with additional training.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">Can a postpartum concierge nurse help with breastfeeding?</h3>
          <p>Yes. Postpartum concierge nurses commonly provide breastfeeding support. Earning a lactation certification can significantly enhance your services and credibility.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">How long do postpartum concierge nursing clients typically need services?</h3>
          <p>Most clients use services during the first 1-6 weeks after birth. The level of support varies from intensive first-week care to weekly check-ins over the first month or two.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">Is postpartum concierge nursing covered by insurance?</h3>
          <p>Postpartum concierge nursing is typically a private-pay service, giving you the freedom to set your own rates and deliver personalized care.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-navy mb-2">What certifications enhance a postpartum concierge nursing business?</h3>
          <p>Valuable certifications include CLC, IBCLC, NRP, and maternal-newborn nursing certification (RNC-MNN). These demonstrate specialized expertise.</p>
        </div>
      </div>
    </ResourceLayout>
  );
}

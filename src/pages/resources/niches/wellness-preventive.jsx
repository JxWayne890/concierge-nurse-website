import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is', text: 'What Is Wellness and Preventive Care Concierge Nursing?' },
  { id: 'services', text: 'What Services Do Wellness Concierge Nurses Provide?' },
  { id: 'clients', text: 'Who Are Your Ideal Clients?' },
  { id: 'background', text: 'What Nursing Background Do You Need?' },
  { id: 'getting-started', text: 'How to Get Started' },
  { id: 'costs', text: 'Startup Costs' },
  { id: 'get-clients', text: 'How to Get Wellness Clients' },
  { id: 'challenges', text: 'Challenges and Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'Executive Health Concierge Nursing', description: 'Serve corporate leaders with proactive health management.', link: '/resources/niches/executive-health-concierge-nursing', category: 'Niches' },
  { title: 'IV Therapy Nursing Business', description: 'Add IV hydration and vitamin infusions to your wellness offerings.', link: '/resources/niches/iv-therapy-nursing-business', category: 'Niches' },
  { title: 'How to Start a Concierge Nursing Business', description: 'The complete step-by-step guide to launching your private nursing practice.', link: '/resources/how-to-start-concierge-nursing-business', category: 'Getting Started' },
];

const cta = { title: 'Ready to Launch Your Wellness Nursing Practice?', description: 'Get the tools, templates, and mentorship to build a wellness-focused concierge nursing business that empowers clients to live healthier lives.', buttonText: 'Join the Accelerator', buttonLink: '/accelerator' };

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is wellness concierge nursing the same as health coaching?", "acceptedAnswer": { "@type": "Answer", "text": "No. Wellness concierge nursing combines clinical assessment skills with wellness guidance. Your nursing license and ability to perform assessments and interpret clinical data are your differentiators." } },
    { "@type": "Question", "name": "Do I need a health coaching certification?", "acceptedAnswer": { "@type": "Answer", "text": "Not required but valuable. Certifications like NBC-HWC add behavior change methodology and motivational interviewing skills that complement your clinical knowledge." } },
    { "@type": "Question", "name": "Can I order lab tests for my wellness clients?", "acceptedAnswer": { "@type": "Answer", "text": "As an RN, typically not independently. You would need a collaborating physician, a direct-to-consumer lab service, or have clients bring results from their own physician." } },
    { "@type": "Question", "name": "What is the difference between wellness nursing and functional medicine nursing?", "acceptedAnswer": { "@type": "Answer", "text": "Wellness nursing focuses on evidence-based prevention — screenings, lifestyle modifications, and risk factor management. Functional medicine takes a root-cause approach with specialized testing." } },
    { "@type": "Question", "name": "Can I offer wellness services virtually?", "acceptedAnswer": { "@type": "Answer", "text": "Many wellness services work well virtually, including coaching, wellness planning, and education. In-person visits are needed for physical assessments." } },
    { "@type": "Question", "name": "How do I differentiate my wellness practice from the many wellness influencers online?", "acceptedAnswer": { "@type": "Answer", "text": "Your nursing license, clinical assessment skills, and evidence-based approach are your differentiators. Always lead with your clinical credentials." } }
  ]
};

export default function WellnessPreventive() {
  return (
    <ResourceLayout title="How to Start a Wellness and Preventive Care Concierge Nursing Business" description="A complete guide to building a concierge nursing business focused on wellness optimization and disease prevention. Learn about services, ideal clients, startup steps, and how to help clients achieve their best health proactively." canonical="/resources/niches/wellness-preventive-care-nursing" category="Niches" categorySlug="/resources/concierge-nursing-niches" headings={headings} relatedResources={relatedResources} cta={cta} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>A wellness and preventive care concierge nursing business helps healthy and health-conscious clients optimize their wellbeing and prevent disease through personalized health assessments, preventive screenings coordination, lifestyle coaching, and evidence-based wellness planning. Unlike disease-focused nursing, this niche centers on keeping people healthy rather than treating existing conditions.</p>
      </QuickAnswer>

      <h2 id="what-is">What Is Wellness and Preventive Care Concierge Nursing?</h2>
      <p>Wellness and preventive care concierge nursing flips the traditional healthcare model. Instead of waiting for people to become sick, you work proactively to maintain and optimize health — identifying risk factors early, ensuring preventive screenings happen, supporting lifestyle choices, and helping clients make informed health decisions.</p>
      <p>The standard healthcare system is reactive, with preventive screenings often missed and risk factors progressing silently. A wellness concierge nurse provides the consistent, proactive clinical attention that preventive health requires. This niche pairs naturally with <Link to="/resources/niches/executive-health-concierge-nursing" className="text-gold hover:text-gold/80 underline">executive health</Link> and <Link to="/resources/niches/iv-therapy-nursing-business" className="text-gold hover:text-gold/80 underline">IV therapy</Link>.</p>

      <h2 id="services">What Services Do Wellness Concierge Nurses Provide?</h2>
      <p>Services include comprehensive wellness assessments, preventive screening coordination, personalized wellness planning, health coaching and behavior change support, biometric monitoring, lab result interpretation (in coordination with physicians), nutritional guidance, and stress and sleep optimization strategies.</p>
      <p className="text-navy font-medium mt-4">Design your wellness practice model inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="clients">Who Are Your Ideal Clients?</h2>
      <p>Ideal clients include health-conscious professionals, midlife adults focused on longevity, clients with concerning family health histories, post-illness recovery clients focused on prevention, biohackers and optimization enthusiasts, and couples or families wanting comprehensive wellness programs.</p>

      <h2 id="background">What Nursing Background Do You Need?</h2>
      <p>Useful backgrounds include primary care, occupational health, community health, cardiac rehab, and health education nursing. Supplementary training in health coaching (NBC-HWC), nutrition, or integrative health enhances your offerings. A strong understanding of evidence-based preventive health guidelines is essential.</p>

      <h2 id="getting-started">How to Get Started in Wellness and Preventive Care Concierge Nursing</h2>
      <p>Getting started involves defining your evidence-based wellness philosophy, considering health coaching certification, forming your business entity, securing insurance, designing tiered service packages (virtual and in-person), and building referral partnerships with complementary wellness professionals.</p>
      <p className="text-navy font-medium mt-4">The <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link> helps you build a wellness practice grounded in clinical excellence.</p>

      <h2 id="costs">Startup Costs for Wellness and Preventive Care Concierge Nursing</h2>
      <p>Budget for business formation, optional health coaching certification, insurance, assessment and monitoring equipment, telehealth platform, website and branding, and content marketing. The investment is moderate, especially if you start with a hybrid virtual and in-person model.</p>
      <p className="text-navy font-medium mt-4">Plan your investment with the <Link to="/toolkits" className="text-gold hover:underline">Business Toolkit</Link>.</p>

      <h2 id="get-clients">How to Get Wellness Clients</h2>
      <p>Effective channels include gyms and fitness studios, nutritionists and registered dietitians, concierge physicians, corporate wellness programs, wellness events and health fairs, and content marketing on social media. The wellness audience is highly active online and responsive to evidence-based health content.</p>
      <p className="text-navy font-medium mt-4">Learn client attraction strategies in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="challenges">Challenges and Considerations</h2>
      <p>Challenges include maintaining evidence-based recommendations in a trend-driven industry, scope of practice boundaries with nutrition and mental health, demonstrating long-term ROI to clients, competing with free online health information, sustaining client motivation for behavior change, and building recurring revenue through subscription models. Know your <Link to="/resources/state-requirements-concierge-nursing" className="text-gold hover:text-gold/80 underline">state requirements</Link>.</p>

      <h2 id="faq">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Is wellness concierge nursing the same as health coaching?</h3><p>No. Wellness concierge nursing combines clinical assessment skills with wellness guidance. Your nursing license and ability to perform assessments and interpret clinical data are your differentiators.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Do I need a health coaching certification?</h3><p>Not required but valuable. Certifications like NBC-HWC add behavior change methodology and motivational interviewing skills that complement your clinical knowledge.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Can I order lab tests for my wellness clients?</h3><p>As an RN, typically not independently. You would need a collaborating physician, a direct-to-consumer lab service, or have clients bring results from their own physician.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">What is the difference between wellness nursing and functional medicine nursing?</h3><p>Wellness nursing focuses on evidence-based prevention — screenings, lifestyle modifications, and risk factor management. Functional medicine takes a root-cause approach with specialized testing.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Can I offer wellness services virtually?</h3><p>Many wellness services work well virtually, including coaching, wellness planning, and education. In-person visits are needed for physical assessments.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">How do I differentiate my wellness practice from the many wellness influencers online?</h3><p>Your nursing license, clinical assessment skills, and evidence-based approach are your differentiators. Always lead with your clinical credentials.</p></div>
      </div>
    </ResourceLayout>
  );
}

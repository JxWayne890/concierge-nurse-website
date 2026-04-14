import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is', text: 'What Is Travel Medicine Concierge Nursing?' },
  { id: 'services', text: 'What Services Do Travel Medicine Nurses Provide?' },
  { id: 'clients', text: 'Who Are Your Ideal Clients?' },
  { id: 'background', text: 'What Nursing Background Do You Need?' },
  { id: 'getting-started', text: 'How to Get Started' },
  { id: 'costs', text: 'Startup Costs' },
  { id: 'get-clients', text: 'How to Get Travel Medicine Clients' },
  { id: 'challenges', text: 'Challenges and Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'Executive Health Concierge Nursing', description: 'Serve corporate executives with proactive health management and coordination.', link: '/resources/niches/executive-health-concierge-nursing', category: 'Niches' },
  { title: 'Wellness and Preventive Care Nursing', description: 'Focus on proactive health optimization and disease prevention.', link: '/resources/niches/wellness-preventive-care-nursing', category: 'Niches' },
  { title: 'How to Start a Concierge Nursing Business', description: 'The complete step-by-step guide to launching your private nursing practice.', link: '/resources/how-to-start-concierge-nursing-business', category: 'Getting Started' },
];

const cta = { title: 'Ready to Launch Your Travel Medicine Practice?', description: 'Get the tools and mentorship to build a travel medicine concierge nursing business that serves adventurous clients worldwide.', buttonText: 'Join the Accelerator', buttonLink: '/accelerator' };

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can an RN administer travel vaccines independently?", "acceptedAnswer": { "@type": "Answer", "text": "This depends on your state's nurse practice act. Some states allow RNs to administer vaccines under standing orders, while others require direct physician orders. Verify your state's regulations." } },
    { "@type": "Question", "name": "Do I need special certification for travel medicine nursing?", "acceptedAnswer": { "@type": "Answer", "text": "While not legally required, the Certificate in Travel Health (CTH) from ISTM is the recognized credential and significantly enhances your credibility." } },
    { "@type": "Question", "name": "Can I prescribe travel medications like malaria prophylaxis?", "acceptedAnswer": { "@type": "Answer", "text": "RNs cannot prescribe. You would need a collaborative arrangement with a physician or be a nurse practitioner. RNs can educate clients and coordinate prescriptions." } },
    { "@type": "Question", "name": "What is the demand for travel medicine nursing?", "acceptedAnswer": { "@type": "Answer", "text": "International travel continues to grow, driving demand for personalized pre-travel health consultations across corporate, adventure, and academic travel sectors." } },
    { "@type": "Question", "name": "Can I offer travel medicine services virtually?", "acceptedAnswer": { "@type": "Answer", "text": "Many services work well virtually, including consultations, risk assessments, and education. Only immunization administration requires in-person visits." } },
    { "@type": "Question", "name": "Do I need to travel with clients?", "acceptedAnswer": { "@type": "Answer", "text": "Most travel medicine nurses provide pre-travel and post-travel services rather than accompanying clients, though travel companion services are a premium add-on." } }
  ]
};

export default function TravelMedicine() {
  return (
    <ResourceLayout title="How to Start a Travel Medicine Concierge Nursing Business" description="Learn how to build a concierge nursing business focused on travel health. This guide covers services, certifications, startup costs, and strategies for attracting travelers who need pre-trip health preparation." canonical="/resources/niches/travel-medicine-concierge-nursing" category="Niches" categorySlug="/resources/concierge-nursing-niches" headings={headings} relatedResources={relatedResources} cta={cta} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>A travel medicine concierge nursing business provides personalized pre-travel health consultations, immunization coordination, travel health education, and post-travel health assessments for individuals and groups planning international or adventure travel. You help travelers prepare safely by addressing vaccination needs, medication planning, and destination-specific health risks.</p>
      </QuickAnswer>

      <h2 id="what-is">What Is Travel Medicine Concierge Nursing?</h2>
      <p>Travel medicine concierge nursing is a specialized private nursing service that prepares travelers for health risks associated with their destinations. Most primary care physicians have limited training in travel medicine and lack the time for comprehensive, destination-specific health planning.</p>
      <p>This niche combines clinical nursing knowledge with a deep understanding of global health risks, immunization science, and travel health guidelines from organizations like the CDC and WHO. It appeals to nurses who enjoy continuous learning, global health, and working with motivated, health-conscious clients.</p>

      <h2 id="services">What Services Do Travel Medicine Nurses Provide?</h2>
      <p>Common services include pre-travel health consultations, immunization planning and administration (within scope), medication coordination for prophylaxis, customized travel health kits, chronic condition travel planning, group and corporate travel health programs, post-travel health screening, and travel health education covering food safety, insect prevention, and altitude awareness.</p>
      <p className="text-navy font-medium mt-4">Build your travel medicine service model with the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="clients">Who Are Your Ideal Clients?</h2>
      <p>Ideal clients include adventure travelers heading to developing regions, corporate travelers going international, mission and volunteer groups, study abroad students and families, travelers with chronic conditions needing specialized planning, and luxury travelers wanting VIP preparation.</p>

      <h2 id="background">What Nursing Background Do You Need?</h2>
      <p>Useful backgrounds include public health, immunization clinic, emergency, occupational health, and primary care nursing. The Certificate in Travel Health (CTH) from the International Society of Travel Medicine is the recognized professional credential and is strongly recommended.</p>

      <h2 id="getting-started">How to Get Started in Travel Medicine Concierge Nursing</h2>
      <p>Getting started involves obtaining travel health education, understanding your state's regulatory framework around immunization administration, establishing physician collaboration for orders and prescriptions, forming your business entity, and building partnerships with travel agencies and corporate travel departments.</p>
      <p className="text-navy font-medium mt-4">The <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link> provides a structured launch roadmap for travel medicine practices.</p>

      <h2 id="costs">Startup Costs for Travel Medicine Concierge Nursing</h2>
      <p>Budget for business formation, CTH certification and training, professional and general liability insurance, vaccine storage (if applicable), initial vaccine inventory (if applicable), website, and clinical supplies. Starting with consultation-only services and referring for immunizations can significantly reduce initial costs.</p>
      <p className="text-navy font-medium mt-4">Get budgeting tools inside the <Link to="/toolkits" className="text-gold hover:underline">Business Toolkit</Link>.</p>

      <h2 id="get-clients">How to Get Travel Medicine Clients</h2>
      <p>Key referral sources include travel agencies and advisors, corporate travel departments, university study abroad offices, churches and mission organizations, adventure tour operators, and online content marketing with destination-specific health information.</p>
      <p className="text-navy font-medium mt-4">Learn client acquisition strategies in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="challenges">Challenges and Considerations</h2>
      <p>Challenges include regulatory complexity around immunization administration, keeping knowledge current as travel health recommendations change frequently, vaccine inventory management, seasonal demand fluctuations, liability for travel advice, and competition from pharmacy-based immunization services.</p>

      <h2 id="faq">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Can an RN administer travel vaccines independently?</h3><p>This depends on your state's nurse practice act. Some states allow RNs to administer vaccines under standing orders, while others require direct physician orders. Verify your state's regulations.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Do I need special certification for travel medicine nursing?</h3><p>While not legally required, the Certificate in Travel Health (CTH) from ISTM is the recognized credential and significantly enhances your credibility.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Can I prescribe travel medications like malaria prophylaxis?</h3><p>RNs cannot prescribe. You would need a collaborative arrangement with a physician or be a nurse practitioner. RNs can educate clients and coordinate prescriptions.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">What is the demand for travel medicine nursing?</h3><p>International travel continues to grow, driving demand for personalized pre-travel health consultations across corporate, adventure, and academic travel sectors.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Can I offer travel medicine services virtually?</h3><p>Many services work well virtually, including consultations, risk assessments, and education. Only immunization administration requires in-person visits.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Do I need to travel with clients?</h3><p>Most travel medicine nurses provide pre-travel and post-travel services rather than accompanying clients, though travel companion services are a premium add-on.</p></div>
      </div>
    </ResourceLayout>
  );
}

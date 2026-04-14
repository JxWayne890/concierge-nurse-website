import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is', text: 'What Is an IV Therapy Nursing Business?' },
  { id: 'services', text: 'What Services Do IV Therapy Nurses Provide?' },
  { id: 'clients', text: 'Who Are Your Ideal Clients?' },
  { id: 'background', text: 'What Nursing Background Do You Need?' },
  { id: 'getting-started', text: 'How to Get Started in IV Therapy Nursing' },
  { id: 'costs', text: 'Startup Costs' },
  { id: 'get-clients', text: 'How to Get IV Therapy Clients' },
  { id: 'challenges', text: 'Challenges and Considerations' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'Wellness and Preventive Care Nursing', description: 'Build a broader wellness-focused concierge nursing practice.', link: '/resources/niches/wellness-preventive-care-nursing', category: 'Niches' },
  { title: 'Luxury VIP Concierge Nursing', description: 'Serve high-end clients who expect premium health services.', link: '/resources/niches/luxury-vip-concierge-nursing', category: 'Niches' },
  { title: 'How to Price Concierge Nursing Services', description: 'Set rates that reflect your expertise and attract the right clients.', link: '/resources/how-to-price-concierge-nursing-services', category: 'Financial' },
];

const cta = { title: 'Ready to Launch Your IV Therapy Business?', description: 'Get the regulatory guidance, templates, and business strategies to build a compliant and profitable IV therapy nursing practice.', buttonText: 'Join the Accelerator', buttonLink: '/accelerator' };

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Do I need a physician to start an IV therapy nursing business?", "acceptedAnswer": { "@type": "Answer", "text": "In most states, yes. IV therapy requires physician orders or a collaborative practice agreement. The specific requirements vary by state." } },
    { "@type": "Question", "name": "Is IV therapy regulated differently than other concierge nursing services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. IV therapy often faces additional regulatory scrutiny. Some states require specific business licenses, pharmacy permits, or medical director oversight." } },
    { "@type": "Question", "name": "What types of IV infusions are most popular?", "acceptedAnswer": { "@type": "Answer", "text": "Popular services include hydration therapy, vitamin infusions, immune support, athletic recovery, and hangover recovery. Offerings depend on state regulations and medical director protocols." } },
    { "@type": "Question", "name": "How much do IV therapy nurses charge per infusion?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing varies by market and infusion type. Research your local market and factor in supply costs, overhead, and time per client." } },
    { "@type": "Question", "name": "Can I operate a mobile IV therapy business?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, mobile IV therapy is one of the most popular models. Ensure your state allows mobile healthcare services and you have protocols for managing adverse reactions." } },
    { "@type": "Question", "name": "What are the biggest risks in IV therapy nursing?", "acceptedAnswer": { "@type": "Answer", "text": "Primary risks include adverse reactions, infiltration, infection, and air embolism. Thorough screening, proper technique, emergency protocols, and insurance are essential." } }
  ]
};

export default function IVTherapy() {
  return (
    <ResourceLayout title="How to Start an IV Therapy Nursing Business" description="A comprehensive guide to launching an IV therapy nursing business. Learn about regulations, services, startup costs, client acquisition, and how to build a compliant and profitable IV hydration practice." canonical="/resources/niches/iv-therapy-nursing-business" category="Niches" categorySlug="/resources/concierge-nursing-niches" headings={headings} relatedResources={relatedResources} cta={cta} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>An IV therapy nursing business provides intravenous hydration, vitamin infusions, and wellness drips to clients in their homes, offices, hotel rooms, or your own infusion suite. This niche requires careful regulatory compliance — including physician oversight in most states — but offers strong demand from wellness-minded clients, athletes, travelers, and event-goers seeking fast hydration and nutrient delivery.</p>
      </QuickAnswer>

      <h2 id="what-is">What Is an IV Therapy Nursing Business?</h2>
      <p>An IV therapy nursing business delivers intravenous fluids, vitamins, minerals, and other approved substances directly to clients outside of traditional medical facilities. The appeal lies in direct delivery — nutrients bypass the digestive system and enter the bloodstream immediately.</p>
      <p>This niche has grown significantly with the expansion of wellness culture. However, IV therapy is one of the more heavily regulated concierge nursing niches because you are administering substances directly into the bloodstream. Most states require physician orders, medical director oversight, or collaborative practice agreements. Understanding and complying with your state's specific regulations is the essential first step.</p>

      <h2 id="services">What Services Do IV Therapy Nurses Provide?</h2>
      <p>Common services include hydration therapy, vitamin and mineral infusions, immune support infusions, athletic recovery infusions, pre- and post-event services, NAD+ infusions, add-on intramuscular injections, and pre-infusion client health screening. All offerings must align with your state regulations and medical director protocols.</p>
      <p className="text-navy font-medium mt-4">Navigate the regulatory setup with guidance from the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="clients">Who Are Your Ideal Clients?</h2>
      <p>Ideal clients include wellness enthusiasts who schedule regular infusions, athletes seeking rapid recovery, travelers and jet-lagged professionals, event and party goers, busy professionals wanting a quick wellness boost, and bridal parties and groups booking IV therapy as an experience.</p>

      <h2 id="background">What Nursing Background Do You Need?</h2>
      <p>Excellent IV access skills are the clinical foundation. Relevant backgrounds include emergency department, infusion center, ICU, PACU, and vascular access team nursing. Beyond IV skills, you need strong assessment abilities, client screening competence, and emergency management readiness. ACLS certification is recommended.</p>

      <h2 id="getting-started">How to Get Started in IV Therapy Nursing</h2>
      <p>Launching an IV therapy business requires thorough regulatory research, securing a medical director, forming your business entity, obtaining comprehensive insurance, establishing supply chain relationships, and choosing your service model (mobile, brick-and-mortar, or hybrid). The regulatory complexity of this niche makes expert guidance particularly valuable.</p>
      <p className="text-navy font-medium mt-4">The <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link> includes regulatory navigation and business setup for IV therapy practices.</p>

      <h2 id="costs">Startup Costs for IV Therapy Nursing</h2>
      <p>IV therapy generally has higher startup costs than other concierge nursing niches due to supply costs, medical director fees, and regulatory requirements. Budget for business formation and legal consultation, medical director agreement, professional and general liability insurance, initial IV supply inventory, clinical equipment, website and branding, and marketing. A brick-and-mortar location adds significant additional expense.</p>
      <p className="text-navy font-medium mt-4">Plan your startup budget with the <Link to="/toolkits" className="text-gold hover:underline">Business Toolkit</Link>.</p>

      <h2 id="get-clients">How to Get IV Therapy Clients</h2>
      <p>Effective channels include social media marketing (IV therapy is highly visual and shareable), hotel and hospitality partnerships, gym and fitness studio partnerships, event and festival partnerships, med spa collaborations, Google Ads and local SEO, and referral and loyalty programs for repeat customers.</p>
      <p className="text-navy font-medium mt-4">Master client acquisition strategies in the <Link to="/accelerator" className="text-gold hover:underline">Accelerator Program</Link>.</p>

      <h2 id="challenges">Challenges and Considerations</h2>
      <p>Key challenges include regulatory compliance (the single most important factor), maintaining a strong medical director relationship, adverse reaction management in non-clinical settings, supply costs and margin management, avoiding prohibited health claims in marketing, and potential market saturation in some cities.</p>

      <h2 id="faq">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Do I need a physician to start an IV therapy nursing business?</h3><p>In most states, yes. IV therapy requires physician orders or a collaborative practice agreement. The specific requirements vary by state.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Is IV therapy regulated differently than other concierge nursing services?</h3><p>Yes. IV therapy often faces additional regulatory scrutiny. Some states require specific business licenses, pharmacy permits, or medical director oversight.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">What types of IV infusions are most popular?</h3><p>Popular services include hydration therapy, vitamin infusions, immune support, athletic recovery, and hangover recovery. Offerings depend on state regulations and medical director protocols.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">How much do IV therapy nurses charge per infusion?</h3><p>Pricing varies by market and infusion type. Research your local market and factor in supply costs, overhead, and time per client.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">Can I operate a mobile IV therapy business?</h3><p>Yes, mobile IV therapy is one of the most popular models. Ensure your state allows mobile healthcare services and you have protocols for managing adverse reactions.</p></div>
        <div><h3 className="font-heading text-lg font-bold text-navy mb-2">What are the biggest risks in IV therapy nursing?</h3><p>Primary risks include adverse reactions, infiltration, infection, and air embolism. Thorough screening, proper technique, emergency protocols, and insurance are essential.</p></div>
      </div>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Where should concierge nurses network to find clients?", "acceptedAnswer": { "@type": "Answer", "text": "Focus on healthcare professional events, local chamber of commerce meetings, business networking groups, community health fairs, and luxury service provider gatherings." } },
    { "@type": "Question", "name": "How do I introduce myself as a concierge nurse at networking events?", "acceptedAnswer": { "@type": "Answer", "text": "Lead with the problem you solve rather than your job title. Most people have never heard of concierge nursing, so describe the outcomes you deliver." } },
    { "@type": "Question", "name": "Is it worth joining a local chamber of commerce as a concierge nurse?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for most concierge nurses. Chamber membership provides regular networking opportunities, business directory listings, and community visibility." } },
    { "@type": "Question", "name": "How do I follow up after meeting someone at a networking event?", "acceptedAnswer": { "@type": "Answer", "text": "Send a personalized email or LinkedIn connection request within 24 to 48 hours. Reference something specific from your conversation and offer value rather than asking for something." } },
    { "@type": "Question", "name": "How much time should I spend networking each month?", "acceptedAnswer": { "@type": "Answer", "text": "Dedicate four to eight hours per month to structured networking activities. Consistency matters more than volume." } }
  ]
};

export default function Networking() {
  return (
    <ResourceLayout
      title="Networking Strategies for Concierge Nurse Entrepreneurs"
      description="Where to network, how to make meaningful connections, and how to turn professional relationships into client referrals and business growth opportunities."
      canonical="/resources/marketing/concierge-nurse-networking"
      category="Marketing"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'networking-mindset', text: 'The Right Networking Mindset' },
        { id: 'where-to-network', text: 'Where to Network as a Concierge Nurse' },
        { id: 'introduction-strategy', text: 'Crafting Your Introduction' },
        { id: 'building-relationships', text: 'Building Meaningful Professional Relationships' },
        { id: 'online-networking', text: 'Online Networking and LinkedIn' },
        { id: 'strategic-partnerships', text: 'Creating Strategic Business Partnerships' },
        { id: 'follow-up-system', text: 'Creating a Follow-Up System' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        { title: 'How to Build Physician Referral Relationships', description: 'Focused strategies for networking with physicians and healthcare providers.', link: '/resources/marketing/physician-referral-relationships', category: 'Marketing' },
        { title: 'How to Explain Concierge Nursing', description: 'Master the art of explaining what you do to people unfamiliar with concierge nursing.', link: '/resources/marketing/how-to-explain-concierge-nursing', category: 'Marketing' },
        { title: 'How to Get Featured in Local Media', description: 'Turn networking connections into media opportunities and local visibility.', link: '/resources/marketing/concierge-nurse-local-media', category: 'Marketing' },
      ]}
    >
      <QuickAnswer>
        <p>Effective networking for concierge nurses means showing up consistently at the right events, leading with the problems you solve rather than your job title, and following up deliberately to build genuine relationships. Focus on healthcare gatherings, local business groups, and community events where your ideal clients or referral sources spend time.</p>
      </QuickAnswer>

      <h2 id="networking-mindset">The Right Networking Mindset</h2>
      <p>Effective networking is not about collecting business cards or pitching your services to everyone. It is about building genuine professional relationships where both parties benefit over time. The most successful concierge nurse networkers approach events with curiosity and a willingness to help others first.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="where-to-network">Where to Network as a Concierge Nurse</h2>
      <p>The best networking opportunities for concierge nurses include healthcare professional events, business networking groups, community events, specialty-specific gatherings, and luxury service provider events. Where you network should be determined by where your ideal clients and referral sources already gather.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="introduction-strategy">Crafting Your Introduction</h2>
      <p>How you introduce yourself determines whether the conversation continues or dies. Most people have never heard of concierge nursing, so leading with the problem you solve rather than your job title is essential. Read our guide on <Link to="/resources/marketing/how-to-explain-concierge-nursing" className="text-gold hover:text-gold/80 underline">how to explain concierge nursing</Link> for detailed frameworks.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="building-relationships">Building Meaningful Professional Relationships</h2>
      <p>A single networking event is not a relationship. The value of networking comes from repeated interactions and genuine exchanges of value over time. Attending the same events regularly and scheduling one-on-one conversations with promising connections builds the depth that leads to referrals.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="online-networking">Online Networking and LinkedIn</h2>
      <p>Online networking extends your reach and allows you to maintain relationships between in-person events. LinkedIn is the most valuable platform for professional connections with physicians, healthcare administrators, and corporate wellness directors in your area.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="strategic-partnerships">Creating Strategic Business Partnerships</h2>
      <p>Some of the most productive networking relationships are formalized into partnerships with complementary businesses like elder law attorneys, financial advisors, home health agencies, and senior living communities. These partnerships create a consistent flow of warm referrals from professionals who serve the same client demographic.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="follow-up-system">Creating a Follow-Up System</h2>
      <p>Most people you meet at networking events will forget about you within a week unless you follow up deliberately. A simple system for timely follow-up, regular check-ins, and relationship tracking prevents promising connections from falling through the cracks. Networking is one component of your overall <Link to="/resources/marketing/concierge-nursing-business-marketing" className="text-gold hover:text-gold/80 underline">marketing strategy</Link>.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Where should concierge nurses network?</h3>
            <p>Healthcare events, chamber of commerce meetings, business groups, community health fairs, and luxury service provider gatherings.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I introduce myself?</h3>
            <p>Lead with the problem you solve, not your job title. Describe outcomes rather than defining concierge nursing as a concept.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is joining a chamber of commerce worth it?</h3>
            <p>Yes, for regular networking opportunities, directory listings, and community visibility.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I follow up after an event?</h3>
            <p>Send a personalized message within 24 to 48 hours referencing your conversation and offering value.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much time should I spend networking?</h3>
            <p>Four to eight hours per month of consistent effort produces better results than sporadic bursts of activity.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

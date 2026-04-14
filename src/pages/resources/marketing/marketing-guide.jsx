import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I start marketing my concierge nursing business with no budget?", "acceptedAnswer": { "@type": "Answer", "text": "Start with free strategies: optimize your Google Business Profile, ask satisfied clients for referrals, connect with local physicians, and post educational content on social media. These zero-cost methods can generate your first clients while you build revenue to invest in paid marketing." } },
    { "@type": "Question", "name": "What is the most effective marketing channel for concierge nurses?", "acceptedAnswer": { "@type": "Answer", "text": "Physician referrals and professional networking consistently generate the highest-quality clients for concierge nurses. These channels produce warm leads who already understand the value of personalized healthcare and are ready to invest in premium nursing services." } },
    { "@type": "Question", "name": "How long does it take for marketing to generate clients?", "acceptedAnswer": { "@type": "Answer", "text": "Referral-based strategies can generate clients within weeks. SEO and content marketing typically take three to six months to gain traction. Most concierge nurses see consistent inbound leads after six to twelve months of sustained marketing effort." } },
    { "@type": "Question", "name": "Should I hire a marketing agency for my concierge nursing business?", "acceptedAnswer": { "@type": "Answer", "text": "Most concierge nurses should handle their own marketing initially. You understand your clients, your clinical expertise, and your local market better than any agency. Once you are generating consistent revenue, you can outsource specific tasks." } },
    { "@type": "Question", "name": "How do I market concierge nursing when most people do not know what it is?", "acceptedAnswer": { "@type": "Answer", "text": "Lead with the problem you solve, not the label. Instead of saying you are a concierge nurse, describe the specific outcomes you deliver: post-surgical recovery support at home, chronic disease management, or medication coordination." } }
  ]
};

export default function MarketingGuide() {
  return (
    <ResourceLayout
      title="How to Market Your Concierge Nursing Business"
      description="A complete marketing framework for concierge nurses covering referral networks, digital presence, community outreach, and client retention strategies that actually work."
      canonical="/resources/marketing/concierge-nursing-business-marketing"
      category="Marketing"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'why-marketing-matters', text: 'Why Marketing Matters for Concierge Nurses' },
        { id: 'foundation-first', text: 'Build Your Marketing Foundation First' },
        { id: 'referral-networks', text: 'Referral Networks: Your Highest-Value Channel' },
        { id: 'digital-presence', text: 'Building Your Digital Presence' },
        { id: 'content-marketing', text: 'Content Marketing for Authority' },
        { id: 'community-outreach', text: 'Community Outreach and Local Visibility' },
        { id: 'client-retention', text: 'Client Retention as a Marketing Strategy' },
        { id: 'marketing-plan', text: 'Creating Your 90-Day Marketing Plan' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        { title: 'How to Build Physician Referral Relationships', description: 'Step-by-step strategies for earning referrals from physicians in your area.', link: '/resources/marketing/physician-referral-relationships', category: 'Marketing' },
        { title: 'Social Media Marketing for Concierge Nurses', description: 'Platform-by-platform guide to building your brand on social media.', link: '/resources/marketing/concierge-nurse-social-media', category: 'Marketing' },
        { title: 'How to Set Your Rates as a Concierge Nurse', description: 'Pricing frameworks that reflect your value and attract the right clients.', link: '/resources/financial/concierge-nurse-rates', category: 'Financial' },
      ]}
    >
      <QuickAnswer>
        <p>Marketing a concierge nursing business requires a multi-channel approach centered on physician referrals, a professional online presence, educational content, and community networking. Consistency across these channels builds the trust that converts prospects into long-term clients.</p>
      </QuickAnswer>

      <h2 id="why-marketing-matters">Why Marketing Matters for Concierge Nurses</h2>
      <p>Clinical excellence alone will not fill your client roster. The concierge nursing industry is still relatively new, and most consumers have never heard the term. Your marketing has to educate people about what concierge nursing is and persuade them that you are the right provider.</p>
      <p>The concierge nurses who build sustainable practices are the ones who treat marketing as a core business function, not an afterthought.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="foundation-first">Build Your Marketing Foundation First</h2>
      <p>Before you spend a dollar on advertising or an hour on social media, you need three things in place: a clear understanding of your ideal client, a compelling way to describe what you do, and a professional online presence that backs up your credibility.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="referral-networks">Referral Networks: Your Highest-Value Channel</h2>
      <p>For most concierge nurses, referrals from healthcare providers generate the highest-quality clients. A physician who recommends you to a patient is essentially pre-selling your services. Building these relationships takes time, but they become your most reliable source of clients. Read our complete guide on <Link to="/resources/marketing/physician-referral-relationships" className="text-gold hover:text-gold/80 underline">building physician referral relationships</Link>.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="digital-presence">Building Your Digital Presence</h2>
      <p>Your digital presence works around the clock. A professional website, optimized <Link to="/resources/marketing/concierge-nurse-google-business-profile" className="text-gold hover:text-gold/80 underline">Google Business Profile</Link>, and consistent <Link to="/resources/marketing/concierge-nurse-social-media" className="text-gold hover:text-gold/80 underline">social media</Link> build confidence in your services even when you are not actively marketing.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="content-marketing">Content Marketing for Authority</h2>
      <p>Creating educational content positions you as an authority in your niche and gives potential clients a reason to trust you before they ever meet you. Building an <Link to="/resources/marketing/concierge-nurse-email-marketing" className="text-gold hover:text-gold/80 underline">email list</Link> allows you to nurture these relationships over time.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="community-outreach">Community Outreach and Local Visibility</h2>
      <p>Concierge nursing is a local business, and local visibility matters enormously. Getting involved in your community creates touchpoints where potential clients and referral sources encounter you naturally. The concierge nurse who is known and trusted in her community will always outperform the one with the biggest advertising budget.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="client-retention">Client Retention as a Marketing Strategy</h2>
      <p>Your existing clients are your most powerful marketing asset. A satisfied client who tells their family, friends, and physicians about your services generates higher-quality leads than any advertisement. Client retention is not just good business practice; it is your most cost-effective marketing strategy.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="marketing-plan">Creating Your 90-Day Marketing Plan</h2>
      <p>A marketing plan prevents the feast-or-famine cycle that many concierge nurses experience. A consistent plan that covers your foundation, outreach, and momentum-building keeps your pipeline full. The structure and timing of your marketing activities matter as much as the activities themselves.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I start marketing my concierge nursing business with no budget?</h3>
            <p>Start with free strategies like your Google Business Profile, client referrals, physician connections, and educational social media content.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the most effective marketing channel for concierge nurses?</h3>
            <p>Physician referrals and professional networking consistently generate the highest-quality clients.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take for marketing to generate clients?</h3>
            <p>Referral-based strategies can generate clients within weeks. SEO and content marketing typically take three to six months to gain traction.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I hire a marketing agency for my concierge nursing business?</h3>
            <p>Most concierge nurses should handle their own marketing initially and outsource specific tasks once revenue is consistent.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I market concierge nursing when most people do not know what it is?</h3>
            <p>Lead with the problem you solve, not the label. Describe the specific outcomes you deliver rather than trying to define the industry.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-testimonials-matter', text: 'Why Testimonials Matter' },
  { id: 'when-to-ask', text: 'When to Ask for a Testimonial' },
  { id: 'how-to-ask', text: 'How to Ask (Scripts and Templates)' },
  { id: 'what-makes-great-testimonial', text: 'What Makes a Great Testimonial' },
  { id: 'where-to-use', text: 'Where to Use Testimonials' },
  { id: 'hipaa-compliance', text: 'HIPAA Compliance for Testimonials' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Photograph Your Work for Social Media Marketing', description: 'Pair visual content with client testimonials for maximum impact.', link: '/resources/guides/concierge-nurse-social-media-photography', category: 'Guides' },
  { title: 'How to Write a Concierge Nursing Elevator Pitch', description: 'Incorporate client outcomes into your pitch narrative.', link: '/resources/guides/concierge-nursing-elevator-pitch', category: 'Guides' },
  { title: 'How to Set Boundaries with Concierge Nursing Clients', description: 'Strong relationships lead to willing testimonial providers.', link: '/resources/guides/concierge-nurse-client-boundaries', category: 'Guides' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is it HIPAA compliant to use client testimonials?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as long as the client voluntarily provides the testimonial and gives written consent for its use. The client must initiate or agree to sharing their own health information. You should never pressure a client or reveal their identity without explicit written permission." } },
    { "@type": "Question", "name": "What if a client does not want to use their full name?", "acceptedAnswer": { "@type": "Answer", "text": "That is perfectly fine. Testimonials using first name and last initial, or even anonymous testimonials with a general description like 'post-surgical recovery client,' are still valuable. Respect your client's privacy preferences completely." } },
    { "@type": "Question", "name": "How many testimonials do I need?", "acceptedAnswer": { "@type": "Answer", "text": "Start collecting from your very first client. Even three to five strong testimonials can significantly impact your credibility. Aim to collect ongoing testimonials and rotate fresh ones into your marketing. Quality matters more than quantity." } },
    { "@type": "Question", "name": "Can I offer a discount in exchange for a testimonial?", "acceptedAnswer": { "@type": "Answer", "text": "While offering incentives for testimonials is not illegal, it can undermine credibility if disclosed. More importantly, the FTC requires disclosure of any material connection (like payment or discounts) between the endorser and the business. Genuine testimonials given freely are always more valuable." } },
    { "@type": "Question", "name": "Should I ask for video testimonials?", "acceptedAnswer": { "@type": "Answer", "text": "Video testimonials are incredibly powerful and more engaging than text alone. However, they require more effort from the client. If a client is enthusiastic, ask if they would be comfortable recording a brief video. Even a 30-second clip is valuable. Always get written consent for video use." } }
  ]
};

export default function Testimonials() {
  return (
    <ResourceLayout title="How to Get Testimonials from Concierge Nursing Clients" description="Learn when and how to ask for client testimonials, what makes a testimonial compelling, HIPAA compliance considerations, and how to use testimonials across your marketing." canonical="/resources/guides/concierge-nurse-testimonials" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>Client testimonials are the most powerful marketing tool for concierge nurses. Ask at the moment of highest satisfaction, make the request easy, and always obtain written consent before using any testimonial publicly.</p>
      </QuickAnswer>

      <p>In a service built on trust, hearing from real clients carries more weight than any amount of self-promotion. A single compelling testimonial can be the deciding factor for a potential client choosing your services.</p>

      <h2 id="why-testimonials-matter">Why Testimonials Matter</h2>
      <p>Testimonials provide social proof, reduce anxiety for prospective clients, differentiate your practice, and improve your SEO visibility. They are the most effective marketing asset available to concierge nurses.</p>

      <h2 id="when-to-ask">When to Ask for a Testimonial</h2>
      <p>Timing matters — ask when clients are most appreciative. The end of a successful recovery, a spontaneous compliment, or a follow-up check-in are all ideal moments. Knowing exactly when and how to make the ask is something we refine in our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.</p>

      <h2 id="how-to-ask">How to Ask (Scripts and Templates)</h2>
      <p>Most clients are happy to help when asked naturally and given an easy way to respond. The right approach feels authentic rather than transactional. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include ready-to-use request scripts and email templates.</p>

      <h2 id="what-makes-great-testimonial">What Makes a Great Testimonial</h2>
      <p>The most effective testimonials include specific outcomes, emotional impact, before-and-after contrast, and a clear recommendation. Specific details are far more powerful than generic praise.</p>

      <h2 id="where-to-use">Where to Use Testimonials</h2>
      <p>Feature testimonials on your website, Google Business Profile, social media, and referral materials for surgeon offices. Each platform has different best practices for display and formatting.</p>

      <h2 id="hipaa-compliance">HIPAA Compliance for Testimonials</h2>
      <p>Clients must voluntarily share their own information. You need signed written consent specifying how the testimonial will be used. Never add clinical details the client did not share, and always respect requests for anonymity.</p>

      <p>Building a library of testimonials is a long-term investment. For a complete marketing strategy including testimonial collection, explore our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Is it HIPAA compliant to use client testimonials?</h3><p>Yes, with voluntary written consent. The client controls what they share.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What if a client does not want to use their full name?</h3><p>Use first name and initial, or keep it anonymous. Even anonymous testimonials are valuable.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How many testimonials do I need?</h3><p>Start collecting from your first client. Even three to five strong ones significantly boost credibility.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I offer a discount in exchange for a testimonial?</h3><p>This can undermine credibility and requires FTC disclosure. Genuine, freely given testimonials are more valuable.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I ask for video testimonials?</h3><p>Video is extremely powerful. Ask enthusiastic clients if they would record a brief clip. Always get written consent.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

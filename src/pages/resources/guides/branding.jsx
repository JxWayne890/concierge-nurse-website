import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-branding-matters', text: 'Why Branding Matters for Concierge Nurses' },
  { id: 'choosing-business-name', text: 'Choosing Your Business Name' },
  { id: 'creating-your-logo', text: 'Creating Your Logo' },
  { id: 'brand-colors-fonts', text: 'Selecting Brand Colors and Fonts' },
  { id: 'brand-voice', text: 'Defining Your Brand Voice' },
  { id: 'applying-your-brand', text: 'Applying Your Brand Across Touchpoints' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Photograph Your Work for Social Media Marketing', description: 'Create visual content that reinforces your brand identity.', link: '/resources/guides/concierge-nurse-social-media-photography', category: 'Guides' },
  { title: 'How to Write a Concierge Nursing Elevator Pitch', description: 'Articulate your brand message in a compelling 30-second pitch.', link: '/resources/guides/concierge-nursing-elevator-pitch', category: 'Guides' },
  { title: 'How to Get Testimonials from Concierge Nursing Clients', description: 'Build social proof that reinforces your brand promise.', link: '/resources/guides/concierge-nurse-testimonials', category: 'Guides' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much should I spend on branding for my concierge nursing business?", "acceptedAnswer": { "@type": "Answer", "text": "You can create effective branding on any budget. DIY options using Canva or similar tools cost very little. Professional logo design can range from $200 to $2,000+. A comprehensive brand identity package from a designer typically costs $1,000 to $5,000. Start with what you can afford and refine as your business grows." } },
    { "@type": "Question", "name": "Should I use my own name or create a business name?", "acceptedAnswer": { "@type": "Answer", "text": "Both approaches work. Using your name (e.g., 'Sarah Smith Nursing Services') builds personal recognition. A business name (e.g., 'Coastal Care Concierge Nursing') creates a brand that can grow beyond you. Consider your long-term goals — if you plan to eventually hire other nurses, a business name may be more scalable." } },
    { "@type": "Question", "name": "Can I use a medical symbol like a cross or caduceus in my logo?", "acceptedAnswer": { "@type": "Answer", "text": "You can, but it is worth considering whether it sets you apart. Many healthcare businesses use these symbols, which can make your brand blend in rather than stand out. A distinctive mark that reflects your specific niche and approach is often more memorable than a generic medical symbol." } },
    { "@type": "Question", "name": "Do I need a professional photographer for my brand photos?", "acceptedAnswer": { "@type": "Answer", "text": "A professional brand photoshoot is a worthwhile investment when your budget allows, but it is not essential to start. A modern smartphone with good lighting can produce quality images for your initial branding. As your business grows, consider investing in professional headshots and brand photography." } },
    { "@type": "Question", "name": "How often should I rebrand my concierge nursing business?", "acceptedAnswer": { "@type": "Answer", "text": "A well-designed brand should last several years. Avoid rebranding too frequently, as consistency builds recognition and trust. However, if your services, target market, or business model changes significantly, a brand refresh may be appropriate. Minor updates (refreshing your website or updating photos) can be done annually." } }
  ]
};

export default function Branding() {
  return (
    <ResourceLayout title="How to Create a Brand and Logo for Your Concierge Nursing Business" description="Step-by-step guide to building a professional brand identity for your concierge nursing business, including business naming, logo design, color selection, and brand voice development." canonical="/resources/guides/concierge-nursing-brand-logo" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>Your brand communicates trust, competence, and the premium nature of your concierge nursing care before a client ever speaks with you. It includes your business name, logo, colors, fonts, and voice — applied consistently across every touchpoint.</p>
      </QuickAnswer>

      <p>Your brand is the first impression potential clients and referral partners have of your business. A cohesive, professional brand does not require a massive budget, but it does require intentional decisions about how you present your practice.</p>

      <h2 id="why-branding-matters">Why Branding Matters for Concierge Nurses</h2>
      <p>Concierge nursing is a premium service. Your brand should reflect that quality — building trust before the first meeting, differentiating you from competitors, justifying premium pricing, and creating consistency across all touchpoints.</p>

      <h2 id="choosing-business-name">Choosing Your Business Name</h2>
      <p>Your name should be memorable, professional, and ideally hint at what you do. Key considerations include simplicity, availability (state registry, domain, social handles), alignment with your niche, and long-term scalability. The naming strategy is something we help refine in our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link>.</p>

      <h2 id="creating-your-logo">Creating Your Logo</h2>
      <p>Your logo is the visual cornerstone of your brand. Options range from DIY tools to freelance designers to branding agencies, at every budget level. A simple, clean logo tends to be more versatile and memorable than a complex design.</p>

      <h2 id="brand-colors-fonts">Selecting Brand Colors and Fonts</h2>
      <p>Choose 2-3 colors and 1-2 fonts that communicate the right tone for your practice. Blues and greens convey trust. Gold and cream suggest luxury. Clean, modern fonts work well for healthcare. Test your choices across screens and print.</p>

      <h2 id="brand-voice">Defining Your Brand Voice</h2>
      <p>Your brand voice should be warm but professional, confident without excessive jargon, and reassuring to anxious clients. This voice should be consistent across your website, social media, emails, and in-person interactions.</p>

      <h2 id="applying-your-brand">Applying Your Brand Across Touchpoints</h2>
      <p>Consistency is what transforms design elements into a recognizable brand. Apply your identity across your website, social media, business cards, client documents, and email signature. Our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> include brand application checklists and templates.</p>

      <p>Building your brand is an ongoing process. For strategic guidance on positioning your brand in your local market, explore our <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How much should I spend on branding?</h3><p>Start with what your budget allows — DIY tools work for launch. Invest more as revenue grows.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I use my own name or create a business name?</h3><p>Both work. Consider whether you plan to hire other nurses or eventually sell the business.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use a medical symbol in my logo?</h3><p>You can, but a distinctive, unique mark is often more memorable than a generic medical symbol.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need professional brand photography?</h3><p>Not immediately. A smartphone with good lighting produces quality images for initial branding.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should I rebrand?</h3><p>A well-designed brand should last several years. Consistency builds trust. Minor refreshes can happen annually.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

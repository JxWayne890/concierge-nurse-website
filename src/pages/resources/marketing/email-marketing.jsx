import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What email marketing platform should a concierge nurse use?", "acceptedAnswer": { "@type": "Answer", "text": "Mailchimp, ConvertKit, and MailerLite are popular choices for small healthcare businesses. All three offer free tiers for small lists and easy-to-use email builders." } },
    { "@type": "Question", "name": "How often should a concierge nurse send emails to their list?", "acceptedAnswer": { "@type": "Answer", "text": "Send at least one email per month to stay top of mind. Two to four emails per month is ideal. Consistency matters more than frequency." } },
    { "@type": "Question", "name": "What should I write about in my email newsletter?", "acceptedAnswer": { "@type": "Answer", "text": "Share health tips related to your specialty, answer common questions, discuss seasonal health topics, and occasionally promote your services. Aim for roughly eighty percent educational and twenty percent promotional." } },
    { "@type": "Question", "name": "Do I need a lead magnet to build my email list?", "acceptedAnswer": { "@type": "Answer", "text": "A lead magnet significantly increases signups. Create a free resource related to your specialty that people receive in exchange for their email address." } },
    { "@type": "Question", "name": "Is email marketing HIPAA compliant?", "acceptedAnswer": { "@type": "Answer", "text": "General marketing emails and newsletters do not typically contain protected health information and are not subject to HIPAA. Never include patient-specific health information in marketing emails." } }
  ]
};

export default function EmailMarketing() {
  return (
    <ResourceLayout
      title="Email Marketing for Concierge Nurses: Build and Nurture Your List"
      description="How to build an email list, create valuable newsletter content, and use email marketing to stay top of mind with potential concierge nursing clients and referral sources."
      canonical="/resources/marketing/concierge-nurse-email-marketing"
      category="Marketing"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'why-email-marketing', text: 'Why Email Marketing Works for Concierge Nurses' },
        { id: 'choosing-a-platform', text: 'Choosing an Email Marketing Platform' },
        { id: 'building-your-list', text: 'Building Your Email List' },
        { id: 'lead-magnets', text: 'Creating a Lead Magnet' },
        { id: 'newsletter-content', text: 'What to Include in Your Newsletter' },
        { id: 'email-sequences', text: 'Automated Email Sequences' },
        { id: 'measuring-results', text: 'Measuring Your Email Marketing Results' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        { title: 'Social Media Marketing for Concierge Nurses', description: 'Use social media to drive subscribers to your email list.', link: '/resources/marketing/concierge-nurse-social-media', category: 'Marketing' },
        { title: 'How to Build a Website for Your Concierge Nursing Business', description: 'Your website is the primary tool for collecting email subscribers.', link: '/resources/marketing/concierge-nursing-website', category: 'Marketing' },
        { title: 'How to Market Your Concierge Nursing Business', description: 'Email marketing as part of your comprehensive marketing strategy.', link: '/resources/marketing/concierge-nursing-business-marketing', category: 'Marketing' },
      ]}
    >
      <QuickAnswer>
        <p>Email marketing allows concierge nurses to nurture relationships with potential clients over time by delivering valuable health content directly to their inbox. Start by choosing a platform, create a lead magnet that attracts your ideal client, and send a consistent newsletter with educational content.</p>
      </QuickAnswer>

      <h2 id="why-email-marketing">Why Email Marketing Works for Concierge Nurses</h2>
      <p>Email marketing solves a fundamental timing problem. Most people who learn about your services do not need them right now. Email keeps you connected so that when the need arises, you are already a trusted, familiar name. Unlike social media, email lands directly in someone's inbox without algorithm interference.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="choosing-a-platform">Choosing an Email Marketing Platform</h2>
      <p>You need a dedicated email marketing platform to send newsletters and manage your subscriber list. Several platforms offer free tiers suitable for getting started. The best choice is the one you find easiest to use, because simplicity increases the likelihood of sending emails consistently.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="building-your-list">Building Your Email List</h2>
      <p>Your email list grows through intentional collection points across all your marketing channels. Your website, social media, networking events, physician offices, and past clients all represent opportunities to invite people onto your list. Quality of subscribers matters more than quantity.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="lead-magnets">Creating a Lead Magnet</h2>
      <p>A lead magnet is a free resource you offer in exchange for an email address. It dramatically increases your signup rate because people receive immediate value. The best lead magnets are directly related to the problems your ideal client faces and demonstrate your expertise.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="newsletter-content">What to Include in Your Newsletter</h2>
      <p>Your newsletter should follow an approximate ratio of eighty percent educational content and twenty percent promotional content. Health tips, answers to common questions, behind-the-scenes updates, and client stories all make excellent newsletter material that keeps subscribers engaged.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="email-sequences">Automated Email Sequences</h2>
      <p>Email automation allows you to send a series of pre-written emails to new subscribers automatically. A welcome sequence that introduces new subscribers to you and your services ensures every new contact receives a carefully crafted introduction regardless of when they join your list.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="measuring-results">Measuring Your Email Marketing Results</h2>
      <p>Track open rate, click rate, unsubscribe rate, and list growth to understand your email performance. Focus on sending valuable content consistently in the early days. Email marketing is a long-term strategy that compounds over time as part of your <Link to="/resources/marketing/concierge-nursing-business-marketing" className="text-gold hover:text-gold/80 underline">overall marketing strategy</Link>.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What email platform should I use?</h3>
            <p>Mailchimp, ConvertKit, or MailerLite are all popular choices with free tiers for small lists.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should I send emails?</h3>
            <p>At least monthly to stay top of mind. Two to four times per month is ideal. Consistency matters most.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should I write about?</h3>
            <p>Health tips, common questions, seasonal topics, and occasional service promotions. Keep it mostly educational.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a lead magnet?</h3>
            <p>A lead magnet significantly increases signups by offering immediate value in exchange for an email address.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is email marketing HIPAA compliant?</h3>
            <p>General newsletters do not contain PHI and are not subject to HIPAA. Never include patient-specific health details in marketing emails.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

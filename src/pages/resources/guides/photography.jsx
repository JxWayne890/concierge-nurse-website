import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-photography-matters', text: 'Why Photography Matters for Your Business' },
  { id: 'hipaa-considerations', text: 'HIPAA and Client Privacy Considerations' },
  { id: 'what-to-photograph', text: 'What to Photograph' },
  { id: 'smartphone-tips', text: 'Smartphone Photography Tips' },
  { id: 'editing-and-posting', text: 'Editing and Posting Your Photos' },
  { id: 'content-calendar', text: 'Building a Content Calendar' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Create a Brand and Logo for Your Concierge Nursing Business', description: 'Your photography should align with your brand identity.', link: '/resources/guides/concierge-nursing-brand-logo', category: 'Guides' },
  { title: 'How to Get Testimonials from Concierge Nursing Clients', description: 'Pair client testimonials with visual content for maximum impact.', link: '/resources/guides/concierge-nurse-testimonials', category: 'Guides' },
  { title: 'How to Write a Concierge Nursing Elevator Pitch', description: 'Your visual and verbal messaging should tell the same story.', link: '/resources/guides/concierge-nursing-elevator-pitch', category: 'Guides' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I post photos of my clients on social media?", "acceptedAnswer": { "@type": "Answer", "text": "Only with explicit written consent. You must obtain a signed media release form from any client before posting their image, and the consent must clearly state how and where the photos will be used. Even with consent, never share identifiable clinical information alongside photos." } },
    { "@type": "Question", "name": "What is the best smartphone for concierge nursing photography?", "acceptedAnswer": { "@type": "Answer", "text": "Any modern smartphone from the last few years produces excellent photos. iPhones and Samsung Galaxy phones are popular choices. The key is not the phone itself but the lighting, composition, and consistency of your images." } },
    { "@type": "Question", "name": "How often should I post on social media?", "acceptedAnswer": { "@type": "Answer", "text": "Consistency matters more than frequency. Posting 3-4 times per week on Instagram or 2-3 times per week on Facebook is a sustainable pace for most solo concierge nurses. Batch-creating content can help you maintain consistency without daily effort." } },
    { "@type": "Question", "name": "Do I need professional photography?", "acceptedAnswer": { "@type": "Answer", "text": "Professional photography is a worthwhile investment but not required to start. Many successful concierge nurses build their social media presence with smartphone photos. Consider investing in a professional brand photoshoot once your business is established and generating revenue." } },
    { "@type": "Question", "name": "What editing apps work best for healthcare content?", "acceptedAnswer": { "@type": "Answer", "text": "Lightroom Mobile (free version) offers excellent editing tools. Canva is great for adding text overlays and creating branded graphics. VSCO provides clean, professional-looking filters. The key is choosing one editing style and applying it consistently to create a cohesive visual brand." } }
  ]
};

export default function Photography() {
  return (
    <ResourceLayout title="How to Photograph Your Work for Social Media Marketing" description="Learn how to create compelling social media photography for your concierge nursing business while maintaining HIPAA compliance, including what to photograph, smartphone tips, and content planning." canonical="/resources/guides/concierge-nurse-social-media-photography" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>Focus on photographing your professional setup, educational content, and behind-the-scenes moments — always without revealing client identities or protected health information. Consistent visual content builds trust and drives engagement on social media.</p>
      </QuickAnswer>

      <div className="bg-gold/5 border border-gold/20 p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal leading-relaxed"><strong>HIPAA Reminder:</strong> Never photograph clients, their homes, or any identifiable health information without explicit written consent.</p>
        </div>
      </div>

      <p>Visual content drives significantly more engagement than text alone. The challenge for healthcare providers is creating compelling content while strictly maintaining client privacy and HIPAA compliance.</p>

      <h2 id="why-photography-matters">Why Photography Matters for Your Business</h2>
      <p>Professional photos build trust, demonstrate expertise, drive engagement, and tell your story. People want to see the face behind the business and understand what the concierge nursing experience looks like before they book.</p>

      <h2 id="hipaa-considerations">HIPAA and Client Privacy Considerations</h2>
      <p>Never photograph clients without written consent via a signed media release. Never share identifiable health information. Be cautious with location details. Always review photos for any visible PHI before posting. These are non-negotiable rules.</p>

      <h2 id="what-to-photograph">What to Photograph</h2>
      <p>You can create compelling content without showing clients: your professional setup and supply bag, educational content about medical supplies, behind-the-scenes preparation, professional headshots, and lifestyle imagery. These categories provide endless HIPAA-safe content options.</p>

      <h2 id="smartphone-tips">Smartphone Photography Tips</h2>
      <p>Natural light, a clean lens, simple backgrounds, and multiple angles are the basics of good smartphone photography. The specifics of creating a professional visual presence are covered in our <Link to="/toolkits" className="text-gold hover:text-gold/80">Business Launch Toolkits</Link> and <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.</p>

      <h2 id="editing-and-posting">Editing and Posting Your Photos</h2>
      <p>Consistent editing creates a cohesive brand aesthetic. Choose one editing app and style, then apply it to every photo for a unified visual identity across your social media profiles.</p>

      <h2 id="content-calendar">Building a Content Calendar</h2>
      <p>Planning content in advance prevents the stress of daily improvisation and helps you maintain consistency. A structured content calendar is part of the marketing framework we build in our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link>.</p>

      <p>For a comprehensive approach to marketing your practice, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I post photos of my clients on social media?</h3><p>Only with explicit written consent via a signed media release form.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the best smartphone for concierge nursing photography?</h3><p>Any modern smartphone works well. Focus on lighting and consistency rather than the device.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should I post on social media?</h3><p>Consistency matters more than frequency. Three to four posts per week is sustainable for most solo nurses.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need professional photography?</h3><p>Not to start. Invest in professional photography once revenue supports it.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What editing apps work best for healthcare content?</h3><p>Lightroom Mobile, Canva, and VSCO are all excellent. Choose one style and apply it consistently.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

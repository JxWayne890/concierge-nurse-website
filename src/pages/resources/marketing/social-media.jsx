import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the best social media platform for concierge nurses?", "acceptedAnswer": { "@type": "Answer", "text": "Instagram and Facebook are the most effective platforms for most concierge nurses. LinkedIn is valuable if you target corporate wellness or executive health markets." } },
    { "@type": "Question", "name": "How often should a concierge nurse post on social media?", "acceptedAnswer": { "@type": "Answer", "text": "Aim for three to five posts per week on your primary platform. Consistency matters more than frequency." } },
    { "@type": "Question", "name": "What should concierge nurses post about on social media?", "acceptedAnswer": { "@type": "Answer", "text": "Focus on educational health content related to your specialty, behind-the-scenes glimpses of your work without violating patient privacy, tips for recovery or health management, and your professional journey." } },
    { "@type": "Question", "name": "Can I use social media to get concierge nursing clients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but social media typically works as a trust-building tool rather than a direct lead generator. Consistent, professional content reinforces your expertise." } },
    { "@type": "Question", "name": "Should I show my face on social media as a concierge nurse?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. People hire people, especially in healthcare where trust is essential. Posts with your face consistently outperform posts without a person in them." } }
  ]
};

export default function SocialMedia() {
  return (
    <ResourceLayout
      title="Social Media Marketing for Concierge Nurses"
      description="Platform-by-platform strategies for building your concierge nursing brand on social media, creating content that attracts clients, and turning followers into paying customers."
      canonical="/resources/marketing/concierge-nurse-social-media"
      category="Marketing"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'social-media-role', text: 'The Role of Social Media in Concierge Nursing' },
        { id: 'choosing-platforms', text: 'Choosing the Right Platforms' },
        { id: 'instagram-strategy', text: 'Instagram Strategy for Concierge Nurses' },
        { id: 'facebook-strategy', text: 'Facebook Strategy for Concierge Nurses' },
        { id: 'linkedin-strategy', text: 'LinkedIn for Professional Networking' },
        { id: 'content-ideas', text: 'Content Ideas That Build Trust' },
        { id: 'privacy-compliance', text: 'Privacy and Compliance Considerations' },
        { id: 'content-workflow', text: 'Creating a Sustainable Content Workflow' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        { title: 'How to Market Your Concierge Nursing Business', description: 'Complete marketing framework covering all channels for concierge nurses.', link: '/resources/marketing/concierge-nursing-business-marketing', category: 'Marketing' },
        { title: 'Email Marketing for Concierge Nurses', description: 'Build and nurture an email list that converts subscribers into clients.', link: '/resources/marketing/concierge-nurse-email-marketing', category: 'Marketing' },
        { title: 'How to Build a Website for Your Concierge Nursing Business', description: 'Create a professional website that serves as the hub of your online presence.', link: '/resources/marketing/concierge-nursing-website', category: 'Marketing' },
      ]}
    >
      <QuickAnswer>
        <p>Social media marketing for concierge nurses works best when you focus on one or two platforms, post educational content consistently, and use your profiles to build trust rather than hard-sell your services. Instagram and Facebook are the strongest platforms for most concierge nurses.</p>
      </QuickAnswer>

      <h2 id="social-media-role">The Role of Social Media in Concierge Nursing</h2>
      <p>Social media rarely generates concierge nursing clients directly. What it does is build the trust and familiarity that make someone comfortable enough to reach out when the need arises. Think of social media as your always-on credibility portfolio that supports your other marketing channels.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="choosing-platforms">Choosing the Right Platforms</h2>
      <p>The biggest mistake concierge nurses make with social media is trying to be everywhere. Choose one primary platform and one secondary platform based on where your ideal clients spend their time. The platform choice should follow the client, not the trend.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="instagram-strategy">Instagram Strategy for Concierge Nurses</h2>
      <p>Instagram is a visual platform that rewards consistent, high-quality content. For concierge nurses, it offers the opportunity to showcase your professionalism, share educational content, and build a personal brand. Profile optimization, content types, and hashtag strategy all play important roles.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="facebook-strategy">Facebook Strategy for Concierge Nurses</h2>
      <p>Facebook remains powerful for concierge nurses serving older demographics or families. It offers robust community features, detailed targeting for paid advertising, and a platform where longer-form content performs well. Community engagement and a well-maintained business page are key.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="linkedin-strategy">LinkedIn for Professional Networking</h2>
      <p>LinkedIn is underutilized by most concierge nurses, but it can be extraordinarily valuable for building physician referral relationships and reaching corporate clients. Healthcare professionals are active on LinkedIn, and the platform rewards professional, educational content.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="content-ideas">Content Ideas That Build Trust</h2>
      <p>Running out of content ideas is one of the top reasons concierge nurses abandon social media. Having a framework of content categories to rotate through, including educational posts, behind-the-scenes content, your story, and community involvement, keeps your presence consistent.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="privacy-compliance">Privacy and Compliance Considerations</h2>
      <p>Healthcare social media comes with unique risks. You must protect patient privacy at all times and avoid making specific health claims. Creating a simple social media policy for yourself that addresses patient privacy, content boundaries, and how you handle negative comments is essential.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="content-workflow">Creating a Sustainable Content Workflow</h2>
      <p>The most effective social media strategy is the one you can maintain consistently. Building a content workflow that fits your schedule through batching and scheduling tools prevents the burnout that derails most social media efforts. Social media works best as part of your <Link to="/resources/marketing/concierge-nursing-business-marketing" className="text-gold hover:text-gold/80 underline">overall marketing strategy</Link>.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the best social media platform for concierge nurses?</h3>
            <p>Instagram and Facebook for most concierge nurses. LinkedIn if you target corporate or executive clients.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should a concierge nurse post on social media?</h3>
            <p>Three to five quality posts per week on your primary platform. Consistency matters more than frequency.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should concierge nurses post about?</h3>
            <p>Educational health content, behind-the-scenes glimpses, your professional journey, and community involvement.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I use social media to get clients?</h3>
            <p>Social media builds trust and credibility that supports your other marketing channels, rather than generating direct leads.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I show my face on social media?</h3>
            <p>Yes. People hire people, and showing your face helps potential clients feel like they know you before they reach out.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I pitch a story about concierge nursing to local media?", "acceptedAnswer": { "@type": "Answer", "text": "Frame your pitch around a newsworthy angle, not self-promotion. Tie your story to a healthcare trend, a seasonal topic, or a local event. Keep your pitch email brief and explain why their audience would find it relevant." } },
    { "@type": "Question", "name": "What types of local media should concierge nurses target?", "acceptedAnswer": { "@type": "Answer", "text": "Target local television morning shows, newspaper health columns, local magazines, community blogs, local podcasts, and radio health segments." } },
    { "@type": "Question", "name": "Do I need a press release to get media coverage?", "acceptedAnswer": { "@type": "Answer", "text": "A formal press release is not always necessary. A well-crafted pitch email to a specific journalist often works better. Press releases are useful for major milestones." } },
    { "@type": "Question", "name": "How do I prepare for a local television or radio interview?", "acceptedAnswer": { "@type": "Answer", "text": "Prepare three to five key talking points. Practice saying them conversationally. Anticipate likely questions and prepare concise answers. Dress professionally and let your genuine passion for patient care come through." } },
    { "@type": "Question", "name": "How can I leverage media coverage after it happens?", "acceptedAnswer": { "@type": "Answer", "text": "Share the coverage across all your marketing channels: social media, website, email newsletter, and your Google Business Profile. Include an As Featured In section on your website and send the coverage to your referral network." } }
  ]
};

export default function LocalMedia() {
  return (
    <ResourceLayout
      title="How to Get Featured in Local Media as a Concierge Nurse"
      description="Strategies for pitching local journalists, preparing for interviews, and leveraging media coverage to build credibility and attract concierge nursing clients."
      canonical="/resources/marketing/concierge-nurse-local-media"
      category="Marketing"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'why-local-media', text: 'Why Local Media Coverage Matters' },
        { id: 'finding-story-angles', text: 'Finding Newsworthy Story Angles' },
        { id: 'identifying-outlets', text: 'Identifying the Right Media Outlets' },
        { id: 'crafting-your-pitch', text: 'Crafting an Effective Media Pitch' },
        { id: 'preparing-for-interviews', text: 'Preparing for Interviews' },
        { id: 'leveraging-coverage', text: 'Leveraging Coverage After It Happens' },
        { id: 'building-media-relationships', text: 'Building Ongoing Media Relationships' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        { title: 'Networking Strategies for Concierge Nurse Entrepreneurs', description: 'Media relationships are built through networking and professional connections.', link: '/resources/marketing/concierge-nurse-networking', category: 'Marketing' },
        { title: 'How to Explain Concierge Nursing', description: 'Master your explanation before stepping in front of a camera or microphone.', link: '/resources/marketing/how-to-explain-concierge-nursing', category: 'Marketing' },
        { title: 'How to Market Your Concierge Nursing Business', description: 'Media coverage as part of your comprehensive marketing strategy.', link: '/resources/marketing/concierge-nursing-business-marketing', category: 'Marketing' },
      ]}
    >
      <QuickAnswer>
        <p>Getting featured in local media requires pitching a newsworthy angle rather than asking for free advertising. Tie your story to healthcare trends, seasonal topics, or community needs. A single media feature can generate significant awareness and positions you as a credible expert in your market.</p>
      </QuickAnswer>

      <h2 id="why-local-media">Why Local Media Coverage Matters</h2>
      <p>Media coverage carries the implicit endorsement of the publication or station, creating credibility that no advertisement can replicate. It also has a compounding effect where each feature makes the next one easier to obtain. For concierge nurses, media coverage is particularly valuable because it educates the public about a service most people do not know exists.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="finding-story-angles">Finding Newsworthy Story Angles</h2>
      <p>Journalists are interested in stories that inform, educate, or engage their audience. Your job is to frame your expertise as a story worth covering. Trend stories, seasonal health topics, human interest angles, and community involvement all provide natural hooks for media coverage.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="identifying-outlets">Identifying the Right Media Outlets</h2>
      <p>Local television morning shows, newspapers, community magazines, podcasts, and online publications are all potential outlets. Start with smaller outlets where competition for coverage is less intense and use those features as credibility to pitch larger outlets later.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="crafting-your-pitch">Crafting an Effective Media Pitch</h2>
      <p>Your pitch email should be concise, specific, and focused on the story angle rather than your business. Journalists receive dozens of pitches daily, so yours needs to stand out immediately. The structure and brevity of your pitch determine whether it gets read or deleted.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="preparing-for-interviews">Preparing for Interviews</h2>
      <p>When a journalist says yes, preparation determines whether the coverage helps your business. Identifying key messages, anticipating questions, and practicing your delivery ensures you communicate clearly and come across as the expert you are. Practice explaining concierge nursing using our guide on <Link to="/resources/marketing/how-to-explain-concierge-nursing" className="text-gold hover:text-gold/80 underline">how to explain concierge nursing</Link>.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="leveraging-coverage">Leveraging Coverage After It Happens</h2>
      <p>The value of a media feature extends far beyond the initial audience. Strategic amplification across your social media, <Link to="/resources/marketing/concierge-nursing-website" className="text-gold hover:text-gold/80 underline">website</Link>, email newsletter, referral packets, and Google Business Profile multiplies its impact across all your marketing channels.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="building-media-relationships">Building Ongoing Media Relationships</h2>
      <p>The best media coverage comes from ongoing relationships with journalists. Being responsive, quotable, and reliable positions you as a go-to health expert that journalists can call whenever they need a nursing perspective on a healthcare story.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I pitch a story to local media?</h3>
            <p>Frame your pitch around a newsworthy angle tied to a healthcare trend, seasonal topic, or community need. Keep it brief.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What types of media should I target?</h3>
            <p>Local TV morning shows, newspaper health columns, community magazines, podcasts, and online publications.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a press release?</h3>
            <p>Not always. A well-crafted pitch email often works better. Press releases are useful for major milestones.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I prepare for an interview?</h3>
            <p>Prepare three to five key talking points, anticipate likely questions, and practice delivering your messages conversationally.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I leverage coverage after it happens?</h3>
            <p>Share it across all your marketing channels, add it to your website, and send it to your referral network.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

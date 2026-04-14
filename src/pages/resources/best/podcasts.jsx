import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-podcasts', text: "Why Podcasts Work for Busy Nurses" },
  { id: 'nurse-entrepreneur', text: "Nurse Entrepreneurship Podcasts" },
  { id: 'general-business', text: "General Business Podcasts Worth Your Time" },
  { id: 'healthcare-industry', text: "Healthcare Industry Podcasts" },
  { id: 'how-to-listen', text: "How to Get the Most from Podcasts" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Best Books for Nurse Entrepreneurs",
    description: "Deeper learning through nurse entrepreneur reading lists.",
    link: '/resources/best/books-for-nurse-entrepreneurs',
    category: 'Best Of',
  },
  {
    title: "Best Facebook Groups for Nurse Entrepreneurs",
    description: "Connect with other nurse entrepreneurs online.",
    link: '/resources/best/facebook-groups-nurse-entrepreneurs',
    category: 'Best Of',
  },
  {
    title: "Best Conferences for Concierge Nurses",
    description: "In-person events for networking and education.",
    link: '/resources/best/conferences-for-concierge-nurses',
    category: 'Best Of',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are there podcasts specifically about concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The concierge nursing podcast landscape is growing but still small. You will find the most value by combining nurse entrepreneurship podcasts with general small business podcasts. As the concierge nursing field grows, expect more niche-specific content."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I listen to business podcasts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Even one episode per week can make a significant difference. Listen during your commute to client visits, while exercising, or during administrative time. Consistency matters more than volume."
      }
    },
    {
      "@type": "Question",
      "name": "Can podcasts replace formal business education?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Podcasts are excellent supplements but work best alongside structured learning. They provide ongoing education, motivation, and exposure to diverse perspectives. For foundational business skills, pair podcasts with books, courses, or programs like the Accelerator."
      }
    },
    {
      "@type": "Question",
      "name": "Should I start my own podcast as a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A podcast can be a powerful marketing tool, but only if you have bandwidth and content strategy. Do not start one just because others have. Focus on building your practice first, then consider a podcast when you have the capacity and a clear purpose for it."
      }
    }
  ]
};

export default function Podcasts() {
  return (
    <ResourceLayout
      title={"Best Podcasts for Nurse Entrepreneurs"}
      description={"Discover podcasts that help nurse entrepreneurs learn business skills, stay motivated, and connect with the nursing entrepreneurship community — all while on the go."}
      canonical="/resources/best/podcasts-for-nurse-entrepreneurs"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Podcasts are one of the most accessible learning tools for busy nurse entrepreneurs. You can listen while driving to client visits, exercising, or handling administrative tasks. The best podcasts for concierge nurses blend nursing entrepreneurship content with general business strategy, marketing, and mindset development.
        </p>
      </QuickAnswer>

      <h2 id="why-podcasts">Why Podcasts Work for Busy Nurses</h2>
      <p>
        As a concierge nurse, your time is divided between client care, business administration, and personal life. Finding dedicated hours for professional development is challenging. Podcasts solve this problem by turning otherwise unproductive time — driving between clients, waiting, exercising — into learning opportunities.
      </p>
      <p>
        Podcasts also offer something books cannot: hearing real entrepreneurs share their journeys in their own voices. The authenticity of podcast interviews, the back-and-forth of conversations, and the diversity of perspectives create a rich learning experience that keeps you engaged and motivated.
      </p>

      <h2 id="nurse-entrepreneur">Nurse Entrepreneurship Podcasts</h2>
      <p>
        The nurse entrepreneurship podcast space has grown significantly. Look for shows hosted by nurses who have actually built businesses — not just those who talk about it theoretically. The most valuable nurse entrepreneur podcasts cover practical topics like launching a practice, finding clients, setting prices, managing operations, and scaling.
      </p>
      {/* TRACY TO FILL: What nurse entrepreneur podcasts do you recommend? Are there specific episodes or shows that your community finds most valuable? Any that you have been a guest on? */}
      <p>
        When evaluating nurse entrepreneur podcasts, look for hosts who share practical strategies rather than vague motivation, guests who represent a variety of nursing niches and business models, and content that is current and regularly updated.
      </p>

      <h2 id="general-business">General Business Podcasts Worth Your Time</h2>
      <p>
        Do not limit yourself to nursing-specific podcasts. General business podcasts teach marketing, sales, operations, and leadership skills that apply directly to your concierge nursing practice. The strategies that help a consultant build a referral network or a service provider set premium pricing are directly relevant to your work.
      </p>
      <p>
        Look for podcasts focused on service businesses, solo practitioners, and professional services. These will be more applicable than shows focused on tech startups or product-based businesses.
      </p>

      <h2 id="healthcare-industry">Healthcare Industry Podcasts</h2>
      <p>
        Staying informed about healthcare industry trends helps you position your practice strategically. Healthcare industry podcasts cover topics like the <Link to="/resources/trends/rise-of-cash-pay-healthcare" className="text-gold hover:text-gold/80 underline">rise of cash-pay healthcare</Link>, <Link to="/resources/trends/future-of-concierge-nursing" className="text-gold hover:text-gold/80 underline">future trends in concierge nursing</Link>, and changes in healthcare delivery models that create opportunities for entrepreneurial nurses.
      </p>

      <h2 id="how-to-listen">How to Get the Most from Podcasts</h2>
      <p>
        Passive listening is pleasant but not productive. To actually learn and apply what you hear, take notes on key insights (voice memos work well while driving), identify one actionable takeaway from each episode, schedule time to implement what you learn, and share valuable episodes with your <Link to="/community" className="text-gold hover:text-gold/80 underline">professional community</Link> for discussion.
      </p>
      <p>
        Pair your podcast learning with structured education. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> provides the framework to apply the strategies and ideas you pick up from podcasts.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are there podcasts specifically about concierge nursing?</h3>
            <p>The concierge nursing podcast landscape is growing but still small. You will find the most value by combining nurse entrepreneurship podcasts with general small business podcasts. As the concierge nursing field grows, expect more niche-specific content.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How often should I listen to business podcasts?</h3>
            <p>Even one episode per week can make a significant difference. Listen during your commute to client visits, while exercising, or during administrative time. Consistency matters more than volume.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can podcasts replace formal business education?</h3>
            <p>Podcasts are excellent supplements but work best alongside structured learning. They provide ongoing education, motivation, and exposure to diverse perspectives. For foundational business skills, pair podcasts with books, courses, or programs like the Accelerator.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I start my own podcast as a concierge nurse?</h3>
            <p>A podcast can be a powerful marketing tool, but only if you have bandwidth and content strategy. Do not start one just because others have. Focus on building your practice first, then consider a podcast when you have the capacity and a clear purpose for it.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

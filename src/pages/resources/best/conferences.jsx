import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-conferences', text: "Why Conferences Matter for Solo Practitioners" },
  { id: 'nursing-entrepreneurship', text: "Nursing Entrepreneurship Conferences" },
  { id: 'business-conferences', text: "General Business Conferences" },
  { id: 'clinical-conferences', text: "Clinical Conferences for Your Niche" },
  { id: 'getting-most', text: "Getting the Most from a Conference" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Best Books for Nurse Entrepreneurs",
    description: "Continue your education between conferences.",
    link: '/resources/best/books-for-nurse-entrepreneurs',
    category: 'Best Of',
  },
  {
    title: "Best Facebook Groups for Nurse Entrepreneurs",
    description: "Online communities to stay connected year-round.",
    link: '/resources/best/facebook-groups-nurse-entrepreneurs',
    category: 'Best Of',
  },
  {
    title: "Certifications That Help You Stand Out",
    description: "Some conferences offer CE credits toward certifications.",
    link: '/resources/certifications/concierge-nurse-certifications',
    category: 'Certifications',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are there conferences specifically for concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dedicated concierge nursing conferences are emerging as the niche grows. In the meantime, nursing entrepreneurship conferences, private-duty nursing events, and small business conferences all offer relevant content and networking for concierge nurses."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I budget for a conference?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget for registration (varies widely), travel and hotel, meals, and business cards or marketing materials. Many conferences offer early-bird pricing. Consider the conference a business investment — the registration fee, travel, and meals are typically tax-deductible business expenses."
      }
    },
    {
      "@type": "Question",
      "name": "Are virtual conferences worth attending?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Virtual conferences offer convenience and lower cost, but in-person events provide networking opportunities that are difficult to replicate online. If budget allows, prioritize one in-person event per year and supplement with virtual events."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose which conferences to attend?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evaluate based on relevance to your niche, quality of speakers, networking opportunities, and cost. Ask other concierge nurses which events they have found most valuable. Start with one conference per year and increase if ROI is positive."
      }
    }
  ]
};

export default function Conferences() {
  return (
    <ResourceLayout
      title={"Best Conferences for Concierge Nurses"}
      description={"Find the best conferences for concierge nurses — from nursing entrepreneurship events to business conferences that help you grow your private practice."}
      canonical="/resources/best/conferences-for-concierge-nurses"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          The best conferences for concierge nurses combine business education with networking and clinical development. As a solo practitioner, conferences provide something your daily work cannot — face-to-face connection with peers, exposure to new ideas, and structured learning away from the demands of your practice. Invest in at least one conference per year.
        </p>
      </QuickAnswer>

      <h2 id="why-conferences">Why Conferences Matter for Solo Practitioners</h2>
      <p>
        Concierge nursing can be isolating. You work alone, make decisions alone, and solve problems alone. Conferences break this isolation by putting you in a room with people who understand your challenges, share your ambitions, and can offer perspectives you would never encounter in your daily work.
      </p>
      <p>
        Beyond networking, conferences provide concentrated learning. A two-day conference can expose you to more new ideas and strategies than months of independent study. The combination of keynotes, breakout sessions, and hallway conversations creates a uniquely rich learning environment.
      </p>

      <h2 id="nursing-entrepreneurship">Nursing Entrepreneurship Conferences</h2>
      <p>
        The nursing entrepreneurship conference space is growing as more nurses pursue independent practice. Look for events that feature speakers who have built successful nursing businesses, cover practical topics like business formation, marketing, and operations, provide networking with other nurse entrepreneurs, and offer continuing education credits.
      </p>
      {/* TRACY TO FILL: What nursing entrepreneurship conferences do you recommend? Have you spoken at any? What events has your community found most valuable? Are there events you host or plan to host? */}

      <h2 id="business-conferences">General Business Conferences</h2>
      <p>
        Do not overlook general business conferences, especially those focused on service businesses, solo practitioners, or professional services. Small business conferences, marketing conferences, and women-in-business events can all provide strategies directly applicable to your concierge nursing practice.
      </p>
      <p>
        Local chamber of commerce events and small business association workshops are affordable options for ongoing business education and local networking.
      </p>

      <h2 id="clinical-conferences">Clinical Conferences for Your Niche</h2>
      <p>
        Clinical conferences serve a dual purpose: continuing education and referral relationship building. Attending a wound care conference, geriatric care symposium, or plastic surgery conference puts you in contact with the very professionals who could become your referral sources. You learn clinically while networking strategically.
      </p>

      <h2 id="getting-most">Getting the Most from a Conference</h2>
      <p>
        To maximize your conference investment: set specific goals before attending (what do you want to learn, who do you want to meet?), prepare an elevator pitch about your practice, bring business cards, take detailed notes, follow up with every meaningful connection within one week, and implement at least one new idea within 30 days of returning.
      </p>
      <p>
        For year-round community and learning, join the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link>. And explore our <Link to="/resources/best/facebook-groups-nurse-entrepreneurs" className="text-gold hover:text-gold/80 underline">Facebook groups guide</Link> for online networking between events.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are there conferences specifically for concierge nurses?</h3>
            <p>Dedicated concierge nursing conferences are emerging as the niche grows. In the meantime, nursing entrepreneurship conferences, private-duty nursing events, and small business conferences all offer relevant content and networking for concierge nurses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much should I budget for a conference?</h3>
            <p>Budget for registration (varies widely), travel and hotel, meals, and business cards or marketing materials. Many conferences offer early-bird pricing. Consider the conference a business investment — the registration fee, travel, and meals are typically tax-deductible business expenses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are virtual conferences worth attending?</h3>
            <p>Virtual conferences offer convenience and lower cost, but in-person events provide networking opportunities that are difficult to replicate online. If budget allows, prioritize one in-person event per year and supplement with virtual events.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I choose which conferences to attend?</h3>
            <p>Evaluate based on relevance to your niche, quality of speakers, networking opportunities, and cost. Ask other concierge nurses which events they have found most valuable. Start with one conference per year and increase if ROI is positive.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

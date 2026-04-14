import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-facebook-groups', text: "Why Facebook Groups Still Matter" },
  { id: 'what-to-look-for', text: "What Makes a Good Facebook Group" },
  { id: 'types-of-groups', text: "Types of Groups to Join" },
  { id: 'getting-value', text: "Getting Real Value from Groups" },
  { id: 'red-flags', text: "Red Flags in Facebook Groups" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Best Podcasts for Nurse Entrepreneurs",
    description: "More ways to learn and connect as a nurse entrepreneur.",
    link: '/resources/best/podcasts-for-nurse-entrepreneurs',
    category: 'Best Of',
  },
  {
    title: "Best Conferences for Concierge Nurses",
    description: "Take your networking offline at conferences.",
    link: '/resources/best/conferences-for-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: "Why Hospital Nurses Are Leaving for Entrepreneurship",
    description: "Understand the trend driving nurse entrepreneur communities.",
    link: '/resources/trends/nurses-leaving-hospitals-entrepreneurship',
    category: 'Industry Trends',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Facebook groups worth joining for nurse entrepreneurs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when you choose the right ones. Well-moderated groups with active, experienced members provide peer support, practical advice, referral opportunities, and motivation. The key is finding groups with genuine value rather than groups that exist primarily to sell courses."
      }
    },
    {
      "@type": "Question",
      "name": "How many Facebook groups should I join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quality over quantity. Join two to four groups that serve different purposes — one for nurse entrepreneurs generally, one for your specific niche, and perhaps one for local business owners. Engaging deeply in a few groups is more valuable than lurking in many."
      }
    },
    {
      "@type": "Question",
      "name": "Should I join free or paid Facebook groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both can be valuable. Free groups offer broad perspectives and larger communities. Paid groups (often associated with courses or memberships) tend to be more focused and better moderated. Evaluate each on its own merits."
      }
    },
    {
      "@type": "Question",
      "name": "How do I avoid scams in nurse entrepreneur Facebook groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Be wary of members who DM you with income claims or course pitches. Look for groups moderated by real nurse entrepreneurs with verifiable credentials. Avoid groups where most content is promotional. The best groups prioritize genuine education and community support."
      }
    }
  ]
};

export default function FacebookGroups() {
  return (
    <ResourceLayout
      title={"Best Facebook Groups for Nurse Entrepreneurs"}
      description={"Find the most active and valuable Facebook groups for nurse entrepreneurs — where to network, ask questions, and find support for your concierge nursing business."}
      canonical="/resources/best/facebook-groups-nurse-entrepreneurs"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Facebook groups remain one of the most accessible ways for nurse entrepreneurs to find community, ask questions, and learn from peers. The best groups are actively moderated, have members who share real experiences (not just promotions), and focus on practical business guidance. Be selective — a few high-quality groups are worth more than dozens of inactive or sales-heavy ones.
        </p>
      </QuickAnswer>

      <h2 id="why-facebook-groups">Why Facebook Groups Still Matter</h2>
      <p>
        Despite the rise of other platforms, Facebook groups remain the dominant online gathering place for nurse entrepreneurs. The format — threaded discussions, searchable archives, file sharing, and event coordination — works well for professional communities. And the sheer number of nurses on Facebook means the largest and most active communities are there.
      </p>
      <p>
        For solo concierge nurses, Facebook groups provide something essential: community. When you are building a business alone, having a place to ask questions, share wins, troubleshoot problems, and connect with people who understand your journey is invaluable.
      </p>

      <h2 id="what-to-look-for">What Makes a Good Facebook Group</h2>
      <p>
        Not all Facebook groups are equal. Look for these qualities:
      </p>
      <ul>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Active moderation</strong> — Spam, self-promotion, and unhelpful content are removed regularly</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Engaged members</strong> — Posts get thoughtful responses, not just emoji reactions</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Practical focus</strong> — Members share real experiences, strategies, and solutions</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Experienced leadership</strong> — Admins are practicing nurse entrepreneurs, not just marketers</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Clear rules</strong> — Guidelines about promotion, respect, and content quality are posted and enforced</span>
        </li>
      </ul>

      <h2 id="types-of-groups">Types of Groups to Join</h2>
      <p>
        Consider joining groups in these categories:
      </p>
      <p>
        <strong>Nurse entrepreneur groups:</strong> Broad communities of nurses building businesses of all types. Good for general business advice and seeing the range of possibilities in nursing entrepreneurship.
      </p>
      <p>
        <strong>Concierge/private-duty nursing groups:</strong> More focused communities specifically for nurses in concierge, private-duty, or direct-pay nursing. These offer niche-specific advice.
      </p>
      <p>
        <strong>Local business groups:</strong> Your city or county likely has small business Facebook groups where you can network with local entrepreneurs and potential referral sources.
      </p>
      <p>
        <strong>Niche-specific groups:</strong> Groups for your specific nursing niche — postpartum care, post-op recovery, geriatric nursing — provide both clinical and business insights relevant to your specialty.
      </p>

      <h2 id="getting-value">Getting Real Value from Groups</h2>
      <p>
        Joining a group is step one. Getting value requires active participation. Introduce yourself and share what you do. Ask specific, thoughtful questions rather than vague ones. Answer questions from others — teaching reinforces your own knowledge. Share your wins and lessons learned to contribute to the community.
      </p>

      <h2 id="red-flags">Red Flags in Facebook Groups</h2>
      <p>
        Watch out for groups dominated by course promotions, where admins pitch products rather than providing value, where income claims are unverifiable, or where negative or challenging posts are deleted to maintain an artificially positive atmosphere.
      </p>
      <p>
        For a curated, professional community, consider joining the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link>. And for deeper learning, the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> includes community access alongside structured education.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are Facebook groups worth joining for nurse entrepreneurs?</h3>
            <p>Yes, when you choose the right ones. Well-moderated groups with active, experienced members provide peer support, practical advice, referral opportunities, and motivation. The key is finding groups with genuine value rather than groups that exist primarily to sell courses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many Facebook groups should I join?</h3>
            <p>Quality over quantity. Join two to four groups that serve different purposes — one for nurse entrepreneurs generally, one for your specific niche, and perhaps one for local business owners. Engaging deeply in a few groups is more valuable than lurking in many.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I join free or paid Facebook groups?</h3>
            <p>Both can be valuable. Free groups offer broad perspectives and larger communities. Paid groups (often associated with courses or memberships) tend to be more focused and better moderated. Evaluate each on its own merits.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I avoid scams in nurse entrepreneur Facebook groups?</h3>
            <p>Be wary of members who DM you with income claims or course pitches. Look for groups moderated by real nurse entrepreneurs with verifiable credentials. Avoid groups where most content is promotional. The best groups prioritize genuine education and community support.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

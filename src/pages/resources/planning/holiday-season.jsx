import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'seasonal-demand', text: 'Understanding Holiday Season Demand' },
  { id: 'scheduling', text: 'Managing Your Holiday Schedule' },
  { id: 'boundaries', text: 'Setting Holiday Boundaries' },
  { id: 'premium-pricing', text: 'Holiday Premium Pricing' },
  { id: 'year-end-prep', text: 'Preparing for Year-End' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'Year-End Review: How to Audit Your Business',
    description: 'The holiday season is the perfect time to start your year-end review.',
    link: '/resources/planning/concierge-nursing-year-end-review',
    category: 'Planning',
  },
  {
    title: 'Vacation Policies for Solo Concierge Nurses',
    description: 'How to take time off during the holidays without losing clients.',
    link: '/resources/planning/concierge-nurse-vacation-policy',
    category: 'Planning',
  },
  {
    title: 'Q1 Planning for Your Concierge Nursing Business',
    description: 'Start Q1 planning before the new year begins.',
    link: '/resources/planning/concierge-nursing-q1-planning',
    category: 'Planning',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should concierge nurses work during the holidays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is a personal and business decision. Some concierge nurses find the holidays are a high-demand period (families needing extra support for elderly relatives visiting, post-cosmetic surgery patients wanting holiday recovery). Others choose to take time off. Build your holiday policy into your annual plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can I charge higher rates during the holidays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Holiday premium rates are common across service industries. If you choose to work on holidays, higher rates compensate for the personal sacrifice and are expected by most clients. Communicate holiday rates in advance."
      }
    },
    {
      "@type": "Question",
      "name": "How do I handle clients who need care on Christmas or Thanksgiving?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Include holiday policies in your service agreement. If you work holidays, specify premium rates. If you do not, provide clear instructions for emergency contacts and backup care options. Plan coverage well in advance."
      }
    },
    {
      "@type": "Question",
      "name": "How should I prepare my business for the new year during the holiday season?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the quieter days between Christmas and New Year's for business planning. Review your annual performance, set goals for the coming year, update your service agreements, and plan your Q1 marketing activities."
      }
    }
  ]
};

export default function HolidaySeason() {
  return (
    <ResourceLayout
      title="Holiday Season Strategies for Concierge Nurses"
      description="Maximize your concierge nursing practice during the holiday season — manage scheduling, set boundaries, capitalize on seasonal demand, and plan for year-end."
      canonical="/resources/planning/concierge-nurse-holiday-season"
      category="Planning"
      categorySlug="/resources/planning"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          The holiday season presents both opportunities and challenges for concierge nurses. Demand often increases as families gather and need extra support for elderly or recovering relatives. At the same time, you need to manage your own schedule, set clear boundaries, and prepare for the year ahead. Plan your holiday strategy in October so you enter the season intentionally.
        </p>
      </QuickAnswer>

      <h2 id="seasonal-demand">Understanding Holiday Season Demand</h2>
      <p>
        The holiday season can be surprisingly busy for concierge nurses. Several factors drive increased demand:
      </p>
      <ul>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Family gatherings reveal concerns</strong> — Adult children visiting elderly parents over the holidays often notice health changes and seek professional help</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Cosmetic surgery recovery</strong> — Many clients schedule procedures during holiday time off and need post-op nursing care</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Travel and event support</strong> — VIP clients may need nursing support during holiday travel or events</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>IV therapy demand</strong> — Holiday season often increases demand for wellness and recovery IV services</span>
        </li>
      </ul>

      <h2 id="scheduling">Managing Your Holiday Schedule</h2>
      <p>
        Decide early which days you will work and which you will take off. Communicate your holiday schedule to clients by early November at the latest. This gives them time to plan and reduces last-minute requests.
      </p>
      <p>
        Consider offering modified holiday hours rather than working your full regular schedule. Many concierge nurses work morning hours on certain holidays and take afternoons off, or work select days while blocking others completely.
      </p>

      <h2 id="boundaries">Setting Holiday Boundaries</h2>
      <p>
        Clear boundaries during the holidays protect your personal time while maintaining professional relationships. Include your holiday policy in your service agreements and remind clients annually. Be specific about availability, response times, and emergency protocols during the holiday period.
      </p>
      <p>
        It is okay to be unavailable on certain days. Your clients respect professionalism and consistency more than 24/7 availability. Nurses who burn out trying to be everything to everyone end up serving no one well.
      </p>

      <h2 id="premium-pricing">Holiday Premium Pricing</h2>
      <p>
        If you choose to work on holidays, charging premium rates is standard practice. Holiday rates are typically 1.5x to 2x your regular rate. This compensates for the personal sacrifice and is expected by clients who request holiday services.
      </p>
      <p>
        Include holiday rate information in your service agreement and remind clients when they request holiday scheduling. Most clients who need holiday care understand and accept premium pricing without pushback.
      </p>

      <h2 id="year-end-prep">Preparing for Year-End</h2>
      <p>
        Use the holiday season's natural slowdown (if you experience one) to prepare for the new year. Start your <Link to="/resources/planning/concierge-nursing-year-end-review" className="text-gold hover:text-gold/80 underline">year-end review</Link> in December so you can enter January with clarity and direction. Review your finances, assess your referral relationships, evaluate your service offerings, and begin your <Link to="/resources/planning/concierge-nursing-q1-planning" className="text-gold hover:text-gold/80 underline">Q1 plan</Link>.
      </p>
      <p>
        The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> provides year-round business planning support, including holiday and seasonal strategy guidance.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should concierge nurses work during the holidays?</h3>
            <p>This is a personal and business decision. Some concierge nurses find the holidays are a high-demand period (families needing extra support for elderly relatives visiting, post-cosmetic surgery patients wanting holiday recovery). Others choose to take time off. Build your holiday policy into your annual plan.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I charge higher rates during the holidays?</h3>
            <p>Yes. Holiday premium rates are common across service industries. If you choose to work on holidays, higher rates compensate for the personal sacrifice and are expected by most clients. Communicate holiday rates in advance.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I handle clients who need care on Christmas or Thanksgiving?</h3>
            <p>Include holiday policies in your service agreement. If you work holidays, specify premium rates. If you do not, provide clear instructions for emergency contacts and backup care options. Plan coverage well in advance.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How should I prepare my business for the new year during the holiday season?</h3>
            <p>Use the quieter days between Christmas and New Year&apos;s for business planning. Review your annual performance, set goals for the coming year, update your service agreements, and plan your Q1 marketing activities.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

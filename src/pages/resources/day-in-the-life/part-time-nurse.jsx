import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'why-part-time', text: 'Why Nurses Choose Part-Time Concierge Work' },
  { id: 'morning', text: 'Morning: Balancing Clinical and Personal Life' },
  { id: 'client-visits', text: 'Client Visits on a Part-Time Schedule' },
  { id: 'admin-time', text: 'Administrative Work in Limited Hours' },
  { id: 'growing', text: 'Growing at Your Own Pace' },
  { id: 'challenges', text: 'Challenges of Part-Time Concierge Nursing' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'A Day in the Life of a Multi-Nurse Practice Owner',
    description: 'See what happens when part-time turns into a full practice.',
    link: '/resources/day-in-the-life/multi-nurse-practice-owner',
    category: 'Day in the Life',
  },
  {
    title: 'Concierge Nursing for Military Spouse Nurses',
    description: 'A portable business model that works with frequent relocations.',
    link: '/resources/for/concierge-nursing-military-spouses',
    category: 'For You',
  },
  {
    title: 'Best Scheduling Software for Concierge Nurses',
    description: 'Tools to manage a part-time schedule efficiently.',
    link: '/resources/best/scheduling-software-concierge-nurses',
    category: 'Best Of',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you do concierge nursing part-time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many concierge nurses start part-time while maintaining another nursing position or personal commitments. The flexibility of concierge nursing allows you to set your own schedule, choose how many clients to accept, and grow at your own pace."
      }
    },
    {
      "@type": "Question",
      "name": "How many hours per week does a part-time concierge nurse work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Part-time concierge nurses typically work 10-20 hours per week, though this varies widely. Some dedicate specific days to concierge work, while others fit visits around an existing schedule. The key is consistency — clients need to know when you are available."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my hospital job and do concierge nursing on the side?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many nurses do exactly this. Check your employer's policies on outside employment and non-compete agreements first. Ensure you maintain separate liability insurance for your concierge work, and be realistic about your energy levels to avoid burnout."
      }
    },
    {
      "@type": "Question",
      "name": "Is part-time concierge nursing profitable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can be. Because concierge nursing is private-pay with premium rates, even a part-time caseload can generate meaningful income. Your profitability depends on your rates, client volume, and how efficiently you manage your time and expenses."
      }
    },
    {
      "@type": "Question",
      "name": "When should I transition from part-time to full-time concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consider transitioning when your concierge income consistently covers your financial needs, you have a steady client pipeline, and the demand for your services exceeds what you can offer part-time. Many nurses use part-time as a testing and building phase before going full-time."
      }
    }
  ]
};

export default function PartTimeNurseDayInLife() {
  return (
    <ResourceLayout
      title="A Day in the Life of a Part-Time Concierge Nurse"
      description="See how part-time concierge nurses balance client care with other commitments — and how many use part-time practice as a launchpad to full-time entrepreneurship."
      canonical="/resources/day-in-the-life/part-time-concierge-nurse"
      category="Day in the Life"
      categorySlug="/resources/day-in-the-life"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Part-time concierge nursing is one of the most common entry points into this field. Many nurses start with a handful of clients on their days off from a hospital or clinic job, building their practice gradually until they are ready to go full-time — or continue part-time as a long-term model that fits their lifestyle. The flexibility is the point.
        </p>
      </QuickAnswer>

      <h2 id="why-part-time">Why Nurses Choose Part-Time Concierge Work</h2>
      {/* TRACY TO FILL: Share real reasons nurses in your community start part-time. What are the most common situations? Parents? Nurses with side jobs? Those testing the waters? How many of your community members started part-time? */}
      <p>
        Nurses come to part-time concierge work for many reasons. Some are parents who want to be present for their children while earning income on their own terms. Others are hospital nurses who want to test the entrepreneurial waters before leaving a steady paycheck. Some are nurses nearing retirement who want to ease into a less demanding but still clinically rewarding role.
      </p>
      <p>
        Whatever the reason, part-time concierge nursing offers something traditional nursing employment does not: the ability to design your work around your life rather than the other way around. You choose your days, your hours, and your clients.
      </p>
      {/* TRACY TO FILL: What is the most common part-time model you see working? Two days a week? Weekends only? Specific hours? What model do you recommend for nurses just starting? */}

      <h2 id="morning">Morning: Balancing Clinical and Personal Life</h2>
      {/* TRACY TO FILL: Describe a real morning for a part-time concierge nurse. How does it differ from a full-time nurse's morning? Do part-time nurses handle morning client calls differently? What does the schedule look like on a concierge day versus a non-concierge day? */}
      <p>
        On a concierge day, the morning looks similar to any concierge nurse's routine — reviewing the schedule, checking client messages, preparing supplies. The difference is that part-time nurses often have a tighter window. You may have three visits to complete before picking up children from school, or you may be fitting a visit between errands and administrative work for your practice.
      </p>
      {/* TRACY TO FILL: Share a real example of how a part-time nurse in your community structures their concierge days. What compromises do they make? What works well? */}
      <p>
        Efficiency becomes essential. Part-time nurses learn to batch their visits geographically, streamline documentation, and use scheduling tools to maximize their limited clinical hours. Every minute of client-facing time is intentional.
      </p>

      <h2 id="client-visits">Client Visits on a Part-Time Schedule</h2>
      {/* TRACY TO FILL: How do part-time nurses handle client visits? Do clients know they are part-time? Does it affect the relationship? How do you manage client expectations when you are not available every day? */}
      <p>
        Client visits for a part-time concierge nurse are clinically identical to those of a full-time nurse. The care you provide is the same — what differs is your availability. Being upfront with clients about your schedule builds trust and prevents frustration.
      </p>
      <p>
        Many part-time nurses specialize in services that align well with a limited schedule — wellness check-ins for elderly clients on specific days, weekly postpartum visits, or post-surgical follow-ups spaced across the recovery period. These models work well because clients know exactly when to expect you.
      </p>
      {/* TRACY TO FILL: What niches or service models work best for part-time concierge nurses? What should they avoid? Are there niches that require too much availability for part-time work? */}

      <h2 id="admin-time">Administrative Work in Limited Hours</h2>
      {/* TRACY TO FILL: How do part-time nurses handle the business side? When do they do marketing, billing, documentation? Do they need the same systems as full-time nurses? What shortcuts or efficiencies have you seen work? */}
      <p>
        One challenge of part-time practice is fitting administrative work into fewer hours. Documentation, billing, marketing, client communication, and business development all need attention — and they compete with your clinical time and personal commitments.
      </p>
      <p>
        Successful part-time nurses often designate specific time blocks for administrative tasks — perhaps one evening per week for documentation, a weekend morning for marketing, and a few minutes after each visit for quick notes. Using tools like <Link to="/resources/best/scheduling-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">scheduling software</Link> and <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting software</Link> reduces the manual workload.
      </p>
      {/* TRACY TO FILL: What tools or systems do you recommend for part-time nurses? How much admin time per week should they expect? What can be automated? */}

      <h2 id="growing">Growing at Your Own Pace</h2>
      {/* TRACY TO FILL: Share stories of nurses who started part-time and grew. What was the tipping point for going full-time? How long did the transition take? What are the signs that someone is ready to go full-time? */}
      <p>
        Part-time practice is a valid long-term model, not just a stepping stone. Some nurses maintain a part-time concierge practice for years and find it perfectly fulfilling. Others use part-time as a testing ground, gradually adding clients until the practice can support them full-time.
      </p>
      <p>
        Signs that your part-time practice is ready for growth include consistent client demand that exceeds your availability, referral sources asking if you can take more clients, a waitlist forming, and income from concierge work approaching or exceeding what you would need to leave other employment.
      </p>
      {/* TRACY TO FILL: What specific metrics should a part-time nurse track to know when they're ready to grow? How many clients or hours per week suggest readiness for full-time? */}

      <h2 id="challenges">Challenges of Part-Time Concierge Nursing</h2>
      {/* TRACY TO FILL: What are the real challenges? Burnout from double duty? Clients who want more availability? Difficulty building referral relationships? How do you advise nurses to manage these? */}
      <p>
        Part-time concierge nursing is not without challenges. If you are maintaining another nursing position simultaneously, the combined workload can lead to burnout. Managing client expectations around your limited availability requires clear communication. And building referral relationships takes longer when you cannot always be available for new clients.
      </p>
      <ul>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Energy management</strong> — Working two nursing roles simultaneously is physically and emotionally demanding. Be honest with yourself about what you can sustain</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Availability gaps</strong> — Clients who need same-day or urgent visits may turn to a full-time nurse instead. This limits some niches for part-time practitioners</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Slower growth</strong> — Building a client base takes longer with limited hours. Patience and consistency are your tools</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Insurance and liability</strong> — You still need full professional liability coverage even for part-time work. Do not cut corners here</span>
        </li>
      </ul>
      <p>
        For guidance on building your part-time practice into something sustainable, the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> provides a structured roadmap that works whether you are starting part-time or full-time.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can you do concierge nursing part-time?</h3>
            <p>Yes. Many concierge nurses start part-time while maintaining another nursing position or personal commitments. The flexibility of concierge nursing allows you to set your own schedule, choose how many clients to accept, and grow at your own pace.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many hours per week does a part-time concierge nurse work?</h3>
            <p>Part-time concierge nurses typically work 10-20 hours per week, though this varies widely. Some dedicate specific days to concierge work, while others fit visits around an existing schedule. The key is consistency — clients need to know when you are available.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I keep my hospital job and do concierge nursing on the side?</h3>
            <p>Many nurses do exactly this. Check your employer's policies on outside employment and non-compete agreements first. Ensure you maintain separate liability insurance for your concierge work, and be realistic about your energy levels to avoid burnout.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is part-time concierge nursing profitable?</h3>
            <p>It can be. Because concierge nursing is private-pay with premium rates, even a part-time caseload can generate meaningful income. Your profitability depends on your rates, client volume, and how efficiently you manage your time and expenses.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">When should I transition from part-time to full-time concierge nursing?</h3>
            <p>Consider transitioning when your concierge income consistently covers your financial needs, you have a steady client pipeline, and the demand for your services exceeds what you can offer part-time. Many nurses use part-time as a testing and building phase before going full-time.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

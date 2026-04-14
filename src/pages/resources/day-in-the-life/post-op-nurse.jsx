import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'morning', text: 'Morning: Preparing for the Day' },
  { id: 'first-visit', text: 'First Client Visit' },
  { id: 'midday', text: 'Midday: Documentation and Coordination' },
  { id: 'afternoon', text: 'Afternoon Visits' },
  { id: 'evening', text: 'Evening: Wrapping Up' },
  { id: 'what-makes-it-different', text: 'What Makes This Different from Hospital Nursing' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Start a Post-Op Recovery Concierge Nursing Business',
    description: 'Step-by-step guide to launching your post-op recovery nursing practice.',
    link: '/resources/niches/post-op-recovery-nursing-business',
    category: 'Niches',
  },
  {
    title: 'Best Medical Bags and Supplies for Mobile Concierge Nurses',
    description: 'What to carry in your nursing bag for home visits.',
    link: '/resources/best/medical-bags-supplies-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: 'A Day in the Life of a Luxury VIP Concierge Nurse',
    description: 'See how VIP concierge nurses structure their days around high-end clients.',
    link: '/resources/day-in-the-life/luxury-vip-concierge-nurse',
    category: 'Day in the Life',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a typical day look like for a post-op recovery concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical day involves morning preparation and supply checks, one to three client visits for wound care, vital sign monitoring, and pain management, midday documentation and surgeon communication, and evening follow-up calls. The schedule varies based on client acuity and how many days post-surgery each client is."
      }
    },
    {
      "@type": "Question",
      "name": "How many clients does a post-op concierge nurse see per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most post-op concierge nurses see between one and four clients per day depending on visit length and travel time. Immediate post-op clients in the first 24 hours may require extended visits of 4-8 hours, while follow-up visits may only take 1-2 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Do post-op concierge nurses work weekends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many do, especially when clients have Friday surgeries. Flexibility is a key part of this niche. However, as you build your practice, you can structure your schedule around preferred days and set boundaries in your service agreements."
      }
    },
    {
      "@type": "Question",
      "name": "What is the hardest part of being a post-op concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many post-op concierge nurses say the hardest part is managing client expectations, particularly when clients want personal assistant-level service rather than clinical care. Setting clear boundaries upfront and having detailed service agreements helps manage this challenge."
      }
    },
    {
      "@type": "Question",
      "name": "Is post-op concierge nursing emotionally rewarding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most nurses in this niche find it deeply rewarding. You see tangible recovery progress with each visit, build meaningful one-on-one relationships with clients, and have the autonomy to provide care the way you believe it should be delivered."
      }
    }
  ]
};

export default function PostOpNurseDayInLife() {
  return (
    <ResourceLayout
      title="A Day in the Life of a Post-Op Recovery Concierge Nurse"
      description="Follow a post-op recovery concierge nurse through a typical workday — from morning supply preparation to evening follow-up calls — and see what this rewarding niche really looks like."
      canonical="/resources/day-in-the-life/post-op-recovery-concierge-nurse"
      category="Day in the Life"
      categorySlug="/resources/day-in-the-life"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A post-op recovery concierge nurse spends their day providing skilled, one-on-one care to surgical patients recovering at home. The work blends clinical expertise — wound care, vital sign monitoring, pain management — with the autonomy and flexibility of running your own practice. No two days are identical, but every day centers on helping clients heal safely and comfortably outside the hospital setting.
        </p>
      </QuickAnswer>

      <h2 id="morning">Morning: Preparing for the Day</h2>
      {/* TRACY TO FILL: Describe your actual morning routine — what time do you wake up? Do you review your schedule the night before or that morning? What does your morning preparation look like before heading out? */}
      <p>
        The morning starts before the first client visit. A post-op recovery concierge nurse reviews the day's schedule, checks in on any overnight messages from clients or their families, and prepares supplies for each visit. This means restocking the nursing bag with wound care materials, fresh gloves, vital sign equipment, and any client-specific items.
      </p>
      {/* TRACY TO FILL: What specific supplies do you check or restock each morning? Do you have a checklist you follow? Any real examples of things you've learned to always have on hand? */}
      <p>
        Client communication often begins before you leave the house. A quick text or call to the first client of the day confirms the appointment time and asks about any overnight concerns — new pain, unexpected drainage, trouble sleeping. This early check-in helps you prioritize and adjust your plan for the visit.
      </p>
      {/* TRACY TO FILL: How do you actually communicate with clients in the morning? Text? Call? App? Do you have a system for tracking overnight concerns? */}

      <h2 id="first-visit">First Client Visit</h2>
      {/* TRACY TO FILL: Walk through a real (anonymized) first visit of the day. What does arrival look like? What do you assess first? How long does a typical first visit of the day take? What is the client's home environment usually like? */}
      <p>
        The first visit of the day is often the most intensive. You might be seeing a client who is 24 hours post-surgery — still groggy, managing significant pain, and needing hands-on support with wound care and mobility. Arriving at the client's home, you conduct a full assessment: vital signs, pain level, surgical site inspection, drain output measurement, and a conversation about how they are feeling overall.
      </p>
      {/* TRACY TO FILL: Describe a typical first-visit assessment in detail. What specific vital signs do you check? What does your wound care assessment look like step by step? How do you document findings in real time? */}
      <p>
        Beyond the clinical work, there is a hospitality element. You are a guest in someone's home during a vulnerable time. How you present yourself — calm, competent, reassuring — matters as much as your clinical skills. Many clients are anxious after surgery, and part of your role is to normalize the recovery process and help them understand what is expected versus what is a concern.
      </p>
      {/* TRACY TO FILL: Share examples of how you build trust and calm anxious clients. Any specific phrases or approaches you use? How do you handle family members who are worried? */}

      <h2 id="midday">Midday: Documentation and Coordination</h2>
      {/* TRACY TO FILL: Describe your midday routine. Do you go home between visits? Work from your car? A coffee shop? How do you handle documentation — paper forms, an app, a laptop? */}
      <p>
        Between visits, documentation is essential. You record detailed notes from each visit — vital signs, wound status, pain levels, medications administered, client concerns, and your nursing assessment. This documentation serves multiple purposes: it protects you legally, provides continuity of care, and gives you records to share with the referring surgeon if needed.
      </p>
      {/* TRACY TO FILL: What documentation system do you actually use? How long does documentation take per visit? Do you have templates? What information does the surgeon's office want to see? */}
      <p>
        Midday is also when coordination happens. You may call a surgeon's office to report a concern, respond to a new client inquiry, or schedule upcoming visits. If you are building your practice, this window might also include marketing activities — following up with a surgeon's office, updating your social media, or responding to a referral.
      </p>
      {/* TRACY TO FILL: Give examples of surgeon communications. How often do you need to call a surgeon's office? What kinds of things do you report? How do they respond? */}

      <h2 id="afternoon">Afternoon Visits</h2>
      {/* TRACY TO FILL: Describe afternoon visits. Are these typically follow-up visits with clients further along in recovery? How do they differ from morning visits? What services are most common in the afternoon? */}
      <p>
        Afternoon visits tend to be with clients who are further along in their recovery — perhaps three to seven days post-surgery. These visits are often shorter and focus on wound care progression, drain removal preparation, activity level assessment, and patient education about the next phase of recovery.
      </p>
      {/* TRACY TO FILL: Walk through a typical afternoon visit. What does a 5-day post-op visit look like compared to a 1-day post-op visit? What questions do clients ask at this stage? What are the most common concerns? */}
      <p>
        You may also use afternoon time for new client consultations — pre-operative meetings where you discuss what to expect after surgery, review the care plan, and establish the relationship before the procedure. These consultations set the stage for a smooth post-op experience and help the client feel confident in their choice to hire a concierge nurse.
      </p>
      {/* TRACY TO FILL: Do you do pre-op consultations? What do they look like? How long are they? Do you charge for them? What information do you gather? */}

      <h2 id="evening">Evening: Wrapping Up</h2>
      {/* TRACY TO FILL: Describe your actual evening wind-down. Do you make evening check-in calls? How do you handle after-hours questions? What does your end-of-day routine look like? */}
      <p>
        The day does not always end when the last visit is over. Evening often includes follow-up calls or texts to check on clients seen earlier in the day, especially those in the immediate post-operative period. You finalize documentation, update your schedule for the next day, and restock any supplies that ran low.
      </p>
      {/* TRACY TO FILL: How do you set boundaries around evening availability? Do you have set hours for after-hours calls? How do you handle true emergencies versus non-urgent questions? */}
      <p>
        Setting boundaries is important. While you want to be available for genuine concerns, establishing clear after-hours policies in your service agreement protects your personal time. Most clients respect these boundaries when they are communicated upfront and consistently.
      </p>

      <h2 id="what-makes-it-different">What Makes This Different from Hospital Nursing</h2>
      <p>
        The contrast between post-op concierge nursing and hospital nursing is significant. In a hospital, you might have four to six patients simultaneously, operate under rigid protocols, and deal with constant interruptions. As a concierge nurse, your attention is entirely on one client at a time.
      </p>
      {/* TRACY TO FILL: Share your personal experience of what changed when you left the hospital setting. What was the biggest difference? What do you miss? What would you never go back to? */}
      <ul>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Autonomy</strong> — You set your schedule, choose your clients, and determine how you deliver care</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>One-on-one attention</strong> — Every client gets your full, undivided clinical focus</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Relationship-based care</strong> — You follow clients through their entire recovery arc, building trust over time</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Flexibility</strong> — Your workday bends around your life rather than the other way around</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Income potential</strong> — Private-pay rates reflect the premium nature of personalized surgical recovery care</span>
        </li>
      </ul>
      <p>
        If you are considering this path, explore our guide on <Link to="/resources/niches/post-op-recovery-nursing-business" className="text-gold hover:text-gold/80 underline">starting a post-op recovery concierge nursing business</Link> for a complete roadmap. You can also learn about the <Link to="/resources/best/medical-bags-supplies-concierge-nurses" className="text-gold hover:text-gold/80 underline">supplies and equipment</Link> you will need and check out our <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> for hands-on guidance.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What does a typical day look like for a post-op recovery concierge nurse?</h3>
            <p>A typical day involves morning preparation and supply checks, one to three client visits for wound care, vital sign monitoring, and pain management, midday documentation and surgeon communication, and evening follow-up calls. The schedule varies based on client acuity and how many days post-surgery each client is.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many clients does a post-op concierge nurse see per day?</h3>
            <p>Most post-op concierge nurses see between one and four clients per day depending on visit length and travel time. Immediate post-op clients in the first 24 hours may require extended visits of 4-8 hours, while follow-up visits may only take 1-2 hours.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do post-op concierge nurses work weekends?</h3>
            <p>Many do, especially when clients have Friday surgeries. Flexibility is a key part of this niche. However, as you build your practice, you can structure your schedule around preferred days and set boundaries in your service agreements.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the hardest part of being a post-op concierge nurse?</h3>
            <p>Many post-op concierge nurses say the hardest part is managing client expectations, particularly when clients want personal assistant-level service rather than clinical care. Setting clear boundaries upfront and having detailed service agreements helps manage this challenge.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is post-op concierge nursing emotionally rewarding?</h3>
            <p>Most nurses in this niche find it deeply rewarding. You see tangible recovery progress with each visit, build meaningful one-on-one relationships with clients, and have the autonomy to provide care the way you believe it should be delivered.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

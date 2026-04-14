import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'morning-routine', text: 'Morning: Preparing for Client Visits' },
  { id: 'first-client', text: 'First Client: Comprehensive Wellness Visit' },
  { id: 'family-communication', text: 'Communicating with Families and Physicians' },
  { id: 'afternoon-visits', text: 'Afternoon: Follow-Up and Medication Management' },
  { id: 'care-coordination', text: 'Care Coordination and Advocacy' },
  { id: 'end-of-day', text: 'End of Day: Documentation and Planning' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'A Day in the Life of a Part-Time Concierge Nurse',
    description: 'How concierge nurses balance practice with other commitments.',
    link: '/resources/day-in-the-life/part-time-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: 'Best CRM Software for Concierge Nurses',
    description: 'Track clients, families, and care plans with the right CRM.',
    link: '/resources/best/crm-software-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: 'Concierge Nursing for Nurses Over 50',
    description: 'Why experienced nurses thrive in the concierge nursing model.',
    link: '/resources/for/concierge-nursing-nurses-over-50',
    category: 'For You',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a geriatric concierge nurse do on a daily basis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A geriatric concierge nurse provides private, in-home wellness visits to elderly clients. Daily activities include comprehensive health assessments, medication management and reconciliation, coordination with physicians and specialists, fall risk evaluation, family communication, and chronic disease monitoring."
      }
    },
    {
      "@type": "Question",
      "name": "How is geriatric concierge nursing different from home health?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geriatric concierge nursing is private-pay and not limited by insurance visit caps or rigid care plans. You have more time per visit, can address the whole person rather than a single diagnosis, and offer the continuity of seeing the same client consistently over months or years."
      }
    },
    {
      "@type": "Question",
      "name": "Do geriatric concierge nurses handle dementia care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many do. Geriatric concierge nurses often provide cognitive assessments, dementia monitoring, caregiver education, and coordination of dementia-specific resources. This requires specialized knowledge, and additional training in dementia care can strengthen your practice."
      }
    },
    {
      "@type": "Question",
      "name": "How many elderly clients can a geriatric concierge nurse manage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client load depends on your service model. Nurses offering weekly wellness visits may manage 15-25 clients. Those providing more intensive daily or multiple-times-per-week visits may work with 5-10 clients. The key is maintaining quality of care and relationship continuity."
      }
    },
    {
      "@type": "Question",
      "name": "Is geriatric concierge nursing emotionally demanding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can be. You build deep relationships with elderly clients and their families, and you may experience loss when clients pass away. However, most geriatric concierge nurses describe the work as deeply meaningful because you significantly improve quality of life during a vulnerable stage."
      }
    }
  ]
};

export default function GeriatricNurseDayInLife() {
  return (
    <ResourceLayout
      title="A Day in the Life of a Geriatric Concierge Nurse"
      description="See what a typical day looks like for a geriatric concierge nurse — from morning wellness visits to care coordination and family communication — and why this niche is deeply rewarding."
      canonical="/resources/day-in-the-life/geriatric-concierge-nurse"
      category="Day in the Life"
      categorySlug="/resources/day-in-the-life"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A geriatric concierge nurse spends their day providing personalized wellness visits to elderly clients in their homes. The work is relationship-driven — you become a trusted clinical advocate for aging clients and their families, monitoring health over time, managing medications, coordinating with physicians, and ensuring your clients can age safely and comfortably in their own homes.
        </p>
      </QuickAnswer>

      <h2 id="morning-routine">Morning: Preparing for Client Visits</h2>
      {/* TRACY TO FILL: Describe the real morning routine for a geriatric concierge nurse. What time does the day typically start? How do you plan your route for visits? What supplies are specific to geriatric visits? Do you check in with family members before visiting? */}
      <p>
        Mornings in geriatric concierge nursing tend to start with planning and preparation. You review your client roster for the day, check for any messages from families about overnight concerns, and pack your nursing bag with supplies specific to each client's needs — blood pressure cuff, pulse oximeter, glucose monitor, medication organizers, and any assessment tools you use regularly.
      </p>
      {/* TRACY TO FILL: What does your actual nursing bag contain for geriatric visits? Do you carry fall risk assessment tools? Cognitive screening materials? How do you organize supplies for multiple clients with different needs? */}
      <p>
        Route planning matters in this niche. Your clients are long-term, and you visit many of them on a regular weekly or biweekly schedule. Grouping visits by geography reduces drive time and lets you see more clients efficiently while still giving each person the unhurried attention they deserve.
      </p>

      <h2 id="first-client">First Client: Comprehensive Wellness Visit</h2>
      {/* TRACY TO FILL: Walk through a real (anonymized) comprehensive wellness visit with an elderly client. What do you assess first? How long does a typical visit take? What does the client's home environment tell you? What kind of relationship do you build over time? */}
      <p>
        Your first visit of the day might be with a client you have been seeing weekly for months. You know their baseline, their medications, their quirks, and their family dynamics. This continuity is one of the most powerful aspects of geriatric concierge nursing — you notice subtle changes that a new provider would miss.
      </p>
      <p>
        A comprehensive wellness visit typically includes:
      </p>
      <ul>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Vital signs</strong> — Blood pressure, heart rate, oxygen saturation, temperature, and weight tracking</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Medication review</strong> — Checking adherence, looking for side effects, reconciling medications after physician visits</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Fall risk assessment</strong> — Evaluating mobility, home hazards, and balance</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Cognitive screening</strong> — Noting any changes in memory, orientation, or behavior</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Nutrition and hydration assessment</strong> — Checking the refrigerator, discussing appetite, monitoring for dehydration</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Emotional and social wellness</strong> — Asking about loneliness, activities, and mood</span>
        </li>
      </ul>
      {/* TRACY TO FILL: Share specific examples of subtle changes you've caught during routine visits that made a clinical difference. What does a "good visit" look like versus a "concerning visit"? */}

      <h2 id="family-communication">Communicating with Families and Physicians</h2>
      {/* TRACY TO FILL: Describe how you communicate with families. Do you send written reports after each visit? How do you handle family disagreements about care? What about long-distance family members? How do you coordinate with the client's primary care physician? */}
      <p>
        In geriatric concierge nursing, your client is often the elderly person, but your communication extends to their entire family. Adult children want updates, spouses need guidance, and everyone has questions. Managing these relationships with professionalism and empathy is a core skill.
      </p>
      <p>
        After each visit, you may send a summary to the family — a brief overview of what you assessed, any changes noted, and recommendations. This transparency builds trust and keeps distant family members informed and involved.
      </p>
      {/* TRACY TO FILL: What does your actual family communication process look like? Do you use a specific format? Email? App? How often do families want updates? How do you handle HIPAA considerations with multiple family members? */}
      <p>
        Physician coordination is equally important. When you notice a change — a new medication side effect, worsening mobility, cognitive decline — you communicate directly with the client's physician. Your detailed, longitudinal observations are valuable clinical data that a 15-minute office visit cannot capture.
      </p>

      <h2 id="afternoon-visits">Afternoon: Follow-Up and Medication Management</h2>
      {/* TRACY TO FILL: Describe afternoon visits. Are these shorter check-ins? Do you focus on specific issues like medication management? How do afternoon visits differ from morning comprehensive visits? */}
      <p>
        Afternoon visits may be shorter follow-ups — checking on a client after a recent hospitalization, verifying medication compliance after a prescription change, or reassessing an issue you flagged during a previous visit. These focused visits are often where you catch problems before they become emergencies.
      </p>
      {/* TRACY TO FILL: Give examples of problems you've caught during follow-up visits. Medication errors? Early signs of infection? Changes in cognitive status? How often do your follow-up visits prevent hospitalizations? */}
      <p>
        Medication management is often the most impactful service you provide. Elderly clients frequently take multiple medications prescribed by different providers. Ensuring these medications work together safely, are taken correctly, and are not causing harmful side effects requires attention and clinical knowledge that family members cannot provide.
      </p>

      <h2 id="care-coordination">Care Coordination and Advocacy</h2>
      {/* TRACY TO FILL: Describe your role as a care coordinator. Do you accompany clients to physician appointments? Coordinate with home care aides? Help families evaluate assisted living options? What advocacy looks like in practice? */}
      <p>
        One of the most valued aspects of geriatric concierge nursing is care coordination. You become the central point of contact for your client's healthcare — attending physician appointments, coordinating with specialists, managing transitions between care settings, and ensuring nothing falls through the cracks.
      </p>
      <p>
        This advocacy role is especially important during care transitions — hospital to home, home to rehabilitation, or even the difficult conversation about whether independent living is still safe. Families rely on your clinical judgment and your knowledge of their loved one to guide these decisions.
      </p>
      {/* TRACY TO FILL: Share a real example (anonymized) of how your care coordination made a difference for a client. How do families respond to having a nurse advocate on their side? What does accompanying a client to a physician appointment look like? */}

      <h2 id="end-of-day">End of Day: Documentation and Planning</h2>
      {/* TRACY TO FILL: Describe your end-of-day routine. How long does documentation take? What system do you use? How do you plan for the next day? Do you have evening boundaries? */}
      <p>
        Evenings are for completing documentation, sending family updates, and planning the next day's visits. Good documentation in geriatric concierge nursing is longitudinal — you are tracking trends over weeks and months, not just recording a single visit. Your notes should tell the story of each client's health trajectory.
      </p>
      {/* TRACY TO FILL: What does your documentation actually include? Do you track trends over time? How do you organize records for clients you've been seeing for months or years? */}
      <p>
        If this niche speaks to you, the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> can help you build a geriatric concierge nursing practice from the ground up. You will also want to explore <Link to="/resources/best/crm-software-concierge-nurses" className="text-gold hover:text-gold/80 underline">CRM tools</Link> for managing long-term client relationships and learn about <Link to="/resources/certifications/concierge-nurse-wound-care-certification" className="text-gold hover:text-gold/80 underline">wound care certification</Link> to expand your clinical capabilities.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What does a geriatric concierge nurse do on a daily basis?</h3>
            <p>A geriatric concierge nurse provides private, in-home wellness visits to elderly clients. Daily activities include comprehensive health assessments, medication management and reconciliation, coordination with physicians and specialists, fall risk evaluation, family communication, and chronic disease monitoring.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How is geriatric concierge nursing different from home health?</h3>
            <p>Geriatric concierge nursing is private-pay and not limited by insurance visit caps or rigid care plans. You have more time per visit, can address the whole person rather than a single diagnosis, and offer the continuity of seeing the same client consistently over months or years.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do geriatric concierge nurses handle dementia care?</h3>
            <p>Many do. Geriatric concierge nurses often provide cognitive assessments, dementia monitoring, caregiver education, and coordination of dementia-specific resources. This requires specialized knowledge, and additional training in dementia care can strengthen your practice.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many elderly clients can a geriatric concierge nurse manage?</h3>
            <p>Client load depends on your service model. Nurses offering weekly wellness visits may manage 15-25 clients. Those providing more intensive daily or multiple-times-per-week visits may work with 5-10 clients. The key is maintaining quality of care and relationship continuity.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is geriatric concierge nursing emotionally demanding?</h3>
            <p>It can be. You build deep relationships with elderly clients and their families, and you may experience loss when clients pass away. However, most geriatric concierge nurses describe the work as deeply meaningful because you significantly improve quality of life during a vulnerable stage.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'morning', text: 'Morning: Preparing for High-Net-Worth Clients' },
  { id: 'on-site', text: 'On-Site: Delivering Premium Care' },
  { id: 'concierge-expectations', text: 'Managing VIP Expectations' },
  { id: 'travel-events', text: 'Travel and Event-Based Nursing' },
  { id: 'business-side', text: 'The Business Side of Luxury Nursing' },
  { id: 'boundaries', text: 'Setting Boundaries in a Premium Practice' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'A Day in the Life of a Post-Op Recovery Concierge Nurse',
    description: 'Many VIP clients need post-op care — see how this niche overlaps.',
    link: '/resources/day-in-the-life/post-op-recovery-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: 'How to Price Concierge Nursing Services',
    description: 'Set premium rates that match the VIP experience you deliver.',
    link: '/resources/how-to-price-concierge-nursing-services',
    category: 'Financial',
  },
  {
    title: 'How to Go from Solo Concierge Nurse to Nursing Agency',
    description: 'Scale your luxury nursing practice by building a team.',
    link: '/resources/scaling/solo-nurse-to-nursing-agency',
    category: 'Scaling',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a luxury VIP concierge nurse do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A luxury VIP concierge nurse provides private, premium nursing services to high-net-worth individuals and their families. Services can include post-surgical recovery support, wellness monitoring, travel nursing, event medical standby, medication management, and personalized health concierge services — all delivered with a hospitality-level experience."
      }
    },
    {
      "@type": "Question",
      "name": "How do VIP concierge nurses find high-net-worth clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High-net-worth clients come through referrals from plastic surgeons, concierge physicians, estate managers, personal assistants, wealth managers, and word of mouth within affluent communities. Direct marketing to this population is less effective than relationship building and reputation."
      }
    },
    {
      "@type": "Question",
      "name": "Do VIP concierge nurses travel with their clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some do. High-net-worth clients may request a concierge nurse to accompany them on vacations, business trips, or international travel. This requires flexibility, a valid passport, and clear contractual terms about compensation, travel expenses, and scope of work during travel."
      }
    },
    {
      "@type": "Question",
      "name": "What should I wear as a VIP concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Presentation matters in luxury nursing. Many VIP concierge nurses wear professional clinical attire that is polished and understated — clean scrubs in neutral tones, professional athleisure, or business casual with a lab coat. The key is looking both clinically competent and appropriate for upscale environments."
      }
    },
    {
      "@type": "Question",
      "name": "Is luxury VIP concierge nursing stressful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The clinical work itself is similar to other concierge nursing niches. The added layer of stress comes from managing high expectations, maintaining discretion, and navigating the interpersonal dynamics of working in affluent households. Strong communication skills and clear boundaries are essential."
      }
    }
  ]
};

export default function LuxuryVIPNurseDayInLife() {
  return (
    <ResourceLayout
      title="A Day in the Life of a Luxury VIP Concierge Nurse"
      description="Discover what it is really like to provide private nursing care to high-net-worth clients — from premium home visits to travel nursing and event standby — in this behind-the-scenes look at luxury concierge nursing."
      canonical="/resources/day-in-the-life/luxury-vip-concierge-nurse"
      category="Day in the Life"
      categorySlug="/resources/day-in-the-life"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          A luxury VIP concierge nurse provides premium, private nursing care to high-net-worth individuals and their families. The day blends clinical expertise with a hospitality mindset — every interaction, from how you present yourself to how you communicate, reflects the elevated experience these clients expect. The work is rewarding and well-compensated, but it demands discretion, flexibility, and exceptional interpersonal skills.
        </p>
      </QuickAnswer>

      <h2 id="morning">Morning: Preparing for High-Net-Worth Clients</h2>
      {/* TRACY TO FILL: Describe the morning routine for a VIP concierge nurse. How is it different from standard concierge nursing? Do you prepare differently for affluent clients? What does professionalism look like in this niche specifically? */}
      <p>
        Mornings in luxury concierge nursing begin with meticulous preparation. Your clients operate in a world where details matter — from punctuality to personal presentation to the quality of supplies you bring into their home. Before leaving for a visit, you review the client's preferences, confirm the appointment with their personal assistant or estate manager, and ensure your nursing bag is stocked with premium supplies.
      </p>
      {/* TRACY TO FILL: What does "premium supplies" mean in practice? Do you carry different supplies for VIP clients? How do you present yourself — uniform, attire, vehicle? What details do clients notice? */}
      <p>
        Personal presentation matters in this niche more than any other. You are entering estates, penthouses, and luxury hotel suites. Your attire should communicate clinical competence while fitting the environment. Many VIP nurses invest in professional, polished clinical wear rather than standard scrubs.
      </p>

      <h2 id="on-site">On-Site: Delivering Premium Care</h2>
      {/* TRACY TO FILL: Walk through a VIP client visit. What is the home environment like? How do you interact with household staff? How does the clinical work differ (or not) from standard concierge nursing? What makes the experience "premium"? */}
      <p>
        The clinical care itself is fundamentally the same as any concierge nursing visit — vital signs, assessments, wound care, medication management. What elevates it to a VIP experience is everything surrounding the clinical work: your communication style, your attention to comfort, your discretion, and your ability to adapt to the client's preferences.
      </p>
      {/* TRACY TO FILL: Give specific examples of how you adapt your care delivery for VIP clients. Do they have specific preferences about how care is delivered? How do you handle requests that go beyond nursing scope? What are the most common services VIP clients request? */}
      <p>
        You may interact with household staff during visits — personal assistants, housekeepers, private chefs, or estate managers. Navigating these relationships professionally is part of the job. You need to be collaborative without overstepping, and clear about your clinical role without being rigid.
      </p>
      {/* TRACY TO FILL: Describe real interactions with household staff. How do you coordinate with personal assistants? Have you worked alongside private chefs on nutrition plans? What dynamics emerge in affluent households? */}

      <h2 id="concierge-expectations">Managing VIP Expectations</h2>
      {/* TRACY TO FILL: This is crucial. Share real examples of managing high expectations. What do VIP clients expect that standard clients do not? How do you handle unreasonable requests? What boundaries have you had to set? */}
      <p>
        High-net-worth clients are accustomed to getting what they want, when they want it. This can translate into expectations that stretch beyond your clinical scope — requests for personal errands, medication opinions that require physician input, or availability expectations that blur into 24/7 on-call.
      </p>
      <p>
        The most successful VIP concierge nurses set clear expectations from the beginning. Your service agreement should define exactly what is included, what falls outside your scope, and how availability works. Clarity protects both you and the client, and most high-net-worth individuals respect professionals who have clear boundaries.
      </p>
      {/* TRACY TO FILL: Share your approach to expectation setting. What does your VIP service agreement include that standard agreements do not? How do you say no to a VIP client gracefully? Any real scenarios? */}

      <h2 id="travel-events">Travel and Event-Based Nursing</h2>
      {/* TRACY TO FILL: Describe travel nursing with VIP clients. Have you accompanied clients on trips? What did that look like logistically? How about event standby — parties, retreats, corporate events? What is the compensation model for travel? */}
      <p>
        Some luxury concierge nurses accompany clients on domestic or international travel. You might fly with a post-surgical client to a vacation home, provide medical standby at a private event, or travel with an elderly client who needs clinical support during a family trip.
      </p>
      <p>
        Travel nursing requires clear contracts covering compensation structure (daily rate plus expenses), scope of work during travel, housing and meal arrangements, time off expectations, and liability coverage in different jurisdictions. Never travel with a client without a written agreement.
      </p>
      {/* TRACY TO FILL: Have you done travel nursing? What did the contract look like? How did you handle logistics? Any stories (anonymized) about travel experiences with clients? What about event-based nursing — have you provided standby at private events? */}

      <h2 id="business-side">The Business Side of Luxury Nursing</h2>
      {/* TRACY TO FILL: Discuss the business model for VIP nursing. How does pricing work? Retainer models? How do you market to this demographic? What referral sources are most effective? */}
      <p>
        The business model for luxury concierge nursing often differs from standard concierge practice. Some VIP nurses work on retainer — a client pays a monthly fee for guaranteed availability. Others charge premium hourly or daily rates. Package pricing for specific services (post-surgical recovery, travel companion) is also common.
      </p>
      <p>
        Marketing to high-net-worth clients is almost entirely relationship-driven. Your referral sources include concierge physicians, plastic surgeons, estate managers, personal assistants, wealth advisors, and existing VIP clients. Direct advertising is generally less effective than building a reputation within affluent networks.
      </p>
      {/* TRACY TO FILL: What is your actual pricing model for VIP clients? How did you build your first VIP referral relationships? What has been your most effective client acquisition channel? How does word of mouth work in affluent communities? */}
      <p>
        Discretion is your most valuable marketing tool. High-net-worth clients talk to each other, and a reputation for professionalism, clinical excellence, and absolute confidentiality is the foundation of a luxury nursing practice.
      </p>

      <h2 id="boundaries">Setting Boundaries in a Premium Practice</h2>
      {/* TRACY TO FILL: This is very important. Share your real experience with boundaries in VIP nursing. How do you maintain professional boundaries when you become embedded in a client's lifestyle? How do you handle gifts, invitations, or personal requests? */}
      <p>
        Boundary setting in luxury nursing requires skill and confidence. When you are in a client's home regularly, interacting with their family and staff, it can feel natural for the relationship to become less formal over time. Maintaining your professional identity — as a clinician, not a friend or personal assistant — is essential for both your effectiveness and your longevity in this work.
      </p>
      {/* TRACY TO FILL: Give real examples of boundary challenges and how you handled them. What advice would you give to a nurse entering VIP concierge work for the first time? */}
      <p>
        Explore our <Link to="/resources/how-to-price-concierge-nursing-services" className="text-gold hover:text-gold/80 underline">pricing guide</Link> for strategies on setting premium rates, and learn about <Link to="/resources/scaling/solo-nurse-to-nursing-agency" className="text-gold hover:text-gold/80 underline">scaling to an agency</Link> if you want to build a team for your luxury practice. The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> provides mentorship on positioning yourself in the premium market.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What does a luxury VIP concierge nurse do?</h3>
            <p>A luxury VIP concierge nurse provides private, premium nursing services to high-net-worth individuals and their families. Services can include post-surgical recovery support, wellness monitoring, travel nursing, event medical standby, medication management, and personalized health concierge services — all delivered with a hospitality-level experience.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do VIP concierge nurses find high-net-worth clients?</h3>
            <p>High-net-worth clients come through referrals from plastic surgeons, concierge physicians, estate managers, personal assistants, wealth managers, and word of mouth within affluent communities. Direct marketing to this population is less effective than relationship building and reputation.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do VIP concierge nurses travel with their clients?</h3>
            <p>Some do. High-net-worth clients may request a concierge nurse to accompany them on vacations, business trips, or international travel. This requires flexibility, a valid passport, and clear contractual terms about compensation, travel expenses, and scope of work during travel.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What should I wear as a VIP concierge nurse?</h3>
            <p>Presentation matters in luxury nursing. Many VIP concierge nurses wear professional clinical attire that is polished and understated — clean scrubs in neutral tones, professional athleisure, or business casual with a lab coat. The key is looking both clinically competent and appropriate for upscale environments.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is luxury VIP concierge nursing stressful?</h3>
            <p>The clinical work itself is similar to other concierge nursing niches. The added layer of stress comes from managing high expectations, maintaining discretion, and navigating the interpersonal dynamics of working in affluent households. Strong communication skills and clear boundaries are essential.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

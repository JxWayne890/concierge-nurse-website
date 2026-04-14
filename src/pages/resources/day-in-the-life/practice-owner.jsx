import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'morning', text: 'Morning: CEO Mode Before Clinical Mode' },
  { id: 'team-management', text: 'Managing Your Nursing Team' },
  { id: 'client-oversight', text: 'Client Oversight Without Doing Every Visit' },
  { id: 'growth-operations', text: 'Afternoon: Growth and Operations' },
  { id: 'financial-management', text: 'Financial Management and Billing' },
  { id: 'end-of-day', text: 'End of Day: Reflection and Strategy' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: 'How to Go from Solo Concierge Nurse to Nursing Agency',
    description: 'The roadmap for scaling from solo practice to a multi-nurse operation.',
    link: '/resources/scaling/solo-nurse-to-nursing-agency',
    category: 'Scaling',
  },
  {
    title: 'How to Hire Your First Subcontractor',
    description: 'Practical guidance for bringing on your first team member.',
    link: '/resources/scaling/hire-first-subcontractor-nursing',
    category: 'Scaling',
  },
  {
    title: 'How to Create a Training Manual for Your Team',
    description: 'Standardize care delivery across your nursing team.',
    link: '/resources/scaling/concierge-nursing-training-manual',
    category: 'Scaling',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a multi-nurse concierge practice owner do all day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A practice owner splits their time between business operations and clinical oversight. Daily tasks include managing team schedules, reviewing client care plans, handling business finances, marketing, nurturing referral relationships, and strategic planning. Some owners also maintain a personal caseload."
      }
    },
    {
      "@type": "Question",
      "name": "How many nurses does a typical multi-nurse concierge practice have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-nurse practices range from two nurses to larger teams of ten or more. Many practice owners start by hiring one subcontractor or employee and grow gradually based on client demand. There is no single right size — it depends on your market and goals."
      }
    },
    {
      "@type": "Question",
      "name": "Do practice owners still see clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many do, especially in the early stages of growth. Some owners maintain a small personal caseload of VIP or long-standing clients while their team handles the broader client base. Others eventually step fully into the CEO role and focus entirely on operations."
      }
    },
    {
      "@type": "Question",
      "name": "What is the hardest part of running a multi-nurse practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most practice owners say the hardest part is the identity shift from clinician to business owner. Letting go of hands-on client care, trusting your team, and spending your time on operations instead of nursing requires a real mindset change."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to go from solo nurse to practice owner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines vary widely. Some nurses bring on their first subcontractor within six months of launching. Others spend two or more years building a solo practice before expanding. The key factor is consistent client demand that exceeds your capacity as a solo practitioner."
      }
    }
  ]
};

export default function PracticeOwnerDayInLife() {
  return (
    <ResourceLayout
      title="A Day in the Life of a Multi-Nurse Concierge Practice Owner"
      description="Go behind the scenes of running a multi-nurse concierge nursing practice — from morning team check-ins to afternoon strategy sessions — and see what it takes to lead a growing healthcare business."
      canonical="/resources/day-in-the-life/multi-nurse-practice-owner"
      category="Day in the Life"
      categorySlug="/resources/day-in-the-life"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Running a multi-nurse concierge practice means your day is split between clinical oversight and business operations. You are no longer just a nurse — you are a CEO, hiring manager, quality assurance lead, and strategic planner. The work is different from bedside care, but for nurses with an entrepreneurial drive, it is the path to building something that serves clients at scale while creating financial freedom.
        </p>
      </QuickAnswer>

      <h2 id="morning">Morning: CEO Mode Before Clinical Mode</h2>
      {/* TRACY TO FILL: Describe your real morning as a practice owner. What time do you start? What do you check first — team messages, client updates, financials? How does your morning routine differ from when you were a solo nurse? */}
      <p>
        The morning of a practice owner looks nothing like the morning of a solo concierge nurse. Instead of packing your nursing bag, you are reviewing overnight messages from your team, checking the day's schedule across all nurses, and addressing any client issues that surfaced while you were offline.
      </p>
      {/* TRACY TO FILL: Walk through your actual morning check-in process. Do you hold a morning team huddle? How do you review the day's client schedule? What platforms or tools do you use to stay on top of operations? */}
      <p>
        Many practice owners hold a brief morning check-in with their team — whether that is a group text, a quick video call, or a message in a team communication platform. This check-in covers the day's client assignments, any scheduling changes, supply needs, and clinical questions.
      </p>
      {/* TRACY TO FILL: How do you conduct your team check-ins? How long do they take? What information do you cover? How do your nurses communicate with you throughout the day? */}

      <h2 id="team-management">Managing Your Nursing Team</h2>
      {/* TRACY TO FILL: This is critical. Describe what team management looks like in practice. How do you handle scheduling? How do you match nurses to clients? How do you maintain quality control? What happens when a nurse calls out? */}
      <p>
        Team management is the single biggest shift from solo practice to practice ownership. You are responsible for scheduling, performance, professional development, and team culture. How well you manage your team directly impacts client satisfaction and your reputation.
      </p>
      <p>
        Key management responsibilities include:
      </p>
      <ul>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Scheduling and assignments</strong> — Matching nurses to clients based on skills, personality fit, and geography</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Quality assurance</strong> — Reviewing documentation, conducting periodic ride-alongs, and gathering client feedback</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Continuing education</strong> — Ensuring your team maintains certifications and stays current</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Conflict resolution</strong> — Handling issues between nurses and clients, or within the team</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
          <span><strong>Backup coverage</strong> — Having contingency plans for when nurses call out or emergencies arise</span>
        </li>
      </ul>
      {/* TRACY TO FILL: Share specific examples of team management challenges and how you handle them. How do you evaluate nurse performance? How do you handle a nurse who is not meeting standards? How do you retain good nurses? */}

      <h2 id="client-oversight">Client Oversight Without Doing Every Visit</h2>
      {/* TRACY TO FILL: How do you maintain clinical quality when you are not the one seeing every client? What systems do you use? How do you stay connected to client needs? How do clients feel about seeing different nurses? */}
      <p>
        One of the hardest transitions in becoming a practice owner is letting go of direct client care. You built your practice on your personal clinical skills and client relationships, and trusting another nurse to deliver that same level of care requires systems and trust.
      </p>
      {/* TRACY TO FILL: Describe your actual systems for maintaining clinical oversight. Do you review visit notes? Conduct spot checks? Talk to clients directly? How do you ensure your team delivers the same quality you would? */}
      <p>
        Successful practice owners build systems for clinical oversight — standardized care protocols, documentation templates, regular chart reviews, and direct client feedback mechanisms. Your <Link to="/resources/scaling/concierge-nursing-training-manual" className="text-gold hover:text-gold/80 underline">training manual</Link> becomes the foundation for consistent care delivery across your team.
      </p>

      <h2 id="growth-operations">Afternoon: Growth and Operations</h2>
      {/* TRACY TO FILL: How do you spend your afternoons? Business development meetings? Marketing? Referral relationship building? New nurse interviews? What does the operational side of running a practice look like day to day? */}
      <p>
        Afternoons often shift to the growth side of the business. This might include meeting with a potential referral source, interviewing a nurse candidate, reviewing marketing analytics, or planning a new service offering. This is the work that keeps the business growing — and it requires a different mindset than clinical care.
      </p>
      {/* TRACY TO FILL: Walk through a real afternoon. What growth activities take up the most time? How do you balance doing the work versus working on the business? What activities have the highest return for your time? */}
      <p>
        Operations management also fills the afternoon — reviewing and approving timesheets, handling supply orders, updating policies, and managing vendor relationships. These tasks are not glamorous, but they keep the practice running smoothly.
      </p>

      <h2 id="financial-management">Financial Management and Billing</h2>
      {/* TRACY TO FILL: Describe the financial management side. How do you handle billing? Payroll? What financial reports do you review? How has the financial complexity grown with your team? Do you have a bookkeeper or accountant? */}
      <p>
        Financial management becomes significantly more complex when you move from solo practice to multi-nurse operations. You are now managing payroll or contractor payments, tracking revenue per nurse, monitoring profitability per client, and planning for growth investments.
      </p>
      {/* TRACY TO FILL: What financial tools do you use? How often do you review financials? What metrics do you track? When did you hire financial help? */}
      <p>
        Good <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting software</Link> is non-negotiable at this stage. Many practice owners also work with a bookkeeper or accountant who understands healthcare businesses. The cost is worth it — accurate financial tracking lets you make confident decisions about hiring, pricing, and expansion.
      </p>

      <h2 id="end-of-day">End of Day: Reflection and Strategy</h2>
      {/* TRACY TO FILL: What does your end of day look like? Do you review the day's visits? Plan for tomorrow? Think strategically about the business? How do you disconnect? What is the emotional experience of being a practice owner versus a solo nurse? */}
      <p>
        The end of the day as a practice owner involves reviewing how the day went across your team, addressing any issues that came up, and planning for tomorrow. But beyond the tactical, this is also when strategic thinking happens — where is the business headed? What is working? What needs to change?
      </p>
      {/* TRACY TO FILL: Share your honest reflection on the practice owner journey. What surprised you? What would you tell a solo nurse thinking about scaling? What is the most rewarding part? The hardest part? */}
      <p>
        The identity shift from nurse to business owner is real and ongoing. Some days you miss the simplicity of one-on-one client care. Other days you feel the deep satisfaction of having built something bigger than yourself — a practice that serves more clients than you ever could alone and provides meaningful employment to other nurses.
      </p>
      <p>
        If you are a solo nurse thinking about scaling, start with our guide on <Link to="/resources/scaling/solo-nurse-to-nursing-agency" className="text-gold hover:text-gold/80 underline">going from solo nurse to agency</Link>. When you are ready to bring on your first team member, our <Link to="/resources/scaling/hire-first-subcontractor-nursing" className="text-gold hover:text-gold/80 underline">subcontractor hiring guide</Link> walks you through the process. And the <Link to="/strategy" className="text-gold hover:text-gold/80 underline">Strategy Session</Link> is designed for practice owners who want personalized guidance on their next phase of growth.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What does a multi-nurse concierge practice owner do all day?</h3>
            <p>A practice owner splits their time between business operations and clinical oversight. Daily tasks include managing team schedules, reviewing client care plans, handling business finances, marketing, nurturing referral relationships, and strategic planning. Some owners also maintain a personal caseload.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many nurses does a typical multi-nurse concierge practice have?</h3>
            <p>Multi-nurse practices range from two nurses to larger teams of ten or more. Many practice owners start by hiring one subcontractor or employee and grow gradually based on client demand. There is no single right size — it depends on your market and goals.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do practice owners still see clients?</h3>
            <p>Many do, especially in the early stages of growth. Some owners maintain a small personal caseload of VIP or long-standing clients while their team handles the broader client base. Others eventually step fully into the CEO role and focus entirely on operations.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the hardest part of running a multi-nurse practice?</h3>
            <p>Most practice owners say the hardest part is the identity shift from clinician to business owner. Letting go of hands-on client care, trusting your team, and spending your time on operations instead of nursing requires a real mindset change.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take to go from solo nurse to practice owner?</h3>
            <p>Timelines vary widely. Some nurses bring on their first subcontractor within six months of launching. Others spend two or more years building a solo practice before expanding. The key factor is consistent client demand that exceeds your capacity as a solo practitioner.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

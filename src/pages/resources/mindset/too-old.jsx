import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'short-answer', text: 'The Short Answer' },
  { id: 'experience-advantage', text: 'Your Experience Is Your Greatest Asset' },
  { id: 'what-clients-want', text: 'What Clients Actually Want' },
  { id: 'addressing-concerns', text: 'Addressing Legitimate Concerns' },
  { id: 'getting-started', text: 'How to Get Started at Any Age' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  {
    title: "I Do Not Have Business Experience",
    description: "You can learn business skills alongside your clinical expertise.",
    link: "/resources/mindset/start-nursing-business-no-experience",
    category: "Mindset",
  },
  {
    title: "Is It Selfish to Leave Bedside Nursing?",
    description: "Reframe the guilt of leaving hospital nursing.",
    link: "/resources/mindset/is-it-selfish-to-leave-bedside-nursing",
    category: "Mindset",
  },
  {
    title: "What Is a Concierge Nurse?",
    description: "Understand the full scope of concierge nursing.",
    link: "/resources/what-is-a-concierge-nurse",
    category: "Fundamentals",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there an ideal age to start a concierge nursing business?",
      "acceptedAnswer": { "@type": "Answer", "text": "There is no ideal age. Nurses successfully launch concierge practices in their 30s, 40s, 50s, and 60s. What matters is your clinical competence, willingness to learn business skills, and commitment to providing excellent care." }
    },
    {
      "@type": "Question",
      "name": "Will clients prefer a younger nurse?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most clients prefer an experienced, trustworthy nurse over a younger one with less experience. Maturity and clinical confidence are significant advantages in a private-pay, trust-based service." }
    },
    {
      "@type": "Question",
      "name": "Is concierge nursing less physically demanding than hospital work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Generally yes. You control your schedule, choose your clients, and set your workload. There are no 12-hour shifts, heavy patient lifting, or the physical demands of a hospital floor." }
    },
    {
      "@type": "Question",
      "name": "Do I need to be tech-savvy to run a concierge nursing business?",
      "acceptedAnswer": { "@type": "Answer", "text": "Basic technology skills are sufficient — smartphone use, email, social media, and simple business software. All of these are learnable, and plenty of resources exist to help." }
    },
    {
      "@type": "Question",
      "name": "Can I start part-time while still working at the hospital?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Many nurses launch their concierge practice on the side and transition to full-time as the business grows. This is often the recommended approach." }
    }
  ]
};

export default function TooOld() {
  return (
    <ResourceLayout
      title="Am I Too Old to Start a Concierge Nursing Business?"
      description="Why experienced nurses often have the greatest advantage when starting a concierge nursing business, and how age and experience translate to client trust and clinical confidence."
      canonical="/resources/mindset/too-old-to-start-nursing-business"
      category="Mindset"
      categorySlug="/resources"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >

      <QuickAnswer>
        <p>
          No. You are not too old to start a concierge nursing business. In fact, experienced nurses often have a significant advantage: decades of clinical expertise, the ability to remain calm in emergencies, a mature professional presence that clients trust, and a network of healthcare relationships built over years. Many successful concierge nurses started their businesses in their 40s, 50s, and beyond.
        </p>
      </QuickAnswer>

      <p>
        If you are asking this question, you are likely a nurse with years — maybe decades — of clinical experience who feels drawn to something more autonomous and fulfilling. The fear that you have missed your window is common but unfounded.
      </p>

      <h2 id="short-answer">The Short Answer</h2>
      <p>
        There is no age limit on entrepreneurship or concierge nursing. The qualities that make a concierge nurse successful — clinical judgment, composure under pressure, empathy, professionalism, and communication skills — deepen with experience, not youth.
      </p>

      <h2 id="experience-advantage">Your Experience Is Your Greatest Asset</h2>
      <p>
        Clinical confidence built over thousands of patients, a professional network of physicians and surgeons, refined communication skills, and life experience that clients trust — these are advantages that cannot be fast-tracked. Your years of experience are your competitive edge, not a limitation.
      </p>

      <h2 id="what-clients-want">What Clients Actually Want</h2>
      <p>
        When clients hire a concierge nurse during a vulnerable time, they want trust, competence, and a calm presence. An experienced nurse with visible maturity and confidence delivers exactly what clients are looking for. Youth is not a factor in their decision — quality of care is.
      </p>

      <h2 id="addressing-concerns">Addressing Legitimate Concerns</h2>
      <p>
        Technology skills are learnable. Concierge nursing is generally less physically demanding than hospital work. Startup costs are relatively low, especially when you start while still employed. And business skills like <Link to="/resources/guides/concierge-nursing-brand-logo" className="text-gold hover:text-gold/80">branding</Link> and marketing can be learned at any age.
      </p>

      <h2 id="getting-started">How to Get Started at Any Age</h2>
      <p>
        You already have the clinical foundation. The business fundamentals are learnable. The first step is connecting with a community and a program designed for nurses exactly like you. Our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> is built specifically for experienced nurses ready to take the next step. Visit <Link to="/start-here" className="text-gold hover:text-gold/80">Start Here</Link> or explore our <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.
      </p>


      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is there an ideal age to start a concierge nursing business?</h3>
            <p>There is no ideal age. Nurses successfully launch concierge practices in their 30s, 40s, 50s, and 60s. What matters is your clinical competence, willingness to learn business skills, and commitment to providing excellent care.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Will clients prefer a younger nurse?</h3>
            <p>Most clients prefer an experienced, trustworthy nurse over a younger one with less experience. Maturity and clinical confidence are significant advantages in a private-pay, trust-based service.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Is concierge nursing less physically demanding than hospital work?</h3>
            <p>Generally yes. You control your schedule, choose your clients, and set your workload. There are no 12-hour shifts, heavy patient lifting, or the physical demands of a hospital floor.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need to be tech-savvy to run a concierge nursing business?</h3>
            <p>Basic technology skills are sufficient — smartphone use, email, social media, and simple business software. All of these are learnable, and plenty of resources exist to help.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I start part-time while still working at the hospital?</h3>
            <p>Absolutely. Many nurses launch their concierge practice on the side and transition to full-time as the business grows. This is often the recommended approach.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

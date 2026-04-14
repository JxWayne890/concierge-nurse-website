import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'what-is-elevator-pitch', text: 'What Is an Elevator Pitch?' },
  { id: 'pitch-formula', text: 'The Concierge Nursing Elevator Pitch Formula' },
  { id: 'examples', text: 'Elevator Pitch Examples' },
  { id: 'adapting-your-pitch', text: 'Adapting Your Pitch for Different Audiences' },
  { id: 'practice-tips', text: 'Practice and Delivery Tips' },
  { id: 'common-mistakes', text: 'Common Mistakes to Avoid' },
  { id: 'faq', text: 'Frequently Asked Questions' },
];

const relatedResources = [
  { title: 'How to Create a Brand and Logo for Your Concierge Nursing Business', description: 'Your pitch should align with your overall brand identity.', link: '/resources/guides/concierge-nursing-brand-logo', category: 'Guides' },
  { title: 'How to Get Testimonials from Concierge Nursing Clients', description: 'Client stories make your pitch more compelling and credible.', link: '/resources/guides/concierge-nurse-testimonials', category: 'Guides' },
  { title: 'What Is a Concierge Nurse?', description: 'Understand the full scope of concierge nursing to inform your pitch.', link: '/resources/what-is-a-concierge-nurse', category: 'Fundamentals' },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How long should my elevator pitch be?", "acceptedAnswer": { "@type": "Answer", "text": "Your core elevator pitch should be 30 to 60 seconds, roughly 75 to 150 words. You should also have a shorter 15-second version for casual introductions and a longer 2-minute version for more detailed conversations." } },
    { "@type": "Question", "name": "Should my pitch be different when talking to doctors versus potential clients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. When speaking to physicians and surgeons, emphasize clinical outcomes, patient compliance, and how you reduce their follow-up burden. When speaking to potential clients, focus on comfort, convenience, and personalized attention." } },
    { "@type": "Question", "name": "How do I explain concierge nursing to people who have never heard of it?", "acceptedAnswer": { "@type": "Answer", "text": "Use a relatable comparison: 'You know how some people have a personal trainer instead of going to the gym? I provide that same personalized, one-on-one approach with nursing care. I come to your home and provide medical-grade care — like helping you recover after surgery — in the comfort of your own space.'" } },
    { "@type": "Question", "name": "Should I include my pricing in my elevator pitch?", "acceptedAnswer": { "@type": "Answer", "text": "Generally no. Your elevator pitch should focus on the value you provide, not the cost. Price discussions are better suited for follow-up conversations when someone has already expressed interest. However, you can mention that you offer 'private-pay nursing services' to set expectations." } },
    { "@type": "Question", "name": "What if someone asks a question I cannot answer during my pitch?", "acceptedAnswer": { "@type": "Answer", "text": "It is perfectly acceptable to say 'That is a great question — I would love to give you a thorough answer. Can I get your card and follow up with you?' This turns the conversation into a future connection rather than an awkward moment." } }
  ]
};

export default function ElevatorPitch() {
  return (
    <ResourceLayout title="How to Write a Concierge Nursing Elevator Pitch" description="Learn how to craft a compelling 30-60 second elevator pitch for your concierge nursing business, with a proven formula, examples for different audiences, and delivery tips." canonical="/resources/guides/concierge-nursing-elevator-pitch" category="Guides" categorySlug="/resources" headings={headings} relatedResources={relatedResources} faqSchema={faqSchema}>
      <QuickAnswer>
        <p>A strong elevator pitch identifies who you help, names the problem you solve, describes your solution, and states the outcome — all in 30 to 60 seconds. It is the single most important marketing tool you own as a concierge nurse.</p>
      </QuickAnswer>

      <p>Whether networking at a medical conference, introducing yourself to a surgeon's office, or answering "So what do you do?" at a social event, your elevator pitch opens or closes doors to referrals and clients. A clear, compelling pitch is essential.</p>

      <h2 id="what-is-elevator-pitch">What Is an Elevator Pitch?</h2>
      <p>An elevator pitch is a brief, persuasive summary of what you do and why it matters — roughly 30 to 60 seconds. For concierge nurses, the challenge is explaining a service many people have never heard of in a way that immediately resonates.</p>

      <h2 id="pitch-formula">The Concierge Nursing Elevator Pitch Formula</h2>
      <p>Effective pitches follow a four-part framework: who you help, the problem they face, your solution, and the outcome they experience. This structure ensures clarity and impact regardless of your audience. Our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> includes pitch development workshops where you craft and refine your unique pitch with expert feedback.</p>

      <h2 id="examples">Elevator Pitch Examples</h2>
      <p>Your pitch will differ based on your niche — post-surgical recovery, wellness nursing, or a specific procedure focus. It also changes based on who you are speaking to. The key is having a core message you can adapt quickly. Accelerator members receive customized pitch templates for their specific niche and market.</p>

      <h2 id="adapting-your-pitch">Adapting Your Pitch for Different Audiences</h2>
      <p>Potential clients want to hear about comfort and convenience. Surgeons want clinical outcomes and reduced burden. Other nurses want to understand the business model. The general public needs the simplest possible explanation. Each audience requires a different emphasis while keeping your core message intact.</p>

      <h2 id="practice-tips">Practice and Delivery Tips</h2>
      <p>Practice until it feels natural, not scripted. Make eye contact. End with a question or invitation that opens the door to further conversation. Always be ready with a business card when interest is shown.</p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>Being too vague, using excessive medical jargon, talking too long, and sounding apologetic are the most common pitfalls. Your pitch should be specific, accessible, concise, and confident.</p>

      <p>Your elevator pitch is the foundation of all your marketing. For personalized help crafting yours, explore our <Link to="/accelerator" className="text-gold hover:text-gold/80">Accelerator program</Link> or connect through <Link to="/consulting" className="text-gold hover:text-gold/80">Strategy Consulting</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How long should my elevator pitch be?</h3><p>Core pitch: 30 to 60 seconds. Also have a 15-second and 2-minute version ready.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should my pitch be different for doctors versus potential clients?</h3><p>Yes. Emphasize clinical outcomes for physicians, comfort and convenience for clients.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I explain concierge nursing to people who have never heard of it?</h3><p>Use relatable comparisons like "a personal trainer, but for medical care in your home."</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I include my pricing in my pitch?</h3><p>Generally no. Focus on value. Save pricing for follow-up conversations.</p></div>
          <div><h3 className="font-heading text-lg font-semibold text-navy mb-2">What if someone asks a question I cannot answer?</h3><p>Ask for their contact information and follow up. It turns the moment into a future connection.</p></div>
        </div>
      </section>
    </ResourceLayout>
  );
}

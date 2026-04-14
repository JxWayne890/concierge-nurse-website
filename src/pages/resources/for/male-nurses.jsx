import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'male-nurses-welcome', text: "Male Nurses in Concierge Nursing" },
  { id: 'niche-fit', text: "Niches Where Male Nurses Excel" },
  { id: 'stereotypes', text: "Addressing Stereotypes and Bias" },
  { id: 'marketing', text: "Marketing Yourself Authentically" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "What Is a Concierge Nurse?",
    description: "The concierge model works for all nurses.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
  {
    title: "A Day in the Life of a Post-Op Recovery Concierge Nurse",
    description: "Post-op recovery is an active niche for male nurses.",
    link: '/resources/day-in-the-life/post-op-recovery-concierge-nurse',
    category: 'Day in the Life',
  },
  {
    title: "Best Facebook Groups for Nurse Entrepreneurs",
    description: "Connect with other nurse entrepreneurs.",
    link: '/resources/best/facebook-groups-nurse-entrepreneurs',
    category: 'Best Of',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can male nurses succeed in concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Concierge nursing is about clinical skill, business acumen, and interpersonal ability — none of which are gender-specific. Male concierge nurses thrive across niches from post-surgical recovery to geriatric care to IV therapy."
      }
    },
    {
      "@type": "Question",
      "name": "Do clients prefer female or male concierge nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client preference varies. Some clients specifically request male nurses, particularly male clients who feel more comfortable with same-gender care. Others have no preference. The quality of your care and your professional demeanor matter far more than your gender."
      }
    },
    {
      "@type": "Question",
      "name": "Are there niches that are particularly good for male nurses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Male nurses often do well in orthopedic post-surgical recovery, executive health, IV therapy, and sports medicine-adjacent concierge services. However, male nurses succeed across all niches. Do not limit yourself based on gender assumptions."
      }
    },
    {
      "@type": "Question",
      "name": "How do I handle gender bias in concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professionalism, clinical competence, and strong referral relationships overcome bias. Let your work speak for itself. Build relationships with referral sources who evaluate you on skill, not gender. And connect with other male nurse entrepreneurs for peer support."
      }
    }
  ]
};

export default function MaleNurses() {
  return (
    <ResourceLayout
      title={"Concierge Nursing for Male Nurses"}
      description={"How male nurses can thrive in concierge nursing — addressing stereotypes, finding the right niches, and leveraging unique advantages in the private-pay market."}
      canonical="/resources/for/concierge-nursing-male-nurses"
      category="For You"
      categorySlug="/resources/for"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Male nurses are well-positioned for concierge nursing success. The concierge model values clinical skill, business ability, and interpersonal competence — qualities that are gender-neutral. While male nurses may encounter occasional bias, the private-pay market evaluates nurses on the quality of their care and professionalism, not their gender. Male nurses bring unique perspectives and strengths that many clients specifically value.
        </p>
      </QuickAnswer>

      <h2 id="male-nurses-welcome">Male Nurses in Concierge Nursing</h2>
      <p>Male nurses represent a growing percentage of the nursing workforce, yet entrepreneurial resources specifically addressing male nurses are rare. Concierge nursing offers male nurses the same opportunities as any nurse — autonomy, income potential, flexible scheduling, and the ability to deliver personalized care. Your clinical skills and business drive determine your success.</p>

      <h2 id="niche-fit">Niches Where Male Nurses Excel</h2>
      <p>Male nurses succeed across all concierge nursing niches, but some niches offer particular alignment: orthopedic post-surgical recovery (male clients often prefer male nurses for intimate care tasks), executive health and wellness (corporate executives frequently prefer same-gender health professionals), IV therapy and wellness services, and geriatric care (many male elderly clients prefer male nurses).</p>

      <h2 id="stereotypes">Addressing Stereotypes and Bias</h2>
      <p>Some clients may have initial hesitation about a male nurse. This is usually overcome by your professionalism, clinical competence, and communication skills. Be aware that some postpartum and certain post-surgical cosmetic niches may present more client preference challenges. Focus on niches where your gender is neutral or advantageous, and let your quality of care build your reputation.</p>

      <h2 id="marketing">Marketing Yourself Authentically</h2>
      <p>Market yourself as a skilled, experienced professional. Your gender is a part of who you are, not the defining feature of your marketing. Highlight your clinical expertise, your niche specialization, and the results you deliver. Build referral relationships with physicians and surgeons who refer based on competence, not demographics.</p>
      <p>Connect with the <Link to="/community" className="text-gold hover:text-gold/80 underline">Concierge Nurse Business Society</Link> community and explore the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> for structured business building guidance.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can male nurses succeed in concierge nursing?</h3>
            <p>Absolutely. Concierge nursing is about clinical skill, business acumen, and interpersonal ability — none of which are gender-specific. Male concierge nurses thrive across niches from post-surgical recovery to geriatric care to IV therapy.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do clients prefer female or male concierge nurses?</h3>
            <p>Client preference varies. Some clients specifically request male nurses, particularly male clients who feel more comfortable with same-gender care. Others have no preference. The quality of your care and your professional demeanor matter far more than your gender.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are there niches that are particularly good for male nurses?</h3>
            <p>Male nurses often do well in orthopedic post-surgical recovery, executive health, IV therapy, and sports medicine-adjacent concierge services. However, male nurses succeed across all niches. Do not limit yourself based on gender assumptions.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I handle gender bias in concierge nursing?</h3>
            <p>Professionalism, clinical competence, and strong referral relationships overcome bias. Let your work speak for itself. Build relationships with referral sources who evaluate you on skill, not gender. And connect with other male nurse entrepreneurs for peer support.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

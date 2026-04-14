import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can a concierge nurse have a Google Business Profile without a physical office?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google Business Profile supports service-area businesses that travel to clients rather than operating from a storefront. Choose the service-area option and define the geographic areas you serve." } },
    { "@type": "Question", "name": "What category should a concierge nurse choose on Google Business Profile?", "acceptedAnswer": { "@type": "Answer", "text": "Select Nurse Practitioner, Nursing Service, or Home Health Care Service as your primary category, depending on which best describes your business." } },
    { "@type": "Question", "name": "How do I get reviews on my Google Business Profile?", "acceptedAnswer": { "@type": "Answer", "text": "Ask satisfied clients directly. After a positive engagement, send a follow-up message with a direct link to your Google review page." } },
    { "@type": "Question", "name": "How long does it take for a Google Business Profile to start generating leads?", "acceptedAnswer": { "@type": "Answer", "text": "Most businesses start seeing their profile in local search results within a few weeks of verification. Generating actual leads typically takes one to three months." } },
    { "@type": "Question", "name": "Should I post on Google Business Profile regularly?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Posts show up in your listing and signal to Google that your business is active. Post weekly and include a photo with every post." } }
  ]
};

export default function GoogleBusiness() {
  return (
    <ResourceLayout
      title="Google Business Profile for Concierge Nurses: Complete Setup Guide"
      description="Step-by-step instructions for setting up, optimizing, and maintaining your Google Business Profile to attract local concierge nursing clients through search."
      canonical="/resources/marketing/concierge-nurse-google-business-profile"
      category="Marketing"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'why-google-business', text: 'Why Google Business Profile Matters' },
        { id: 'setting-up', text: 'Setting Up Your Profile Step by Step' },
        { id: 'optimizing-profile', text: 'Optimizing Your Profile for Maximum Visibility' },
        { id: 'getting-reviews', text: 'Getting and Managing Reviews' },
        { id: 'google-posts', text: 'Using Google Posts Effectively' },
        { id: 'tracking-performance', text: 'Tracking Your Profile Performance' },
        { id: 'common-mistakes', text: 'Common Google Business Profile Mistakes' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        { title: 'How to Build a Website for Your Concierge Nursing Business', description: 'Create a professional website that works alongside your Google Business Profile.', link: '/resources/marketing/concierge-nursing-website', category: 'Marketing' },
        { title: 'How to Market Your Concierge Nursing Business', description: 'Complete marketing framework covering all channels for concierge nurses.', link: '/resources/marketing/concierge-nursing-business-marketing', category: 'Marketing' },
        { title: 'How to Get Featured in Local Media', description: 'Build local visibility through media coverage and community presence.', link: '/resources/marketing/concierge-nurse-local-media', category: 'Marketing' },
      ]}
    >
      <QuickAnswer>
        <p>Your Google Business Profile is one of the most powerful free marketing tools available to concierge nurses. Set it up as a service-area business, choose the most relevant healthcare category, add detailed service descriptions, upload professional photos, and actively collect client reviews.</p>
      </QuickAnswer>

      <h2 id="why-google-business">Why Google Business Profile Matters</h2>
      <p>When someone searches for nursing services in your area, Google displays local business listings before any website results. Your Google Business Profile is what puts you on that map. It is free, it displays your key information directly in search, and for many concierge nurses it generates more inquiries than their website.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="setting-up">Setting Up Your Profile Step by Step</h2>
      <p>Setting up your Google Business Profile involves creating your account, choosing your business type, selecting the right category, defining your service area, and completing verification. Each step requires specific decisions that affect how your listing appears in search results.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="optimizing-profile">Optimizing Your Profile for Maximum Visibility</h2>
      <p>A bare-bones profile will not compete with fully optimized listings. Google rewards completeness, and potential clients are more likely to contact businesses with detailed profiles. Your description, services, photos, hours, website link, and business attributes all contribute to your visibility.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="getting-reviews">Getting and Managing Reviews</h2>
      <p>Reviews are the single most influential factor in both your Google ranking and your conversion rate. Asking satisfied clients for reviews, responding to all reviews promptly, and maintaining authenticity are essential practices for building credibility through your profile.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="google-posts">Using Google Posts Effectively</h2>
      <p>Google Posts are short updates that appear directly on your listing. They function like mini social media posts within Google itself. Posting weekly with photos and calls to action keeps your profile looking active and signals to Google that your business is actively maintained.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="tracking-performance">Tracking Your Profile Performance</h2>
      <p>Google Business Profile provides built-in analytics that show how people find and interact with your listing. Reviewing search queries, views, actions, and photo views monthly helps you understand your performance and refine your approach over time.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="common-mistakes">Common Google Business Profile Mistakes</h2>
      <p>The most common mistakes include keyword-stuffing your business name, inconsistent information across listings, neglecting the profile after setup, not responding to reviews, and ignoring the Q&A section. Each of these undermines your visibility and credibility in local search.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can I have a Google Business Profile without a physical office?</h3>
            <p>Yes. Choose the service-area option to define the geographic areas you serve without displaying a home address.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What category should I choose?</h3>
            <p>Select Nursing Service, Home Health Care Service, or Nurse Practitioner depending on your practice model.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I get reviews?</h3>
            <p>Ask satisfied clients directly and provide a direct link to your Google review page to make it easy.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long until it generates leads?</h3>
            <p>Most businesses see their profile in local results within weeks of verification. Leads typically start within one to three months.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I post regularly?</h3>
            <p>Yes. Weekly posts with photos keep your profile active and improve your visibility in search results.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

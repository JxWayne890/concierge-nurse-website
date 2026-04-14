import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does it cost to build a concierge nursing website?", "acceptedAnswer": { "@type": "Answer", "text": "Most concierge nurses can launch a professional, effective website for between twenty and fifty dollars per month using a website builder with a premium template." } },
    { "@type": "Question", "name": "What pages should a concierge nursing website include?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum, include a homepage, services page, about page, contact page, and a way to book or request a consultation." } },
    { "@type": "Question", "name": "Do I need a blog on my concierge nursing website?", "acceptedAnswer": { "@type": "Answer", "text": "A blog is not required to launch, but it significantly helps with search engine visibility over time." } },
    { "@type": "Question", "name": "Should I build my website myself or hire a web designer?", "acceptedAnswer": { "@type": "Answer", "text": "Modern website builders make it possible for anyone to create a professional site without coding knowledge. Start by building it yourself and hire a professional later if needed." } },
    { "@type": "Question", "name": "How do I get my concierge nursing website to show up in Google?", "acceptedAnswer": { "@type": "Answer", "text": "Focus on local SEO: include your city and service area in page titles and content, claim your Google Business Profile, and create educational content targeting phrases potential clients search for." } }
  ]
};

export default function BuildWebsite() {
  return (
    <ResourceLayout
      title="How to Build a Website for Your Concierge Nursing Business"
      description="Step-by-step guide to creating a professional concierge nursing website that attracts clients, builds credibility, and ranks in local search results."
      canonical="/resources/marketing/concierge-nursing-website"
      category="Marketing"
      categorySlug="/resources"
      faqSchema={faqSchema}
      headings={[
        { id: 'why-you-need-a-website', text: 'Why Every Concierge Nurse Needs a Website' },
        { id: 'choosing-a-platform', text: 'Choosing a Website Platform' },
        { id: 'essential-pages', text: 'Essential Pages for Your Website' },
        { id: 'writing-your-content', text: 'Writing Website Content That Converts' },
        { id: 'design-principles', text: 'Design Principles for Healthcare Websites' },
        { id: 'local-seo', text: 'Local SEO for Concierge Nurses' },
        { id: 'launching-and-maintaining', text: 'Launching and Maintaining Your Site' },
        { id: 'faq', text: 'Frequently Asked Questions' },
      ]}
      relatedResources={[
        { title: 'Google Business Profile for Concierge Nurses', description: 'Complete setup guide for your Google Business Profile to dominate local search.', link: '/resources/marketing/concierge-nurse-google-business-profile', category: 'Marketing' },
        { title: 'Social Media Marketing for Concierge Nurses', description: 'Platform-by-platform strategies for building your brand on social media.', link: '/resources/marketing/concierge-nurse-social-media', category: 'Marketing' },
        { title: 'How to Market Your Concierge Nursing Business', description: 'Complete marketing framework covering all channels and strategies.', link: '/resources/marketing/concierge-nursing-business-marketing', category: 'Marketing' },
      ]}
    >
      <QuickAnswer>
        <p>Build your concierge nursing website using a modern website builder, starting with five essential pages: homepage, services, about, contact, and a consultation booking page. Focus on clear messaging that explains the specific problems you solve and optimize every page for local search.</p>
      </QuickAnswer>

      <h2 id="why-you-need-a-website">Why Every Concierge Nurse Needs a Website</h2>
      <p>Your website is the hub of your entire marketing presence. Every other marketing activity ultimately drives people to your website. A professional website signals legitimacy and works around the clock, answering questions and building confidence even when you are offline.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="choosing-a-platform">Choosing a Website Platform</h2>
      <p>You do not need to hire a web developer or learn to code. Modern website builders allow you to create a professional, mobile-friendly website by choosing a template and customizing it. The right platform depends on your comfort level with technology, your budget, and your long-term plans.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="essential-pages">Essential Pages for Your Website</h2>
      <p>At minimum, you need a homepage, services page, about page, contact page, and testimonials page. Each page serves a specific purpose in moving visitors from curiosity to confidence to contacting you. How these pages are structured and what they communicate matters significantly.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="writing-your-content">Writing Website Content That Converts</h2>
      <p>The best concierge nursing websites speak directly to the client's concerns and aspirations. Writing in the second person, focusing on outcomes, addressing objections, and including clear calls to action are all essential principles that separate effective websites from forgettable ones.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="design-principles">Design Principles for Healthcare Websites</h2>
      <p>Healthcare websites need to convey trust, professionalism, and warmth. Clean layouts, professional photography, mobile-first design, fast loading speed, and accessible color contrast all affect how visitors perceive your business and whether they take action.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="local-seo">Local SEO for Concierge Nurses</h2>
      <p>Search engine optimization is how you get found by people who do not already know your name. For concierge nurses, local SEO is the priority. Including your location in content, optimizing your <Link to="/resources/marketing/concierge-nurse-google-business-profile" className="text-gold hover:text-gold/80 underline">Google Business Profile</Link>, and getting listed in directories all help you rank higher in local search.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <h2 id="launching-and-maintaining">Launching and Maintaining Your Site</h2>
      <p>Do not wait for your website to be perfect before launching it. A professional but simple site that is live today is infinitely more valuable than a dream website still in progress. Launch with your essential pages and improve over time based on real visitor data.</p>
      <p className="text-navy font-medium mt-4">Tracy covers this inside the <Link to="/accelerator" className="text-gold hover:underline">Accelerator</Link>.</p>

      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How much does it cost to build a concierge nursing website?</h3>
            <p>Most concierge nurses can launch a professional website for between twenty and fifty dollars per month using a website builder.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What pages should a concierge nursing website include?</h3>
            <p>At minimum: homepage, services page, about page, contact page, and a way to book a consultation.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Do I need a blog?</h3>
            <p>Not to launch, but a blog significantly helps with search engine visibility over time.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I build it myself or hire a designer?</h3>
            <p>Start by building it yourself with a modern website builder. Hire a professional later if needed.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How do I get my website to show up in Google?</h3>
            <p>Focus on local SEO: include your city in content, claim your Google Business Profile, and create educational content.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'reality-check', text: "The Reality of Passive Income" },
  { id: 'digital-products', text: "Digital Products and Templates" },
  { id: 'education', text: "Educational Content and Courses" },
  { id: 'scalable-services', text: "Scalable Service Models" },
  { id: 'choosing', text: "Choosing the Right Strategy" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "How to Add Virtual Services",
    description: "Virtual services can become scalable income streams.",
    link: '/resources/scaling/add-virtual-services-concierge-nursing',
    category: 'Scaling',
  },
  {
    title: "How to Go from Solo Nurse to Agency",
    description: "Agency income is semi-passive when your team works independently.",
    link: '/resources/scaling/solo-nurse-to-nursing-agency',
    category: 'Scaling',
  },
  {
    title: "Best Books for Nurse Entrepreneurs",
    description: "Books on building multiple income streams.",
    link: '/resources/best/books-for-nurse-entrepreneurs',
    category: 'Best Of',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can concierge nurses really earn passive income?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "True passive income is rare — most \"passive\" income streams require upfront work and ongoing maintenance. However, concierge nurses can build semi-passive revenue through digital products, educational content, agency models, and scalable service packages that generate income beyond direct client hours."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best passive income idea for a concierge nurse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best strategy depends on your skills and interests. Nurses with teaching ability may do well with educational content. Those with strong systems can build agency income. Those with specialized knowledge can create digital products. Start with one strategy and execute it well before adding others."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build passive income?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most passive income streams take months to build and additional months to generate meaningful revenue. Do not expect immediate returns. Build passive income alongside your active practice, not as a replacement for it."
      }
    },
    {
      "@type": "Question",
      "name": "Should I focus on passive income or growing my client base?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Grow your client base first. A strong active practice provides the income, expertise, and credibility you need to build passive income streams effectively. Trying to create passive income before you have a profitable practice puts the cart before the horse."
      }
    }
  ]
};

export default function PassiveIncome() {
  return (
    <ResourceLayout
      title={"How to Create Passive Income as a Concierge Nurse"}
      description={"Explore passive and semi-passive income strategies for concierge nurses — digital products, courses, affiliate income, and scalable service models."}
      canonical="/resources/scaling/passive-income-concierge-nurse"
      category="Scaling"
      categorySlug="/resources/scaling"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          Passive income for concierge nurses is better described as "scalable income" — revenue that is not directly tied to your hourly client work. Options include digital products, educational content, agency models where your team generates revenue, and scalable service packages. The most successful approach is building passive income streams that leverage your existing clinical expertise and practice reputation.
        </p>
      </QuickAnswer>

      <h2 id="reality-check">The Reality of Passive Income</h2>
      <p>Let us be honest: truly passive income — money that flows in with zero ongoing effort — is largely a myth. Every income stream requires creation, marketing, maintenance, and updates. What you are really building is income that scales beyond your direct client hours, letting you earn more without working more.</p>

      <h2 id="digital-products">Digital Products and Templates</h2>
      <p>Your clinical and business expertise can be packaged into digital products: care plan templates, client intake forms, assessment checklists, business startup guides, or pricing calculators. These products can be sold repeatedly after the initial creation effort. The key is creating products that solve a specific problem for a specific audience.</p>

      <h2 id="education">Educational Content and Courses</h2>
      <p>If you enjoy teaching, online courses, workshops, or webinars on concierge nursing topics can generate ongoing revenue. Topics might include starting a concierge nursing business, clinical skills for specific niches, or business management for nurse entrepreneurs. Courses require significant upfront creation but can sell indefinitely.</p>

      <h2 id="scalable-services">Scalable Service Models</h2>
      <p>Building a <Link to="/resources/scaling/solo-nurse-to-nursing-agency" className="text-gold hover:text-gold/80 underline">multi-nurse agency</Link> creates income from your team's work rather than your own. Adding <Link to="/resources/scaling/add-virtual-services-concierge-nursing" className="text-gold hover:text-gold/80 underline">virtual services</Link> like group wellness programs or remote monitoring can serve more clients without proportional time investment. These models are not passive — they require management — but they scale beyond your individual capacity.</p>

      <h2 id="choosing">Choosing the Right Strategy</h2>
      <p>Start with one strategy that aligns with your skills and interests. Execute it well before adding another. The nurse who creates one excellent digital product earns more than the nurse who starts five projects and finishes none. Build on what you know, leverage your practice reputation, and invest the time needed to create something genuinely valuable.</p>
      <p>The <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator</Link> helps concierge nurses explore diversified income strategies alongside building their core practice.</p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Can concierge nurses really earn passive income?</h3>
            <p>True passive income is rare — most "passive" income streams require upfront work and ongoing maintenance. However, concierge nurses can build semi-passive revenue through digital products, educational content, agency models, and scalable service packages that generate income beyond direct client hours.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the best passive income idea for a concierge nurse?</h3>
            <p>The best strategy depends on your skills and interests. Nurses with teaching ability may do well with educational content. Those with strong systems can build agency income. Those with specialized knowledge can create digital products. Start with one strategy and execute it well before adding others.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How long does it take to build passive income?</h3>
            <p>Most passive income streams take months to build and additional months to generate meaningful revenue. Do not expect immediate returns. Build passive income alongside your active practice, not as a replacement for it.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I focus on passive income or growing my client base?</h3>
            <p>Grow your client base first. A strong active practice provides the income, expertise, and credibility you need to build passive income streams effectively. Trying to create passive income before you have a profitable practice puts the cart before the horse.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

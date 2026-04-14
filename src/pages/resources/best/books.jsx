import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import ResourceLayout from '../../../components/ResourceLayout';
import QuickAnswer from '../../../components/QuickAnswer';

const headings = [
  { id: 'business-foundations', text: "Business Foundations" },
  { id: 'marketing-sales', text: "Marketing and Client Acquisition" },
  { id: 'mindset', text: "Entrepreneurial Mindset" },
  { id: 'finance', text: "Financial Management" },
  { id: 'healthcare-business', text: "Healthcare Business Specifically" },
  { id: 'faq', text: "Frequently Asked Questions" },
];

const relatedResources = [
  {
    title: "Best Podcasts for Nurse Entrepreneurs",
    description: "Learn on the go with podcasts for nurse business owners.",
    link: '/resources/best/podcasts-for-nurse-entrepreneurs',
    category: 'Best Of',
  },
  {
    title: "Best Conferences for Concierge Nurses",
    description: "In-person learning and networking opportunities.",
    link: '/resources/best/conferences-for-concierge-nurses',
    category: 'Best Of',
  },
  {
    title: "What Is a Concierge Nurse?",
    description: "Understand the concierge nursing model before diving into business books.",
    link: '/resources/what-is-a-concierge-nurse',
    category: 'Getting Started',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best first book for a nurse starting a business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with a general small business book that covers fundamentals like business planning, pricing, and marketing. Pair it with something specific to healthcare entrepreneurship. The best first book depends on your biggest knowledge gap — finance, marketing, or mindset."
      }
    },
    {
      "@type": "Question",
      "name": "Are there books specifically about concierge nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Books specifically about concierge nursing are limited. Your best approach is combining general nursing entrepreneurship books with small business and marketing books. The principles of running a service business apply directly to concierge nursing."
      }
    },
    {
      "@type": "Question",
      "name": "How many business books should I read before starting my practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Do not let reading become a substitute for action. Read one or two foundational books to build confidence, then start your business. Continue reading as you grow — the books will be more meaningful once you have real-world experience to apply them to."
      }
    },
    {
      "@type": "Question",
      "name": "Should I read business books or take a course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both have value. Books provide breadth and you can revisit them. Courses and programs like the Accelerator provide structure, accountability, and personalized guidance. Many successful nurse entrepreneurs do both."
      }
    }
  ]
};

export default function Books() {
  return (
    <ResourceLayout
      title={"Best Books for Nurse Entrepreneurs"}
      description={"A curated list of books that help nurse entrepreneurs build business skills, develop an entrepreneurial mindset, and grow their concierge nursing practices."}
      canonical="/resources/best/books-for-nurse-entrepreneurs"
      category="Best Of"
      categorySlug="/resources/best"
      headings={headings}
      relatedResources={relatedResources}
      faqSchema={faqSchema}
    >
      <QuickAnswer>
        <p>
          The best books for nurse entrepreneurs combine business fundamentals with healthcare-specific insight. You do not need to read dozens of books before launching — start with two or three that address your biggest knowledge gaps, whether that is business planning, marketing, financial management, or entrepreneurial mindset. Then keep reading as your practice grows.
        </p>
      </QuickAnswer>

      <h2 id="business-foundations">Business Foundations</h2>
      <p>
        Before diving into healthcare-specific resources, build a foundation in general business principles. The best business books for nurse entrepreneurs cover topics like business entity formation, pricing strategy, service delivery, and client relationship management. Look for books that are practical and actionable — you want step-by-step guidance, not academic theory.
      </p>
      <p>
        Focus on books about service-based businesses rather than product-based or tech startups. Your concierge nursing practice is a professional service business, and the strategies for building, pricing, and marketing services are different from selling products.
      </p>
      {/* TRACY TO FILL: What specific business books have you recommended to nurses in your community? Which ones get the best feedback? Are there any you specifically warn against? */}

      <h2 id="marketing-sales">Marketing and Client Acquisition</h2>
      <p>
        Marketing is where many nurse entrepreneurs feel least confident. Books on service business marketing, relationship-based selling, and referral marketing are particularly relevant for concierge nurses. You are not selling widgets — you are building trust-based relationships with clients and referral sources.
      </p>
      <p>
        Look for books that cover referral marketing specifically, as this is the primary client acquisition channel for most concierge nurses. Books on personal branding and professional positioning can also help you differentiate your practice in a growing market.
      </p>
      {/* TRACY TO FILL: What marketing books have been most helpful for you or nurses in your community? Any specific titles that changed how someone approached their marketing? */}

      <h2 id="mindset">Entrepreneurial Mindset</h2>
      <p>
        The transition from employee nurse to business owner requires a significant mindset shift. Books on entrepreneurial thinking, self-discipline, fear management, and leadership help you develop the mental framework for running a business. Nurses are trained to follow protocols and work within systems — entrepreneurship requires you to create your own protocols and systems.
      </p>
      <p>
        Mindset books are especially valuable when you are in the early stages and dealing with imposter syndrome, fear of failure, or uncertainty about leaving traditional employment. They remind you that every successful business owner started exactly where you are.
      </p>

      <h2 id="finance">Financial Management</h2>
      <p>
        Financial literacy is non-negotiable for business owners. Books on small business finance, tax strategy for self-employed professionals, and pricing help you make informed financial decisions. You do not need an accounting degree, but you need to understand cash flow, profit margins, tax obligations, and pricing strategy.
      </p>
      <p>
        Pair your reading with practical tools — use <Link to="/resources/best/accounting-software-nursing-business" className="text-gold hover:text-gold/80 underline">accounting software</Link> to apply what you learn in real time.
      </p>

      <h2 id="healthcare-business">Healthcare Business Specifically</h2>
      <p>
        While general business books provide the foundation, healthcare-specific resources address the unique challenges of running a clinical practice: regulatory compliance, scope of practice, liability, HIPAA, clinical documentation, and building relationships with physicians and surgeons.
      </p>
      <p>
        Books written by nurse entrepreneurs are particularly valuable because they understand the specific challenges of transitioning from clinical employee to business owner. They speak your language and address the fears and questions that are unique to nurses.
      </p>
      {/* TRACY TO FILL: Are there specific nurse entrepreneur books you recommend? Any books that specifically address the transition from bedside nursing to business ownership? */}
      <p>
        For structured learning beyond books, the <Link to="/accelerator" className="text-gold hover:text-gold/80 underline">Accelerator program</Link> provides hands-on business education designed specifically for concierge nurses. And our <Link to="/resources/best/podcasts-for-nurse-entrepreneurs" className="text-gold hover:text-gold/80 underline">podcast guide</Link> offers additional learning resources you can consume on the go.
      </p>

      {/* FAQ */}
      <section className="bg-cream border border-cream-dark p-8 mt-12">
        <h2 id="faq" className="font-heading text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">What is the best first book for a nurse starting a business?</h3>
            <p>Start with a general small business book that covers fundamentals like business planning, pricing, and marketing. Pair it with something specific to healthcare entrepreneurship. The best first book depends on your biggest knowledge gap — finance, marketing, or mindset.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Are there books specifically about concierge nursing?</h3>
            <p>Books specifically about concierge nursing are limited. Your best approach is combining general nursing entrepreneurship books with small business and marketing books. The principles of running a service business apply directly to concierge nursing.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">How many business books should I read before starting my practice?</h3>
            <p>Do not let reading become a substitute for action. Read one or two foundational books to build confidence, then start your business. Continue reading as you grow — the books will be more meaningful once you have real-world experience to apply them to.</p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-navy mb-2">Should I read business books or take a course?</h3>
            <p>Both have value. Books provide breadth and you can revisit them. Courses and programs like the Accelerator provide structure, accountability, and personalized guidance. Many successful nurse entrepreneurs do both.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
}

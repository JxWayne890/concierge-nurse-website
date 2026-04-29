import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function BlogPost() {
  return (
    <>
      <SEO
        title="Blog Post Under Review - Concierge Nurse Business Society"
        description="This blog post is under review while Tracy updates the approved public editorial library."
        canonical="/blog"
      />

      <section className="bg-cream min-h-[60vh] flex items-center">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Under Review</p>
          <h1 className="font-heading text-3xl font-bold text-navy mb-4">
            This article is being updated
          </h1>
          <p className="text-slate mb-8 leading-relaxed">
            Tracy is restructuring the public blog so only approved category
            authority, founder commentary, and graduate proof content appears
            here.
          </p>
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={14} /> Back to the blog
          </Link>
        </div>
      </section>
    </>
  );
}

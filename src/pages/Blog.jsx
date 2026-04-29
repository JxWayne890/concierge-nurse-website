import SEO from '../components/SEO';

const contentBuckets = [
  {
    title: 'Category Awareness Articles',
    body:
      'What concierge nursing is, who it is for, why it is emerging, and how it differs from home health and traditional nursing roles.',
  },
  {
    title: 'Graduate Case Studies and Success Stories',
    body:
      'Real stories from Cohort Accelerator graduates, shared with permission, showing the outcome of the method without revealing the method itself.',
  },
  {
    title: 'Founder Commentary and Category-Shaping Content',
    body:
      'Short pieces from Tracy on the future of concierge nursing, market trends, and the broader opportunity for experienced nurses.',
  },
];

export default function Blog() {
  return (
    <>
      <SEO
        title="The Concierge Nurse Business Blog"
        description="Frameworks, strategy, and real-world thinking on the emerging concierge nurse business category. Written by Tracy Pekurny, RN."
        canonical="/blog"
        type="website"
      />

      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-4">Insights for Concierge Nurse Business Owners</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
            The Concierge Nurse <span className="text-gold-gradient">Business Blog</span>
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Frameworks, strategy, and real-world thinking on the emerging
            concierge nurse business category. Written by Tracy Pekurny, RN,
            founder of the Concierge Nurse Business Society.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {contentBuckets.map((bucket) => (
              <div key={bucket.title} className="bg-white border border-cream-dark p-8">
                <h2 className="font-heading text-xl font-bold text-navy mb-4">
                  {bucket.title}
                </h2>
                <p className="text-slate text-sm leading-relaxed">{bucket.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-cream-dark p-8 text-center mt-10 max-w-3xl mx-auto">
            <p className="text-navy font-semibold mb-2">New articles are being prepared by Tracy.</p>
            <p className="text-slate text-sm leading-relaxed">
              Public blog posts will publish here after review and approval.
              Strategy, pricing, marketing playbooks, business structure, legal
              setup, financial planning, and six-step method content stay inside
              the paid programs and member experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

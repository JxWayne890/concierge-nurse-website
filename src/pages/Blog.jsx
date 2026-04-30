import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [{ data: postData }, { data: categoryData }] = await Promise.all([
        supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .order('published_at', { ascending: false }),
        supabase
          .from('blog_categories')
          .select('*')
          .order('name', { ascending: true }),
      ]);

      setPosts(postData || []);
      setCategories(categoryData || []);
      setLoading(false);
    }

    load();
  }, []);

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
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/blog/category/${category.slug}`}
                  className="px-4 py-2 bg-white border border-cream-dark text-navy text-[0.65rem] font-semibold tracking-[0.15em] uppercase no-underline hover:border-gold transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          {loading ? (
            <div className="min-h-[30vh] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            </div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white border border-cream-dark no-underline group flex flex-col"
                >
                  <div className="aspect-[16/10] bg-navy/5 overflow-hidden">
                    {post.cover_image_url ? (
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-navy flex items-center justify-center">
                        <p className="text-gold text-[0.65rem] font-semibold tracking-[0.25em] uppercase">
                          CNBS
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="font-heading text-xl font-bold text-navy mb-3 leading-tight group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-5 flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between gap-3 text-[0.65rem] text-charcoal/50 mt-auto">
                      <span>{formatDate(post.published_at)}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} /> {post.reading_time_minutes || 1} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-cream-dark p-8 text-center max-w-3xl mx-auto">
              <p className="text-navy font-semibold mb-2">New articles are being prepared by Tracy.</p>
              <p className="text-slate text-sm leading-relaxed mb-6">
                Public blog posts will publish here after review and approval.
                Strategy, pricing, marketing playbooks, business structure, legal
                setup, financial planning, and six-step method content stay inside
                the paid programs and member experience.
              </p>
              <Link to="/resources" className="btn-primary inline-flex items-center gap-2">
                Browse Approved Resources <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

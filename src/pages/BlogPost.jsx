import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import BlogShareButtons from '../components/BlogShareButtons';
import BlogSignoff from '../components/BlogSignoff';
import { getResourceForTag, resolveSignoff } from '../lib/blogUtils';
import { supabase } from '../lib/supabase';

function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [{ data: postData }, { data: settingsData }] = await Promise.all([
        supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('status', 'published')
          .maybeSingle(),
        supabase
          .from('blog_settings')
          .select('*')
          .eq('id', 1)
          .maybeSingle(),
      ]);

      setPost(postData || null);
      setSettings(settingsData || null);
      setLoading(false);
    }

    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
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

  const resourceLinks = (post.tags || [])
    .map((tag) => getResourceForTag(tag))
    .filter(Boolean);
  const signoff = resolveSignoff(post, settings);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://www.conciergenursesociety.com/blog/${post.slug}`;

  return (
    <>
      <SEO
        title={post.seo_title || post.title}
        description={post.seo_description || post.excerpt || `Read ${post.title} on the Concierge Nurse Business Society blog.`}
        canonical={`/blog/${post.slug}`}
        type="article"
      />

      <article>
        <section className="bg-navy pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-gold no-underline mb-8">
              <ArrowLeft size={14} /> All posts
            </Link>
            <p className="section-label mb-4">Concierge Nurse Business Blog</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-white/65 text-lg leading-relaxed max-w-3xl mb-6">
                {post.subtitle}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 text-white/45 text-xs uppercase tracking-[0.14em]">
              {post.published_at && <span>{formatDate(post.published_at)}</span>}
              <span className="flex items-center gap-1">
                <Clock size={12} /> {post.reading_time_minutes || 1} min read
              </span>
            </div>
          </div>
        </section>

        {post.cover_image_url && (
          <div className="bg-cream">
            <div className="max-w-5xl mx-auto px-6 lg:px-10 -mt-8 relative z-10">
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover border border-cream-dark"
              />
            </div>
          </div>
        )}

        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-p:text-charcoal/80 prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-navy"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />

            {resourceLinks.length > 0 && (
              <div className="mt-12 bg-white border border-cream-dark p-6">
                <p className="text-gold text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-4">
                  Related Resources
                </p>
                <div className="space-y-3">
                  {resourceLinks.map((resource) => (
                    <Link
                      key={resource.path}
                      to={resource.path}
                      className="block text-navy font-semibold hover:text-gold transition-colors"
                    >
                      {resource.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {signoff && <BlogSignoff signoff={signoff} />}
            <BlogShareButtons title={post.title} url={shareUrl} />
          </div>
        </section>
      </article>
    </>
  );
}

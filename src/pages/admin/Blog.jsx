import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, FolderOpen, MessageSquare, ExternalLink } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const STATUS_META = {
  draft:      { label: 'Draft',      chipClass: 'bg-cream text-charcoal/60 border border-cream-dark' },
  published:  { label: 'Published',  chipClass: 'bg-green-50 text-green-700 border border-green-200' },
  scheduled:  { label: 'Scheduled',  chipClass: 'bg-blue-50 text-blue-700 border border-blue-200' },
  archived:   { label: 'Archived',   chipClass: 'bg-slate-100 text-slate-600 border border-slate-200' },
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [pendingComments, setPendingComments] = useState(0);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const load = useCallback(async () => {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .order('updated_at', { ascending: false });

    if (statusFilter !== 'all') query = query.eq('status', statusFilter);
    if (search) query = query.ilike('title', `%${search}%`);

    const { data } = await query;
    setPosts(data || []);

    const { count } = await supabase
      .from('blog_comments')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'pending');
    setPendingComments(count || 0);

    setLoading(false);
  }, [statusFilter, search]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleDelete(id) {
    await supabase.from('blog_post_categories').delete().eq('post_id', id);
    await supabase.from('blog_comments').delete().eq('post_id', id);
    await supabase.from('blog_posts').delete().eq('id', id);
    setDeletingId(null);
    load();
  }

  const countsByStatus = posts.reduce((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="pb-20">
      <div className="flex items-end justify-between mb-12">
        <h1 className="avery-title text-5xl text-navy italic tracking-tight font-light">Journal</h1>
        <div className="flex items-center gap-6">
          <Link to="/admin/blog/comments" className="text-[0.65rem] uppercase tracking-widest font-light text-navy/40 hover:text-navy transition-colors flex items-center gap-2 no-underline relative">
            <MessageSquare size={14} strokeWidth={1.5} /> Comments
            {pendingComments > 0 && (
              <span className="absolute -top-3 -right-3 bg-gold/10 text-gold text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full">
                {pendingComments}
              </span>
            )}
          </Link>
          <Link to="/admin/blog/categories" className="text-[0.65rem] uppercase tracking-widest font-light text-navy/40 hover:text-navy transition-colors flex items-center gap-2 no-underline">
            <FolderOpen size={14} strokeWidth={1.5} /> Categories
          </Link>
          <Link to="/admin/blog/new" className="px-6 py-3 bg-navy text-white text-[0.65rem] uppercase tracking-widest font-light hover:bg-navy/90 transition-all duration-300 rounded-sm flex items-center gap-2 no-underline">
            <Plus size={14} strokeWidth={1.5} /> New Entry
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
        <div className="w-full sm:w-1/2 relative">
          <Search size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" />
          <input
            type="text"
            placeholder="Search entries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5 rounded-full text-sm font-light focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all duration-300"
          />
        </div>

        <div className="flex bg-white rounded-full p-1 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-5 py-2 text-[0.65rem] font-light uppercase tracking-widest bg-transparent text-navy focus:outline-none cursor-pointer"
          >
            <option value="all">All Entries</option>
            <option value="draft">Drafts</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Status counts */}
      {statusFilter === 'all' && posts.length > 0 && (
        <div className="flex gap-6 mb-10 text-[0.6rem] tracking-widest uppercase font-light text-navy/40">
          {Object.entries(STATUS_META).map(([key, meta]) => (
            <span key={key} className="flex items-center gap-2">
              {meta.label} <span className="font-medium text-navy/60">{countsByStatus[key] || 0}</span>
            </span>
          ))}
        </div>
      )}

      {/* Posts list */}
      <div>
        {loading ? (
          <div className="p-20 text-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-navy/30 text-sm font-light italic">Loading entries...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <p className="text-navy/30 text-sm mb-6 font-light italic">No entries yet. Begin your journal.</p>
            <Link to="/admin/blog/new" className="px-8 py-3 bg-navy text-white text-[0.65rem] uppercase tracking-widest font-light hover:bg-navy/90 transition-all duration-300 rounded-sm inline-flex items-center gap-2 no-underline">
              <Plus size={14} strokeWidth={1.5} /> Write your first entry
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => {
              const meta = STATUS_META[post.status] || STATUS_META.draft;
              return (
                <div key={post.id} className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] border border-navy/5 transition-all duration-500 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`inline-block px-3 py-1 text-[0.55rem] font-medium tracking-[0.2em] uppercase rounded-sm ${post.status === 'published' ? 'bg-navy/5 text-navy/70' : 'bg-transparent border border-navy/10 text-navy/40'}`}>
                          {meta.label}
                        </span>
                        {post.status === 'scheduled' && post.scheduled_for && (
                          <span className="text-[0.6rem] font-light tracking-wide text-navy/40">
                            &mdash; {new Date(post.scheduled_for).toLocaleString()}
                          </span>
                        )}
                        {post.published_at && post.status === 'published' && (
                          <span className="text-[0.6rem] font-light tracking-wide text-navy/40">
                            {new Date(post.published_at).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/admin/blog/${post.id}/edit`}
                        className="block no-underline mb-3"
                      >
                        <h2 className="font-heading text-2xl text-navy tracking-tight group-hover:text-gold transition-colors duration-500">
                          {post.title || <span className="italic text-navy/30 font-light">Untitled</span>}
                        </h2>
                      </Link>
                      {post.excerpt && (
                        <p className="text-navy/50 text-sm font-light leading-relaxed mb-6 line-clamp-2 max-w-3xl">{post.excerpt}</p>
                      )}
                      <p className="text-navy/30 text-[0.65rem] font-light tracking-widest uppercase">
                        /blog/{post.slug} <span className="mx-2">&mdash;</span> updated {new Date(post.updated_at).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-8 right-8 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-navy/5">
                      {post.status === 'published' && (
                        <a
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-navy/40 hover:text-gold transition-colors"
                          title="View live"
                        >
                          <ExternalLink size={16} strokeWidth={1.5} />
                        </a>
                      )}
                      <Link
                        to={`/admin/blog/${post.id}/edit`}
                        className="p-2 text-navy/40 hover:text-gold transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={16} strokeWidth={1.5} />
                      </Link>
                      {deletingId === post.id ? (
                        <div className="flex items-center gap-2 pl-2 border-l border-navy/10">
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="px-3 py-1.5 bg-red-600/90 text-white text-[0.65rem] font-medium tracking-wide rounded-sm hover:bg-red-600 transition-colors"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeletingId(null)}
                            className="px-3 py-1.5 text-navy/40 text-[0.65rem] font-light tracking-wide hover:text-navy transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeletingId(post.id)}
                          className="p-2 text-navy/40 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

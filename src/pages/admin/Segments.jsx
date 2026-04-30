import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, X, Check, Users, ChevronRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function Segments() {
  const [tags, setTags] = useState([]);
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: '', description: '' });
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const load = useCallback(async (isInitial = false) => {
    if (isInitial) setLoading(true);

    const { data: tagData } = await supabase
      .from('tags')
      .select('*')
      .order('created_at', { ascending: false });

    const { data: countData } = await supabase
      .from('contact_tags')
      .select('tag_id');

    const countMap = {};
    (countData || []).forEach((row) => {
      countMap[row.tag_id] = (countMap[row.tag_id] || 0) + 1;
    });

    setTags(tagData || []);
    setCounts(countMap);
    setLoading(false);
  }, []);

  useEffect(() => { load(true); }, [load]);

  async function handleCreate(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSaving(true);
    await supabase.from('tags').insert({ name: form.name.trim(), description: form.description.trim() || null });
    setForm({ name: '', description: '' });
    setShowCreate(false);
    setSaving(false);
    load();
  }

  async function handleUpdate(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSaving(true);
    await supabase.from('tags').update({ name: form.name.trim(), description: form.description.trim() || null }).eq('id', editingId);
    setEditingId(null);
    setForm({ name: '', description: '' });
    setSaving(false);
    load();
  }

  async function handleDelete(id) {
    await supabase.from('contact_tags').delete().eq('tag_id', id);
    await supabase.from('tags').delete().eq('id', id);
    setDeleteConfirm(null);
    load();
  }

  function startEdit(e, tag) {
    e.preventDefault();
    e.stopPropagation();
    setEditingId(tag.id);
    setForm({ name: tag.name, description: tag.description || '' });
    setShowCreate(false);
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ name: '', description: '' });
  }

  const totalContacts = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <h1 className="avery-title text-5xl text-navy italic tracking-tight font-light mb-2">Segments</h1>
          <p className="text-navy/60 font-light text-base">
            {tags.length} segments &nbsp;·&nbsp; {totalContacts} total contacts
          </p>
        </div>
        <button
          onClick={() => { setShowCreate(true); setEditingId(null); setForm({ name: '', description: '' }); }}
          className="px-6 py-3 bg-navy text-white text-xs uppercase tracking-widest font-medium hover:bg-navy/90 transition-all duration-300 rounded-sm flex items-center gap-2"
        >
          <Plus size={14} strokeWidth={2} /> Create Segment
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <form onSubmit={handleCreate} className="bg-white rounded-3xl p-8 mb-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] border border-navy/10">
          <h3 className="font-heading text-xl text-navy mb-6">New Segment</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-navy/60 block mb-2">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                autoFocus
                className="w-full px-4 py-3 border border-navy/15 bg-white rounded-xl text-sm font-light focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-widest uppercase text-navy/60 block mb-2">Description <span className="font-light normal-case tracking-normal text-navy/40">(optional)</span></label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 border border-navy/15 bg-white rounded-xl text-sm font-light focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all resize-none"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={saving} className="px-6 py-2.5 bg-navy text-white text-xs uppercase tracking-widest font-medium hover:bg-navy/90 transition-all rounded-sm">
                {saving ? 'Saving...' : 'Create Segment'}
              </button>
              <button type="button" onClick={() => setShowCreate(false)} className="px-6 py-2.5 text-navy/60 text-xs uppercase tracking-widest font-medium hover:text-navy transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      ) : tags.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/10">
          <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-5">
            <Users size={28} strokeWidth={1.5} className="text-navy/40" />
          </div>
          <p className="text-navy font-medium text-lg mb-2">No segments yet</p>
          <p className="text-navy/50 font-light text-sm">Create your first segment to start organizing your contacts.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tags.map((tag) => {
            const count = counts[tag.id] || 0;
            return (
              <div key={tag.id} className="relative group">
                {editingId === tag.id ? (
                  /* ── Edit mode ── */
                  <form
                    onSubmit={handleUpdate}
                    className="bg-white rounded-3xl p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] border-2 border-gold/40 space-y-3"
                  >
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      autoFocus
                      className="w-full px-3 py-2 border border-navy/15 bg-white rounded-lg text-sm font-light focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    />
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      rows={2}
                      placeholder="Description (optional)"
                      className="w-full px-3 py-2 border border-navy/15 bg-white rounded-lg text-sm font-light focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
                    />
                    <div className="flex gap-2">
                      <button type="submit" disabled={saving} className="flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-xs uppercase tracking-widest rounded-sm hover:bg-navy/90 transition-colors">
                        <Check size={14} strokeWidth={2} /> {saving ? 'Saving...' : 'Save'}
                      </button>
                      <button type="button" onClick={cancelEdit} className="flex items-center gap-1.5 px-4 py-2 text-navy/50 text-xs uppercase tracking-widest hover:text-navy transition-colors">
                        <X size={14} strokeWidth={2} /> Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  /* ── View mode – clickable card ── */
                  <Link
                    to={`/admin/segments/${tag.id}`}
                    className="block bg-white rounded-3xl p-7 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_-12px_rgba(0,0,0,0.08)] border border-navy/8 hover:border-gold/25 transition-all duration-400 no-underline h-full"
                  >
                    {/* Top row: name + action buttons */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-heading text-lg text-navy group-hover:text-gold transition-colors duration-400 leading-snug pr-2">
                        {tag.name}
                      </h3>
                      <div
                        className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={(e) => e.preventDefault()}
                      >
                        <button
                          onClick={(e) => startEdit(e, tag)}
                          className="p-1.5 rounded-lg hover:bg-navy/8 text-navy/50 hover:text-gold transition-all"
                          title="Rename"
                        >
                          <Pencil size={13} strokeWidth={2} />
                        </button>
                        {deleteConfirm === tag.id ? (
                          <>
                            <button
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleDelete(tag.id); }}
                              className="px-2 py-1 rounded-lg text-red-600 hover:bg-red-50 text-[0.65rem] font-semibold transition-colors"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDeleteConfirm(null); }}
                              className="p-1.5 rounded-lg hover:bg-navy/8 text-navy/40 transition-all"
                            >
                              <X size={13} strokeWidth={2} />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDeleteConfirm(tag.id); }}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-navy/50 hover:text-red-500 transition-all"
                            title="Delete"
                          >
                            <Trash2 size={13} strokeWidth={2} />
                          </button>
                        )}
                      </div>
                    </div>

                    {tag.description && (
                      <p className="text-sm font-light text-navy/60 mb-5 leading-relaxed line-clamp-2">{tag.description}</p>
                    )}

                    {/* Bottom row: count + date + arrow */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-navy/6">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${count > 0 ? 'bg-gold/10' : 'bg-navy/5'}`}>
                          <Users size={14} strokeWidth={1.5} className={count > 0 ? 'text-gold' : 'text-navy/40'} />
                        </div>
                        <div>
                          <p className={`font-heading text-xl leading-none ${count > 0 ? 'text-navy' : 'text-navy/40'}`}>{count}</p>
                          <p className="text-[0.6rem] uppercase tracking-widest font-medium text-navy/40 mt-0.5">Contacts</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-navy/30 group-hover:text-gold transition-colors duration-400">
                        <span className="text-xs font-light text-navy/40">{new Date(tag.created_at).toLocaleDateString()}</span>
                        <ChevronRight size={16} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

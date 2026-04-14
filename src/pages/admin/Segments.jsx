import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react';
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

  useEffect(() => {
    load(true);
  }, [load]);

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

  function startEdit(tag) {
    setEditingId(tag.id);
    setForm({ name: tag.name, description: tag.description || '' });
    setShowCreate(false);
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ name: '', description: '' });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy">Segments</h1>
        <button
          onClick={() => { setShowCreate(true); setEditingId(null); setForm({ name: '', description: '' }); }}
          className="btn-primary flex items-center gap-2 text-sm"
        >
          <Plus size={16} /> Create Segment
        </button>
      </div>

      {/* Create form */}
      {showCreate && (
        <form onSubmit={handleCreate} className="bg-white border border-cream-dark p-6 mb-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-4">New Segment</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-1">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={saving} className="btn-primary text-sm">
                {saving ? 'Saving...' : 'Create Segment'}
              </button>
              <button type="button" onClick={() => setShowCreate(false)} className="btn-navy text-sm">Cancel</button>
            </div>
          </div>
        </form>
      )}

      {/* Grid */}
      {loading ? (
        <div className="text-center py-10">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate text-sm">Loading...</p>
        </div>
      ) : tags.length === 0 ? (
        <div className="bg-white border border-cream-dark p-10 text-center">
          <p className="text-slate text-sm">No segments yet. Create your first segment to get started.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.map((tag) => (
            <div key={tag.id} className="bg-white border border-cream-dark p-6">
              {editingId === tag.id ? (
                <form onSubmit={handleUpdate} className="space-y-3">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={2}
                    placeholder="Description"
                    className="w-full px-3 py-2 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  <div className="flex gap-2">
                    <button type="submit" disabled={saving} className="p-1.5 hover:bg-cream transition-colors text-gold">
                      <Check size={16} />
                    </button>
                    <button type="button" onClick={cancelEdit} className="p-1.5 hover:bg-cream transition-colors text-charcoal/40">
                      <X size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-base font-bold text-navy">{tag.name}</h3>
                    <div className="flex gap-1">
                      <button onClick={() => startEdit(tag)} className="p-1.5 hover:bg-cream transition-colors text-charcoal/40 hover:text-gold">
                        <Pencil size={14} />
                      </button>
                      {deleteConfirm === tag.id ? (
                        <div className="flex items-center gap-1">
                          <button onClick={() => handleDelete(tag.id)} className="p-1.5 text-red-500 hover:bg-red-50 transition-colors text-xs font-semibold">
                            Confirm
                          </button>
                          <button onClick={() => setDeleteConfirm(null)} className="p-1.5 text-charcoal/40 hover:bg-cream transition-colors">
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => setDeleteConfirm(tag.id)} className="p-1.5 hover:bg-cream transition-colors text-charcoal/40 hover:text-red-500">
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                  {tag.description && <p className="text-slate text-sm mb-3">{tag.description}</p>}
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase bg-cream text-charcoal/60 border border-cream-dark">
                      {counts[tag.id] || 0} contacts
                    </span>
                    <span className="text-slate text-[0.65rem]">
                      {new Date(tag.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

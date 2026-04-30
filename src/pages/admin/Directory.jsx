import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, ExternalLink, Eye, EyeOff, ArrowUp, ArrowDown } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function Directory() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const [specialties, setSpecialties] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  const load = useCallback(async () => {
    let query = supabase
      .from('directory_members')
      .select('*')
      .order('display_order', { ascending: true })
      .order('name', { ascending: true });

    if (statusFilter !== 'all') query = query.eq('status', statusFilter);
    if (specialtyFilter !== 'all') query = query.eq('specialty', specialtyFilter);
    if (search) {
      query = query.or(`name.ilike.%${search}%,business_name.ilike.%${search}%,location.ilike.%${search}%`);
    }

    const { data } = await query;
    setMembers(data || []);

    // Collect distinct specialties for the filter dropdown
    const { data: specialtyData } = await supabase
      .from('directory_members')
      .select('specialty')
      .not('specialty', 'is', null);
    const distinct = [...new Set((specialtyData || []).map((r) => r.specialty).filter(Boolean))].sort();
    setSpecialties(distinct);

    setLoading(false);
  }, [search, statusFilter, specialtyFilter]);

  useEffect(() => {
    load();
  }, [load]);

  async function toggleStatus(id, current) {
    const next = current === 'active' ? 'hidden' : 'active';
    await supabase.from('directory_members').update({ status: next }).eq('id', id);
    load();
  }

  async function moveOrder(id, direction) {
    const idx = members.findIndex((m) => m.id === id);
    if (idx < 0) return;
    const target = direction === 'up' ? idx - 1 : idx + 1;
    if (target < 0 || target >= members.length) return;
    const a = members[idx];
    const b = members[target];
    await supabase.from('directory_members').update({ display_order: b.display_order }).eq('id', a.id);
    await supabase.from('directory_members').update({ display_order: a.display_order }).eq('id', b.id);
    load();
  }

  async function handleDelete(id) {
    await supabase.from('directory_members').delete().eq('id', id);
    setDeletingId(null);
    load();
  }

  return (
    <div className="pb-20">
      <div className="flex items-end justify-between mb-12">
        <h1 className="avery-title text-5xl text-navy italic tracking-tight font-light">Directory</h1>
        <Link to="/admin/directory/new" className="px-6 py-3 bg-navy text-white text-[0.65rem] uppercase tracking-widest font-light hover:bg-navy/90 transition-all duration-300 rounded-sm flex items-center gap-2 no-underline">
          <Plus size={14} strokeWidth={1.5} /> Add Member
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
        <div className="w-full sm:w-1/2 relative">
          <Search size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" />
          <input
            type="text"
            placeholder="Search by name, business, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5 rounded-full text-sm font-light focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all duration-300"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex bg-white rounded-full p-1 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
            <select
              value={specialtyFilter}
              onChange={(e) => setSpecialtyFilter(e.target.value)}
              className="px-5 py-2 text-[0.65rem] font-light uppercase tracking-widest bg-transparent text-navy focus:outline-none cursor-pointer max-w-[200px]"
            >
              <option value="all">All Specialties</option>
              {specialties.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex bg-white rounded-full p-1 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-5 py-2 text-[0.65rem] font-light uppercase tracking-widest bg-transparent text-navy focus:outline-none cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>
        </div>
      </div>

      {/* List */}
      <div>
        {loading ? (
          <div className="p-20 text-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-navy/30 text-sm font-light italic">Loading directory...</p>
          </div>
        ) : members.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <p className="text-navy/30 text-sm mb-6 font-light italic">No directory members yet.</p>
            <Link to="/admin/directory/new" className="px-8 py-3 bg-navy text-white text-[0.65rem] uppercase tracking-widest font-light hover:bg-navy/90 transition-all duration-300 rounded-sm inline-flex items-center gap-2 no-underline">
              <Plus size={14} strokeWidth={1.5} /> Add your first member
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {members.map((m, idx) => (
              <div key={m.id} className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] border border-navy/5 transition-all duration-500 relative overflow-hidden flex items-start gap-8">
                
                {/* Reorder controls */}
                <div className="flex flex-col gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => moveOrder(m.id, 'up')}
                    disabled={idx === 0}
                    className="p-1.5 text-navy/30 hover:text-gold hover:bg-gold/5 rounded-full disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    title="Move up"
                  >
                    <ArrowUp size={14} strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => moveOrder(m.id, 'down')}
                    disabled={idx === members.length - 1}
                    className="p-1.5 text-navy/30 hover:text-gold hover:bg-gold/5 rounded-full disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                    title="Move down"
                  >
                    <ArrowDown size={14} strokeWidth={2} />
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-2">
                    <Link
                      to={`/admin/directory/${m.id}/edit`}
                      className="font-heading text-2xl text-navy tracking-tight hover:text-gold transition-colors duration-500 no-underline"
                    >
                      {m.name}
                    </Link>
                    {m.credentials && (
                      <span className="text-[0.6rem] uppercase tracking-[0.2em] font-light text-gold mt-1">{m.credentials}</span>
                    )}
                    {m.status === 'hidden' && (
                      <span className="inline-block px-3 py-1 text-[0.55rem] font-medium tracking-[0.2em] uppercase rounded-sm bg-navy/5 text-navy/40 mt-1">
                        Hidden
                      </span>
                    )}
                  </div>
                  
                  <p className="text-base text-navy/70 font-light mb-4">{m.business_name || <span className="italic text-navy/30">No business name</span>}</p>
                  
                  <div className="flex flex-col gap-1.5">
                    {m.specialty && (
                      <span className="inline-block text-[0.65rem] uppercase tracking-widest text-gold/80 font-light italic">
                        {m.specialty}
                      </span>
                    )}
                    <p className="text-xs font-light tracking-wide text-navy/40">{m.location || '—'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-8 right-8 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-navy/5">
                  <button
                    onClick={() => toggleStatus(m.id, m.status)}
                    className={`p-2 transition-colors ${m.status === 'active' ? 'text-navy/40 hover:text-gold' : 'text-navy/20 hover:text-navy'}`}
                    title={m.status === 'active' ? 'Hide from public' : 'Show on public directory'}
                  >
                    {m.status === 'active' ? <Eye size={16} strokeWidth={1.5} /> : <EyeOff size={16} strokeWidth={1.5} />}
                  </button>
                  {m.website_url && (
                    <a
                      href={m.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-navy/40 hover:text-gold transition-colors"
                      title="Visit website"
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </a>
                  )}
                  <Link
                    to={`/admin/directory/${m.id}/edit`}
                    className="p-2 text-navy/40 hover:text-gold transition-colors"
                    title="Edit"
                  >
                    <Edit2 size={16} strokeWidth={1.5} />
                  </Link>
                  {deletingId === m.id ? (
                    <div className="flex items-center gap-2 pl-2 border-l border-navy/10">
                      <button
                        onClick={() => handleDelete(m.id)}
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
                      onClick={() => setDeletingId(m.id)}
                      className="p-2 text-navy/40 hover:text-red-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} strokeWidth={1.5} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

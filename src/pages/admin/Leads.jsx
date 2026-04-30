import { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Download, Trash2, Tag, X, ArrowUp, ArrowDown, ArrowUpDown, Upload } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { INTENTS, getIntentMeta, getTemperature } from '../../lib/leadScoring';

const PAGE_SIZE = 25;

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [intentFilter, setIntentFilter] = useState('all');
  const [tempFilter, setTempFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(new Set());
  const [exporting, setExporting] = useState(false);
  const [tags, setTags] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [sortCol, setSortCol] = useState('lead_score');
  const [sortAsc, setSortAsc] = useState(false);

  function handleSort(col) {
    if (sortCol === col) {
      setSortAsc((prev) => !prev);
    } else {
      setSortCol(col);
      setSortAsc(true);
    }
    setPage(0);
  }

  const hasLoaded = useRef(false);

  const load = useCallback(async () => {
    if (!hasLoaded.current) setLoading(true);

    let query = supabase
      .from('contacts')
      .select('*', { count: 'exact' })
      .order(sortCol, { ascending: sortAsc })
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

    // When sorting by lead_score, add created_at as secondary sort so
    // ties fall in a stable, newest-first order.
    if (sortCol === 'lead_score') {
      query = query.order('created_at', { ascending: false });
    }

    if (search) {
      query = query.or(`email.ilike.%${search}%,first_name.ilike.%${search}%,last_name.ilike.%${search}%`);
    }

    if (filter !== 'all') {
      query = query.eq('lifecycle_stage', filter);
    }

    if (intentFilter !== 'all') {
      query = query.eq('intent', intentFilter);
    }

    if (tempFilter === 'hot') {
      query = query.gte('lead_score', 70);
    } else if (tempFilter === 'warm') {
      query = query.gte('lead_score', 40).lt('lead_score', 70);
    } else if (tempFilter === 'cool') {
      query = query.lt('lead_score', 40);
    }

    const { data, count } = await query;

    setLeads(data || []);
    setTotal(count || 0);
    setLoading(false);
    hasLoaded.current = true;
  }, [page, search, filter, intentFilter, tempFilter, sortCol, sortAsc]);

  useEffect(() => {
    load();

    const channel = supabase
      .channel('leads-contacts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contacts' }, () => {
        load();
      })
      .subscribe();

    const interval = setInterval(() => load(), 10000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, [load]);

  useEffect(() => {
    supabase.from('tags').select('*').order('name').then(({ data }) => setTags(data || []));
  }, []);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  function toggleSelect(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === leads.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(leads.map((l) => l.id)));
    }
  }

  function getSelectedLeads() {
    return leads.filter((l) => selected.has(l.id));
  }

  function downloadCSV(contacts, filename) {
    const headers = ['first_name', 'last_name', 'email', 'phone', 'intent', 'lead_score', 'lifecycle_stage', 'status', 'source', 'business_name', 'annual_revenue', 'created_at'];
    const csvRows = [headers.join(',')];
    contacts.forEach((c) => {
      csvRows.push(headers.map((h) => {
        const val = c[h] || '';
        return `"${String(val).replace(/"/g, '""')}"`;
      }).join(','));
    });
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleExportAll() {
    setExporting(true);
    const { data } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    downloadCSV(data || [], `contacts-export-${new Date().toISOString().slice(0, 10)}.csv`);
    setExporting(false);
  }

  function handleExportSelected() {
    downloadCSV(getSelectedLeads(), `contacts-selected-${new Date().toISOString().slice(0, 10)}.csv`);
  }

  async function handleTagSelected(tagId) {
    const ids = [...selected];
    const rows = ids.map((contact_id) => ({ contact_id, tag_id: tagId }));
    await supabase.from('contact_tags').upsert(rows, { onConflict: 'contact_id,tag_id', ignoreDuplicates: true });
    setSelected(new Set());
  }

  async function handleDeleteSelected() {
    const ids = [...selected];
    await supabase.from('activity_log').delete().in('contact_id', ids);
    await supabase.from('notes').delete().in('contact_id', ids);
    await supabase.from('contact_tags').delete().in('contact_id', ids);
    await supabase.from('contacts').delete().in('id', ids);
    setSelected(new Set());
    setDeleteConfirm(false);
    load();
  }

  return (
    <div className="pb-20">
      <h1 className="avery-title text-5xl text-navy italic tracking-tight font-light mb-12">Leads Overview</h1>

      {/* Search and filters */}
      <div className="flex flex-col xl:flex-row items-center justify-between gap-6 mb-12">
        <div className="w-full xl:w-1/3 relative">
          <Search size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            className="w-full pl-12 pr-4 py-3 bg-white shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5 rounded-full text-sm font-light focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all duration-300"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex bg-white rounded-full p-1 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
            <select
              value={intentFilter}
              onChange={(e) => { setIntentFilter(e.target.value); setPage(0); }}
              className="px-5 py-2 text-[0.65rem] font-light uppercase tracking-widest bg-transparent text-navy focus:outline-none cursor-pointer"
            >
              <option value="all">All Intents</option>
              {Object.entries(INTENTS).map(([key, meta]) => (
                <option key={key} value={key}>{meta.emoji} {meta.label}</option>
              ))}
            </select>
          </div>

          <div className="flex bg-white rounded-full p-1 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
            <select
              value={tempFilter}
              onChange={(e) => { setTempFilter(e.target.value); setPage(0); }}
              className="px-5 py-2 text-[0.65rem] font-light uppercase tracking-widest bg-transparent text-navy focus:outline-none cursor-pointer"
            >
              <option value="all">All Temps</option>
              <option value="hot">🔥 Hot (70+)</option>
              <option value="warm">🟠 Warm (40–69)</option>
              <option value="cool">🔵 Cool (&lt;40)</option>
            </select>
          </div>

          <div className="flex bg-white rounded-full p-1 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
            <select
              value={filter}
              onChange={(e) => { setFilter(e.target.value); setPage(0); }}
              className="px-5 py-2 text-[0.65rem] font-light uppercase tracking-widest bg-transparent text-navy focus:outline-none cursor-pointer"
            >
              <option value="all">All Stages</option>
              <option value="Explorer">Explorer</option>
              <option value="DIYer">DIYer</option>
              <option value="Builder">Builder</option>
              <option value="Established Owner">Established Owner</option>
            </select>
          </div>

          <div className="flex items-center gap-3 ml-2">
            <Link
              to="/admin/import"
              className="px-6 py-2.5 bg-navy/5 text-navy hover:bg-navy/10 hover:text-navy text-[0.65rem] uppercase tracking-widest font-light transition-all duration-300 rounded-full flex items-center gap-2 no-underline"
            >
              <Upload size={14} strokeWidth={1.5} /> Import
            </Link>
            <button
              onClick={handleExportAll}
              disabled={exporting}
              className="px-6 py-2.5 bg-white shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5 hover:border-gold/30 text-navy text-[0.65rem] uppercase tracking-widest font-light transition-all duration-300 rounded-full flex items-center gap-2"
            >
              <Download size={14} strokeWidth={1.5} />
              {exporting ? 'Exporting...' : 'Export'}
            </button>
          </div>
        </div>
      </div>

      {/* Bulk action bar */}
      {selected.size > 0 && (
        <div className="flex items-center gap-6 mb-8 px-8 py-5 bg-navy/95 backdrop-blur-md text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] rounded-full transform transition-all sticky top-6 z-50">
          <span className="text-[0.65rem] font-light tracking-[0.3em] uppercase text-gold">{selected.size} SELECTED</span>
          <div className="flex items-center gap-2 ml-auto">
            {/* Tag dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[0.65rem] font-light uppercase tracking-widest rounded-full">
                <Tag size={14} strokeWidth={1.5} /> Tag
              </button>
              <div className="absolute top-full right-0 mt-3 bg-white border border-navy/5 shadow-2xl z-10 min-w-[200px] hidden group-hover:block rounded-2xl overflow-hidden py-2">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => handleTagSelected(tag.id)}
                    className="block w-full text-left px-6 py-3 text-sm font-light text-navy hover:bg-navy/5 hover:text-gold transition-colors"
                  >
                    {tag.name}
                  </button>
                ))}
                {tags.length === 0 && (
                  <p className="px-6 py-3 text-sm font-light text-navy/30 italic">No tags yet</p>
                )}
              </div>
            </div>
            <button onClick={handleExportSelected} className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[0.65rem] font-light uppercase tracking-widest rounded-full">
              <Download size={14} strokeWidth={1.5} /> Export
            </button>
            {deleteConfirm ? (
              <div className="flex items-center gap-2 bg-red-900/50 rounded-full p-1 pl-4">
                <button onClick={handleDeleteSelected} className="text-[0.65rem] font-medium tracking-widest uppercase text-white hover:text-red-200 transition-colors">Confirm</button>
                <button onClick={() => setDeleteConfirm(false)} className="p-2 hover:bg-white/10 transition-colors rounded-full">
                  <X size={14} strokeWidth={1.5} />
                </button>
              </div>
            ) : (
              <button onClick={() => setDeleteConfirm(true)} className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-red-500/20 hover:text-red-400 border border-white/5 transition-colors text-[0.65rem] font-light uppercase tracking-widest rounded-full">
                <Trash2 size={14} strokeWidth={1.5} /> Delete
              </button>
            )}
            <div className="w-[1px] h-6 bg-white/10 mx-2" />
            <button onClick={() => setSelected(new Set())} className="p-2.5 hover:bg-white/10 transition-colors rounded-full text-white/50 hover:text-white">
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}

      {/* Leads List */}
      <div>
        {loading ? (
          <div className="p-20 text-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-navy/30 text-sm font-light italic">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-white rounded-3xl p-20 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/5">
            <p className="text-navy/30 text-sm font-light italic">No leads found.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6 px-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selected.size === leads.length && leads.length > 0}
                  onChange={toggleAll}
                  className="w-4 h-4 rounded border-navy/20 text-gold focus:ring-gold/20 transition-colors cursor-pointer"
                />
                <span className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-navy/40 group-hover:text-navy transition-colors">Select All</span>
              </label>
              
              <div className="flex items-center gap-6">
                {[
                  { key: 'first_name', label: 'Name' },
                  { key: 'lead_score', label: 'Score' },
                  { key: 'created_at', label: 'Date' },
                ].map((col) => (
                  <button
                    key={col.key}
                    onClick={() => handleSort(col.key)}
                    className="flex items-center gap-2 text-[0.6rem] font-light tracking-[0.2em] uppercase text-navy/40 hover:text-navy transition-colors group focus:outline-none"
                  >
                    {col.label}
                    {sortCol === col.key ? (
                      sortAsc ? <ArrowUp size={12} className="text-gold" /> : <ArrowDown size={12} className="text-gold" />
                    ) : (
                      <ArrowUpDown size={12} className="text-navy/20 group-hover:text-navy/40 transition-colors opacity-0 group-hover:opacity-100" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {leads.map((lead) => {
                const intentMeta = getIntentMeta(lead.intent);
                const temp = getTemperature(lead.lead_score || 0);
                const isSelected = selected.has(lead.id);
                const isSelecting = selected.size > 0;

                const cardContent = (
                  <div className="flex-1 min-w-0 grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-12 md:col-span-5">
                      <p className="font-heading text-2xl text-navy tracking-tight group-hover:text-gold transition-colors duration-500 mb-1 truncate">
                        {lead.first_name || ''} {lead.last_name || ''}
                        {!lead.first_name && !lead.last_name && <span className="text-navy/30 italic font-light">No name</span>}
                      </p>
                      <p className="text-navy/50 text-xs font-light tracking-wide truncate">{lead.email}</p>
                    </div>

                    <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{intentMeta.emoji}</span>
                        <span className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-navy/70">{intentMeta.shortLabel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${temp.dotClass}`} />
                        <span className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-navy/70">{temp.label}</span>
                        <span className="font-heading text-lg text-gold ml-1">{lead.lead_score || 0}</span>
                      </div>
                    </div>

                    <div className="col-span-12 md:col-span-4 flex flex-col md:items-end justify-center gap-2">
                      <span className="inline-block px-4 py-1.5 text-[0.6rem] font-medium tracking-[0.2em] uppercase rounded-full bg-navy/5 text-navy/60 text-center">
                        {lead.lifecycle_stage || 'Explorer'}
                      </span>
                      <span className="text-navy/30 text-[0.65rem] font-light tracking-widest uppercase mt-2">
                        {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                );

                return (
                  <div
                    key={lead.id}
                    onClick={() => isSelecting ? toggleSelect(lead.id) : undefined}
                    className={`group bg-white rounded-3xl p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] border transition-all duration-500 relative flex items-center gap-6
                      ${isSelected ? 'border-gold/60 bg-gold/[0.02]' : 'border-navy/5'}
                      ${isSelecting ? 'cursor-pointer select-none' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(lead.id)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 rounded border-navy/20 text-gold focus:ring-gold/20 transition-colors cursor-pointer shrink-0 ml-2"
                    />

                    {isSelecting ? (
                      cardContent
                    ) : (
                      <Link
                        to={`/admin/leads/${lead.id}`}
                        className="flex-1 min-w-0 block no-underline"
                      >
                        {cardContent}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-12 px-6">
                <p className="text-navy/40 text-[0.6rem] font-light tracking-[0.2em] uppercase">{total} TOTAL LEADS</p>
                <div className="flex items-center gap-6 bg-white rounded-full p-2 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.03)] border border-navy/5">
                  <button
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className="p-2 hover:bg-navy/5 transition-colors disabled:opacity-20 rounded-full"
                  >
                    <ChevronLeft size={16} strokeWidth={1.5} className="text-navy" />
                  </button>
                  <span className="text-[0.65rem] font-light tracking-[0.3em] text-navy">
                    {page + 1} / {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                    disabled={page >= totalPages - 1}
                    className="p-2 hover:bg-navy/5 transition-colors disabled:opacity-20 rounded-full"
                  >
                    <ChevronRight size={16} strokeWidth={1.5} className="text-navy" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Users, Search, ExternalLink, Mail, Phone, Calendar, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function SegmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tag, setTag] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(new Set());

  const isSelecting = selected.size > 0;

  const load = useCallback(async () => {
    setLoading(true);
    const { data: tagData } = await supabase.from('tags').select('*').eq('id', id).single();
    setTag(tagData || null);
    const { data: ctData } = await supabase
      .from('contact_tags')
      .select('contact_id, contacts(*)')
      .eq('tag_id', id)
      .order('created_at', { ascending: false });
    const raw = (ctData || []).map((row) => row.contacts).filter(Boolean);
    setContacts(raw);
    setLoading(false);
  }, [id]);

  useEffect(() => { load(); }, [load]);

  function toggleSelect(contactId) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(contactId)) next.delete(contactId);
      else next.add(contactId);
      return next;
    });
  }

  const filtered = contacts.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      (c.first_name || '').toLowerCase().includes(q) ||
      (c.last_name || '').toLowerCase().includes(q) ||
      (c.email || '').toLowerCase().includes(q)
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!tag) {
    return (
      <div className="text-center py-20">
        <p className="text-navy/50 font-light italic text-sm">Segment not found.</p>
        <Link to="/admin/segments" className="mt-4 inline-block text-xs uppercase tracking-widest font-medium text-navy hover:text-gold transition-colors no-underline">
          ← Back to Segments
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="mb-10">
        <Link
          to="/admin/segments"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-navy/60 hover:text-navy transition-colors no-underline mb-8 group"
        >
          <ChevronLeft size={14} strokeWidth={2} className="group-hover:-translate-x-0.5 transition-transform" />
          All Segments
        </Link>

        <div className="flex items-end justify-between">
          <div>
            <h1 className="avery-title text-5xl text-navy italic tracking-tight font-light mb-3">{tag.name}</h1>
            {tag.description && <p className="text-navy/60 font-light text-base max-w-xl">{tag.description}</p>}
          </div>
          <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-navy/10">
            <Users size={20} strokeWidth={1.5} className="text-gold" />
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-navy/60">Total Contacts</p>
              <p className="font-heading text-3xl text-navy leading-none mt-1">{contacts.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selection mode banner */}
      {isSelecting && (
        <div className="flex items-center gap-6 mb-8 px-8 py-5 bg-navy/95 backdrop-blur-md text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] rounded-full sticky top-6 z-50">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold">{selected.size} Selected</span>
          <span className="text-xs font-light text-white/50 tracking-wide">— click any card to toggle</span>
          <button onClick={() => setSelected(new Set())} className="ml-auto p-2.5 hover:bg-white/10 transition-colors rounded-full text-white/50 hover:text-white">
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* Search */}
      <div className="relative mb-8 max-w-md">
        <Search size={16} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" />
        <input
          type="text"
          placeholder="Search contacts in this segment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-white shadow-[0_4px_15px_-4px_rgba(0,0,0,0.05)] border border-navy/10 rounded-full text-sm font-light focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all duration-300"
        />
      </div>

      {/* Contact List */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-navy/10">
          {search ? (
            <p className="text-navy/50 font-light italic text-sm">No contacts match your search.</p>
          ) : (
            <>
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-5">
                <Users size={28} strokeWidth={1.5} className="text-navy/40" />
              </div>
              <p className="text-navy font-medium text-lg mb-2">No contacts yet</p>
              <p className="text-navy/50 font-light text-sm max-w-xs mx-auto">
                Contacts will appear here automatically when someone fills out the matching form on your website.
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((contact) => {
            const isSelected = selected.has(contact.id);
            return (
              <div
                key={contact.id}
                onClick={() => isSelecting ? toggleSelect(contact.id) : navigate(`/admin/leads/${contact.id}`)}
                className={`group bg-white rounded-2xl px-8 py-5 shadow-[0_6px_20px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] border transition-all duration-300 cursor-pointer
                  ${isSelected ? 'border-gold/50 bg-gold/[0.02]' : 'border-navy/8 hover:border-gold/30'}`}
              >
                <div className="flex items-center gap-6">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelect(contact.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 rounded border-navy/20 text-gold focus:ring-gold/20 cursor-pointer shrink-0 transition-colors"
                  />

                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300
                    ${isSelected ? 'bg-gold/15 border-gold/30' : 'bg-navy/5 border-navy/10 group-hover:bg-gold/10 group-hover:border-gold/20'}`}
                  >
                    <span className={`font-heading text-base transition-colors duration-300 ${isSelected ? 'text-gold' : 'text-navy/70 group-hover:text-gold'}`}>
                      {(contact.first_name?.[0] || contact.email?.[0] || '?').toUpperCase()}
                    </span>
                  </div>

                  {/* Name + email */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-heading text-xl truncate transition-colors duration-300 ${isSelected ? 'text-gold' : 'text-navy group-hover:text-gold'}`}>
                      {contact.first_name || ''} {contact.last_name || ''}
                      {!contact.first_name && !contact.last_name && <span className="italic text-navy/30 font-light">No name</span>}
                    </p>
                    <div className="flex items-center gap-4 mt-1 flex-wrap">
                      {contact.email && (
                        <span className="flex items-center gap-1.5 text-xs font-light text-navy/60 tracking-wide">
                          <Mail size={12} strokeWidth={1.5} /> {contact.email}
                        </span>
                      )}
                      {contact.phone && (
                        <span className="flex items-center gap-1.5 text-xs font-light text-navy/50 tracking-wide">
                          <Phone size={12} strokeWidth={1.5} /> {contact.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stage + date */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    {contact.lifecycle_stage && (
                      <span className="px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full bg-navy/5 text-navy/70 border border-navy/10">
                        {contact.lifecycle_stage}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 text-xs font-light text-navy/40 tracking-wide">
                      <Calendar size={11} strokeWidth={1.5} />
                      {new Date(contact.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  {!isSelecting && (
                    <ExternalLink size={16} strokeWidth={1.5} className="text-navy/20 group-hover:text-gold transition-colors duration-400 shrink-0" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {filtered.length > 0 && (
        <p className="text-center text-xs uppercase tracking-widest font-medium text-navy/40 mt-10">
          Showing {filtered.length} of {contacts.length} contacts
          {isSelecting && <span className="text-gold ml-2">· {selected.size} selected</span>}
        </p>
      )}
    </div>
  );
}

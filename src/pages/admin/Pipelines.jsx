import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const STAGE_COLORS = {
  New: 'border-l-blue-400',
  Contacted: 'border-l-amber-400',
  'Consult Booked': 'border-l-purple-400',
  Enrolled: 'border-l-green-400',
  Completed: 'border-l-green-600',
  'Discovery Call': 'border-l-purple-400',
  'Proposal Sent': 'border-l-orange-400',
  'Active Client': 'border-l-green-500',
  Nurturing: 'border-l-cyan-400',
  Converted: 'border-l-green-500',
  Purchased: 'border-l-green-500',
  Closed: 'border-l-charcoal/30',
};

// Hardcoded fallback in case the DB stages column is empty/broken
const DEFAULT_PIPELINES = {
  Accelerator: ['New', 'Contacted', 'Consult Booked', 'Enrolled', 'Completed'],
  Consulting: ['New', 'Contacted', 'Discovery Call', 'Proposal Sent', 'Active Client'],
  Toolkits: ['New', 'Contacted', 'Nurturing', 'Purchased', 'Closed'],
  General: ['New', 'Contacted', 'Nurturing', 'Converted', 'Closed'],
};

function parseStages(raw) {
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'string') {
    try { return JSON.parse(raw); } catch { return []; }
  }
  return [];
}

export default function Pipelines() {
  const [pipelines, setPipelines] = useState([]);
  const [activePipeline, setActivePipeline] = useState(null);
  const [pipelineContacts, setPipelineContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dbError, setDbError] = useState('');
  const dragItem = useRef(null);

  // Load pipelines
  useEffect(() => {
    async function init() {
      setLoading(true);

      const { data, error } = await supabase
        .from('pipelines')
        .select('*')
        .order('created_at');

      if (error) {
        setDbError(error.message);
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        setDbError('No pipelines found. Run the supabase-pipelines-migration.sql in your Supabase SQL Editor.');
        setLoading(false);
        return;
      }

      const list = data.map((p) => {
        const stages = parseStages(p.stages);
        return {
          ...p,
          stages: stages.length > 0 ? stages : (DEFAULT_PIPELINES[p.name] || []),
        };
      });

      setPipelines(list);
      setActivePipeline(list[0].id);
      setLoading(false);
    }
    init();
  }, []);

  // Load contacts when active pipeline changes
  useEffect(() => {
    if (!activePipeline) return;

    async function loadContacts() {
      const { data } = await supabase
        .from('pipeline_contacts')
        .select('*, contacts(id, first_name, last_name, email, interest, lifecycle_stage)')
        .eq('pipeline_id', activePipeline)
        .order('entered_stage_at', { ascending: true });

      setPipelineContacts(data || []);
    }
    loadContacts();
  }, [activePipeline]);

  function getStages() {
    const p = pipelines.find((pl) => pl.id === activePipeline);
    return p?.stages || [];
  }

  function getContactsInStage(stage) {
    return pipelineContacts.filter((pc) => pc.stage === stage);
  }

  function timeInStage(enteredAt) {
    if (!enteredAt) return '—';
    const entered = new Date(enteredAt);
    const diff = Date.now() - entered.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const dateStr = entered.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    if (days === 0) return dateStr;
    if (days === 1) return `${dateStr} · 1d`;
    return `${dateStr} · ${days}d`;
  }

  function handleDragStart(pc) {
    dragItem.current = pc;
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  async function handleDrop(e, targetStage) {
    e.preventDefault();
    const pc = dragItem.current;
    if (!pc || pc.stage === targetStage) {
      dragItem.current = null;
      return;
    }

    // Optimistic update
    setPipelineContacts((prev) =>
      prev.map((item) =>
        item.id === pc.id
          ? { ...item, stage: targetStage, entered_stage_at: new Date().toISOString() }
          : item
      )
    );

    await supabase
      .from('pipeline_contacts')
      .update({ stage: targetStage, entered_stage_at: new Date().toISOString() })
      .eq('id', pc.id);

    await supabase.from('activity_log').insert({
      contact_id: pc.contact_id,
      type: 'status_change',
      description: `Moved to "${targetStage}" in ${pipelines.find((p) => p.id === activePipeline)?.name} pipeline`,
      metadata: { pipeline_id: activePipeline, from_stage: pc.stage, to_stage: targetStage },
    });

    dragItem.current = null;
  }

  function handleDragEnd() {
    dragItem.current = null;
  }

  const stages = getStages();

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate text-sm">Loading pipelines...</p>
      </div>
    );
  }

  if (dbError) {
    return (
      <div>
        <h1 className="font-heading text-2xl font-bold text-navy mb-6">Pipelines</h1>
        <div className="bg-red-50 border border-red-200 p-6">
          <p className="text-red-700 text-sm font-semibold mb-2">Pipeline Setup Required</p>
          <p className="text-red-600 text-sm">{dbError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col pt-4">
      <div className="flex items-center justify-between mb-12">
        <h1 className="avery-title text-5xl text-navy italic tracking-tight font-light">Pipelines</h1>
      </div>

      {/* Pipeline tabs */}
      <div className="flex gap-8 mb-12">
        {pipelines.map((p) => {
          const count = activePipeline === p.id ? pipelineContacts.length : null;
          return (
            <button
              key={p.id}
              onClick={() => setActivePipeline(p.id)}
              className={`pb-2 text-lg tracking-wide transition-all duration-500 relative ${
                activePipeline === p.id
                  ? 'font-heading text-navy italic'
                  : 'font-light text-navy/40 hover:text-navy/70'
              }`}
            >
              {p.name}
              {count !== null && count > 0 && (
                <span className={`ml-2 text-[0.6rem] px-2 py-0.5 rounded-full ${activePipeline === p.id ? 'bg-gold/10 text-gold font-bold' : 'bg-transparent text-navy/30'}`}>
                  {count}
                </span>
              )}
              {activePipeline === p.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-navy/20" />
              )}
            </button>
          );
        })}
      </div>

      {/* Kanban board */}
      {stages.length === 0 ? (
        <p className="text-slate text-sm">No stages configured for this pipeline.</p>
      ) : (
        <div className="flex gap-8 overflow-x-auto pb-10 flex-1 min-h-0 snap-x">
          {stages.map((stage) => {
            const stageContacts = getContactsInStage(stage);
            return (
              <div
                key={stage}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, stage)}
                className="flex-shrink-0 w-[320px] flex flex-col snap-start"
              >
                {/* Column header */}
                <div className="flex items-center justify-between mb-6 px-2">
                  <h3 className="text-[0.6rem] font-light tracking-[0.3em] uppercase text-navy/40">
                    {stage}
                  </h3>
                  <span className="text-[0.6rem] font-light text-navy/30">
                    {stageContacts.length}
                  </span>
                </div>

                {/* Cards Container - No Background, Pure Space */}
                <div className="flex-1 space-y-4 min-h-[200px]">
                  {stageContacts.length === 0 && (
                    <div className="flex items-center justify-center h-32 text-navy/20 text-xs italic font-light tracking-wide border border-dashed border-navy/10 rounded-2xl">
                      Drop leads here
                    </div>
                  )}
                  {stageContacts.map((pc) => {
                    const c = pc.contacts;
                    if (!c) return null;
                    const name = [c.first_name, c.last_name].filter(Boolean).join(' ');
                    return (
                      <div
                        key={pc.id}
                        draggable
                        onDragStart={() => handleDragStart(pc)}
                        onDragEnd={handleDragEnd}
                        className="bg-white p-6 cursor-grab active:cursor-grabbing shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-2xl group border border-navy/5"
                      >
                        <Link
                          to={`/admin/leads/${c.id}`}
                          className="no-underline block mb-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <p className="font-heading text-xl text-navy tracking-tight group-hover:text-gold transition-colors duration-500">
                            {name || <span className="text-navy/30 italic font-light">No name</span>}
                          </p>
                        </Link>
                        <p className="text-navy/50 text-xs font-light tracking-wide truncate mb-5">{c.email}</p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-navy/5">
                          {c.interest && (
                            <span className="text-[0.65rem] italic text-gold/70 tracking-wide truncate max-w-[60%]">
                              {c.interest.replace(/_/g, ' ').toLowerCase()}
                            </span>
                          )}
                          <span className="text-[0.55rem] tracking-widest uppercase font-light text-navy/30 ml-auto shrink-0">
                            {timeInStage(pc.entered_stage_at)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

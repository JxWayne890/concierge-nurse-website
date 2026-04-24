import { useCallback, useEffect, useMemo, useState } from 'react';
import { Search, ExternalLink, Copy, Check } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const dollars = (cents) => `$${((cents ?? 0) / 100).toLocaleString('en-US')}`;

export default function AdminEnrollments() {
  const [rows, setRows] = useState([]);
  const [ambassadors, setAmbassadors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const ambassadorById = useMemo(
    () => Object.fromEntries(ambassadors.map((a) => [a.id, a])),
    [ambassadors]
  );

  const load = useCallback(async () => {
    setLoading(true);
    const [eRes, aRes] = await Promise.all([
      (async () => {
        let q = supabase.from('enrollments').select('*').order('created_at', { ascending: false });
        if (statusFilter !== 'all') q = q.eq('status', statusFilter);
        if (search) q = q.or(`nurse_email.ilike.%${search}%,nurse_name.ilike.%${search}%`);
        return q;
      })(),
      supabase.from('ambassadors').select('id, full_name, referral_code'),
    ]);
    setRows(eRes.data || []);
    setAmbassadors(aRes.data || []);
    setLoading(false);
  }, [search, statusFilter]);

  useEffect(() => { load(); }, [load]);

  const paidTotal = rows
    .filter((r) => r.status === 'paid')
    .reduce((s, r) => s + r.amount_cents, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy">Enrollments</h1>
          <p className="text-charcoal/60 text-sm mt-1">
            {rows.length} shown · {dollars(paidTotal)} collected
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/30" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 border border-cream-dark bg-white text-sm text-charcoal focus:outline-none focus:border-gold"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="refunded">Refunded</option>
          <option value="failed">Failed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="bg-white border border-cream-dark">
        {loading ? (
          <div className="p-10 text-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          </div>
        ) : rows.length === 0 ? (
          <div className="p-16 text-center">
            <p className="text-charcoal/60">No enrollments yet.</p>
            <p className="text-charcoal/45 text-xs mt-2">When a nurse pays through Stripe, she'll show up here automatically.</p>
          </div>
        ) : (
          <ul className="divide-y divide-cream-dark">
            {rows.map((e) => (
              <EnrollmentRow key={e.id} enrollment={e} ambassador={e.ambassador_id ? ambassadorById[e.ambassador_id] : null} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function EnrollmentRow({ enrollment, ambassador }) {
  return (
    <li className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 flex-wrap mb-1">
            <p className="font-heading text-lg font-bold text-navy">{dollars(enrollment.amount_cents)}</p>
            <StatusPill status={enrollment.status} />
            <span className="text-charcoal/55 text-[0.65rem] tracking-[0.1em] uppercase">
              {enrollment.plan === 'payment_plan' ? 'Payment plan' : 'Pay in full'}
            </span>
          </div>
          <p className="text-charcoal/80 text-sm font-semibold">{enrollment.nurse_name || enrollment.nurse_email}</p>
          <p className="text-charcoal/60 text-sm">{enrollment.nurse_email}{enrollment.nurse_phone ? ` · ${enrollment.nurse_phone}` : ''}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-charcoal/55 text-xs">
            <span>
              Referred by:{' '}
              {ambassador ? (
                <>
                  <span className="text-charcoal">{ambassador.full_name}</span>
                  {ambassador.referral_code && <span className="font-mono"> ({ambassador.referral_code})</span>}
                </>
              ) : (
                <span className="italic">Unattributed</span>
              )}
            </span>
            <span>{enrollment.cohort_cycle_label || 'No cycle'}</span>
            <span>{new Date(enrollment.created_at).toLocaleDateString()}</span>
          </div>
          {enrollment.notes && (
            <p className="text-charcoal/50 text-xs mt-2 whitespace-pre-line">{enrollment.notes}</p>
          )}
        </div>

        {enrollment.stripe_checkout_session_id && (
          <a
            href={`https://dashboard.stripe.com/payments/${enrollment.stripe_payment_intent_id || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-charcoal/55 hover:text-navy text-[0.65rem] font-semibold tracking-[0.15em] uppercase transition-colors no-underline"
          >
            Stripe <ExternalLink size={12} />
          </a>
        )}
      </div>
    </li>
  );
}

function StatusPill({ status }) {
  const map = {
    pending: 'bg-gold/20 text-navy',
    paid: 'bg-green-100 text-green-800',
    refunded: 'bg-red-100 text-red-800',
    failed: 'bg-red-100 text-red-800',
    cancelled: 'bg-cream-dark text-charcoal/60',
  };
  return (
    <span className={`inline-flex px-2 py-0.5 text-[0.6rem] font-semibold tracking-[0.1em] uppercase ${map[status] || 'bg-cream-dark'}`}>
      {status}
    </span>
  );
}

// Reusable component for generating a one-off Stripe checkout link from the
// admin — imported by LeadDetail.
export function SendEnrollmentLinkButton({ lead }) {
  const [plan, setPlan] = useState('full');
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  async function generate() {
    setLoading(true);
    setError('');
    setLink('');

    try {
      const res = await fetch('/api/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          nurse_email: lead.email,
          nurse_name: [lead.first_name, lead.last_name].filter(Boolean).join(' '),
          nurse_phone: lead.phone,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || 'Could not generate link');
      setLink(data.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  }

  if (!lead?.email) return null;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 border border-cream-dark text-charcoal px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.15em] uppercase hover:bg-cream-dark transition-colors"
      >
        Send Enrollment Link
      </button>
    );
  }

  return (
    <div className="bg-cream-dark/60 border border-cream-dark p-4 mt-3">
      <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-charcoal/60 mb-3">
        Generate Stripe Link for {lead.email}
      </p>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="px-3 py-2 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold"
        >
          <option value="full">Pay in Full</option>
          <option value="payment_plan">Payment Plan</option>
        </select>
        <button
          onClick={generate}
          disabled={loading}
          className="bg-navy text-white px-4 py-2 text-[0.65rem] font-semibold tracking-[0.15em] uppercase hover:bg-navy/85 disabled:opacity-70 transition-colors"
        >
          {loading ? 'Generating…' : 'Generate link'}
        </button>
        <button
          onClick={() => { setOpen(false); setLink(''); setError(''); }}
          className="text-charcoal/55 hover:text-charcoal text-xs uppercase tracking-[0.2em] px-2"
        >
          Cancel
        </button>
      </div>

      {error && <p className="text-red-700 text-xs mb-2">{error}</p>}

      {link && (
        <div className="bg-white border-l-2 border-gold p-3 flex items-start justify-between gap-3">
          <p className="text-charcoal text-xs break-all font-mono">{link}</p>
          <button
            onClick={copyLink}
            className="inline-flex items-center gap-1.5 bg-navy text-white px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.15em] uppercase hover:bg-navy/85 transition-colors shrink-0"
          >
            {copied ? <Check size={10} /> : <Copy size={10} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  );
}

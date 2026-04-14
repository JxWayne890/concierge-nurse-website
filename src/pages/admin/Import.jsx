import { useState } from 'react';
import { Upload, ChevronRight, ChevronLeft, Check, AlertTriangle } from 'lucide-react';
import Papa from 'papaparse';
import { supabase } from '../../lib/supabase';

const CRM_FIELDS = [
  { value: '', label: 'Skip this column' },
  { value: 'email', label: 'Email' },
  { value: 'first_name', label: 'First Name' },
  { value: 'last_name', label: 'Last Name' },
  { value: 'phone', label: 'Phone' },
  { value: 'business_name', label: 'Business Name' },
  { value: 'annual_revenue', label: 'Annual Revenue' },
  { value: 'lifecycle_stage', label: 'Lifecycle Stage' },
  { value: 'status', label: 'Status' },
];

const AUTO_MAP = {
  email: 'email',
  'e-mail': 'email',
  'email address': 'email',
  first_name: 'first_name',
  'first name': 'first_name',
  firstname: 'first_name',
  last_name: 'last_name',
  'last name': 'last_name',
  lastname: 'last_name',
  phone: 'phone',
  'phone number': 'phone',
  business_name: 'business_name',
  'business name': 'business_name',
  business: 'business_name',
  company: 'business_name',
  annual_revenue: 'annual_revenue',
  'annual revenue': 'annual_revenue',
  revenue: 'annual_revenue',
  lifecycle_stage: 'lifecycle_stage',
  'lifecycle stage': 'lifecycle_stage',
  stage: 'lifecycle_stage',
  status: 'status',
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Import() {
  const [step, setStep] = useState(1);
  const [rawData, setRawData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [mapping, setMapping] = useState({});
  const [pasteText, setPasteText] = useState('');
  const [validation, setValidation] = useState(null);
  const [importing, setImporting] = useState(false);
  const [results, setResults] = useState(null);

  function parseCSV(text) {
    const result = Papa.parse(text.trim(), { header: true, skipEmptyLines: true });
    if (result.data.length === 0) return;

    setHeaders(result.meta.fields || []);
    setRawData(result.data);

    const autoMap = {};
    (result.meta.fields || []).forEach((h) => {
      const key = h.toLowerCase().trim();
      if (AUTO_MAP[key]) autoMap[h] = AUTO_MAP[key];
    });
    setMapping(autoMap);
    setStep(2);
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => parseCSV(ev.target.result);
    reader.readAsText(file);
  }

  function handlePaste() {
    if (!pasteText.trim()) return;
    parseCSV(pasteText);
  }

  function getMappedField(header) {
    return mapping[header] || '';
  }

  function setMappedField(header, field) {
    setMapping((prev) => ({ ...prev, [header]: field }));
  }

  function hasEmailMapping() {
    return Object.values(mapping).includes('email');
  }

  function buildRows() {
    return rawData.map((row) => {
      const mapped = {};
      headers.forEach((h) => {
        const field = mapping[h];
        if (field) mapped[field] = row[h]?.trim() || '';
      });
      return mapped;
    });
  }

  async function handleValidate() {
    const rows = buildRows();
    const valid = [];
    const invalid = [];
    const duplicateRows = [];

    // Check email format
    rows.forEach((row, i) => {
      if (!row.email || !isValidEmail(row.email)) {
        invalid.push({ index: i, reason: 'Invalid email', row });
      } else {
        valid.push(row);
      }
    });

    // Check duplicates against DB
    const emails = valid.map((r) => r.email.toLowerCase());
    const uniqueEmails = [...new Set(emails)];

    let existingEmails = new Set();
    // Batch check in groups of 50
    for (let i = 0; i < uniqueEmails.length; i += 50) {
      const batch = uniqueEmails.slice(i, i + 50);
      const { data } = await supabase.from('contacts').select('email').in('email', batch);
      (data || []).forEach((c) => existingEmails.add(c.email.toLowerCase()));
    }

    const toImport = [];
    const seenEmails = new Set();
    valid.forEach((row) => {
      const email = row.email.toLowerCase();
      if (existingEmails.has(email) || seenEmails.has(email)) {
        duplicateRows.push(row);
      } else {
        seenEmails.add(email);
        toImport.push(row);
      }
    });

    setValidation({ valid: toImport, invalid, duplicates: duplicateRows });
    setStep(4);
  }

  async function handleImport() {
    setImporting(true);
    const rows = validation.valid;
    let imported = 0;
    let errors = 0;

    for (let i = 0; i < rows.length; i += 50) {
      const batch = rows.slice(i, i + 50).map((row) => ({
        email: row.email.toLowerCase(),
        first_name: row.first_name || null,
        last_name: row.last_name || null,
        phone: row.phone || null,
        business_name: row.business_name || null,
        annual_revenue: row.annual_revenue || null,
        lifecycle_stage: row.lifecycle_stage || 'Explorer',
        status: row.status || 'new',
        source: 'csv_import',
      }));

      const { data, error } = await supabase.from('contacts').insert(batch).select();

      if (error) {
        errors += batch.length;
      } else {
        imported += (data || []).length;
        // Log activity for each
        const activityRows = (data || []).map((c) => ({
          contact_id: c.id,
          type: 'import',
          description: 'Imported via CSV upload',
        }));
        if (activityRows.length > 0) {
          await supabase.from('activity_log').insert(activityRows);
        }
      }
    }

    setResults({
      total: rawData.length,
      imported,
      skipped: validation.duplicates.length,
      invalid: validation.invalid.length,
      errors,
    });
    setStep(6);
    setImporting(false);
  }

  function reset() {
    setStep(1);
    setRawData([]);
    setHeaders([]);
    setMapping({});
    setPasteText('');
    setValidation(null);
    setResults(null);
  }

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-navy mb-8">Import Contacts</h1>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {['Upload', 'Preview', 'Map', 'Validate', 'Import', 'Results'].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className={`inline-flex items-center justify-center w-7 h-7 text-xs font-semibold ${
                step >= i + 1 ? 'bg-navy text-gold' : 'bg-cream text-charcoal/40 border border-cream-dark'
              }`}
            >
              {step > i + 1 ? <Check size={14} /> : i + 1}
            </span>
            <span className={`text-xs ${step >= i + 1 ? 'text-charcoal' : 'text-charcoal/40'}`}>{label}</span>
            {i < 5 && <ChevronRight size={14} className="text-charcoal/20" />}
          </div>
        ))}
      </div>

      {/* Step 1: Upload */}
      {step === 1 && (
        <div className="bg-white border border-cream-dark p-8">
          <div className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-2">Upload CSV File</label>
              <label className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-cream-dark hover:border-gold cursor-pointer transition-colors">
                <Upload size={32} className="text-charcoal/20 mb-3" />
                <span className="text-sm text-charcoal">Click to upload a .csv file</span>
                <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
            <div className="text-center text-charcoal/40 text-sm">or</div>
            <div>
              <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-2">Paste CSV Data</label>
              <textarea
                value={pasteText}
                onChange={(e) => setPasteText(e.target.value)}
                rows={8}
                placeholder="email,first_name,last_name&#10;john@example.com,John,Doe"
                className="w-full px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors resize-none font-mono"
              />
              <button onClick={handlePaste} disabled={!pasteText.trim()} className="btn-primary text-sm mt-3">
                Parse CSV
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Preview */}
      {step === 2 && (
        <div className="bg-white border border-cream-dark">
          <div className="px-6 py-4 border-b border-cream-dark flex items-center justify-between">
            <p className="text-sm text-charcoal">{rawData.length} rows found. Showing first 10:</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cream-dark text-left">
                  {headers.map((h) => (
                    <th key={h} className="px-4 py-3 text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-dark">
                {rawData.slice(0, 10).map((row, i) => (
                  <tr key={i}>
                    {headers.map((h) => (
                      <td key={h} className="px-4 py-3 text-slate">{row[h]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-cream-dark flex gap-3">
            <button onClick={() => setStep(1)} className="btn-navy text-sm flex items-center gap-1">
              <ChevronLeft size={14} /> Back
            </button>
            <button onClick={() => setStep(3)} className="btn-primary text-sm flex items-center gap-1">
              Next: Map Columns <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Column Mapping */}
      {step === 3 && (
        <div className="bg-white border border-cream-dark p-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-6">Map CSV columns to CRM fields</h3>
          <div className="space-y-4 max-w-lg">
            {headers.map((h) => (
              <div key={h} className="flex items-center gap-4">
                <span className="text-sm text-charcoal w-40 shrink-0 font-medium">{h}</span>
                <ChevronRight size={14} className="text-charcoal/20 shrink-0" />
                <select
                  value={getMappedField(h)}
                  onChange={(e) => setMappedField(h, e.target.value)}
                  className="flex-1 px-4 py-2.5 border border-cream-dark bg-white text-sm text-charcoal focus:outline-none focus:border-gold"
                >
                  {CRM_FIELDS.map((f) => (
                    <option key={f.value} value={f.value}>{f.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          {!hasEmailMapping() && (
            <div className="flex items-center gap-2 mt-4 text-amber-600 text-sm">
              <AlertTriangle size={16} />
              At least one column must be mapped to Email.
            </div>
          )}
          <div className="mt-6 flex gap-3">
            <button onClick={() => setStep(2)} className="btn-navy text-sm flex items-center gap-1">
              <ChevronLeft size={14} /> Back
            </button>
            <button onClick={handleValidate} disabled={!hasEmailMapping()} className="btn-primary text-sm flex items-center gap-1">
              Next: Validate <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Validate */}
      {step === 4 && validation && (
        <div className="bg-white border border-cream-dark p-6">
          <h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 mb-6">Validation Results</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-green-50 border border-green-200">
              <p className="text-2xl font-bold text-green-700">{validation.valid.length}</p>
              <p className="text-sm text-green-600">Ready to import</p>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200">
              <p className="text-2xl font-bold text-amber-700">{validation.duplicates.length}</p>
              <p className="text-sm text-amber-600">Duplicates (will skip)</p>
            </div>
            <div className="p-4 bg-red-50 border border-red-200">
              <p className="text-2xl font-bold text-red-700">{validation.invalid.length}</p>
              <p className="text-sm text-red-600">Invalid (will skip)</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(3)} className="btn-navy text-sm flex items-center gap-1">
              <ChevronLeft size={14} /> Back
            </button>
            <button
              onClick={handleImport}
              disabled={validation.valid.length === 0 || importing}
              className="btn-primary text-sm"
            >
              {importing ? 'Importing...' : `Import ${validation.valid.length} Contacts`}
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Importing (shown as loading state within step 4) */}
      {step === 5 && (
        <div className="bg-white border border-cream-dark p-10 text-center">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate text-sm">Importing contacts...</p>
        </div>
      )}

      {/* Step 6: Results */}
      {step === 6 && results && (
        <div className="bg-white border border-cream-dark p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={20} className="text-green-600" />
            </div>
            <h3 className="font-heading text-lg font-bold text-navy">Import Complete</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-cream border border-cream-dark">
              <p className="text-2xl font-bold text-navy">{results.total}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Total Processed</p>
            </div>
            <div className="p-4 bg-cream border border-cream-dark">
              <p className="text-2xl font-bold text-green-600">{results.imported}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Imported</p>
            </div>
            <div className="p-4 bg-cream border border-cream-dark">
              <p className="text-2xl font-bold text-amber-600">{results.skipped}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Skipped (Duplicates)</p>
            </div>
            <div className="p-4 bg-cream border border-cream-dark">
              <p className="text-2xl font-bold text-red-600">{results.errors + results.invalid}</p>
              <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/40">Errors</p>
            </div>
          </div>
          <button onClick={reset} className="btn-primary text-sm">Import More</button>
        </div>
      )}
    </div>
  );
}

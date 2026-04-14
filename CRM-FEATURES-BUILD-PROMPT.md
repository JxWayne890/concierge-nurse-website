# CRM Features Build Prompt — Concierge Nurse Business Society

## Context

This is an existing Vite + React 19 project (NOT Next.js) with Tailwind CSS 4, React Router DOM, and Lucide React icons. It already has:

- A full public marketing website (Home, About, Contact, Consulting, Accelerator, Community, etc.)
- Supabase integration (database + auth) via `src/lib/supabase.js`
- 6 public forms that write leads directly to Supabase via `src/lib/api.js`
- An admin panel at `/admin` with Supabase Auth (email/password login)
- Admin pages: Dashboard (`src/pages/admin/Dashboard.jsx`), Leads list (`src/pages/admin/Leads.jsx`), Lead Detail (`src/pages/admin/LeadDetail.jsx`)
- Admin layout with sidebar (`src/components/AdminLayout.jsx`)
- Auth context (`src/lib/AuthContext.jsx`) and protected route wrapper (`src/components/ProtectedRoute.jsx`)
- Database tables: `contacts`, `tags`, `contact_tags`, `notes`, `activity_log`
- RLS policies: anon can insert/select/update, authenticated can do everything
- Realtime subscriptions + 10-second polling on Dashboard and Leads pages

The Supabase env vars are in `.env`:
```
VITE_SUPABASE_URL=https://dpdquksybnztrlhhpims.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZHF1a3N5Ym56dHJsaGhwaW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNzc4MDgsImV4cCI6MjA5MTc1MzgwOH0.3jTsUN8lhjQ-u7XEBh5Fi8Xsq0HB6My6Fd_OHD5LyiI
```

## Design System (must match existing site)

- **Navy:** `#0A1628` (primary dark bg, sidebar, dark sections)
- **Gold:** `#C9A84C` (accent, CTAs, active states, links)
- **Cream:** `#FAF7F2` (light backgrounds)
- **Cream Dark:** `#F0EBE1` (borders)
- **Charcoal:** `#1A1A1A` (text)
- **Slate:** `#6B7280` (secondary text)
- Headings use `font-heading` class (Playfair Display)
- Body text uses default (Inter)
- Buttons use `btn-primary` and `btn-navy` classes
- Labels use: `text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40`
- Inputs use: `px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors`
- Badges use: `inline-block px-2 py-0.5 text-[0.6rem] font-semibold tracking-wider uppercase bg-cream text-charcoal/60 border border-cream-dark`
- Cards use: `bg-white border border-cream-dark p-6`
- Section labels use: `text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40`

## What to Build

Build ALL of the following features. All new admin pages go in `src/pages/admin/`. Add routes to the admin section in `src/App.jsx` (nested under the `/admin` protected route with `AdminLayout`). Add sidebar nav items to `src/components/AdminLayout.jsx`.

---

### 1. Fix: Add Note from Admin (Lead Detail Page)

In `src/pages/admin/LeadDetail.jsx`, add an "Add Note" form at the top of the Notes section:
- Textarea + submit button
- On submit: insert into `notes` table with `contact_id` and `content`
- Refresh notes list after adding
- Clear the textarea on success

---

### 2. Edit Contact (Lead Detail Page)

In `src/pages/admin/LeadDetail.jsx`, add an "Edit" button in the header that toggles the details section into edit mode:
- Editable fields: first_name, last_name, email, phone, business_name, annual_revenue, interest, lifecycle_stage, status
- lifecycle_stage dropdown: Explorer, DIYer, Builder, Established Owner
- status dropdown: new, confirmed, unsubscribed, bounced
- Save button: updates the contact in Supabase, exits edit mode
- Cancel button: reverts changes, exits edit mode

---

### 3. Segments Management Page

Create `src/pages/admin/Segments.jsx`

**Route:** `/admin/segments`
**Sidebar nav item:** "Segments" with a `Tag` icon from lucide-react

**Features:**
- Grid of segment/tag cards showing: name, contact count, created date
- "Create Segment" button → opens an inline form or modal
  - Name (text input, required)
  - Description (textarea, optional)
  - Submit: insert into `tags` table (reuse existing table, add `description` column)
- Edit name/description on each card
- Delete segment (with confirmation — also removes from `contact_tags` junction via cascade)
- Contact count: query `contact_tags` grouped by `tag_id`

**Database migration SQL to output** (print to console or create a file): Add `description` column to `tags` table:
```sql
ALTER TABLE tags ADD COLUMN IF NOT EXISTS description text;
```

---

### 4. CSV Import Page

Create `src/pages/admin/Import.jsx`

**Route:** `/admin/import`
**Sidebar nav item:** "Import" with an `Upload` icon from lucide-react

Install `papaparse` for CSV parsing: `npm install papaparse`

**Multi-step wizard:**

**Step 1 — Upload:** File input (accept .csv) or paste CSV text into a textarea. Parse with PapaParse on the client.

**Step 2 — Preview:** Show first 10 rows in a table.

**Step 3 — Column Mapping:** For each CSV column header, show a dropdown to map it to a CRM field:
- email (required — at least one column must map to email)
- first_name, last_name, phone, business_name, annual_revenue, lifecycle_stage, status
- "Skip this column" option
- Auto-detect common column names (e.g., "Email" → email, "First Name" → first_name)

**Step 4 — Validate:** 
- Check email format for all rows
- Check for duplicates against existing contacts in the database
- Show counts: valid, invalid, duplicate

**Step 5 — Import:**
- Insert valid, non-duplicate rows into `contacts` table
- Batch in groups of 50
- Skip rows with emails that already exist (dedup)
- Default `status: 'new'`, `source: 'csv_import'`, `lifecycle_stage: 'Explorer'` for any missing fields
- Log activity for each imported contact

**Step 6 — Results:** Show summary: total processed, imported, skipped (duplicates), errors.

---

### 5. Export Contacts

In `src/pages/admin/Leads.jsx`, add an "Export CSV" button next to the search bar:
- Fetches ALL contacts (not just current page) from Supabase
- Generates a CSV string with columns: first_name, last_name, email, phone, lifecycle_stage, status, source, business_name, annual_revenue, created_at
- Triggers a browser download of the CSV file
- Button shows "Exporting..." while loading

---

### 6. Campaigns Infrastructure

#### Database tables

Create a migration SQL file at `supabase-campaigns-migration.sql` with:

```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'email',
  status TEXT NOT NULL DEFAULT 'draft',
  subject TEXT,
  from_name TEXT,
  from_email TEXT,
  body TEXT NOT NULL DEFAULT '',
  recipient_tag_ids UUID[] DEFAULT '{}',
  recipient_count INTEGER DEFAULT 0,
  scheduled_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE campaign_recipients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending',
  opened_at TIMESTAMPTZ,
  clicked_at TIMESTAMPTZ
);

CREATE TABLE campaign_stats (
  campaign_id UUID PRIMARY KEY REFERENCES campaigns(id) ON DELETE CASCADE,
  sent INTEGER DEFAULT 0,
  delivered INTEGER DEFAULT 0,
  opened INTEGER DEFAULT 0,
  clicked INTEGER DEFAULT 0,
  bounced INTEGER DEFAULT 0,
  unsubscribed INTEGER DEFAULT 0
);

-- RLS
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_recipients ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaign_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Auth full access campaigns" ON campaigns FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access campaign_recipients" ON campaign_recipients FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access campaign_stats" ON campaign_stats FOR ALL TO authenticated USING (true) WITH CHECK (true);
```

#### Campaigns List Page

Create `src/pages/admin/Campaigns.jsx`

**Route:** `/admin/campaigns`
**Sidebar nav item:** "Campaigns" with a `Send` icon

**Features:**
- Table with columns: Name, Type (email/sms badge), Status (draft/scheduled/sent badge with color), Recipients, Created Date
- "New Email Campaign" button → `/admin/campaigns/email/new`
- "New SMS Campaign" button → `/admin/campaigns/sms/new`
- Click row → campaign detail page

#### New Email Campaign Page

Create `src/pages/admin/NewEmailCampaign.jsx`

**Route:** `/admin/campaigns/email/new`

**Layout — two columns:**

Left (form):
- Campaign Name (text input)
- Subject Line (text input)
- From Name (text input, default "Concierge Nurse Business Society")
- From Email (text input, default "hello@conciergenursebusiness.com")
- Email Body (textarea, plain HTML — no rich editor needed)

Right sidebar:
- **Recipients:** Multi-select checkboxes of existing tags/segments. Show total contact count for selected tags.
- **Schedule:** Toggle "Send Now" vs date/time picker
- **Actions:** "Save as Draft" (secondary button), "Send Campaign" (primary button)

On submit:
- Insert into `campaigns` table
- Count recipients (contacts that have selected tags via `contact_tags`)
- Set `recipient_count`
- If "Send Now": set `status: 'sent'`, `sent_at: now()`, console.log("STUB: Would send email via Resend to X recipients")
- If scheduled: set `status: 'scheduled'`, `scheduled_at: [selected time]`
- If draft: set `status: 'draft'`
- Insert a `campaign_stats` row with zeros
- Redirect to campaign detail page

#### New SMS Campaign Page

Create `src/pages/admin/NewSMSCampaign.jsx`

**Route:** `/admin/campaigns/sms/new`

**Form:**
- Campaign Name
- Message Body (textarea)
- Character counter below textarea: show `{count}/160` and segment count (160 chars = 1 segment, 307 = 2 segments, 460 = 3, etc. — each additional segment is 153 chars after the first 160)
- Recipients: same tag multi-select as email, but note "Only contacts with phone numbers"
- Schedule options (same as email)
- Save as Draft / Send Campaign buttons

On submit: same logic as email but `type: 'sms'`, console.log("STUB: Would send SMS via Twilio to X recipients")

#### Campaign Detail Page

Create `src/pages/admin/CampaignDetail.jsx`

**Route:** `/admin/campaigns/:id`

**Header:** Campaign name, type badge (email/sms), status badge, sent date (if sent)

**Stats grid (6 boxes for email, 4 for SMS):**
- Email: Sent, Delivered, Opened, Clicked, Bounced, Unsubscribed
- SMS: Sent, Delivered, Failed, Unsubscribed

**Metrics:** Open Rate %, Click Rate %, Delivery Rate % (all 0% since sending is stubbed)

**Info section:** Subject (email only), from address (email only), message preview (SMS), recipient tags

---

### 7. Settings Page

Create `src/pages/admin/Settings.jsx`

**Route:** `/admin/settings`
**Sidebar nav item:** "Settings" with a `Settings` icon

**Sections:**

1. **Profile**
   - Business Name (text input, stored in localStorage for now)
   - Email (read-only, from auth session)
   - Timezone select (ET, CT, MT, PT — stored in localStorage)

2. **Integrations** (all stubbed — just inputs that save to localStorage)
   - Resend: API Key input (type=password, masked)
   - Twilio: Account SID, Auth Token (masked), Phone Number
   - Each has a "Save" button and a "Connected" / "Not configured" status badge

3. **Data Management**
   - "Export All Contacts" button (same CSV export as Leads page)
   - "Delete All Contacts" button (danger red, shows confirmation modal, deletes all contacts + related data)

---

### 8. Bulk Actions on Leads

In `src/pages/admin/Leads.jsx`, add:
- Checkbox column on each row + "select all" checkbox in header
- When rows are selected, show a bulk action bar above the table:
  - "Tag" dropdown — assign a tag to all selected contacts
  - "Export Selected" — download selected contacts as CSV
  - "Delete Selected" — delete with confirmation modal
- Show count of selected items: "3 selected"

---

### 9. Update Admin Sidebar

In `src/components/AdminLayout.jsx`, update the `navItems` array to include all new pages:

```js
const navItems = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Leads', path: '/admin/leads', icon: Users },
  { label: 'Segments', path: '/admin/segments', icon: Tag },
  { label: 'Campaigns', path: '/admin/campaigns', icon: Send },
  { label: 'Import', path: '/admin/import', icon: Upload },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];
```

---

### 10. Update App.jsx Routes

Add all new admin routes nested under the protected `/admin` route in `src/App.jsx`:

```jsx
<Route path="segments" element={<AdminSegments />} />
<Route path="campaigns" element={<AdminCampaigns />} />
<Route path="campaigns/email/new" element={<AdminNewEmailCampaign />} />
<Route path="campaigns/sms/new" element={<AdminNewSMSCampaign />} />
<Route path="campaigns/:id" element={<AdminCampaignDetail />} />
<Route path="import" element={<AdminImport />} />
<Route path="settings" element={<AdminSettings />} />
```

All new page components should be lazy loaded with `lazy(() => import(...))`.

---

## Important Rules

1. This is a **Vite + React** project, NOT Next.js. No `app/` directory, no API routes, no server components. Everything is client-side React with direct Supabase calls.
2. **JavaScript only** — no TypeScript. The entire codebase is `.jsx`.
3. **Match the existing design system exactly.** Look at existing admin pages for class patterns. Use the same Tailwind classes, spacing, typography, and color variables.
4. **Use Supabase JS client** (`src/lib/supabase.js`) for all database operations. No fetch calls to API routes.
5. **Supabase Auth** is used for authentication (NOT NextAuth). The auth context is in `src/lib/AuthContext.jsx`.
6. **Run `npm run build` after all changes** to verify no compilation errors.
7. **When creating migration SQL files**, also print the SQL to the terminal so it's easy to copy-paste into the Supabase SQL Editor.
8. **Do not modify any public-facing pages** (Home, About, Contact, Consulting, Accelerator, Community, etc.) — only admin pages.
9. Install any needed npm packages (e.g., `papaparse`).
10. All admin pages should have no visible "Loading..." flicker on data refresh — only show loading spinner on initial page load, not on polling/realtime updates.

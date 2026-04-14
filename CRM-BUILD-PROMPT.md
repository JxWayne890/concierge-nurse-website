# CRM Build Prompt — Concierge Nurse Business Society

Use this prompt in a new project/conversation to scaffold the CRM.

---

## PROMPT START

Build a standalone CRM web application for **Concierge Nurse Business Society** — a business that helps nurses build, launch, and scale concierge nursing businesses. This CRM will be hosted at `crm.conciergenursebusiness.com` as a separate app from the public-facing marketing website.

### Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4 — match the brand aesthetic of the public site (navy `#0A1628`, gold `#C9A84C`, cream `#FAF7F2`, charcoal `#1A1A1A`, slate `#6B7280`)
- **Fonts:** Playfair Display (headings), Inter (body), Cormorant Garamond (accents)
- **Database:** Prepare full SQL schema files (Supabase/PostgreSQL) but do NOT connect to any database yet. No Supabase client setup. Just write the `.sql` migration files so they're ready to run later.
- **Auth:** Prepare NextAuth.js structure but do NOT configure providers yet. Just scaffold the auth pages (login, forgot password) and middleware route protection.
- **Deployment target:** Vercel

### Important: Frontend-Only Phase

This is a **frontend-only build**. Build all the UI, pages, components, and layouts. Write all SQL schema files. Stub out all API route files with the correct REST structure and typed request/response shapes, but use mock data or local state for now. No live database connections, no live API keys, no Supabase client. Everything should be ready to "plug in" later.

---

## Core Features

### 1. Dashboard (Home)

- Overview cards: Total Contacts, New This Week, Active Campaigns, Open Rate
- Recent activity feed (new signups, form submissions, email opens)
- Quick actions: Add Contact, New Campaign, Import CSV

### 2. Contacts (Full CRM)

This is the core of the app. Each contact record should support these fields:

**Required fields:**
- ID (auto-generated UUID)
- Email
- First Name
- Last Name
- Status (confirmed, unconfirmed, unsubscribed, bounced)
- Source (manualUpload, webhook, csvImport, formSubmission)
- Created At (timestamp)
- Updated At (timestamp)

**Optional/extended fields:**
- Phone number
- Segments/Tags (array of strings — e.g., "Nov 22 Upload", "Clarity Workshop Opt Ins", "Accelerator Waitlist")
- Last IP
- Last Open (timestamp)
- Notes (free text, timestamped entries)
- Interest (from contact form: Clarity Consult, Accelerator Cohort, Toolkits & Resources, 1:1 Private Coaching, Business Consulting, VIP Bridge Session, General Question, Other)
- Lifecycle Stage (Explorer, DIYer, Builder, Established Owner)
- Program History (which programs/products they've purchased or enrolled in)
- Lead Score (calculated or manual)

**Contact views:**
- Table view with sortable columns, search, and filter by segment/status/source/lifecycle stage
- Individual contact detail page with full history, notes, tags, and activity timeline
- Bulk actions: tag, delete, export, change status

### 3. CSV Import System

**This is critical.** The CRM must support importing contacts from CSV files in this exact format:

```csv
"id","email","firstName","lastName","source","status","createdAt","segments","metafields.lastIp","metafields.lastOpen"
"69212526348bc6e570fd66d0","lockneytwirler15@yahoo.com","Sarah","McKinnon","manualUpload","confirmed","2025-11-22T02:51:18Z","Nov 22 Upload","69.147.86.138","2026-02-23T01:14:36Z"
"69212526348bc6e570fd66d1","kyessence.miles@yahoo.com","Tiffany","Davis","manualUpload","confirmed","2025-11-22T02:51:18Z","Nov 22 Upload","172.58.2.178","2026-01-03T21:11:47Z"
```

**Column mapping:**
- `id` → external ID (store as reference, generate new internal UUID)
- `email` → email
- `firstName` → firstName
- `lastName` → lastName
- `source` → source
- `status` → status
- `createdAt` → createdAt
- `segments` → tags/segments array (comma-separated within the field)
- `metafields.lastIp` → lastIp
- `metafields.lastOpen` → lastOpen

**Three import methods — all must work:**

1. **File Upload:** Drag-and-drop zone + traditional file picker button. Accept `.csv` files.
2. **Folder Upload:** Allow selecting a folder to batch-import multiple CSV files at once.
3. **Copy-Paste:** A large text area where raw CSV data can be pasted directly, parsed, and imported.

**Import flow for all methods:**
- Step 1: Upload/paste — parse the CSV and show a preview table of the first 10 rows
- Step 2: Column mapping — auto-detect columns from the header row, allow manual remapping if needed
- Step 3: Validation — show errors (missing email, invalid format) and warnings (duplicate emails)
- Step 4: Review & confirm — show total count, new vs duplicate, then import
- Step 5: Results summary — show success count, skipped duplicates, errors

Handle edge cases: empty fields (like missing lastIp/lastOpen), commas inside quoted fields (like `"Nov 22 Upload, Clarity Workshop Opt Ins"`), mixed casing.

### 4. Webhook Intake

Build API route stubs at:

- `POST /api/webhooks/contact-form` — captures submissions from the public website's contact form with fields: firstName, lastName, email, interest, message
- `POST /api/webhooks/waitlist` — captures Accelerator waitlist signups with fields: fullName, email
- `POST /api/webhooks/community-signup` — captures community/email list signups with fields: email, firstName

Each webhook should:
- Validate the incoming payload
- Check for duplicate emails
- Auto-assign source as "webhook"
- Auto-assign appropriate segment/tag based on which webhook received it (e.g., "Contact Form Lead", "Accelerator Waitlist", "Community Signup")
- Return appropriate status codes (201 created, 409 duplicate, 400 validation error)
- Include a webhook secret/API key header check for security (stub it, don't hardcode a real key)

### 5. Campaigns (Email & SMS)

#### Email Campaigns (Resend)

- Campaign list page: name, status (draft, scheduled, sent), created date, open rate, click rate
- Campaign builder page:
  - Subject line
  - From name / from email
  - Rich text email body editor (use a simple WYSIWYG or markdown editor)
  - Recipient selection: choose by segment/tag, lifecycle stage, or manual selection
  - Schedule or send immediately
- Individual campaign detail: delivery stats, open rate, click rate, bounces, unsubscribes

**API integration (stub only):**
- Create API route files under `/api/campaigns/email/`
- Import and reference the Resend SDK (`resend`) — install the package but do NOT configure with a real API key
- Stub the send function: `resend.emails.send({ from, to, subject, html })`
- Stub batch send function for campaigns to multiple recipients
- Stub webhook receiver for Resend delivery events (delivered, opened, clicked, bounced) at `POST /api/webhooks/resend`
- Use placeholder/mock API key: `re_placeholder_key`

#### SMS Campaigns (Twilio)

- SMS campaign list page: name, status, sent count, delivery rate
- SMS composer:
  - Message body (character count, segment count indicator)
  - Recipient selection by segment/tag (only contacts with phone numbers)
  - Schedule or send immediately

**API integration (stub only):**
- Create API route files under `/api/campaigns/sms/`
- Import and reference the Twilio SDK (`twilio`) — install the package but do NOT configure with real credentials
- Stub the send function: `client.messages.create({ body, from, to })`
- Stub webhook receiver for Twilio delivery status callbacks at `POST /api/webhooks/twilio`
- Use placeholder credentials: `TWILIO_ACCOUNT_SID=AC_placeholder`, `TWILIO_AUTH_TOKEN=placeholder`, `TWILIO_PHONE_NUMBER=+1placeholder`

#### Campaign Analytics

- Dashboard showing campaign performance across both channels
- Per-campaign drill-down with recipient-level status

### 6. Segments & Tags

- Create, edit, delete segments/tags
- Auto-segments based on rules (e.g., "All contacts who opened an email in last 30 days")
- Manual segments from CSV imports or bulk tagging
- Segment counts on the list page

### 7. Settings Page

- Profile settings (business name, email, timezone)
- Integration settings page with cards for:
  - **Resend** — API key input field (empty, ready to configure)
  - **Twilio** — Account SID, Auth Token, Phone Number input fields (empty, ready to configure)
  - **Webhook URLs** — display the webhook endpoints with copy buttons so they can be added to the public website
- Export all contacts as CSV
- Data management (future: delete all, GDPR compliance)

---

## SQL Schema Files

Write complete PostgreSQL migration files (compatible with Supabase) for all tables. Save them in a `/supabase/migrations/` directory. Include:

- `contacts` table with all fields listed above
- `segments` table
- `contact_segments` junction table
- `campaigns` table (type: email or sms, status, content, scheduled_at, sent_at, stats JSON)
- `campaign_recipients` table (campaign_id, contact_id, status, opened_at, clicked_at)
- `activity_log` table (contact_id, type, description, metadata JSON, created_at)
- `notes` table (contact_id, body, created_by, created_at)
- `webhook_logs` table (endpoint, payload JSON, status, created_at)
- Row Level Security policies (stub them for a single authenticated user)
- Indexes on email, created_at, status, and segment lookups

---

## Environment Variables Template

Create a `.env.example` file with all the env vars the app will eventually need:

```
# Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Resend (Email)
RESEND_API_KEY=re_placeholder

# Twilio (SMS)
TWILIO_ACCOUNT_SID=AC_placeholder
TWILIO_AUTH_TOKEN=placeholder
TWILIO_PHONE_NUMBER=+1placeholder

# Webhook Security
WEBHOOK_SECRET=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## File Structure

```
/app
  /layout.tsx          — root layout with sidebar nav
  /page.tsx            — dashboard
  /login/page.tsx      — auth login page
  /contacts
    /page.tsx          — contacts table/list
    /[id]/page.tsx     — individual contact detail
    /import/page.tsx   — CSV import (drag-drop, file upload, paste)
  /campaigns
    /page.tsx          — campaign list (all types)
    /email
      /new/page.tsx    — email campaign builder
      /[id]/page.tsx   — email campaign detail/stats
    /sms
      /new/page.tsx    — SMS campaign builder
      /[id]/page.tsx   — SMS campaign detail/stats
  /segments/page.tsx   — segments management
  /settings/page.tsx   — settings & integrations
  /api
    /webhooks
      /contact-form/route.ts
      /waitlist/route.ts
      /community-signup/route.ts
      /resend/route.ts
      /twilio/route.ts
    /campaigns
      /email/route.ts
      /sms/route.ts
    /contacts/route.ts
/components
  /layout
    /Sidebar.tsx
    /Header.tsx
  /contacts
    /ContactsTable.tsx
    /ContactDetail.tsx
    /CSVImporter.tsx    — handles all 3 import methods
    /ImportPreview.tsx
    /ColumnMapper.tsx
  /campaigns
    /CampaignList.tsx
    /EmailComposer.tsx
    /SMSComposer.tsx
  /dashboard
    /StatCards.tsx
    /ActivityFeed.tsx
  /ui                  — reusable UI components (Button, Modal, Table, Input, Badge, etc.)
/lib
  /mock-data.ts        — mock contacts, campaigns for UI development
  /csv-parser.ts       — CSV parsing utility
  /types.ts            — TypeScript types for all entities
  /resend.ts           — Resend client stub
  /twilio.ts           — Twilio client stub
/supabase
  /migrations
    /001_contacts.sql
    /002_segments.sql
    /003_campaigns.sql
    /004_activity_log.sql
    /005_webhook_logs.sql
```

---

## Design Notes

- Sidebar navigation (not top nav) — this is an internal tool, not a marketing site
- Clean, minimal admin aesthetic — think Linear or Notion, not Salesforce
- Use the brand colors but keep it professional/functional
- Dark navy sidebar, white/cream content area
- Responsive but desktop-first (this will primarily be used on desktop)
- Use `lucide-react` for icons (same as the public site)

---

## PROMPT END

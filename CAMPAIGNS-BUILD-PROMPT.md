# Campaigns Build Prompt — Full Email Marketing System (Replace Flodesk)

## Context

This is a Vite + React 19 project (NOT Next.js) with Tailwind CSS 4, Supabase, and Lucide React. The CRM admin panel lives at `/admin`. Email sending is handled by **Resend** via a Vercel serverless function at `api/send-campaign.js`.

**The domain `conciergenursesociety.com` is verified in Resend.** Emails can be sent from any address at that domain.

**Existing files you'll be working with:**
- `api/send-campaign.js` — Vercel serverless function that sends emails via Resend (already works)
- `src/pages/admin/Campaigns.jsx` — Campaign list page
- `src/pages/admin/NewEmailCampaign.jsx` — Create email campaign page (partially working)
- `src/pages/admin/NewSMSCampaign.jsx` — Create SMS campaign page (stubbed, SMS not wired up yet)
- `src/pages/admin/CampaignDetail.jsx` — Campaign detail/stats page
- `src/App.jsx` — Routes are already configured
- `src/lib/supabase.js` — Supabase client

**Database tables already exist:**
- `campaigns` — id, name, type, status, subject, from_name, from_email, body, recipient_tag_ids (UUID[]), recipient_count, scheduled_at, sent_at, created_at, updated_at
- `campaign_recipients` — id, campaign_id, contact_id, status, opened_at, clicked_at
- `campaign_stats` — campaign_id, sent, delivered, opened, clicked, bounced, unsubscribed
- `contacts` — id, email, first_name, last_name, phone, status, etc.
- `tags` — id, name
- `contact_tags` — contact_id, tag_id
- `activity_log` — id, contact_id, type, description, metadata, created_at

**Env vars available on Vercel:**
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase anon key
- `RESEND_API_KEY` — Resend API key (server-side only, NOT prefixed with VITE_)

## Design System (match existing)

- Navy: `#0A1628`, Gold: `#C9A84C`, Cream: `#FAF7F2`, Cream Dark: `#F0EBE1`
- Labels: `text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40`
- Inputs: `px-4 py-3 border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors`
- Cards: `bg-white border border-cream-dark p-6`
- Primary button: `btn-primary`
- Secondary button: `btn-navy`

---

## PART A: Campaign Builder Improvements

### 1. Fix the default `from_email` in NewEmailCampaign.jsx

The current default is `hello@conciergenursebusiness.com` (wrong domain). Change it to:
- `from_name`: `Concierge Nurse Business Society`
- `from_email`: `hello@conciergenursesociety.com`

### 2. Add Email Preview to NewEmailCampaign.jsx

Below the HTML body textarea, add a **live preview panel** that renders the HTML the user types.

- Add a toggle or tab: "Code" / "Preview"
- "Code" shows the textarea (current behavior)
- "Preview" renders the HTML in a sandboxed div with `dangerouslySetInnerHTML`
- Wrap the preview in a container styled like an email client (white bg, max-width 600px, centered, light border)

### 3. Add Personalization Buttons to NewEmailCampaign.jsx

Above the email body textarea, add a row of small buttons that insert personalization tokens:
- `{firstName}` — inserts at cursor position
- `{lastName}`
- `{email}`

When clicked, insert the token at the current cursor position in the textarea. If no cursor position, append to end.

### 4. Add "Send Test Email" to NewEmailCampaign.jsx

Add a "Send Test Email" button in the right sidebar (above the main Send/Draft buttons):
- Clicking it opens a small inline form asking for a test email address
- Sends a single email via a new serverless function `api/send-test-email.js`
- The test email uses the current form values (subject, from, body) but sends to the entered test address only
- Shows success/error feedback inline
- Does NOT save a campaign or affect the database — purely for preview

Create `api/send-test-email.js`:
```js
// Accepts: { to, subject, from_name, from_email, body }
// Sends one email via Resend, personalizing {firstName} as "Test" and {lastName} as "User" and {email} as the to address
// Returns 200 on success, 400/500 on error
```

### 5. Add "Duplicate Campaign" to CampaignDetail.jsx

On the campaign detail page, add a "Duplicate" button next to the header:
- Creates a copy of the campaign with `status: 'draft'` and name `"{original name} (Copy)"`
- Copies subject, from_name, from_email, body, recipient_tag_ids
- Redirects to the new campaign's detail page

### 6. Add "Edit Draft" capability

On the campaign detail page, if the campaign status is `draft`:
- Show an "Edit" button that navigates to an edit page
- Create `src/pages/admin/EditEmailCampaign.jsx` — same layout as NewEmailCampaign but pre-filled with the existing campaign data
- On save: updates the existing campaign row instead of inserting a new one
- Add route: `/admin/campaigns/email/:id/edit`

### 7. Add "Delete Campaign" to CampaignDetail.jsx

Add a "Delete" button (danger style) on the campaign detail page:
- Shows confirmation: "Are you sure? This cannot be undone."
- Deletes from `campaigns`, `campaign_stats`, and `campaign_recipients` (cascade should handle this)
- Redirects to `/admin/campaigns`

### 8. Add "Resend to Failed" on CampaignDetail.jsx

For sent campaigns, if `bounced > 0`:
- Show a "Retry Failed" button
- Calls the send-campaign serverless function again but only for contacts whose `campaign_recipients.status` is not 'sent'
- Updates stats accordingly

### 9. Improve Campaigns List Page

In `src/pages/admin/Campaigns.jsx`:
- Add a `sending` status color: `bg-amber-50 text-amber-700 border-amber-200`
- Show `sent_at` date in the table if the campaign has been sent
- Add a "Delete" action (small trash icon) on each row with confirmation

### 10. Add Email Templates

Add a templates section to the New Email Campaign page (and Edit page):
- Above the body textarea, add a "Templates" dropdown
- Hardcode 4 starter templates:

**Template 1: "Simple Announcement"**
```html
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
  <h1 style="color: #0A1628; font-size: 28px; margin-bottom: 16px;">Announcement Title</h1>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi {firstName},</p>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">Your message goes here. Share your news, update, or announcement with your community.</p>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">Best,<br>Tracy Pekurny<br>Concierge Nurse Business Society</p>
</div>
```

**Template 2: "Event / Workshop Invite"**
```html
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
  <div style="text-align: center; margin-bottom: 32px;">
    <p style="color: #C9A84C; font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">You're Invited</p>
    <h1 style="color: #0A1628; font-size: 32px; margin: 8px 0;">Event Name Here</h1>
    <p style="color: #6B7280; font-size: 16px;">Date & Time</p>
  </div>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi {firstName},</p>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">You're invited to an exclusive event. Describe what they'll learn, who it's for, and why they should attend.</p>
  <div style="text-align: center; margin: 32px 0;">
    <a href="#" style="background: #C9A84C; color: #0A1628; padding: 14px 32px; text-decoration: none; font-weight: bold; font-size: 14px; letter-spacing: 1px;">REGISTER NOW</a>
  </div>
  <p style="color: #999; font-size: 13px; text-align: center;">Concierge Nurse Business Society</p>
</div>
```

**Template 3: "Newsletter"**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #0A1628; padding: 32px; text-align: center;">
    <h1 style="color: #C9A84C; font-size: 24px; margin: 0;">Concierge Nurse Business Society</h1>
    <p style="color: rgba(255,255,255,0.5); font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-top: 8px;">Newsletter</p>
  </div>
  <div style="padding: 32px 20px;">
    <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi {firstName},</p>
    <p style="color: #333; font-size: 16px; line-height: 1.6;">Here's what's new this week:</p>
    <h2 style="color: #0A1628; font-size: 20px; margin-top: 24px;">Update 1</h2>
    <p style="color: #333; font-size: 16px; line-height: 1.6;">Description of the first update or news item.</p>
    <h2 style="color: #0A1628; font-size: 20px; margin-top: 24px;">Update 2</h2>
    <p style="color: #333; font-size: 16px; line-height: 1.6;">Description of the second update or news item.</p>
    <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 32px 0;">
    <p style="color: #999; font-size: 13px; text-align: center;">Concierge Nurse Business Society<br>conciergenursesociety.com</p>
  </div>
</div>
```

**Template 4: "Accelerator Enrollment Open"**
```html
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
  <h1 style="color: #0A1628; font-size: 28px; text-align: center;">Enrollment Is Open</h1>
  <div style="width: 40px; height: 2px; background: #C9A84C; margin: 16px auto;"></div>
  <p style="color: #333; font-size: 16px; line-height: 1.6; text-align: center;">The Concierge Nurse Business Method Accelerator</p>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi {firstName},</p>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">The next cohort of the Accelerator is now open for enrollment. This is a 6-week live program where you build your entire concierge nursing business from the ground up.</p>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">Spots are limited. If you've been waiting for the right time, this is it.</p>
  <div style="text-align: center; margin: 32px 0;">
    <a href="https://www.conciergenursesociety.com/accelerator" style="background: #C9A84C; color: #0A1628; padding: 14px 32px; text-decoration: none; font-weight: bold; font-size: 14px; letter-spacing: 1px;">ENROLL NOW</a>
  </div>
  <p style="color: #333; font-size: 16px; line-height: 1.6;">See you inside,<br>Tracy Pekurny</p>
</div>
```

When a template is selected from the dropdown, replace the body textarea content with the template HTML. Show a confirmation if the body is not empty ("Replace current content?").

### 11. Update the serverless function to support all personalization tokens

In `api/send-campaign.js`, the current code only replaces `{firstName}`. Update it to also replace:
- `{lastName}` → `contact.last_name || ''`
- `{email}` → `contact.email`

---

## PART B: Unsubscribe System

Every marketing email MUST have an unsubscribe link (CAN-SPAM law). Build the complete unsubscribe flow.

### 12. Auto-inject unsubscribe footer into all campaign emails

In `api/send-campaign.js`, before sending each email, append an unsubscribe footer to the HTML body:

```html
<div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E7EB; text-align: center;">
  <p style="color: #999; font-size: 12px; line-height: 1.5;">
    Concierge Nurse Business Society<br>
    <a href="https://www.conciergenursesociety.com/api/unsubscribe?id={CONTACT_ID}&campaign={CAMPAIGN_ID}" style="color: #999; text-decoration: underline;">Unsubscribe</a>
  </p>
</div>
```

Replace `{CONTACT_ID}` and `{CAMPAIGN_ID}` with actual values for each recipient.

### 13. Create unsubscribe serverless function

Create `api/unsubscribe.js`:

```
GET /api/unsubscribe?id={contact_id}&campaign={campaign_id}
```

Logic:
1. Validate that `id` (contact_id) is provided
2. Update the contact's `status` to `unsubscribed` in the `contacts` table
3. If `campaign` param is provided, increment `unsubscribed` count in `campaign_stats` for that campaign
4. Log activity on the contact: type `unsubscribe`, description "Unsubscribed from emails"
5. Return a simple, styled HTML page (not JSON) confirming the unsubscribe:
   - White page, centered content
   - Heading: "You've been unsubscribed"
   - Message: "You will no longer receive marketing emails from Concierge Nurse Business Society."
   - Small link: "Return to website" → `https://www.conciergenursesociety.com`
   - Style it with inline CSS matching the brand (navy heading, clean sans-serif font)

### 14. Exclude unsubscribed contacts from campaign sends

In `api/send-campaign.js`, when fetching contacts to send to, add a filter to exclude contacts where `status = 'unsubscribed'`:

```js
const { data: contacts } = await supabase
  .from('contacts')
  .select('id, email, first_name, last_name')
  .in('id', contactIds)
  .not('email', 'is', null)
  .neq('status', 'unsubscribed');  // ADD THIS
```

---

## PART C: Open & Click Tracking

### 15. Open tracking via tracking pixel

In `api/send-campaign.js`, inject a tracking pixel into each email before sending:

```html
<img src="https://www.conciergenursesociety.com/api/track/open?rid={RECIPIENT_ID}" width="1" height="1" style="display:none;" />
```

Where `{RECIPIENT_ID}` is the `campaign_recipients.id` for that specific send.

Create `api/track/open.js` (Vercel serverless function):

```
GET /api/track/open?rid={recipient_id}
```

Logic:
1. Look up the `campaign_recipients` row by `rid`
2. If `opened_at` is null, set it to `now()` (first open)
3. Increment the `opened` count in `campaign_stats` for that campaign (only on first open)
4. Return a 1x1 transparent GIF:
   ```js
   res.setHeader('Content-Type', 'image/gif');
   res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
   // 1x1 transparent GIF bytes
   const pixel = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
   return res.status(200).send(pixel);
   ```

### 16. Click tracking via redirect

In `api/send-campaign.js`, wrap all `<a href="...">` links in the email body with a tracking redirect URL before sending. Replace:

```
href="https://example.com/page"
```

With:

```
href="https://www.conciergenursesociety.com/api/track/click?rid={RECIPIENT_ID}&url={ENCODED_ORIGINAL_URL}"
```

Use a regex to find and replace all `href="..."` values in the HTML body (except the unsubscribe link — don't wrap that one).

Create `api/track/click.js` (Vercel serverless function):

```
GET /api/track/click?rid={recipient_id}&url={encoded_url}
```

Logic:
1. Decode the `url` parameter
2. Look up the `campaign_recipients` row by `rid`
3. If `clicked_at` is null, set it to `now()` (first click)
4. Increment the `clicked` count in `campaign_stats` for that campaign (only on first click)
5. Redirect (302) to the decoded URL

### 17. Make sure open/click stats show up on CampaignDetail.jsx

The CampaignDetail page already reads from `campaign_stats`. Since the tracking functions update those stats, the detail page should automatically show the correct open/click/delivery rates. Verify this works — no changes should be needed on the frontend unless the stats aren't refreshing.

---

## PART D: Email Sequences (Automations)

This is the core feature that replaces Flodesk's automation workflows. Tracy creates a sequence like "Accelerator Welcome Series" — when a contact gets a specific tag, they enter the sequence and receive timed emails automatically.

### 18. Database tables for sequences

Create a migration SQL file at `supabase-sequences-migration.sql`:

```sql
-- Email sequences (automations)
CREATE TABLE sequences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  trigger_tag_id UUID REFERENCES tags(id) ON DELETE SET NULL,
  from_name TEXT DEFAULT 'Concierge Nurse Business Society',
  from_email TEXT DEFAULT 'hello@conciergenursesociety.com',
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Individual emails in a sequence
CREATE TABLE sequence_emails (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sequence_id UUID REFERENCES sequences(id) ON DELETE CASCADE NOT NULL,
  position INTEGER NOT NULL DEFAULT 0,
  subject TEXT NOT NULL,
  body TEXT NOT NULL DEFAULT '',
  delay_days INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tracks which contacts are in which sequences and where they are
CREATE TABLE sequence_enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sequence_id UUID REFERENCES sequences(id) ON DELETE CASCADE NOT NULL,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE NOT NULL,
  current_position INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active',
  enrolled_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ,
  UNIQUE(sequence_id, contact_id)
);

-- Tracks which sequence emails have been sent to which contacts
CREATE TABLE sequence_sends (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sequence_email_id UUID REFERENCES sequence_emails(id) ON DELETE CASCADE NOT NULL,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT now(),
  opened_at TIMESTAMPTZ,
  clicked_at TIMESTAMPTZ,
  UNIQUE(sequence_email_id, contact_id)
);

-- Indexes
CREATE INDEX sequence_enrollments_status_idx ON sequence_enrollments (status);
CREATE INDEX sequence_enrollments_sequence_idx ON sequence_enrollments (sequence_id);
CREATE INDEX sequence_sends_email_idx ON sequence_sends (sequence_email_id);

-- RLS
ALTER TABLE sequences ENABLE ROW LEVEL SECURITY;
ALTER TABLE sequence_emails ENABLE ROW LEVEL SECURITY;
ALTER TABLE sequence_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE sequence_sends ENABLE ROW LEVEL SECURITY;

-- Anon can insert enrollments (auto-triggered from form submissions)
CREATE POLICY "Anon can insert sequence_enrollments" ON sequence_enrollments FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can select sequences" ON sequences FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can select sequence_enrollments" ON sequence_enrollments FOR SELECT TO anon USING (true);

-- Auth full access
CREATE POLICY "Auth full access sequences" ON sequences FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access sequence_emails" ON sequence_emails FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access sequence_enrollments" ON sequence_enrollments FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Auth full access sequence_sends" ON sequence_sends FOR ALL TO authenticated USING (true) WITH CHECK (true);
```

Print this SQL to the console so it's easy to copy.

### 19. Auto-enroll contacts into sequences

In `src/lib/api.js`, add a function `enrollInSequences(contactId)` that runs after a tag is assigned:

```js
async function enrollInSequences(contactId) {
  // Get all tags for this contact
  const { data: contactTags } = await supabase
    .from('contact_tags')
    .select('tag_id')
    .eq('contact_id', contactId);

  const tagIds = (contactTags || []).map(ct => ct.tag_id);

  // Find active sequences triggered by any of these tags
  const { data: sequences } = await supabase
    .from('sequences')
    .select('id, trigger_tag_id')
    .eq('status', 'active')
    .in('trigger_tag_id', tagIds);

  if (!sequences || sequences.length === 0) return;

  // Enroll in each (skip if already enrolled)
  for (const seq of sequences) {
    const { data: existing } = await supabase
      .from('sequence_enrollments')
      .select('id')
      .eq('sequence_id', seq.id)
      .eq('contact_id', contactId)
      .single();

    if (!existing) {
      await supabase.from('sequence_enrollments').insert({
        sequence_id: seq.id,
        contact_id: contactId,
        current_position: 0,
        status: 'active',
      });
    }
  }
}
```

Call `enrollInSequences(contactId)` at the end of each form submission function (after `assignTag` and `assignPipeline`).

### 20. Sequence processing serverless function

Create `api/process-sequences.js` — this is the cron job that sends sequence emails:

Logic:
1. Fetch all active sequence enrollments where `status = 'active'`
2. For each enrollment, get the sequence's emails ordered by position
3. Determine which email is next based on `current_position`
4. Check if enough days have passed since enrollment (for position 0) or since the last send (for position > 0) based on `delay_days`
5. If it's time to send:
   - Send the email via Resend (with personalization, unsubscribe footer, tracking pixel, click tracking)
   - Insert a `sequence_sends` row
   - Update `current_position` on the enrollment
   - If this was the last email in the sequence, set enrollment `status = 'completed'` and `completed_at = now()`
6. Skip contacts where `contacts.status = 'unsubscribed'`
7. Return a summary: `{ processed: N, sent: N, skipped: N, completed: N }`

This function should be called via a Vercel cron job. Create `vercel.json` cron config:

IMPORTANT: Read the current `vercel.json` first and merge the cron config into it. The file already has rewrite rules. Add:

```json
"crons": [
  {
    "path": "/api/process-sequences",
    "schedule": "0 */4 * * *"
  }
]
```

This runs every 4 hours. The function processes all pending sequence emails across all active sequences.

### 21. Sequences admin page

Create `src/pages/admin/Sequences.jsx`:

**Route:** `/admin/sequences`

**Features:**
- List all sequences as cards showing: name, description, trigger tag, status (draft/active/paused), number of enrolled contacts, number of emails in the sequence
- "Create Sequence" button → navigates to `/admin/sequences/new`
- Click a sequence card → navigates to `/admin/sequences/:id`

Add "Sequences" to the sidebar nav in `src/components/AdminLayout.jsx` with a `Workflow` icon from lucide-react. Place it after Campaigns.

### 22. Create/Edit Sequence page

Create `src/pages/admin/SequenceEditor.jsx`:

**Route:** `/admin/sequences/new` and `/admin/sequences/:id`

**Layout:**

Top section:
- Sequence name (text input)
- Description (text input, optional)
- Trigger tag (dropdown of all tags — "When a contact gets this tag, start the sequence")
- From name and from email (text inputs, default to the brand values)
- Status toggle: Draft / Active

Email list section (below):
- Visual vertical timeline showing each email in the sequence
- Each email card shows: position number, subject line, delay ("Day 0", "Day 3", "Day 7"), a preview snippet of the body
- "Add Email" button at the bottom of the timeline
- Click an email card to expand/edit it inline:
  - Subject (text input)
  - Delay days (number input — "Send X days after enrollment" for first email, "Send X days after previous email" for others)
  - Body (textarea with the same personalization buttons and template dropdown as campaigns)
  - Delete button to remove the email from the sequence
- Drag to reorder emails (or simple up/down buttons)

Save button: saves the sequence and all its emails. If editing, updates existing rows.

### 23. Sequence Detail page

Create `src/pages/admin/SequenceDetail.jsx`:

**Route:** `/admin/sequences/:id`

**Shows:**
- Sequence name, description, trigger tag, status
- Stats: total enrolled, active, completed, emails sent
- Email timeline with send counts per step
- List of enrolled contacts with their current position and status
- Activate/Pause/Delete buttons

### 24. Add routes

Add to `src/App.jsx` under the admin protected route:
```jsx
<Route path="sequences" element={<AdminSequences />} />
<Route path="sequences/new" element={<AdminSequenceEditor />} />
<Route path="sequences/:id" element={<AdminSequenceDetail />} />
<Route path="sequences/:id/edit" element={<AdminSequenceEditor />} />
```

All lazy loaded.

---

## Important Rules

1. This is **Vite + React, NOT Next.js**. No `app/` directory, no server components. All admin pages are client-side React with direct Supabase calls.
2. **JavaScript only** — no TypeScript. All files are `.jsx`.
3. Serverless functions go in the `api/` directory at the project root (Vercel convention). For nested paths like `api/track/open.js`, create the subdirectory.
4. `RESEND_API_KEY` is server-side only (no `VITE_` prefix). Only use it in `api/` serverless functions.
5. The Supabase client on the frontend uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Serverless functions use the same env vars.
6. **Match the existing design system exactly.** Look at existing admin pages for class patterns.
7. **Run `npm run build` after all changes** to verify no compilation errors.
8. **Do not modify any public-facing pages** (Home, About, Contact, etc.). Only admin pages and `api/` serverless functions.
9. The verified sending domain is `conciergenursesociety.com`. Default from email should be `hello@conciergenursesociety.com`.
10. Add any new routes to `src/App.jsx` using lazy imports under the admin protected route.
11. When creating migration SQL files, also print the SQL to the console so it's easy to copy.
12. When updating `vercel.json`, read it first and merge — don't overwrite the existing rewrite rules.
13. Every marketing email MUST include the unsubscribe footer. Never send without it.
14. After all changes, commit and push to `origin main`.

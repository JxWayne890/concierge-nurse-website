# CRM Webhook Payload Contract — Website → CRM Integration

Use this prompt alongside `CRM-BUILD-PROMPT.md`. This defines the exact payloads the public marketing website at `conciergenursebusiness.com` will POST to the CRM at `crm.conciergenursebusiness.com`. Your job is to build the CRM webhook intake routes to receive, validate, deduplicate, and store these payloads.

---

## PROMPT START

The public website has **6 forms** across its pages. They submit to **4 CRM webhook endpoints**. Every payload includes shared metadata fields that the frontend injects automatically — users never fill these in.

---

## Shared Metadata (auto-attached to every payload)

Every single POST from the website includes these fields at the top level:

```json
{
  "source": "string — identifies which form sent it (see per-endpoint values below)",
  "submitted_at": "string — ISO 8601 timestamp, e.g. 2026-04-12T14:30:00Z",
  "page_url": "string — window.location.pathname, e.g. /contact",
  "utm_source": "string | null — from URL query params",
  "utm_medium": "string | null — from URL query params",
  "utm_campaign": "string | null — from URL query params",
  "referrer": "string | null — document.referrer"
}
```

These fields must be stored on the lead record or in the activity log. UTM data should be preserved for attribution reporting.

---

## Endpoint 1: Contact Form

**Route:** `POST /api/webhooks/contact-form`
**Origin:** Contact page (`/contact`)
**Source value:** `"contact_form"`

```json
{
  "source": "contact_form",
  "submitted_at": "2026-04-12T14:30:00Z",
  "page_url": "/contact",
  "utm_source": null,
  "utm_medium": null,
  "utm_campaign": null,
  "referrer": null,
  "first_name": "string — required",
  "last_name": "string — required",
  "email": "string — required, must be valid email",
  "interest": "string — required, one of the enum values below",
  "message": "string — optional, free text"
}
```

**`interest` enum values (exactly these strings):**
- `clarity_consult`
- `accelerator_cohort`
- `toolkits_resources`
- `private_coaching`
- `business_consulting`
- `vip_bridge_session`
- `general_question`
- `other`

**CRM behavior on receipt:**
1. Validate: `email`, `first_name`, `last_name`, and `interest` are required. `interest` must match enum. Return `400` with field-level errors if invalid.
2. Check if a contact with this `email` already exists.
   - **New contact:** Create lead with status `new`, source `form_submission`, tag `Contact Form Lead`. Set `interest` field. Store `message` as first entry in notes. Return `201`.
   - **Existing contact:** Update `first_name`/`last_name` if currently empty. Append tag `Contact Form Lead` if not present. Update `interest` if different. Append `message` to notes with timestamp. Log as new activity. Return `200`.
3. Log the raw payload in `webhook_logs` table regardless of outcome.

---

## Endpoint 2: Consulting Inquiry

**Route:** `POST /api/webhooks/consulting-inquiry`
**Origin:** Consulting page (`/consulting#inquire`)
**Source value:** `"consulting_inquiry"`

```json
{
  "source": "consulting_inquiry",
  "submitted_at": "2026-04-12T14:30:00Z",
  "page_url": "/consulting",
  "utm_source": null,
  "utm_medium": null,
  "utm_campaign": null,
  "referrer": null,
  "full_name": "string — required",
  "email": "string — required, must be valid email",
  "business_name": "string — optional",
  "annual_revenue": "string — optional, free text (e.g. '$80,000', '100k', 'under 50k')",
  "biggest_challenge": "string — optional, free text"
}
```

**CRM behavior on receipt:**
1. Validate: `full_name` and `email` are required. Return `400` if missing.
2. Parse `full_name` into `first_name` and `last_name` — split on the first space. If only one word, set it as `first_name` and leave `last_name` empty.
3. Check for existing contact by `email`.
   - **New contact:** Create lead with status `new`, source `form_submission`, lifecycle stage `Established Owner`, tags `["Consulting Inquiry"]`. Store `business_name` and `annual_revenue` as contact fields. Store `biggest_challenge` as first note entry. Return `201`.
   - **Existing contact:** Merge new data into existing record (don't overwrite non-empty fields with empty ones). Append tag `Consulting Inquiry`. Append `biggest_challenge` to notes. Update `lifecycle_stage` to `Established Owner` if it was previously a lower stage. Return `200`.
4. Log raw payload in `webhook_logs`.

---

## Endpoint 3: Accelerator Waitlist

**Route:** `POST /api/webhooks/accelerator-waitlist`
**Origin:** Accelerator page (`/accelerator#enroll`)
**Source value:** `"accelerator_waitlist"`

```json
{
  "source": "accelerator_waitlist",
  "submitted_at": "2026-04-12T14:30:00Z",
  "page_url": "/accelerator",
  "utm_source": null,
  "utm_medium": null,
  "utm_campaign": null,
  "referrer": null,
  "full_name": "string — required",
  "email": "string — required, must be valid email"
}
```

**CRM behavior on receipt:**
1. Validate: `full_name` and `email` are required. Return `400` if missing.
2. Parse `full_name` into `first_name` / `last_name` (same logic as consulting).
3. Check for existing contact by `email`.
   - **New contact:** Create lead with status `new`, source `form_submission`, lifecycle stage `Builder`, tags `["Accelerator Waitlist"]`. Return `201`.
   - **Existing contact:** Append tag `Accelerator Waitlist` if not present. Update lifecycle stage to `Builder` if currently lower. Log activity "Joined accelerator waitlist". Return `200`.
4. Log raw payload in `webhook_logs`.

---

## Endpoint 4: Newsletter / Email Subscribe

**Route:** `POST /api/webhooks/subscribe`
**Origin:** Three different forms across the site
**Source values:** `"community_page"` | `"community_section"` | `"footer_newsletter"`

```json
{
  "source": "community_page | community_section | footer_newsletter",
  "submitted_at": "2026-04-12T14:30:00Z",
  "page_url": "string — varies, could be any page (footer form is site-wide)",
  "utm_source": null,
  "utm_medium": null,
  "utm_campaign": null,
  "referrer": null,
  "first_name": "string | null — only the community_page form collects this",
  "email": "string — required, must be valid email"
}
```

**Which forms map to which source:**
| Form Location | `source` value | Fields collected |
|---|---|---|
| `/community` page signup | `community_page` | `first_name` + `email` |
| `CommunitySection` component (appears on Home page) | `community_section` | `email` only |
| `Footer` newsletter (appears on every page) | `footer_newsletter` | `email` only |

**CRM behavior on receipt:**
1. Validate: `email` is required. Return `400` if missing or invalid format.
2. Check for existing contact by `email`.
   - **New contact:** Create lead with status `new`, source `form_submission`. Set `first_name` if provided. Assign tag based on source: `Community Signup` for community sources, `Newsletter Subscriber` for footer. Return `201`.
   - **Existing contact:** Append the appropriate tag if not present. Update `first_name` if provided and currently empty on the record. Log activity. Return `200`.
3. Log raw payload in `webhook_logs`.

---

## Response Format (all endpoints)

Every endpoint should return consistent JSON responses:

**Success (new contact):**
```json
{
  "status": "created",
  "contact_id": "uuid",
  "message": "Contact created successfully"
}
```
HTTP `201`

**Success (existing contact updated):**
```json
{
  "status": "updated",
  "contact_id": "uuid",
  "message": "Existing contact updated"
}
```
HTTP `200`

**Validation error:**
```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": {
    "email": "Valid email is required",
    "first_name": "First name is required"
  }
}
```
HTTP `400`

**Auth error (bad or missing webhook secret):**
```json
{
  "status": "error",
  "message": "Unauthorized"
}
```
HTTP `401`

---

## Security

Every request from the website will include this header:

```
X-Webhook-Secret: <shared secret>
```

The CRM must validate this header on every webhook route. If missing or incorrect, return `401`. Store the secret in the environment variable `WEBHOOK_SECRET`. For the frontend-only build phase, stub the check but make sure the middleware structure is in place.

---

## Lifecycle Stage Hierarchy

When updating lifecycle stage, only move a contact *up*, never down. The hierarchy from lowest to highest:

1. `Explorer` — just subscribed or signed up
2. `DIYer` — downloaded toolkits / resources
3. `Builder` — on accelerator waitlist or enrolled
4. `Established Owner` — submitted consulting inquiry (already has a business)

If a contact is already `Established Owner` and joins the accelerator waitlist, keep them as `Established Owner`.

---

## Deduplication Rules

- **Primary key for dedup:** `email` (case-insensitive, always store lowercase)
- Never create a second contact with the same email
- On duplicate, merge data — fill empty fields, never overwrite populated fields with empty/null values
- Append new tags, don't replace existing ones
- Every touchpoint (form submission) gets logged as an activity entry even if the contact already exists

---

## Activity Log Entries

Every webhook hit should create an activity log entry on the contact:

```json
{
  "contact_id": "uuid",
  "type": "form_submission",
  "description": "Submitted contact form with interest: Clarity Consult",
  "metadata": {
    "source": "contact_form",
    "page_url": "/contact",
    "utm_source": null,
    "utm_medium": null,
    "utm_campaign": null
  },
  "created_at": "2026-04-12T14:30:00Z"
}
```

This creates a full timeline of every interaction a lead has had with the website.

---

## Database Tables Involved

These payloads touch the following tables from the main CRM schema (defined in `CRM-BUILD-PROMPT.md`):

- `contacts` — create or update the lead record
- `contact_segments` — assign tags via the junction table
- `segments` — reference existing tags or auto-create new ones
- `notes` — store `message` and `biggest_challenge` fields
- `activity_log` — log every form submission as a timeline event
- `webhook_logs` — store the raw incoming payload for debugging

---

## Testing

For the frontend-only build phase, create a simple webhook testing page at `/settings/webhooks/test` that:
1. Has a dropdown to select which endpoint to test
2. Pre-fills the form with example payload data
3. Sends the POST to the local API route
4. Displays the response (status code + body)

This lets the user verify the webhook logic works before connecting the live website.

---

## PROMPT END

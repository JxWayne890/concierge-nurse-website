# SEO/AEO Build Prompt — Concierge Nurse Business Society (300 Pages)

Use this prompt in Claude Code terminal to build out the full SEO/AEO resource hub.

---

## PROMPT START

You are building a comprehensive SEO and AEO (Answer Engine Optimization) resource hub for the **Concierge Nurse Business Society** website. This is an existing Vite + React + Tailwind CSS v4 site with React Router. The site helps registered nurses build, launch, and scale independent concierge nursing businesses.

The goal: make this website the #1 result on Google, ChatGPT, Perplexity, and Google AI Overviews for every search query related to starting, running, and scaling a concierge nursing business. This is a very small niche with weak competition — there is no reason this site should not dominate every keyword.

**Owner:** Tracy Pekurny — registered nurse, entrepreneur, business strategist. She built and runs her own concierge nursing business and now teaches other nurses to do the same through coaching, a 6-week Accelerator cohort, toolkits, and consulting.

**Email:** hello@conciergenursebusiness.com

---

## IMPORTANT RULES

1. **Do NOT make up statistics, income claims, testimonials, or case studies.** Any content that requires Tracy's specific expertise, real numbers, or personal experience must be marked with `{/* TRACY TO FILL: [description of what's needed] */}` in the JSX.
2. **All content must be factual and general knowledge.** You can write about publicly known information (what HIPAA is, what an LLC vs PLLC is, general business practices, what concierge nursing is, etc.) but do not fabricate specific data points.
3. **Match the existing site's design system exactly.** Use the same Tailwind classes, brand colors, fonts, and component patterns already in the codebase.
4. **Every page must be optimized for both traditional SEO and AI answer engines.**
5. **Do NOT touch or modify any existing pages or components.** Only add new files.

---

## PHASE 1: TECHNICAL SEO FOUNDATION

### 1A. Install react-helmet-async

Install `react-helmet-async` and wrap the app in `HelmetProvider` in `main.jsx`. Create a reusable `<SEO />` component at `src/components/SEO.jsx` that accepts:

```jsx
<SEO
  title="Page Title | Concierge Nurse Business Society"
  description="Meta description for this page (150-160 chars)"
  canonical="/page-slug"
  type="article" // or "website"
  schema={jsonLdObject} // optional JSON-LD structured data
/>
```

The component should render:
- `<title>` tag
- `<meta name="description">`
- `<link rel="canonical">`
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`
- Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- JSON-LD `<script type="application/ld+json">` block if schema prop is provided

Default `og:image` should be `/og-default.jpg` (we will add this image later — just reference the path).

### 1B. Add SEO component to ALL existing pages

Add the `<SEO />` component to every existing page with unique, keyword-optimized titles and descriptions:

| Page | Title | Description |
|------|-------|-------------|
| Home | Concierge Nurse Business Society - Build, Launch & Scale Your Nursing Business | Tracy Pekurny helps registered nurses build, launch, and scale independent private-pay concierge nursing businesses through education, strategic consulting, and hands-on coaching. |
| About | About Tracy Pekurny - Concierge Nurse Business Coach & Strategist | Meet Tracy Pekurny, registered nurse and business strategist who built her own concierge nursing business and now helps other nurses do the same through proven frameworks and hands-on coaching. |
| Start Here | Start Here - Find Your Path to a Concierge Nursing Business | Whether you are exploring, building, or scaling your concierge nursing business, find the right programs, tools, and support for exactly where you are right now. |
| Accelerator | Concierge Nurse Business Accelerator - 6-Week Live Cohort Program | The Concierge Nurse Business Method Accelerator is a 6-week live cohort where you build your entire concierge nursing business using a proprietary six-step method. Five-star rated by every graduate. |
| Toolkits | Concierge Nursing Business Toolkits & Resources | Self-paced business toolkits for nurses building a concierge nursing practice. Includes the RN Concierge Business Toolkit, HIPAA Compliance Toolkit, and 2026 Concierge Nurse Planner. |
| Strategy | Strategy Sessions & Coaching - Concierge Nurse Business Society | Book a Clarity Consult, VIP Bridge session, or inquire about 1:1 private coaching. Personalized strategy and accountability for nurses building concierge nursing businesses. |
| Consulting | Business Diagnostics for Established Concierge Nurse Business Owners | The Concierge Nurse Business Diagnostic is a live 60-minute strategic session with a full written report, website analysis, and prioritized action roadmap. For established businesses only. $1,200. |
| Community | Free Concierge Nurse Business Community & Resources | Join the free Concierge Nurse Business Society community on Facebook or Heartbeat. Connect with nurses building concierge nursing businesses, access resources, and get support. |
| Contact | Contact & Book - Concierge Nurse Business Society | Book a session, ask a question, or explore how to work with Concierge Nurse Business Society. Contact Tracy Pekurny and her team. |

### 1C. Add JSON-LD Structured Data to existing pages

Add structured data to existing pages:

**Home page — Organization + Person:**
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Concierge Nurse Business Society",
    "alternateName": "CNBS",
    "description": "Business coaching and education helping registered nurses build, launch, and scale independent concierge nursing businesses",
    "url": "https://www.conciergenursebusiness.com",
    "founder": {
      "@type": "Person",
      "name": "Tracy Pekurny",
      "jobTitle": "Founder & Business Strategist",
      "description": "Registered nurse, entrepreneur, and business strategist who helps nurses build concierge nursing businesses"
    },
    "email": "hello@conciergenursebusiness.com",
    "sameAs": []
  }
]
```

**Accelerator page — Course:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "The Concierge Nurse Business Method Accelerator",
  "description": "A 6-week live cohort program where nurses build their entire concierge nursing business from the ground up using a proprietary six-step method.",
  "provider": {
    "@type": "Organization",
    "name": "Concierge Nurse Business Society"
  },
  "instructor": {
    "@type": "Person",
    "name": "Tracy Pekurny"
  },
  "courseMode": "online",
  "duration": "P6W",
  "educationalLevel": "Professional",
  "teaches": "How to build, launch, and operate a concierge nursing business"
}
```

**Toolkits page — Product schema for each toolkit.**

**Strategy page — Service schema for each service offering.**

**Consulting page — Service schema with pricing ($1,200).**

### 1D. Sitemap and Robots

Create `public/sitemap.xml` with ALL pages (existing + all 300 new resource pages). Each entry should have `<loc>`, `<lastmod>`, `<changefreq>`, and `<priority>`.

Priority hierarchy:
- Homepage: 1.0
- Existing service pages: 0.9
- Pillar resource guides: 0.8
- All other resource pages: 0.7
- State/city pages: 0.6

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://www.conciergenursebusiness.com/sitemap.xml
```

### 1E. Update index.html

Add to `<head>` in `index.html`:
- `<meta name="robots" content="index, follow">`
- `<meta name="theme-color" content="#0a1628">`
- `<link rel="canonical" href="https://www.conciergenursebusiness.com/">`
- `<meta property="og:site_name" content="Concierge Nurse Business Society">`
- `<meta property="og:locale" content="en_US">`

---

## PHASE 2: RESOURCE HUB INFRASTRUCTURE

### 2A. Resource page layout component

Create `src/components/ResourceLayout.jsx` — a reusable layout wrapper for all 300 resource pages. It should include:

- SEO component with title, description, canonical, and schema props
- Breadcrumb navigation: Home > Resources > [Category] > [Page Title]
- BreadcrumbList JSON-LD schema
- Page hero section (navy background, matching existing page style):
  - Category label (small gold uppercase text, like the existing `section-label` class)
  - H1 title
  - Gold divider
  - Subtitle/description
  - "Last Updated: [date]" text (important for AEO freshness signals)
- Content area (white background, max-w-4xl, prose-style readable layout)
- Right sidebar on desktop (sticky) with:
  - Table of contents (auto-generated from H2 headings)
  - Related resources links
  - CTA card (contextual — links to relevant Tracy service)
- Bottom section with:
  - "Related Resources" grid (3-4 related pages)
  - CTA banner (contextual to the page category)
- FAQ section at the bottom of every page (with FAQPage JSON-LD schema)

### 2B. Resource index page

Create `src/pages/Resources.jsx` at route `/resources` — the main hub page:

- Hero section matching site style
- Search bar (client-side filtering of all resources)
- Category filter tabs
- Grid of resource cards organized by category
- Each card shows: category tag, title, description preview, read time estimate
- Featured/pillar guides at the top in a larger format

### 2C. Routing

Add all 300 resource page routes to `App.jsx`. Use this URL structure:

- Pillar guides: `/resources/[slug]`
- Niche-specific: `/resources/niches/[slug]`
- Legal & compliance: `/resources/legal/[slug]`
- Operations: `/resources/operations/[slug]`
- Marketing: `/resources/marketing/[slug]`
- Financial: `/resources/financial/[slug]`
- Career transition: `/resources/career/[slug]`
- Comparisons: `/resources/compare/[slug]`
- Glossary: `/resources/glossary/[slug]`
- State-specific: `/resources/states/[state-slug]`
- City-specific: `/resources/cities/[city-slug]`
- Referral sources: `/resources/referrals/[slug]`
- Client use cases: `/resources/services/[slug]`
- Service templates: `/resources/templates/[slug]`
- Micro-guides: `/resources/guides/[slug]`
- Mindset: `/resources/mindset/[slug]`
- Procedure-specific: `/resources/procedures/[slug]`
- Day in the life: `/resources/day-in-the-life/[slug]`
- Certifications: `/resources/certifications/[slug]`
- Seasonal: `/resources/planning/[slug]`
- Best-of: `/resources/best/[slug]`
- Scaling: `/resources/scaling/[slug]`
- Industry trends: `/resources/trends/[slug]`
- Audience-specific: `/resources/for/[slug]`

### 2D. Navigation update

Add "Resources" to the Navbar between "Community" and "Contact" in the navigation links. Style it the same as existing nav items.

---

## PHASE 3: CONTENT FORMAT STANDARDS (FOR ALL 300 PAGES)

Every resource page must follow these AEO-optimized content rules:

### Structure Rules

1. **The first paragraph must directly answer the page's target question in 40-60 words.** No preamble, no "in this guide we will cover." Lead with the answer.

2. **Use the exact search query as the H1.** Example: `<h1>How to Start a Concierge Nursing Business</h1>`

3. **Use related questions as H2 headings.** Each H2 should be a question someone would ask. This maps to "People Also Ask" and AI prompt patterns.

4. **Include a "Quick Answer" box** at the top of every page — a styled callout with a 2-3 sentence direct answer. This is what AI models will extract and cite.

5. **Use comparison tables** wherever applicable. Tables are structured data that AI models extract reliably.

6. **Use numbered step lists** for any process or how-to content.

7. **End every page with an FAQ section** (minimum 5 questions per page). Wrap in FAQPage JSON-LD schema.

8. **Include a "Last Updated" date** visible on every page.

9. **Include internal links** — every resource page should link to at least 3 other resource pages and at least 1 service page (Accelerator, Toolkits, Strategy, Consulting, or Community).

10. **Include a contextual CTA** — based on the content topic, link to the most relevant Tracy offering:
    - Starting out → Accelerator or Toolkits
    - Already launched → Consulting Diagnostic
    - General → Clarity Consult
    - Legal/compliance → HIPAA Toolkit
    - Community/support → Free Community

### Styling Rules

Use these existing Tailwind classes/patterns from the codebase:

- Section labels: `<p className="section-label mb-4">Category</p>`
- H1 titles: `<h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-5">`
- Gold dividers: `<div className="gold-divider mb-6" />`
- Body text: `text-charcoal text-[0.95rem] leading-relaxed`
- Secondary text: `text-slate text-sm leading-relaxed`
- Buttons: `btn-primary`, `btn-secondary`
- Cards: `bg-cream border border-cream-dark p-8`
- Navy cards: `bg-navy p-8` with `text-white` content
- Check items: `<CheckCircle2 size={16} className="text-gold" />` with text
- Icons: Use `lucide-react` icons throughout

### Quick Answer Box Component

Create a reusable `<QuickAnswer>` component:

```jsx
<QuickAnswer>
  A concierge nurse provides private-pay, one-on-one nursing care outside of
  traditional healthcare settings. Services range from post-operative recovery
  and postpartum support to chronic disease management and executive health,
  delivered in the client's home, office, or hotel.
</QuickAnswer>
```

Style it as a cream/gold callout box that stands out from body content. This is the snippet AI models will cite.

---

## PHASE 4: ALL 300 RESOURCE PAGES

Build every page listed below as its own JSX file. Each must use the `ResourceLayout` wrapper, include the `SEO` component with a unique title/description, include FAQPage schema, and follow all content format standards above.

For content: write real, substantive content using publicly available knowledge. Mark anything that requires Tracy's specific expertise or real numbers with `{/* TRACY TO FILL: [description] */}`.

---

### CATEGORY 1: PILLAR GUIDES (10 pages)

**Directory:** `src/pages/resources/`

#### 1. what-is-a-concierge-nurse.jsx
- **Route:** `/resources/what-is-a-concierge-nurse`
- **H1:** What Is a Concierge Nurse? The Definitive Guide
- **Target keyword:** what is a concierge nurse
- **Meta description:** A concierge nurse provides private-pay, personalized nursing care outside traditional settings. Learn what concierge nurses do, who hires them, how they differ from home health and private duty nurses, and how to become one.
- **Content sections:**
  - Quick Answer box
  - What Is a Concierge Nurse? (definition, scope)
  - What Services Do Concierge Nurses Provide? (list of common services)
  - Who Hires a Concierge Nurse? (client types)
  - Concierge Nursing vs. Private Duty Nursing vs. Home Health (comparison table)
  - How Do You Become a Concierge Nurse? (career path overview)
  - How Much Do Concierge Nurses Make? (general ranges, link to pricing guide)
  - Is Concierge Nursing Right for You? (self-assessment questions)
  - FAQ (8-10 questions)
- **CTA:** Start Here path selector + Free Community
- **Schema:** Article + FAQPage
- **Internal links:** Link to comparison page, niches page, how to start page, career transition pages

#### 2. how-to-start-a-concierge-nursing-business.jsx
- **Route:** `/resources/how-to-start-a-concierge-nursing-business`
- **H1:** How to Start a Concierge Nursing Business: Complete Step-by-Step Guide
- **Target keyword:** how to start a concierge nursing business
- **Meta description:** Learn how to start a concierge nursing business step by step. Covers choosing your niche, forming your LLC or PLLC, HIPAA compliance, setting rates, getting clients, and launching your practice.
- **Content sections:**
  - Quick Answer box
  - Step 1: Choose Your Concierge Nursing Niche
  - Step 2: Validate Your Business Idea
  - Step 3: Create Your Business Plan
  - Step 4: Form Your Legal Entity (LLC vs PLLC)
  - Step 5: Get Business Insurance
  - Step 6: Set Up HIPAA Compliance
  - Step 7: Design Your Services and Packages
  - Step 8: Set Your Pricing
  - Step 9: Build Your Brand and Website
  - Step 10: Get Your First Clients
  - Common Mistakes to Avoid
  - FAQ (8-10 questions)
- **CTA:** Accelerator + Toolkits
- **Schema:** HowTo + Article + FAQPage
- **Internal links:** Link to every step's dedicated deep-dive page, niches page, legal pages, pricing guide

#### 3. hipaa-compliance-for-concierge-nurses.jsx
- **Route:** `/resources/hipaa-compliance-for-concierge-nurses`
- **H1:** HIPAA Compliance for Concierge Nurses: What You Need to Know
- **Target keyword:** HIPAA compliance concierge nurse
- **Meta description:** Do concierge nurses need to follow HIPAA? Learn when HIPAA applies to concierge nursing businesses, what compliance requires, and how to set up HIPAA-compliant systems for your private-pay nursing practice.
- **Content sections:**
  - Quick Answer box
  - Does HIPAA Apply to Concierge Nurses? (covered entity analysis)
  - When Are Cash-Pay Practices Subject to HIPAA?
  - HIPAA Requirements for Concierge Nurses (checklist format)
  - Setting Up HIPAA-Compliant Systems (email, phone, storage, documentation)
  - Common HIPAA Mistakes Concierge Nurses Make
  - HIPAA Violation Penalties (table of penalty tiers)
  - FAQ (8-10 questions)
- **CTA:** HIPAA Compliance Toolkit
- **Schema:** Article + FAQPage

#### 4. concierge-nurse-pricing-guide.jsx
- **Route:** `/resources/concierge-nurse-pricing-guide`
- **H1:** How Much Do Concierge Nurses Charge? Pricing Guide
- **Target keyword:** how much do concierge nurses charge
- **Meta description:** Learn how concierge nurses set their rates. Covers hourly pricing, package pricing, retainer models, rates by niche and geography, and how to price your concierge nursing services for profitability.
- **Content sections:**
  - Quick Answer box
  - Concierge Nurse Pricing Models (hourly vs packages vs retainer — comparison table)
  - General Rate Ranges by Service Type (table) `{/* TRACY TO FILL: specific rate ranges she recommends */}`
  - Factors That Affect Your Pricing (geography, niche, experience, cost of living)
  - How to Calculate Your Minimum Hourly Rate (formula walkthrough)
  - Pricing by Niche (table: post-op, postpartum, geriatric, executive, IV therapy, etc.)
  - Common Pricing Mistakes
  - When to Raise Your Rates
  - FAQ (8-10 questions)
- **CTA:** Clarity Consult + Toolkits
- **Schema:** Article + FAQPage

#### 5. concierge-nursing-vs-private-duty-vs-home-health.jsx
- **Route:** `/resources/concierge-nursing-vs-private-duty-vs-home-health`
- **H1:** Concierge Nursing vs. Private Duty Nursing vs. Home Health: What Is the Difference?
- **Target keyword:** concierge nursing vs private duty nursing
- **Meta description:** Understand the differences between concierge nursing, private duty nursing, and home health nursing. Compare business models, pay structures, client types, regulations, and which is right for your career.
- **Content sections:**
  - Quick Answer box
  - Overview of Each Model (definitions)
  - Side-by-Side Comparison Table (columns: concierge, private duty, home health — rows: payment, clients, schedule, income potential, autonomy, regulations, startup cost)
  - Which Model Is Right for You? (decision framework)
  - Can You Combine Models?
  - FAQ (6-8 questions)
- **CTA:** Start Here path selector
- **Schema:** Article + FAQPage

#### 6. how-to-get-concierge-nursing-clients.jsx
- **Route:** `/resources/how-to-get-concierge-nursing-clients`
- **H1:** How to Get Your First Concierge Nursing Clients: A Step-by-Step Plan
- **Target keyword:** how to get concierge nursing clients
- **Meta description:** Learn proven strategies to get your first concierge nursing clients. Covers physician referrals, networking, social media marketing, Google Business Profile, and building a client acquisition system.
- **Content sections:**
  - Quick Answer box
  - Why Getting Clients Feels Hard (and why it is actually simpler than you think)
  - Strategy 1: Build Physician Referral Relationships
  - Strategy 2: Set Up Your Google Business Profile
  - Strategy 3: Network in Your Local Healthcare Community
  - Strategy 4: Use Social Media Strategically
  - Strategy 5: Ask for Referrals and Testimonials
  - Strategy 6: Create a Simple Website That Converts
  - Strategy 7: Join Local Business Groups and Chambers of Commerce
  - The First 30 Days: A Client Acquisition Timeline
  - FAQ (6-8 questions)
- **CTA:** Accelerator + Clarity Consult
- **Schema:** HowTo + Article + FAQPage

#### 7. concierge-nursing-startup-costs.jsx
- **Route:** `/resources/concierge-nursing-startup-costs`
- **H1:** Concierge Nurse Business Startup Costs: What You Will Actually Spend
- **Target keyword:** concierge nurse business startup costs
- **Meta description:** How much does it cost to start a concierge nursing business? Detailed breakdown of startup costs including legal formation, insurance, supplies, marketing, technology, and ongoing monthly expenses.
- **Content sections:**
  - Quick Answer box
  - Total Startup Cost Range (summary table)
  - One-Time Startup Costs breakdown (legal, insurance, branding, website, supplies, certifications)
  - Ongoing Monthly Costs breakdown (insurance, software, marketing, phone, mileage)
  - Cost by Niche (table — some niches require more equipment)
  - Ways to Start on a Budget
  - What NOT to Spend Money on Early
  - FAQ (6-8 questions)
- **CTA:** Toolkits + Accelerator
- **Schema:** Article + FAQPage

#### 8. concierge-nursing-niches-guide.jsx
- **Route:** `/resources/concierge-nursing-niches`
- **H1:** Concierge Nursing Niches: Which One Is Right for You?
- **Target keyword:** concierge nursing niches
- **Meta description:** Explore the most popular concierge nursing niches including post-op recovery, postpartum care, geriatric care, executive health, IV therapy, and more. Compare startup costs, income potential, and ideal nurse background for each.
- **Content sections:**
  - Quick Answer box
  - Overview of the Concierge Nursing Market
  - Niche Comparison Table (columns: niche, ideal background, startup cost, income potential, competition level, demand trend)
  - Deep dive on each niche (1-2 paragraphs each with link to dedicated niche page):
    - Post-Op Recovery, Postpartum, Geriatric/Aging in Place, Executive Health, Pediatric Special Needs, Travel Medicine, IV Therapy, Chronic Disease Management, Medication Management, Luxury/VIP, Wellness & Preventive, Post-Discharge/Transitional Care
  - How to Choose Your Niche (decision framework)
  - Can You Serve Multiple Niches?
  - FAQ (6-8 questions)
- **CTA:** Clarity Consult + Accelerator
- **Schema:** Article + FAQPage

#### 9. concierge-nurse-business-plan.jsx
- **Route:** `/resources/concierge-nurse-business-plan`
- **H1:** Concierge Nurse Business Plan: What to Include and How to Write One
- **Target keyword:** concierge nurse business plan
- **Meta description:** Learn how to write a concierge nurse business plan. Covers executive summary, market analysis, services, pricing strategy, marketing plan, financial projections, and operations for your nursing practice.
- **Content sections:**
  - Quick Answer box
  - Do You Need a Business Plan?
  - Business Plan Sections (numbered walkthrough of each section)
  - Executive Summary, Company Description, Market Analysis, Services & Pricing, Marketing Strategy, Operations Plan, Financial Projections
  - Business Plan Template Outline (downloadable-ready format)
  - Common Mistakes in Nursing Business Plans
  - FAQ (6-8 questions)
- **CTA:** Toolkits + Clarity Consult
- **Schema:** Article + FAQPage

#### 10. concierge-nursing-faq.jsx
- **Route:** `/resources/concierge-nursing-faq`
- **H1:** Concierge Nursing Business FAQ: Everything You Need to Know
- **Target keyword:** concierge nursing business FAQ
- **Meta description:** Answers to the most common questions about starting and running a concierge nursing business. Covers licensing, costs, income, HIPAA, legal structure, getting clients, and more.
- **Content sections:**
  - Quick Answer box (overview)
  - 30+ questions organized by category: Getting Started, Legal & Compliance, Pricing & Income, Marketing & Clients, Operations, Niches
  - Each answer is 3-5 sentences with links to the relevant deep-dive page
- **CTA:** Start Here path selector
- **Schema:** FAQPage (this is the most important page for FAQPage schema — include ALL questions)

---

### CATEGORY 2: NICHE-SPECIFIC PAGES (12 pages)

**Directory:** `src/pages/resources/niches/`

Each niche page follows the same template structure:

- Quick Answer box
- What Is [Niche] Concierge Nursing?
- What Services Do [Niche] Concierge Nurses Provide? (bulleted list)
- Who Are Your Ideal Clients?
- What Nursing Background Do You Need?
- How to Get Started in [Niche] Concierge Nursing (numbered steps)
- Startup Costs for [Niche] (table)
- How to Get [Niche] Clients (specific referral sources for that niche)
- Challenges and Considerations
- FAQ (5-6 questions specific to the niche)
- CTA: Accelerator or relevant toolkit

**Pages:**

#### 11. post-op-recovery.jsx
- **Route:** `/resources/niches/post-op-recovery-nursing-business`
- **H1:** How to Start a Post-Op Recovery Concierge Nursing Business
- **Target keyword:** post-op recovery nursing business

#### 12. postpartum.jsx
- **Route:** `/resources/niches/postpartum-concierge-nursing-business`
- **H1:** How to Start a Postpartum Concierge Nursing Business
- **Target keyword:** postpartum concierge nursing business

#### 13. geriatric.jsx
- **Route:** `/resources/niches/geriatric-concierge-nursing-business`
- **H1:** How to Start a Geriatric and Aging-in-Place Concierge Nursing Business
- **Target keyword:** geriatric concierge nursing business

#### 14. executive-health.jsx
- **Route:** `/resources/niches/executive-health-concierge-nursing`
- **H1:** How to Start an Executive Health Concierge Nursing Business
- **Target keyword:** executive health concierge nurse

#### 15. pediatric-special-needs.jsx
- **Route:** `/resources/niches/pediatric-special-needs-concierge-nursing`
- **H1:** How to Start a Pediatric Special Needs Concierge Nursing Practice
- **Target keyword:** pediatric concierge nursing

#### 16. travel-medicine.jsx
- **Route:** `/resources/niches/travel-medicine-concierge-nursing`
- **H1:** How to Start a Travel Medicine Concierge Nursing Business
- **Target keyword:** travel medicine concierge nurse

#### 17. iv-therapy.jsx
- **Route:** `/resources/niches/iv-therapy-nursing-business`
- **H1:** How to Start an IV Therapy Nursing Business
- **Target keyword:** IV therapy nursing business

#### 18. chronic-disease.jsx
- **Route:** `/resources/niches/chronic-disease-management-nursing`
- **H1:** How to Start a Chronic Disease Management Concierge Nursing Practice
- **Target keyword:** chronic disease management nursing business

#### 19. medication-management.jsx
- **Route:** `/resources/niches/medication-management-concierge-nursing`
- **H1:** How to Start a Medication Management Concierge Nursing Business
- **Target keyword:** medication management concierge nurse

#### 20. luxury-vip.jsx
- **Route:** `/resources/niches/luxury-vip-concierge-nursing`
- **H1:** How to Start a Luxury VIP Concierge Nursing Business
- **Target keyword:** luxury concierge nurse

#### 21. wellness-preventive.jsx
- **Route:** `/resources/niches/wellness-preventive-care-nursing`
- **H1:** How to Start a Wellness and Preventive Care Concierge Nursing Business
- **Target keyword:** wellness nursing business

#### 22. post-discharge.jsx
- **Route:** `/resources/niches/post-discharge-transitional-care-nursing`
- **H1:** How to Start a Post-Discharge Transitional Care Concierge Nursing Business
- **Target keyword:** post-discharge nursing business

---

### CATEGORY 3: LEGAL & COMPLIANCE PAGES (8 pages)

**Directory:** `src/pages/resources/legal/`

Each page includes relevant legal disclaimers: "This information is for educational purposes only and does not constitute legal advice. Consult with a healthcare attorney in your state for specific guidance."

#### 23. llc-vs-pllc.jsx
- **Route:** `/resources/legal/nursing-business-llc-vs-pllc`
- **H1:** Do I Need an LLC or PLLC for My Concierge Nursing Business?
- **Target keyword:** nursing business LLC or PLLC
- **Content:** What each is, comparison table, which states require PLLC for nurses, how to form each, cost comparison

#### 24. insurance-requirements.jsx
- **Route:** `/resources/legal/concierge-nurse-insurance-requirements`
- **H1:** Concierge Nurse Insurance Requirements: What Coverage You Need
- **Target keyword:** concierge nurse insurance
- **Content:** Professional liability, general liability, business property, cyber liability, workers comp, cost ranges

#### 25. scope-of-practice.jsx
- **Route:** `/resources/legal/concierge-nurse-scope-of-practice`
- **H1:** Concierge Nurse Scope of Practice: What You Can and Cannot Do
- **Target keyword:** concierge nurse scope of practice
- **Content:** RN scope vs NP scope, state variation, what you can independently do, what requires physician oversight, gray areas

#### 26. collaborative-agreements.jsx
- **Route:** `/resources/legal/concierge-nurse-collaborative-agreement`
- **H1:** Do Concierge Nurses Need a Collaborative Agreement?
- **Target keyword:** concierge nurse collaborative agreement
- **Content:** When required (NP vs RN), full practice authority states, how to find a collaborating physician

#### 27. business-licenses.jsx
- **Route:** `/resources/legal/concierge-nursing-business-licenses`
- **H1:** Business Licenses and Permits for Concierge Nurses
- **Target keyword:** concierge nursing business license
- **Content:** Federal EIN, state business registration, local permits, home-based business rules, professional licenses

#### 28. hipaa-cash-pay.jsx
- **Route:** `/resources/legal/hipaa-cash-pay-nursing-practice`
- **H1:** HIPAA for Cash-Pay Nursing Practices: Are You a Covered Entity?
- **Target keyword:** HIPAA cash pay practice
- **Content:** Covered entity definition, when cash-pay practices trigger HIPAA, electronic transactions trigger, state privacy laws

#### 29. client-contracts.jsx
- **Route:** `/resources/legal/concierge-nursing-client-contracts`
- **H1:** Concierge Nursing Client Contracts and Service Agreements: What to Include
- **Target keyword:** concierge nursing contract
- **Content:** Essential clauses, scope of services, payment terms, cancellation, liability, informed consent, HIPAA acknowledgment

#### 30. telehealth.jsx
- **Route:** `/resources/legal/telehealth-virtual-concierge-nursing`
- **H1:** Telehealth and Virtual Concierge Nursing: Legal Considerations
- **Target keyword:** virtual concierge nursing
- **Content:** Telehealth regulations for RNs, interstate licensing (Nurse Licensure Compact), platform requirements, documentation

---

### CATEGORY 4: OPERATIONS & SYSTEMS PAGES (10 pages)

**Directory:** `src/pages/resources/operations/`

#### 31. home-office-setup.jsx
- **Route:** `/resources/operations/concierge-nursing-home-office-setup`
- **H1:** How to Set Up a Home Office for Your Concierge Nursing Business
- **Target keyword:** concierge nursing home office

#### 32. ehr-emr-systems.jsx
- **Route:** `/resources/operations/best-ehr-emr-concierge-nurses`
- **H1:** Best EHR and EMR Systems for Concierge Nurses
- **Target keyword:** EHR for concierge nurses

#### 33. service-packages.jsx
- **Route:** `/resources/operations/concierge-nursing-service-packages`
- **H1:** How to Create Concierge Nursing Service Packages That Sell
- **Target keyword:** concierge nursing service packages

#### 34. after-hours.jsx
- **Route:** `/resources/operations/concierge-nurse-after-hours-calls`
- **H1:** How to Handle After-Hours Calls as a Concierge Nurse
- **Target keyword:** concierge nurse after hours

#### 35. client-onboarding.jsx
- **Route:** `/resources/operations/concierge-nursing-client-onboarding`
- **H1:** Concierge Nursing Client Onboarding: Step-by-Step Process
- **Target keyword:** concierge nursing client onboarding

#### 36. sops.jsx
- **Route:** `/resources/operations/concierge-nursing-sops`
- **H1:** How to Build SOPs for Your Concierge Nursing Business
- **Target keyword:** nursing business standard operating procedures

#### 37. tools-software.jsx
- **Route:** `/resources/operations/concierge-nursing-tools-software`
- **H1:** Tools and Software Every Concierge Nurse Needs
- **Target keyword:** concierge nursing tools

#### 38. scheduling.jsx
- **Route:** `/resources/operations/concierge-nurse-scheduling`
- **H1:** How to Manage Scheduling as a Solo Concierge Nurse
- **Target keyword:** concierge nurse scheduling

#### 39. hiring.jsx
- **Route:** `/resources/operations/when-to-hire-concierge-nursing`
- **H1:** When to Hire: Scaling Your Concierge Nursing Team
- **Target keyword:** hire concierge nursing staff

#### 40. firing-clients.jsx
- **Route:** `/resources/operations/concierge-nurse-fire-client`
- **H1:** How to Fire a Client: Setting Boundaries in Concierge Nursing
- **Target keyword:** concierge nurse boundaries

---

### CATEGORY 5: MARKETING & CLIENT ACQUISITION PAGES (10 pages)

**Directory:** `src/pages/resources/marketing/`

#### 41. marketing-guide.jsx
- **Route:** `/resources/marketing/concierge-nursing-business-marketing`
- **H1:** How to Market Your Concierge Nursing Business
- **Target keyword:** concierge nursing marketing

#### 42. physician-referrals.jsx
- **Route:** `/resources/marketing/physician-referral-relationships`
- **H1:** How to Build Physician Referral Relationships as a Concierge Nurse
- **Target keyword:** concierge nurse physician referrals

#### 43. social-media.jsx
- **Route:** `/resources/marketing/concierge-nurse-social-media`
- **H1:** Social Media Marketing for Concierge Nurses
- **Target keyword:** concierge nurse social media marketing

#### 44. build-website.jsx
- **Route:** `/resources/marketing/concierge-nursing-website`
- **H1:** How to Build a Website for Your Concierge Nursing Business
- **Target keyword:** concierge nursing website

#### 45. google-business.jsx
- **Route:** `/resources/marketing/concierge-nurse-google-business-profile`
- **H1:** Google Business Profile for Concierge Nurses: Complete Setup Guide
- **Target keyword:** concierge nurse Google Business Profile

#### 46. plastic-surgeon-referrals.jsx
- **Route:** `/resources/marketing/concierge-nurse-plastic-surgeon-referrals`
- **H1:** How to Get Referrals from Plastic Surgeons as a Concierge Nurse
- **Target keyword:** concierge nurse plastic surgeon referrals

#### 47. networking.jsx
- **Route:** `/resources/marketing/concierge-nurse-networking`
- **H1:** Networking Strategies for Concierge Nurse Entrepreneurs
- **Target keyword:** concierge nurse networking

#### 48. explain-concierge-nursing.jsx
- **Route:** `/resources/marketing/how-to-explain-concierge-nursing`
- **H1:** How to Explain Concierge Nursing to People Who Have Never Heard of It
- **Target keyword:** explain concierge nursing

#### 49. email-marketing.jsx
- **Route:** `/resources/marketing/concierge-nurse-email-marketing`
- **H1:** Email Marketing for Concierge Nurses: Build and Nurture Your List
- **Target keyword:** concierge nurse email marketing

#### 50. local-media.jsx
- **Route:** `/resources/marketing/concierge-nurse-local-media`
- **H1:** How to Get Featured in Local Media as a Concierge Nurse
- **Target keyword:** concierge nurse media coverage

---

### CATEGORY 6: FINANCIAL PAGES (7 pages)

**Directory:** `src/pages/resources/financial/`

#### 51. income-breakdown.jsx
- **Route:** `/resources/financial/concierge-nurse-income`
- **H1:** How Much Do Concierge Nurses Make? Income Breakdown
- **Target keyword:** concierge nurse income

#### 52. set-rates.jsx
- **Route:** `/resources/financial/concierge-nurse-rates`
- **H1:** How to Set Your Rates as a Concierge Nurse
- **Target keyword:** concierge nurse rates

#### 53. revenue-models.jsx
- **Route:** `/resources/financial/concierge-nursing-revenue-models`
- **H1:** Concierge Nursing Revenue Models: Hourly vs. Packages vs. Retainer
- **Target keyword:** concierge nursing revenue model

#### 54. first-year-finances.jsx
- **Route:** `/resources/financial/concierge-nursing-first-year-finances`
- **H1:** Financial Planning for Your First Year in Concierge Nursing
- **Target keyword:** first year concierge nursing finances

#### 55. tax-guide.jsx
- **Route:** `/resources/financial/concierge-nurse-tax-guide`
- **H1:** Tax Guide for Concierge Nurse Business Owners
- **Target keyword:** concierge nurse taxes

#### 56. profitability.jsx
- **Route:** `/resources/financial/concierge-nursing-profitability`
- **H1:** When Does a Concierge Nursing Business Become Profitable?
- **Target keyword:** concierge nursing profitable

#### 57. replace-hospital-income.jsx
- **Route:** `/resources/financial/replace-hospital-income-concierge-nursing`
- **H1:** How to Replace Your Hospital Income with Concierge Nursing
- **Target keyword:** replace hospital income nursing business

---

### CATEGORY 7: CAREER TRANSITION PAGES (8 pages)

**Directory:** `src/pages/resources/career/`

#### 58. leave-bedside.jsx
- **Route:** `/resources/career/leave-bedside-nursing-start-business`
- **H1:** How to Leave Bedside Nursing and Start Your Own Business
- **Target keyword:** leave bedside nursing start business

#### 59. part-time.jsx
- **Route:** `/resources/career/concierge-nursing-part-time`
- **H1:** Can I Start a Concierge Nursing Business Part-Time?
- **Target keyword:** concierge nursing part time

#### 60. burnout-to-business.jsx
- **Route:** `/resources/career/nurse-burnout-to-business-owner`
- **H1:** Nurse Burnout to Business Owner: Making the Transition
- **Target keyword:** nurse burnout business owner

#### 61. best-specialties.jsx
- **Route:** `/resources/career/best-nursing-specialties-concierge-nursing`
- **H1:** What Nursing Specialties Are Best for Concierge Nursing?
- **Target keyword:** best nursing specialty concierge nursing

#### 62. rn-vs-np.jsx
- **Route:** `/resources/career/concierge-nursing-rn-vs-np`
- **H1:** RN vs. NP: Do You Need an Advanced Degree for Concierge Nursing?
- **Target keyword:** concierge nursing RN vs NP

#### 63. icu-to-concierge.jsx
- **Route:** `/resources/career/icu-nurse-to-concierge-nurse`
- **H1:** From ICU Nurse to Concierge Nurse: A Career Path Guide
- **Target keyword:** ICU nurse to concierge nurse

#### 64. er-to-concierge.jsx
- **Route:** `/resources/career/er-nurse-to-concierge-nurse`
- **H1:** From ER Nurse to Concierge Nurse: A Career Path Guide
- **Target keyword:** ER nurse to concierge nurse

#### 65. medsurg-to-concierge.jsx
- **Route:** `/resources/career/med-surg-nurse-to-concierge-nurse`
- **H1:** From Med-Surg Nurse to Concierge Nurse: A Career Path Guide
- **Target keyword:** med surg nurse to concierge nurse

---

### CATEGORY 8: COMPARISON PAGES (7 pages)

**Directory:** `src/pages/resources/compare/`

Each comparison page must have a large, detailed comparison table as the centerpiece.

#### 66. vs-nurse-coaching.jsx
- **Route:** `/resources/compare/concierge-nursing-vs-nurse-coaching`
- **H1:** Concierge Nursing vs. Nurse Coaching: What Is the Difference?
- **Target keyword:** concierge nursing vs nurse coaching

#### 67. vs-travel-nursing.jsx
- **Route:** `/resources/compare/concierge-nursing-vs-travel-nursing`
- **H1:** Concierge Nursing vs. Travel Nursing: Income and Lifestyle Comparison
- **Target keyword:** concierge nursing vs travel nursing

#### 68. vs-agency.jsx
- **Route:** `/resources/compare/concierge-nursing-vs-agency-per-diem`
- **H1:** Concierge Nursing vs. Agency and Per Diem Nursing
- **Target keyword:** concierge nursing vs per diem nursing

#### 69. vs-franchise.jsx
- **Route:** `/resources/compare/start-nursing-business-vs-franchise`
- **H1:** Starting a Nursing Business vs. Buying a Franchise
- **Target keyword:** nursing business vs franchise

#### 70. solo-vs-multi.jsx
- **Route:** `/resources/compare/solo-concierge-nurse-vs-multi-nurse-practice`
- **H1:** Solo Concierge Nurse vs. Multi-Nurse Practice: Pros and Cons
- **Target keyword:** solo nurse practice vs multi nurse

#### 71. cash-pay-vs-insurance.jsx
- **Route:** `/resources/compare/cash-pay-nursing-vs-insurance-based`
- **H1:** Cash-Pay Nursing Practice vs. Insurance-Based: Which Business Model?
- **Target keyword:** cash pay nursing practice

#### 72. vs-consulting.jsx
- **Route:** `/resources/compare/concierge-nursing-vs-nursing-consulting`
- **H1:** Concierge Nursing vs. Nurse Consulting: What Is the Difference?
- **Target keyword:** concierge nursing vs consulting

---

### CATEGORY 9: GLOSSARY / DEFINITION PAGES (8 pages)

**Directory:** `src/pages/resources/glossary/`

Short, focused definition pages. 400-800 words each. These are AEO goldmines — direct definitions that AI models pull from.

#### 73. cash-pay-practice.jsx
- **Route:** `/resources/glossary/what-is-a-cash-pay-nursing-practice`
- **H1:** What Is a Cash-Pay Nursing Practice?

#### 74. nurse-entrepreneur.jsx
- **Route:** `/resources/glossary/what-is-a-nurse-entrepreneur`
- **H1:** What Is a Nurse Entrepreneur?

#### 75. private-pay-nursing.jsx
- **Route:** `/resources/glossary/what-is-private-pay-nursing`
- **H1:** What Is Private-Pay Nursing?

#### 76. nursing-pllc.jsx
- **Route:** `/resources/glossary/what-is-a-nursing-pllc`
- **H1:** What Is a Nursing PLLC?

#### 77. concierge-medicine-vs-nursing.jsx
- **Route:** `/resources/glossary/concierge-medicine-vs-concierge-nursing`
- **H1:** What Is the Difference Between Concierge Medicine and Concierge Nursing?

#### 78. nurse-owned-business.jsx
- **Route:** `/resources/glossary/what-is-a-nurse-owned-business`
- **H1:** What Is a Nurse-Owned Business?

#### 79. scope-of-practice-definition.jsx
- **Route:** `/resources/glossary/what-is-scope-of-practice-nurse-business`
- **H1:** What Does Scope of Practice Mean for Nurse Business Owners?

#### 80. concierge-nurse-business-coach.jsx
- **Route:** `/resources/glossary/what-is-a-concierge-nurse-business-coach`
- **H1:** What Is a Concierge Nurse Business Coach?

---

### CATEGORY 10: STATE-SPECIFIC PAGES (50 pages)

**Directory:** `src/pages/resources/states/`

**IMPORTANT:** Create a reusable state page template component at `src/components/StatePageTemplate.jsx`. Each state page imports this template and passes state-specific data as props.

The template should render:
- Quick Answer box (customized per state)
- [State] Nursing Business Landscape (brief overview)
- RN Scope of Practice in [State] (what RNs can independently do)
- LLC vs PLLC Requirements in [State]
- Business Registration in [State] (Secretary of State process)
- [State] Business Licenses and Permits
- Is [State] Part of the Nurse Licensure Compact? (yes/no + what it means)
- [State] Insurance Requirements
- [State]-Specific Considerations (any unique regulations, market opportunities)
- Major Metro Areas for Concierge Nursing in [State] (link to city pages where applicable)
- FAQ (5 state-specific questions)

**Create state data file at `src/data/states.js`** with an array of objects containing state-specific information. For the initial build, include:
- State name, abbreviation, slug
- Whether it is a Nurse Licensure Compact state (this is publicly available data)
- Whether it requires PLLC for nurse-owned businesses (publicly available)
- Capital city, major metro areas
- Secretary of State website URL
- Board of Nursing website URL
- Mark any state-specific regulatory details with `/* TRACY TO FILL */`

**Pages 81-130:** One page per state (Alabama through Wyoming, alphabetical).

Route pattern: `/resources/states/concierge-nursing-business-in-[state-slug]`
Example: `/resources/states/concierge-nursing-business-in-texas`

H1 pattern: "How to Start a Concierge Nursing Business in [State]"
Target keyword pattern: "concierge nursing business [state]" and "how to start a nursing business in [state]"

---

### CATEGORY 11: CITY-SPECIFIC PAGES (50 pages)

**Directory:** `src/pages/resources/cities/`

**Create a reusable city page template component at `src/components/CityPageTemplate.jsx`.** Similar to state template but focused on local market.

The template should render:
- Quick Answer box (customized per city)
- [City] Market Overview for Concierge Nursing
- Demand Drivers in [City] (demographics, healthcare landscape, wealth indicators)
- Key Referral Sources in [City] (types of practices/hospitals/surgery centers — generic, not named)
- Competition Landscape in [City]
- Cost of Living Considerations for Pricing
- Where to Network in [City] (types of events, not specific named events)
- [City] Business Registration Notes (link to state page for details)
- FAQ (4-5 city-specific questions)

**Create city data file at `src/data/cities.js`** with array of objects. Include:
- City name, state, slug
- State abbreviation (for linking to state page)
- General demographic notes (population tier: large metro, mid-size, etc.)
- Mark market-specific details with `/* TRACY TO FILL */`

**Pages 131-180:** 50 major metro areas.

Route pattern: `/resources/cities/concierge-nursing-business-in-[city-slug]`
Example: `/resources/cities/concierge-nursing-business-in-houston`

H1 pattern: "How to Start a Concierge Nursing Business in [City], [State]"

Cities (in order):
Houston TX, Dallas TX, Austin TX, San Antonio TX, Miami FL, Orlando FL, Tampa FL, Jacksonville FL, Atlanta GA, Charlotte NC, Raleigh NC, Nashville TN, Memphis TN, Chicago IL, Phoenix AZ, Scottsdale AZ, Denver CO, Seattle WA, Portland OR, Los Angeles CA, San Diego CA, San Francisco CA, Sacramento CA, Las Vegas NV, New York City NY, Boston MA, Philadelphia PA, Washington DC, Baltimore MD, Detroit MI, Minneapolis MN, St Louis MO, Kansas City MO, Indianapolis IN, Columbus OH, Cleveland OH, Cincinnati OH, Pittsburgh PA, New Orleans LA, Birmingham AL, Louisville KY, Richmond VA, San Jose CA, Honolulu HI, Anchorage AK, Boise ID, Salt Lake City UT, Albuquerque NM, Oklahoma City OK, Milwaukee WI

---

### CATEGORY 12: REFERRAL SOURCE PAGES (10 pages)

**Directory:** `src/pages/resources/referrals/`

Each page covers how to build referral relationships with a specific provider type.

#### 181. plastic-surgeons.jsx
- **Route:** `/resources/referrals/partner-with-plastic-surgeons`
- **H1:** How to Partner with Plastic Surgeons as a Concierge Nurse

#### 182. obgyns.jsx
- **Route:** `/resources/referrals/partner-with-obgyns`
- **H1:** How to Partner with OBGYNs as a Concierge Nurse

#### 183. geriatricians.jsx
- **Route:** `/resources/referrals/partner-with-geriatricians`
- **H1:** How to Partner with Geriatricians as a Concierge Nurse

#### 184. orthopedic-surgeons.jsx
- **Route:** `/resources/referrals/partner-with-orthopedic-surgeons`
- **H1:** How to Partner with Orthopedic Surgeons as a Concierge Nurse

#### 185. dermatologists.jsx
- **Route:** `/resources/referrals/partner-with-dermatologists`
- **H1:** How to Partner with Dermatologists as a Concierge Nurse

#### 186. primary-care.jsx
- **Route:** `/resources/referrals/partner-with-primary-care-physicians`
- **H1:** How to Partner with Primary Care Physicians as a Concierge Nurse

#### 187. pediatricians.jsx
- **Route:** `/resources/referrals/partner-with-pediatricians`
- **H1:** How to Partner with Pediatricians as a Concierge Nurse

#### 188. home-health-agencies.jsx
- **Route:** `/resources/referrals/partner-with-home-health-agencies`
- **H1:** How to Partner with Home Health Agencies as a Concierge Nurse

#### 189. assisted-living.jsx
- **Route:** `/resources/referrals/partner-with-assisted-living-facilities`
- **H1:** How to Partner with Assisted Living Facilities as a Concierge Nurse

#### 190. concierge-medicine.jsx
- **Route:** `/resources/referrals/partner-with-concierge-medicine-practices`
- **H1:** How to Partner with Concierge Medicine Practices

---

### CATEGORY 13: CLIENT USE CASE PAGES (12 pages)

**Directory:** `src/pages/resources/services/`

These pages serve dual purpose: nurses researching niches AND consumers searching for services. Write from an educational/informational angle.

#### 191. after-facelift.jsx
- **Route:** `/resources/services/concierge-nurse-after-facelift`
- **H1:** What Does a Concierge Nurse Do After a Facelift?

#### 192. postpartum-mothers.jsx
- **Route:** `/resources/services/concierge-nurse-postpartum-care`
- **H1:** What Does a Concierge Nurse Do for Postpartum Mothers?

#### 193. elderly-parents.jsx
- **Route:** `/resources/services/concierge-nurse-elderly-parents`
- **H1:** What Does a Concierge Nurse Do for Elderly Parents?

#### 194. after-bbl.jsx
- **Route:** `/resources/services/concierge-nurse-after-bbl`
- **H1:** What Does a Concierge Nurse Do After a BBL?

#### 195. after-tummy-tuck.jsx
- **Route:** `/resources/services/concierge-nurse-after-tummy-tuck`
- **H1:** What Does a Concierge Nurse Do After a Tummy Tuck?

#### 196. chronic-illness.jsx
- **Route:** `/resources/services/concierge-nurse-chronic-illness`
- **H1:** What Does a Concierge Nurse Do for Chronic Illness Management?

#### 197. iv-therapy-home.jsx
- **Route:** `/resources/services/concierge-nurse-iv-therapy`
- **H1:** What Does a Concierge Nurse Do for IV Therapy at Home?

#### 198. medication-management.jsx
- **Route:** `/resources/services/concierge-nurse-medication-management`
- **H1:** What Does a Concierge Nurse Do for Medication Management?

#### 199. after-hospital.jsx
- **Route:** `/resources/services/concierge-nurse-after-hospital-discharge`
- **H1:** What Does a Concierge Nurse Do After Hospital Discharge?

#### 200. executive-health.jsx
- **Route:** `/resources/services/concierge-nurse-executive-health`
- **H1:** What Does a Concierge Nurse Do for Executive Health?

#### 201. pediatric-special-needs.jsx
- **Route:** `/resources/services/concierge-nurse-pediatric-special-needs`
- **H1:** What Does a Concierge Nurse Do for Pediatric Special Needs?

#### 202. travel-health.jsx
- **Route:** `/resources/services/concierge-nurse-travel-health`
- **H1:** What Does a Concierge Nurse Do for Travel Health?

---

### CATEGORY 14: SERVICE TEMPLATE PAGES (10 pages)

**Directory:** `src/pages/resources/templates/`

Practical how-to pages for building specific business documents and processes.

#### 203. post-op-care-package.jsx
- **Route:** `/resources/templates/post-op-recovery-care-package`
- **H1:** How to Create a Post-Op Recovery Care Package

#### 204. postpartum-care-package.jsx
- **Route:** `/resources/templates/postpartum-care-package`
- **H1:** How to Create a Postpartum Care Package

#### 205. wellness-visit-package.jsx
- **Route:** `/resources/templates/wellness-visit-package`
- **H1:** How to Create a Wellness Visit Package

#### 206. iv-therapy-menu.jsx
- **Route:** `/resources/templates/iv-therapy-service-menu`
- **H1:** How to Create an IV Therapy Service Menu

#### 207. chronic-care-plan.jsx
- **Route:** `/resources/templates/chronic-care-management-plan`
- **H1:** How to Create a Chronic Care Management Plan

#### 208. service-agreement.jsx
- **Route:** `/resources/templates/concierge-nursing-service-agreement`
- **H1:** How to Write a Concierge Nursing Service Agreement

#### 209. welcome-packet.jsx
- **Route:** `/resources/templates/concierge-nursing-welcome-packet`
- **H1:** How to Create a Client Welcome Packet for Your Concierge Nursing Business

#### 210. intake-form.jsx
- **Route:** `/resources/templates/concierge-nursing-intake-form`
- **H1:** How to Build a Concierge Nursing Intake Form

#### 211. discharge-followup.jsx
- **Route:** `/resources/templates/discharge-follow-up-protocol`
- **H1:** How to Create a Discharge Follow-Up Protocol

#### 212. emergency-plan.jsx
- **Route:** `/resources/templates/client-emergency-action-plan`
- **H1:** How to Build a Client Emergency Action Plan for Concierge Nurses

---

### CATEGORY 15: TACTICAL MICRO-GUIDES (15 pages)

**Directory:** `src/pages/resources/guides/`

Short, focused how-to pages (600-1200 words each). These target very specific long-tail queries.

#### 213. npi-number.jsx
- **Route:** `/resources/guides/concierge-nurse-npi-number`
- **H1:** How to Get Your NPI Number as a Concierge Nurse

#### 214. ein.jsx
- **Route:** `/resources/guides/nursing-business-ein`
- **H1:** How to Get a Business EIN for Your Nursing Practice

#### 215. bank-account.jsx
- **Route:** `/resources/guides/nursing-business-bank-account`
- **H1:** How to Open a Business Bank Account for Your Nursing Practice

#### 216. hipaa-email.jsx
- **Route:** `/resources/guides/hipaa-compliant-email-nursing`
- **H1:** How to Set Up a HIPAA-Compliant Email System

#### 217. hipaa-phone.jsx
- **Route:** `/resources/guides/hipaa-compliant-phone-nursing`
- **H1:** How to Set Up a HIPAA-Compliant Phone System

#### 218. accept-payments.jsx
- **Route:** `/resources/guides/concierge-nurse-accept-payments`
- **H1:** How to Accept Payments as a Concierge Nurse

#### 219. branding.jsx
- **Route:** `/resources/guides/concierge-nursing-brand-logo`
- **H1:** How to Create a Brand and Logo for Your Concierge Nursing Business

#### 220. liability-insurance.jsx
- **Route:** `/resources/guides/concierge-nurse-liability-insurance`
- **H1:** How to Set Up Liability Insurance for Concierge Nursing

#### 221. elevator-pitch.jsx
- **Route:** `/resources/guides/concierge-nursing-elevator-pitch`
- **H1:** How to Write a Concierge Nursing Elevator Pitch

#### 222. photography.jsx
- **Route:** `/resources/guides/concierge-nurse-social-media-photography`
- **H1:** How to Photograph Your Work for Social Media Marketing

#### 223. testimonials.jsx
- **Route:** `/resources/guides/concierge-nurse-testimonials`
- **H1:** How to Get Testimonials from Concierge Nursing Clients

#### 224. boundaries.jsx
- **Route:** `/resources/guides/concierge-nurse-client-boundaries`
- **H1:** How to Set Boundaries with Concierge Nursing Clients

#### 225. medical-emergency.jsx
- **Route:** `/resources/guides/concierge-nurse-medical-emergency`
- **H1:** How to Handle a Medical Emergency as a Concierge Nurse

#### 226. documentation.jsx
- **Route:** `/resources/guides/concierge-nurse-client-documentation`
- **H1:** How to Document Client Visits as a Concierge Nurse

#### 227. cancellation-policy.jsx
- **Route:** `/resources/guides/concierge-nurse-cancellation-policy`
- **H1:** How to Create a Cancellation and No-Show Policy

---

### CATEGORY 16: MINDSET & OBJECTION PAGES (8 pages)

**Directory:** `src/pages/resources/mindset/`

These address the emotional/psychological barriers nurses face. More conversational tone, but still SEO-structured.

#### 228. is-it-saturated.jsx
- **Route:** `/resources/mindset/is-concierge-nursing-saturated`
- **H1:** Is Concierge Nursing Saturated? The Truth About Competition

#### 229. six-figures.jsx
- **Route:** `/resources/mindset/can-concierge-nurses-make-six-figures`
- **H1:** Can I Really Make Six Figures as a Concierge Nurse?

#### 230. too-old.jsx
- **Route:** `/resources/mindset/too-old-to-start-nursing-business`
- **H1:** Am I Too Old to Start a Concierge Nursing Business?

#### 231. no-business-experience.jsx
- **Route:** `/resources/mindset/start-nursing-business-no-experience`
- **H1:** I Do Not Have Business Experience — Can I Still Start a Concierge Nursing Business?

#### 232. imposter-syndrome.jsx
- **Route:** `/resources/mindset/nurse-entrepreneur-imposter-syndrome`
- **H1:** How to Overcome Imposter Syndrome as a Nurse Entrepreneur

#### 233. leaving-bedside.jsx
- **Route:** `/resources/mindset/is-it-selfish-to-leave-bedside-nursing`
- **H1:** Is It Selfish to Leave Bedside Nursing?

#### 234. fear-of-failure.jsx
- **Route:** `/resources/mindset/what-if-nursing-business-fails`
- **H1:** What If I Fail? Managing Risk in Your Concierge Nursing Business

#### 235. family-support.jsx
- **Route:** `/resources/mindset/family-support-nursing-business`
- **H1:** How to Get Your Family on Board with Your Concierge Nursing Business

---

### CATEGORY 17: PROCEDURE-SPECIFIC POST-OP PAGES (12 pages)

**Directory:** `src/pages/resources/procedures/`

These capture both nurse AND patient search traffic. Write from the perspective of "what concierge nursing care looks like for this procedure."

#### 236. rhinoplasty.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-rhinoplasty`
- **H1:** Concierge Nursing Care After Rhinoplasty

#### 237. breast-augmentation.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-breast-augmentation`
- **H1:** Concierge Nursing Care After Breast Augmentation

#### 238. liposuction.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-liposuction`
- **H1:** Concierge Nursing Care After Liposuction

#### 239. mommy-makeover.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-mommy-makeover`
- **H1:** Concierge Nursing Care After Mommy Makeover

#### 240. knee-replacement.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-knee-replacement`
- **H1:** Concierge Nursing Care After Knee Replacement

#### 241. hip-replacement.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-hip-replacement`
- **H1:** Concierge Nursing Care After Hip Replacement

#### 242. bariatric-surgery.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-bariatric-surgery`
- **H1:** Concierge Nursing Care After Bariatric Surgery

#### 243. c-section.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-c-section`
- **H1:** Concierge Nursing Care After C-Section

#### 244. cosmetic-eye-surgery.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-cosmetic-eye-surgery`
- **H1:** Concierge Nursing Care After Cosmetic Eye Surgery

#### 245. hair-transplant.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-hair-transplant`
- **H1:** Concierge Nursing Care After Hair Transplant

#### 246. dental-surgery.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-dental-surgery`
- **H1:** Concierge Nursing Care After Dental Surgery

#### 247. spinal-surgery.jsx
- **Route:** `/resources/procedures/concierge-nursing-after-spinal-surgery`
- **H1:** Concierge Nursing Care After Spinal Surgery

---

### CATEGORY 18: DAY IN THE LIFE PAGES (6 pages)

**Directory:** `src/pages/resources/day-in-the-life/`

These are more narrative/editorial. Paint a picture of what the day actually looks like. Content should be mostly `{/* TRACY TO FILL */}` since these require real operational details.

#### 248. post-op-nurse.jsx
- **Route:** `/resources/day-in-the-life/post-op-recovery-concierge-nurse`
- **H1:** A Day in the Life of a Post-Op Recovery Concierge Nurse

#### 249. postpartum-nurse.jsx
- **Route:** `/resources/day-in-the-life/postpartum-concierge-nurse`
- **H1:** A Day in the Life of a Postpartum Concierge Nurse

#### 250. geriatric-nurse.jsx
- **Route:** `/resources/day-in-the-life/geriatric-concierge-nurse`
- **H1:** A Day in the Life of a Geriatric Concierge Nurse

#### 251. luxury-vip-nurse.jsx
- **Route:** `/resources/day-in-the-life/luxury-vip-concierge-nurse`
- **H1:** A Day in the Life of a Luxury VIP Concierge Nurse

#### 252. part-time-nurse.jsx
- **Route:** `/resources/day-in-the-life/part-time-concierge-nurse`
- **H1:** A Day in the Life of a Part-Time Concierge Nurse

#### 253. practice-owner.jsx
- **Route:** `/resources/day-in-the-life/multi-nurse-practice-owner`
- **H1:** A Day in the Life of a Multi-Nurse Concierge Practice Owner

---

### CATEGORY 19: CERTIFICATION & CREDENTIAL PAGES (6 pages)

**Directory:** `src/pages/resources/certifications/`

#### 254. certifications-overview.jsx
- **Route:** `/resources/certifications/concierge-nurse-certifications`
- **H1:** Certifications That Help You Stand Out as a Concierge Nurse

#### 255. is-certification-worth-it.jsx
- **Route:** `/resources/certifications/concierge-nursing-certification-worth-it`
- **H1:** Is a Concierge Nursing Certification Worth It?

#### 256. bls-acls.jsx
- **Route:** `/resources/certifications/concierge-nurse-bls-acls`
- **H1:** BLS and ACLS Requirements for Concierge Nurses

#### 257. iv-certification.jsx
- **Route:** `/resources/certifications/concierge-nurse-iv-certification`
- **H1:** IV Certification for Concierge Nurses: Is It Worth It?

#### 258. wound-care.jsx
- **Route:** `/resources/certifications/concierge-nurse-wound-care-certification`
- **H1:** Wound Care Certification for Concierge Nurses

#### 259. msn-dnp.jsx
- **Route:** `/resources/certifications/concierge-nurse-msn-dnp`
- **H1:** Should I Get My MSN or DNP as a Concierge Nurse?

---

### CATEGORY 20: SEASONAL & ANNUAL PLANNING PAGES (5 pages)

**Directory:** `src/pages/resources/planning/`

#### 260. q1-planning.jsx
- **Route:** `/resources/planning/concierge-nursing-q1-planning`
- **H1:** Q1 Planning for Your Concierge Nursing Business

#### 261. tax-season.jsx
- **Route:** `/resources/planning/concierge-nursing-tax-season`
- **H1:** How to Prepare Your Concierge Nursing Business for Tax Season

#### 262. summer-vacation.jsx
- **Route:** `/resources/planning/concierge-nurse-vacation-policy`
- **H1:** Summer Planning: Vacation Policies for Solo Concierge Nurses

#### 263. holiday-season.jsx
- **Route:** `/resources/planning/concierge-nurse-holiday-season`
- **H1:** Holiday Season Strategies for Concierge Nurses

#### 264. year-end-review.jsx
- **Route:** `/resources/planning/concierge-nursing-year-end-review`
- **H1:** Year-End Review: How to Audit Your Concierge Nursing Business

---

### CATEGORY 21: BEST-OF / RESOURCE PAGES (8 pages)

**Directory:** `src/pages/resources/best/`

These are curated recommendation pages. Do NOT recommend specific products/brands unless they are well-known industry standards. For most items, describe what to look for in a tool rather than naming specific brands, and mark with `{/* TRACY TO FILL: her specific recommendations */}`.

#### 265. books.jsx
- **Route:** `/resources/best/books-for-nurse-entrepreneurs`
- **H1:** Best Books for Nurse Entrepreneurs

#### 266. podcasts.jsx
- **Route:** `/resources/best/podcasts-for-nurse-entrepreneurs`
- **H1:** Best Podcasts for Nurse Entrepreneurs

#### 267. conferences.jsx
- **Route:** `/resources/best/conferences-for-concierge-nurses`
- **H1:** Best Conferences for Concierge Nurses

#### 268. facebook-groups.jsx
- **Route:** `/resources/best/facebook-groups-nurse-entrepreneurs`
- **H1:** Best Facebook Groups for Nurse Entrepreneurs

#### 269. medical-bags.jsx
- **Route:** `/resources/best/medical-bags-supplies-concierge-nurses`
- **H1:** Best Medical Bags and Supplies for Mobile Concierge Nurses

#### 270. accounting-software.jsx
- **Route:** `/resources/best/accounting-software-nursing-business`
- **H1:** Best Accounting Software for Nurse-Owned Businesses

#### 271. crm-software.jsx
- **Route:** `/resources/best/crm-software-concierge-nurses`
- **H1:** Best CRM Software for Concierge Nurses

#### 272. scheduling-software.jsx
- **Route:** `/resources/best/scheduling-software-concierge-nurses`
- **H1:** Best Scheduling Software for Concierge Nurses

---

### CATEGORY 22: ADVANCED / SCALING PAGES (7 pages)

**Directory:** `src/pages/resources/scaling/`

#### 273. solo-to-agency.jsx
- **Route:** `/resources/scaling/solo-nurse-to-nursing-agency`
- **H1:** How to Go from Solo Concierge Nurse to Nursing Agency

#### 274. first-subcontractor.jsx
- **Route:** `/resources/scaling/hire-first-subcontractor-nursing`
- **H1:** How to Hire Your First Subcontractor as a Concierge Nurse

#### 275. training-manual.jsx
- **Route:** `/resources/scaling/concierge-nursing-training-manual`
- **H1:** How to Create a Training Manual for Your Concierge Nursing Team

#### 276. second-location.jsx
- **Route:** `/resources/scaling/open-second-location-nursing-business`
- **H1:** How to Open a Second Location for Your Nursing Business

#### 277. virtual-services.jsx
- **Route:** `/resources/scaling/add-virtual-services-concierge-nursing`
- **H1:** How to Add Virtual Services to Your Concierge Nursing Practice

#### 278. passive-income.jsx
- **Route:** `/resources/scaling/passive-income-concierge-nurse`
- **H1:** How to Create Passive Income as a Concierge Nurse

#### 279. sell-exit.jsx
- **Route:** `/resources/scaling/sell-exit-concierge-nursing-business`
- **H1:** How to Sell or Exit Your Concierge Nursing Business

---

### CATEGORY 23: INDUSTRY TRENDS & THOUGHT LEADERSHIP (8 pages)

**Directory:** `src/pages/resources/trends/`

#### 280. future-of-concierge-nursing.jsx
- **Route:** `/resources/trends/future-of-concierge-nursing`
- **H1:** The Future of Concierge Nursing: Trends for 2026 and Beyond

#### 281. fastest-growing-niche.jsx
- **Route:** `/resources/trends/concierge-nursing-fastest-growing-niche`
- **H1:** Why Concierge Nursing Is the Fastest-Growing Nursing Niche

#### 282. nursing-shortage-opportunity.jsx
- **Route:** `/resources/trends/nursing-shortage-concierge-nursing-opportunity`
- **H1:** How the Nursing Shortage Is Creating Opportunity for Concierge Nurses

#### 283. patients-choosing-private-pay.jsx
- **Route:** `/resources/trends/patients-choosing-private-pay-nursing`
- **H1:** Why More Patients Are Choosing Private-Pay Nursing

#### 284. cash-pay-healthcare-rise.jsx
- **Route:** `/resources/trends/rise-of-cash-pay-healthcare`
- **H1:** The Rise of Cash-Pay Healthcare: What It Means for Nurses

#### 285. ai-concierge-nursing.jsx
- **Route:** `/resources/trends/ai-and-concierge-nursing`
- **H1:** How AI Is Changing Concierge Nursing

#### 286. nurses-leaving-hospitals.jsx
- **Route:** `/resources/trends/nurses-leaving-hospitals-entrepreneurship`
- **H1:** Why Hospital Nurses Are Leaving for Entrepreneurship

#### 287. business-model-comparison.jsx
- **Route:** `/resources/trends/concierge-nursing-vs-traditional-employment`
- **H1:** The Concierge Nursing Business Model vs. Traditional Healthcare Employment

---

### CATEGORY 24: AUDIENCE-SPECIFIC PAGES (8 pages)

**Directory:** `src/pages/resources/for/`

Each page speaks directly to a specific audience segment with tailored advice.

#### 288. military-spouses.jsx
- **Route:** `/resources/for/concierge-nursing-military-spouses`
- **H1:** Concierge Nursing for Military Spouse Nurses

#### 289. new-grads.jsx
- **Route:** `/resources/for/concierge-nursing-new-grad-nurses`
- **H1:** Concierge Nursing for New Grad Nurses: Is It Too Soon?

#### 290. nurse-practitioners.jsx
- **Route:** `/resources/for/concierge-nursing-nurse-practitioners`
- **H1:** Concierge Nursing for Nurse Practitioners: Expanding Your Practice

#### 291. rural-nurses.jsx
- **Route:** `/resources/for/concierge-nursing-rural-nurses`
- **H1:** Concierge Nursing for Rural Nurses

#### 292. nurses-over-50.jsx
- **Route:** `/resources/for/concierge-nursing-nurses-over-50`
- **H1:** Concierge Nursing for Nurses Over 50

#### 293. male-nurses.jsx
- **Route:** `/resources/for/concierge-nursing-male-nurses`
- **H1:** Concierge Nursing for Male Nurses

#### 294. international-nurses.jsx
- **Route:** `/resources/for/concierge-nursing-international-nurses`
- **H1:** Concierge Nursing for International and Foreign-Educated Nurses

#### 295. nurses-with-disabilities.jsx
- **Route:** `/resources/for/concierge-nursing-nurses-with-disabilities`
- **H1:** Concierge Nursing for Nurses with Disabilities

---

### RESOURCE HUB INDEX + EXTRAS (5 pages)

#### 296. src/pages/Resources.jsx (already described above in Phase 2B)
- **Route:** `/resources`
- **H1:** Concierge Nursing Business Resources

#### 297. src/pages/resources/checklist.jsx
- **Route:** `/resources/checklist`
- **H1:** Concierge Nursing Business Startup Checklist
- Interactive checklist with all steps needed to launch

#### 298. src/pages/resources/timeline.jsx
- **Route:** `/resources/timeline`
- **H1:** Concierge Nursing Startup Timeline: Month by Month
- Visual timeline of what to do in months 1-6

#### 299. src/pages/resources/glossary-index.jsx
- **Route:** `/resources/glossary`
- **H1:** Concierge Nursing Business Terms Glossary
- Master A-Z glossary of all terms, linking to individual glossary pages

#### 300. src/pages/resources/reading-list.jsx
- **Route:** `/resources/reading-list`
- **H1:** Recommended Reading for Concierge Nurse Entrepreneurs
- Curated book/resource list with categories

---

## PHASE 5: INTERNAL LINKING STRATEGY

Every resource page must link to:
- **At least 3 other resource pages** (related topics)
- **At least 1 service page** (Accelerator, Toolkits, Strategy, Consulting, or Community)
- **The parent pillar guide** for its category (e.g., every niche page links back to the niches overview)

Create a `src/data/internal-links.js` file that maps every page to its recommended related pages, so the `ResourceLayout` component can automatically render "Related Resources" sections.

The pillar guides should serve as hub pages that link out to every related sub-page. This creates a hub-and-spoke internal linking architecture that search engines strongly reward.

---

## PHASE 6: FOOTER & NAVIGATION UPDATES

### Footer update
Add a "Resources" column to the footer with links to the top 6-8 most important resource pages:
- How to Start a Concierge Nursing Business
- What Is a Concierge Nurse?
- HIPAA Compliance Guide
- Pricing Guide
- Concierge Nursing Niches
- Startup Costs
- All Resources (link to /resources hub)

### Navbar
Add "Resources" link to the main navigation between "Community" and "Contact".

---

## EXECUTION NOTES

- **Build order:** Phase 1 (technical SEO) → Phase 2 (infrastructure/components) → Phase 3 (content standards) → Phase 4 (all 300 pages) → Phase 5 (internal links) → Phase 6 (nav updates)
- **For the 50 state pages and 50 city pages:** Use the template component pattern. Create the data files with all state/city data, then generate pages from the templates. This keeps the codebase DRY.
- **Content length targets:** Pillar guides: 2000-3000 words. Niche/legal/operations pages: 1200-2000 words. Glossary/micro-guides: 400-800 words. State/city pages: 800-1200 words.
- **FAQ section:** Every single page must end with an FAQ section wrapped in FAQPage JSON-LD schema. Minimum 5 questions per page, maximum 10.
- **Images:** Do not add any images. We will handle imagery separately later.
- **All dates in content should reference 2026** where applicable (current year).

## PROMPT END

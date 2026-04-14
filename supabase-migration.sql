-- ============================================
-- Concierge Nurse Business Society — CRM Schema
-- Run this in your Supabase SQL Editor
-- ============================================

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ============================================
-- CONTACTS (leads)
-- ============================================
create table contacts (
  id uuid primary key default uuid_generate_v4(),
  first_name text,
  last_name text,
  email text unique not null,
  phone text,
  business_name text,
  annual_revenue text,
  interest text,
  lifecycle_stage text default 'Explorer',
  status text default 'new',
  source text default 'form_submission',
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Index for fast email lookups (dedup)
create unique index contacts_email_lower_idx on contacts (lower(email));

-- ============================================
-- TAGS
-- ============================================
create table tags (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  created_at timestamptz default now()
);

-- Seed the tags the forms use
insert into tags (name) values
  ('Contact Form Lead'),
  ('Consulting Inquiry'),
  ('Accelerator Waitlist'),
  ('Community Signup'),
  ('Newsletter Subscriber');

-- ============================================
-- CONTACT_TAGS (junction)
-- ============================================
create table contact_tags (
  contact_id uuid references contacts(id) on delete cascade,
  tag_id uuid references tags(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (contact_id, tag_id)
);

-- ============================================
-- NOTES
-- ============================================
create table notes (
  id uuid primary key default uuid_generate_v4(),
  contact_id uuid references contacts(id) on delete cascade not null,
  content text not null,
  created_at timestamptz default now()
);

-- ============================================
-- ACTIVITY_LOG
-- ============================================
create table activity_log (
  id uuid primary key default uuid_generate_v4(),
  contact_id uuid references contacts(id) on delete cascade not null,
  type text default 'form_submission',
  description text not null,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

-- Enable RLS on all tables
alter table contacts enable row level security;
alter table tags enable row level security;
alter table contact_tags enable row level security;
alter table notes enable row level security;
alter table activity_log enable row level security;

-- PUBLIC (anon) can INSERT contacts (form submissions)
create policy "Anon can insert contacts"
  on contacts for insert
  to anon
  with check (true);

-- PUBLIC (anon) can INSERT notes (form messages)
create policy "Anon can insert notes"
  on notes for insert
  to anon
  with check (true);

-- PUBLIC (anon) can INSERT activity_log
create policy "Anon can insert activity_log"
  on activity_log for insert
  to anon
  with check (true);

-- PUBLIC (anon) can INSERT contact_tags
create policy "Anon can insert contact_tags"
  on contact_tags for insert
  to anon
  with check (true);

-- PUBLIC (anon) can SELECT tags (need IDs to assign them)
create policy "Anon can read tags"
  on tags for select
  to anon
  using (true);

-- PUBLIC (anon) can SELECT contacts (only for dedup check by email)
create policy "Anon can select contacts for dedup"
  on contacts for select
  to anon
  using (true);

-- PUBLIC (anon) can UPDATE contacts (merge data on existing)
create policy "Anon can update contacts"
  on contacts for update
  to anon
  using (true)
  with check (true);

-- PUBLIC (anon) can SELECT contact_tags (check existing tags)
create policy "Anon can select contact_tags"
  on contact_tags for select
  to anon
  using (true);

-- AUTHENTICATED (admin) can do everything
create policy "Admin full access to contacts"
  on contacts for all
  to authenticated
  using (true)
  with check (true);

create policy "Admin full access to tags"
  on tags for all
  to authenticated
  using (true)
  with check (true);

create policy "Admin full access to contact_tags"
  on contact_tags for all
  to authenticated
  using (true)
  with check (true);

create policy "Admin full access to notes"
  on notes for all
  to authenticated
  using (true)
  with check (true);

create policy "Admin full access to activity_log"
  on activity_log for all
  to authenticated
  using (true)
  with check (true);

-- ============================================
-- AUTO-UPDATE updated_at ON CONTACTS
-- ============================================
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger contacts_updated_at
  before update on contacts
  for each row execute function update_updated_at();

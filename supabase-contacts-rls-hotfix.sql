-- ============================================================================
-- Contacts RLS Hotfix
--
-- Ensures public forms (Waitlist, Contact, etc.) work for everyone:
-- 1) Guests (anon)
-- 2) Logged-in non-admins (Ambassadors testing the site)
-- 3) Admins
-- ============================================================================

-- 1. Ensure RLS is enabled
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing restrictive anon/authenticated policies to clean up
DROP POLICY IF EXISTS "Anon can insert contacts" ON contacts;
DROP POLICY IF EXISTS "Anon can select contacts for dedup" ON contacts;
DROP POLICY IF EXISTS "Anon can update contacts" ON contacts;
DROP POLICY IF EXISTS "Admins full access contacts" ON contacts;
DROP POLICY IF EXISTS "Admin full access to contacts" ON contacts;
DROP POLICY IF EXISTS "Auth can insert contacts" ON contacts;
DROP POLICY IF EXISTS "Auth can select contacts for dedup" ON contacts;
DROP POLICY IF EXISTS "Auth can update contacts" ON contacts;

-- 3. Re-create Anon Policies (for Guests)
CREATE POLICY "Anon can insert contacts" ON contacts
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Anon can select contacts for dedup" ON contacts
  FOR SELECT TO anon USING (true);

CREATE POLICY "Anon can update contacts" ON contacts
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- 4. Create Authenticated Policies (for Logged-in users)
CREATE POLICY "Auth can insert contacts" ON contacts
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Auth can select contacts for dedup" ON contacts
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Auth can update contacts" ON contacts
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- 5. Restore full Admin access
CREATE POLICY "Admins full access contacts" ON contacts
  FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());

-- 6. Fix related tables (Activity, Tags, Notes, Pipelines, etc.)
-- Drop old policies to avoid duplicates
DROP POLICY IF EXISTS "Allow public insert into pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Allow admin manage pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Allow public insert into activity_log" ON activity_log;
DROP POLICY IF EXISTS "Allow admin manage activity_log" ON activity_log;
DROP POLICY IF EXISTS "Allow public insert into contact_tags" ON contact_tags;
DROP POLICY IF EXISTS "Allow admin manage contact_tags" ON contact_tags;
DROP POLICY IF EXISTS "Allow public insert into notes" ON notes;
DROP POLICY IF EXISTS "Allow admin manage notes" ON notes;
DROP POLICY IF EXISTS "Allow public read tags" ON tags;
DROP POLICY IF EXISTS "Allow public insert tags" ON tags;
DROP POLICY IF EXISTS "Allow admin manage tags" ON tags;
DROP POLICY IF EXISTS "Allow public read enrollments" ON sequence_enrollments;
DROP POLICY IF EXISTS "Allow public insert enrollments" ON sequence_enrollments;
DROP POLICY IF EXISTS "Allow admin manage enrollments" ON sequence_enrollments;
DROP POLICY IF EXISTS "Allow public read pipelines" ON pipelines;
DROP POLICY IF EXISTS "Allow admin manage pipelines" ON pipelines;

-- Pipeline Contacts
ALTER TABLE pipeline_contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert into pipeline_contacts" ON pipeline_contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin manage pipeline_contacts" ON pipeline_contacts FOR ALL USING (is_admin());

-- Activity Log
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert into activity_log" ON activity_log FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin manage activity_log" ON activity_log FOR ALL USING (is_admin());

-- Contact Tags
ALTER TABLE contact_tags ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert into contact_tags" ON contact_tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin manage contact_tags" ON contact_tags FOR ALL USING (is_admin());

-- Notes
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert into notes" ON notes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin manage notes" ON notes FOR ALL USING (is_admin());

-- Tags (needed for getOrCreateTag)
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read tags" ON tags FOR SELECT USING (true);
CREATE POLICY "Allow public insert tags" ON tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin manage tags" ON tags FOR ALL USING (is_admin());

-- Sequence Enrollments (needed for enrollInSequences)
ALTER TABLE sequence_enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read enrollments" ON sequence_enrollments FOR SELECT USING (true);
CREATE POLICY "Allow public insert enrollments" ON sequence_enrollments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin manage enrollments" ON sequence_enrollments FOR ALL USING (is_admin());

-- Pipelines (needed for assignPipeline)
ALTER TABLE pipelines ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read pipelines" ON pipelines FOR SELECT USING (true);
CREATE POLICY "Allow admin manage pipelines" ON pipelines FOR ALL USING (is_admin());

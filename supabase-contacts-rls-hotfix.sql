-- ============================================================================
-- Contacts RLS Hotfix  (v2 — comprehensive)
--
-- Ensures public forms (Waitlist, Contact, etc.) work for everyone:
-- 1) Guests (anon)
-- 2) Logged-in non-admins (Ambassadors testing the site)
-- 3) Admins
--
-- Also ensures that dedup checks during form submission succeed
-- (SELECT on secondary tables) so old data is not duplicated.
-- ============================================================================

-- ─── CONTACTS ────────────────────────────────────────────────
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anon can insert contacts" ON contacts;
DROP POLICY IF EXISTS "Anon can select contacts for dedup" ON contacts;
DROP POLICY IF EXISTS "Anon can update contacts" ON contacts;
DROP POLICY IF EXISTS "Auth can insert contacts" ON contacts;
DROP POLICY IF EXISTS "Auth can select contacts for dedup" ON contacts;
DROP POLICY IF EXISTS "Auth can update contacts" ON contacts;
DROP POLICY IF EXISTS "Admins full access contacts" ON contacts;
DROP POLICY IF EXISTS "Admin full access to contacts" ON contacts;

CREATE POLICY "Anon can insert contacts" ON contacts
  FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon can select contacts for dedup" ON contacts
  FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can update contacts" ON contacts
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

CREATE POLICY "Auth can insert contacts" ON contacts
  FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth can select contacts for dedup" ON contacts
  FOR SELECT TO authenticated USING (true);
CREATE POLICY "Auth can update contacts" ON contacts
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access contacts" ON contacts
  FOR ALL TO authenticated USING (is_admin()) WITH CHECK (is_admin());

-- ─── PIPELINE_CONTACTS ──────────────────────────────────────
ALTER TABLE pipeline_contacts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert into pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Allow admin manage pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Anon can insert pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Anon can select pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Auth can insert pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Auth full access pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Admins full access pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Allow public select pipeline_contacts" ON pipeline_contacts;
DROP POLICY IF EXISTS "Allow public delete pipeline_contacts" ON pipeline_contacts;

-- Public forms need SELECT for dedup + INSERT + DELETE (to remove General when routing)
CREATE POLICY "Anyone can select pipeline_contacts" ON pipeline_contacts FOR SELECT USING (true);
CREATE POLICY "Anyone can insert pipeline_contacts" ON pipeline_contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can delete pipeline_contacts" ON pipeline_contacts FOR DELETE USING (true);
CREATE POLICY "Anyone can update pipeline_contacts" ON pipeline_contacts FOR UPDATE USING (true) WITH CHECK (true);

-- ─── ACTIVITY_LOG ────────────────────────────────────────────
ALTER TABLE activity_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert into activity_log" ON activity_log;
DROP POLICY IF EXISTS "Allow admin manage activity_log" ON activity_log;
DROP POLICY IF EXISTS "Anon can insert activity_log" ON activity_log;
DROP POLICY IF EXISTS "Auth can insert activity_log" ON activity_log;

CREATE POLICY "Anyone can insert activity_log" ON activity_log FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can select activity_log" ON activity_log FOR SELECT USING (true);

-- ─── CONTACT_TAGS ────────────────────────────────────────────
ALTER TABLE contact_tags ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert into contact_tags" ON contact_tags;
DROP POLICY IF EXISTS "Allow admin manage contact_tags" ON contact_tags;
DROP POLICY IF EXISTS "Anon can insert contact_tags" ON contact_tags;
DROP POLICY IF EXISTS "Auth can insert contact_tags" ON contact_tags;
DROP POLICY IF EXISTS "Anyone can select contact_tags" ON contact_tags;
DROP POLICY IF EXISTS "Anyone can insert contact_tags" ON contact_tags;

-- Forms need SELECT for dedup + INSERT
CREATE POLICY "Anyone can select contact_tags" ON contact_tags FOR SELECT USING (true);
CREATE POLICY "Anyone can insert contact_tags" ON contact_tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin manage contact_tags" ON contact_tags FOR ALL USING (is_admin());

-- ─── NOTES ───────────────────────────────────────────────────
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert into notes" ON notes;
DROP POLICY IF EXISTS "Allow admin manage notes" ON notes;
DROP POLICY IF EXISTS "Anon can insert notes" ON notes;
DROP POLICY IF EXISTS "Auth can insert notes" ON notes;

CREATE POLICY "Anyone can insert notes" ON notes FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can select notes" ON notes FOR SELECT USING (true);

-- ─── TAGS ────────────────────────────────────────────────────
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read tags" ON tags;
DROP POLICY IF EXISTS "Allow public insert tags" ON tags;
DROP POLICY IF EXISTS "Allow admin manage tags" ON tags;
DROP POLICY IF EXISTS "Anon can read tags" ON tags;
DROP POLICY IF EXISTS "Anon can insert tags" ON tags;

CREATE POLICY "Anyone can read tags" ON tags FOR SELECT USING (true);
CREATE POLICY "Anyone can insert tags" ON tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin manage tags" ON tags FOR ALL USING (is_admin());

-- ─── SEQUENCES (read-only for public forms) ─────────────────
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'sequences') THEN
    ALTER TABLE sequences ENABLE ROW LEVEL SECURITY;
    EXECUTE 'DROP POLICY IF EXISTS "Anyone can read sequences" ON sequences';
    EXECUTE 'CREATE POLICY "Anyone can read sequences" ON sequences FOR SELECT USING (true)';
  END IF;
END $$;

-- ─── SEQUENCE_ENROLLMENTS ────────────────────────────────────
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'sequence_enrollments') THEN
    ALTER TABLE sequence_enrollments ENABLE ROW LEVEL SECURITY;
    EXECUTE 'DROP POLICY IF EXISTS "Allow public read enrollments" ON sequence_enrollments';
    EXECUTE 'DROP POLICY IF EXISTS "Allow public insert enrollments" ON sequence_enrollments';
    EXECUTE 'DROP POLICY IF EXISTS "Allow admin manage enrollments" ON sequence_enrollments';
    EXECUTE 'CREATE POLICY "Anyone can select enrollments" ON sequence_enrollments FOR SELECT USING (true)';
    EXECUTE 'CREATE POLICY "Anyone can insert enrollments" ON sequence_enrollments FOR INSERT WITH CHECK (true)';
  END IF;
END $$;

-- ─── PIPELINES (read-only for public forms) ──────────────────
ALTER TABLE pipelines ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read pipelines" ON pipelines;
DROP POLICY IF EXISTS "Allow admin manage pipelines" ON pipelines;
DROP POLICY IF EXISTS "Anon can read pipelines" ON pipelines;

CREATE POLICY "Anyone can read pipelines" ON pipelines FOR SELECT USING (true);
CREATE POLICY "Admin manage pipelines" ON pipelines FOR ALL USING (is_admin());

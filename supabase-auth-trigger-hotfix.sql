-- ============================================================================
-- Auth Trigger + Anon Policy Hotfix
--
-- 1) Replaces handle_new_auth_user with a version that can't block signups.
--    If the INSERT into profiles fails for any reason, we log a warning and
--    let auth.signUp succeed. A missing profile row is harmless — the Portal's
--    auto-create path handles it on first login.
--
-- 2) Re-creates anon INSERT policies that page view tracking + public form
--    intake depend on. The RLS hardening migration was supposed to leave
--    these alone, but re-asserting them here is idempotent and safe.
--
-- Safe to re-run.
-- ============================================================================

CREATE OR REPLACE FUNCTION handle_new_auth_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  BEGIN
    INSERT INTO profiles (user_id, role)
    VALUES (NEW.id, 'ambassador')
    ON CONFLICT (user_id) DO NOTHING;
  EXCEPTION WHEN OTHERS THEN
    RAISE WARNING 'handle_new_auth_user: could not create profile for %: %', NEW.id, SQLERRM;
  END;
  RETURN NEW;
END;
$$;

-- Recreate the trigger against the new function body.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_auth_user();

-- ─────────────────────────────────────────────────────────────────────────────
-- 2. Re-assert anon INSERT / SELECT policies that public pages depend on.
-- ─────────────────────────────────────────────────────────────────────────────

-- page_views: the PageTracker component inserts from the public site.
DROP POLICY IF EXISTS "Anon can insert page_views" ON page_views;
CREATE POLICY "Anon can insert page_views" ON page_views
  FOR INSERT TO anon WITH CHECK (true);

-- contacts: public forms insert leads.
DROP POLICY IF EXISTS "Anon can insert contacts" ON contacts;
CREATE POLICY "Anon can insert contacts" ON contacts
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Anon can select contacts for dedup" ON contacts;
CREATE POLICY "Anon can select contacts for dedup" ON contacts
  FOR SELECT TO anon USING (true);

DROP POLICY IF EXISTS "Anon can update contacts" ON contacts;
CREATE POLICY "Anon can update contacts" ON contacts
  FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- sequences: public enrollment flow reads these.
DROP POLICY IF EXISTS "Anon can select sequences" ON sequences;
CREATE POLICY "Anon can select sequences" ON sequences
  FOR SELECT TO anon USING (true);

DROP POLICY IF EXISTS "Anon can insert sequence_enrollments" ON sequence_enrollments;
CREATE POLICY "Anon can insert sequence_enrollments" ON sequence_enrollments
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Anon can select sequence_enrollments" ON sequence_enrollments;
CREATE POLICY "Anon can select sequence_enrollments" ON sequence_enrollments
  FOR SELECT TO anon USING (true);

-- contact_tags: public forms can tag the contact they just created.
DROP POLICY IF EXISTS "Anon can insert contact_tags" ON contact_tags;
CREATE POLICY "Anon can insert contact_tags" ON contact_tags
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Anon can select contact_tags" ON contact_tags;
CREATE POLICY "Anon can select contact_tags" ON contact_tags
  FOR SELECT TO anon USING (true);

-- tags: public forms can look up existing tags by name.
DROP POLICY IF EXISTS "Anon can read tags" ON tags;
CREATE POLICY "Anon can read tags" ON tags
  FOR SELECT TO anon USING (true);

-- pipeline_contacts: the public lead scoring path writes these.
DROP POLICY IF EXISTS "Anon can insert pipeline_contacts" ON pipeline_contacts;
CREATE POLICY "Anon can insert pipeline_contacts" ON pipeline_contacts
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Anon can select pipeline_contacts" ON pipeline_contacts;
CREATE POLICY "Anon can select pipeline_contacts" ON pipeline_contacts
  FOR SELECT TO anon USING (true);

-- pipelines: public reads.
DROP POLICY IF EXISTS "Anon can select pipelines" ON pipelines;
CREATE POLICY "Anon can select pipelines" ON pipelines
  FOR SELECT TO anon USING (true);

-- ============================================================================
-- Hotfix complete.
-- ============================================================================

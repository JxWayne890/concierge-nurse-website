-- ============================================================================
-- Auth Trigger Hotfix
--
-- Replaces handle_new_auth_user with a version that can't block signups.
-- If the INSERT into profiles fails for any reason (RLS, permission, column
-- mismatch), we log a warning and let auth.signUp succeed. A missing profile
-- row is harmless — the Portal's auto-create path handles it on first login.
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

-- ============================================================================
-- Hotfix complete.
-- ============================================================================

-- ============================================================================
-- Enrollments Migration (Stripe-backed Accelerator checkout)
--
-- Creates the enrollments table that the /api/stripe/webhook handler writes
-- to when a Stripe checkout session completes. Also wires attribution so that
-- the existing referrals → payouts trigger chain fires automatically.
--
-- Safe to re-run. Must be applied after supabase-ambassador-portal-migration.
-- ============================================================================

CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Who enrolled
  nurse_email TEXT NOT NULL,
  nurse_name TEXT,
  nurse_phone TEXT,
  contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,

  -- What they bought
  program TEXT NOT NULL DEFAULT 'accelerator',     -- future-proof for other SKUs
  plan TEXT NOT NULL CHECK (plan IN ('full', 'payment_plan')),
  amount_cents INT NOT NULL CHECK (amount_cents >= 0),
  currency TEXT NOT NULL DEFAULT 'usd',

  -- Attribution
  ambassador_id UUID REFERENCES ambassadors(id) ON DELETE SET NULL,
  referral_code TEXT,                              -- human-readable snapshot
  referral_id UUID REFERENCES referrals(id) ON DELETE SET NULL,
  cohort_cycle_id UUID REFERENCES cohort_cycles(id) ON DELETE SET NULL,
  cohort_cycle_label TEXT,

  -- Stripe identifiers
  stripe_checkout_session_id TEXT UNIQUE,          -- one enrollment per session
  stripe_customer_id TEXT,
  stripe_payment_intent_id TEXT,
  stripe_subscription_id TEXT,                     -- present for payment plans

  -- Lifecycle
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'paid', 'refunded', 'failed', 'cancelled')),
  paid_at TIMESTAMPTZ,
  refunded_at TIMESTAMPTZ,

  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments (lower(nurse_email));
CREATE INDEX IF NOT EXISTS idx_enrollments_ambassador ON enrollments (ambassador_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_referral ON enrollments (referral_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments (status);
CREATE INDEX IF NOT EXISTS idx_enrollments_session ON enrollments (stripe_checkout_session_id);

-- updated_at
CREATE OR REPLACE FUNCTION touch_enrollments_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$;

DROP TRIGGER IF EXISTS trg_enrollments_updated_at ON enrollments;
CREATE TRIGGER trg_enrollments_updated_at
  BEFORE UPDATE ON enrollments
  FOR EACH ROW EXECUTE FUNCTION touch_enrollments_updated_at();

-- When an enrollment transitions to 'paid', attribute it.
--   1. If referral_id is set on the enrollment, flip that referral to 'paid'.
--   2. Else if ambassador_id is set, look for a pending referral for the same
--      ambassador + email in the enrollment's cycle and flip it.
--   3. Else look for any pending referral matching (email, active cycle) and
--      flip it — salvages attribution when the nurse didn't click an
--      ambassador link but an ambassador had pre-logged her.
-- The referrals → payouts trigger chain does the rest (payout row + tier
-- calculation + Founding Ambassador badge).
CREATE OR REPLACE FUNCTION enrollments_attribute_on_paid()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  target_ref_id UUID;
  first_payment BOOLEAN;
BEGIN
  IF NEW.status = 'paid' AND (OLD.status IS DISTINCT FROM 'paid') THEN
    -- Determine the referral to attribute.
    target_ref_id := NEW.referral_id;

    IF target_ref_id IS NULL AND NEW.ambassador_id IS NOT NULL THEN
      SELECT id INTO target_ref_id
      FROM referrals
      WHERE ambassador_id = NEW.ambassador_id
        AND lower(referred_email) = lower(NEW.nurse_email)
        AND status = 'pending'
        AND (NEW.cohort_cycle_id IS NULL OR cohort_cycle_id = NEW.cohort_cycle_id)
      ORDER BY created_at ASC
      LIMIT 1;
    END IF;

    IF target_ref_id IS NULL THEN
      SELECT id INTO target_ref_id
      FROM referrals
      WHERE lower(referred_email) = lower(NEW.nurse_email)
        AND status = 'pending'
        AND (NEW.cohort_cycle_id IS NULL OR cohort_cycle_id = NEW.cohort_cycle_id)
      ORDER BY created_at ASC
      LIMIT 1;
    END IF;

    -- Stamp the enrollment with the referral it was matched to (if any).
    IF target_ref_id IS NOT NULL AND NEW.referral_id IS DISTINCT FROM target_ref_id THEN
      NEW.referral_id := target_ref_id;
    END IF;

    IF NEW.paid_at IS NULL THEN
      NEW.paid_at := NOW();
    END IF;

    -- Flip the referral. The trigger on referrals handles payout + badge.
    IF target_ref_id IS NOT NULL THEN
      first_payment := (NEW.plan = 'payment_plan');
      UPDATE referrals
      SET status = 'paid',
          enrollment_date = COALESCE(enrollment_date, CURRENT_DATE),
          payment_cleared_date = COALESCE(payment_cleared_date, CURRENT_DATE),
          payment_plan = first_payment OR payment_plan
      WHERE id = target_ref_id AND status IS DISTINCT FROM 'paid';
    END IF;

  ELSIF NEW.status = 'refunded' AND (OLD.status IS DISTINCT FROM 'refunded') THEN
    IF NEW.refunded_at IS NULL THEN
      NEW.refunded_at := NOW();
    END IF;
    -- Flag the attributed referral and cancel any 'due' payouts.
    -- We don't auto-claw back already-paid Venmo payouts — Tracy handles that.
    IF NEW.referral_id IS NOT NULL THEN
      UPDATE referrals SET status = 'declined' WHERE id = NEW.referral_id;
      UPDATE payouts
      SET status = 'cancelled',
          notes = COALESCE(notes, '') || E'\nAuto-cancelled: enrollment refunded.'
      WHERE referral_id = NEW.referral_id AND status = 'due';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_enrollments_attribute_on_paid ON enrollments;
CREATE TRIGGER trg_enrollments_attribute_on_paid
  BEFORE UPDATE OF status ON enrollments
  FOR EACH ROW EXECUTE FUNCTION enrollments_attribute_on_paid();

-- ─── RLS ────────────────────────────────────────────────────────────────────
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Admins: full access.
DROP POLICY IF EXISTS "Admins full access enrollments" ON enrollments;
CREATE POLICY "Admins full access enrollments" ON enrollments
  FOR ALL TO authenticated
  USING (is_admin()) WITH CHECK (is_admin());

-- Ambassadors can read enrollments they referred (to see attribution detail).
DROP POLICY IF EXISTS "Ambassadors read own attributed enrollments" ON enrollments;
CREATE POLICY "Ambassadors read own attributed enrollments" ON enrollments
  FOR SELECT TO authenticated
  USING (
    ambassador_id IN (SELECT id FROM ambassadors WHERE user_id = auth.uid())
  );

-- Anon cannot read enrollments. The webhook runs with the service role key,
-- bypassing RLS. The enroll page never reads this table directly.

-- ============================================================================
-- Migration complete.
-- ============================================================================

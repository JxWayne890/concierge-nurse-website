-- ============================================
-- Pipeline routing updates for public forms
-- Run this in your Supabase SQL Editor
-- ============================================

-- Add the dedicated Toolkits pipeline so toolkit inquiries no longer sit in General.
INSERT INTO pipelines (name, stages)
VALUES ('Toolkits', '["New", "Contacted", "Nurturing", "Purchased", "Closed"]'::jsonb)
ON CONFLICT (name) DO UPDATE
SET stages = EXCLUDED.stages;

-- Keep the core pipeline stages stable if this is run more than once.
INSERT INTO pipelines (name, stages)
VALUES
  ('Accelerator', '["New", "Contacted", "Consult Booked", "Enrolled", "Completed"]'::jsonb),
  ('Consulting', '["New", "Contacted", "Discovery Call", "Proposal Sent", "Active Client"]'::jsonb),
  ('General', '["New", "Contacted", "Nurturing", "Converted", "Closed"]'::jsonb)
ON CONFLICT (name) DO UPDATE
SET stages = EXCLUDED.stages;

-- Seed tags used by the routing layer.
INSERT INTO tags (name)
VALUES
  ('Accelerator Inquiry'),
  ('Accelerator Enrolled'),
  ('Clarity Consult Inquiry'),
  ('VIP Bridge Inquiry'),
  ('Private Coaching Inquiry'),
  ('Toolkit Inquiry'),
  ('General Inquiry'),
  ('Toolkit: RN Concierge Business Toolkit'),
  ('Toolkit: HIPAA Business Compliance Toolkit'),
  ('Toolkit: HIPAA + RN Concierge Business Toolkit Bundle'),
  ('Toolkit: 2026 Concierge Nurse Planner')
ON CONFLICT (name) DO NOTHING;

-- Route a contact to one pipeline from public forms and remove a stale General card
-- when the lead has shown specific intent. This avoids duplicate pipeline cards.
CREATE OR REPLACE FUNCTION public.route_contact_to_pipeline(
  p_contact_id uuid,
  p_pipeline_name text,
  p_stage text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_pipeline_id uuid;
  v_general_pipeline_id uuid;
  v_stage text;
BEGIN
  SELECT id, COALESCE(p_stage, stages->>0, 'New')
  INTO v_pipeline_id, v_stage
  FROM pipelines
  WHERE name = p_pipeline_name;

  IF v_pipeline_id IS NULL THEN
    RETURN;
  END IF;

  INSERT INTO pipeline_contacts (pipeline_id, contact_id, stage)
  VALUES (v_pipeline_id, p_contact_id, v_stage)
  ON CONFLICT (pipeline_id, contact_id) DO UPDATE
  SET
    stage = CASE
      WHEN pipeline_contacts.stage IN ('Completed', 'Active Client', 'Purchased') THEN pipeline_contacts.stage
      WHEN p_stage IS NULL THEN pipeline_contacts.stage
      ELSE EXCLUDED.stage
    END,
    entered_stage_at = CASE
      WHEN pipeline_contacts.stage IS DISTINCT FROM EXCLUDED.stage
        AND p_stage IS NOT NULL
        AND pipeline_contacts.stage NOT IN ('Completed', 'Active Client', 'Purchased')
        THEN now()
      ELSE pipeline_contacts.entered_stage_at
    END;

  IF p_pipeline_name <> 'General' THEN
    SELECT id INTO v_general_pipeline_id
    FROM pipelines
    WHERE name = 'General';

    IF v_general_pipeline_id IS NOT NULL THEN
      DELETE FROM pipeline_contacts
      WHERE pipeline_id = v_general_pipeline_id
        AND contact_id = p_contact_id;
    END IF;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.route_contact_to_pipeline(uuid, text, text) TO anon, authenticated;

-- Backfill contacts into their most specific pipeline based on interest, tags, and activity.
WITH routed_contacts AS (
  SELECT
    c.id AS contact_id,
    CASE
      WHEN c.interest = 'accelerator_cohort'
        OR EXISTS (
          SELECT 1
          FROM contact_tags ct
          JOIN tags t ON t.id = ct.tag_id
          WHERE ct.contact_id = c.id
            AND t.name IN ('Accelerator Waitlist', 'Accelerator Inquiry', 'Accelerator Enrolled')
        )
        THEN 'Accelerator'
      WHEN c.interest IN ('business_consulting', 'clarity_consult', 'vip_bridge_session', 'private_coaching')
        OR EXISTS (
          SELECT 1
          FROM contact_tags ct
          JOIN tags t ON t.id = ct.tag_id
          WHERE ct.contact_id = c.id
            AND t.name IN ('Consulting Inquiry', 'Clarity Consult Inquiry', 'VIP Bridge Inquiry', 'Private Coaching Inquiry')
        )
        THEN 'Consulting'
      WHEN c.interest = 'toolkits_resources'
        OR EXISTS (
          SELECT 1
          FROM contact_tags ct
          JOIN tags t ON t.id = ct.tag_id
          WHERE ct.contact_id = c.id
            AND (t.name = 'Toolkit Inquiry' OR t.name LIKE 'Toolkit:%')
        )
        OR EXISTS (
          SELECT 1
          FROM activity_log al
          WHERE al.contact_id = c.id
            AND (
              al.description ILIKE '%toolkit%'
              OR al.metadata->>'interest' = 'toolkits_resources'
              OR al.metadata->>'routed_pipeline' = 'Toolkits'
            )
        )
        THEN 'Toolkits'
      ELSE NULL
    END AS pipeline_name
  FROM contacts c
),
inserted AS (
  INSERT INTO pipeline_contacts (pipeline_id, contact_id, stage)
  SELECT p.id, rc.contact_id, COALESCE(p.stages->>0, 'New')
  FROM routed_contacts rc
  JOIN pipelines p ON p.name = rc.pipeline_name
  WHERE rc.pipeline_name IS NOT NULL
  ON CONFLICT (pipeline_id, contact_id) DO NOTHING
  RETURNING contact_id
)
SELECT COUNT(*) AS routed_pipeline_contacts
FROM inserted;

-- Remove old General cards after a contact has a more specific pipeline.
WITH specific_contacts AS (
  SELECT pc.contact_id
  FROM pipeline_contacts pc
  JOIN pipelines p ON p.id = pc.pipeline_id
  WHERE p.name IN ('Accelerator', 'Consulting', 'Toolkits')
)
DELETE FROM pipeline_contacts pc
USING pipelines p
WHERE p.id = pc.pipeline_id
  AND p.name = 'General'
  AND pc.contact_id IN (SELECT contact_id FROM specific_contacts);

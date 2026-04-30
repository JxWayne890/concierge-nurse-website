-- ============================================================================
-- Route manually uploaded / imported contacts into General nurturing
-- Run this in Supabase SQL Editor.
--
-- Purpose:
--   Imported list contacts do not have clear product intent, so they should not
--   be marked as Accelerator, Consulting, or Toolkit leads. This puts them in
--   General / Nurturing unless they already belong to a specific pipeline.
-- ============================================================================

-- Make sure the destination pipeline exists.
INSERT INTO pipelines (name, stages)
VALUES ('General', '["New", "Contacted", "Nurturing", "Converted", "Closed"]'::jsonb)
ON CONFLICT (name) DO UPDATE
SET stages = EXCLUDED.stages;

-- Tags for imported list contacts.
INSERT INTO tags (name)
VALUES
  ('Manual Upload'),
  ('Imported List')
ON CONFLICT (name) DO NOTHING;

WITH manual_import_contacts AS (
  SELECT DISTINCT c.id
  FROM contacts c
  WHERE
    c.source IN (
      'csv_import',
      'manualUpload',
      'manual_upload',
      'manual upload',
      'import',
      'imported_list'
    )
    OR EXISTS (
      SELECT 1
      FROM activity_log al
      WHERE al.contact_id = c.id
        AND (
          al.type = 'import'
          OR al.description ILIKE '%csv upload%'
          OR al.description ILIKE '%imported via csv%'
          OR al.description ILIKE '%manual upload%'
        )
    )
    OR EXISTS (
      SELECT 1
      FROM contact_tags ct
      JOIN tags t ON t.id = ct.tag_id
      WHERE ct.contact_id = c.id
        AND (
          t.name ILIKE '%upload%'
          OR t.name ILIKE '%import%'
        )
    )
),
eligible_contacts AS (
  SELECT mic.id
  FROM manual_import_contacts mic
  WHERE NOT EXISTS (
    SELECT 1
    FROM pipeline_contacts pc
    JOIN pipelines p ON p.id = pc.pipeline_id
    WHERE pc.contact_id = mic.id
      AND p.name IN ('Accelerator', 'Consulting', 'Toolkits')
  )
),
general_pipeline AS (
  SELECT id
  FROM pipelines
  WHERE name = 'General'
),
manual_upload_tag AS (
  SELECT id
  FROM tags
  WHERE name = 'Manual Upload'
),
imported_list_tag AS (
  SELECT id
  FROM tags
  WHERE name = 'Imported List'
),
updated_contacts AS (
  UPDATE contacts c
  SET
    interest = COALESCE(NULLIF(c.interest, ''), 'general_nurture'),
    lifecycle_stage = COALESCE(NULLIF(c.lifecycle_stage, ''), 'Explorer'),
    status = COALESCE(NULLIF(c.status, ''), 'new'),
    updated_at = now()
  WHERE c.id IN (SELECT id FROM eligible_contacts)
  RETURNING c.id
),
tagged_manual AS (
  INSERT INTO contact_tags (contact_id, tag_id)
  SELECT ec.id, mut.id
  FROM eligible_contacts ec
  CROSS JOIN manual_upload_tag mut
  ON CONFLICT (contact_id, tag_id) DO NOTHING
  RETURNING contact_id
),
tagged_imported AS (
  INSERT INTO contact_tags (contact_id, tag_id)
  SELECT ec.id, ilt.id
  FROM eligible_contacts ec
  CROSS JOIN imported_list_tag ilt
  ON CONFLICT (contact_id, tag_id) DO NOTHING
  RETURNING contact_id
),
routed AS (
  INSERT INTO pipeline_contacts (pipeline_id, contact_id, stage)
  SELECT gp.id, ec.id, 'Nurturing'
  FROM eligible_contacts ec
  CROSS JOIN general_pipeline gp
  ON CONFLICT (pipeline_id, contact_id) DO UPDATE
  SET
    stage = CASE
      WHEN pipeline_contacts.stage IN ('Converted', 'Closed') THEN pipeline_contacts.stage
      ELSE 'Nurturing'
    END,
    entered_stage_at = CASE
      WHEN pipeline_contacts.stage IN ('Converted', 'Closed') THEN pipeline_contacts.entered_stage_at
      WHEN pipeline_contacts.stage IS DISTINCT FROM 'Nurturing' THEN now()
      ELSE pipeline_contacts.entered_stage_at
    END
  RETURNING contact_id
),
logged AS (
  INSERT INTO activity_log (contact_id, type, description, metadata)
  SELECT
    ec.id,
    'import',
    'Routed manual upload contact to General / Nurturing',
    jsonb_build_object(
      'source', 'manual_upload_backfill',
      'pipeline', 'General',
      'stage', 'Nurturing'
    )
  FROM eligible_contacts ec
  WHERE NOT EXISTS (
    SELECT 1
    FROM activity_log al
    WHERE al.contact_id = ec.id
      AND al.description = 'Routed manual upload contact to General / Nurturing'
  )
  RETURNING contact_id
)
SELECT
  (SELECT count(*) FROM manual_import_contacts) AS matched_manual_import_contacts,
  (SELECT count(*) FROM eligible_contacts) AS routed_to_general_nurturing,
  (SELECT count(*) FROM updated_contacts) AS contacts_updated,
  (SELECT count(*) FROM tagged_manual) AS manual_upload_tags_added,
  (SELECT count(*) FROM tagged_imported) AS imported_list_tags_added,
  (SELECT count(*) FROM logged) AS activity_logs_added;

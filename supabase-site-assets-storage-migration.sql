-- ============================================================================
-- Supabase Storage for site, brand, and email assets
-- Run this in your Supabase SQL Editor.
-- Replaces the old external upload path for email/brand images.
-- ============================================================================

INSERT INTO storage.buckets (
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types
)
VALUES (
  'site-assets',
  'site-assets',
  true,
  10485760,
  ARRAY[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/svg+xml'
  ]
)
ON CONFLICT (id) DO UPDATE
SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Public read site assets" ON storage.objects;
CREATE POLICY "Public read site assets"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'site-assets');

DROP POLICY IF EXISTS "Authenticated upload site assets" ON storage.objects;
CREATE POLICY "Authenticated upload site assets"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'site-assets');

DROP POLICY IF EXISTS "Authenticated update site assets" ON storage.objects;
CREATE POLICY "Authenticated update site assets"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'site-assets')
  WITH CHECK (bucket_id = 'site-assets');

DROP POLICY IF EXISTS "Authenticated delete site assets" ON storage.objects;
CREATE POLICY "Authenticated delete site assets"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'site-assets');

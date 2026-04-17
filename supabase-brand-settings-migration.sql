-- Brand settings — single-row table driving email branding.
-- Run in Supabase SQL editor.

CREATE TABLE IF NOT EXISTS brand_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name TEXT DEFAULT 'Concierge Nurse Business Society',
  logo_url TEXT,
  photo_url TEXT,
  from_name TEXT DEFAULT 'Concierge Nurse Business Society',
  from_email TEXT DEFAULT 'hello@conciergenursesociety.com',
  brand_color TEXT DEFAULT '#C9A84C',
  footer_text TEXT DEFAULT 'Concierge Nurse Business Society',
  website_url TEXT DEFAULT 'https://www.conciergenursesociety.com',
  social_facebook TEXT,
  social_instagram TEXT,
  social_linkedin TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE brand_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Auth full access brand_settings" ON brand_settings;
CREATE POLICY "Auth full access brand_settings"
  ON brand_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Anon can read brand settings (needed by serverless functions using anon key)
DROP POLICY IF EXISTS "Anon can read brand_settings" ON brand_settings;
CREATE POLICY "Anon can read brand_settings"
  ON brand_settings FOR SELECT TO anon USING (true);

-- Seed the single default row (only if the table is empty)
INSERT INTO brand_settings (business_name)
SELECT 'Concierge Nurse Business Society'
WHERE NOT EXISTS (SELECT 1 FROM brand_settings);

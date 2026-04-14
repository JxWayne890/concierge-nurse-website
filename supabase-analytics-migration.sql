-- ============================================
-- Page Views Analytics
-- Run this in your Supabase SQL Editor
-- ============================================

CREATE TABLE page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  screen_width INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for fast date-range queries
CREATE INDEX page_views_created_at_idx ON page_views (created_at DESC);
CREATE INDEX page_views_path_idx ON page_views (path);

-- RLS
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Public can insert (track page views from frontend)
CREATE POLICY "Anon can insert page_views"
  ON page_views FOR INSERT
  TO anon
  WITH CHECK (true);

-- Authenticated admin can read everything
CREATE POLICY "Auth full access page_views"
  ON page_views FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

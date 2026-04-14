import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function PageTracker() {
  const location = useLocation();
  const lastPath = useRef('');

  useEffect(() => {
    const path = location.pathname;

    // Don't track admin pages
    if (path.startsWith('/admin')) return;

    // Don't double-track the same path (e.g. hash changes)
    if (path === lastPath.current) return;
    lastPath.current = path;

    supabase.from('page_views').insert({
      path,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent || null,
      screen_width: window.innerWidth || null,
    }).then(() => {});
  }, [location.pathname]);

  return null;
}

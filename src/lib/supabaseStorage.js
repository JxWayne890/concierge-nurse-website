import { supabase } from './supabase';

const SITE_ASSETS_BUCKET = 'site-assets';

function sanitizeFileName(name) {
  const base = (name || 'image')
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return base || 'image';
}

function uniqueId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export async function uploadPublicImage(file, { folder = 'uploads' } = {}) {
  if (!file) throw new Error('No image file selected.');
  if (!file.type?.startsWith('image/')) {
    throw new Error('Please choose an image file.');
  }

  const safeFolder = folder.replace(/[^a-z0-9/_-]/gi, '').replace(/^\/+|\/+$/g, '') || 'uploads';
  const fileName = `${uniqueId()}-${sanitizeFileName(file.name)}`;
  const path = `${safeFolder}/${fileName}`;

  const { error } = await supabase.storage
    .from(SITE_ASSETS_BUCKET)
    .upload(path, file, {
      cacheControl: '31536000',
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    if (/bucket/i.test(error.message)) {
      throw new Error('Supabase Storage bucket "site-assets" is missing. Run the site assets storage SQL migration first.');
    }
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from(SITE_ASSETS_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

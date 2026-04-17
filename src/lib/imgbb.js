const IMGBB_API_KEY = '21c70359a24d1d10335f4f41a8867b08';
const IMGBB_ENDPOINT = `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`;

export async function uploadToImgBB(file) {
  const base64 = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') resolve(result.split(',')[1] || '');
      else reject(new Error('Unexpected file read result'));
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });

  const formData = new FormData();
  formData.append('image', base64);

  const res = await fetch(IMGBB_ENDPOINT, { method: 'POST', body: formData });
  const json = await res.json();
  if (!json || !json.success || !json.data?.url) {
    throw new Error(json?.error?.message || 'ImgBB upload failed');
  }
  return json.data.url;
}

import { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadToImgBB } from '../../lib/imgbb';

export default function ImageUpload({
  currentUrl,
  onUpload,
  onClear,
  label,
  shape = 'square',
  helpText,
}) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const sizeClass = shape === 'circle' ? 'w-32 h-32 rounded-full' : 'w-full max-w-[260px] h-24';

  async function handleFile(file) {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file');
      return;
    }
    setError('');
    setUploading(true);
    try {
      const url = await uploadToImgBB(file);
      onUpload(url);
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  function openPicker() {
    if (uploading) return;
    inputRef.current?.click();
  }

  function onInputChange(e) {
    const file = e.target.files?.[0];
    handleFile(file);
    e.target.value = '';
  }

  function onDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  }

  return (
    <div>
      {label && (
        <label className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-charcoal/40 block mb-2">
          {label}
        </label>
      )}
      <div
        onClick={openPicker}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={`${sizeClass} relative overflow-hidden border border-dashed cursor-pointer flex items-center justify-center transition-colors ${
          dragOver ? 'border-gold bg-cream' : 'border-cream-dark bg-cream/40 hover:border-gold'
        }`}
      >
        {currentUrl ? (
          <>
            <img
              src={currentUrl}
              alt={label || 'uploaded'}
              className={`w-full h-full ${shape === 'circle' ? 'object-cover' : 'object-contain p-2'}`}
            />
            {!uploading && (
              <div className="absolute inset-0 bg-navy/0 hover:bg-navy/40 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="text-white text-[0.65rem] font-semibold tracking-wider uppercase">Replace</span>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-1 text-charcoal/40 px-2 text-center">
            {uploading ? (
              <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {shape === 'circle' ? <ImageIcon size={20} /> : <Upload size={20} />}
                <span className="text-[0.65rem] font-semibold tracking-wider uppercase">Click or drop</span>
              </>
            )}
          </div>
        )}
        {uploading && currentUrl && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onInputChange}
          className="hidden"
        />
      </div>
      {helpText && <p className="text-[0.65rem] text-charcoal/40 mt-1.5">{helpText}</p>}
      {currentUrl && onClear && !uploading && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="mt-2 inline-flex items-center gap-1 text-[0.65rem] font-semibold tracking-wider uppercase text-charcoal/50 hover:text-red-600 transition-colors"
        >
          <X size={12} /> Remove
        </button>
      )}
      {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
    </div>
  );
}

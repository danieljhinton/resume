import { useEffect } from 'react';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption || ''} />
        {item.caption && <p className="muted-text">{item.caption}</p>}
        <button className="lightbox-close" onClick={onClose} autoFocus>
          Close [X]
        </button>
      </div>
    </div>
  );
}

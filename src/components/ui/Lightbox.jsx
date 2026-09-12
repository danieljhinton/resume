import { useEffect } from 'react';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!item) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption || ''} />
        {item.caption && <p className="muted-text">{item.caption}</p>}
        <div className="lightbox-actions">
          <button className="lightbox-nav" onClick={onPrev} aria-label="Previous photo">
            &lsaquo; Prev
          </button>
          <button className="lightbox-close" onClick={onClose} autoFocus>
            Close [X]
          </button>
          <button className="lightbox-nav" onClick={onNext} aria-label="Next photo">
            Next &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
}

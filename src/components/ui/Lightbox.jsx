import { useEffect } from 'react';

/**
 * Generic modal "window" — dark overlay + bordered panel + Close (and
 * optional Prev/Next) actions. Renders whatever media is passed as
 * children (an <img> for photos, a YouTube <iframe> for videos, etc).
 * Mount/unmount this component to open/close it.
 */
export default function Lightbox({ onClose, onPrev, onNext, caption, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (onPrev && e.key === 'ArrowLeft') onPrev();
      if (onNext && e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        {children}
        {caption && <p className="muted-text">{caption}</p>}
        <div className="lightbox-actions">
          {onPrev ? (
            <button className="lightbox-nav" onClick={onPrev} aria-label="Previous">
              &lsaquo; Prev
            </button>
          ) : (
            <span aria-hidden="true" />
          )}
          <button className="lightbox-close" onClick={onClose} autoFocus>
            Close [X]
          </button>
          {onNext ? (
            <button className="lightbox-nav" onClick={onNext} aria-label="Next">
              Next &rsaquo;
            </button>
          ) : (
            <span aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
}

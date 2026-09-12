import { useState } from 'react';
import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import Lightbox from '../components/ui/Lightbox.jsx';
import { photos } from '../data/photosData.js';
import { assetUrl } from '../utils/assetPath.js';

const readyPhotos = photos.filter((photo) => photo.status === 'ready' && photo.src);

export default function Photos() {
  const [activeIndex, setActiveIndex] = useState(null);

  const active = activeIndex === null ? null : readyPhotos[activeIndex];

  const step = (delta) =>
    setActiveIndex((i) => (i + delta + readyPhotos.length) % readyPhotos.length);

  return (
    <TerminalFrame title="LUMON // MDR / PHOTOS.DAT">
      <div className="stack">
        <div className="media-grid">
          {photos.map((photo) => {
            const ready = photo.status === 'ready' && photo.src;
            return (
              <div
                key={photo.id}
                className={'media-slot' + (ready ? ' is-ready' : '')}
                onClick={
                  ready
                    ? () => setActiveIndex(readyPhotos.findIndex((p) => p.id === photo.id))
                    : undefined
                }
                role={ready ? 'button' : undefined}
                tabIndex={ready ? 0 : undefined}
              >
                {ready ? (
                  <img src={assetUrl(photo.src)} alt={photo.caption || ''} />
                ) : (
                  'IMAGE PENDING REFINEMENT'
                )}
              </div>
            );
          })}
        </div>
      </div>
      {active && (
        <Lightbox
          onClose={() => setActiveIndex(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
          caption={active.caption}
        >
          <img src={assetUrl(active.src)} alt={active.caption || ''} />
        </Lightbox>
      )}
    </TerminalFrame>
  );
}

import { useState } from 'react';
import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import Lightbox from '../components/ui/Lightbox.jsx';
import { photos } from '../data/photosData.js';
import { assetUrl } from '../utils/assetPath.js';

export default function Photos() {
  const [active, setActive] = useState(null);

  return (
    <TerminalFrame title="LUMON // MDR / PHOTOS.DAT">
      <div className="stack">
        <p className="muted-text">Visual records archive.</p>
        <div className="media-grid">
          {photos.map((photo) => {
            const ready = photo.status === 'ready' && photo.src;
            return (
              <div
                key={photo.id}
                className={'media-slot' + (ready ? ' is-ready' : '')}
                onClick={ready ? () => setActive({ ...photo, src: assetUrl(photo.src) }) : undefined}
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
      <Lightbox item={active} onClose={() => setActive(null)} />
    </TerminalFrame>
  );
}

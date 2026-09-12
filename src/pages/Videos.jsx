import { useState } from 'react';
import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import Lightbox from '../components/ui/Lightbox.jsx';
import { videos } from '../data/videosData.js';

const readyVideos = videos.filter((video) => video.status === 'ready' && video.youtubeId);

export default function Videos() {
  const [activeIndex, setActiveIndex] = useState(null);

  const active = activeIndex === null ? null : readyVideos[activeIndex];

  return (
    <TerminalFrame title="LUMON // MDR / VIDEOS.DAT">
      <div className="stack">
        <div className="video-list">
          {videos.map((video) => {
            const ready = video.status === 'ready' && video.youtubeId;
            return (
              <div
                key={video.id}
                className={'video-row' + (ready ? ' is-ready' : '')}
                onClick={
                  ready
                    ? () => setActiveIndex(readyVideos.findIndex((v) => v.id === video.id))
                    : undefined
                }
                role={ready ? 'button' : undefined}
                tabIndex={ready ? 0 : undefined}
              >
                <div className="video-row__thumb">
                  {ready ? (
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title || ''}
                    />
                  ) : (
                    'VIDEO PENDING REFINEMENT'
                  )}
                </div>
                <div className="video-row__body">
                  <div className="video-row__title">{video.title || 'UNTITLED FILE'}</div>
                  <p className="video-row__desc muted-text">{video.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {active && (
        <Lightbox onClose={() => setActiveIndex(null)} caption={active.title}>
          <iframe
            className="lightbox-video"
            src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
            title={active.title || active.id}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Lightbox>
      )}
    </TerminalFrame>
  );
}

import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import { videos } from '../data/videosData.js';

export default function Videos() {
  return (
    <TerminalFrame title="LUMON // MDR / VIDEOS.DAT">
      <div className="stack">
        <p className="muted-text">Motion records archive.</p>
        <div className="media-grid">
          {videos.map((video) => {
            const ready = video.status === 'ready' && video.embedUrl;
            return (
              <div key={video.id} className={'media-slot' + (ready ? ' is-ready' : '')}>
                {ready ? (
                  <iframe
                    src={video.embedUrl}
                    title={video.title || video.id}
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  'VIDEO PENDING REFINEMENT'
                )}
              </div>
            );
          })}
        </div>
      </div>
    </TerminalFrame>
  );
}

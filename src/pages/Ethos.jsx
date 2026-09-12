import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import PlaceholderNotice from '../components/ui/PlaceholderNotice.jsx';
import { ethos } from '../data/content.js';

export default function Ethos() {
  return (
    <TerminalFrame title="LUMON // MDR / ETHOS.DAT">
      <div className="stack">
        <h1 className="glow-text mono-label">{ethos.heading}</h1>
        {!ethos.statement ? (
          <PlaceholderNotice label="ETHOS STATEMENT PENDING REFINEMENT" />
        ) : (
          <p>{ethos.statement}</p>
        )}

        {ethos.principles.length > 0 && (
          <div className="two-col">
            {ethos.principles.map((p, i) => (
              <div className="card" key={i}>
                <h2 className="mono-label dim-text" style={{ marginTop: 0 }}>
                  {p.title}
                </h2>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </TerminalFrame>
  );
}

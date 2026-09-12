import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import PlaceholderNotice from '../components/ui/PlaceholderNotice.jsx';
import { about } from '../data/content.js';

export default function About() {
  return (
    <TerminalFrame title="LUMON // MDR / ABOUT.DAT">
      <div className="stack">
        <h1 className="glow-text mono-label">{about.heading}</h1>
        {about.paragraphs.length === 0 ? (
          <PlaceholderNotice label="ABOUT FILE PENDING REFINEMENT" />
        ) : (
          about.paragraphs.map((p, i) => <p key={i}>{p}</p>)
        )}
      </div>
    </TerminalFrame>
  );
}

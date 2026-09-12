import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import TypewriterText from '../components/ui/TypewriterText.jsx';
import { home } from '../data/content.js';

export default function Home() {
  return (
    <TerminalFrame title="LUMON // MDR / HOME.DAT">
      <div className="stack">
        {home.bootLines.map((line, i) => (
          <TypewriterText
            key={i}
            text={line}
            speed={18}
            as="p"
            className={i === 0 ? 'glow-text mono-label' : 'mono-label dim-text'}
          />
        ))}
        <p className="muted-text" style={{ marginTop: 12 }}>
          &gt; {home.tagline}_
        </p>
        <p className="muted-text">
          Use the terminal above to navigate: About, Skills, Photos, Videos, my
          Customer Success Ethos, Resume, and the Refine Macrodata terminal.
        </p>
      </div>
    </TerminalFrame>
  );
}

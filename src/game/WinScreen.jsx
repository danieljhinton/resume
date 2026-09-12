import { useState } from 'react';
import { WIN_LINES } from './gameConfig.js';

const CONFETTI_GLYPHS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function buildConfettiPieces() {
  return Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2.5 + Math.random() * 2,
    glyph: CONFETTI_GLYPHS[Math.floor(Math.random() * CONFETTI_GLYPHS.length)],
  }));
}

function ConfettiField() {
  // Lazy initializer runs once on mount, not on every render.
  const [pieces] = useState(buildConfettiPieces);

  return (
    <div className="rm-confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
}

export default function WinScreen({ onReset }) {
  return (
    <div className="rm-win-overlay">
      <div className="rm-win-panel">
        <ConfettiField />
        <h2>{WIN_LINES[0]}</h2>
        {WIN_LINES.slice(1).map((line, i) => (
          <p key={i}>{line}</p>
        ))}
        <button className="rm-win-reset" onClick={onReset}>
          Reset Terminal
        </button>
      </div>
    </div>
  );
}

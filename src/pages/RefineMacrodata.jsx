import TerminalFrame from '../components/layout/TerminalFrame.jsx';
import RefineMacrodataGame from '../game/RefineMacrodataGame.jsx';

export default function RefineMacrodata() {
  return (
    <TerminalFrame title="LUMON // MDR / REFINE.EXE">
      <p className="muted-text" style={{ marginTop: 0 }}>
        Some numbers feel wrong. Select them and assign them to a bin. Fill
        the quota to complete the file.
      </p>
      <RefineMacrodataGame />
    </TerminalFrame>
  );
}

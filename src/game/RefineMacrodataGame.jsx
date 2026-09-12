import { useEffect, useMemo, useReducer } from 'react';
import ProgressBar from '../components/ui/ProgressBar.jsx';
import Bin from './Bin.jsx';
import NumberGrid from './NumberGrid.jsx';
import WinScreen from './WinScreen.jsx';
import { gameReducer, initialGameState } from './gameReducer.js';

export default function RefineMacrodataGame() {
  const [state, dispatch] = useReducer(gameReducer, undefined, initialGameState);

  // Once a binned cell's exit animation has had time to play, drop it from
  // the grid entirely.
  useEffect(() => {
    const hasExiting = state.cells.some((c) => c.status === 'exiting');
    if (!hasExiting) return;
    const t = setTimeout(() => dispatch({ type: 'REMOVE_EXITED' }), 220);
    return () => clearTimeout(t);
  }, [state.cells]);

  const selectionCount = useMemo(
    () => state.cells.filter((c) => c.status === 'selected').length,
    [state.cells]
  );

  const progress = state.binnedCount / state.quota;

  return (
    <div className="rm-game">
      <div className="rm-hud">
        <span className="rm-hud__title">Macrodata Refinement — Cortex Session</span>
        <span className="rm-instructions">
          Select numbers, then assign them to a bin.
        </span>
      </div>

      <ProgressBar progress={progress} />

      <div className="rm-grid-wrap">
        <NumberGrid
          cells={state.cells}
          onToggle={(id) => dispatch({ type: 'TOGGLE_SELECT', id })}
        />
      </div>

      <div className="rm-bins">
        {state.bins.map((bin) => (
          <Bin
            key={bin.id}
            bin={bin}
            armed={selectionCount > 0}
            onAssign={(binId) => dispatch({ type: 'ASSIGN_SELECTED_TO_BIN', binId })}
          />
        ))}
      </div>

      {state.phase === 'won' && (
        <WinScreen onReset={() => dispatch({ type: 'RESET' })} />
      )}
    </div>
  );
}

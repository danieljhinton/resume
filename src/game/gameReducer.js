import { BINS, CELL_COUNT, GRID_COLS, JUMPY_RATIO, QUOTA } from './gameConfig.js';

function buildCells() {
  const jumpyCount = Math.round(CELL_COUNT * JUMPY_RATIO);
  const jumpyIndexes = new Set();
  while (jumpyIndexes.size < jumpyCount) {
    jumpyIndexes.add(Math.floor(Math.random() * CELL_COUNT));
  }

  return Array.from({ length: CELL_COUNT }, (_, i) => ({
    id: `c${i}-${Math.random().toString(36).slice(2, 7)}`,
    value: Math.floor(Math.random() * 10),
    col: i % GRID_COLS,
    row: Math.floor(i / GRID_COLS),
    jumpy: jumpyIndexes.has(i),
    status: 'idle', // idle | selected | exiting
  }));
}

export function initialGameState() {
  return {
    cells: buildCells(),
    bins: BINS.map((b) => ({ ...b, count: 0 })),
    binnedCount: 0,
    quota: QUOTA,
    phase: 'playing', // playing | won
  };
}

export function gameReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SELECT': {
      if (state.phase !== 'playing') return state;
      return {
        ...state,
        cells: state.cells.map((cell) =>
          cell.id === action.id && cell.status !== 'exiting'
            ? { ...cell, status: cell.status === 'selected' ? 'idle' : 'selected' }
            : cell
        ),
      };
    }

    case 'ASSIGN_SELECTED_TO_BIN': {
      if (state.phase !== 'playing') return state;
      const selectedIds = state.cells
        .filter((c) => c.status === 'selected')
        .map((c) => c.id);
      if (selectedIds.length === 0) return state;

      const newBinnedCount = state.binnedCount + selectedIds.length;
      const nextPhase = newBinnedCount >= state.quota ? 'won' : 'playing';

      return {
        ...state,
        cells: state.cells.map((cell) =>
          selectedIds.includes(cell.id) ? { ...cell, status: 'exiting' } : cell
        ),
        bins: state.bins.map((bin) =>
          bin.id === action.binId ? { ...bin, count: bin.count + selectedIds.length } : bin
        ),
        binnedCount: newBinnedCount,
        phase: nextPhase,
      };
    }

    case 'REMOVE_EXITED': {
      return {
        ...state,
        cells: state.cells.filter((c) => c.status !== 'exiting'),
      };
    }

    case 'RESET': {
      return initialGameState();
    }

    default:
      return state;
  }
}

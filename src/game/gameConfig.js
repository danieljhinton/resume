export const GRID_ROWS = 8;
export const GRID_COLS = 10;
export const CELL_COUNT = GRID_ROWS * GRID_COLS;

export const JUMPY_RATIO = 0.15;

export const BINS = [
  { id: 'WO', label: 'WO' },
  { id: 'FC', label: 'FC' },
  { id: 'DR', label: 'DR' },
  { id: 'MA', label: 'MA' },
];

export const QUOTA = 40;

// Distance (px) within which the cursor causes a jumpy cell to scurry away.
export const JITTER_RADIUS = 60;
// Max offset (px) a jumpy cell can be nudged from its home position.
export const JITTER_MAX_OFFSET = 22;

export const WIN_LINES = [
  'REFINEMENT COMPLETE — 100%',
  'THE WORK IS MYSTERIOUS AND IMPORTANT.',
  'PLEASE ENJOY A WAFFLE PARTY.',
];

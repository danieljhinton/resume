import { useEffect, useRef } from 'react';
import NumberCell from './NumberCell.jsx';
import { JITTER_MAX_OFFSET, JITTER_RADIUS } from './gameConfig.js';

/**
 * Renders the grid and drives the "jumpy" number behavior: jumpy cells
 * scurry away from the cursor. Positions are updated by writing directly
 * to each cell's DOM transform (via cached refs), throttled with
 * requestAnimationFrame, so proximity tracking never triggers a React
 * re-render of the whole grid.
 */
export default function NumberGrid({ cells, onToggle }) {
  const gridRef = useRef(null);
  const nodeMap = useRef(new Map());
  const homeRects = useRef(new Map());
  const pointerRef = useRef(null);
  const rafRef = useRef(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
  }, []);

  function registerRef(id, node) {
    if (node) nodeMap.current.set(id, node);
    else nodeMap.current.delete(id);
  }

  // Cache home positions of jumpy cells whenever the cell set/layout changes.
  useEffect(() => {
    const measure = () => {
      homeRects.current.clear();
      cells.forEach((cell) => {
        if (!cell.jumpy) return;
        const node = nodeMap.current.get(cell.id);
        if (node) homeRects.current.set(cell.id, node.getBoundingClientRect());
      });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [cells]);

  useEffect(() => {
    if (reducedMotionRef.current) return;

    function tick() {
      rafRef.current = null;
      const pointer = pointerRef.current;
      if (!pointer) return;

      homeRects.current.forEach((rect, id) => {
        const node = nodeMap.current.get(id);
        if (!node) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - pointer.x;
        const dy = cy - pointer.y;
        const dist = Math.hypot(dx, dy);

        if (dist < JITTER_RADIUS && dist > 0.01) {
          const strength = 1 - dist / JITTER_RADIUS;
          const offsetX = (dx / dist) * JITTER_MAX_OFFSET * strength;
          const offsetY = (dy / dist) * JITTER_MAX_OFFSET * strength;
          node.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
          node.style.transform = '';
        }
      });
    }

    function onPointerMove(e) {
      pointerRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    }

    window.addEventListener('pointermove', onPointerMove);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="rm-grid" ref={gridRef}>
      {cells.map((cell) => (
        <NumberCell
          key={cell.id}
          cell={cell}
          onToggle={onToggle}
          registerRef={registerRef}
        />
      ))}
    </div>
  );
}

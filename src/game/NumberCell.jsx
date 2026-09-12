export default function NumberCell({ cell, onToggle, registerRef }) {
  const classes =
    'rm-cell' +
    (cell.jumpy ? ' is-jumpy' : '') +
    (cell.status === 'selected' ? ' is-selected' : '') +
    (cell.status === 'exiting' ? ' is-exiting' : '');

  return (
    <div
      ref={(node) => registerRef(cell.id, node)}
      className={classes}
      onClick={() => onToggle(cell.id)}
      role="button"
      tabIndex={0}
      aria-pressed={cell.status === 'selected'}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle(cell.id);
        }
      }}
    >
      {cell.value}
    </div>
  );
}

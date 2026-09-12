export default function Bin({ bin, onAssign, armed }) {
  return (
    <button
      type="button"
      className={'rm-bin' + (armed ? ' is-armed' : '')}
      onClick={() => onAssign(bin.id)}
    >
      <div className="rm-bin__label">{bin.label}</div>
      <div className="rm-bin__count">{bin.count} REFINED</div>
    </button>
  );
}

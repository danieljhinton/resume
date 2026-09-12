export default function ProgressBar({ progress, label }) {
  const pct = Math.min(1, Math.max(0, progress)) * 100;

  return (
    <div>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-readout">
        {label ?? `${pct.toFixed(1)}% COMPLETE`}
      </div>
    </div>
  );
}

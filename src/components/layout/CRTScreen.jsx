/**
 * Global CRT effect wrapper. Mounted once around the whole app so every
 * route automatically inherits the scanline/vignette/flicker treatment
 * without any per-page opt-in.
 */
export default function CRTScreen({ children }) {
  return (
    <div className="crt-screen">
      <div className="crt-scanlines crt-flicker" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />
      {children}
    </div>
  );
}

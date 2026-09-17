/**
 * Global CRT effect wrapper. Mounted once around the whole app so every
 * route automatically inherits the scanline/vignette/flicker treatment
 * without any per-page opt-in.
 *
 * The overlay divs are rendered as children of `.app-shell` (see App.jsx),
 * not as its siblings — `.app-shell` establishes its own stacking context
 * (position: relative + z-index), which would otherwise cap every
 * descendant below the overlay regardless of z-index, breaking the photo
 * thumbnails' attempt to render above it at z-index: 51.
 */
export default function CRTScreen({ children }) {
  return <div className="crt-screen">{children}</div>;
}

/**
 * Lumon Industries wordmark: a wireframe-globe oval around "LUMON", with the
 * O rendered as a rounded square holding a droplet cutout. Pure SVG
 * (currentColor) so it inherits whatever color/opacity its container sets.
 */
export default function LumonLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 110"
      role="img"
      aria-label="Lumon Industries"
      fill="none"
      stroke="currentColor"
    >
      <mask id="lumon-drop-mask">
        <rect x="0" y="0" width="240" height="110" fill="white" />
        <path
          d="M155,42 C161,50 167,56 167,62 A12,12 0 1 1 143,62 C143,56 149,50 155,42 Z"
          fill="black"
        />
      </mask>

      <ellipse cx="120" cy="55" rx="112" ry="50" strokeWidth="3" />
      <path d="M20.5,32 L219.5,32" strokeWidth="2" />
      <path d="M20.5,78 L219.5,78" strokeWidth="2" />
      <path d="M120,5 C40,5 40,105 120,105" strokeWidth="2" />
      <path d="M120,5 C80,5 80,105 120,105" strokeWidth="2" />
      <path d="M120,5 C160,5 160,105 120,105" strokeWidth="2" />
      <path d="M120,5 C200,5 200,105 120,105" strokeWidth="2" />

      {/* Wordmark: a bold geometric sans (not the terminal's mono font,
          which reads wrong for a brand mark) with the O swapped for a
          rounded square + droplet cutout. Block is centered on cx=120. */}
      <text
        x="24"
        y="70"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="44"
        stroke="none"
        fill="currentColor"
      >
        LUM
      </text>
      <rect
        x="136"
        y="36"
        width="38"
        height="38"
        rx="8"
        fill="currentColor"
        stroke="none"
        mask="url(#lumon-drop-mask)"
      />
      <text
        x="180"
        y="70"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="44"
        stroke="none"
        fill="currentColor"
      >
        N
      </text>
    </svg>
  );
}

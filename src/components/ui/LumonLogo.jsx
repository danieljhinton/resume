/**
 * Lumon Industries wordmark: a wireframe-globe oval around "LUMON", with the
 * O rendered as a ring holding a droplet cutout. Pure SVG (currentColor) so
 * it inherits whatever color/opacity its container sets.
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
          d="M118,42 C124,50 130,56 130,62 A12,12 0 1 1 106,62 C106,56 112,50 118,42 Z"
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

      <text
        x="35"
        y="67"
        fontFamily="var(--font-terminal)"
        fontWeight="700"
        fontSize="34"
        letterSpacing="2"
        stroke="none"
        fill="currentColor"
      >
        LUM
      </text>
      <circle cx="118" cy="55" r="18" fill="currentColor" stroke="none" mask="url(#lumon-drop-mask)" />
      <text
        x="136"
        y="67"
        fontFamily="var(--font-terminal)"
        fontWeight="700"
        fontSize="34"
        letterSpacing="2"
        stroke="none"
        fill="currentColor"
      >
        N
      </text>
    </svg>
  );
}

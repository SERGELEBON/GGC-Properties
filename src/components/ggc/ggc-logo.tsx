/**
 * GGC Properties logo — stylised SVG based on the company signboard:
 * blue roof mark with interlocking G-G-C letters (green / blue / red),
 * "PROPERTIES" wordmark in brand blue, "(LANDS & HOUSES)" tagline in red.
 */
export function GGCLogo({
  className = "h-10",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const blue = "#1B7DC3";
  const blueDark = "#1568A4";
  const red = "#C8262C";
  const green = "#2E9E4F";

  return (
    <svg
      viewBox="0 0 400 84"
      className={className}
      role="img"
      aria-label="GGC Properties — Lands & Houses"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* House roof mark */}
      <g>
        <path d="M6 36 L36 8 L66 36 Z" fill={blue} />
        <path d="M52 16 L52 9 L60 9 L60 23 Z" fill={blueDark} />
        {/* GGC letters under the roof */}
        <text
          x="36"
          y="60"
          textAnchor="middle"
          fontFamily="'Barlow', Helvetica, Arial, sans-serif"
          fontWeight="800"
          fontSize="26"
          letterSpacing="-1"
        >
          <tspan fill={green}>G</tspan>
          <tspan fill={blue}>G</tspan>
          <tspan fill={red}>C</tspan>
        </text>
        {/* tagline under the mark */}
        <rect x="12" y="66" width="48" height="3" fill={red} />
      </g>

      {/* Wordmark */}
      <text
        x="84"
        y="42"
        fontFamily="'Barlow', Helvetica, Arial, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill={light ? "#ffffff" : blue}
        letterSpacing="1.5"
      >
        PROPERTIES
      </text>
      <text
        x="85"
        y="63"
        fontFamily="'Barlow', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill={light ? "#ffffff" : red}
        letterSpacing="2.5"
      >
        (LANDS &amp; HOUSES)
      </text>
    </svg>
  );
}

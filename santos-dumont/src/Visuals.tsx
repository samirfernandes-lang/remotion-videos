import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
export const gold = "#d5b779";
export const Watch = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <svg
      viewBox="0 0 600 900"
      width="560"
      height="840"
      aria-label="Ilustração estilizada do relógio Santos"
    >
      <defs>
        <linearGradient id="metal">
          <stop stopColor="#806337" />
          <stop offset=".3" stopColor="#f8e5ad" />
          <stop offset=".55" stopColor="#a1834d" />
          <stop offset="1" stopColor="#ead295" />
        </linearGradient>
        <linearGradient id="dial" x2="1" y2="1">
          <stop stopColor="#fff9eb" />
          <stop offset="1" stopColor="#d8cdb5" />
        </linearGradient>
      </defs>
      <rect
        x="190"
        y="0"
        width="220"
        height="900"
        rx="35"
        fill="#19191c"
        stroke="#4b4030"
        strokeWidth="3"
      />
      {[210, 390].map((x) => (
        <path
          key={x}
          d={`M${x} 0V900`}
          stroke="#80633f"
          strokeDasharray="5 10"
          opacity=".55"
        />
      ))}
      <rect
        x="118"
        y="220"
        width="364"
        height="460"
        rx="62"
        fill="url(#metal)"
      />
      <rect x="134" y="236" width="332" height="428" rx="51" fill="#17181a" />
      <rect
        x="151"
        y="253"
        width="298"
        height="394"
        rx="38"
        fill="url(#dial)"
      />
      <rect x="475" y="418" width="29" height="65" rx="8" fill="url(#metal)" />
      {[
        [145, 250],
        [455, 250],
        [145, 650],
        [455, 650],
        [135, 450],
        [465, 450],
        [300, 238],
        [300, 662],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="8" fill="#857048" />
          <path
            d={`M${x - 4} ${y + 3}l8 -6`}
            stroke="#efe0b6"
            strokeWidth="2"
          />
        </g>
      ))}
      {[
        "XII",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
      ].map((n, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <text
            key={n}
            x={300 + 117 * Math.sin(a)}
            y={456 - 158 * Math.cos(a)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Georgia"
            fontSize="27"
            fill="#24232a"
          >
            {n}
          </text>
        );
      })}
      <text
        x="300"
        y="395"
        textAnchor="middle"
        fontFamily="Georgia"
        fontSize="23"
        fill="#292626"
      >
        Cartier
      </text>
      <g stroke="#18263a" strokeLinecap="round">
        <path
          d="M300 450 L300 346"
          strokeWidth="8"
          transform="rotate(305 300 450)"
        />
        <path
          d="M300 450 L300 307"
          strokeWidth="5"
          transform="rotate(60 300 450)"
        />
        <path
          d="M300 475V290"
          strokeWidth="2"
          transform={`rotate(${(f / fps) * 18} 300 450)`}
        />
      </g>
      <circle cx="300" cy="450" r="9" fill="#b3955b" />
    </svg>
  );
};
export const Plane = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <svg
      width="720"
      height="520"
      viewBox="0 0 720 520"
      style={{
        translate: `${interpolate(f, [0, 6 * fps], [-30, 35], { extrapolateRight: "clamp" })}px ${Math.sin(f / 40) * 8}px`,
      }}
    >
      <g fill="none" stroke={gold} strokeWidth="3" strokeLinejoin="round">
        <path d="M55 200H530L610 295H150Z M60 135H530L615 215H145Z" />
        <path d="M90 140L100 205M210 145L225 205M370 145L395 205M520 145L545 225" />
        <path d="M120 265L630 290L480 340L175 320Z M300 230V365M380 230V360" />
        <path d="M135 262L565 180M150 320L565 180M565 180L660 190L685 220H565Z" />
        <circle cx="290" cy="365" r="27" />
        <circle cx="392" cy="360" r="24" />
        <path d="M170 160V365M145 260H196M325 269L350 225L382 270" />
      </g>
      <path
        d="M0 420Q180 350 720 430"
        stroke={gold}
        strokeWidth="1"
        strokeDasharray="4 12"
        fill="none"
        opacity=".35"
      />
      <text
        x="420"
        y="470"
        fill={gold}
        fontFamily="Arial"
        fontSize="18"
        letterSpacing="5"
      >
        O TEMPO GANHA ASAS
      </text>
    </svg>
  );
};

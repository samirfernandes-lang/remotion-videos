import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { Watch, Plane, gold } from "./Visuals";
type Props = {
  chapter: string;
  eyebrow: string;
  title: string;
  body: string;
  visual: "watch" | "plane" | "year";
  year?: string;
};
export const Scene = ({
  chapter,
  eyebrow,
  title,
  body,
  visual,
  year,
}: Props) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const clamp = {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
  };
  return (
    <AbsoluteFill
      style={{
        opacity: interpolate(
          frame,
          [0, 0.55 * fps, durationInFrames - 0.45 * fps, durationInFrames - 1],
          [0, 1, 1, 0],
          clamp,
        ),
        padding: "150px 150px",
        fontFamily: "Arial, sans-serif",
        color: "#f8f5ee",
      }}
    >
      <div
        style={{
          fontSize: 24,
          letterSpacing: 7,
          color: gold,
          marginBottom: 70,
          opacity: interpolate(frame, [0, 0.7 * fps], [0, 1], clamp),
        }}
      >
        {eyebrow}
      </div>
      <div style={{ width: 950, position: "relative", zIndex: 2 }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            fontSize: 104,
            lineHeight: 1.07,
            letterSpacing: -3,
            margin: 0,
            whiteSpace: "pre-line",
            translate: `0 ${interpolate(frame, [0, 1 * fps], [45, 0], { ...clamp, easing: Easing.bezier(0.16, 1, 0.3, 1) })}px`,
            opacity: interpolate(frame, [0, 0.8 * fps], [0, 1], clamp),
          }}
        >
          {title}
        </h1>
        <div
          style={{
            height: 2,
            width: interpolate(frame, [0.3 * fps, 1.3 * fps], [0, 170], clamp),
            background: gold,
            margin: "42px 0",
          }}
        />
        <p
          style={{
            fontSize: 38,
            lineHeight: 1.5,
            maxWidth: 850,
            color: "#bcb9b3",
            margin: 0,
            whiteSpace: "pre-line",
            opacity: interpolate(frame, [0.65 * fps, 1.5 * fps], [0, 1], clamp),
            translate: `0 ${interpolate(frame, [0.65 * fps, 1.5 * fps], [25, 0], clamp)}px`,
          }}
        >
          {body}
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          right: 85,
          top: visual === "watch" ? 95 : 260,
          opacity: interpolate(frame, [0.2 * fps, 1.2 * fps], [0, 1], clamp),
          scale: interpolate(frame, [0, durationInFrames], [0.96, 1.03], clamp),
        }}
      >
        {visual === "watch" ? (
          <Watch />
        ) : visual === "plane" ? (
          <Plane />
        ) : (
          <div
            style={{
              fontFamily: "Georgia",
              fontSize: 240,
              color: gold,
              letterSpacing: -12,
              marginTop: 20,
            }}
          >
            {year}
          </div>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 85,
          left: 150,
          fontSize: 22,
          letterSpacing: 5,
          color: gold,
        }}
      >
        SANTOS · CARTIER{" "}
        <span style={{ marginLeft: 45, color: "#706a60" }}>{chapter} / 05</span>
      </div>
    </AbsoluteFill>
  );
};

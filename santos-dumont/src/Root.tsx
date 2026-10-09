import {
  AbsoluteFill,
  Composition,
  Folder,
  Series,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Opening } from "./Opening";
import { Aviator } from "./Aviator";
import { Challenge } from "./Challenge";
import { Creation } from "./Creation";
import { Legacy } from "./Legacy";
export const SantosDumont = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at 75% 45%,#242321 0%,#111317 38%,#080b10 80%)",
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.12,
          backgroundImage:
            "linear-gradient(#d5b779 1px, transparent 1px), linear-gradient(90deg,#d5b779 1px,transparent 1px)",
          backgroundSize: "100px 100px",
          maskImage: "linear-gradient(90deg,transparent,black)",
          translate: `${frame / 60}px 0`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 65,
          left: 150,
          right: 150,
          height: 1,
          background: "#d5b779",
          opacity: 0.3,
        }}
      />
      <Series>
        <Series.Sequence
          durationInFrames={6 * fps}
          premountFor={fps}
          name="O tempo no pulso"
        >
          <Opening />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={6 * fps}
          premountFor={fps}
          name="O aviador brasileiro"
        >
          <Aviator />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={6 * fps}
          premountFor={fps}
          name="As mãos nos controles"
        >
          <Challenge />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={6 * fps}
          premountFor={fps}
          name="Cartier em 1904"
        >
          <Creation />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={6 * fps}
          premountFor={fps}
          name="O legado"
        >
          <Legacy />
        </Series.Sequence>
      </Series>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 3,
          width: `${(frame / 899) * 100}%`,
          background: "#d5b779",
        }}
      />
    </AbsoluteFill>
  );
};
export const Root = () => (
  <>
    <Composition
      id="SantosDumont"
      component={SantosDumont}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
    <Folder name="Cenas">
      <Composition
        id="Opening"
        component={Opening}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Aviator"
        component={Aviator}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Challenge"
        component={Challenge}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Creation"
        component={Creation}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Legacy"
        component={Legacy}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  </>
);

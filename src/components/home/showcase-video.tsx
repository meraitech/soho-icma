"use client";

import { useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { Play } from "lucide-react";

type Flag = {
  name: string;
  code: string;
  src: string;
};

// ICMA Indonesia network countries across Asia-Pacific.
const networkFlags: Flag[] = [
  { name: "Bangladesh", code: "BD", src: "https://flagcdn.com/bd.svg" },
  { name: "Australia", code: "AU", src: "https://flagcdn.com/au.svg" },
  { name: "Vietnam", code: "VN", src: "https://flagcdn.com/vn.svg" },
  { name: "Cambodia", code: "KH", src: "https://flagcdn.com/kh.svg" },
  { name: "United Arab Emirates", code: "AE", src: "https://flagcdn.com/ae.svg" },
  { name: "Thailand", code: "TH", src: "https://flagcdn.com/th.svg" },
  { name: "Malaysia", code: "MY", src: "https://flagcdn.com/my.svg" },
  { name: "Nepal", code: "NP", src: "https://flagcdn.com/np.svg" },
  { name: "Philippines", code: "PH", src: "https://flagcdn.com/ph.svg" },
  { name: "Japan", code: "JP", src: "https://flagcdn.com/jp.svg" },
  { name: "Singapore", code: "SG", src: "https://flagcdn.com/sg.svg" },
  { name: "Iran", code: "IR", src: "https://flagcdn.com/ir.svg" },
  { name: "Hong Kong", code: "HK", src: "https://flagcdn.com/hk.svg" },
  { name: "India", code: "IN", src: "https://flagcdn.com/in.svg" },
  { name: "Indonesia", code: "ID", src: "https://flagcdn.com/id.svg" },
];

function FlagMarquee({ flags }: { flags: Flag[] }) {
  const reduceMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const xPercent = useMotionValue(0);
  const x = useTransform(xPercent, (v) => `${v}%`);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || paused) return;
    const next = xPercent.get() - (delta / 1000) * 0.7;
    xPercent.set(next <= -100 / 3 ? 0 : next);
  });

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
        {flags.map((flag) => (
          <div key={flag.code} className="flex items-center">
            <img
              src={flag.src}
              alt={`${flag.name} flag`}
              loading="lazy"
              className="h-16 w-auto rounded-none border border-border object-contain"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <motion.div style={{ x }} className="flex w-max">
        {[...flags, ...flags, ...flags].map((flag, index) => (
          <div
            key={`${flag.code}-${index}`}
            aria-hidden={index >= flags.length}
            className="mx-3 flex shrink-0 items-center"
          >
            <img
              src={flag.src}
              alt={index < flags.length ? `${flag.name} flag` : ""}
              loading="lazy"
              tabIndex={-1}
              className="relative h-16 w-auto rounded-none border border-border object-contain transition-transform duration-300 hover:scale-105 hover:z-10"
            />
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

type ShowcaseVideoProps = {
  src?: string;
  poster?: string;
};

export default function ShowcaseVideo({
  src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  poster,
}: ShowcaseVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      aria-label="Showcase video and ASEAN network"
      className="bg-background"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="aspect-video w-full overflow-hidden rounded-none bg-black">
          {isPlaying ? (
            <video
              autoPlay
              muted
              controls
              playsInline
              preload="metadata"
              poster={poster}
              className="h-full w-full object-cover"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play showcase video"
              className="group flex h-full w-full cursor-pointer items-center justify-center bg-canvas-deep"
            >
              <span className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-electric-deep">
                <Play className="ml-1 size-8 fill-current" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>

        <p className="mx-auto mt-8 mb-8 max-w-3xl text-center text-base font-normal text-muted-foreground">
          Part of a global network — ICMA members across Asia-Pacific
        </p>

        <FlagMarquee flags={networkFlags} />
      </div>
    </section>
  );
}

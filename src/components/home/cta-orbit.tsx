"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageSquare, MousePointer2, PenLine, Users } from "lucide-react";

type Person = {
  name: string;
  initials: string;
  role: string;
  angle: number;
  live?: boolean;
};

const innerOrbit: Person[] = [
  { name: "Andini Pratiwi", initials: "AP", role: "Mentoring", angle: 0, live: true },
  { name: "Budi Santoso", initials: "BS", role: "Viewing program", angle: 120 },
  { name: "Sari Dewi", initials: "SD", role: "Q&A", angle: 240 },
];

const outerOrbit: Person[] = [
  { name: "Agus Wijaya", initials: "AW", role: "Viewing CPD", angle: 60 },
  { name: "Maya Kusuma", initials: "MK", role: "Facilitating", angle: 180, live: true },
  { name: "Rizky Pratama", initials: "RP", role: "Viewing events", angle: 300 },
];

const INNER_R = 68;
const OUTER_R = 104;
const HALO_R = 156;
const SIZE = 232;

type Activity = {
  person: Person;
  verb: string;
  Icon: typeof PenLine;
};

const leftFeed: Activity[] = [
  { person: innerOrbit[1], verb: "is viewing CMA Part 1", Icon: MousePointer2 },
  { person: outerOrbit[1], verb: "is facilitating CPD", Icon: PenLine },
  { person: outerOrbit[2], verb: "joined Jakarta intensive", Icon: MousePointer2 },
];

const rightFeed: Activity[] = [
  { person: innerOrbit[0], verb: "answered a Q&A thread", Icon: MessageSquare },
  { person: outerOrbit[0], verb: "is viewing CPD hours", Icon: MousePointer2 },
  { person: innerOrbit[2], verb: "replied about Batch 20", Icon: MessageSquare },
];

const ease = [0.22, 1, 0.36, 1] as const;
const PAUSE =
  "group-hover/orbit:[animation-play-state:paused] group-focus-within/orbit:[animation-play-state:paused]";
const SPIN_36 = `motion-safe:animate-[spin_36s_linear_infinite] ${PAUSE}`;
const SPIN_36_BACK = `motion-safe:animate-[spin_36s_linear_infinite_reverse] ${PAUSE}`;
const SPIN_54 = `motion-safe:animate-[spin_54s_linear_infinite] ${PAUSE}`;
const SPIN_54_BACK = `motion-safe:animate-[spin_54s_linear_infinite_reverse] ${PAUSE}`;

function Orbit({
  radius,
  ring,
  seat,
  people,
  spokes,
}: {
  radius: number;
  ring: string;
  seat: string;
  people: Person[];
  spokes?: boolean;
}) {
  const center = SIZE / 2;
  const reduce = useReducedMotion();
  return (
    <div
      className={`pointer-events-none absolute inset-0 will-change-transform hover:z-20 focus-within:z-30 ${ring}`}
    >
      {spokes && (
        <svg
          aria-hidden="true"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="absolute inset-0 h-full w-full"
        >
          {people.map((person, index) => {
            const a = (person.angle * Math.PI) / 180;
            const x2 = Math.round((center + Math.cos(a) * radius) * 100) / 100;
            const y2 = Math.round((center + Math.sin(a) * radius) * 100) / 100;
            return (
              <g key={person.name}>
                <line
                  x1={center}
                  y1={center}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  className="text-border"
                />
                {!reduce && (
                  <motion.line
                    x1={x2}
                    y1={y2}
                    x2={center}
                    y2={center}
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    pathLength={100}
                    strokeDasharray="10 90"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: [100, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      delay: index * 1.2,
                      ease: "easeInOut",
                    }}
                    className="text-electric"
                  />
                )}
              </g>
            );
          })}
        </svg>
      )}
      {people.map((person) => (
        <div
          key={person.name}
          className="absolute top-1/2 left-1/2 origin-top-left"
          style={{
            transform: `rotate(${person.angle}deg) translate(${radius}px) rotate(${-person.angle}deg)`,
          }}
        >
          <div
            className={`group/seat pointer-events-auto relative -translate-x-1/2 -translate-y-1/2 will-change-transform ${seat}`}
          >
            <span
              tabIndex={0}
              aria-label={`${person.name}, ${person.role}`}
              className="flex h-9 w-9 cursor-default items-center justify-center overflow-hidden rounded-full border-2 border-border bg-canvas text-[11px] font-bold text-white transition-transform duration-300 ease-out group-hover/seat:scale-105 group-focus-within/seat:scale-105 focus-visible:ring-2 focus-visible:ring-electric"
            >
              {person.initials}
            </span>
            {person.live && (
              <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500" />
            )}
            <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-1.5 -translate-x-1/2 translate-y-1 rounded-none bg-foreground px-2 py-1 text-[10px] leading-none font-medium whitespace-nowrap text-background opacity-0 shadow-sm transition-[opacity,transform] duration-200 group-hover/seat:translate-y-0 group-hover/seat:opacity-100 group-focus-within/seat:translate-y-0 group-focus-within/seat:opacity-100">
              {person.name}
              <span className="ml-1 font-normal opacity-70">{person.role}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ActivityChip({
  feed,
  offset,
  reduce,
  className,
}: {
  feed: Activity[];
  offset: number;
  reduce: boolean;
  className: string;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (reduce) return;
    let id: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      setIndex((i) => (i + 1) % feed.length);
      id = setInterval(() => setIndex((i) => (i + 1) % feed.length), 4200);
    }, offset);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [feed.length, offset, reduce]);
  const { person, verb, Icon } = feed[index];
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: reduce ? 0 : 8,
            filter: reduce ? "blur(0px)" : "blur(4px)",
          }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{
            opacity: 0,
            y: reduce ? 0 : -8,
            filter: reduce ? "blur(0px)" : "blur(4px)",
          }}
          transition={{ duration: 0.45, ease }}
          className="flex items-center gap-2 rounded-none border border-border bg-background py-1 pr-2.5 pl-1"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-canvas text-[8px] font-bold text-white">
            {person.initials}
          </span>
          <span className="text-[10px] leading-none font-medium whitespace-nowrap text-foreground">
            {person.name.split(" ")[0]}{" "}
            <span className="font-normal text-muted-foreground">{verb}</span>
          </span>
          <Icon className="h-3 w-3 shrink-0 text-muted-foreground" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function CtaOrbit() {
  const reduce = !!useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [showActivity, setShowActivity] = useState(false);
  const center = SIZE / 2;
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setShowActivity(width >= 820 || (width >= 384 && height >= 620));
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  return (
    <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-none border border-border bg-background">
      <div ref={stageRef} className="@container relative min-h-[220px] flex-1 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]"
        />
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="absolute inset-0 z-10 flex items-center justify-center p-4"
        >
          <div
            className="group/orbit relative shrink-0 scale-[0.82] @sm:scale-100 @2xl:scale-[1.12]"
            style={{ width: SIZE, height: SIZE }}
          >
            <svg
              aria-hidden="true"
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <circle
                cx={center}
                cy={center}
                r={HALO_R}
                fill="none"
                stroke="currentColor"
                strokeDasharray="2 8"
                className="text-border"
              />
              <circle
                cx={center}
                cy={center}
                r={OUTER_R}
                fill="none"
                stroke="currentColor"
                strokeDasharray="3 5"
                className="text-border"
              />
              <circle cx={center} cy={center} r={INNER_R} fill="none" stroke="currentColor" className="text-border" />
            </svg>

            <Orbit radius={INNER_R} ring={SPIN_36} seat={SPIN_36_BACK} people={innerOrbit} spokes />
            <Orbit radius={OUTER_R} ring={SPIN_54_BACK} seat={SPIN_54} people={outerOrbit} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.span
                aria-hidden="true"
                animate={reduce ? undefined : { scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-5 rounded-full bg-electric/15 blur-xl transition-transform duration-500 group-hover/orbit:scale-125"
              />
              {!reduce &&
                [0, 1].map((i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-electric will-change-transform"
                  />
                ))}
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-canvas text-white ring-1 ring-canvas-line transition-transform duration-500 ease-out group-hover/orbit:scale-105">
                <Users className="h-5 w-5" />
              </span>
            </div>
          </div>
        </motion.div>

        {showActivity && (
          <>
            <ActivityChip
              feed={leftFeed}
              offset={1400}
              reduce={reduce}
              className="hidden @sm:block left-4 top-[24%] @2xl:left-[12%]"
            />
            <ActivityChip
              feed={rightFeed}
              offset={3500}
              reduce={reduce}
              className="hidden @sm:block right-4 bottom-[26%] @2xl:right-[12%]"
            />
          </>
        )}

        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-none border border-border bg-background px-2.5 py-1 text-[10px] font-medium whitespace-nowrap text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          1,280+ members across Indonesia
        </span>
      </div>

      <div className="px-6 pt-2 pb-6">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          Belong to a live network
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          Members, mentors and practitioners share CPD, events and program support across Indonesia.
        </p>
      </div>
    </article>
  );
}

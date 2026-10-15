"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronRight, Plus, Search, Wifi } from "lucide-react";

type ProgramItem = {
  id: number;
  project: string;
  app: string;
  when: string;
  state: "ready" | "building";
};

const seed: ProgramItem[] = [
  { id: 1, project: "CMA Part 1", app: "Financial planning", when: "1m 32s", state: "ready" },
  { id: 2, project: "CMA Part 2", app: "Strategic analysis", when: "3m ago", state: "ready" },
  { id: 3, project: "CPD Webinar", app: "Ethics update", when: "45s ago", state: "ready" },
  { id: 4, project: "CPD Webinar", app: "IFRS briefing", when: "1m 30s", state: "ready" },
  { id: 5, project: "Jakarta", app: "Batch 20 intensive", when: "2m ago", state: "ready" },
  { id: 6, project: "CFO Award", app: "Nominations", when: "4m ago", state: "ready" },
  { id: 7, project: "Surabaya", app: "Members meetup", when: "7m ago", state: "ready" },
  { id: 8, project: "CPD Tracker", app: "12 hours logged", when: "12m ago", state: "ready" },
  { id: 9, project: "IMAC", app: "Global charter", when: "18m ago", state: "ready" },
  { id: 10, project: "CGBA", app: "New pathway", when: "24m ago", state: "ready" },
  { id: 11, project: "Bandung", app: "Study circle", when: "31m ago", state: "ready" },
  { id: 12, project: "Bali", app: "Annual gathering", when: "42m ago", state: "ready" },
];

const incoming = [
  { project: "CMA Part 1", app: "New intake" },
  { project: "CPD Webinar", app: "Reserve seat" },
  { project: "Jakarta", app: "Intensive opens" },
  { project: "CFO Award", app: "Shortlist live" },
];

const ease = [0.22, 1, 0.36, 1] as const;
const TICK_MS = 3400;
const DEVICE_WIDTH = 300;
const DEVICE_HEIGHT = 650;
const FRAME_CLASS =
  "relative h-full w-full rounded-[54px] bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 p-[3px] dark:from-neutral-600 dark:via-neutral-700 dark:to-neutral-800";
const BEZEL_CLASS = "h-full w-full rounded-[51px] bg-black p-[9px]";
const SCREEN_CLASS = "relative h-full w-full overflow-hidden rounded-[42px] bg-background";

function SideButtons() {
  const btn = "absolute rounded-[2px] bg-neutral-500 dark:bg-neutral-600";
  return (
    <>
      <span className={`${btn} -left-[3px] top-[14%] h-[4%] w-[3px]`} />
      <span className={`${btn} -left-[3px] top-[21%] h-[7%] w-[3px]`} />
      <span className={`${btn} -left-[3px] top-[30%] h-[7%] w-[3px]`} />
      <span className={`${btn} -right-[3px] top-[24%] h-[11%] w-[3px]`} />
    </>
  );
}

function DynamicIsland({ muted = false }: { muted?: boolean }) {
  return (
    <span
      className={`absolute top-[11px] left-1/2 flex h-[26px] w-[34%] -translate-x-1/2 items-center justify-end rounded-full pr-[9px] ${muted ? "bg-muted" : "bg-black"}`}
    >
      {!muted && <span className="h-[9px] w-[9px] rounded-full bg-neutral-800 ring-1 ring-neutral-700" />}
    </span>
  );
}

function GhostPhone({
  side,
  inView,
  reduce,
}: {
  side: "left" | "right";
  inView: boolean;
  reduce: boolean;
}) {
  const fan =
    side === "left"
      ? "-translate-x-[16%] -rotate-[5deg] motion-safe:group-hover:-translate-x-[20%] motion-safe:group-hover:-rotate-[7deg]"
      : "translate-x-[16%] rotate-[5deg] motion-safe:group-hover:translate-x-[20%] motion-safe:group-hover:rotate-[7deg]";
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay: 0.15, ease }}
      className="pointer-events-none absolute inset-0 hidden @sm:block"
    >
      <div
        className={`relative h-full w-full origin-center translate-y-3 scale-[0.96] transition-[translate,rotate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${fan}`}
      >
        <div className={FRAME_CLASS}>
          <SideButtons />
          <div className={BEZEL_CLASS}>
            <div className={SCREEN_CLASS}>
              <DynamicIsland muted />
              <div className="mt-14 flex items-center justify-between px-5">
                <span className="h-7 w-7 rounded-none bg-muted" />
                <span className="h-2.5 w-20 rounded-full bg-muted" />
                <span className="h-7 w-7 rounded-full border border-border" />
              </div>
              <div className="mx-5 mt-4 h-8 rounded-[3px] bg-muted" />
              <ul className="mt-7 space-y-3.5 px-5">
                {Array.from({ length: 7 }, (_, i) => (
                  <li key={i} className="flex items-center gap-3 py-1.5">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-muted" />
                    <span className="flex-1 space-y-1.5">
                      <span
                        className="block h-2 rounded-full bg-muted"
                        style={{ width: `${52 + ((i * 17) % 30)}%` }}
                      />
                      <span
                        className="block h-1.5 rounded-full bg-muted/70"
                        style={{ width: `${68 + ((i * 11) % 22)}%` }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-[54px] bg-background/45" />
      </div>
    </motion.div>
  );
}

export default function CtaPhone() {
  const reduce = !!useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ width: 440, height: 280 });
  const [inView, setInView] = useState(false);
  const [rows, setRows] = useState<ProgramItem[]>(seed);
  const [hovered, setHovered] = useState<number | null>(null);
  const nextDeployment = useRef(0);
  const resumeTimer = useRef<number | null>(null);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setStageSize({ width, height });
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const wholeDevice = stageSize.height >= 520;
  const deviceScale = Math.max(
    0.1,
    wholeDevice
      ? Math.min(0.8, (stageSize.height - 48) / DEVICE_HEIGHT, (stageSize.width - 48) / DEVICE_WIDTH)
      : Math.min(0.94, (stageSize.width - 64) / DEVICE_WIDTH),
  );
  const deviceHeight = DEVICE_HEIGHT * deviceScale;
  const deviceTop = wholeDevice ? (stageSize.height - deviceHeight) / 2 : 20;

  useEffect(
    () => () => {
      if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  const addDeployment = useCallback(() => {
    const next = incoming[nextDeployment.current % incoming.length];
    nextDeployment.current += 1;
    const id = seed.length + nextDeployment.current;
    setRows((current) => [
      {
        id,
        project: next.project,
        app: next.app,
        when: "just now",
        state: reduce ? "ready" : "building",
      },
      ...current
        .slice(0, seed.length - 1)
        .map((row) =>
          row.state === "building" ? { ...row, state: "ready" as const, when: "just now" } : row,
        ),
    ]);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce || manual || hovered !== null) return;
    const id = window.setInterval(addDeployment, TICK_MS);
    return () => window.clearInterval(id);
  }, [addDeployment, inView, reduce, manual, hovered]);

  const buildingId = rows.find((row) => row.state === "building")?.id;
  useEffect(() => {
    if (buildingId === undefined) return;
    const id = window.setTimeout(() => {
      setRows((current) =>
        current.map((row) => (row.id === buildingId ? { ...row, state: "ready", when: "just now" } : row)),
      );
    }, 2200);
    return () => window.clearTimeout(id);
  }, [buildingId]);

  return (
    <article className="group relative flex h-full min-h-[380px] w-full flex-col overflow-hidden rounded-none border border-border bg-background">
      <motion.div
        ref={stageRef}
        onViewportEnter={() => setInView(true)}
        viewport={{ once: true, amount: 0.3 }}
        className="@container relative min-h-[220px] flex-1 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgb(0_0_0/0.07)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:bg-[radial-gradient(circle,rgb(255_255_255/0.08)_1px,transparent_1px)]"
        />

        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ width: DEVICE_WIDTH * deviceScale, height: deviceHeight, top: deviceTop }}
        >
          <div
            className="relative origin-top-left"
            style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT, transform: `scale(${deviceScale})` }}
          >
            <GhostPhone side="left" inView={inView} reduce={reduce} />
            <GhostPhone side="right" inView={inView} reduce={reduce} />

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-0"
            >
              <div className={FRAME_CLASS}>
                <SideButtons />
                <div className={BEZEL_CLASS}>
                  <div className={SCREEN_CLASS}>
                    <DynamicIsland />
                    <div className="flex items-center justify-between px-7 pt-[15px] text-[11px] font-semibold text-foreground">
                      <span>9:41</span>
                      <span className="flex items-center gap-1">
                        <Wifi className="h-3 w-3" />
                        <span className="inline-block h-2.5 w-5 rounded-[3px] border border-foreground p-px">
                          <span className="block h-full w-3/4 rounded-[1px] bg-foreground" />
                        </span>
                      </span>
                    </div>

                    <div className="mt-6 flex items-center justify-between px-5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-none bg-canvas">
                        <span className="h-2 w-2 rounded-none bg-white" />
                      </span>
                      <span className="text-[12px] font-semibold text-foreground">My CMA</span>
                      <button
                        type="button"
                        aria-label="Check new intake"
                        onClick={() => {
                          setManual(true);
                          addDeployment();
                          if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
                          resumeTimer.current = window.setTimeout(() => setManual(false), 8000);
                        }}
                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-electric"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="mx-5 mt-4 flex items-center gap-2 rounded-[3px] bg-muted px-3 py-2 text-[11px] text-muted-foreground">
                      <Search className="h-3 w-3" />
                      Search programs
                    </div>

                    <div className="mt-5 flex items-center justify-between px-5 text-[11px]">
                      <span className="font-semibold text-foreground">Recent</span>
                      <span className="text-muted-foreground">Sort by · Latest</span>
                    </div>

                    <ul className="mt-1.5 px-3" onMouseLeave={() => setHovered(null)}>
                      <AnimatePresence initial={false}>
                        {rows.map((row) => (
                          <motion.li
                            key={row.id}
                            layout
                            initial={reduce ? false : { opacity: 0, y: -14, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
                            transition={{ duration: 0.4, ease }}
                            onMouseEnter={() => setHovered(row.id)}
                            className={`flex cursor-default items-center gap-2.5 rounded-[3px] px-2 py-2 transition-colors duration-200 ${
                              hovered === row.id ? "bg-muted" : ""
                            }`}
                          >
                            <span className="relative flex h-2 w-2 shrink-0">
                              {row.state === "building" && (
                                <span className="absolute inset-0 rounded-full bg-electric motion-safe:animate-ping" />
                              )}
                              <span
                                className={`relative h-2 w-2 rounded-full ${
                                  row.state === "ready" ? "bg-emerald-500" : "bg-electric"
                                }`}
                              />
                            </span>
                            <div className="min-w-0 flex-1 leading-tight">
                              <p className="truncate text-[10px] font-medium text-foreground">
                                {row.project}
                                <span className="text-muted-foreground">{" / "}</span>
                                {row.app}
                              </p>
                              <p className="truncate text-[9px] text-muted-foreground">
                                {row.state === "building"
                                  ? "New intake opening"
                                  : hovered === row.id
                                    ? "Enrol via secretariat · Seats open"
                                    : `ICMA Indonesia · ${row.when}`}
                              </p>
                            </div>
                            <ChevronRight
                              className={`h-3 w-3 shrink-0 transition-transform duration-200 ${
                                hovered === row.id ? "translate-x-0.5 text-foreground" : "text-muted-foreground/50"
                              }`}
                            />
                          </motion.li>
                        ))}
                      </AnimatePresence>
                    </ul>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background via-background/90 to-transparent"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-2 left-1/2 h-1 w-[34%] -translate-x-1/2 rounded-full bg-foreground"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {!wholeDevice && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent"
          />
        )}
      </motion.div>

      <div className="px-6 pt-2 pb-6">
        <h3 className="text-base font-semibold tracking-tight text-foreground">Your CMA path, in hand</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          Track intakes, CPD hours and event seats from your phone — apply, reserve, and stay qualified.
        </p>
      </div>
    </article>
  );
}

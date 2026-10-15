"use client";

import dynamic from "next/dynamic";

const SonarFindings = dynamic(() => import("@/components/home/sonar-findings"), {
  ssr: false,
  loading: () => (
    <section className="w-full bg-transparent text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-bold tracking-[0px] text-brand-core uppercase">Why CMA Indonesia</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[19ch] text-[28px] font-bold tracking-[0px] text-foreground sm:text-4xl">
            Find every way forward before anyone else does.
          </h2>
          <p className="max-w-md text-base leading-[1.33] font-light text-muted-foreground">
            Round-the-year programs, events and membership — with a route for every finance professional.
          </p>
        </div>
        <div aria-hidden="true" className="mt-8 h-[clamp(14rem,30vw,26rem)] w-full" />
      </div>
    </section>
  ),
});

export default function SonarFindingsLazy() {
  return <SonarFindings />;
}

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-canvas text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0px] text-brand-200 uppercase">
            Certified Management Accountants in Indonesia
          </p>
          <h1 className="mt-4 text-[32px] leading-[1.13] font-bold tracking-[0px] sm:text-[40px] lg:text-5xl">
            Become a CMA{" "}
            <span className="font-light text-body-dark">for a limitless future</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.33] font-light text-body-dark">
            The global CMA designation, delivered in Indonesia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-highlight px-6 py-3 text-center text-base font-bold text-white hover:bg-background"
            >
              Apply Now
            </Link>
            <Link
              href="/programs"
              className="rounded-full bg-electric px-6 py-3 text-center text-base font-bold text-white hover:bg-electric-deep"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        <div
          className="flex aspect-[4/3] items-end rounded-none bg-canvas-deep p-6"
          role="img"
          aria-label="Hero photo placeholder"
        >
          <span className="rounded-none bg-highlight px-3 py-1 text-xs font-bold text-white uppercase">
            Hero photo placeholder
          </span>
        </div>
      </div>
    </section>
  );
}

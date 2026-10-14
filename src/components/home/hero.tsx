import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-[#090d46] text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0px] text-[#ffd400] uppercase">
            Certified Management Accountants in Indonesia
          </p>
          <h1 className="mt-4 text-[32px] leading-[1.13] font-bold tracking-[0px] sm:text-[40px] lg:text-5xl">
            Become a CMA{" "}
            <span className="font-light text-[#e6f1ff]">for a limitless future</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.33] font-light text-[#e6f1ff]">
            The global CMA designation, delivered in Indonesia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#ffd400] px-6 py-3 text-center text-base font-bold text-[#090d46] hover:bg-white"
            >
              Apply Now
            </Link>
            <Link
              href="/programs"
              className="rounded-full bg-[#0a5cc7] px-6 py-3 text-center text-base font-bold text-white hover:bg-[#084697]"
            >
              Explore Programs
            </Link>
          </div>
        </div>

        <div
          className="flex aspect-[4/3] items-end rounded-none bg-[#0f144d] p-6"
          role="img"
          aria-label="Hero photo placeholder"
        >
          <span className="rounded-none bg-[#ffd400] px-3 py-1 text-xs font-bold text-[#090d46] uppercase">
            Hero photo placeholder
          </span>
        </div>
      </div>
    </section>
  );
}

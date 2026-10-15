import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-none bg-canvas text-white">
      <Image
        src="/assets/Indonesia_branch.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative flex min-h-130 w-full mx-auto max-w-500 items-end px-4 pb-6 sm:px-6 sm:pb-8">
        <div className="max-w-3xl">
          <h1 className="text-[32px] font-bold sm:text-[40px] lg:text-5xl">
            Become a CMA
          </h1>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-highlight px-8 py-3 text-center text-base font-bold text-white hover:bg-electric-deep"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

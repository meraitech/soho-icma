import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-[#090d46] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-16">
        <p className="text-sm font-bold tracking-[0px] text-[#ffd400] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-[32px] font-bold tracking-[0px] sm:text-[40px] lg:text-5xl lg:leading-[1.13]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg leading-[1.33] font-light text-[#e6f1ff]">
            {intro}
          </p>
        ) : null}
        <p className="mt-6 text-sm text-[#e6f1ff]/60">
          <Link href="/" className="hover:text-white hover:underline">
            Home
          </Link>{" "}
          / {title}
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  { title: "Become a CMA", href: "/programs" },
  { title: "Membership", href: "/membership" },
  { title: "Events & webinars", href: "/events" },
  { title: "Contact the branch", href: "/contact" },
];

export default function Spotlight() {
  return (
    <section className="bg-[#090d46] text-white">
      <div className="mx-auto max-w-[1024px] px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-[28px] font-bold tracking-[0px] sm:text-4xl">
          Start here
        </h2>
        <div className="mt-8 grid gap-px bg-[#272a5c] sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              className="group flex items-center justify-between gap-4 bg-[#090d46] p-6 hover:bg-[rgba(115,133,159,0.5)]"
            >
              <span className="text-lg font-bold tracking-[0px]">{l.title}</span>
              <ArrowRight className="size-5 shrink-0 text-[#ffd400]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

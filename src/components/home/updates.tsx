import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestUpdates } from "@/data/site";

export default function LatestUpdates() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1024px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[28px] font-bold tracking-[0px] text-[#222222] sm:text-4xl">
            Latest
          </h2>
          <Link
            href="/announcements"
            className="hidden shrink-0 items-center gap-1 text-base font-bold text-[#090d46] hover:text-[#0a5cc7] hover:underline sm:flex"
          >
            All updates <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-px bg-[#d6d9da] sm:grid-cols-2 lg:grid-cols-4">
          {latestUpdates.map((u) => (
            <Link key={u.title} href={u.href} className="group bg-white p-6 hover:bg-[#090d46]">
              <p className="text-xs font-bold tracking-[0px] text-[#00539d] uppercase group-hover:text-[#ffd400]">
                {u.category} · {u.date}
              </p>
              <p className="mt-2 text-base leading-snug font-bold text-[#222222] group-hover:text-white">
                {u.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

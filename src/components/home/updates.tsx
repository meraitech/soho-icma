import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { latestUpdates } from "@/data/site";

export default function LatestUpdates() {
  return (
    <section className="bg-canvas text-white">
      <div className="mx-auto max-w-6xl px-4  sm:px-6 ">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[28px] font-bold sm:text-4xl">
            Latest
          </h2>
          <Link
            href="/announcements"
            className="hidden shrink-0 items-center gap-1 text-base font-bold text-white hover:text-brand-200 hover:underline sm:flex"
          >
            All updates <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestUpdates.map((u) => (
            <Link
              key={u.title}
              href={u.href}
              className="group flex flex-col rounded-none bg-transparent"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-none">
                <Image
                  src={u.image}
                  alt={u.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col px-0 pt-4">
                <p className="text-xs font-bold tracking-[0px] text-brand-200 uppercase">
                  {u.category} · {u.date}
                </p>
                <p className="mt-2 line-clamp-3 text-base leading-snug font-bold text-white">
                  {u.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

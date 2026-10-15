import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { latestUpdates } from "@/data/site";

export const metadata: Metadata = { title: "Announcement" };

const extraAnnouncement = {
  title: "New intake open at IPMI, RAD Indonesia and BNC",
  href: "/programs",
  category: "Education",
  date: "2026",
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
};

const announcements = [...latestUpdates, extraAnnouncement];

export default function AnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Announcement"
        title="Branch Announcements"
        intro="Official updates from the CMA Indonesia branch."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {announcements.map((u) => (
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
                  <p className="text-xs font-bold tracking-[0px] text-brand-core uppercase">
                    {u.category} · {u.date}
                  </p>
                  <p className="mt-2 line-clamp-3 text-base leading-snug font-bold text-foreground">
                    {u.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

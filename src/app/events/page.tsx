import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = { title: "Events & Webinars" };

const upcoming = [
  {
    title: "CMA Professional Webinar — Strategic Cost Management",
    date: "Upcoming",
    text: "Live CPD-eligible session with practitioners. Reserve your seat through the branch secretariat.",
  },
  {
    title: "CFO Award Night 2026",
    date: "Upcoming",
    text: "Celebrating Indonesia's outstanding chief financial officers. See the CFO Award page for details.",
  },
];

const past = [
  "CMA Batch 19 Intensive Face-to-Face Program",
  "Branch Annual General Meeting 2026",
  "Management Accounting Practice Update",
  "IFRS & Sustainability Reporting Briefing",
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Events & Webinars"
        intro="Upcoming CPD-eligible sessions and highlights from past branch events."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-[28px] font-bold tracking-[0px] text-foreground">Upcoming</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {upcoming.map((e) => (
              <Card key={e.title}>
                <CardHeader className="flex flex-col gap-2.5">
                  <Badge variant="secondary" className="w-fit uppercase">
                    <CalendarDays className="size-3" /> {e.date}
                  </Badge>
                  <CardTitle>{e.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-[1.33] font-normal text-faint">{e.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="mt-12 text-[28px] font-bold tracking-[0px] text-foreground">Past webinars & programs</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {past.map((p) => (
              <li key={p} className="rounded-none bg-surface-alt px-4 py-3 text-base font-normal text-foreground">
                {p}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-1 rounded-full bg-highlight px-6 py-3 text-base font-bold text-white hover:bg-canvas hover:text-white"
          >
            Reserve a seat <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

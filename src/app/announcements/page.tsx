import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/page-hero";
import { latestUpdates } from "@/data/site";

export const metadata: Metadata = { title: "Announcement" };

export default function AnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Announcement"
        title="Branch Announcements"
        intro="Official updates from the CMA Indonesia branch."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1024px] px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex max-w-3xl flex-col gap-4">
            {latestUpdates.map((u) => (
              <Card key={u.title}>
                <CardHeader className="flex flex-col gap-2">
                  <Badge variant="secondary" className="w-fit uppercase">
                    {u.category} · {u.date}
                  </Badge>
                  <CardTitle className="text-[22px]">{u.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
            <Card>
              <CardHeader className="flex flex-col gap-2">
                <Badge variant="secondary" className="w-fit uppercase">
                  Education · 2026
                </Badge>
                <CardTitle className="text-[22px]">
                  New intake open at IPMI, RAD Indonesia and BNC
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-[1.33] font-normal text-[#303030]">
                  Contact the delivery partners directly for schedules, fees and enrolment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

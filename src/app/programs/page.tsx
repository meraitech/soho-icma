import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/page-hero";
import { partners } from "@/data/site";

export const metadata: Metadata = { title: "Education Programs" };

const stages = [
  {
    title: "Entry & Eligibility",
    text: "Graduates and professionals enter the CMA pathway through accredited education providers, with recognition of prior learning where applicable.",
  },
  {
    title: "CMA Program",
    text: "Intensive coursework in strategic management accounting, financial analysis, planning and control — delivered face-to-face and online.",
  },
  {
    title: "Certification",
    text: "On successful completion, members earn the CMA designation and join a global professional community.",
  },
  {
    title: "Continuous Development",
    text: "Seminars, webinars and training keep members current and CPD-compliant throughout their careers.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Become a CMA"
        title="Education Programs"
        intro="Qualified via the IMAC-accredited education and training programme delivered by ICMA (ANZ)."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {stages.map((s, i) => (
              <Card key={s.title}>
                <CardHeader>
                  <CardDescription className="font-bold tracking-[0px] uppercase">
                    Stage {i + 1}
                  </CardDescription>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-[1.33] font-normal text-[#303030]">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="mt-14 text-[28px] font-bold tracking-[0px] text-[#222222]">Delivered in Indonesia by</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-[#0a5cc7]">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-normal text-[#303030]">{p.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-1 rounded-full bg-[#ffd400] px-6 py-3 text-base font-bold text-[#090d46] hover:bg-[#090d46] hover:text-white"
          >
            Apply for the program <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

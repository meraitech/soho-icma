import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = { title: "IMAC" };

const links = [
  {
    title: "IMAC Global",
    text: "Charter member network and global accreditation.",
    href: "https://imacglobal.org/",
  },
  {
    title: "CMA Australia",
    text: "Institute of Certified Management Accountants (ANZ).",
    href: "https://cmaaustralia.edu.au/",
  },
];

export default function ImacPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Network"
        title="IMAC"
        intro="International Management Accounting Collaborative — the global body accrediting the CMA pathway."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1024px] px-4 py-12 sm:px-6 sm:py-16">
          <p className="max-w-3xl text-base leading-[1.33] font-normal text-[#303030]">
            CMAs in Indonesia are qualified via the education and training programme accredited
            by the International Management Accounting Collaborative and delivered by the
            Institute of Certified Management Accountants (Australia & New Zealand).
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {links.map((l) => (
              <a key={l.title} href={l.href} target="_blank" rel="noreferrer" className="group">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="group-hover:text-[#0a5cc7]">{l.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-normal text-[#303030]">{l.text}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

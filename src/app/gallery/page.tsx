import type { Metadata } from "next";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = { title: "Picture Gallery" };

const shots = [
  "Jakarta — branch home city",
  "ICMA ANZ Indonesia Branch gathering",
  "Executive Board ICMA Indonesia",
  "CMA Batch 19 intensive program",
  "Annual General Meeting 2026",
  "CFO Award ceremony",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="ICMA Indonesia Picture Gallery"
        intro="Moments from branch programs, gatherings and ceremonies."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shots.map((title) => (
              <Card key={title} className="overflow-hidden py-0">
                <Skeleton className="h-52 rounded-none bg-[#f7f7f7]" aria-label={title} />
                <CardHeader>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-sm font-normal text-[#767676]">
            Gallery photos are placeholders — send the branch photo set and each tile will be
            swapped for the real image with its caption.
          </p>
        </div>
      </section>
    </>
  );
}

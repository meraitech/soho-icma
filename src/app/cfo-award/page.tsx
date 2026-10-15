import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = { title: "CFO Award" };

export default function CfoAwardPage() {
  return (
    <>
      <PageHero
        eyebrow="Recognition"
        title="CFO Award"
        intro="Celebrating Indonesia's outstanding chief financial officers and finance leaders."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
          <div>
            <span className="flex size-14 items-center justify-center rounded-none bg-canvas text-brand-200">
              <Trophy className="size-8" />
            </span>
            <h2 className="mt-5 text-[28px] font-bold tracking-[0px] text-foreground">About the award</h2>
            <p className="mt-3 text-base leading-[1.33] font-normal text-faint">
              Honouring finance leaders for excellence in strategy, governance and value creation.
            </p>
            <h2 className="mt-8 text-[28px] font-bold tracking-[0px] text-foreground">How it works</h2>
            <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-base leading-[1.33] font-normal text-faint">
              <li>Nominations open to organisations across Indonesia.</li>
              <li>Panel assessment against leadership, integrity and performance criteria.</li>
              <li>Winners announced at the annual award night.</li>
            </ol>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1 rounded-full bg-highlight px-6 py-3 text-base font-bold text-white hover:bg-canvas hover:text-white"
            >
              Nominate a CFO <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="rounded-none bg-canvas p-8 text-white sm:p-12">
            <h2 className="text-lg font-bold tracking-[0px]">2026 key information</h2>
            <dl className="mt-5 flex flex-col gap-4 text-sm">
              <div>
                <dt className="text-xs font-bold tracking-[0px] text-brand-200 uppercase">Eligibility</dt>
                <dd className="mt-1 text-body-dark">CFOs and senior finance executives in Indonesia.</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0px] text-brand-200 uppercase">Nominations</dt>
                <dd className="mt-1 text-body-dark">Now open — contact the branch secretariat.</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0px] text-brand-200 uppercase">Ceremony</dt>
                <dd className="mt-1 text-body-dark">Award night details announced via branch channels.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

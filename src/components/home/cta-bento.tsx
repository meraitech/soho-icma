import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CtaOrbit from "@/components/home/cta-orbit";
import CtaPhone from "@/components/home/cta-phone";

export default function CtaBento() {
  return (
    <section aria-label="Start your CMA journey" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-bold tracking-[0px] text-brand-core uppercase">Start here</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl text-[28px] font-bold tracking-[0px] text-foreground sm:text-4xl">
            Take the next step to CMA
          </h2>
          <p className="max-w-md text-base font-normal text-muted-foreground">
            Join the branch community, then follow your program from your phone — intakes, CPD and
            events in one place.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-highlight px-6 py-3 text-center text-base font-bold text-white hover:bg-electric-deep"
          >
            Apply Now
          </Link>
          <Link
            href="/programs"
            className="rounded-full bg-electric px-6 py-3 text-center text-base font-bold text-white hover:bg-electric-deep"
          >
            Explore Programs
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <CtaOrbit />
          <CtaPhone />
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {[
            { label: "Membership", href: "/membership" },
            { label: "Events & webinars", href: "/events" },
            { label: "Contact the branch", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="group inline-flex items-center gap-1 text-base font-bold text-foreground hover:text-electric hover:underline"
            >
              {l.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

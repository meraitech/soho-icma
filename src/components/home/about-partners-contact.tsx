import { Building2 } from "lucide-react";
import { partners } from "@/data/site";

export function Partners() {
  return (
    <section id="partners" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-bold tracking-[0px] text-brand-core uppercase">
          Delivery partners
        </p>
        <div className="mt-4 grid gap-px bg-border md:grid-cols-3">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-background p-6 hover:bg-surface-alt"
            >
              <span className="flex size-10 items-center justify-center rounded-none bg-canvas text-white">
                <Building2 className="size-5" />
              </span>
              <span className="mt-3 block text-lg font-bold tracking-[0px] text-foreground group-hover:text-electric">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

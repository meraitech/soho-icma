import { Building2 } from "lucide-react";
import { partners } from "@/data/site";

export function Partners() {
  return (
    <section id="partners" className="bg-white">
      <div className="mx-auto max-w-[1024px] px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm font-bold tracking-[0px] text-[#00539d] uppercase">
          Delivery partners
        </p>
        <div className="mt-4 grid gap-px bg-[#d6d9da] md:grid-cols-3">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group bg-white p-6 hover:bg-[#f7f7f7]"
            >
              <span className="flex size-10 items-center justify-center rounded-none bg-[#090d46] text-white">
                <Building2 className="size-5" />
              </span>
              <span className="mt-3 block text-lg font-bold tracking-[0px] text-[#222222] group-hover:text-[#0a5cc7]">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

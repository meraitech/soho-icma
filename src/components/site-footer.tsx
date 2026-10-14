import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { officers, site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="bg-[#090d46] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-none bg-[#ffd400] text-lg font-bold text-[#090d46]">
              CMA
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-[0px]">CMA Indonesia</span>
              <span className="block text-[11px] font-normal text-[#e6f1ff]/60">
                Certified Management Accountants
              </span>
            </span>
          </div>
          <p className="mt-4 text-base leading-[1.33] font-light text-[#e6f1ff]">{site.tagline}</p>
        </div>

        <nav aria-label="Explore">
          <h3 className="text-xs font-bold tracking-[0px] text-[#ffd400] uppercase">Explore</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-base">
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/about">About Us</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/programs">Education Programs</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/membership">Membership</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/events">Events & Webinars</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/gallery">Picture Gallery</Link></li>
          </ul>
        </nav>

        <nav aria-label="Programs">
          <h3 className="text-xs font-bold tracking-[0px] text-[#ffd400] uppercase">Programs</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-base">
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/cfo-award">CFO Award</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/imac">IMAC</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/announcements">Announcement</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/events">Past Webinars</Link></li>
            <li><Link className="font-normal text-[#e6f1ff] hover:bg-[rgba(115,133,159,0.5)] hover:text-white hover:underline" href="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold tracking-[0px] text-[#ffd400] uppercase">Branch Office</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[#e6f1ff]">
            {officers.slice(0, 2).map((o) => (
              <li key={o.email}>
                <span className="font-bold text-white">{o.role}:</span> {o.name}
                <br />
                <a className="text-[#ffd400] hover:text-white hover:underline" href={`mailto:${o.email}`}>
                  {o.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="bg-[#272a5c]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-[#e6f1ff]/60 sm:flex-row sm:px-6">
        <p>Copyright © 2026 {site.name} — ICMA Indonesia Branch.</p>
        <p>
          <Link href="/about" className="hover:text-white hover:underline">About</Link>
          {" · "}
          <Link href="/contact" className="hover:text-white hover:underline">Contact</Link>
          {" · "}
          <Link href="/announcements" className="hover:text-white hover:underline">Announcement</Link>
        </p>
      </div>
    </footer>
  );
}

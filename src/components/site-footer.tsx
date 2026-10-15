import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Education Programs", href: "/programs" },
      { text: "Membership", href: "/membership" },
      { text: "Events & Webinars", href: "/events" },
      { text: "Picture Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Programs",
    links: [
      { text: "CFO Award", href: "/cfo-award" },
      { text: "IMAC", href: "/imac" },
      { text: "Announcement", href: "/announcements" },
      { text: "Past Webinars", href: "/events" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-canvas px-4 text-white sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-8 py-12">
          <Link
            href="/"
            className="inline-flex w-fit items-center rounded-none bg-background p-3"
            aria-label="CMA Indonesia — home"
          >
            <Image
              src="/icma/logo.webp"
              alt="CMA Indonesia"
              width={600}
              height={247}
              className="h-10 w-auto sm:h-12"
              sizes="(max-width: 640px) 240px, 300px"
            />
          </Link>
        </div>
      </div>

      <div className="border-y border-canvas-line">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.5fr]">
            <div className="border-b border-canvas-line py-8 lg:border-r lg:border-b-0 lg:py-8 lg:pr-8">
              <div>
                <h3 className="mb-6 text-lg font-medium tracking-tight sm:text-xl">
                  Stay updated on branch developments.
                </h3>

                <form
                  action="/contact"
                  method="get"
                  className="mb-6 flex"
                >
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-newsletter-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 border border-r-0 border-white/30 bg-transparent px-4 py-3 text-sm text-white placeholder:text-body-dark/60 focus:border-body-dark focus:outline-none sm:px-6 sm:py-4 sm:text-base"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center border border-highlight bg-highlight px-4 text-white transition-colors hover:bg-electric-deep sm:px-6"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </form>

                <p className="text-xs text-body-dark/60 sm:text-sm">
                  *By completing this form you are signing up to receive our
                  emails and can unsubscribe at any time.
                </p>
              </div>
            </div>

            <div className="py-8 lg:py-8 lg:pl-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    <h4 className="mb-4 text-sm font-medium tracking-tight sm:mb-6 sm:text-base">
                      {column.title}
                    </h4>
                    <ul className="space-y-3">
                      {column.links.map((link) => (
                        <li key={link.text}>
                          <Link
                            href={link.href}
                            className="text-sm tracking-tight text-body-dark transition-colors hover:text-white sm:text-base"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div>
                  <h4 className="mb-4 text-sm font-medium tracking-tight sm:mb-6 sm:text-base">
                    Branch Office
                  </h4>
                  <address className="text-sm leading-relaxed not-italic sm:text-base">
                    <p className="tracking-tight text-body-dark">
                      Menara Rajawali Lt.7-1
                      <br />
                      Jl. DR. Ida Anak Agung Gde Agung
                      <br />
                      Kawasan Mega Kuningan
                      <br />
                      Jakarta Selatan
                      <br />
                      12950
                      <br />
                      Indonesia
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-3 inline-block tracking-tight text-brand-200 transition-colors hover:text-white"
                    >
                      {site.email}
                    </a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="py-8">
          <p className="text-xs text-body-dark/60 sm:text-sm">
            Copyright © 2026 ICMA Indonesia, by{" "}
            <a
              href="https://merai.tech"
              target="_blank"
              rel="noreferrer"
              className="underline transition-colors hover:text-white"
            >
              Merai Technology
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

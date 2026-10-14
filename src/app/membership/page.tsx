import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = { title: "Membership" };

const tiers = [
  {
    title: "Associate Member",
    text: "For graduates and early-career professionals on the CMA pathway.",
  },
  {
    title: "Certified Member (CMA)",
    text: "Full designation for qualified management accountants.",
  },
  {
    title: "Fellow / Senior Practitioner",
    text: "Recognition for experienced leaders contributing to the profession.",
  },
];

const faqs = [
  {
    q: "How do I become a CMA in Indonesia?",
    a: "Complete the IMAC-accredited CMA program through IPMI, RAD Indonesia or BNC, then apply for membership with the branch.",
  },
  {
    q: "Where do I get the application forms?",
    a: "Use the membership application pack linked below, or contact the branch secretariat directly.",
  },
  {
    q: "Is continuous professional development required?",
    a: "Yes. CMAs commit to ongoing CPD through branch seminars, webinars and training activities.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Members"
        title="Membership"
        intro="Join a premier body of professionals practising the science of management accounting."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1024px] px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <Card key={t.title}>
                <CardHeader>
                  <CardTitle>{t.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-[1.33] font-normal text-[#303030]">{t.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-none bg-[#090d46] p-8 text-white sm:p-12">
            <h2 className="text-[22px] font-bold tracking-[0px]">Membership application pack</h2>
            <p className="mt-2 max-w-2xl text-base font-light text-[#e6f1ff]">
              Download the official CMA membership application forms and submit them to the
              branch secretariat.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.cmawebline.org/membership/application.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-full bg-[#ffd400] px-6 py-3 text-base font-bold text-[#090d46] hover:bg-white"
              >
                Download forms <ArrowRight className="size-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1 rounded-full bg-[#0a5cc7] px-6 py-3 text-base font-bold text-white hover:bg-[#084697]"
              >
                Contact secretariat
              </Link>
            </div>
          </div>

          <h2 id="faq" className="mt-14 scroll-mt-24 text-[28px] font-bold tracking-[0px] text-[#222222]">
            Frequently asked questions
          </h2>
          <Accordion defaultValue={["faq-0"]} className="mt-4">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-bold text-[#222222]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-[1.33] font-normal text-[#303030]">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import { Partners } from "@/components/home/about-partners-contact";
import { aboutParagraphs } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About ICMA Indonesia"
        intro="The Indonesia branch of the Institute of Certified Management Accountants (Australia & New Zealand)."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1024px] px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex max-w-3xl flex-col gap-5 text-base leading-[1.33] font-normal text-[#303030]">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <h2 className="mt-10 text-[28px] font-bold tracking-[0px] text-[#222222]">Our objectives</h2>
          <ul className="mt-4 flex max-w-3xl list-disc flex-col gap-2 pl-5 text-base leading-[1.33] font-normal text-[#303030]">
            <li>Provide a professional organisation for management accountants.</li>
            <li>Encourage, disseminate and promote the specialisation of management accounting.</li>
            <li>Serve members across Australia, Asia, Europe, Africa and the Americas.</li>
            <li>Support continuous professional development through seminars and training.</li>
          </ul>
        </div>
      </section>
      <Partners />
    </>
  );
}

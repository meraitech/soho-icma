"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Globe, GraduationCap, Users, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { audienceTabs, type AudienceCard, type AudienceTab } from "@/data/site";

const tabIcons: Record<AudienceTab["id"], LucideIcon> = {
  cgba: Globe,
  cma: GraduationCap,
  events: CalendarDays,
  members: Users,
};

function SmallCard({ card, className }: { card: AudienceCard; className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-base leading-[1.33] font-normal text-[#303030]">{card.text}</p>
        {card.cta && card.href ? (
          <Link
            href={card.href}
            className="mt-auto inline-flex w-fit items-center gap-1 text-base font-bold text-[#090d46] hover:text-[#0a5cc7] hover:underline"
          >
            {card.cta} <ArrowRight className="size-4" />
          </Link>
        ) : null}
      </CardContent>
    </Card>
  );
}

function FeatureCard({ card }: { card: AudienceCard }) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-none bg-[#090d46] p-8 text-white sm:p-12">
      <div>
        <h3 className="text-[28px] leading-[1.14] font-bold tracking-[0px]">{card.title}</h3>
        <p className="mt-3 max-w-md text-lg leading-[1.33] font-light text-[#e6f1ff]">{card.text}</p>
      </div>
      {card.cta && card.href ? (
        <Link
          href={card.href}
          className="inline-flex w-fit items-center gap-1 rounded-full bg-[#ffd400] px-6 py-3 text-base font-bold text-[#090d46] hover:bg-white"
        >
          {card.cta} <ArrowRight className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}

/** Each tab renders the same cards in a different bento arrangement. */
function Bento({ tab }: { tab: AudienceTab }) {
  const [a, b, c] = tab.cards;

  if (tab.id === "cgba") {
    // Feature panel left, two cards stacked right.
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 lg:row-span-2">
          <FeatureCard card={a} />
        </div>
        <SmallCard card={b} />
        <SmallCard card={c} />
      </div>
    );
  }

  if (tab.id === "cma") {
    // Mirrored: two cards stacked left, feature panel right.
    return (
      <div className="grid gap-6 lg:grid-cols-3">
        <SmallCard card={b} className="lg:col-start-1 lg:row-start-1" />
        <SmallCard card={c} className="lg:col-start-1 lg:row-start-2" />
        <div className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <FeatureCard card={a} />
        </div>
      </div>
    );
  }

  if (tab.id === "events") {
    // Tall panel left, rows right.
    return (
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 lg:row-span-2">
          <FeatureCard card={a} />
        </div>
        <div className="lg:col-span-2">
          <SmallCard card={b} />
        </div>
        <div className="lg:col-span-2">
          <SmallCard card={c} />
        </div>
      </div>
    );
  }

  // members: wide banner card on top, two halves below.
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="md:col-span-2">
        <div className="rounded-none bg-[#0a5cc7] p-8 text-white sm:p-12">
          <h3 className="max-w-xl text-[28px] leading-[1.14] font-bold tracking-[0px]">{a.title}</h3>
          <p className="mt-2 max-w-xl text-lg leading-[1.33] font-light text-[#e6f1ff]">{a.text}</p>
          {a.cta && a.href ? (
            <Link
              href={a.href}
              className="mt-5 inline-flex items-center gap-1 rounded-full bg-white px-6 py-3 text-base font-bold text-[#090d46] hover:bg-[#ffd400]"
            >
              {a.cta} <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
      <SmallCard card={b} />
      <SmallCard card={c} />
    </div>
  );
}

export default function AudienceTabs() {
  return (
    <section className="border-b border-[#d6d9da]">
      <div className="w-full ">
        <Tabs defaultValue="cgba">
          <div className="border-b border-ink-200 flex justify-center">
            <TabsList
              variant="line"
              className="px-4 sm:px-6 grid-cols-4 mx-auto max-w-6xl w-full"
            >
              {audienceTabs.map((t) => {
                const Icon = tabIcons[t.id];
                return (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    className="flex-col border-x-0 border-t-0 border-b-3 border-transparent px-2 py-4 whitespace-normal text-[#767676] after:hidden hover:text-[#090d46] data-active:border-[#ffd400] data-active:bg-transparent data-active:text-[#090d46]"
                  >
                    <Icon className="size-10" aria-hidden />
                    <span className="text-sm font-bold">{t.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {audienceTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-8 mx-auto max-w-6xl px-4 sm:px-6 ">
              <p className="text-sm font-bold tracking-normal text-[#00539d] uppercase">
                {tab.eyebrow}
              </p>
              <h2 className="mt-2 text-[28px] font-bold tracking-[0px] text-[#222222] sm:text-4xl">
                {tab.title}
              </h2>

              <div className="mt-6">
                <Bento tab={tab} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

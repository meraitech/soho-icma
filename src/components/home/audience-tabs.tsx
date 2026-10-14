"use client";

import Image from "next/image";
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
    <Card className={`aspect-square rounded-none ${className ?? ""}`}>
      <CardHeader>
        <CardTitle className="line-clamp-3">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="line-clamp-4 text-base leading-[1.33] font-normal text-[#303030]">{card.text}</p>
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
    <div className="relative aspect-square overflow-hidden rounded-none bg-[#090d46] text-white">
      {card.image ? (
        <Image
          src={card.image}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden />
      <div className="relative flex h-full flex-col justify-end gap-4 p-6 sm:p-8">
        <div>
          <h3 className="text-[28px] leading-[1.14] font-bold tracking-[0px]">{card.title}</h3>
          <p className="mt-2 max-w-md text-lg leading-[1.33] font-light text-white">{card.text}</p>
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
    </div>
  );
}

/**
 * 2-column 50-50% bento, all cells square, alternating per tab.
 * Layout A (cgba, events): left = big top + 2 smalls bottom,
 *   right = 2 smalls top + big bottom.
 * Layout B (cma, members): mirrored vertical order.
 */
function Bento({ tab }: { tab: AudienceTab }) {
  const [featureLeft, smallLeft1, smallLeft2, smallRight1, smallRight2, featureRight] =
    tab.cards.length >= 6
      ? (tab.cards as [AudienceCard, AudienceCard, AudienceCard, AudienceCard, AudienceCard, AudienceCard])
      : [tab.cards[0], tab.cards[1], tab.cards[2], tab.cards[1], tab.cards[2], tab.cards[0]];

  const mirrored = tab.id === "cma" || tab.id === "members";

  const leftSmalls = (
    <div className="grid grid-cols-2 gap-6">
      <SmallCard card={smallLeft1} />
      <SmallCard card={smallLeft2} />
    </div>
  );
  const rightSmalls = (
    <div className="grid grid-cols-2 gap-6">
      <SmallCard card={smallRight1} />
      <SmallCard card={smallRight2} />
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        {mirrored ? leftSmalls : <FeatureCard card={featureLeft} />}
        {mirrored ? <FeatureCard card={featureLeft} /> : leftSmalls}
      </div>
      <div className="flex flex-col gap-6">
        {mirrored ? <FeatureCard card={featureRight} /> : rightSmalls}
        {mirrored ? rightSmalls : <FeatureCard card={featureRight} />}
      </div>
    </div>
  );
}

export default function AudienceTabs() {
  return (
    <section>
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
            <TabsContent key={tab.id} value={tab.id} className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-12">
              <Bento tab={tab} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

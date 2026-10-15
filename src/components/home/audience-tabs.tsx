"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Globe, GraduationCap, Users, type LucideIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { audienceTabs, type AudienceCard, type AudienceTab } from "@/data/site";

const tabIcons: Record<AudienceTab["id"], LucideIcon> = {
  cgba: Globe,
  cma: GraduationCap,
  events: CalendarDays,
  members: Users,
};

type SmallTone = "electric" | "deep" | "pink" | "white";

const smallTones: Record<SmallTone, string> = {
  electric: "bg-electric text-white hover:bg-electric-deep",
  deep: "bg-accent-2 text-white hover:bg-electric-deep",
  pink: "bg-accent-pink text-canvas hover:bg-accent-pink-deep",
  white: "bg-white text-canvas hover:bg-surface-alt",
};

function SmallCard({
  card,
  icon: Icon,
  tone = "electric",
}: {
  card: AudienceCard;
  icon: LucideIcon;
  tone?: SmallTone;
}) {
  return (
    <div
      className={`flex flex-col justify-start gap-4 rounded-none border-0 p-6 transition-colors min-[520px]:aspect-square sm:p-8 md:gap-4 md:p-6 lg:gap-6 lg:p-10 ${smallTones[tone]}`}
    >
      <Icon className="size-8 shrink-0 sm:size-10 md:size-8 lg:size-10" aria-hidden />
      <h3 className="line-clamp-3 font-heading text-lg leading-[1.25] font-bold tracking-[0px] sm:text-[22px] md:text-lg lg:text-[22px]">
        {card.title}
      </h3>
    </div>
  );
}

function FeatureCard({ card, className }: { card: AudienceCard; className?: string }) {
  return (
    <div className={`relative aspect-square overflow-hidden rounded-none bg-canvas text-white ${className ?? ""}`}>
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
      <div className="relative flex h-full flex-col justify-end gap-3 p-6 lg:gap-4 lg:p-8">
        <div>
          <h3 className="text-[22px] leading-[1.14] font-bold tracking-[0px] md:text-2xl lg:text-[28px]">{card.title}</h3>
          <p className="mt-2 max-w-md text-base leading-[1.33] font-light text-white lg:text-lg">{card.text}</p>
        </div>
        {card.cta && card.href ? (
          <Link
            href={card.href}
            className="inline-flex w-fit items-center gap-1 rounded-full bg-highlight px-6 py-3 text-base font-bold text-white hover:bg-background hover:text-canvas"
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
  const Icon = tabIcons[tab.id];

  const leftSmalls = (
    <div className={`grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:gap-6 ${mirrored ? "order-2 md:order-1" : "order-2"}`}>
      <SmallCard card={smallLeft1} icon={Icon} tone="pink" />
      <SmallCard card={smallLeft2} icon={Icon} tone="electric" />
    </div>
  );
  const rightSmalls = (
    <div className={`grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:gap-6 ${mirrored ? "order-2" : "order-2 md:order-1"}`}>
      <SmallCard card={smallRight1} icon={Icon} tone="white" />
      <SmallCard card={smallRight2} icon={Icon} tone="electric" />
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
      <div className="flex flex-col gap-4 lg:gap-6">
        <FeatureCard card={featureLeft} className={mirrored ? "order-1 md:order-2" : "order-1"} />
        {leftSmalls}
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <FeatureCard card={featureRight} className={mirrored ? "order-1" : "order-1 md:order-2"} />
        {rightSmalls}
      </div>
    </div>
  );
}

export default function AudienceTabs() {
  return (
    <section className="bg-canvas text-white">
      <div className="w-full ">
        <Tabs defaultValue="cgba">
          <div className="flex justify-center border-b border-canvas-line">
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
                    className="flex-col border-x-0 border-t-0 border-b-3 border-transparent px-2 py-4 whitespace-normal text-white/70 after:hidden hover:text-white data-active:border-highlight data-active:bg-transparent data-active:text-white"
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

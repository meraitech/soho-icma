import HomeHero from "@/components/home/hero";
import AudienceTabs from "@/components/home/audience-tabs";
import LatestUpdates from "@/components/home/updates";
import SonarFindingsLazy from "@/components/home/sonar-findings-lazy";
import ShowcaseVideo from "@/components/home/showcase-video";
import CtaBento from "@/components/home/cta-bento";

export default function Home() {
  return (
    <>

      <HomeHero />
      <div className="grid gap-12 bg-canvas pb-24 sm:gap-16 sm:pb-32">
        <AudienceTabs />
        <LatestUpdates />
      </div>
      <SonarFindingsLazy />
      <ShowcaseVideo />
      <CtaBento />
    </>
  );
}

import HomeHero from "@/components/home/hero";
import AudienceTabs from "@/components/home/audience-tabs";
import LatestUpdates from "@/components/home/updates";
import Spotlight from "@/components/home/spotlight";
import { Partners } from "@/components/home/about-partners-contact";

export default function Home() {
  return (
    <>

      <HomeHero />
      <div className="grid sm:pb-32 pb-24 gap-12 sm:gap-16 ">
        <AudienceTabs />
        <LatestUpdates />
      </div>
      <Spotlight />
      <Partners />
    </>
  );
}

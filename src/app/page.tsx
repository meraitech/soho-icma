import HomeHero from "@/components/home/hero";
import AudienceTabs from "@/components/home/audience-tabs";
import LatestUpdates from "@/components/home/updates";
import Spotlight from "@/components/home/spotlight";
import { Partners } from "@/components/home/about-partners-contact";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AudienceTabs />
      <LatestUpdates />
      <Spotlight />
      <Partners />
    </>
  );
}

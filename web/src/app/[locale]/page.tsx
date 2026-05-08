import { HomeBespoke } from "@/components/sections/HomeBespoke";
import { HomeCreatrice } from "@/components/sections/HomeCreatrice";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeJournal } from "@/components/sections/HomeJournal";
import { HomeMaterials } from "@/components/sections/HomeMaterials";
import { HomeProcessCirePerdue } from "@/components/sections/HomeProcessCirePerdue";
import { HomeProductsTeaser } from "@/components/sections/HomeProductsTeaser";
import { HomeTestimonialCentral } from "@/components/sections/HomeTestimonialCentral";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBar />
      <HomeProductsTeaser />
      <HomeProcessCirePerdue />
      <HomeMaterials />
      <HomeBespoke />
      <HomeCreatrice />
      <HomeTestimonialCentral />
      <HomeJournal />
    </>
  );
}

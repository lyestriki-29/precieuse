import { HomeBespoke } from "@/components/sections/HomeBespoke";
import { HomeContactCta } from "@/components/sections/HomeContactCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeProductsTeaser } from "@/components/sections/HomeProductsTeaser";
import { HomeStory } from "@/components/sections/HomeStory";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStory />
      <HomeProductsTeaser />
      <HomeBespoke />
      <HomeTestimonials />
      <HomeContactCta />
    </>
  );
}

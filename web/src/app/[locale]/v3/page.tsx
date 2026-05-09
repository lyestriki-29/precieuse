import { V3Footer } from "@/components/v3/V3Footer";
import { V3Nav } from "@/components/v3/V3Nav";
import { V3Hero } from "@/components/v3/V3Hero";
import { V3Series } from "@/components/v3/V3Series";
import { V3SurMesure } from "@/components/v3/V3SurMesure";
import { V3Creatrice } from "@/components/v3/V3Creatrice";
import { V3Atelier } from "@/components/v3/V3Atelier";
import { V3Testimonial } from "@/components/v3/V3Testimonial";
import { V3Newsletter } from "@/components/v3/V3Newsletter";

export const metadata = {
  title: "Précieuse — Joaillerie éditoriale",
  description:
    "Nous ne créons pas simplement des bijoux. Nous créons des liens.",
};

export default function V3HomePage() {
  return (
    <div className="-mt-16 bg-[#fdf7ff] text-[#1d1b20] font-[family-name:var(--font-inter)] antialiased">
      <V3Nav />
      <main>
        <V3Hero />
        <V3Series />
        <V3SurMesure />
        <V3Creatrice />
        <V3Atelier />
        <V3Testimonial />
        <V3Newsletter />
      </main>
      <V3Footer />
    </div>
  );
}

import { V3Creatrice } from "@/components/v3/V3Creatrice";
import { V3Footer } from "@/components/v3/V3Footer";
import { V3Hero } from "@/components/v3/V3Hero";
import { V3Nav } from "@/components/v3/V3Nav";
import { V3Newsletter } from "@/components/v3/V3Newsletter";
import { V3Series } from "@/components/v3/V3Series";
import { V3Testimonial } from "@/components/v3/V3Testimonial";

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
        <V3Creatrice />
        <V3Testimonial />
        <V3Newsletter />
      </main>
      <V3Footer />
    </div>
  );
}

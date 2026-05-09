import Image from "next/image";
import { PRODUCTS } from "@/lib/content/products";

const NUMBERS = ["№ 02", "№ 03", "№ 04", "№ 05", "№ 06"] as const;

// Variation verticale : chaque œuvre est décalée différemment
const OFFSETS = [
  "mt-0",
  "mt-16",
  "mt-0",
  "mt-24",
  "mt-8",
] as const;

export function V3BVitrine() {
  const oeuvres = PRODUCTS.map((p, i) => ({
    ...p,
    numero: NUMBERS[i] ?? `№ 0${i + 2}`,
    offset: OFFSETS[i] ?? "mt-0",
  }));

  return (
    <section id="vitrine" className="bg-[#fafaf8] py-40 sm:py-56 px-6">
      <div className="max-w-[1080px] mx-auto">
        {/* En-tête section */}
        <div className="mb-24">
          <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#b08d57] uppercase mb-4">
            Exposition permanente
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[42px] sm:text-[56px] font-light italic text-[#0d0d0d] leading-tight">
            Œuvres en cours
          </h2>
        </div>

        {/* Grid accrochage musée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {oeuvres.map((oeuvre) => (
            <div key={oeuvre.slug} className={`group ${oeuvre.offset}`}>
              {/* Cadre image */}
              <div className="relative overflow-hidden bg-[#ffffff]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={oeuvre.image}
                    alt={oeuvre.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Cartel au survol */}
                <div className="absolute inset-0 bg-[#ffffff]/90 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#b08d57] mb-2">
                    {oeuvre.numero}
                  </p>
                  <p className="font-[family-name:var(--font-cormorant)] text-[20px] font-light italic text-[#0d0d0d] mb-2">
                    {oeuvre.name}
                  </p>
                  <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.12em] text-[#a8a39a] uppercase mb-1">
                    {oeuvre.materials}
                  </p>
                  <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.12em] text-[#a8a39a] uppercase mb-3">
                    {oeuvre.price}
                  </p>
                  <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.15em] text-[#0d0d0d] uppercase">
                    Acquisition sur demande
                  </p>
                </div>
              </div>

              {/* Cartel statique sous l'œuvre */}
              <div className="mt-5">
                <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#b08d57] mb-1">
                  {oeuvre.numero}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-[18px] font-light italic text-[#0d0d0d]">
                  {oeuvre.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

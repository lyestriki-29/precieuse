import Image from "next/image";

export function V3BCartelAtelier() {
  return (
    <section id="atelier" className="bg-[#ffffff] py-40 sm:py-56 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Photo atelier */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/stitch-v2/atelier-azulejos-lisboa.jpg"
              alt="Atelier Précieuse — Lisbonne"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>

          {/* Texte muséographique */}
          <div className="lg:pt-16">
            <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#b08d57] uppercase mb-8">
              Notice de présentation
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] sm:text-[48px] font-light italic text-[#0d0d0d] leading-tight mb-10">
              L'Atelier
            </h2>

            <div className="space-y-5 font-[family-name:var(--font-manrope)] text-[13px] font-light leading-relaxed text-[#0d0d0d]">
              <p>
                Précieuse opère depuis un atelier traditionnel à Lisbonne,
                dans la tradition portugaise du travail à la cire perdue.
                Chaque pièce fait l'objet d'une numérotation unique et d'un
                certificat d'authenticité signé par la créatrice.
              </p>
              <p>
                La méthode de la cire perdue — <em className="font-[family-name:var(--font-cormorant)] text-[15px] italic">lost-wax casting</em> —
                est l'une des plus anciennes techniques de fonderie connues.
                Elle garantit une fidélité absolue au dessin original, depuis
                la maquette en cire jusqu'à la pièce en or massif.
              </p>
              <p>
                L'atelier travaille exclusivement en or 19 carats,
                choisi pour sa pureté et sa résistance. Chaque alliage est
                préparé à la main selon les proportions définies par Éméline
                Marchal pour chaque série.
              </p>
              <p>
                Les diamants utilisés sont sélectionnés pierre par pierre,
                avec traçabilité complète. Aucun diamant de conflit n'entre
                dans les ateliers Précieuse — chaque certificat GVS est
                transmis avec la pièce.
              </p>
              <p>
                La production est intentionnellement limitée : douze pièces
                par série, numérotées de 1 à 12. Au-delà, l'atelier n'accepte
                que des commandes sur mesure, discutées directement lors d'une
                visite au studio.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#e8e6e1]">
              <p className="font-[family-name:var(--font-cormorant)] text-[16px] font-light italic text-[#b08d57]">
                Éméline Marchal
              </p>
              <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#a8a39a] uppercase mt-1">
                Fondatrice · Orfèvre
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type Article = {
  categorie: string;
  titre: string;
  extrait: string;
  image: string;
  imageAlt: string;
  rotation: string;
};

const ARTICLES: Article[] = [
  {
    categorie: "COULISSES",
    titre: "Une aquarelle avant la fonte",
    extrait: "Avant chaque pièce, il y a toujours un dessin. Parfois trois. Ce que l'on ne voit jamais, c'est la corbeille.",
    image: "/images/atelier/dessin-aquarelle.jpg",
    imageAlt: "Dessin aquarelle préparatoire dans l'atelier",
    rotation: "rotate-1",
  },
  {
    categorie: "HISTOIRE D'UNE PIERRE",
    titre: "L'or, de la mine à l'anneau",
    extrait: "Chaque gramme d'or a une histoire. Nous voulions savoir laquelle — voilà comment on a remonté la filière.",
    image: "/images/stitch/journal-fonte-or.jpg",
    imageAlt: "Journal de fonte de l'or dans l'atelier",
    rotation: "-rotate-1",
  },
  {
    categorie: "CARNET DE VOYAGE",
    titre: "Lisbonne, lumière de novembre",
    extrait: "L'atelier prend sa lumière dans la rue. En novembre, elle arrive à 14h par la fenêtre de gauche — c'est la meilleure.",
    image: "/images/stitch-v2/atelier-azulejos-lisboa.jpg",
    imageAlt: "Atelier Précieuse à Lisbonne, azulejos et lumière",
    rotation: "rotate-[0.5deg]",
  },
];

export function V4CDuCahier() {
  return (
    <section className="relative bg-[#ede4d5] py-24 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />

      <div className="mx-auto max-w-[1440px]">
        <h2 className={`${garamond} italic text-[42px] text-[#3d2817] mb-4`}>
          Du Cahier
        </h2>
        <p className={`${caveat} text-[20px] text-[#1e3a5f] mb-20`}>
          — récits d&apos;atelier, fragments, lumières
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ARTICLES.map((a, i) => (
            <article key={i} className={`flex flex-col ${a.rotation}`}>
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Cadre esquisse */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300" fill="none"
                >
                  <rect x="8" y="8" width="384" height="284" rx="1"
                    stroke="#3d2817" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.25" />
                </svg>
              </div>

              {/* Catégorie petits caps */}
              <span className={`${caveat} text-[12px] text-[#1e3a5f] tracking-[0.2em] uppercase mb-3 opacity-70`}>
                {a.categorie}
              </span>

              <h3 className={`${garamond} italic text-[26px] text-[#3d2817] mb-3 leading-tight`}>
                {a.titre}
              </h3>

              <p className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[#6b4423] leading-relaxed mb-6 flex-1">
                {a.extrait}
              </p>

              <Link
                href="#"
                className={`${garamond} italic text-[15px] text-[#3d2817] underline underline-offset-2 decoration-[#3d2817]/30 hover:decoration-[#3d2817] transition-all self-start`}
              >
                lire la suite
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <span className={`${garamond} italic text-[13px] text-[#a08552]`}>p. 10</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[#3d2817]/15" />
    </section>
  );
}

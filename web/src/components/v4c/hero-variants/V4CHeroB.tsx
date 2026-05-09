import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

// Variante B — Carnet d'atelier polaroid. Collage tactile, scotch, écriture manuscrite.

type Polaroid = {
  src: string;
  alt: string;
  caption: string;
  rotate: string;
  top: string;
  left: string;
  z: number;
  scale?: string;
};

const POLAROIDS: Polaroid[] = [
  {
    src: "/images/bijoux-officiels/josephine.jpg",
    alt: "Joséphine sur établi",
    caption: "Joséphine — \nle premier essai",
    rotate: "-rotate-[6deg]",
    top: "top-[8%]",
    left: "left-[6%]",
    z: 30,
  },
  {
    src: "/images/atelier/dessin-aquarelle.jpg",
    alt: "Aquarelle d'atelier",
    caption: "esquisse, mardi",
    rotate: "rotate-[4deg]",
    top: "top-[14%]",
    left: "left-[34%]",
    z: 20,
  },
  {
    src: "/images/bijoux-officiels/aurore.jpg",
    alt: "Aurore",
    caption: "Aurore — soleil",
    rotate: "rotate-[-3deg]",
    top: "top-[40%]",
    left: "left-[18%]",
    z: 25,
  },
  {
    src: "/images/emeline/emeline-atelier.jpg",
    alt: "Eméline à l'atelier",
    caption: "moi, à l'établi",
    rotate: "rotate-[7deg]",
    top: "top-[48%]",
    left: "left-[58%]",
    z: 28,
    scale: "scale-105",
  },
  {
    src: "/images/atelier/bague-en-fabrication.jpg",
    alt: "Bague en cours",
    caption: "en train de naître",
    rotate: "-rotate-[8deg]",
    top: "top-[18%]",
    left: "left-[68%]",
    z: 22,
  },
];

export function V4CHeroB() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-[var(--site-bg)]">
      {/* Texture papier kraft tachée */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.25 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Lignes de cahier */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent 0 31px, var(--site-caveat) 31px 32px)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16 pt-10 pb-32">
        {/* Titre manuscrit en haut */}
        <div className="relative z-50 max-w-[640px]">
          <span className={`${caveat} text-[16px] text-[var(--site-caveat)] block leading-tight`}>
            Le carnet d&apos;Eméline —
          </span>
          <h1
            className={`${garamond} italic text-[var(--site-text)] leading-[0.95] mt-2`}
            style={{ fontSize: "clamp(56px, 8vw, 112px)" }}
          >
            Notes,
            <br />
            <span className="text-[var(--site-caveat)]">épingles</span>,
            <br />
            polaroids.
          </h1>
          <p
            className={`${caveat} text-[22px] text-[var(--site-text)]/85 mt-4 leading-snug max-w-md`}
          >
            Tout ce qui ne tient pas dans une vitrine.
            <br />
            <span className={`${inter} text-[11px] uppercase tracking-[0.3em] text-[var(--site-text)]/40 not-italic`}>
              — épinglé le 12 mai
            </span>
          </p>
        </div>

        {/* Zone collage polaroids */}
        <div className="relative h-[760px] lg:h-[640px] mt-8">
          {POLAROIDS.map((p) => (
            <figure
              key={p.src}
              className={`absolute ${p.top} ${p.left} ${p.rotate} ${p.scale ?? ""} w-[200px] lg:w-[240px] bg-[var(--site-bg)] p-3 pb-12 shadow-[0_18px_30px_-18px_rgba(0,0,0,0.45)] hover:rotate-0 hover:scale-105 transition-all duration-500`}
              style={{ zIndex: p.z }}
            >
              {/* Scotch */}
              <span
                aria-hidden
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[var(--site-caveat)]/20 border-x border-[var(--site-caveat)]/30"
                style={{ filter: "blur(0.3px)" }}
              />
              <div className="relative aspect-square overflow-hidden bg-[var(--site-text)]/5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${caveat} absolute bottom-2 left-3 right-3 text-[14px] text-[var(--site-text)]/85 leading-tight whitespace-pre-line`}
              >
                {p.caption}
              </figcaption>
            </figure>
          ))}

          {/* Petite épingle */}
          <span
            aria-hidden
            className="absolute top-[6%] left-[15%] w-3 h-3 rounded-full bg-[var(--site-accent)] shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            style={{ zIndex: 60 }}
          />
        </div>
      </div>
    </section>
  );
}

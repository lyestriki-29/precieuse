import Image from "next/image";
import { Reveal } from "@/components/luxe";

const ARTICLES = [
  {
    date: "12 AVRIL 2026",
    title: "L'alchimie du 19kt : pourquoi l'or portugais est différent",
    excerpt:
      "Une exploration de l'histoire et des propriétés chimiques qui donnent à notre or sa profondeur et sa longévité légendaires…",
    image: "/images/stitch/journal-fonte-or.jpg",
    alt: "Or en fusion versé dans un moule, étincelles dorées",
  },
  {
    date: "28 MARS 2026",
    title: "Du croquis à l'objet : l'évolution d'un dessin",
    excerpt:
      "Le voyage de la collection Joséphine, de ses premières lignes au charbon sur le papier jusqu'à la pierre polie finale…",
    image: "/images/stitch/journal-sketches-etabli.jpg",
    alt: "Esquisses techniques et fragments métalliques sur établi",
  },
];

export function HomeJournal() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Reveal>
        <div className="mb-12 flex items-baseline justify-between gap-4">
          <h2 className="font-display-lg italic">Journal d&apos;atelier</h2>
          <a
            href="#"
            className="font-technical-label uppercase tracking-[0.15em] border-b border-foreground hover:text-raspberry hover:border-raspberry transition-colors"
          >
            Voir le journal
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        {ARTICLES.map((article, i) => (
          <Reveal
            as="article"
            key={article.title}
            delay={i * 0.1}
            className="group cursor-pointer"
          >
            <div className="relative mb-5 aspect-video overflow-hidden bg-surface-dim">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="font-technical-label tracking-[0.15em] text-tertiary">
              {article.date}
            </span>
            <h3 className="font-display-lg mt-2 text-xl group-hover:underline sm:text-2xl">
              {article.title}
            </h3>
            <p className="font-body-lg mt-4 text-on-surface-variant">
              {article.excerpt}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Reveal } from "@/components/luxe";

export function HomeTestimonialCentral() {
  return (
    <section className="bg-surface-container-low py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="mx-auto h-10 w-10 text-tertiary"
            fill="currentColor"
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display-lg mt-8 leading-relaxed italic">
            Une pièce Précieuse n&apos;est pas seulement un bijou, c&apos;est une
            présence. Elle a un poids, une texture, une âme que l&apos;on ressent
            dès qu&apos;on la porte.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-1">
            <span className="font-technical-label tracking-[0.2em] uppercase">
              Claire M. — Lisbonne
            </span>
            <span className="font-technical-label tracking-[0.15em] uppercase opacity-40">
              Bague sur-mesure, 2025
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

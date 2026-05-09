import { V4CCreationsManifesto } from "./creations-variants/V4CCreationsManifesto";
import { V4CCreationsSignatures } from "./creations-variants/V4CCreationsSignatures";
import { V4CCreationsGalerie } from "./creations-variants/V4CCreationsGalerie";
import { V4CCreationsCTA } from "./creations-variants/V4CCreationsCTA";

export function V4CCreations() {
  return (
    <section
      id="creations"
      className="relative bg-[var(--site-bg)] scroll-mt-20"
      aria-labelledby="creations-heading"
    >
      {/* Filets décoratifs haut/bas */}
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <h2 id="creations-heading" className="sr-only">
        Créations — Carnet d&apos;œuvres
      </h2>

      {/* Strate 1 — Manifesto Eméline */}
      <V4CCreationsManifesto />

      {/* Strate 2 — 3 pièces signatures racontées */}
      <V4CCreationsSignatures />

      {/* Strate 3 — Galerie d'atelier (photos + vignettes texte) */}
      <V4CCreationsGalerie />

      {/* Strate 4 — CTA conversion */}
      <V4CCreationsCTA />

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}

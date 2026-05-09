import Image from "next/image";

type QR = { question: string; reponse: string };

const ENTRETIEN: QR[] = [
  {
    question: "Quelle formation vous a amenée à l'orfèvrerie ?",
    reponse:
      "J'ai commencé par des études de design textile à Paris, avant de découvrir par hasard un atelier d'orfèvrerie dans le Marais. Ce qui m'a frappée, c'est la permanence : un tissu s'use, le métal garde la mémoire du geste. J'ai tout arrêté pour apprendre la cire perdue à Lisbonne, où je suis restée.",
  },
  {
    question: "Comment définiriez-vous votre démarche créative ?",
    reponse:
      "Je dessine d'abord à l'aquarelle — jamais sur ordinateur. Le bijou naît d'une ligne, d'un rapport de volumes sur le papier. Ensuite seulement vient la matière. Je ne pars pas de la technique, je pars d'une sensation que je cherche à rendre permanente. Chaque pièce est une tentative de fixer quelque chose d'éphémère dans l'or.",
  },
  {
    question: "Quelle est votre relation à l'héritage joailler ?",
    reponse:
      "Je respecte profondément les maisons historiques, mais je ne cherche pas à les imiter. Ce qui m'intéresse, c'est la transmission directe : une pièce que l'on porte, que l'on lègue, qui traverse le temps sans explication. Le luxe véritable n'a pas besoin de logo — il se reconnaît à la main.",
  },
];

export function V3BEntretien() {
  return (
    <section className="bg-[#fafaf8] py-40 sm:py-56 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start">
          {/* Portrait */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/stitch-v3/creatrice-emeline-portrait.jpg"
                alt="Éméline Marchal — Fondatrice Précieuse"
                fill
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover grayscale"
              />
            </div>
            <div className="mt-6">
              <p className="font-[family-name:var(--font-cormorant)] text-[16px] font-light italic text-[#0d0d0d]">
                Éméline Marchal
              </p>
              <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.2em] text-[#a8a39a] uppercase mt-1">
                Orfèvre · Lisbonne
              </p>
            </div>
          </div>

          {/* Interview */}
          <div className="lg:col-span-3 lg:pt-6">
            <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#b08d57] uppercase mb-6">
              Entretien
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] sm:text-[48px] font-light italic text-[#0d0d0d] leading-tight mb-14">
              Conversation avec<br />l'artiste
            </h2>

            <div className="space-y-12">
              {ENTRETIEN.map((qr, i) => (
                <div key={i} className="border-t border-[#e8e6e1] pt-8">
                  <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.15em] text-[#0d0d0d] uppercase mb-4">
                    — {qr.question}
                  </p>
                  <p className="font-[family-name:var(--font-manrope)] text-[13px] font-light leading-relaxed text-[#0d0d0d]">
                    {qr.reponse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

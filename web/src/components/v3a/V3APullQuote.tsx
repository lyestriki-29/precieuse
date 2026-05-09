export function V3APullQuote() {
  return (
    <section className="bg-[#f6f1ea] px-12 sm:px-20 lg:px-32 py-24 border-b border-[#d4cdc1]">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-12">
          <span className="text-[#8b1e2d]">V</span>
          &nbsp;———&nbsp;Voix
        </p>

        {/* Pull quote massive */}
        <div className="flex gap-8 items-start">
          <div className="w-1 flex-shrink-0 bg-[#8b1e2d] self-stretch hidden lg:block" />
          <div>
            <blockquote className="font-[family-name:var(--font-bodoni)] text-[52px] sm:text-[64px] lg:text-[80px] italic text-[#1a1614] leading-[1.05] tracking-tight mb-10">
              &ldquo;Je ne l&rsquo;enlève plus depuis le premier
              jour&nbsp;—&nbsp;c&rsquo;est la seule bague qui
              <em className="text-[#8b1e2d]"> me ressemble vraiment.</em>&rdquo;
            </blockquote>

            <div className="flex items-center gap-6">
              <div className="w-12 h-px bg-[#d4cdc1]" />
              <div>
                <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.35em] text-[#1a1614]">
                  Sophie M.
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.25em] text-[#4a4540] mt-1">
                  Paris · Bague Joséphine · Or jaune 19kt
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2 autres témoignages courts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20 pt-12 border-t border-[#d4cdc1]">
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-bodoni)] text-[22px] italic text-[#4a4540] leading-snug">
              &ldquo;Un mois d&rsquo;attente qui en valait dix. Je n&rsquo;avais jamais compris ce que voulait dire &lsquo;fait main&rsquo; avant d&rsquo;ouvrir le coffret.&rdquo;
            </p>
            <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-[#8b1e2d]">
              Camille R. · Lyon · Bague Eugénie
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-bodoni)] text-[22px] italic text-[#4a4540] leading-snug">
              &ldquo;Éméline a su traduire exactement l&rsquo;histoire que je voulais raconter. La bague est une sur-mesure parfaite — même les mots me manquent pour la décrire.&rdquo;
            </p>
            <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-[#8b1e2d]">
              Hélène D. · Bordeaux · Sur-Mesure Thelma
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

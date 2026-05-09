import Image from "next/image";

export function V3AReportage() {
  return (
    <section className="bg-[#f6f1ea] px-12 sm:px-20 lg:px-32 py-20 border-b border-[#d4cdc1]">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-8">
          <span className="text-[#8b1e2d]">III</span>
          &nbsp;———&nbsp;Reportage
        </p>

        <h2 className="font-[family-name:var(--font-bodoni)] text-[48px] italic text-[#1a1614] mb-4 leading-tight">
          L&rsquo;atelier de Lisboa
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[15px] font-light italic text-[#4a4540] mb-12">
          Quelque part dans le quartier de l&rsquo;Ourivesaria, derrière une porte en bois clair
        </p>

        {/* Photos : 1 grande + 2 petites */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 lg:col-span-8 relative aspect-[16/10] overflow-hidden group">
            <Image
              src="/images/stitch-v3/atelier-portugal-wide.jpg"
              alt="L'atelier Précieuse à Lisbonne, vue d'ensemble"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute bottom-3 left-3">
              <span className="font-[family-name:var(--font-jetbrains)] text-[9px] uppercase tracking-[0.3em] text-white/70">
                Atelier · Lisboa · 2026
              </span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4">
            <div className="relative overflow-hidden group">
              <Image
                src="/images/atelier/bague-en-fabrication.jpg"
                alt="Bague en cours de fabrication à l'atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src="/images/atelier/dessin-aquarelle.jpg"
                alt="Dessin aquarelle de bijou en atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        {/* Texte en 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-5">
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.85] text-[#1a1614]">
              <span
                className="float-left font-[family-name:var(--font-bodoni)] text-[72px] italic leading-[0.8] mr-3 mt-1 text-[#8b1e2d]"
                aria-hidden="true"
              >
                L
              </span>
              &rsquo;atelier de Précieuse se trouve au rez-de-chaussée d&rsquo;un immeuble azulejos, dans un quartier de Lisbonne que les cartes touristiques n&rsquo;indiquent pas encore. La lumière y entre par une fenêtre haute, filtrée par un arbre que personne ne sait nommer. Éméline travaille à la même table depuis le premier jour — une planche de chêne brut recouverte de traces d&rsquo;outils, de croquis à moitié effacés, de fragments de cire.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.85] text-[#4a4540]">
              Avant chaque pièce, il y a un dessin. Puis un modèle en cire — modelé à la main, millimètre par millimètre. La cire disparaîtra dans la fonte, mais c&rsquo;est elle qui dicte tout : les proportions, le tomber de la pierre, l&rsquo;épaisseur de l&rsquo;anneau. Rien n&rsquo;est calculé par un logiciel. Tout est senti.
            </p>
          </div>
          <div className="space-y-5">
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.85] text-[#4a4540]">
              Lisbonne n&rsquo;a pas été choisie par hasard. La ville a une tradition orfèvrière qui remonte aux navigateurs — l&rsquo;or y a toujours circulé différemment, avec moins d&rsquo;ostentation que dans les ateliers parisiens, mais avec une précision redoutable. C&rsquo;est ici qu&rsquo;Éméline a trouvé ses apprentis, ses fournisseurs de métal, ses polisseurs de confiance. Un réseau tissé en trois ans de présence, de confiance gagnée lentement.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.85] text-[#4a4540]">
              Ce que l&rsquo;on fabrique ici ne peut pas être fait plus vite. Chaque bague passe entre six paires de mains différentes avant d&rsquo;être livrée. Le temps n&rsquo;est pas un coût — c&rsquo;est l&rsquo;ingrédient principal. Et cela se voit, sur le métal, à la lumière.
            </p>
            <div className="border-l-4 border-[#8b1e2d] pl-6 mt-6">
              <p className="font-[family-name:var(--font-inter)] text-[13px] uppercase tracking-[0.2em] text-[#4a4540]">
                6 paires de mains<br />
                par pièce fabriquée
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

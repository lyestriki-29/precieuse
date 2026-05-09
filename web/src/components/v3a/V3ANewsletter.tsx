"use client";

import { useState, type FormEvent } from "react";

export function V3ANewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Simulation d'envoi — à brancher sur un service réel
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-[#f6f1ea] px-12 sm:px-20 lg:px-32 py-24 border-b border-[#d4cdc1]">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.4em] text-[#4a4540] mb-8">
          <span className="text-[#8b1e2d]">VII</span>
          &nbsp;———&nbsp;Lettre
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-bodoni)] text-[56px] italic text-[#1a1614] leading-tight mb-4">
              L&rsquo;Écho<br />
              <span className="text-[#8b1e2d]">de la Maison</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-light leading-[1.8] text-[#4a4540] mb-2">
              Une lettre trimestrielle, comme nos numéros — pour celles et ceux qui veulent entrer dans l&rsquo;atelier autrement. Nouvelles pièces, gestes documentés, petites révélations sur les matériaux.
            </p>
            <p className="font-[family-name:var(--font-jetbrains)] text-[11px] uppercase tracking-[0.3em] text-[#4a4540] mt-4">
              Quatre fois par an · Aucun spam · Désabonnement immédiat
            </p>
          </div>

          <div>
            {status === "success" ? (
              <div className="border border-[#d4cdc1] p-8 text-center">
                <p className="font-[family-name:var(--font-bodoni)] text-[28px] italic text-[#1a1614] mb-3">
                  Bienvenue dans la maison.
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.3em] text-[#4a4540]">
                  Votre premier numéro arrivera bientôt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <label className="sr-only" htmlFor="newsletter-email">
                  Votre adresse email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="w-full border border-[#d4cdc1] bg-transparent px-5 py-4 font-[family-name:var(--font-inter)] text-[14px] font-light text-[#1a1614] placeholder-[#4a4540]/50 focus:outline-none focus:border-[#1a1614] transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1a1614] text-[#f6f1ea] py-4 px-8 font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.3em] hover:bg-[#8b1e2d] transition-colors duration-300"
                >
                  S&rsquo;abonner à L&rsquo;Écho
                </button>
                {status === "error" && (
                  <p className="font-[family-name:var(--font-jetbrains)] text-[10px] uppercase tracking-[0.2em] text-[#8b1e2d]">
                    Une erreur est survenue. Merci de réessayer.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

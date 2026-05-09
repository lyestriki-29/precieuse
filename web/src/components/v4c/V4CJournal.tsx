"use client";

import { useState, type FormEvent } from "react";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

export function V4CJournal() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  return (
    <section className="relative bg-[var(--site-bg)] py-12 lg:py-16 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/15" />

      <div className="relative mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
        {/* Texte */}
        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className={`${garamond} italic text-[28px] lg:text-[32px] text-[var(--site-text)] leading-none`}>
              Le Cahier
            </h2>
            <span className={`${caveat} text-[15px] text-[var(--site-caveat)]`}>
              — deux lettres par an, écrites à la main
            </span>
          </div>
          <p className={`${garamond} italic text-[14px] text-[var(--site-text)]/70`}>
            Pour celles et ceux qui aiment attendre les bonnes choses.
          </p>
        </div>

        {/* Form ou confirmation */}
        {sent ? (
          <p className={`${caveat} text-[18px] text-[var(--site-caveat)] md:text-right`}>
            Votre adresse est notée. À bientôt — É.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre email"
              required
              aria-label="Adresse email pour s'inscrire au Cahier"
              className={`${caveat} flex-1 md:w-[220px] text-[15px] text-[var(--site-text)] bg-transparent border-b border-[var(--site-text)]/40 pb-2 placeholder:text-[var(--site-text)]/40 focus:outline-none focus:border-[var(--site-text)] transition-colors`}
            />
            <button
              type="submit"
              className={`${garamond} italic text-[14px] text-[var(--site-text)] border border-[var(--site-text)]/30 px-5 py-2 hover:bg-[var(--site-text)] hover:text-[var(--site-bg)] transition-all duration-300 whitespace-nowrap`}
            >
              M&apos;inscrire
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

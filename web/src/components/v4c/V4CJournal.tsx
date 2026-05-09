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
    <section className="relative bg-[var(--site-bg)] py-32 px-8 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <div
        aria-hidden
        className={`${garamond} italic absolute -top-4 left-0 right-0 text-center text-[var(--site-text)]/[0.04] leading-none pointer-events-none select-none`}
        style={{ fontSize: "clamp(100px, 18vw, 260px)" }}
      >
        Le Cahier
      </div>

      <div className="relative mx-auto max-w-[700px] text-center">
        <span className={`${caveat} text-[18px] text-[var(--site-caveat)] block mb-6`}>
          — pour ceux qui aiment attendre les bonnes choses
        </span>

        <h2
          className={`${garamond} italic text-[var(--site-text)] leading-none mb-8`}
          style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
        >
          Le Cahier
        </h2>

        <p className={`${caveat} text-[22px] text-[var(--site-caveat)] leading-[1.6] mb-12 max-w-md mx-auto`}>
          une lettre rare, écrite à la main, deux fois par an
        </p>

        {sent ? (
          <div className="py-8">
            <p className={`${caveat} text-[24px] text-[var(--site-caveat)]`}>
              Votre adresse est notée. À bientôt.
            </p>
            <span className={`${garamond} italic text-[18px] text-[var(--site-accent)] block mt-2`}>— É.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
            <div className="w-full max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre adresse postale électronique"
                required
                aria-label="Adresse email pour s'inscrire au Cahier"
                className={`${caveat} w-full text-[18px] text-[var(--site-text)] bg-transparent border-b border-[var(--site-text)]/40 pb-3 placeholder:text-[var(--site-text)]/40 focus:outline-none focus:border-[var(--site-text)] transition-colors text-center`}
              />
            </div>
            <button
              type="submit"
              className={`${garamond} italic text-[18px] text-[var(--site-text)] border border-[var(--site-text)]/30 px-10 py-3 hover:bg-[var(--site-text)] hover:text-[var(--site-bg)] transition-all duration-300`}
            >
              M&apos;inscrire
            </button>
          </form>
        )}

        <div className="mt-16">
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 14</span>
        </div>
      </div>
    </section>
  );
}

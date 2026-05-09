"use client";

import { useState, type FormEvent } from "react";

export function V3BVernissages() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-[#fafaf8] py-40 sm:py-56 px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="max-w-[480px] mx-auto text-center">
          <p className="font-[family-name:var(--font-manrope)] text-[10px] font-light tracking-[0.35em] text-[#b08d57] uppercase mb-6">
            Correspondance
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[38px] sm:text-[48px] font-light italic text-[#0d0d0d] leading-tight mb-6">
            Vernissages
          </h2>
          <p className="font-[family-name:var(--font-manrope)] text-[13px] font-light text-[#a8a39a] leading-relaxed mb-12">
            Vous recevrez un courrier lors des prochaines présentations
            privées — nouvelles séries, arrivées exceptionnelles, invitations
            à l'atelier.
          </p>

          {submitted ? (
            <div className="border-t border-[#e8e6e1] pt-10">
              <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light italic text-[#0d0d0d]">
                Votre inscription est enregistrée.
              </p>
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.12em] text-[#a8a39a] uppercase mt-3">
                Nous vous écrirons à l'occasion du prochain vernissage.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse électronique"
                required
                className="w-full bg-transparent border-b border-[#e8e6e1] pb-3 font-[family-name:var(--font-manrope)] text-[13px] font-light text-[#0d0d0d] placeholder:text-[#a8a39a] focus:outline-none focus:border-[#b08d57] transition-colors duration-200"
              />
              <button
                type="submit"
                className="font-[family-name:var(--font-manrope)] text-[11px] font-light tracking-[0.2em] text-[#0d0d0d] uppercase border border-[#0d0d0d] px-10 py-3 hover:bg-[#0d0d0d] hover:text-[#ffffff] transition-colors duration-300"
              >
                S'inscrire aux vernissages
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

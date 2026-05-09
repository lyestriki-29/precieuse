"use client";

import { type FormEvent } from "react";

const playfair = "font-[family-name:var(--font-playfair)]";

export function V3Newsletter() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO Phase 4 : brancher Brevo + webhook CRM
  };

  return (
    <section className="mx-auto mb-24 max-w-3xl px-6 text-center sm:mb-40 sm:px-10">
      <h3 className={`${playfair} mb-12 text-[40px] sm:text-[48px] italic`}>
        Les Lettres Rares
      </h3>
      <form className="relative group" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Recevoir nos lettres rares."
          className="w-full border-0 border-b border-[#1d1b20]/30 bg-transparent py-4 text-center text-[18px] sm:text-[20px] leading-[1.8] tracking-[0.01em] font-light text-[#1d1b20] placeholder:text-[#cbc4d2] focus:border-[#4f378a] focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          aria-label="S'abonner"
          className="absolute bottom-4 right-0 text-[#4f378a] transition-opacity hover:opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </form>
    </section>
  );
}

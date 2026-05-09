const playfair = "font-[family-name:var(--font-playfair)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V3Testimonial() {
  return (
    <section className="mb-24 bg-[#f8f2fa] px-6 py-32 sm:mb-40 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center">
        <span className={`${inter} mb-12 text-[12px] font-medium uppercase tracking-[0.15em] text-[#4f378a]`}>
          01 / 09
        </span>
        <p className={`${playfair} max-w-4xl text-center text-[32px] sm:text-[44px] lg:text-[48px] leading-snug italic text-[#1d1b20]`}>
          « Ma bague Joséphine ne me quitte plus. Elle possède cette élégance
          rare de se faire oublier tout en étant remarquée. Une pièce
          d&apos;âme. »
        </p>
        <div className="mt-16 flex gap-4">
          <button
            aria-label="Précédent"
            className="flex h-12 w-12 items-center justify-center border border-[#cbc4d2] transition-colors hover:bg-[#f2ecf4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            aria-label="Suivant"
            className="flex h-12 w-12 items-center justify-center border border-[#cbc4d2] transition-colors hover:bg-[#f2ecf4]"
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
        </div>
      </div>
    </section>
  );
}

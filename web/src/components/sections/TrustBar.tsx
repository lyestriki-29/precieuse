const ITEMS = [
  "RJC CERTIFIED COUNCIL",
  "GIA GRADED DIAMONDS",
  "HRD ANTWERP",
  "MADE IN PORTUGAL",
];

export function TrustBar() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-5">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-on-surface-variant/70 sm:justify-between sm:px-10 lg:px-16">
        {ITEMS.map((label, i) => (
          <div key={label} className="flex items-center gap-x-6">
            <span className="font-technical-label tracking-[0.2em] uppercase">
              {label}
            </span>
            {i < ITEMS.length - 1 ? (
              <span className="hidden h-1 w-1 rounded-full bg-outline-variant sm:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

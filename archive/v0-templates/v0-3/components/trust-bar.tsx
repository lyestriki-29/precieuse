export function TrustBar() {
  const trustMarks = [
    { name: 'RJC', label: 'Responsible Jewellery Council' },
    { name: 'GIA', label: 'Gemological Institute of America' },
    { name: 'HRD', label: 'Hoge Raad voor Diamant' },
    { name: 'Made in Portugal', label: 'Fabriqué au Portugal' },
  ]

  return (
    <section 
      className="bg-bone border-y border-rose/30 py-6 md:py-8"
      aria-label="Certifications et labels de confiance"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8">
          {trustMarks.map((mark) => (
            <div 
              key={mark.name}
              className="flex items-center gap-3 group"
            >
              {/* Mark Icon Placeholder */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-concrete/10 flex items-center justify-center">
                <span className="font-mono text-xs text-concrete font-medium">
                  {mark.name.substring(0, 3).toUpperCase()}
                </span>
              </div>
              <div className="hidden md:block">
                <p className="font-mono text-xs tracking-wider text-concrete uppercase">
                  {mark.name}
                </p>
                <p className="font-sans text-xs text-concrete/60">
                  {mark.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

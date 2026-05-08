export default function Home() {
  return (
    <main className="bg-cream flex flex-1 flex-col items-center justify-center px-8 py-32 text-center">
      <p className="text-gold-whisper mb-6 text-xs tracking-[0.3em] uppercase">
        Joaillerie artisanale · Portugal
      </p>
      <h1 className="font-heading mb-8 max-w-2xl text-5xl leading-tight font-normal sm:text-6xl">
        Précieuse
      </h1>
      <p className="text-foreground/70 max-w-md text-lg leading-relaxed font-light">
        Des bijoux que je dessine et fabrique moi-même, à porter comme une
        seconde peau.
      </p>
      <p className="text-foreground/40 mt-16 text-xs tracking-widest uppercase">
        Site en construction · Lancement mi-juillet 2026
      </p>
    </main>
  );
}

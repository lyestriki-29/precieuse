interface Article {
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

const articles: Article[] = [
  {
    category: 'SAVOIR-FAIRE',
    title: 'La cire perdue : une technique millénaire',
    excerpt: 'Du dessin au polissage, plongée dans les six étapes de la fonte à la cire perdue, méthode ancestrale de la haute joaillerie.',
    date: '15 Mar 2025',
    readTime: '8 min'
  },
  {
    category: 'MATÉRIAUX',
    title: 'Or 19 carats : le secret portugais',
    excerpt: 'Pourquoi le Portugal préfère-t-il l\'or 19 carats ? Histoire, chimie et tradition d\'un alliage unique au monde.',
    date: '02 Mar 2025',
    readTime: '6 min'
  },
]

export function Journal() {
  return (
    <section 
      className="py-16 md:py-24 bg-bone"
      aria-labelledby="journal-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-concrete uppercase mb-3">
              JOURNAL
            </p>
            <h2 id="journal-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
              Notes d&apos;atelier
            </h2>
          </div>
          <a 
            href="#" 
            className="font-mono text-xs tracking-wider text-concrete hover:text-gold transition-colors mt-4 md:mt-0 uppercase"
          >
            Voir tous les articles →
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {articles.map((article) => (
            <article 
              key={article.title}
              className="group cursor-pointer"
            >
              {/* Article Image Placeholder */}
              <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-concrete/10">
                <div 
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse at 30% 70%, rgba(184, 146, 78, 0.1) 0%, transparent 50%),
                      linear-gradient(135deg, #E8E3DC 0%, #D4CFC8 100%)
                    `
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-charcoal bg-bone/90 px-3 py-1">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div>
                {/* Meta */}
                <div className="flex items-center gap-4 font-mono text-xs text-concrete/60 mb-3">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-sm text-concrete leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

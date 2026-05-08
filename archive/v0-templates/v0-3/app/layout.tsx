import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Précieuse — Joaillerie Artisanale Portugal',
  description: 'Joaillerie 100% fait main au Portugal. Or 19 carats, diamants certifiés GIA/HRD. Atelier RJC certifié à Lisbonne.',
  keywords: ['joaillerie', 'bijoux', 'or 19 carats', 'Portugal', 'fait main', 'artisanal', 'diamants GIA', 'RJC'],
  authors: [{ name: 'Eméline' }],
  openGraph: {
    title: 'Précieuse — Le geste juste. La matière vraie.',
    description: 'Joaillerie 100% fait main au Portugal. Or 19 carats, diamants certifiés GIA/HRD.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-bone">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

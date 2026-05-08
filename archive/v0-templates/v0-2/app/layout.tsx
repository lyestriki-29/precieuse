import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Playfair_Display, Great_Vibes, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Précieuse | Joaillerie Artisanale Française',
  description: 'Chaque bijou raconte une histoire. La vôtre. Joaillerie artisanale, façonnée à la main au Portugal.',
  generator: 'v0.app',
  keywords: ['joaillerie', 'bijoux artisanaux', 'Portugal', 'bagues', 'fait main', 'luxe'],
  openGraph: {
    title: 'Précieuse | Joaillerie Artisanale Française',
    description: 'Chaque bijou raconte une histoire. La vôtre.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F8F1EA',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-[#F8F1EA]">
      <body className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Collection } from '@/components/collection'
import { Process } from '@/components/process'
import { Materials } from '@/components/materials'
import { SurMesure } from '@/components/sur-mesure'
import { Creator } from '@/components/creator'
import { Testimonials } from '@/components/testimonials'
import { Journal } from '@/components/journal'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Collection />
      <Process />
      <Materials />
      <SurMesure />
      <Creator />
      <Testimonials />
      <Journal />
      <Footer />
    </main>
  )
}

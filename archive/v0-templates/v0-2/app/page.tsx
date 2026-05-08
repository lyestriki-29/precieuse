import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ManifestoSection } from '@/components/manifesto-section'
import { CollectionSection } from '@/components/collection-section'
import { SurMesureSection } from '@/components/sur-mesure-section'
import { AtelierSection } from '@/components/atelier-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { JournalSection } from '@/components/journal-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-[#F8F1EA]">
      <Header />
      <HeroSection />
      <ManifestoSection />
      <CollectionSection />
      <SurMesureSection />
      <AtelierSection />
      <TestimonialsSection />
      <JournalSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}

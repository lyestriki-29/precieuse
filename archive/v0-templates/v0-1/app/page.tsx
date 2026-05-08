import { Header } from "@/components/precieuse/header"
import { Hero } from "@/components/precieuse/hero"
import { CollectionTeaser } from "@/components/precieuse/collection-teaser"
import { SurMesure } from "@/components/precieuse/sur-mesure"
import { Creatrice } from "@/components/precieuse/creatrice"
import { Atelier } from "@/components/precieuse/atelier"
import { Temoignages } from "@/components/precieuse/temoignages"
import { Newsletter } from "@/components/precieuse/newsletter"
import { Footer } from "@/components/precieuse/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CollectionTeaser />
      <SurMesure />
      <Creatrice />
      <Atelier />
      <Temoignages />
      <Newsletter />
      <Footer />
    </main>
  )
}

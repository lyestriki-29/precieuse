import { Container, Heading, Reveal, Section } from "@/components/luxe";

export function HomeStory() {
  return (
    <Section spacing="default" tone="white">
      <Container size="narrow">
        <Reveal>
          <Heading as="h2" size="lg" overline="Pourquoi Précieuse">
            Précieuse, c&apos;est moi.
          </Heading>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="text-foreground/75 mt-10 space-y-6 text-lg leading-relaxed font-light">
            <p>
              Des pièces que je dessine et fabrique moi-même, en petites séries
              ou pièces uniques.
            </p>
            <p>
              Un savoir-faire joaillier, une création qui vous ressemble. Je
              fabrique encore à la main, en 2026 — pas par nostalgie, mais
              parce que c&apos;est la seule manière de faire un bijou qu&apos;on
              porte trente ans sans s&apos;en lasser.
            </p>
            <p>
              Chaque bague passe par mes mains, du dessin initial au polissage
              final. C&apos;est exigeant, c&apos;est lent. C&apos;est ce qui
              rend chaque pièce unique.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

import { Container, Heading, Reveal, Section } from "@/components/luxe";

export default function Home() {
  return (
    <Section spacing="loose" tone="cream">
      <Container size="narrow" className="text-center">
        <Reveal>
          <Heading
            as="h1"
            size="display"
            overline="Joaillerie artisanale · Portugal"
            className="mx-auto"
          >
            Précieuse
          </Heading>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-foreground/70 mx-auto mt-8 max-w-md text-lg leading-relaxed font-light">
            Des bijoux que je dessine et fabrique moi-même, à porter comme une
            seconde peau.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-foreground/40 mt-16 text-xs tracking-widest uppercase">
            Site en construction · Lancement mi-juillet 2026
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

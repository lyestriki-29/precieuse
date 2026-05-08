import {
  Container,
  Heading,
  LuxeImage,
  Reveal,
  Section,
} from "@/components/luxe";

export const metadata = {
  title: "Dev — Composants",
  robots: { index: false, follow: false },
};

const sampleSrc =
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1200&q=90";

export default function DevComponentsPage() {
  return (
    <>
      <Section spacing="tight" tone="cream">
        <Container>
          <Heading as="h1" size="display" overline="Dev — Design system">
            Composants luxe
          </Heading>
          <p className="text-foreground/60 mt-6 max-w-xl font-light">
            Page de QA visuel. Non listée. Sert à valider tokens, typographie,
            animations et images.
          </p>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container>
          <Heading as="h2" size="md" overline="Typographie">
            Échelle des Heading
          </Heading>
          <div className="mt-10 space-y-8">
            <Heading as="h3" size="display">
              Display — L&apos;Art de la Lumière
            </Heading>
            <Heading as="h3" size="lg">
              Large — Une joaillerie qui se porte
            </Heading>
            <Heading as="h3" size="md">
              Medium — Pièces dessinées à la main
            </Heading>
            <Heading as="h3" size="sm">
              Small — Or 19kt et diamants GVS
            </Heading>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="cream">
        <Container size="narrow">
          <Heading as="h2" size="md" overline="Animation">
            Reveal — fade + slide-up
          </Heading>
          <div className="mt-10 space-y-6">
            {[0, 0.1, 0.2, 0.3].map((d, i) => (
              <Reveal key={d} delay={d}>
                <div className="rounded-md border border-black/10 bg-white p-6 text-sm font-light">
                  Bloc révélé avec délai {d}s — élément #{i + 1}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container>
          <Heading as="h2" size="md" overline="Images">
            LuxeImage — couleur vs N&amp;B
          </Heading>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <LuxeImage
              src={sampleSrc}
              alt="Bijou exemple en couleur"
              width={800}
              height={600}
              aspect="landscape"
            />
            <LuxeImage
              src={sampleSrc}
              alt="Bijou exemple en noir et blanc"
              width={800}
              height={600}
              aspect="landscape"
              grayscale
            />
          </div>
        </Container>
      </Section>

      <Section spacing="loose" tone="cream">
        <Container size="narrow">
          <Heading as="h2" size="lg" overline="Couleurs">
            Tokens de marque
          </Heading>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <Swatch color="bg-cream" label="Cream" />
            <Swatch color="bg-raspberry" label="Raspberry" />
            <Swatch color="bg-gold-whisper" label="Gold whisper" />
          </div>
        </Container>
      </Section>
    </>
  );
}

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`${color} aspect-square rounded-md border border-black/10`}
      />
      <span className="text-xs tracking-widest uppercase">{label}</span>
    </div>
  );
}

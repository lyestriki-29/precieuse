import Link from "next/link";
import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ctaPrimary = cn(buttonVariants({ size: "lg" }), "rounded-full px-6 h-auto py-3");
const ctaGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);

export function HomeHero() {
  return (
    <Section spacing="loose" tone="cream">
      <Container size="narrow" className="text-center">
        <Reveal>
          <Heading
            as="h1"
            size="display"
            overline="Joaillière artisanale · Portugal"
            className="mx-auto"
          >
            Des bijoux intemporels, à porter comme une seconde peau.
          </Heading>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-foreground/70 mx-auto mt-8 max-w-md text-lg leading-relaxed font-light">
            Précieuse, c&apos;est moi. Des pièces que je dessine et fabrique
            moi-même, en petites séries ou pièces uniques.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href="/fr/collection" className={ctaPrimary}>
              Découvrir la collection
            </Link>
            <Link href="/fr/sur-mesure" className={ctaGhost}>
              Créer un bijou sur-mesure
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

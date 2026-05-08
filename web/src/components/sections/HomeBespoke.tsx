import Link from "next/link";
import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeBespoke() {
  return (
    <Section spacing="default" tone="white">
      <Container size="narrow" className="text-center">
        <Reveal>
          <Heading
            as="h2"
            size="lg"
            overline="Création sur-mesure"
            className="mx-auto"
          >
            Un projet intime.
          </Heading>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-foreground/70 mx-auto mt-8 max-w-xl text-lg leading-relaxed font-light">
            Pour marquer une histoire, un moment. Une création pensée ensemble,
            de la première esquisse au bijou final.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/fr/sur-mesure"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 h-auto py-3",
              )}
            >
              Imaginer mon bijou
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

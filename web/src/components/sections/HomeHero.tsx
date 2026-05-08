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
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 text-center lg:text-left">
            <Reveal>
              <Heading
                as="h1"
                size="display"
                overline="Joaillière artisanale · Portugal"
                className="mx-auto lg:mx-0"
              >
                Des bijoux intemporels, à porter comme une seconde peau.
              </Heading>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-foreground/70 mx-auto mt-8 max-w-md text-lg leading-relaxed font-light lg:mx-0">
                Précieuse, c&apos;est moi. Des pièces que je dessine et fabrique
                moi-même, en petites séries ou pièces uniques.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <Link href="/fr/collection" className={ctaPrimary}>
                  Découvrir la collection
                </Link>
                <Link href="/fr/sur-mesure" className={ctaGhost}>
                  Créer un bijou sur-mesure
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md">
              <video
                src="/images/video/hero-dessin-bijoux.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="luxe-grayscale absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

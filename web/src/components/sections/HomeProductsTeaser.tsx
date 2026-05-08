import Link from "next/link";
import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRODUCTS } from "@/lib/content/products";

export function HomeProductsTeaser() {
  return (
    <Section spacing="default" tone="cream">
      <Container>
        <Reveal>
          <Heading as="h2" size="lg" overline="La collection">
            Cinq modèles intemporels
          </Heading>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.slug} as="li" delay={i * 0.08}>
              <Link
                href={`/fr/collection/${product.slug}`}
                className="group block"
              >
                <div className="aspect-[3/4] w-full overflow-hidden rounded-md border border-black/5 bg-white">
                  <div className="bg-gold-whisper/20 flex h-full w-full items-center justify-center">
                    <span className="font-heading text-foreground/30 text-2xl">
                      {product.name}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading group-hover:text-raspberry mt-5 text-2xl transition-colors">
                  {product.name}
                </h3>
                <p className="text-foreground/60 mt-2 text-sm leading-relaxed font-light">
                  {product.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <Link
            href="/fr/collection"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6 h-auto py-3",
            )}
          >
            Voir la collection complète
          </Link>
        </div>
      </Container>
    </Section>
  );
}

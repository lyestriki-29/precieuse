import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRODUCTS, getProduct } from "@/lib/content/products";

const ctaPrimary = cn(
  buttonVariants({ size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);
const ctaGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/collection/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Précieuse`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/[locale]/collection/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Section spacing="default" tone="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="aspect-[3/4] w-full overflow-hidden rounded-md border border-black/5 bg-white">
                <div className="bg-gold-whisper/20 flex h-full w-full items-center justify-center">
                  <span className="font-heading text-foreground/30 text-3xl">
                    {product.name}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-center">
                <span className="text-gold-whisper text-xs tracking-[0.3em] uppercase">
                  {product.tagline}
                </span>
                <Heading as="h1" size="lg" className="mt-4">
                  {product.name}
                </Heading>
                <p className="text-foreground/40 mt-3 text-sm tracking-wider uppercase">
                  {product.price}
                </p>
                <p className="text-foreground/75 mt-8 text-base leading-relaxed font-light">
                  {product.description}
                </p>

                <div className="mt-10 space-y-4 border-t border-black/10 pt-8">
                  <div>
                    <p className="text-foreground/40 text-xs tracking-wider uppercase">
                      Matières
                    </p>
                    <p className="mt-2 text-sm leading-relaxed font-light">
                      {product.materials}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/fr/contact?modele=${product.slug}`}
                    className={ctaPrimary}
                  >
                    Demander un devis
                  </Link>
                  <Link href="/fr/sur-mesure" className={ctaGhost}>
                    Personnaliser
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container size="narrow">
          <Reveal>
            <Heading as="h2" size="md" overline="L'histoire">
              D&apos;où vient {product.name}
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-foreground/75 mt-8 text-lg leading-relaxed font-light">
              {product.story}
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

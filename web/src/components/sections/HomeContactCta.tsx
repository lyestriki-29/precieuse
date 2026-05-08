import Link from "next/link";
import { Container, Heading, LuxeImage, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/content/site";

const cta = cn(buttonVariants({ size: "lg" }), "rounded-full px-6 h-auto py-3");
const ctaGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);

export function HomeContactCta() {
  return (
    <Section spacing="loose" tone="white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <LuxeImage
              src="/images/atelier/bague-en-fabrication.jpg"
              alt="Bague en cours de fabrication sur établi"
              width={1200}
              height={1600}
              aspect="portrait"
              grayscale
              wrapperClassName="rounded-md"
            />
          </Reveal>

          <div className="text-center lg:text-left">
            <Reveal>
              <Heading
                as="h2"
                size="lg"
                overline="On parle de votre projet ?"
                className="mx-auto lg:mx-0"
              >
                Prendre rendez-vous.
              </Heading>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-foreground/70 mx-auto mt-8 max-w-md text-lg leading-relaxed font-light lg:mx-0">
                Un moment privilégié, sans engagement, pour discuter de votre
                idée.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
                <Link href="/fr/contact" className={cta}>
                  Nous contacter
                </Link>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaGhost}
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

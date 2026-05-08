import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { TESTIMONIALS } from "@/lib/content/testimonials";

export function HomeTestimonials() {
  return (
    <Section spacing="default" tone="cream">
      <Container>
        <Reveal>
          <Heading as="h2" size="lg" overline="Elles en parlent">
            Témoignages
          </Heading>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} as="li" delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-md border border-black/5 bg-white p-8">
                <blockquote className="text-foreground/80 flex-1 text-base leading-relaxed font-light italic">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-heading block text-base">
                    {t.author}
                  </span>
                  {t.context ? (
                    <span className="text-foreground/50 mt-1 block text-xs tracking-wider uppercase">
                      {t.context}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

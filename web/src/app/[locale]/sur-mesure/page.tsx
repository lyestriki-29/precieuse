import Link from "next/link";
import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BESPOKE_PROCESS } from "@/lib/content/process";
import { SITE } from "@/lib/content/site";

const ctaPrimary = cn(
  buttonVariants({ size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);
const ctaGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);

export const metadata = {
  title: "Sur-mesure — Précieuse",
  description:
    "Créer un bijou unique pensé ensemble, de la première esquisse au bijou final.",
};

export default function BespokePage() {
  return (
    <>
      <Section spacing="default" tone="cream">
        <Container size="narrow">
          <Reveal>
            <Heading as="h1" size="display" overline="Création sur-mesure">
              Un projet intime.
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-foreground/70 mt-8 text-lg leading-relaxed font-light">
              Pour marquer une histoire, un moment. Une création pensée
              ensemble, de la première esquisse au bijou final.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container>
          <Reveal>
            <Heading as="h2" size="md" overline="Le process">
              Cinq étapes, sans pression.
            </Heading>
          </Reveal>
          <ol className="mt-14 space-y-10">
            {BESPOKE_PROCESS.map((step, i) => (
              <Reveal key={step.number} as="li" delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 lg:grid-cols-[80px_1fr]">
                  <span className="font-heading text-gold-whisper text-3xl sm:text-4xl">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl">{step.title}</h3>
                    <p className="text-foreground/70 mt-3 max-w-xl text-base leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section spacing="default" tone="cream">
        <Container size="narrow">
          <Reveal>
            <Heading as="h2" size="md" overline="Cas réel">
              La bague de Sandrine
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-foreground/75 mt-10 space-y-6 text-lg leading-relaxed font-light">
              <p>
                « Ce modèle ou rien ! » — voilà ce qu&apos;elle m&apos;a dit en
                rentrant dans l&apos;atelier. Sandrine savait ce qu&apos;elle
                voulait, depuis longtemps. Une monture épurée, une pierre
                centrale généreuse, des diamants pavés pour scintiller.
              </p>
              <p>
                J&apos;ai recyclé son or et ses diamants hérités pour lui
                fabriquer la bague de ses rêves. Le résultat : une serpentine
                or blanc avec pavage diamants, intemporelle et personnelle.
              </p>
              <blockquote className="border-raspberry/30 border-l-2 pl-6 text-base italic">
                « Très contente de votre création. Très professionnelle,
                agréable, sympathique. »
              </blockquote>
              <p>
                C&apos;est cela, pour moi, le sur-mesure : transformer une
                intention vague en bijou qui vous ressemble, qui porte votre
                histoire.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="loose" tone="white">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Heading as="h2" size="lg" className="mx-auto">
              Vous rêvez d&apos;un bijou sur-mesure ?
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-foreground/70 mx-auto mt-8 max-w-md text-lg leading-relaxed font-light">
              Je vous offre un moment privilégié pour en parler.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/fr/contact?type=sur-mesure" className={ctaPrimary}>
                Prendre rendez-vous
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
        </Container>
      </Section>
    </>
  );
}

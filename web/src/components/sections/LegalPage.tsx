import type { ReactNode } from "react";
import { Container, Heading, Section } from "@/components/luxe";

type Props = {
  title: string;
  overline: string;
  children: ReactNode;
};

export function LegalPage({ title, overline, children }: Props) {
  return (
    <Section spacing="default" tone="cream">
      <Container size="narrow">
        <Heading as="h1" size="lg" overline={overline}>
          {title}
        </Heading>
        <div className="text-foreground/75 prose prose-stone mt-12 max-w-none space-y-6 text-base leading-relaxed font-light">
          {children}
        </div>
        <p className="text-foreground/40 mt-12 text-xs tracking-wider uppercase">
          Document à finaliser avec un conseil juridique avant lancement.
        </p>
      </Container>
    </Section>
  );
}

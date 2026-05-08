import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Spacing = "default" | "tight" | "loose";
type Tone = "cream" | "white";

const spacingClasses: Record<Spacing, string> = {
  tight: "py-12 sm:py-16",
  default: "py-20 sm:py-28",
  loose: "py-32 sm:py-40",
};

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream",
  white: "bg-white",
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: Spacing;
  tone?: Tone;
};

export function Section({
  spacing = "default",
  tone = "cream",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], toneClasses[tone], className)}
      {...rest}
    >
      {children}
    </section>
  );
}

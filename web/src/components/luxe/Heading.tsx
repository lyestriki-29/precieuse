import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "display" | "lg" | "md" | "sm";

const sizeClasses: Record<HeadingSize, string> = {
  display: "text-5xl sm:text-6xl lg:text-7xl leading-[1.05]",
  lg: "text-4xl sm:text-5xl leading-[1.1]",
  md: "text-3xl sm:text-4xl leading-[1.15]",
  sm: "text-2xl sm:text-3xl leading-[1.2]",
};

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingTag;
  size?: HeadingSize;
  overline?: ReactNode;
};

export function Heading({
  as: Tag = "h2",
  size = "lg",
  overline,
  className,
  children,
  ...rest
}: HeadingProps) {
  return (
    <div className="flex flex-col">
      {overline ? (
        <span className="text-gold-whisper mb-4 text-xs tracking-[0.3em] uppercase">
          {overline}
        </span>
      ) : null}
      <Tag
        className={cn(
          "font-heading font-normal tracking-tight text-balance",
          sizeClasses[size],
          className,
        )}
        {...rest}
      >
        {children}
      </Tag>
    </div>
  );
}

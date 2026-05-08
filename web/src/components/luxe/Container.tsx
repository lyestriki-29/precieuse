import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "default" | "narrow" | "wide";

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

export function Container({
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

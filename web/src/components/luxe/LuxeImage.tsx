import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type Aspect = "portrait" | "landscape" | "square";

const aspectClasses: Record<Aspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

type LuxeImageProps = Omit<ImageProps, "quality"> & {
  grayscale?: boolean;
  aspect?: Aspect;
  wrapperClassName?: string;
};

export function LuxeImage({
  grayscale = false,
  aspect,
  wrapperClassName,
  className,
  alt,
  ...rest
}: LuxeImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspect ? aspectClasses[aspect] : undefined,
        wrapperClassName,
      )}
    >
      <Image
        alt={alt}
        quality={90}
        className={cn(
          "object-cover",
          grayscale ? "luxe-grayscale" : undefined,
          className,
        )}
        {...rest}
      />
    </div>
  );
}

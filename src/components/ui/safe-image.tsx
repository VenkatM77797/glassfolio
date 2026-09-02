import { useState } from "react";

import { cn } from "@/lib/utils";

interface SafeImageProps {
  src?: string | undefined;
  alt: string;
  className?: string | undefined;
  /** Text shown in the fallback tile (usually a title initial) */
  fallbackLabel?: string | undefined;
  loading?: "lazy" | "eager";
}

/**
 * Image that degrades to a tasteful placeholder tile instead of a broken image
 * when `src` is missing or fails to load.
 */
export function SafeImage({
  src,
  alt,
  className,
  fallbackLabel,
  loading = "lazy",
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-secondary text-2xl font-semibold text-muted-foreground",
          className,
        )}
      >
        {fallbackLabel ?? alt.slice(0, 1).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={cn("size-full object-cover", className)}
    />
  );
}

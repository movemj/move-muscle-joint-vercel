import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroMediaProps {
  imageSrc: string;
  videoSrc?: string;
  alt?: string;
  overlay?: boolean;
  overlayOpacity?: string;
  children: React.ReactNode;
  className?: string;
  minHeight?: string;
  mobileImagePosition?: string;
}

export function HeroMedia({
  imageSrc,
  videoSrc,
  alt = "",
  overlay = true,
  overlayOpacity = "bg-charcoal/50",
  children,
  className = "",
  minHeight = "min-h-svh sm:min-h-screen",
  mobileImagePosition = "object-center",
}: HeroMediaProps) {
  return (
    <section
      className={cn(
        "relative w-full max-w-full flex items-center overflow-hidden",
        minHeight,
        className
      )}
    >
      {/* Media Container */}
      <div className="absolute inset-0 w-full max-w-full">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={imageSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className={cn("object-cover", mobileImagePosition, "sm:object-center")}
            priority
            sizes="100vw"
          />
        )}
      </div>

      {/* Overlay */}
      {overlay && <div className={cn("absolute inset-0", overlayOpacity)} />}

      {/* Content */}
      <div className="relative z-10 w-full max-w-full overflow-x-hidden">{children}</div>
    </section>
  );
}

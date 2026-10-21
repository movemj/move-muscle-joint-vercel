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
  imageClassName?: string;
}

export function HeroMedia({
  imageSrc,
  videoSrc,
  alt = "",
  overlay = true,
  overlayOpacity = "bg-charcoal/50",
  children,
  className = "",
  minHeight = "min-h-[100dvh] sm:min-h-screen",
  mobileImagePosition = "object-center",
  imageClassName = "",
}: HeroMediaProps) {
  return (
    <section
      className={cn(
        "relative flex w-full max-w-full flex-col overflow-hidden md:block",
        minHeight,
        className
      )}
    >
      {/* Media Container */}
      <div className="relative order-2 h-[125vw] max-h-[520px] min-h-[400px] w-full max-w-full md:absolute md:inset-0 md:h-auto md:max-h-none md:min-h-0">
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
            className={cn("object-cover", mobileImagePosition, "sm:object-center", imageClassName)}
            priority
            sizes="100vw"
          />
        )}
      </div>

      {/* Overlay */}
      {overlay && <div className={cn("pointer-events-none absolute inset-x-0 top-0 z-10 h-32 md:inset-0 md:h-auto", overlayOpacity)} />}

      {/* Content */}
      <div className="relative z-20 order-1 w-full max-w-full overflow-x-hidden bg-charcoal md:bg-transparent">{children}</div>
    </section>
  );
}

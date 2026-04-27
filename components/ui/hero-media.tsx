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
}

export function HeroMedia({
  imageSrc,
  videoSrc,
  alt = "",
  overlay = true,
  overlayOpacity = "bg-charcoal/50",
  children,
  className = "",
  minHeight = "min-h-[90vh]",
}: HeroMediaProps) {
  return (
    <section
      className={cn(
        "relative w-full flex items-center overflow-hidden",
        minHeight,
        className
      )}
    >
      {/* Media Container */}
      <div className="absolute inset-0">
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
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
      </div>

      {/* Overlay */}
      {overlay && <div className={cn("absolute inset-0", overlayOpacity)} />}

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

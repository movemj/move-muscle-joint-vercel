import Image from "next/image";
import { CTAButton } from "@/components/ui/cta-button";
import { IMAGES } from "@/lib/site-data";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden w-full max-w-full">
      <div className="absolute inset-0 w-full max-w-full overflow-hidden">
        <Image
          src={IMAGES.clinic}
          alt="Move Muscle & Joint clinic interior"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center w-full max-w-full overflow-hidden">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight break-words">
          Ready to move without hesitation?
        </h2>
        <p className="mt-5 text-lg text-white/70 leading-relaxed break-words">
          Take the first step toward lasting movement confidence. Book your visit
          at Move Muscle & Joint in Overland Park.
        </p>
        <div className="mt-8 flex justify-center w-full overflow-hidden">
          <CTAButton href="/book" label="Book Your Visit" variant="white" size="lg" showArrow />
        </div>
      </div>
    </section>
  );
}

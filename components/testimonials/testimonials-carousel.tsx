"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { GoogleReviewsLink } from "./google-reviews-link";
import { TestimonialDisclaimer } from "./testimonial-disclaimer";
import { getTestimonialsByTag } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

const testimonials = getTestimonialsByTag("homepage");
const INTERVAL_MS = 7000;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const isPaused = isHovered || isFocused || reducedMotion;

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  if (!testimonials.length) return null;

  const current = testimonials[index];

  const goTo = (i: number) =>
    setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  return (
    <SectionWrapper bg="bg-secondary">
      <SectionHeading tag="Patient Stories" title="What patients are saying." align="center" />
      <div
        className="max-w-3xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsFocused(false);
          }
        }}
      >
        <div
          className="relative min-h-[190px] sm:min-h-[160px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
              className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
            >
              <span className="block h-px w-10 bg-accent" aria-hidden="true" />
              <p className="text-lg leading-7 font-medium text-charcoal text-balance sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <cite className="block text-sm leading-5 font-medium not-italic text-steel">
                {current.name}
              </cite>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full text-steel hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
                  i === index ? "bg-navy" : "bg-border hover:bg-steel/50"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="p-2 rounded-full text-steel hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 transition-colors"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 text-center">
          <GoogleReviewsLink />
          <TestimonialDisclaimer />
        </div>
      </div>
    </SectionWrapper>
  );
}

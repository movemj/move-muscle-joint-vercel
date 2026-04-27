"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/cta-button";
import { SERVICES, IMAGES } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceImages = [IMAGES.chiropractic, IMAGES.myofascial, IMAGES.shockwave, IMAGES.rehab];

export function ServicesPreview() {
  return (
    <SectionWrapper bg="bg-secondary">
      <SectionHeading
        tag="Services"
        title="Treatments that work together."
        subtitle="Each service is one part of a coordinated care model designed to help you move better and stay that way."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <Image
                src={serviceImages[i]}
                alt={s.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-charcoal group-hover:text-navy transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-steel mt-2 leading-relaxed">{s.shortDesc}</p>
              <div className="mt-5 flex items-center justify-between">
                <Link
                  href={s.slug}
                  className="text-sm font-semibold text-navy flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <CTAButton href="/book" label="Book" size="sm" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

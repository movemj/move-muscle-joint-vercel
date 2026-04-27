"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONDITIONS } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ConditionsPreview() {
  return (
    <SectionWrapper bg="bg-white">
      <SectionHeading
        tag="Conditions"
        title="Common conditions we treat."
        subtitle="Every condition is treated through an integrated lens — addressing the root cause, not just the symptoms."
        align="center"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONDITIONS.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={c.slug}
              className="flex items-center justify-between p-5 rounded-xl border border-border hover:border-softblue/40 hover:shadow-md transition-all duration-200 group"
            >
              <span className="font-medium text-charcoal group-hover:text-navy transition-colors">
                {c.title}
              </span>
              <ArrowRight className="w-4 h-4 text-steel group-hover:text-navy group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/conditions"
          className="text-sm font-semibold text-navy hover:text-navy/70 transition-colors"
        >
          View All Conditions →
        </Link>
      </div>
    </SectionWrapper>
  );
}

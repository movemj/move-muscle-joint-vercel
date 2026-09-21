"use client";

import { motion } from "framer-motion";

type FirstVisitStepsProps = {
  steps: string[][];
};

export function FirstVisitSteps({ steps }: FirstVisitStepsProps) {
  return (
    <div className="relative flex flex-col gap-8 pl-8 before:absolute before:bottom-4 before:left-3 before:top-4 before:w-px before:bg-accent/70">
      {steps.map(([number, title, description], index) => (
        <motion.article
          key={number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
          className="relative grid gap-5 pl-16 sm:grid-cols-[100px_1fr] sm:pl-0"
        >
          <span className="text-5xl font-bold tracking-tight text-navy/15 sm:text-6xl">{number}</span>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">{title}</h2>
            <p className="mt-3 max-w-lg leading-relaxed text-steel">{description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}


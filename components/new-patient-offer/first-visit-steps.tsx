"use client";

import { motion } from "framer-motion";

type FirstVisitStepsProps = {
  steps: string[][];
};

export function FirstVisitSteps({ steps }: FirstVisitStepsProps) {
  return (
    <div className="relative flex flex-col gap-5 pl-14 before:absolute before:bottom-8 before:left-[1.05rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-accent before:via-accent/50 before:to-border sm:pl-16">
      {steps.map(([number, title, description], index) => (
        <motion.article
          key={number}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="group relative rounded-2xl border border-border/70 bg-white p-5 shadow-[0_12px_35px_-24px_rgba(15,35,60,0.45)] transition-shadow duration-300 hover:shadow-[0_18px_42px_-24px_rgba(15,35,60,0.55)] sm:p-6"
        >
          <span className="absolute -left-[3.1rem] top-6 flex size-9 items-center justify-center rounded-full border-4 border-light-gray bg-accent text-xs font-bold text-navy shadow-sm sm:-left-[3.65rem]" aria-hidden="true">{number}</span>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-accent">{title}</h2>
            <p className="mt-3 max-w-lg leading-relaxed text-steel">{description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}


"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const statements = [
  "Myth shaped like infrastructure.",
  "Velocity with restraint.",
  "Mass translated into grace.",
  "A title too large for a single era.",
];

export function IntroStrip() {
  return (
    <SectionShell className="pt-10 md:pt-16" innerClassName="space-y-5">
      <Reveal>
        <div className="grid gap-3 rounded-[8px] border border-white/8 bg-white/[0.025] p-4 backdrop-blur-md md:grid-cols-4 md:p-5">
          {statements.map((statement, index) => (
            <motion.div
              key={statement}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[8px] border border-white/6 bg-white/[0.02] px-4 py-5"
            >
              <div className="text-[0.66rem] uppercase tracking-[0.28em] text-white/34">
                0{index + 1}
              </div>
              <p className="mt-3 text-sm leading-7 text-white/72">{statement}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

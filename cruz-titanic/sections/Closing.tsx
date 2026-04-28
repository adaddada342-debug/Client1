"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitWords } from "@/components/ui/SplitWords";

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 1.02]);

  return (
    <section ref={ref} id="closing" className="relative pt-32 pb-24">
      {/* Soft warm halo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[120%] bg-[radial-gradient(40%_60%_at_50%_50%,rgba(233,138,75,0.12),transparent_60%)]" />

      <motion.div
        style={{ y, opacity, scale }}
        className="container-x px-6 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6">Coda</p>
          <h2 className="font-display tracking-crush leading-[0.96] text-balance text-bone-50"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
            <SplitWords text="He weighs" />{" "}
            <span className="italic text-bone-200/85">
              <SplitWords text="four hundred." delay={0.15} />
            </span>
            <br />
            <SplitWords text="The world" delay={0.3} />{" "}
            <span className="italic text-bone-200/85">
              <SplitWords text="weighs less." delay={0.45} />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="mx-auto mt-10 max-w-xl text-balance text-bone-200/75 leading-relaxed"
          >
            Sixteen years in, the Titanic does not pose. He arrives.
            He stands. He stays. And the room — every room —
            reorganizes itself around him.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="mt-12 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-bone-300/70"
          >
            <span className="h-px w-10 bg-bone-300/30" />
            <span className="font-mono">End of Dossier 001</span>
            <span className="h-px w-10 bg-bone-300/30" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

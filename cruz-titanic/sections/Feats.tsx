"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FEATS } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { FeatVisual } from "@/components/visuals/FeatVisual";

export function Feats() {
  return (
    <section id="feats" className="relative pt-40 pb-32">
      <div className="container-x px-6 md:px-10 lg:px-16">
        {/* Section heading */}
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16 mb-24">
          <Reveal>
            <p className="eyebrow mb-5">Chapter I · Feats</p>
            <h2 className="display-lg text-bone-50 leading-[0.95]">
              <SplitWords text="Eight quiet" />
              <br />
              <span className="italic text-bone-200/85">
                <SplitWords text="impossibilities." delay={0.2} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg max-w-md md:mt-12">
              Catalogued from witness testimony and the resigned arithmetic of physicists.
              Each feat performed without applause — and without strain.
            </p>
            <div className="mt-8 hairline" />
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat k="Feats" v="8" />
              <Stat k="Witnessed" v="∞" />
              <Stat k="Strain" v="0%" />
            </div>
          </Reveal>
        </div>

        {/* Feats — alternating large panels (Apple feature panel rhythm) */}
        <div className="space-y-24">
          {FEATS.map((f, i) => (
            <FeatPanel key={f.index} feat={f} flip={i % 2 === 1} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
        {k}
      </span>
      <span className="num text-2xl text-bone-50">{v}</span>
    </div>
  );
}

function FeatPanel({
  feat,
  flip,
  index,
}: {
  feat: (typeof FEATS)[number];
  flip: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax — visual lifts as the panel scrolls into view
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.02]);

  return (
    <div ref={ref} className="grid items-center gap-8 md:gap-14 md:grid-cols-[1.15fr_1fr]">
      {/* Visual */}
      <motion.div
        style={{ y, scale }}
        className={`relative ${flip ? "md:order-2" : ""}`}
      >
        <GlassCard className="p-2 md:p-3">
          <FeatVisual variant={feat.visual} />
        </GlassCard>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`flex flex-col ${flip ? "md:order-1" : ""}`}
      >
        <div className="flex items-center gap-3 text-bone-300/70">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
            Feat · {feat.index}
          </span>
          <span className="h-px w-10 bg-bone-300/30" />
          <span className="font-mono text-[10px] uppercase tracking-[0.32em]">
            {feat.meta}
          </span>
        </div>

        <h3 className="mt-5 font-display text-3xl md:text-[2.6rem] leading-[1.04] tracking-tightest text-balance text-bone-50">
          {feat.title}
        </h3>

        <p className="mt-5 max-w-xl text-bone-200/75 leading-relaxed">
          {feat.body}
        </p>

        <div className="mt-8 inline-flex items-baseline gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
            Scale
          </span>
          <span className="num text-xl text-ember-400">{feat.scale}</span>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitWords } from "@/components/ui/SplitWords";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <SceneSkeleton />,
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* Atmospheric background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-vignette" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(233,138,75,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink-950 to-transparent" />

      {/* 3D scene — center stage */}
      <motion.div
        style={{ y, filter: blur, opacity }}
        className="absolute inset-0 z-0 will-paint"
      >
        <HeroScene />
      </motion.div>

      {/* Foreground composition */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-between px-6 pt-32 pb-16 md:px-10 lg:px-16">
        {/* Top brief */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-bone-300/70"
        >
          <span className="font-mono">Dossier 001 / Classified</span>
          <span className="hidden md:inline font-mono">N 38°53′ · W 77°02′</span>
          <span className="font-mono">Yr 16 / Wt 400 lbs</span>
        </motion.div>

        {/* Title block */}
        <motion.div
          style={{ y: titleY }}
          className="mt-auto pb-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.4 }}
            className="eyebrow mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-bone-300/40" />
            <span>An unstoppable myth · in motion</span>
          </motion.div>

          <h1 className="display-xl text-balance text-bone-50">
            <span className="block">
              <SplitWords text="The 400lbs" />
            </span>
            <span className="block italic text-bone-200/85">
              <SplitWords text="Beef Titanic." delay={0.25} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.6 }}
            className="mt-8 max-w-xl text-bone-200/75 leading-relaxed"
          >
            Cruz. Sixteen years of weight, motion, and quiet legend.
            A larger-than-life human figure who arrived already finished —
            and has been getting heavier ever since.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.0 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#feats"
              className="group inline-flex items-center gap-3 rounded-lg bg-bone-50 px-5 py-3 text-[12px] uppercase tracking-[0.28em] text-ink-950 transition-all duration-500 hover:bg-bone-100"
            >
              Begin the dossier
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#cruz"
              className="group inline-flex items-center gap-3 rounded-lg border border-glass-line bg-white/[0.03] px-5 py-3 text-[12px] uppercase tracking-[0.28em] text-bone-100 transition-all duration-500 hover:bg-white/[0.06]"
            >
              <span className="size-1.5 rounded-full bg-ember-500 shadow-[0_0_12px_rgba(233,138,75,0.7)]" />
              Witness in 3D
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom strip — telemetry */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 2.2 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-glass-line pt-6 md:grid-cols-4"
        >
          {[
            { k: "Weight", v: "400 lbs" },
            { k: "Velocity", v: "0.94 c" },
            { k: "Realms brokered", v: "11" },
            { k: "Tides held", v: "∞" },
          ].map((t) => (
            <div key={t.k} className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
                {t.k}
              </span>
              <span className="num text-lg text-bone-50">{t.v}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-bone-300/60"
      >
        <span className="block animate-breathe">Scroll</span>
      </motion.div>
    </section>
  );
}

function SceneSkeleton() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="size-32 rounded-full bg-[radial-gradient(closest-side,rgba(233,138,75,0.18),transparent_70%)] animate-breathe" />
    </div>
  );
}

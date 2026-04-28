"use client";

import { Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { DisplayCopy } from "@/components/ui/display-copy";
import { Pill } from "@/components/ui/pill";
import { heroStats } from "@/lib/site-data";

const CruzMonolith = lazy(() =>
  import("@/components/canvas/cruz-monolith").then((mod) => ({
    default: mod.CruzMonolith,
  })),
);

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0.5]);

  return (
    <section className="relative min-h-screen overflow-clip">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(111,162,255,0.16),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,#050816_0%,#060812_40%,#03050d_100%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-x-[8%] top-24 h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_60%)] blur-3xl" />
        <div className="absolute -left-16 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(126,151,255,0.2),transparent_65%)] blur-3xl" />
      </motion.div>

      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24">
        <div className="relative z-10 flex flex-col justify-between">
          <div className="max-w-[760px] space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Pill>Myth registered beyond known scale</Pill>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <DisplayCopy as="h1" tone="hero">
                The 400lbs Beef Titanic
              </DisplayCopy>
              <DisplayCopy className="max-w-[32rem] text-white/66">
                A monumental study of force, gravity, and legend. Cruz does not
                enter a room. The room widens to receive him.
              </DisplayCopy>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[34rem] text-base leading-7 text-white/62 sm:text-lg"
            >
              Part myth, part architecture, part warning to physics itself. This
              cinematic dossier follows the impossible mass and impossible grace
              of Cruz through feats, timelines, relics, and a living monument in
              three dimensions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 pt-8 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-white/8 bg-white/[0.03] px-4 py-5 backdrop-blur-md"
              >
                <div className="text-[0.72rem] uppercase tracking-[0.22em] text-white/42">
                  {stat.label}
                </div>
                <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                  {stat.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-x-[14%] bottom-10 h-20 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 rounded-[8px] border border-white/8 bg-white/[0.02]" />
          <Suspense
            fallback={
              <div className="flex min-h-[420px] w-full items-center justify-center">
                <div className="h-28 w-28 rounded-full border border-white/10 bg-white/[0.03] blur-[1px]" />
              </div>
            }
          >
            <CruzMonolith />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}

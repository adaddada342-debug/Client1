"use client";

import { Suspense, useState } from "react";
import { motion } from "framer-motion";

import { CruzMonolith } from "@/components/canvas/cruz-monolith";
import { DisplayCopy } from "@/components/ui/display-copy";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlassCard } from "@/components/ui/glass-card";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { sceneMetrics } from "@/lib/site-data";

export function InteractiveSceneSection() {
  const [pulse, setPulse] = useState(0);

  return (
    <SectionShell
      id="ascension"
      className="overflow-hidden py-28 md:py-36"
      innerClassName="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end"
    >
      <Reveal className="space-y-6">
        <div className="space-y-4">
          <Eyebrow>Interactive Mass</Eyebrow>
          <div className="max-w-xl space-y-4">
            <DisplayCopy as="h2" tone="section">
              Approach the engine room of the legend.
            </DisplayCopy>
            <DisplayCopy className="max-w-lg">
              A distilled monument rendered in real time. Move around it. Pull
              closer. Watch the surface answer with quiet force.
            </DisplayCopy>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Pill>Orbit to inspect</Pill>
          <Pill>Pinch or wheel to zoom</Pill>
          <Pill>Tap the beacon to awaken the pulse</Pill>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {sceneMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08}>
              <GlassCard className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  {metric.label}
                </p>
                <p className="text-xl font-semibold tracking-[-0.04em] text-white md:text-2xl">
                  {metric.value}
                </p>
                <p className="text-sm leading-relaxed text-white/62">{metric.blurb}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <GlassCard className="relative min-h-[460px] overflow-hidden p-0 md:min-h-[560px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(216,225,255,0.18),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(111,157,255,0.12),transparent_34%)]" />
          <button
            type="button"
            onClick={() => setPulse((value) => value + 1)}
            className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-[8px] border border-white/12 bg-black/20 px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/74 backdrop-blur-md transition hover:border-white/22 hover:bg-white/[0.06]"
          >
            Trigger pulse
          </button>
          <Suspense
            fallback={
              <div className="flex h-[460px] items-center justify-center md:h-[560px]">
                <motion.div
                  animate={{ opacity: [0.35, 1, 0.35], scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="h-32 w-32 rounded-full border border-white/12 bg-white/6 blur-[2px]"
                />
              </div>
            }
          >
            <CruzMonolith interactive pulseSignal={pulse} />
          </Suspense>
        </GlassCard>
      </Reveal>
    </SectionShell>
  );
}

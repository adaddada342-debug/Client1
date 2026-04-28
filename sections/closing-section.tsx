"use client";

import { DisplayCopy } from "@/components/ui/display-copy";
import { GlassCard } from "@/components/ui/glass-card";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function ClosingSection() {
  return (
    <SectionShell
      id="legacy"
      className="border-t border-white/6 pb-10"
      innerClassName="gap-10"
    >
      <Reveal>
        <div className="mx-auto grid max-w-4xl gap-6 text-center">
          <Pill className="mx-auto">Legacy</Pill>
          <div className="space-y-5">
            <DisplayCopy as="h2" tone="section" className="text-center">
              Some men leave memories. Cruz left weather patterns.
            </DisplayCopy>
            <DisplayCopy className="mx-auto max-w-3xl text-center">
              He moved through the world like infrastructure with a pulse.
              Cities learned his stride. The horizon learned his name.
            </DisplayCopy>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <GlassCard className="mx-auto grid max-w-5xl gap-6 overflow-hidden p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="grid gap-5">
            <p className="max-w-2xl text-sm leading-7 text-white/66 md:text-base">
              The story never needed exaggeration. The scale did that on its own.
              What remained was the outline of an impossible figure, still moving
              somewhere beyond the visible frame.
            </p>
            <div className="grid gap-3 text-xs uppercase tracking-[0.32em] text-white/40 md:grid-cols-3">
              <span>Mythic mass</span>
              <span>Calm velocity</span>
              <span>Endless horizon</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.02] p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.16),transparent_55%)]" />
            <div className="relative grid gap-3">
              <span className="text-[0.68rem] uppercase tracking-[0.36em] text-white/44">
                Closing statement
              </span>
              <p className="font-display text-2xl leading-tight tracking-[-0.04em] text-white md:text-[2rem]">
                The 400lbs Beef Titanic did not arrive to be admired.
                <br />
                He arrived to redefine scale.
              </p>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </SectionShell>
  );
}

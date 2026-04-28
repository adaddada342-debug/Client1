"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { timeline } from "@/lib/site-data";
import { cn } from "@/utils/cn";
import { DisplayCopy } from "@/components/ui/display-copy";
import { GlassCard } from "@/components/ui/glass-card";
import { Pill } from "@/components/ui/pill";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function TimelineSection() {
  const { scrollYProgress } = useScroll();
  const progressLine = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <SectionShell id="timeline" className="overflow-hidden">
      <SectionHeading
        eyebrow="Age 1–16"
        title="A childhood measured in ruptured horizons."
        description="Every year stacked more gravity into his stride. The legend did not arrive all at once. It learned how to speak through impact."
      />

      <div className="relative mt-16">
        <motion.div
          className="absolute left-4 top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(160,191,255,0.06),rgba(160,191,255,0.32),rgba(160,191,255,0.06))] lg:block"
          style={{ scaleY: progressLine, transformOrigin: "top" }}
        />

        <div className="grid gap-6 lg:gap-10">
          {timeline.map((entry, index) => (
            <Reveal
              key={entry.age}
              className="group"
              amount={0.2}
              y={32 + index * 2}
              delay={index * 0.04}
            >
              <div
                className={cn(
                  "relative grid items-start gap-4 lg:grid-cols-[120px_minmax(0,1fr)] lg:gap-8",
                  index % 2 === 0 ? "lg:pr-16" : "lg:pl-12",
                )}
              >
                <div className="relative z-10 flex items-center gap-3 lg:sticky lg:top-24 lg:block">
                  <div className="hidden h-3 w-3 rounded-full border border-white/18 bg-[var(--color-accent)] shadow-[0_0_28px_rgba(160,191,255,0.6)] lg:absolute lg:-left-[4.55rem] lg:top-5 lg:block" />
                  <Pill className="border-white/12 bg-white/4 text-white/80">
                    Age {entry.age}
                  </Pill>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GlassCard className="grid gap-5 border-white/8 bg-white/[0.05] p-6 md:grid-cols-[1.3fr_0.7fr] md:p-8">
                    <div className="grid gap-4">
                      <DisplayCopy as="h3" tone="section" className="text-[clamp(1.65rem,3vw,2.3rem)]">
                        {entry.title}
                      </DisplayCopy>
                      <p className="max-w-2xl text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                        {entry.event}
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <div className="relative overflow-hidden rounded-[8px] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(160,191,255,0.22),_transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-4">
                        <div className="text-[0.7rem] uppercase tracking-[0.3em] text-white/45">
                          Pressure
                        </div>
                        <div className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
                          {entry.magnitude}
                        </div>
                        <div className="mt-2 h-px w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                        <div className="mt-4 text-xs uppercase tracking-[0.25em] text-white/40">
                          Mythic output
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {["veil", "echo", "mass"].map((label, statIndex) => (
                          <motion.div
                            key={label}
                            className="rounded-[8px] border border-white/8 bg-black/20 px-3 py-4 text-center"
                            animate={{
                              y: [0, -3 - statIndex, 0],
                              opacity: [0.7, 1, 0.76],
                            }}
                            transition={{
                              duration: 3.6 + statIndex * 0.4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.08 + statIndex * 0.18,
                            }}
                          >
                            <div className="text-[0.62rem] uppercase tracking-[0.24em] text-white/35">
                              {label}
                            </div>
                            <div className="mt-2 text-sm font-medium text-white/80">
                              {Math.round(entry.age * 4.5 + statIndex * 7)}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { galleryItems } from "@/lib/site-data";
import { cn } from "@/utils/cn";
import { GlassCard } from "@/components/ui/glass-card";
import { Lightbox } from "@/components/ui/lightbox";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function GallerySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeItem = useMemo(
    () => galleryItems.find((item) => item.id === activeId) ?? null,
    [activeId],
  );

  return (
    <>
      <SectionShell id="gallery" className="py-28 sm:py-36">
        <SectionHeading
          eyebrow="Archive"
          title="Moments collected after the impossible became ordinary."
          description="A preserved record of scale, pressure, and silence. Each frame carries a different temperature of power."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.id}
              className={cn(index % 3 === 0 ? "xl:translate-y-10" : "", index % 4 === 1 ? "xl:-translate-y-2" : "")}
              delay={0.06 * index}
            >
              <motion.button
                type="button"
                onClick={() => setActiveId(item.id)}
                whileHover={{ y: -8, rotateX: -2, rotateY: index % 2 === 0 ? 2 : -2, scale: 1.01 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group block w-full text-left"
              >
                <GlassCard className="overflow-hidden p-0">
                  <div
                    className="relative aspect-[0.78] overflow-hidden"
                    style={{
                      background: item.gradient,
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_42%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(5,7,14,0.9)_100%)]" />
                    <div className="absolute left-5 right-5 top-5 flex items-start justify-between text-[0.68rem] uppercase tracking-[0.22em] text-white/55">
                      <span>{item.label}</span>
                      <span>{item.year}</span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <p className="max-w-[14ch] text-[1.35rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                        {item.title}
                      </p>
                    </div>
                    <div className="absolute inset-x-10 bottom-20 top-16 rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.02))] blur-[0.2px] transition-transform duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute inset-x-[18%] bottom-[18%] top-[16%] rounded-[40%] bg-[radial-gradient(circle_at_50%_20%,rgba(249,229,196,0.3),rgba(255,255,255,0)_55%)] opacity-70 blur-xl transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-x-[24%] bottom-[20%] top-[24%] rounded-[32px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03))]" />
                  </div>
                  <div className="space-y-3 px-5 py-5">
                    <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                    <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em] text-white/40">
                      <span>Open record</span>
                      <span>0{index + 1}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <Lightbox item={activeItem} onClose={() => setActiveId(null)} />
    </>
  );
}

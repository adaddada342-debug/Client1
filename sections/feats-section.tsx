"use client";

import { useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { feats } from "@/lib/site-data";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Pill } from "@/components/ui/pill";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeatsSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const gradients = useMemo(
    () => [
      "from-white/18 via-white/6 to-transparent",
      "from-[#8d6bff]/30 via-white/6 to-transparent",
      "from-[#6ce8ff]/24 via-white/6 to-transparent",
      "from-[#ffd8a8]/22 via-white/6 to-transparent",
      "from-[#f59ee0]/22 via-white/6 to-transparent",
      "from-[#84ffce]/18 via-white/6 to-transparent",
      "from-[#ff8a6d]/18 via-white/6 to-transparent",
      "from-[#a4b4ff]/24 via-white/6 to-transparent",
    ],
    [],
  );

  useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 64,
            scale: 0.96,
            rotateX: index % 2 === 0 ? 5 : -5,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            ease: "power3.out",
            duration: 1.2,
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "bottom 58%",
              scrub: 0.45,
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionShell
      id="feats"
      ref={rootRef}
      className="relative"
      innerClassName="space-y-10"
    >
      <SectionHeading
        eyebrow="Immutable record"
        title="Proof written in steel, orbit, and silence."
        description="Each feat arrives like a product reveal for a force no world was designed to contain."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {feats.map((feat, index) => (
          <GlassCard
            key={feat.title}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className="group relative min-h-[24rem] overflow-hidden border-white/10 p-7 md:p-8"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-90 transition-transform duration-700 group-hover:scale-[1.04]`}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div className="space-y-5">
                <Pill>{feat.metric}</Pill>
                <div className="space-y-3">
                  <h3 className="max-w-[14ch] text-[1.8rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-[2.25rem]">
                    {feat.title}
                  </h3>
                  <p className="max-w-[36ch] text-sm leading-6 text-white/68">
                    {feat.description}
                  </p>
                </div>
              </div>

              <div className="grid min-h-32 place-items-end">
                <div className="relative flex h-32 w-full items-end justify-between overflow-hidden rounded-[8px] border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
                  <div className="absolute inset-x-4 bottom-4 top-8 rounded-full bg-gradient-to-r from-white/0 via-white/8 to-white/0 blur-2xl" />
                  <div className="absolute bottom-0 left-[8%] h-24 w-[32%] rounded-t-full border border-white/10 bg-white/6" />
                  <div className="absolute bottom-0 right-[10%] h-16 w-[45%] rounded-t-full border border-white/10 bg-white/6" />
                  <span className="relative text-[0.72rem] uppercase tracking-[0.28em] text-white/55">
                    Sequence {index + 1}
                  </span>
                  <span className="relative text-sm text-white/70">
                    {feat.visual}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionShell>
  );
}

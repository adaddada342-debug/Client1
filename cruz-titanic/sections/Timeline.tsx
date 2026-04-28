"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { Scramble } from "@/components/ui/Scramble";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Timeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const prog = progressRef.current;
    if (!wrap || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduced || isMobile) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth + 96;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Progress bar
      if (prog) {
        gsap.to(prog, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
          },
        });
      }

      // Per-card subtle entrance as they pass center
      const cards = gsap.utils.toArray<HTMLElement>(".tl-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.4, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "left center+=200",
              end: "right center-=200",
              containerAnimation: tween,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={wrapRef} className="relative h-[100svh] overflow-hidden md:h-[100svh]">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-vignette" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Heading — pinned with track */}
      <div className="container-x px-6 md:px-10 lg:px-16 pt-28 md:pt-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-4">Chapter II · Years 1 — 16</p>
            <h2 className="display-lg text-bone-50">
              <SplitWords text="Sixteen years," />
              <br />
              <span className="italic text-bone-200/85">
                <SplitWords text="quietly heavier." delay={0.2} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg max-w-md md:mt-10">
              A cinematic progression — each year a small inevitability,
              a quiet increase in the gravity of being Cruz.
            </p>
            <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-bone-300/60">
              <span className="font-mono">Drag · or scroll horizontally</span>
              <span className="h-px w-10 bg-bone-300/30" />
              <span className="font-mono"><Scramble text="01 → 16" /></span>
            </div>
          </Reveal>
        </div>

        {/* Progress rail */}
        <div className="mt-10 hidden md:block">
          <div className="relative h-px w-full bg-white/5">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 origin-left scale-x-0 bg-gradient-to-r from-ember-500/80 via-ember-400 to-bone-200"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Horizontal track */}
      <div className="relative mt-12 md:mt-20 overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-nowrap gap-4 md:gap-6 px-6 md:px-10 lg:px-16 will-paint"
        >
          {TIMELINE.map((entry, i) => (
            <TimelineCard key={entry.age} entry={entry} index={i} />
          ))}
          {/* End cap */}
          <div className="flex w-[40vw] shrink-0 items-end pb-10 pl-6 md:pl-12">
            <div className="border-l border-glass-line pl-6">
              <p className="eyebrow mb-2">Now</p>
              <p className="font-display text-2xl text-bone-50">
                400 lbs.
                <span className="italic text-bone-200/70"> Still gathering weight.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}

function TimelineCard({
  entry,
  index,
}: {
  entry: (typeof TIMELINE)[number];
  index: number;
}) {
  // Intensity grows with age — scaled visual heaviness
  const intensity = Math.min(1, entry.age / 16);
  const cardHeight = 280 + intensity * 140;

  return (
    <div
      className="tl-card relative flex w-[78vw] shrink-0 flex-col justify-end md:w-[420px]"
      style={{ height: cardHeight }}
    >
      <div className="glass relative h-full w-full overflow-hidden rounded-lg p-6">
        {/* Soft light from below — grows with age */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background: `radial-gradient(60% 80% at 50% 100%, rgba(233,138,75,${0.05 + intensity * 0.18}), transparent 60%)`,
          }}
        />

        {/* Year sigil */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
              Year
            </span>
            <span
              className="num font-display leading-none text-bone-50"
              style={{ fontSize: 56 + intensity * 60 }}
            >
              {String(entry.age).padStart(2, "0")}
            </span>
          </div>
          <YearSigil age={entry.age} />
        </div>

        {/* Body — sits at bottom */}
        <div className="absolute inset-x-6 bottom-6">
          <h3 className="font-display text-xl md:text-2xl tracking-tightest text-bone-50 leading-tight">
            {entry.title}
          </h3>
          <p className="mt-2 text-sm text-bone-200/75 leading-relaxed">
            {entry.body}
          </p>
        </div>
      </div>
    </div>
  );
}

function YearSigil({ age }: { age: number }) {
  // Procedural sigil — petals/rings increase with age
  const petals = 3 + Math.min(9, Math.floor(age / 2));
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-80">
      <g transform="translate(24,24)">
        {Array.from({ length: petals }).map((_, i) => {
          const a = (i / petals) * Math.PI * 2;
          const x = Math.cos(a) * 14;
          const y = Math.sin(a) * 14;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="1.8"
              fill="#cdb89a"
              opacity={0.5 + (i / petals) * 0.4}
            />
          );
        })}
        <circle r="3" fill="#e98a4b" />
        <circle r="20" fill="none" stroke="#cdb89a" strokeOpacity="0.18" />
      </g>
    </svg>
  );
}

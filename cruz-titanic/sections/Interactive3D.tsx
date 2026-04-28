"use client";

import dynamic from "next/dynamic";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";

const CruzMonolith = dynamic(() => import("@/components/three/CruzMonolith"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="size-24 rounded-full bg-[radial-gradient(closest-side,rgba(233,138,75,0.18),transparent_70%)] animate-breathe" />
    </div>
  ),
});

export function Interactive3D() {
  return (
    <section id="cruz" className="relative pt-24 pb-32">
      <div className="container-x px-6 md:px-10 lg:px-16">
        <div className="mb-12 grid gap-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-4">Chapter IV · The Subject</p>
            <h2 className="display-lg text-bone-50">
              <SplitWords text="Cruz, in" />
              <br />
              <span className="italic text-bone-200/85">
                <SplitWords text="three dimensions." delay={0.2} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg max-w-md md:mt-8">
              Hold the orbit. Let the monolith breathe.
              When you are ready, awaken the ember. He will not move —
              but the room will adjust.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-bone-300/60">
              <span className="size-1.5 rounded-full bg-ember-500" />
              <span className="font-mono">Live render · WebGL</span>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div className="glass-strong relative aspect-[16/10] overflow-hidden rounded-lg">
            <CruzMonolith />

            {/* Corner data overlays */}
            <div className="pointer-events-none absolute left-4 bottom-4 grid gap-1 font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
              <span>Subject · Cruz</span>
              <span>Mass · 400 lbs</span>
              <span>Status · Awake</span>
            </div>
            <div className="pointer-events-none absolute right-4 bottom-4 grid gap-1 text-right font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
              <span>Render · 60 fps</span>
              <span>Cam · Orbit</span>
              <span>Light · Ember</span>
            </div>
          </div>

          {/* Strip beneath */}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["Mass", "400 lbs"],
              ["Posture", "Mythic"],
              ["Output", "Calm"],
              ["Influence", "Continental"],
            ].map(([k, v]) => (
              <div key={k} className="glass rounded-lg px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
                  {k}
                </p>
                <p className="mt-1 num text-lg text-bone-50">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

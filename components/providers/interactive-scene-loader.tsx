"use client";

import dynamic from "next/dynamic";

const InteractiveSceneSection = dynamic(
  () =>
    import("@/sections/interactive-scene-section").then((mod) => ({
      default: mod.InteractiveSceneSection,
    })),
  {
    ssr: false,
    loading: () => (
      <section className="section-shell">
        <div className="container">
          <div className="glass-panel flex min-h-[480px] items-center justify-center rounded-[8px] px-8 py-6 text-sm uppercase tracking-[0.28em] text-white/55">
            Loading monument
          </div>
        </div>
      </section>
    ),
  },
);

export function InteractiveSceneLoader() {
  return <InteractiveSceneSection />;
}

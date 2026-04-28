"use client";

import { lazy, Suspense } from "react";

const InteractiveSceneSection = lazy(() =>
  import("@/sections/interactive-scene-section").then((mod) => ({
    default: mod.InteractiveSceneSection,
  })),
);

export function InteractiveSceneLoader() {
  return (
    <Suspense
      fallback={
        <section className="section-shell">
          <div className="container">
            <div className="glass-panel flex min-h-[480px] items-center justify-center rounded-[8px] px-8 py-6 text-sm uppercase tracking-[0.28em] text-white/55">
              Loading monument
            </div>
          </div>
        </section>
      }
    >
      <InteractiveSceneSection />
    </Suspense>
  );
}

"use client";

import { Suspense, lazy } from "react";

import { AppProviders } from "@/components/providers/app-providers";
import { AmbientBackdrop } from "@/components/ui/ambient-backdrop";
import { ClosingSection } from "@/sections/closing-section";
import { FeatsSection } from "@/sections/feats-section";
import { GallerySection } from "@/sections/gallery-section";
import { HeroSection } from "@/sections/hero-section";
import { IntroStrip } from "@/sections/intro-strip";
import { TimelineSection } from "@/sections/timeline-section";

const InteractiveSceneSection = lazy(() =>
  import("@/sections/interactive-scene-section").then((mod) => ({
    default: mod.InteractiveSceneSection,
  })),
);

function SceneFallback() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="glass-panel flex min-h-[480px] items-center justify-center rounded-[8px] px-8 py-6 text-sm uppercase tracking-[0.28em] text-white/55">
          Loading monument
        </div>
      </div>
    </section>
  );
}

export function App() {
  return (
    <AppProviders>
      <main className="relative overflow-x-hidden pb-10">
        <AmbientBackdrop />
        <HeroSection />
        <IntroStrip />
        <FeatsSection />
        <TimelineSection />
        <GallerySection />
        <Suspense fallback={<SceneFallback />}>
          <InteractiveSceneSection />
        </Suspense>
        <ClosingSection />
      </main>
    </AppProviders>
  );
}

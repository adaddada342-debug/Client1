import { AmbientBackdrop } from "@/components/ui/ambient-backdrop";
import { InteractiveSceneLoader } from "@/components/providers/interactive-scene-loader";
import { ClosingSection } from "@/sections/closing-section";
import { FeatsSection } from "@/sections/feats-section";
import { GallerySection } from "@/sections/gallery-section";
import { HeroSection } from "@/sections/hero-section";
import { IntroStrip } from "@/sections/intro-strip";
import { TimelineSection } from "@/sections/timeline-section";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden pb-10">
      <AmbientBackdrop />
      <HeroSection />
      <IntroStrip />
      <FeatsSection />
      <TimelineSection />
      <GallerySection />
      <InteractiveSceneLoader />
      <ClosingSection />
    </main>
  );
}

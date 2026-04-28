import { Hero } from "@/sections/Hero";
import { Feats } from "@/sections/Feats";
import { Timeline } from "@/sections/Timeline";
import { Gallery } from "@/sections/Gallery";
import { Interactive3D } from "@/sections/Interactive3D";
import { Closing } from "@/sections/Closing";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <Feats />
      <Timeline />
      <Gallery />
      <Interactive3D />
      <Closing />
      <Footer />
    </>
  );
}

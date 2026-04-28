"use client";

import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GALLERY, GalleryItem } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { GalleryArt } from "@/components/visuals/GalleryArt";

export function Gallery() {
  const [open, setOpen] = useState<GalleryItem | null>(null);

  // Lock scroll while lightbox is open
  useEffect(() => {
    if (open) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <section id="gallery" className="relative pt-32 pb-32">
      <div className="container-x px-6 md:px-10 lg:px-16">
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-4">Chapter III · Showcase</p>
            <h2 className="display-lg text-bone-50">
              <SplitWords text="Plates from" />
              <br />
              <span className="italic text-bone-200/85">
                <SplitWords text="the archive." delay={0.2} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg max-w-md md:mt-8">
              Restored, color-graded, and presented without ceremony.
              Each plate is a moment Cruz did not bother to remember.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <Tile key={item.id} item={item} index={i} onOpen={() => setOpen(item)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function Tile({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const highlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(255,255,255,0.10), transparent 55%)`;

  function onMove(e: React.PointerEvent<HTMLButtonElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    mx.set(px);
    my.set(py);
    ry.set((px - 50) / 18);
    rx.set(-(py - 50) / 18);
  }

  return (
    <motion.button
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      onClick={onOpen}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative block w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ember-500/60 rounded-lg"
    >
      <div className="relative">
        <GalleryArt item={item} />
        <motion.div
          aria-hidden
          style={{ background: highlight }}
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100 glow-ember"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h4 className="font-display text-lg text-bone-50">{item.title}</h4>
          <p className="text-sm text-bone-200/65">{item.caption}</p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60 transition-colors group-hover:text-ember-400">
          View
        </span>
      </div>
    </motion.button>
  );
}

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "rgba(5,6,10,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 8 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 grid w-full max-w-5xl gap-6 md:grid-cols-[1.4fr_1fr] glass-strong rounded-lg p-4 md:p-6"
      >
        <div>
          <GalleryArt item={item} large />
        </div>
        <div className="flex flex-col justify-between gap-6 p-2 md:p-4">
          <div>
            <p className="eyebrow mb-3">{item.meta}</p>
            <h3 className="font-display text-3xl md:text-4xl tracking-tightest text-bone-50">
              {item.title}
            </h3>
            <p className="mt-4 text-bone-200/80 leading-relaxed">{item.caption}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Field k="Filed" v={item.meta} />
            <Field k="Subject" v="Cruz" />
            <Field k="Status" v="Restored" />
            <Field k="Class" v="Mythic / Verified" />
          </div>
          <button
            onClick={onClose}
            className="mt-2 inline-flex w-fit items-center gap-3 rounded-lg border border-glass-line bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-bone-100 transition hover:bg-white/[0.08]"
          >
            Close
            <span className="font-mono">esc</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/60">
        {k}
      </span>
      <span className="text-bone-50">{v}</span>
    </div>
  );
}

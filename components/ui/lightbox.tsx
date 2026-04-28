"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "@/lib/site-data";

type LightboxProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (!item) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-[90] flex items-center justify-center px-5 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            aria-label="Close gallery item"
            className="absolute inset-0 bg-black/82 backdrop-blur-2xl"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(9,12,18,0.82)] shadow-[0_50px_160px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.99 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <span className="text-lg leading-none">+</span>
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div
                className="relative min-h-[360px] overflow-hidden"
                style={{ background: item.gradient }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.2),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_36%,rgba(5,7,14,0.82)_100%)]" />
                <div className="absolute inset-x-[10%] top-[10%] bottom-[18%] rounded-[8px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] backdrop-blur-[2px]" />
                <div className="absolute inset-x-[22%] top-[16%] bottom-[22%] rounded-[8px] border border-white/12 bg-[radial-gradient(circle_at_50%_20%,rgba(241,235,223,0.26),transparent_46%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03))]" />
                <div className="absolute bottom-6 left-6 text-[0.72rem] uppercase tracking-[0.32em] text-white/45">
                  Witness archive
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 p-7 lg:p-10">
                <div className="space-y-5">
                  <p className="text-[0.72rem] uppercase tracking-[0.32em] text-white/40">
                    {item.id.replace(/-/g, " ")}
                  </p>
                  <h3 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[0.92] tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>
                  <p className="max-w-lg text-sm leading-7 text-white/68">
                    {item.caption}
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[0.66rem] uppercase tracking-[0.28em] text-white/38">
                      Presence note
                    </div>
                    <div className="mt-3 text-sm leading-7 text-white/72">
                      Depth, glow, and pressure tuned to preserve the moment just
                      before scale became undeniable.
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/32">
                    Tap escape to return to the surface.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

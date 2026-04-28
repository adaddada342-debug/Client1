"use client";

import { useEffect, useRef } from "react";

/**
 * A faint warm aura that follows the cursor.
 * Used sparingly — disabled on touch devices and reduced-motion users.
 */
export function CursorAura() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    const el = ref.current;
    if (!el) return;
    el.style.opacity = "1";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[55] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-700"
      style={{
        width: 520,
        height: 520,
        borderRadius: "50%",
        background:
          "radial-gradient(closest-side, rgba(233,138,75,0.10), rgba(233,138,75,0.03) 45%, transparent 70%)",
        mixBlendMode: "screen",
        filter: "blur(8px)",
      }}
    />
  );
}

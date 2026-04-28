"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { HTMLAttributes, useRef } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  tilt?: boolean;
  strong?: boolean;
};

/**
 * Glass card with subtle pointer-tracked highlight + optional tilt.
 * Used as the foundation for feats panels, timeline cards, gallery items.
 */
export function GlassCard({
  className = "",
  children,
  tilt = false,
  strong = false,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  const bg = useMotionTemplate`radial-gradient(380px circle at ${mx}% ${my}%, rgba(255,255,255,0.08), transparent 55%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    mx.set(px);
    my.set(py);
    if (tilt) {
      ry.set((px - 50) / 18);
      rx.set(-(py - 50) / 18);
    }
  }
  function onLeave() {
    if (tilt) {
      rx.set(0);
      ry.set(0);
    }
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      className={`relative isolate overflow-hidden rounded-lg ${
        strong ? "glass-strong" : "glass"
      } ${className}`}
      {...(rest as any)}
    >
      <motion.div
        aria-hidden
        style={{ background: bg }}
        className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

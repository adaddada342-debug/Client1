"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  duration?: number;
  trigger?: "view" | "mount";
};

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·∆◊";

/**
 * Subtle scramble-in text — used for numerics and eyebrow captions.
 */
export function Scramble({ text, className, duration = 900, trigger = "view" }: Props) {
  const [out, setOut] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const t0 = performance.now();
      const tick = () => {
        const t = performance.now() - t0;
        const p = Math.min(1, t / duration);
        const reveal = Math.floor(p * text.length);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          if (i < reveal || text[i] === " ") s += text[i];
          else s += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setOut(s);
        if (p < 1) requestAnimationFrame(tick);
        else setOut(text);
      };
      requestAnimationFrame(tick);
    };

    if (trigger === "mount") {
      start();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start();
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, duration, trigger]);

  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  );
}

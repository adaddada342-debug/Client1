"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#feats", label: "Feats" },
  { href: "#timeline", label: "Timeline" },
  { href: "#gallery", label: "Showcase" },
  { href: "#cruz", label: "Cruz" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-700 ease-out-expo ${
          scrolled ? "py-2" : "py-5"
        }`}
      >
        <div
          className={`container-x flex items-center justify-between rounded-lg px-4 md:px-6 transition-all duration-700 ease-out-expo ${
            scrolled
              ? "glass py-2.5"
              : "py-3 border border-transparent"
          }`}
        >
          <a href="#" className="group flex items-center gap-3">
            <Mark />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-bone-300/70">
                Dossier 001
              </span>
              <span className="font-display text-base text-bone-50">
                Cruz <span className="italic text-bone-200/70">— the Titanic</span>
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-[13px] tracking-wide text-bone-200/80 hover:text-bone-50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#cruz"
            className="group inline-flex items-center gap-2 rounded-lg border border-glass-line bg-white/[0.03] px-3.5 py-2 text-[12px] uppercase tracking-[0.22em] text-bone-100 transition-all duration-500 hover:bg-white/[0.06]"
          >
            <span className="size-1.5 rounded-full bg-ember-500 shadow-[0_0_12px_rgba(233,138,75,0.7)]" />
            Witness
          </a>
        </div>
      </div>
    </motion.header>
  );
}

function Mark() {
  return (
    <div className="relative size-8 rounded-md border border-glass-line bg-gradient-to-b from-white/[0.08] to-white/[0.02] grid place-items-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8.5L8 3.5L13 8.5L8 13.5L3 8.5Z"
          stroke="currentColor"
          className="text-bone-50"
          strokeWidth="1.2"
        />
        <circle cx="8" cy="8.5" r="1.4" fill="#e98a4b" />
      </svg>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

type Variant = "monolith" | "cosmos" | "lattice" | "horizon" | "fault" | "treaty" | "tide" | "veil";

/**
 * Pure-CSS/SVG cinematic visuals for each feat panel.
 * No images. Each one is a unique, art-directed composition.
 */
export function FeatVisual({ variant }: { variant: Variant }) {
  switch (variant) {
    case "monolith":  return <Monolith />;
    case "cosmos":    return <Cosmos />;
    case "lattice":   return <Lattice />;
    case "horizon":   return <Horizon />;
    case "fault":     return <Fault />;
    case "treaty":    return <Treaty />;
    case "tide":      return <Tide />;
    case "veil":      return <Veil />;
  }
}

const Frame = ({ children, accent }: { children: React.ReactNode; accent?: string }) => (
  <div
    className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01) 60%), #0a0c12",
    }}
  >
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(60% 50% at 50% 100%, ${accent ?? "rgba(233,138,75,0.18)"}, transparent 60%)`,
      }}
    />
    {children}
    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg" />
  </div>
);

function Monolith() {
  return (
    <Frame>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 mx-auto flex h-full items-end justify-center"
      >
        {/* Cityscape silhouette held aloft */}
        <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYEnd slice">
          <defs>
            <linearGradient id="m-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0e1220" />
              <stop offset="1" stopColor="#05060a" />
            </linearGradient>
            <linearGradient id="m-glow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#e98a4b" stopOpacity="0.28" />
              <stop offset="1" stopColor="#e98a4b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#m-sky)" />
          {/* sun line */}
          <rect x="0" y="170" width="400" height="2" fill="#e98a4b" opacity="0.45" />
          <rect x="0" y="172" width="400" height="60" fill="url(#m-glow)" />
          {/* cruz figure */}
          <g transform="translate(200,260)">
            <ellipse cx="0" cy="-2" rx="40" ry="6" fill="#000" opacity="0.7" />
            <path
              d="M -22 0 L -22 -90 Q 0 -120 22 -90 L 22 0 Z"
              fill="#0c0e15"
              stroke="#1c2233"
              strokeWidth="1"
            />
            <circle cx="0" cy="-110" r="22" fill="#0c0e15" stroke="#1c2233" strokeWidth="1" />
            {/* held mass */}
            <g transform="translate(-90,-130)">
              {[0, 22, 44, 66, 92, 118, 140, 165].map((x, i) => (
                <rect
                  key={i}
                  x={x}
                  y={-30 - (i % 3) * 10 - (i === 4 ? 14 : 0)}
                  width={i % 2 ? 16 : 14}
                  height={30 + (i % 3) * 10 + (i === 4 ? 14 : 0)}
                  fill="#0a0d14"
                  stroke="#22293a"
                />
              ))}
              <rect x="-6" y="-2" width="200" height="6" fill="#0a0d14" stroke="#22293a" />
            </g>
          </g>
        </svg>
      </motion.div>
    </Frame>
  );
}

function Cosmos() {
  return (
    <Frame accent="rgba(120,140,200,0.18)">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="c-star" cx="0.7" cy="0.4" r="0.5">
            <stop offset="0" stopColor="#fff5e8" stopOpacity="1" />
            <stop offset="0.2" stopColor="#e98a4b" stopOpacity="0.6" />
            <stop offset="1" stopColor="#e98a4b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="#05060a" />
        {Array.from({ length: 90 }).map((_, i) => {
          const x = (i * 53) % 400;
          const y = (i * 71) % 300;
          const r = ((i * 13) % 17) / 18;
          return <circle key={i} cx={x} cy={y} r={r * 1.2} fill="#cdb89a" opacity={0.5 + (i % 5) * 0.08} />;
        })}
        <circle cx="280" cy="120" r="60" fill="url(#c-star)" />
        {/* trail */}
        <motion.path
          d="M 30 220 C 120 180, 200 150, 270 130"
          stroke="#e98a4b"
          strokeWidth="1.5"
          fill="none"
          opacity="0.85"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* runner */}
        <circle cx="30" cy="220" r="3.5" fill="#e98a4b" />
      </svg>
    </Frame>
  );
}

function Lattice() {
  return (
    <Frame>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#cdb89a" stopOpacity="0.4" />
            <stop offset="1" stopColor="#e98a4b" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#080a10" />
        <g stroke="url(#lg)" strokeWidth="0.6" fill="none">
          {Array.from({ length: 14 }).map((_, i) => {
            const k = i / 13;
            const skew = Math.sin(k * Math.PI) * 30;
            return (
              <motion.path
                key={i}
                d={`M 0 ${20 + i * 20} C 100 ${20 + i * 20 - skew}, 300 ${20 + i * 20 + skew}, 400 ${20 + i * 20}`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.9 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              />
            );
          })}
        </g>
        <circle cx="200" cy="150" r="6" fill="#e98a4b" />
        <circle cx="200" cy="150" r="20" fill="none" stroke="#e98a4b" strokeOpacity="0.45" />
        <circle cx="200" cy="150" r="44" fill="none" stroke="#e98a4b" strokeOpacity="0.18" />
      </svg>
    </Frame>
  );
}

function Horizon() {
  return (
    <Frame>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="h-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a1c28" />
            <stop offset="1" stopColor="#0a0c12" />
          </linearGradient>
          <linearGradient id="h-sun" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#e98a4b" stopOpacity="0.7" />
            <stop offset="1" stopColor="#e98a4b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#h-sky)" />
        <rect x="0" y="170" width="400" height="100" fill="#0a0c12" />
        <motion.line
          x1="0" y1="170" x2="400" y2="170"
          stroke="#e98a4b" strokeWidth="1.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <rect x="0" y="100" width="400" height="70" fill="url(#h-sun)" />
        {/* hand pressing horizon */}
        <g transform="translate(200,170)">
          <path d="M -50 0 L -50 -36 Q 0 -52 50 -36 L 50 0 Z" fill="#0c0e15" stroke="#22293a" />
          <line x1="-50" y1="-12" x2="50" y2="-12" stroke="#22293a" />
        </g>
      </svg>
    </Frame>
  );
}

function Fault() {
  return (
    <Frame>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <rect width="400" height="300" fill="#0a0c12" />
        <motion.path
          d="M 0 220 L 60 180 L 110 230 L 170 170 L 230 240 L 290 180 L 350 230 L 400 200"
          stroke="#e98a4b"
          strokeWidth="1.6"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M 0 222 L 400 222"
          stroke="#cdb89a"
          strokeOpacity="0.4"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <g transform="translate(200,170)">
          <ellipse cx="0" cy="60" rx="22" ry="3" fill="#000" opacity="0.6" />
          <path d="M -10 0 L -10 -60 Q 0 -78 10 -60 L 10 0 Z" fill="#0c0e15" stroke="#22293a" />
          <circle cx="0" cy="-72" r="10" fill="#0c0e15" stroke="#22293a" />
        </g>
      </svg>
    </Frame>
  );
}

function Treaty() {
  return (
    <Frame>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <rect width="400" height="300" fill="#0a0c12" />
        {/* eleven nodes around a circle */}
        <g transform="translate(200,150)">
          {Array.from({ length: 11 }).map((_, i) => {
            const a = (i / 11) * Math.PI * 2 - Math.PI / 2;
            const r = 100;
            const x = Math.cos(a) * r;
            const y = Math.sin(a) * r;
            return (
              <g key={i}>
                <motion.line
                  x1="0" y1="0" x2={x} y2={y}
                  stroke="#cdb89a" strokeOpacity="0.3" strokeWidth="0.6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 1.4, delay: i * 0.04 }}
                />
                <circle cx={x} cy={y} r="3.5" fill="#cdb89a" />
              </g>
            );
          })}
          <circle r="14" fill="#0c0e15" stroke="#e98a4b" strokeWidth="1.2" />
          <circle r="5" fill="#e98a4b" />
        </g>
      </svg>
    </Frame>
  );
}

function Tide() {
  return (
    <Frame>
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="t-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a2238" />
            <stop offset="1" stopColor="#080b14" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#0a0c12" />
        <motion.path
          d="M 0 220 C 50 120, 150 90, 220 140 C 290 190, 360 180, 400 160 L 400 300 L 0 300 Z"
          fill="url(#t-water)"
          stroke="#e98a4b"
          strokeOpacity="0.5"
          strokeWidth="1.2"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <g transform="translate(80,250)">
          <path d="M -10 0 L -10 -60 Q 0 -78 10 -60 L 10 0 Z" fill="#0c0e15" stroke="#22293a" />
          <circle cx="0" cy="-72" r="10" fill="#0c0e15" stroke="#22293a" />
        </g>
      </svg>
    </Frame>
  );
}

function Veil() {
  return (
    <Frame accent="rgba(120,140,200,0.16)">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <rect width="400" height="300" fill="#05060a" />
        {Array.from({ length: 80 }).map((_, i) => {
          const x = (i * 47) % 400;
          const y = (i * 31) % 300;
          return <circle key={i} cx={x} cy={y} r={((i * 7) % 13) / 16} fill="#cdb89a" opacity={0.4 + (i % 4) * 0.1} />;
        })}
        <motion.path
          d="M 80 60 C 120 30, 200 30, 240 80 C 290 140, 320 170, 360 250"
          stroke="#cdb89a"
          strokeWidth="1.2"
          strokeOpacity="0.7"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        <g transform="translate(200,210)">
          <path d="M -22 0 L -22 -90 Q 0 -120 22 -90 L 22 0 Z" fill="#0c0e15" stroke="#1c2233" />
          <circle cx="0" cy="-110" r="22" fill="#0c0e15" stroke="#1c2233" />
        </g>
      </svg>
    </Frame>
  );
}

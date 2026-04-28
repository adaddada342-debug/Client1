"use client";

import { GalleryItem } from "@/lib/data";

/**
 * Procedural SVG art for each gallery plate — unique, cinematic.
 */
export function GalleryArt({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  const aspect = large ? "aspect-[3/4]" : "aspect-[4/5]";
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-lg`}
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01) 60%), ${item.hue}`,
      }}
    >
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`g-${item.id}`} cx="0.5" cy="0.95" r="0.7">
            <stop offset="0" stopColor="#e98a4b" stopOpacity="0.32" />
            <stop offset="0.6" stopColor="#e98a4b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`s-${item.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill={`url(#s-${item.id})`} />
        <rect width="400" height="500" fill={`url(#g-${item.id})`} />

        {/* Pattern */}
        {renderPattern(item)}

        {/* Cruz silhouette — present in every plate */}
        <g transform="translate(200,360)">
          <ellipse cx="0" cy="6" rx="40" ry="6" fill="#000" opacity="0.55" />
          <path d="M -22 0 L -22 -110 Q 0 -140 22 -110 L 22 0 Z" fill="#0a0c12" stroke="#1c2233" strokeWidth="0.8" />
          <circle cx="0" cy="-130" r="22" fill="#0a0c12" stroke="#1c2233" strokeWidth="0.8" />
        </g>

        {/* Bottom letterbox */}
        <rect x="0" y="468" width="400" height="32" fill="rgba(0,0,0,0.55)" />
      </svg>

      {/* Plate label */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4 text-[11px] uppercase tracking-[0.28em]">
        <span className="font-mono text-bone-300/80">{item.meta}</span>
        <span className="font-mono text-bone-300/60">Cruz · Archive</span>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-lg" />
    </div>
  );
}

function renderPattern(item: GalleryItem) {
  switch (item.pattern) {
    case "pillar":
      return (
        <g>
          {Array.from({ length: 9 }).map((_, i) => (
            <rect
              key={i}
              x={40 + i * 38}
              y={120 + (i % 3) * 16}
              width={26}
              height={210 - (i % 3) * 16}
              fill="#0a0d14"
              stroke="#22293a"
              strokeWidth="0.6"
            />
          ))}
          <line x1="0" y1="328" x2="400" y2="328" stroke="#e98a4b" strokeOpacity="0.5" />
        </g>
      );
    case "arc":
      return (
        <g>
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              d={`M 20 ${300 - i * 30} Q 200 ${120 - i * 20} 380 ${300 - i * 30}`}
              stroke="#cdb89a"
              strokeOpacity={0.18 + i * 0.06}
              fill="none"
              strokeWidth="0.8"
            />
          ))}
        </g>
      );
    case "halo":
      return (
        <g transform="translate(200,200)">
          {Array.from({ length: 5 }).map((_, i) => (
            <circle
              key={i}
              r={50 + i * 30}
              fill="none"
              stroke={i % 2 ? "#cdb89a" : "#e98a4b"}
              strokeOpacity={0.3 - i * 0.05}
              strokeWidth="0.7"
            />
          ))}
        </g>
      );
    case "tide":
      return (
        <g>
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={i}
              d={`M 0 ${260 - i * 18} C 100 ${220 - i * 18}, 300 ${300 - i * 18}, 400 ${250 - i * 18}`}
              stroke="#7a8eff"
              strokeOpacity={0.18 + i * 0.04}
              fill="none"
              strokeWidth="0.9"
            />
          ))}
          <line x1="0" y1="340" x2="400" y2="340" stroke="#cdb89a" strokeOpacity="0.4" />
        </g>
      );
    case "fault":
      return (
        <g>
          <path
            d="M 0 360 L 60 320 L 110 380 L 170 310 L 230 390 L 290 320 L 350 380 L 400 350"
            stroke="#e98a4b"
            strokeOpacity="0.6"
            fill="none"
            strokeWidth="1"
          />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={i * 50 + 10}
              y1={362 + (i % 2) * 4}
              x2={i * 50 + 28}
              y2={362 + (i % 2) * 4}
              stroke="#cdb89a"
              strokeOpacity="0.5"
            />
          ))}
        </g>
      );
    case "ridge":
    default:
      return (
        <g>
          {Array.from({ length: 80 }).map((_, i) => {
            const x = (i * 47) % 400;
            const y = (i * 31) % 500;
            return <circle key={i} cx={x} cy={y} r={((i * 7) % 13) / 16} fill="#cdb89a" opacity={0.4 + (i % 4) * 0.1} />;
          })}
        </g>
      );
  }
}

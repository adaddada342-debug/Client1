"use client";

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-overlay opacity-[0.07]"
      style={{
        backgroundImage: "url('/cruz/grain.svg')",
        backgroundSize: "240px 240px",
      }}
    />
  );
}

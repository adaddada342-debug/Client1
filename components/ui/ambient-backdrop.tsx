"use client";

export function AmbientBackdrop() {
  return (
    <>
      <div className="ambient-noise" />
      <div className="pointer-events-none fixed inset-0 z-[-2] bg-[radial-gradient(circle_at_12%_18%,rgba(137,167,255,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(233,194,123,0.09),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(138,121,255,0.12),transparent_28%)]" />
    </>
  );
}

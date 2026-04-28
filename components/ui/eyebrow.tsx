import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={[
        "inline-flex w-fit items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-white/44",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="h-px w-8 bg-[linear-gradient(90deg,rgba(255,255,255,0.45),rgba(255,255,255,0))]" />
      {children}
    </span>
  );
}

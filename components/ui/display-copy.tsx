import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type DisplayCopyProps = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  children: ReactNode;
  tone?: "hero" | "section" | "body" | "caption";
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function DisplayCopy({
  as = "p",
  children,
  tone = "body",
  className,
  ...props
}: DisplayCopyProps) {
  const Component = as;

  return (
    <Component
      className={cn(
        tone === "hero" && "display-title text-balance",
        tone === "section" && "section-title text-balance",
        tone === "body" && "section-copy",
        tone === "caption" &&
          "text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

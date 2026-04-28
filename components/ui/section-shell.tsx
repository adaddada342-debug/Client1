import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  innerClassName?: string;
};

export const SectionShell = forwardRef<HTMLElement, SectionShellProps>(
  function SectionShell({ className, innerClassName, children, ...props }, ref) {
    return (
      <section ref={ref} className={cn("section-shell", className)} {...props}>
        <div className={cn("container", innerClassName)}>{children}</div>
      </section>
    );
  },
);

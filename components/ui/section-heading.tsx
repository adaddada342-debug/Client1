import { type ReactNode } from "react";

import { cn } from "@/utils/cn";
import { DisplayCopy } from "@/components/ui/display-copy";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <DisplayCopy as="h2" tone="section">
        {title}
      </DisplayCopy>
      {description ? (
        <DisplayCopy className={cn(align === "center" && "mx-auto")}>
          {description}
        </DisplayCopy>
      ) : null}
      {children}
    </div>
  );
}

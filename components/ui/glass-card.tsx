"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

type GlassCardProps = HTMLMotionProps<"div"> & {
  hover?: boolean;
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hover
            ? {
                y: -6,
                scale: 1.01,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }
            : undefined
        }
        className={cn("glass-panel rounded-[8px]", hover && "will-change-transform", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";

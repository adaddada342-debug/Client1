"use client";

import type { ReactNode } from "react";
import { ScrollProvider } from "@/components/providers/scroll-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      <ScrollProvider />
      {children}
    </>
  );
}

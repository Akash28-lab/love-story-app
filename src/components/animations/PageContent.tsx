"use client";

import type { ReactNode } from "react";

/** Keeps text, images, and videos above the background hearts layer */
export default function PageContent({ children }: { children: ReactNode }) {
  return <div className="relative z-10">{children}</div>;
}

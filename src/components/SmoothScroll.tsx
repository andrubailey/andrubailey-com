"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
        wheelMultiplier: 1.15,
      }}
    >
      {children}
    </ReactLenis>
  );
}

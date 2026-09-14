"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Tracks which direct child of a container is currently nearest the vertical
 * center of the viewport, for sticky scroll-linked counters/progress bars.
 */
export function useActiveIndex<T extends HTMLElement>(): [RefObject<T | null>, number] {
  const containerRef = useRef<T>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") return;

    const items = Array.from(container.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = items.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActive(index);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return [containerRef, active];
}

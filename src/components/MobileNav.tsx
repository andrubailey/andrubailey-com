"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";

export default function MobileNav({ ctaLabel }: { ctaLabel: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex size-9 items-center justify-center"
      >
        <span className="relative block h-3 w-5">
          <span
            className={`absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-border-soft bg-white px-6 pb-6">
          <nav className="flex flex-col gap-1 pt-2">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[16px] tracking-[-0.32px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-3 flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-[16px] font-medium tracking-[-0.32px] text-ink"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

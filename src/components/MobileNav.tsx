"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";

export default function MobileNav() {
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
            className={`absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        className="absolute inset-x-0 top-full grid border-border-soft bg-white transition-[grid-template-rows] duration-300 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          borderBottomWidth: open ? "1px" : "0px",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="flex flex-col gap-1 px-6 pt-2 pb-6">
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
        </div>
      </div>
    </div>
  );
}

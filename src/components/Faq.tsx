"use client";

import { useId, useState } from "react";
import Reveal from "./Reveal";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="p-6 sm:p-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-[16px] font-medium tracking-[-0.32px]"
      >
        {q}
        <span
          className="shrink-0 text-[20px] text-muted transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        aria-hidden={!open}
        inert={!open}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="mt-4 text-[16px] leading-[1.5] tracking-[-0.32px] text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq({ items }: { items: SiteContent["faqs"] }) {
  return (
    <section id="faq" className="bg-soft py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-center text-[36px] font-semibold leading-[1.1] tracking-[-1.44px] sm:text-[48px]">
            Questions worth answering upfront.
          </h2>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-12 divide-y divide-border-soft rounded-[32px] border border-border-soft bg-white"
        >
          {items.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

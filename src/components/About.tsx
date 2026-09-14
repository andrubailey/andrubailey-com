"use client";

import Button from "./Button";
import Reveal from "./Reveal";
import { useActiveIndex } from "@/lib/useActiveIndex";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function About({ content }: { content: SiteContent["about"] }) {
  const [listRef, active] = useActiveIndex<HTMLOListElement>();
  const total = content.sections.length;

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[auto_1fr]">
        <div className="hidden sm:block">
          <div className="sticky top-32 flex items-end gap-1">
            <span className="text-[40px] leading-none font-medium tracking-[-0.8px] tabular-nums">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="pb-0.5 text-[14px] tracking-[-0.28px] text-muted">
              /{String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        <ol
          ref={listRef}
          className="relative border-l border-border-soft pl-10 sm:pl-14"
        >
          <span
            className="absolute top-0 left-[-1px] w-[2px] bg-accent transition-[height] duration-500 ease-out"
            style={{ height: `${((active + 1) / total) * 100}%` }}
            aria-hidden
          />
          {content.sections.map((section, i) => (
            <Reveal
              key={section.headline}
              as="li"
              delay={i * 100}
              className="relative pb-16 last:pb-0"
            >
              <span className="absolute top-1 -left-[45px] flex size-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent sm:-left-[61px]" />
              <span className="text-[14px] tracking-[-0.28px] text-muted sm:hidden">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-[28px] font-semibold leading-[1.15] tracking-[-1px] sm:mt-0 sm:text-[40px] sm:tracking-[-1.6px]">
                {section.headline}
              </h2>
              <p className="mt-3 max-w-xl text-[16px] leading-[1.5] tracking-[-0.32px] text-muted">
                {section.body}
              </p>

              {i === content.sections.length - 1 && (
                <>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {/* TODO: swap for real work-in-progress photos */}
                    <div className="aspect-[4/3] rounded-[24px] bg-soft" />
                    <div className="aspect-[4/3] rounded-[24px] bg-soft" />
                  </div>
                  <p className="mt-8 max-w-xl text-[16px] font-medium leading-[1.5] tracking-[-0.32px] text-ink">
                    {content.ctaLead}
                  </p>
                  <div className="mt-6">
                    <Button href={content.cta.href}>{content.cta.label}</Button>
                  </div>
                </>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

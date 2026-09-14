"use client";

import Reveal from "./Reveal";
import Responsive from "./Responsive";
import { useActiveIndex } from "@/lib/useActiveIndex";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Process({ content }: { content: SiteContent["process"] }) {
  const [listRef, active] = useActiveIndex<HTMLOListElement>();
  const total = content.steps.length;

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <Reveal className="text-center">
        <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-1.44px] sm:text-[48px]">
          {content.headline}
        </h2>
        <Responsive
          mobile={content.subheadlineMobile}
          desktop={content.subheadline}
          className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.4] tracking-[-0.32px] text-muted"
        />
      </Reveal>

      <div className="mt-16 grid gap-8 sm:grid-cols-[auto_1fr]">
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
          {content.steps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 100}
              className="relative pb-16 last:pb-0"
            >
              <span className="absolute top-1 -left-[45px] flex size-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent sm:-left-[61px]" />
              <span className="text-[14px] tracking-[-0.28px] text-muted sm:hidden">
                {step.number}
              </span>
              <h3 className="mt-2 text-[24px] font-medium tracking-[-0.48px] sm:mt-0">
                {step.title}
              </h3>
              <Responsive
                mobile={step.descriptionMobile}
                desktop={step.description}
                className="mt-2 max-w-md text-[16px] leading-[1.4] tracking-[-0.32px] text-muted"
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

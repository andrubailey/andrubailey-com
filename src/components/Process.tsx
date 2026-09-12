import Reveal from "./Reveal";
import Responsive from "./Responsive";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Process({ content }: { content: SiteContent["process"] }) {
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

      <ol className="relative mt-16 border-l border-border-soft pl-10 sm:pl-14">
        {content.steps.map((step, i) => (
          <Reveal
            key={step.number}
            as="li"
            delay={i * 100}
            className="relative pb-16 last:pb-0"
          >
            <span className="absolute top-1 -left-[45px] flex size-3 -translate-x-1/2 items-center justify-center rounded-full bg-accent sm:-left-[61px]" />
            <span className="text-[14px] tracking-[-0.28px] text-muted">{step.number}</span>
            <h3 className="mt-2 text-[24px] font-medium tracking-[-0.48px]">{step.title}</h3>
            <Responsive
              mobile={step.descriptionMobile}
              desktop={step.description}
              className="mt-2 max-w-md text-[16px] leading-[1.4] tracking-[-0.32px] text-muted"
            />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

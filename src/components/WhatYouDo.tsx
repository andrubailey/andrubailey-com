import Button from "./Button";
import Reveal from "./Reveal";
import Responsive from "./Responsive";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function WhatYouDo({ content }: { content: SiteContent["whatYouDo"] }) {
  return (
    <section className="py-24">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-[16px] tracking-[-0.32px] text-muted-2">{content.headline}</h2>
        <Responsive
          mobile={content.subheadlineMobile}
          desktop={content.subheadline}
          className="mt-4 text-[16px] leading-[1.4] tracking-[-0.32px] text-muted-2"
        />
        <Responsive
          mobile={content.bodyMobile}
          desktop={content.body}
          display="inline"
          className="mt-4 inline bg-accent px-1 text-[16px] leading-[1.4] tracking-[-0.32px] text-ink"
        />
        <div className="mt-8 flex justify-center">
          <Button href={content.cta.href} variant="secondary">
            {content.cta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

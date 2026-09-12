import { whatYouDo } from "@/lib/content";

export default function WhatYouDo() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="text-[16px] tracking-[-0.32px] text-muted-2">{whatYouDo.headline}</h2>
      <p className="mt-4 text-[16px] leading-[1.4] tracking-[-0.32px] text-muted-2">
        {whatYouDo.subheadline}
      </p>
      <p className="mt-4 inline bg-accent px-1 text-[16px] leading-[1.4] tracking-[-0.32px] text-ink">
        {whatYouDo.body}
      </p>
    </section>
  );
}

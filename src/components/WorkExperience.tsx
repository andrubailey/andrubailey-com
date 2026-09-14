import Reveal from "./Reveal";
import type { SanityExperience } from "@/sanity/lib/getExperience";
import { workExperience } from "@/lib/content";

export default function WorkExperience({ items }: { items: SanityExperience[] }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="text-[16px] tracking-[-0.32px] text-muted">{workExperience.eyebrow}</p>
        <h2 className="max-w-md text-[28px] font-semibold leading-[1.15] tracking-[-1px] sm:text-[40px] sm:tracking-[-1.6px]">
          {workExperience.headline}
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12">
        <div className="hidden border-b border-border-soft pb-3 text-[14px] tracking-[-0.28px] text-muted sm:grid sm:grid-cols-[1fr_1fr_auto]">
          <span>Role</span>
          <span>Company</span>
          <span>Period</span>
        </div>

        <div className="divide-y divide-border-soft">
          {items.map((item) => (
            <div
              key={item._id}
              className="grid gap-1 py-5 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-4"
            >
              <p className="text-[20px] font-medium tracking-[-0.4px] sm:text-[24px]">
                {item.role}
              </p>
              <p className="text-[16px] tracking-[-0.32px] text-muted">{item.company}</p>
              <p className="text-[14px] tracking-[-0.28px] text-muted sm:text-[16px] sm:text-right">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

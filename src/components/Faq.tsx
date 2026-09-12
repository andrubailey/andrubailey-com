import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Faq({ items }: { items: SiteContent["faqs"] }) {
  return (
    <section id="faq" className="bg-soft py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-[36px] font-semibold leading-[1.1] tracking-[-1.44px] sm:text-[48px]">
          Questions worth answering upfront.
        </h2>

        <div className="mt-12 divide-y divide-border-soft rounded-[32px] border border-border-soft bg-white">
          {items.map((faq) => (
            <details key={faq.q} className="group p-6 sm:p-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium tracking-[-0.32px] marker:content-none">
                {faq.q}
                <span className="shrink-0 text-[20px] text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[16px] leading-[1.5] tracking-[-0.32px] text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

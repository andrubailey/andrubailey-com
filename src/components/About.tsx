import Button from "./Button";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function About({ content }: { content: SiteContent["about"] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
        <div className="animate-fade-in-up">
          {/* TODO: swap for a real headshot */}
          <div className="aspect-[4/5] w-full rounded-[32px] bg-soft" />
        </div>

        <div>
          <h2
            className="animate-fade-in-up max-w-2xl text-[28px] font-medium leading-[1.2] tracking-[-0.8px] sm:text-[36px]"
            style={{ animationDelay: "80ms" }}
          >
            {content.headline}
          </h2>
          <div className="mt-6 space-y-5">
            {content.body.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 24)}
                className="animate-fade-in-up max-w-2xl text-[16px] leading-[1.5] tracking-[-0.32px] text-muted"
                style={{ animationDelay: `${140 + i * 60}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p
            className="animate-fade-in-up mt-6 max-w-2xl text-[16px] font-medium leading-[1.5] tracking-[-0.32px] text-ink"
            style={{ animationDelay: "420ms" }}
          >
            {content.ctaLead}
          </p>
          <div className="animate-fade-in-up mt-8" style={{ animationDelay: "480ms" }}>
            <Button href={content.cta.href}>{content.cta.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

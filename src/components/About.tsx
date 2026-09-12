import Button from "./Button";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
        <div>
          {/* TODO: swap for a real headshot */}
          <div className="aspect-[4/5] w-full rounded-[32px] bg-soft" />
        </div>

        <div>
          <h2 className="max-w-2xl text-[28px] font-medium leading-[1.2] tracking-[-0.8px] sm:text-[36px]">
            {about.headline}
          </h2>
          <div className="mt-6 space-y-5">
            {about.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-2xl text-[16px] leading-[1.5] tracking-[-0.32px] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-[16px] font-medium leading-[1.5] tracking-[-0.32px] text-ink">
            {about.ctaLead}
          </p>
          <div className="mt-8">
            <Button href={about.cta.href}>{about.cta.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

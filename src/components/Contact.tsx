import Link from "next/link";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Contact({ content }: { content: SiteContent["contact"] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-[16px] tracking-[-0.32px] text-muted">{content.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] sm:text-[56px] sm:tracking-[-2.24px]">
          {content.headline}
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[380px_1fr]">
        <Reveal
          delay={80}
          className="flex flex-col rounded-[40px] bg-soft p-10"
        >
          <span className="flex size-10 items-center justify-center rounded-[8px] bg-accent">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <h2 className="mt-6 text-[24px] font-medium tracking-[-0.48px]">
            {content.infoTitle}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.4] tracking-[-0.32px] text-muted">
            {content.infoBody}
          </p>
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-10">
            <Link
              href={content.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-fit items-center justify-center rounded-full border border-border-soft bg-white px-6 text-[16px] font-medium tracking-[-0.32px] text-ink transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              {content.bookingLabel}
            </Link>
            <span className="text-[14px] tracking-[-0.28px] text-muted">
              {content.bookingDuration}
            </span>
          </div>
        </Reveal>

        <Reveal delay={160} className="rounded-[40px] bg-ink p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

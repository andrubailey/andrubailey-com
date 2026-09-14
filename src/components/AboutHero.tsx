import Image from "next/image";
import Button from "./Button";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function AboutHero({ content }: { content: SiteContent["about"]["hero"] }) {
  return (
    <section className="px-3 pt-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] sm:aspect-[16/9] sm:rounded-[40px]">
        <Image
          src="/andru.jpg"
          alt={content.heading}
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-ink" />

        <div className="absolute inset-x-6 bottom-6 sm:inset-x-20 sm:bottom-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-[32px] font-semibold leading-[1.1] tracking-[-1.28px] text-white sm:text-[64px] sm:tracking-[-2.56px]">
              {content.heading}
            </h1>
            <div className="animate-fade-in-up max-w-xs" style={{ animationDelay: "100ms" }}>
              <p className="text-[16px] leading-[1.4] tracking-[-0.32px] text-white/80 sm:text-[18px]">
                {content.tagline}
              </p>
              <div className="mt-6">
                <Button href={content.cta.href}>{content.cta.label}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

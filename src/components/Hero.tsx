import Image from "next/image";
import Button from "./Button";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityProject } from "@/sanity/lib/getProjects";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Hero({
  content,
  featured,
}: {
  content: SiteContent["hero"];
  featured?: SanityProject;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[15px] tracking-[-0.3px] text-muted sm:text-[16px] sm:tracking-[-0.32px]">
            {content.eyebrow}
          </p>
          <h1 className="mt-6 text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] sm:text-[56px] sm:tracking-[-2.24px]">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-[1.4] tracking-[-0.3px] text-muted sm:text-[16px] sm:tracking-[-0.32px]">
            {content.subheadline}
          </p>
          <div className="mt-8">
            <Button href={content.cta.href}>{content.cta.label}</Button>
          </div>
        </div>

        {featured && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] bg-soft">
            {featured.image ? (
              <Image
                src={urlForImage(featured.image).width(1000).height(750).url()}
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              // TODO: add a cover image for this project in Sanity Studio (/studio)
              <div className="absolute inset-0 bg-gradient-to-br from-soft to-border-soft" />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-8 pt-16">
              <p className="text-[14px] tracking-[-0.28px] text-white/80">{featured.category}</p>
              <p className="mt-1 text-[24px] font-medium tracking-[-0.48px] text-white">
                {featured.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

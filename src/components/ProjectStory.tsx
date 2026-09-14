import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import Reveal from "./Reveal";
import { urlForImage } from "@/sanity/lib/image";

export default function ProjectStory({
  eyebrow,
  headline,
  body,
  images,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  images?: SanityImageSource[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Reveal className="grid gap-6 sm:grid-cols-[140px_1fr] sm:gap-12">
        <p className="text-[16px] tracking-[-0.32px] text-muted">{eyebrow}</p>
        <div>
          <h2 className="max-w-2xl text-[32px] font-semibold leading-[1.15] tracking-[-1.28px] sm:text-[48px] sm:tracking-[-1.92px]">
            {headline}
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.4] tracking-[-0.32px] text-muted whitespace-pre-line">
            {body}
          </p>
        </div>
      </Reveal>

      {images && images.length > 0 && (
        <Reveal
          delay={100}
          className={`mt-10 grid gap-6 sm:mt-14 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}
        >
          {images.map((image, i) => (
            <div
              key={i}
              className="relative aspect-[554/380] overflow-hidden rounded-[40px] bg-soft"
            >
              <Image
                src={urlForImage(image).width(1108).height(760).url()}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </Reveal>
      )}
    </section>
  );
}

import Link from "next/link";
import Button from "./Button";
import Reveal from "./Reveal";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Footer({ content }: { content: SiteContent["footer"] }) {
  return (
    <footer className="px-3 pb-3">
      <div className="rounded-[40px] bg-ink px-6 py-16 text-white sm:px-12 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-1.44px] sm:text-[48px]">
            {content.headline}
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href={content.cta.href}>{content.cta.label}</Button>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
                AB
              </span>
              <span className="text-[16px] tracking-[-0.32px]">{content.name}</span>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
              <div>
                <p className="text-[16px] tracking-[-0.32px] text-white/50">Pages</p>
                <ul className="mt-4 space-y-3">
                  {content.pages.map((page) => (
                    <li key={page.label}>
                      <Link
                        href={page.href}
                        className="text-[16px] tracking-[-0.32px] transition-opacity hover:opacity-70"
                      >
                        {page.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[16px] tracking-[-0.32px] text-white/50">Connect</p>
                <ul className="mt-4 space-y-3">
                  {content.social.map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        className="text-[16px] tracking-[-0.32px] transition-opacity hover:opacity-70"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/15 pt-6 text-[16px] tracking-[-0.32px] text-white/50">
            {content.credit}
          </div>
        </div>
      </div>
    </footer>
  );
}

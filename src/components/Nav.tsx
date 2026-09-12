import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";
import { nav } from "@/lib/content";

export default function Nav({ ctaLabel }: { ctaLabel?: string }) {
  const cta = ctaLabel || nav.cta.label;

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/90 backdrop-blur-sm">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <span className="flex size-10 items-center justify-center rounded-full bg-soft text-sm font-medium">
            AB
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full bg-soft p-1 text-[14px] sm:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-ink transition-colors hover:bg-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <span className="hidden sm:inline-flex">
          <Button href={nav.cta.href} className="h-10 px-5 text-[15px]">
            {cta}
          </Button>
        </span>

        <MobileNav ctaLabel={cta} />
      </div>
    </header>
  );
}

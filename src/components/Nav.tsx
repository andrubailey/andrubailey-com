import Link from "next/link";
import { nav } from "@/lib/content";

export default function Nav({ ctaLabel }: { ctaLabel?: string }) {
  const cta = ctaLabel || nav.cta.label;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-[16px] tracking-[-0.32px]">
          {nav.name}
        </Link>

        <nav className="flex items-center gap-4 text-[15px] tracking-[-0.3px] sm:gap-8">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
          <Link href={nav.cta.href} className="text-ink transition-opacity hover:opacity-60">
            {cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import Button from "./Button";
import { nav } from "@/lib/content";

export default function Nav({ ctaLabel }: { ctaLabel?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-soft text-sm font-medium">
            AB
          </span>
          <span className="text-[16px] tracking-[-0.32px]">{nav.name}</span>
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

        <Button href={nav.cta.href} className="h-10 px-5 text-[15px]">
          {ctaLabel || nav.cta.label}
        </Button>
      </div>
    </header>
  );
}

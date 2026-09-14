import Link from "next/link";
import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label={nav.name}>
          {/* TODO: swap for a real headshot */}
          <span className="block size-10 rounded-full bg-soft" />
        </Link>

        <nav className="flex items-center gap-1 rounded-full bg-soft p-1 text-[14px] sm:text-[15px]">
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
      </div>
    </header>
  );
}

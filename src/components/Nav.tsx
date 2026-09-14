import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="group flex items-center gap-3">
            <Link href="/" aria-label={nav.name} className="block shrink-0">
              <Image
                src="/andru.jpg"
                alt={nav.name}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
                priority
              />
            </Link>

            <span className="max-w-0 overflow-hidden text-[16px] tracking-[-0.32px] whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-[160px] group-hover:opacity-100">
              {nav.name}
            </span>
          </div>

          <nav className="hidden items-center gap-1 rounded-full bg-soft p-1 text-[15px] sm:flex">
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

        <MobileNav />
      </div>
    </header>
  );
}

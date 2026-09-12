import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center rounded-full px-6 text-[16px] font-medium tracking-[-0.32px] transition-[background-color,transform] duration-200 hover:scale-[1.03] active:scale-[0.97] motion-reduce:hover:scale-100 motion-reduce:active:scale-100";
  const variants = {
    primary: "bg-accent text-ink hover:bg-[#a9de4f]",
    secondary: "bg-white text-ink border border-border-soft hover:bg-soft",
    light: "bg-white/10 text-white border border-white/15 hover:bg-white/20",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

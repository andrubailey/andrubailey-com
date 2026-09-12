import Button from "./Button";
import { hero, projects } from "@/lib/content";

export default function Hero() {
  const featured = projects[0];

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[16px] tracking-[-0.32px] text-muted">{hero.eyebrow}</p>
          <h1 className="mt-6 text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] sm:text-[56px] sm:tracking-[-2.24px]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-[1.4] tracking-[-0.32px] text-muted">
            {hero.subheadline}
          </p>
          <div className="mt-8">
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[40px] bg-soft">
          {/* TODO: swap for a real screenshot of the {featured.title} build */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-br from-soft to-border-soft p-8">
            <div>
              <p className="text-[14px] tracking-[-0.28px] text-muted">{featured.category}</p>
              <p className="mt-1 text-[24px] font-medium tracking-[-0.48px]">{featured.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

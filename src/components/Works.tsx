import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityProject } from "@/sanity/lib/getProjects";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Works({
  content,
  projects,
  limit,
}: {
  content: SiteContent["works"];
  projects: SanityProject[];
  limit?: number;
}) {
  const visible = limit ? projects.slice(0, limit) : projects;
  const showSeeAll = limit ? projects.length > limit : false;

  return (
    <section className="bg-soft py-24">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-1.44px] sm:text-[48px]">
          {content.headline}
        </h2>
        <p className="mt-4 text-[16px] leading-[1.4] tracking-[-0.32px] text-muted">
          {content.subheadline}
        </p>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-6 px-6">
        {visible.map((project, i) => (
          <Reveal key={project._id} delay={i * 80}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group grid overflow-hidden rounded-[40px] border border-border-soft bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 sm:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-10 sm:p-12">
                <span className="w-fit rounded-full bg-soft px-4 py-2 text-[14px] tracking-[-0.28px] text-muted-2">
                  {project.category}
                </span>
                <h3 className="mt-6 text-[32px] font-medium tracking-[-0.8px] sm:text-[40px]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-sm text-[16px] leading-[1.4] tracking-[-0.32px] text-muted">
                  {project.description}
                </p>
                <span className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-accent px-6 text-[16px] font-medium tracking-[-0.32px] text-ink transition-transform duration-300 group-hover:scale-[1.04]">
                  View Project
                </span>
              </div>
              {project.image ? (
                <div className="relative aspect-video overflow-hidden sm:aspect-auto sm:min-h-[320px]">
                  <Image
                    src={urlForImage(project.image).width(800).height(640).url()}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                // TODO: add a cover image for this project in Sanity Studio (/studio)
                <div className="aspect-video bg-gradient-to-br from-soft to-border-soft sm:aspect-auto sm:min-h-[320px]" />
              )}
            </a>
          </Reveal>
        ))}
      </div>

      {showSeeAll && (
        <Reveal className="mt-10 flex justify-center">
          <Link
            href={content.cta.href}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-[16px] font-medium tracking-[-0.32px] text-white transition-transform hover:scale-[1.03]"
          >
            {content.cta.label}
          </Link>
        </Reveal>
      )}
    </section>
  );
}

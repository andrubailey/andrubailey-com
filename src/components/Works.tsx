import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityProject } from "@/sanity/lib/getProjects";
import type { SiteContent } from "@/sanity/lib/getSiteContent";

export default function Works({
  content,
  projects,
}: {
  content: SiteContent["works"];
  projects: SanityProject[];
}) {
  return (
    <section id="work" className="bg-soft py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-1.44px] sm:text-[48px]">
          {content.headline}
        </h2>
        <p className="mt-4 text-[16px] leading-[1.4] tracking-[-0.32px] text-muted">
          {content.subheadline}
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-6 px-6">
        {projects.map((project) => (
          <a
            key={project._id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="grid overflow-hidden rounded-[40px] border border-border-soft bg-white sm:grid-cols-2"
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
              <span className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-full bg-accent px-6 text-[16px] font-medium tracking-[-0.32px] text-ink">
                View Project
              </span>
            </div>
            {project.image ? (
              <div className="relative aspect-video sm:aspect-auto sm:min-h-[320px]">
                <Image
                  src={urlForImage(project.image).width(800).height(640).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              // TODO: add a cover image for this project in Sanity Studio (/studio)
              <div className="aspect-video bg-gradient-to-br from-soft to-border-soft sm:aspect-auto sm:min-h-[320px]" />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";
import Responsive from "./Responsive";
import ProjectCard from "./ProjectCard";
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
    <section className="py-24">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-1.44px] sm:text-[48px]">
          {content.headline}
        </h2>
        <Responsive
          mobile={content.subheadlineMobile}
          desktop={content.subheadline}
          className="mt-4 text-[16px] leading-[1.4] tracking-[-0.32px] text-muted"
        />
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-5xl gap-x-6 gap-y-14 px-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project._id} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {showSeeAll && (
        <Reveal className="mx-auto mt-14 flex max-w-5xl justify-center px-6">
          <Link
            href={content.cta.href}
            className="flex h-12 w-full items-center justify-center rounded-full bg-ink px-6 text-[16px] font-medium tracking-[-0.32px] text-white transition-transform hover:scale-[1.03] sm:w-fit"
          >
            {content.cta.label}
          </Link>
        </Reveal>
      )}
    </section>
  );
}

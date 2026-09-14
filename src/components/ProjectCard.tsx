import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityProject } from "@/sanity/lib/getProjects";

export default function ProjectCard({ project }: { project: SanityProject }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[554/415] overflow-hidden rounded-[40px] bg-soft">
        {project.image ? (
          <Image
            src={urlForImage(project.image).width(1108).height(830).url()}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // TODO: add a cover image for this project in Sanity Studio (/studio)
          <div className="absolute inset-0 bg-gradient-to-br from-soft to-border-soft" />
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <h3 className="text-[20px] font-medium tracking-[-0.4px] sm:text-[24px] sm:tracking-[-0.48px]">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full bg-soft px-4 py-2 text-[14px] tracking-[-0.28px] text-muted-2 sm:text-[16px]">
          {project.category}
        </span>
      </div>
    </Link>
  );
}

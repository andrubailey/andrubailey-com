import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { projects as fallbackProjects } from "@/lib/content";
import { client } from "./client";
import { PROJECTS_QUERY } from "./queries";

export type SanityProject = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: SanityImageSource | null;
  link: string;
};

export async function getProjects(): Promise<SanityProject[]> {
  try {
    const projects = await client.fetch<SanityProject[]>(PROJECTS_QUERY);
    if (projects?.length) return projects;
  } catch {
    // Sanity not reachable (e.g. offline build) — fall through to static content.
  }

  return fallbackProjects.map((project) => ({
    _id: project.slug,
    title: project.title,
    slug: project.slug,
    category: project.category,
    description: project.description,
    image: null,
    link: project.href,
  }));
}

import type { SanityImageSource } from "@sanity/image-url";
import { projects as fallbackProjects } from "@/lib/content";
import { client } from "./client";
import { PROJECT_QUERY, PROJECT_SLUGS_QUERY, PROJECTS_QUERY } from "./queries";

export type SanityProject = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: SanityImageSource | null;
  link: string;
};

export type SanityProjectDetail = SanityProject & {
  client?: string;
  projectDate?: string;
  backgroundHeadline?: string;
  backgroundBody?: string;
  backgroundImages?: SanityImageSource[];
  resultHeadline?: string;
  resultBody?: string;
  resultImages?: SanityImageSource[];
};

function fallbackToSummary(project: (typeof fallbackProjects)[number]): SanityProject {
  return {
    _id: project.slug,
    title: project.title,
    slug: project.slug,
    category: project.category,
    description: project.description,
    image: null,
    link: project.href,
  };
}

export async function getProjects(): Promise<SanityProject[]> {
  try {
    const projects = await client.fetch<SanityProject[]>(
      PROJECTS_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
    if (projects?.length) return projects;
  } catch {
    // Sanity not reachable (e.g. offline build), fall through to static content.
  }

  return fallbackProjects.map(fallbackToSummary);
}

export async function getProject(slug: string): Promise<SanityProjectDetail | null> {
  try {
    const project = await client.fetch<SanityProjectDetail | null>(
      PROJECT_QUERY,
      { slug },
      { next: { revalidate: 60 } },
    );
    if (project) return project;
  } catch {
    // Sanity not reachable, fall through to static content.
  }

  const fallback = fallbackProjects.find((p) => p.slug === slug);
  if (!fallback) return null;

  return {
    ...fallbackToSummary(fallback),
    client: fallback.client,
    projectDate: fallback.date,
    backgroundHeadline: fallback.backgroundHeadline,
    backgroundBody: fallback.backgroundBody,
    resultHeadline: fallback.resultHeadline,
    resultBody: fallback.resultBody,
  };
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const rows = await client.fetch<{ slug: string }[]>(
      PROJECT_SLUGS_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
    if (rows?.length) return rows.map((r) => r.slug);
  } catch {
    // Sanity not reachable, fall through to static content.
  }

  return fallbackProjects.map((p) => p.slug);
}

import { experience as fallbackExperience } from "@/lib/content";
import { client } from "./client";
import { EXPERIENCE_QUERY } from "./queries";

export type SanityExperience = {
  _id: string;
  role: string;
  company: string;
  period: string;
};

export async function getExperience(): Promise<SanityExperience[]> {
  try {
    const experience = await client.fetch<SanityExperience[]>(
      EXPERIENCE_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
    if (experience?.length) return experience;
  } catch {
    // Sanity not reachable (e.g. offline build), fall through to static content.
  }

  return fallbackExperience.map((item, i) => ({
    _id: `fallback-${i}`,
    role: item.role,
    company: item.company,
    period: item.period,
  }));
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ProjectStory from "@/components/ProjectStory";
import { urlForImage } from "@/sanity/lib/image";
import { getProject, getProjects, getProjectSlugs } from "@/sanity/lib/getProjects";
import { getSiteContent } from "@/sanity/lib/getSiteContent";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await getProject(slug);
  if (!project) return {};
  return { title: `${project.title} | Andru Bailey` };
}

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const [project, allProjects, content] = await Promise.all([
    getProject(slug),
    getProjects(),
    getSiteContent(),
  ]);

  if (!project) notFound();

  const more = allProjects.filter((p) => p.slug !== slug).slice(0, 2);
  const dateLabel = formatDate(project.projectDate);

  return (
    <>
      <Nav />
      <ViewTransition>
        <main className="flex-1">
          <section className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
            <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-[40px] font-semibold leading-[1.1] tracking-[-1.6px] sm:text-[64px] sm:tracking-[-2.56px]">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-xl text-[16px] leading-[1.4] tracking-[-0.32px] text-muted">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-8 sm:gap-10">
                <div>
                  <p className="text-[14px] tracking-[-0.28px] text-muted">Category</p>
                  <p className="mt-2 text-[16px] font-medium tracking-[-0.32px]">
                    {project.category}
                  </p>
                </div>
                {project.client && (
                  <div>
                    <p className="text-[14px] tracking-[-0.28px] text-muted">Client</p>
                    <p className="mt-2 text-[16px] font-medium tracking-[-0.32px]">
                      {project.client}
                    </p>
                  </div>
                )}
                {dateLabel && (
                  <div>
                    <p className="text-[14px] tracking-[-0.28px] text-muted">Date</p>
                    <p className="mt-2 text-[16px] font-medium tracking-[-0.32px]">
                      {dateLabel}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal
              delay={100}
              className="relative mt-12 aspect-[1120/642] overflow-hidden rounded-[40px] bg-soft"
            >
              {project.image ? (
                <Image
                  src={urlForImage(project.image).width(1600).height(918).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                // TODO: add a cover image for this project in Sanity Studio (/studio)
                <div className="absolute inset-0 bg-gradient-to-br from-soft to-border-soft" />
              )}
            </Reveal>

            {project.link && (
              <Reveal delay={160} className="mt-8 flex justify-center sm:justify-start">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-[16px] font-medium tracking-[-0.32px] text-ink transition-transform hover:scale-[1.03]"
                >
                  Visit live site
                </a>
              </Reveal>
            )}
          </section>

          {project.backgroundHeadline && project.backgroundBody && (
            <ProjectStory
              eyebrow="Background"
              headline={project.backgroundHeadline}
              body={project.backgroundBody}
              images={project.backgroundImages}
            />
          )}

          {project.resultHeadline && project.resultBody && (
            <ProjectStory
              eyebrow="Result"
              headline={project.resultHeadline}
              body={project.resultBody}
              images={project.resultImages}
            />
          )}

          {more.length > 0 && (
            <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
              <Reveal>
                <h2 className="text-[28px] font-semibold tracking-[-1px] sm:text-[36px]">
                  More work
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2">
                {more.map((p, i) => (
                  <Reveal key={p._id} delay={i * 80}>
                    <ProjectCard project={p} />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200} className="mt-10 flex justify-center">
                <Link
                  href="/work"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border-soft bg-white px-6 text-[16px] font-medium tracking-[-0.32px] text-ink transition-transform hover:scale-[1.03]"
                >
                  See all work
                </Link>
              </Reveal>
            </section>
          )}
        </main>
      </ViewTransition>
      <Footer content={content.footer} />
    </>
  );
}

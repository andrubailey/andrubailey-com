import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import { getProjects } from "@/sanity/lib/getProjects";
import { getSiteContent } from "@/sanity/lib/getSiteContent";

export const metadata: Metadata = {
  title: "Work — Andru Bailey",
};

export default async function WorkPage() {
  const [projects, content] = await Promise.all([getProjects(), getSiteContent()]);

  return (
    <>
      <Nav ctaLabel={content.hero.cta.label} />
      <main className="flex-1">
        <Works content={content.works} projects={projects} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}

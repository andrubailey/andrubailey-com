import type { Metadata } from "next";
import { ViewTransition } from "react";
import Nav from "@/components/Nav";
import AboutHero from "@/components/AboutHero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/sanity/lib/getSiteContent";
import { getExperience } from "@/sanity/lib/getExperience";

export const metadata: Metadata = {
  title: "About | Andru Bailey",
};

export default async function AboutPage() {
  const [content, experience] = await Promise.all([getSiteContent(), getExperience()]);

  return (
    <>
      <Nav ctaLabel={content.hero.cta.label} />
      <ViewTransition>
        <main className="flex-1">
          <AboutHero content={content.about.hero} />
          <About content={content.about} />
          <WorkExperience items={experience} />
        </main>
      </ViewTransition>
      <Footer content={content.footer} />
    </>
  );
}

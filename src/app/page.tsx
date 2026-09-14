import { ViewTransition } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatYouDo from "@/components/WhatYouDo";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { getProjects } from "@/sanity/lib/getProjects";
import { getSiteContent } from "@/sanity/lib/getSiteContent";

export default async function Home() {
  const [projects, content] = await Promise.all([getProjects(), getSiteContent()]);

  return (
    <>
      <Nav />
      <ViewTransition>
        <main className="flex-1">
          <Hero content={content.hero} featured={projects[0]} />
          <WhatYouDo content={content.whatYouDo} />
          <Works content={content.works} projects={projects} limit={2} />
          <Process content={content.process} />
          <Faq items={content.faqs} />
        </main>
      </ViewTransition>
      <Footer content={content.footer} />
    </>
  );
}

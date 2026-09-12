import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatYouDo from "@/components/WhatYouDo";
import About from "@/components/About";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { getProjects } from "@/sanity/lib/getProjects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero featured={projects[0]} />
        <WhatYouDo />
        <About />
        <Works projects={projects} />
        <Process />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

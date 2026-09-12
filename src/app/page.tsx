import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatYouDo from "@/components/WhatYouDo";
import About from "@/components/About";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatYouDo />
        <About />
        <Works />
        <Process />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

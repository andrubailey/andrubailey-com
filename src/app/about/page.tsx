import type { Metadata } from "next";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/sanity/lib/getSiteContent";

export const metadata: Metadata = {
  title: "About | Andru Bailey",
};

export default async function AboutPage() {
  const content = await getSiteContent();

  return (
    <>
      <Nav ctaLabel={content.hero.cta.label} />
      <main className="flex-1">
        <About content={content.about} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}

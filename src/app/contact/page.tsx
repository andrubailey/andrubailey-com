import type { Metadata } from "next";
import { ViewTransition } from "react";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/sanity/lib/getSiteContent";

export const metadata: Metadata = {
  title: "Contact | Andru Bailey",
};

export default async function ContactPage() {
  const content = await getSiteContent();

  return (
    <>
      <Nav ctaLabel={content.hero.cta.label} />
      <ViewTransition>
        <main className="flex-1">
          <Contact content={content.contact} />
        </main>
      </ViewTransition>
      <Footer content={content.footer} />
    </>
  );
}

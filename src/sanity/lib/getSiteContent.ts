import {
  about as fallbackAbout,
  faqs as fallbackFaqs,
  footer as fallbackFooter,
  hero as fallbackHero,
  process as fallbackProcess,
  whatYouDo as fallbackWhatYouDo,
  works as fallbackWorks,
} from "@/lib/content";
import { client } from "./client";
import { FAQS_QUERY, PROCESS_STEPS_QUERY, SITE_SETTINGS_QUERY } from "./queries";

type PortableTextSpan = { _type: "span"; text: string };
type PortableTextBlock = { _type: string; children?: PortableTextSpan[] };

type RawSiteSettings = {
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  ctaLabel?: string;
  whatYouDoHeadline?: string;
  whatYouDoSubheadline?: string;
  whatYouDoSubheadlineMobile?: string;
  whatYouDoBody?: string;
  whatYouDoBodyMobile?: string;
  aboutHeadline?: string;
  aboutBody?: PortableTextBlock[];
  aboutBodyMobile?: PortableTextBlock[];
  aboutCtaLead?: string;
  aboutCtaLeadMobile?: string;
  worksHeadline?: string;
  worksSubheadline?: string;
  worksSubheadlineMobile?: string;
  processHeadline?: string;
  processSubheadline?: string;
  processSubheadlineMobile?: string;
  footerHeadline?: string;
  contactEmail?: string;
  socialLinks?: { label: string; href: string }[];
  footerCredit?: string;
} | null;

type RawProcessStep = {
  _id: string;
  title: string;
  description: string;
  descriptionMobile?: string;
};
type RawFaq = { _id: string; question: string; answer: string; answerMobile?: string };

function portableTextToParagraphs(blocks?: PortableTextBlock[]): string[] {
  if (!blocks?.length) return [];
  return blocks
    .filter((block) => block._type === "block")
    .map((block) =>
      (block.children ?? []).map((child) => child.text ?? "").join(""),
    )
    .filter(Boolean);
}

async function safeFetch<T>(query: Parameters<typeof client.fetch>[0]): Promise<T | null> {
  try {
    return await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

export async function getSiteContent() {
  const [settings, processSteps, faqItems] = await Promise.all([
    safeFetch<RawSiteSettings>(SITE_SETTINGS_QUERY),
    safeFetch<RawProcessStep[]>(PROCESS_STEPS_QUERY),
    safeFetch<RawFaq[]>(FAQS_QUERY),
  ]);

  const ctaLabel = settings?.ctaLabel || fallbackHero.cta.label;
  const aboutParagraphs = portableTextToParagraphs(settings?.aboutBody);
  const aboutParagraphsMobile = portableTextToParagraphs(settings?.aboutBodyMobile);

  const whatYouDoSubheadline = settings?.whatYouDoSubheadline || fallbackWhatYouDo.subheadline;
  const whatYouDoBody = settings?.whatYouDoBody || fallbackWhatYouDo.body;
  const aboutBody = aboutParagraphs.length ? aboutParagraphs : fallbackAbout.body;
  const aboutCtaLead = settings?.aboutCtaLead || fallbackAbout.ctaLead;
  const worksSubheadline = settings?.worksSubheadline || fallbackWorks.subheadline;
  const processSubheadline = settings?.processSubheadline || fallbackProcess.subheadline;

  return {
    hero: {
      eyebrow: settings?.heroEyebrow || fallbackHero.eyebrow,
      headline: settings?.heroHeadline || fallbackHero.headline,
      subheadline: settings?.heroSubheadline || fallbackHero.subheadline,
      cta: { label: ctaLabel, href: fallbackHero.cta.href },
    },
    whatYouDo: {
      headline: settings?.whatYouDoHeadline || fallbackWhatYouDo.headline,
      subheadline: whatYouDoSubheadline,
      subheadlineMobile:
        settings?.whatYouDoSubheadlineMobile ||
        fallbackWhatYouDo.subheadlineMobile ||
        whatYouDoSubheadline,
      body: whatYouDoBody,
      bodyMobile: settings?.whatYouDoBodyMobile || fallbackWhatYouDo.bodyMobile || whatYouDoBody,
      cta: fallbackWhatYouDo.cta,
    },
    about: {
      headline: settings?.aboutHeadline || fallbackAbout.headline,
      body: aboutBody,
      bodyMobile: aboutParagraphsMobile.length ? aboutParagraphsMobile : fallbackAbout.bodyMobile,
      ctaLead: aboutCtaLead,
      ctaLeadMobile: settings?.aboutCtaLeadMobile || fallbackAbout.ctaLeadMobile || aboutCtaLead,
      cta: { label: ctaLabel, href: fallbackAbout.cta.href },
    },
    works: {
      headline: settings?.worksHeadline || fallbackWorks.headline,
      subheadline: worksSubheadline,
      subheadlineMobile:
        settings?.worksSubheadlineMobile || fallbackWorks.subheadlineMobile || worksSubheadline,
      cta: fallbackWorks.cta,
    },
    process: {
      headline: settings?.processHeadline || fallbackProcess.headline,
      subheadline: processSubheadline,
      subheadlineMobile:
        settings?.processSubheadlineMobile ||
        fallbackProcess.subheadlineMobile ||
        processSubheadline,
      steps: processSteps?.length
        ? processSteps.map((step, i) => ({
            number: String(i + 1).padStart(2, "0"),
            title: step.title,
            description: step.description,
            descriptionMobile: step.descriptionMobile || step.description,
          }))
        : fallbackProcess.steps.map((step) => ({
            ...step,
            descriptionMobile: step.descriptionMobile || step.description,
          })),
    },
    faqs: faqItems?.length
      ? faqItems.map((f) => ({
          q: f.question,
          a: f.answer,
          aMobile: f.answerMobile || f.answer,
        }))
      : fallbackFaqs.map((f) => ({ q: f.q, a: f.a, aMobile: f.aMobile || f.a })),
    footer: {
      headline: settings?.footerHeadline || fallbackFooter.headline,
      cta: { label: ctaLabel, href: fallbackFooter.cta.href },
      name: fallbackFooter.name,
      pages: fallbackFooter.pages,
      social: settings?.socialLinks?.length ? settings.socialLinks : fallbackFooter.social,
      email: settings?.contactEmail || fallbackFooter.email,
      credit: settings?.footerCredit || fallbackFooter.credit,
    },
  };
}

export type SiteContent = Awaited<ReturnType<typeof getSiteContent>>;

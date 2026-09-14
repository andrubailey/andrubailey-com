import {
  about as fallbackAbout,
  contact as fallbackContact,
  faqs as fallbackFaqs,
  footer as fallbackFooter,
  hero as fallbackHero,
  process as fallbackProcess,
  whatYouDo as fallbackWhatYouDo,
  works as fallbackWorks,
} from "@/lib/content";
import { client } from "./client";
import { FAQS_QUERY, PROCESS_STEPS_QUERY, SITE_SETTINGS_QUERY } from "./queries";

type RawSiteSettings = {
  heroHeadline?: string;
  heroSubheadline?: string;
  ctaLabel?: string;
  whatYouDoHeadline?: string;
  whatYouDoSubheadline?: string;
  whatYouDoBody?: string;
  aboutHeroHeading?: string;
  aboutHeroTagline?: string;
  aboutSections?: { headline?: string; body?: string }[];
  aboutCtaLead?: string;
  worksHeadline?: string;
  worksSubheadline?: string;
  worksSubheadlineMobile?: string;
  processHeadline?: string;
  processSubheadline?: string;
  processSubheadlineMobile?: string;
  footerHeadline?: string;
  contactPageEyebrow?: string;
  contactPageHeadline?: string;
  contactInfoTitle?: string;
  contactInfoBody?: string;
  contactBookingLabel?: string;
  contactBookingHref?: string;
  contactBookingDuration?: string;
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

  const worksSubheadline = settings?.worksSubheadline || fallbackWorks.subheadline;
  const processSubheadline = settings?.processSubheadline || fallbackProcess.subheadline;

  return {
    hero: {
      headline: settings?.heroHeadline || fallbackHero.headline,
      subheadline: settings?.heroSubheadline || fallbackHero.subheadline,
      cta: { label: ctaLabel, href: fallbackHero.cta.href },
    },
    whatYouDo: {
      headline: settings?.whatYouDoHeadline || fallbackWhatYouDo.headline,
      subheadline: settings?.whatYouDoSubheadline || fallbackWhatYouDo.subheadline,
      body: settings?.whatYouDoBody || fallbackWhatYouDo.body,
      cta: fallbackWhatYouDo.cta,
    },
    about: {
      hero: {
        heading: settings?.aboutHeroHeading || fallbackAbout.hero.heading,
        tagline: settings?.aboutHeroTagline || fallbackAbout.hero.tagline,
        cta: { label: ctaLabel, href: fallbackAbout.hero.cta.href },
      },
      sections:
        settings?.aboutSections?.length
          ? settings.aboutSections.map((s) => ({
              headline: s.headline || "",
              body: s.body || "",
            }))
          : fallbackAbout.sections,
      ctaLead: settings?.aboutCtaLead || fallbackAbout.ctaLead,
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
    contact: {
      eyebrow: settings?.contactPageEyebrow || fallbackContact.eyebrow,
      headline: settings?.contactPageHeadline || fallbackContact.headline,
      infoTitle: settings?.contactInfoTitle || fallbackContact.infoTitle,
      infoBody: settings?.contactInfoBody || fallbackContact.infoBody,
      bookingLabel: settings?.contactBookingLabel || fallbackContact.bookingLabel,
      bookingHref: settings?.contactBookingHref || fallbackContact.bookingHref,
      bookingDuration: settings?.contactBookingDuration || fallbackContact.bookingDuration,
    },
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

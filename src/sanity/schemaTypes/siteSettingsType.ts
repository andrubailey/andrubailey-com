import { defineField, defineType } from "sanity";

const MOBILE_HINT = "Shorter mobile version, aim for 3 lines or less.";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero sub-headline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ctaLabel",
      title: "Primary CTA label",
      description: "Used across the nav, hero, about, and footer buttons.",
      type: "string",
    }),
    defineField({
      name: "whatYouDoHeadline",
      title: "\"How I can help\" headline",
      type: "string",
    }),
    defineField({
      name: "whatYouDoSubheadline",
      title: "\"How I can help\" sub-headline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "whatYouDoBody",
      title: "\"How I can help\" highlighted body",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutHeroHeading",
      title: "About page — hero heading",
      description: "e.g. \"Hi, I'm [Name].\"",
      type: "string",
    }),
    defineField({
      name: "aboutHeroTagline",
      title: "About page — hero tagline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "aboutSections",
      title: "About page — story sections",
      description: "Each section renders as its own headline + paragraph block.",
      type: "array",
      of: [
        {
          type: "object",
          name: "aboutSection",
          fields: [
            defineField({ name: "headline", title: "Headline", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
          ],
          preview: {
            select: { title: "headline" },
          },
        },
      ],
    }),
    defineField({
      name: "aboutCtaLead",
      title: "About CTA lead-in line",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "worksHeadline",
      title: "Works section headline",
      type: "string",
    }),
    defineField({
      name: "worksSubheadline",
      title: "Works section sub-headline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "worksSubheadlineMobile",
      title: "Works section sub-headline (mobile)",
      description: MOBILE_HINT,
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "processHeadline",
      title: "Process section headline",
      type: "string",
    }),
    defineField({
      name: "processSubheadline",
      title: "Process section sub-headline",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "processSubheadlineMobile",
      title: "Process section sub-headline (mobile)",
      description: MOBILE_HINT,
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "footerHeadline",
      title: "Footer CTA headline",
      type: "string",
    }),
    defineField({
      name: "contactPageEyebrow",
      title: "Contact page eyebrow",
      type: "string",
    }),
    defineField({
      name: "contactPageHeadline",
      title: "Contact page headline",
      type: "string",
    }),
    defineField({
      name: "contactInfoTitle",
      title: "Contact page info card title",
      type: "string",
    }),
    defineField({
      name: "contactInfoBody",
      title: "Contact page info card body",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "contactBookingLabel",
      title: "Contact page booking button label",
      type: "string",
    }),
    defineField({
      name: "contactBookingHref",
      title: "Contact page booking button URL",
      description: "Link to a scheduling tool (Calendly, Cal.com, etc.).",
      type: "url",
    }),
    defineField({
      name: "contactBookingDuration",
      title: "Contact page booking duration caption",
      type: "string",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "href", type: "url", title: "URL" }),
          ],
        },
      ],
    }),
    defineField({
      name: "footerCredit",
      title: "Footer credit line",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});

import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero eyebrow",
      type: "string",
    }),
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
      name: "aboutHeadline",
      title: "About headline",
      type: "string",
    }),
    defineField({
      name: "aboutBody",
      title: "About body",
      description: "One paragraph per block.",
      type: "array",
      of: [{ type: "block", styles: [], lists: [], marks: {} }],
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
      name: "footerHeadline",
      title: "Footer CTA headline",
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

import { defineField, defineType } from "sanity";

export const processStepType = defineType({
  name: "processStep",
  title: "Process Step",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descriptionMobile",
      title: "Description (mobile)",
      description: "Shorter mobile version, aim for 3 lines or less.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "order" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `Step ${subtitle}` }),
  },
});

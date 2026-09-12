import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("processStep")
        .title("Process Steps")
        .child(
          S.documentTypeList("processStep").defaultOrdering([
            { field: "order", direction: "asc" },
          ]),
        ),
      S.documentTypeListItem("faq")
        .title("FAQs")
        .child(
          S.documentTypeList("faq").defaultOrdering([
            { field: "order", direction: "asc" },
          ]),
        ),
    ]);

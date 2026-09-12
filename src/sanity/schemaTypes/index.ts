import type { SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { siteSettingsType } from "./siteSettingsType";
import { processStepType } from "./processStepType";
import { faqType } from "./faqType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettingsType, projectType, processStepType, faqType],
};

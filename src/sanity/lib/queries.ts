import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(order asc, _createdAt asc){
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    image,
    link
  }`,
);

export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0]`,
);

export const PROCESS_STEPS_QUERY = defineQuery(
  `*[_type == "processStep"] | order(order asc){
    _id,
    title,
    description,
    descriptionMobile
  }`,
);

export const FAQS_QUERY = defineQuery(
  `*[_type == "faq"] | order(order asc){
    _id,
    question,
    answer,
    answerMobile
  }`,
);

export const EXPERIENCE_QUERY = defineQuery(
  `*[_type == "experience"] | order(order asc){
    _id,
    role,
    company,
    period
  }`,
);

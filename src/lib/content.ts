export const nav = {
  name: "Andru Bailey",
  links: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const hero = {
  headline: "Your Homes Are Exceptional. Your Website Should Make That Obvious.",
  subheadline:
    "I help custom home builders turn their website into the proof of quality buyers need before they trust you with a multi million dollar project.",
  cta: { label: "Get started", href: "/contact" },
};

export const about = {
  hero: {
    heading: "Hi, I'm Andru Bailey.",
    tagline: "I know firsthand how buyers make up their minds long before they call you.",
    cta: { label: "Get started", href: "/contact" },
  },
  sections: [
    {
      headline: "Two careers, one insight.",
      body: "Hey, I'm Andru Bailey. I've spent close to eight years designing and building websites, and after that, a couple of years in real estate. I wasn't in it long and I didn't sell much. But I learned something in those two years I've used ever since: the same property, presented two different ways, becomes two different prices in a buyer's head. Nothing about the building changes. Only what the buyer believes about it.",
    },
    {
      headline: "The problem I keep seeing.",
      body: "That's what I see on most builder sites. The homes are extraordinary. The website makes them look like everyone else's. If you're like most builders I talk to, you've got questions nobody's given you a straight answer to: Which projects should lead? Is my photography actually doing the work justice? How much should I explain the process versus just showing the homes? Do I put anything about the price on there? Do I even need a good site if most of my work comes from referrals? That last one comes up constantly, and the answer is yes: a referral looks you up before they call. Your site isn't out finding you leads. It's deciding whether the ones you already have take you seriously.",
    },
    {
      headline: "How I can help.",
      body: "The good news is you don't have to work any of this out on your own. That's my job. I'll go through your site the way a serious buyer would, tell you exactly what's costing you, and if it makes sense from there, build you one that finally matches the work.",
    },
  ],
  ctaLead:
    "Send me your site and I'll tell you the three specific things costing you trust with serious buyers, in writing, within 48 hours.",
  cta: { label: "Get started", href: "/contact" },
};

export const workExperience = {
  eyebrow: "Background",
  headline: "A quick look at where I've worked.",
};

export type Experience = { role: string; company: string; period: string };

// TODO: fill in real company names and dates via Sanity Studio (/studio).
export const experience: Experience[] = [
  {
    role: "Web Designer",
    company: "[Add company name, or \"Self-employed\"]",
    period: "[Add years]",
  },
  {
    role: "Real Estate Agent",
    company: "[Add brokerage name]",
    period: "[Add years]",
  },
];

export const whatYouDo = {
  headline: "Here's How I Can Help",
  subheadline:
    "I handle everything you need to plan, design, build, and launch a site you're glad to send people to.",
  body: "Site audits, positioning and messaging, page maps, copywriting, design, project and portfolio pages, photography direction, development, CMS setup so you can add finished homes yourself, launch, and ongoing updates.",
  cta: { label: "About me", href: "/about" },
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  href: string;
  image?: string;
};

// TODO: this will move into Sanity so new projects can be added without a code change.
export const projects: Project[] = [
  {
    slug: "patriot-homes",
    category: "Home Builder",
    title: "Patriot Homes",
    description:
      "A custom home builder site built to let the craftsmanship carry the page.",
    href: "https://patriothomes.ca",
  },
];

export const works = {
  headline: "Real homes, presented right.",
  subheadline:
    "A collection of recent projects where clear positioning, strong design, and real results come together.",
  subheadlineMobile: "Recent projects where clear positioning and strong design come together.",
  cta: { label: "See All Work", href: "/work" },
};

export const process = {
  headline: "How We'd Work Together",
  subheadline:
    "A simple, transparent process designed to keep things clear, efficient, and stress-free from start to finish.",
  subheadlineMobile: "A simple, transparent process, clear and stress-free start to finish.",
  steps: [
    {
      number: "01",
      title: "Craft Audit",
      description:
        "I'll go through your site the way a serious buyer would, and send you exactly what's costing you trust: in writing, within 48 hours.",
      descriptionMobile:
        "I'll audit your site like a serious buyer would, in writing, within 48 hours.",
    },
    {
      number: "02",
      title: "Design & Build",
      description:
        "I'll handle the positioning, design and build from there, so the site works as hard for you as your reputation does.",
      descriptionMobile:
        "I'll handle positioning, design, and build, so your site works as hard as you do.",
    },
    {
      number: "03",
      title: "Ongoing Care",
      description:
        "I'll keep it current as you finish homes, so the site never falls behind the work again.",
      descriptionMobile: "I'll keep it current as you finish homes, so it never falls behind.",
    },
  ],
};

export const faqs = [
  {
    q: "Most of my work comes from referrals. Do I really need a website?",
    a: "Yes, not for the reason you'd expect. Your site isn't out finding leads, it's deciding whether the referrals you already have take you seriously. Someone hears your name at dinner, looks you up that night, and forms an opinion before you ever speak. The site's job is making sure that opinion matches the work.",
    aMobile:
      "Yes, your site isn't finding leads, it's deciding whether the referrals you already have take you seriously.",
  },
  {
    q: "Why do I have to pay for an audit before you'll quote me a build?",
    a: "Because quoting a redesign without looking properly is guesswork, and you'd be the one paying for the guess. The Craft Audit tells us both exactly what's wrong before either of us commits to anything, and the findings are yours whether or not we work together. If you move forward within 60 days, the fee comes off the build.",
    aMobile:
      "Quoting blind is guesswork you'd pay for. The audit shows exactly what's wrong first, and it's yours either way.",
  },
  {
    q: "How does your pricing work?",
    a: "Two stages. The Craft Audit is a flat $2,000: a 90 minute session and a written brief within 48 hours. Full builds start at $10,000, with the final number depending on scope, mostly how many project pages we're building and how much of the copy I'm writing. If you move ahead with a build within 60 days of the audit, the $2,000 comes off the price.",
    aMobile:
      "Two stages: a flat $2,000 audit, then builds starting at $10,000. The audit fee comes off if you move forward.",
  },
  {
    q: "Have you built sites for custom home builders before?",
    a: "I've built for a home developer and for real estate firms, and most of my work has been with companies whose reputation was better than their website. It's the same problem in a different trade. If you want a portfolio full of custom builders, I'm not that yet. What I'd offer instead is the audit: a fixed fee to see exactly how I think about your site, before you commit to anything bigger.",
    aMobile:
      "I've built for real estate firms, not custom builders yet. The audit shows how I think, before you commit further.",
  },
  {
    q: "You're one person. What if you get busy, or sick, or disappear?",
    a: "Fair question. One person is also why you're not handed to an assistant after the sales call. You're working with me from start to finish. Payments are tied to milestones, so you're never paying far ahead of delivered work, and everything is built on standard tools you own rather than a proprietary platform. You're never locked to me.",
    aMobile:
      "Fair question. You work with me start to finish, pay by milestone, and own everything. You're never locked in.",
  },
  {
    q: "Do I need professional photography first?",
    a: "It's the one thing I can't substitute for. Design can make good photography look exceptional. It can't make phone photos look like a $3M home. If you don't have professional shots yet, that's where I'd spend the money before hiring me. I'm glad to point you toward photographers who shoot this kind of work.",
    aMobile:
      "Yes, design can elevate great photos, but it can't fix phone shots. Get photography first; I can recommend someone.",
  },
  {
    q: "How long does it take, and how much of my time?",
    a: "Most builds run 4-6 weeks from approved plan to launch. Your side of it is around four hours total: the 90-minute session, an hour pulling together project details and photos, and one round of feedback on the homepage. After that you're reviewing, not working.",
    aMobile: "4-6 weeks from approved plan to launch. Your time: about four hours total, then just reviewing.",
  },
  {
    q: "Will I be able to add new homes myself?",
    a: "Yes, and that's built in deliberately. When a project wraps and the photos come back, you add it in a few minutes. No emailing me, no invoice for a content update.",
    aMobile: "Yes, by design. When a project wraps, you add it yourself in minutes, no emails or invoices.",
  },
];

export const contact = {
  eyebrow: "Get in touch",
  headline: "Let's build a site that finally matches your work.",
  infoTitle: "Ready to talk now?",
  infoBody:
    "A short call to understand your projects, align on scope, and see if I'm the right fit before moving forward.",
  bookingLabel: "Book a call",
  bookingHref: "https://cal.com/andru-bailey/strategy?overlayCalendar=true",
  bookingDuration: "10-15 minutes",
};

export const footer = {
  headline: "Need a site that shows the work the way it deserves?",
  cta: { label: "Get started", href: "/contact" },
  name: "Andru Bailey",
  pages: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
  ],
  // TODO: fill in the accounts you actually use, drop the rest.
  social: [
    { label: "X (Twitter)", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  email: "hello@andrubailey.com",
  credit: `© Andru Bailey ${new Date().getFullYear()}. All rights reserved.`,
};

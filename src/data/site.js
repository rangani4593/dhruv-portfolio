// ============================================================
//  All site content lives here. Edit this file to update text,
//  projects, skills, contact info — no need to touch components.
// ============================================================

export const profile = {
  name: "Dhruv Rangani",
  role: "AI Engineer",                       // footer + short mentions
  title: "AI Engineer & Full-Stack Developer", // hero / meta / long mentions
  initials: "DR",
  avatar: "/dhruv-avatar.jpg",
  email: "dhruvpatel0040@gmail.com",
  phone: "+91 99985 36434",
  phoneHref: "+919998536434",
  location: "India · Available remotely",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export const stats = [
  { value: 12, suffix: "+", label: "Projects delivered" },
  { value: 8, suffix: "+", label: "Frameworks & stacks" },
  { value: 100, suffix: "", label: "% ownership, end to end" },
];

export const clients = ["Octavvio", "Xiom Healthcare", "ReferBell", "Vargo Outdoors", "Promom", "Danny Goldberg"];

export const marquee = [
  "AI Engineering", "React", "Vue 3", "Next.js", "Astro", "Remix", "Node.js", "TypeScript",
  "Shopify Apps", "Prisma", "Tailwind", "AWS",
];

export const homeServices = [
  { icon: "ai", title: "AI Engineering", text: "AI image & video generation, LLM integration, prompt flows and digital-twin products wired into real UIs." },
  { icon: "blocks", title: "Full-Stack Web Apps", text: "React, Vue 3, Next.js and Astro front-ends backed by Node.js/Express, Prisma and SQL/NoSQL databases." },
  { icon: "shopify", title: "Shopify Apps", text: "Remix + Polaris apps published on the Shopify App Store — store locators, referrals, memberships, AI tools." },
  { icon: "cms", title: "CMS Websites", text: "Fast Astro + React marketing sites powered by Sanity CMS, deployed on Vercel." },
  { icon: "dashboard", title: "Dashboards & Admin Panels", text: "HR, inventory and reporting dashboards with charts, maps, role-based access and real-time sync." },
  { icon: "plug", title: "APIs & Integrations", text: "REST APIs, AWS S3 uploads, email pipelines, cron jobs and third-party integrations that just work." },
];

const IMG = "https://images.unsplash.com/";
const imgOpts = "?q=80&w=1600&auto=format&fit=crop";

export const projects = [
  {
    img: IMG + "photo-1620712943543-bcc4688e7485" + imgOpts, tag: "AI SaaS · React",
    title: "Octavvio — AI Leadership Video Platform",
    text: "A state-of-the-art AI leadership-communication platform. Executives create a digital twin, then turn a written brief into a broadcast-ready video in hours — premium dark UI, video generation flows, pricing tiers and testimonials.",
    chips: ["React", "AI Video", "Digital Twin", "SaaS"],
    links: [{ label: "Live site", href: "https://octavvio.com/" }],
  },
  {
    img: IMG + "photo-1518770660439-4636190af475" + imgOpts, tag: "AI Image Generation · Shopify",
    title: "ModeStudio — AI Image Generation",
    text: "An AI image-generation Shopify app. Prompt flows, model selection, a generation queue and a responsive gallery to preview, manage and export results.",
    chips: ["React", "AI Image Gen", "Shopify", "Gallery"],
    links: [{ label: "Shopify App", href: "https://apps.shopify.com/image-generation" }],
  },
  {
    img: IMG + "photo-1553413077-190dd305871c" + imgOpts, tag: "Full-Stack · Vue 3 + Node.js",
    title: "Inventory Management System",
    text: "End-to-end inventory platform: Vue 3 + Vuex front-end with barcode scanning, Mapbox/Google Maps clustering and i18n, on a Node.js/Express + Prisma (MySQL/MongoDB) API with AWS S3 & Wasabi storage.",
    chips: ["Vue 3", "Node.js", "Prisma", "Maps", "Barcode"],
    links: [],
  },
  {
    img: IMG + "photo-1543286386-2e659306cd6c" + imgOpts, tag: "Shopify App · React",
    title: "ReferBell — Referral Program",
    text: "A Shopify referral-program app that turns customers into growth partners — reward setup, referral tracking, fraud prevention and a clean merchant dashboard.",
    chips: ["React", "Shopify", "Referrals", "Dashboard"],
    links: [{ label: "Live site", href: "https://referbell.com/" }],
  },
  {
    img: IMG + "photo-1524661135-423995f22d0b" + imgOpts, tag: "Store Locator · Shopify",
    title: "StoreScout — Store Locator",
    text: "A Shopify store-locator app. Interactive map, location search, filtering and nearest-store detection wrapped in a clean, responsive UI.",
    chips: ["React", "Shopify", "Maps API", "Geolocation"],
    links: [{ label: "Shopify App", href: "https://apps.shopify.com/store-locator-29" }],
  },
  {
    img: IMG + "photo-1504280390367-361c6d9f38f4" + imgOpts, tag: "Shopify App · Remix + Polaris",
    title: "Vargo Outdoors — Pro Member App",
    text: "A custom Shopify app for Vargo Outdoors' pro-member program: Remix + Polaris admin, Prisma/MySQL session storage, member verification with uploads to AWS S3 and scheduled jobs via node-cron.",
    chips: ["Remix", "Shopify Polaris", "Prisma", "AWS S3", "TypeScript"],
    links: [],
  },
  {
    img: IMG + "photo-1587854692152-cbe660dbde88" + imgOpts, tag: "Healthcare Platform · React",
    title: "Xiom Healthcare",
    text: "A healthcare web platform for Xiom — clean, accessible interfaces for services, information and patient-facing flows, engineered for speed and clarity.",
    chips: ["React", "Healthcare", "Responsive", "UI/UX"],
    links: [{ label: "Live site", href: "https://xiomhealthcare.com/" }],
  },
  {
    img: IMG + "photo-1522071820081-009f0129c71c" + imgOpts, tag: "Dashboard · React + TypeScript",
    title: "HR Module",
    text: "An HR management dashboard built with React 18, TypeScript and Redux Toolkit — employee records, attendance and analytics with Recharts, Tailwind UI and cookie-based auth.",
    chips: ["React", "TypeScript", "Redux Toolkit", "Recharts", "Tailwind"],
    links: [],
  },
  {
    img: IMG + "photo-1450101499163-c8848c66ca85" + imgOpts, tag: "Backend API · Node.js + TypeScript",
    title: "Promom — Warranty Registration API",
    text: "A production Node.js/Express API in TypeScript for product warranty registration: Prisma models, validated endpoints, AWS S3 receipt uploads, Nodemailer confirmations, Winston logging and Swagger docs.",
    chips: ["Node.js", "Express", "TypeScript", "Prisma", "AWS S3"],
    links: [{ label: "Live form", href: "https://promom.in/pages/register-warranty" }],
  },
  {
    img: IMG + "photo-1467232004584-a241de8bcf5d" + imgOpts, tag: "CMS Website · Astro + Sanity",
    title: "Danny Goldberg — Website",
    text: "A content-rich marketing site built with Astro + React islands, Tailwind and Sanity CMS — MDX, RSS, sitemap, Vimeo/YouTube embeds and Swiper galleries, deployed on Vercel.",
    chips: ["Astro", "React", "Sanity CMS", "Tailwind", "Vercel"],
    links: [{ label: "Live site", href: "https://dannygoldbergspeaks.com/" }],
  },
  {
    img: IMG + "photo-1451187580459-43490279c0fa" + imgOpts, tag: "CMS Website · Astro + Sanity",
    title: "GroundWork Pulse",
    text: "A second Astro + React + Sanity build with a documented UI system, Portable Text rendering, react-hook-form contact flows and a structured content model for editors.",
    chips: ["Astro", "React", "Sanity CMS", "react-hook-form"],
    links: [{ label: "Live site", href: "https://groundworkpulse.com/" }],
  },
  {
    img: IMG + "photo-1551288049-bebda4e38f71" + imgOpts, tag: "Dashboard · React",
    title: "Royal Reporting — Sync Process",
    text: "A reporting platform with a data sync process at its core. Dashboards, sync-status views and export flows for tracking records, success rates and health.",
    chips: ["React", "Dashboards", "Data Sync", "Charts"],
    links: [],
  },
];

export const skills = [
  { label: "AI Engineering & Integration", value: 90 },
  { label: "React / Next.js / Remix", value: 92 },
  { label: "Vue 3 / Vuex", value: 84 },
  { label: "Astro + Sanity CMS", value: 85 },
  { label: "Node.js / Express / TypeScript", value: 86 },
  { label: "Databases — Prisma, MySQL, MongoDB", value: 82 },
  { label: "Shopify App Development", value: 88 },
  { label: "UI / Tailwind & Motion (GSAP)", value: 87 },
];

export const timeline = [
  { year: "2025 · Now", title: "Royal Reporting — Sync Process", text: "Building dashboards and sync-status reporting UI for real-time data tracking." },
  { year: "2025", title: "Octavvio — AI Leadership Video Platform", text: "Built the front-end for an AI digital-twin video platform — brief-to-broadcast flows, pricing and a premium dark UI." },
  { year: "2025", title: "ModeStudio — AI Image Generation", text: "Shipped an AI image-generation Shopify app: prompts, queue and gallery." },
  { year: "2025", title: "Inventory Management System", text: "Delivered a full-stack Vue 3 + Node.js/Prisma platform with barcode scanning and map clustering." },
  { year: "2025", title: "Vargo Outdoors — Pro Member App", text: "Built a Remix + Polaris Shopify app with Prisma, AWS S3 uploads and cron jobs." },
  { year: "2025", title: "ReferBell & StoreScout", text: "Published two Shopify apps — a referral program and a store locator." },
  { year: "2025", title: "HR Module & Promom Warranty API", text: "A React + TypeScript HR dashboard and a Node.js/Express warranty-registration API." },
  { year: "2025", title: "Danny Goldberg & GroundWork Pulse", text: "Two Astro + React + Sanity CMS websites, deployed on Vercel." },
  { year: "2025", title: "Xiom Healthcare", text: "Built a clean, accessible healthcare web platform." },
  { year: "2025 · Start", title: "Started building for clients", text: "Began shipping production AI and full-stack products on company projects." },
];

export const values = [
  { icon: "target", title: "Detail-obsessed", text: "The small things that make a product feel premium." },
  { icon: "gauge", title: "Performance-first", text: "Fast loads and smooth 60fps interactions, even on data-heavy screens." },
  { icon: "handshake", title: "Easy to work with", text: "Clear communication, reliable delivery, genuine love for the craft." },
];

export const services = [
  { n: "01", title: "AI Engineering & Integrations", text: "AI image and video generation, digital twins, LLM & model integration, prompt flows, galleries and live previews wired into production front-ends.", tags: ["AI", "LLM", "Generation Flows"] },
  { n: "02", title: "Full-Stack Web Applications", text: "React, Vue 3, Next.js and Astro front-ends with Node.js/Express APIs, Prisma ORM and MySQL/MongoDB — designed, built and shipped end to end.", tags: ["React", "Vue 3", "Node.js", "Prisma"] },
  { n: "03", title: "Shopify App Development", text: "Public and custom Shopify apps built with Remix and Polaris — store locators, referral programs, membership programs and AI tools, with App Bridge, webhooks and session storage.", tags: ["Remix", "Polaris", "App Store"] },
  { n: "04", title: "CMS Websites", text: "Fast, SEO-ready marketing sites with Astro + React islands and Sanity CMS — structured content models, MDX, media embeds and Vercel deployment.", tags: ["Astro", "Sanity", "Vercel"] },
  { n: "05", title: "Dashboards & Admin Panels", text: "HR, inventory and reporting dashboards with charts, maps, barcode scanning, role-based access and real-time data sync.", tags: ["Dashboards", "Charts", "Maps"] },
  { n: "06", title: "Motion & Responsive UI", text: "GSAP-driven micro-interactions and pixel-perfect Tailwind layouts that adapt beautifully from mobile to ultrawide.", tags: ["GSAP", "Tailwind", "Responsive"] },
];

export const process = [
  { n: "01", icon: "search", title: "Understand", text: "Dig into the problem, users and data before writing a single line." },
  { n: "02", icon: "pen", title: "Architect", text: "Plan clean structure — components, data models and API contracts — up front." },
  { n: "03", icon: "code", title: "Build", text: "Fast, typed, accessible code across the stack with performance in mind." },
  { n: "04", icon: "rocket", title: "Polish & Ship", text: "Motion, edge cases and responsiveness until it feels genuinely great." },
];

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export const techStack = [
  { logo: DI + "react/react-original.svg", name: "React" },
  { logo: DI + "vuejs/vuejs-original.svg", name: "Vue 3" },
  { logo: DI + "nextjs/nextjs-original.svg", name: "Next.js" },
  { logo: DI + "astro/astro-original.svg", name: "Astro" },
  { logo: DI + "remix/remix-original.svg", name: "Remix" },
  { logo: DI + "typescript/typescript-original.svg", name: "TypeScript" },
  { logo: DI + "javascript/javascript-original.svg", name: "JavaScript" },
  { logo: DI + "nodejs/nodejs-original.svg", name: "Node.js" },
  { logo: DI + "express/express-original.svg", name: "Express" },
  { logo: DI + "prisma/prisma-original.svg", name: "Prisma" },
  { logo: DI + "mysql/mysql-original.svg", name: "MySQL" },
  { logo: DI + "mongodb/mongodb-original.svg", name: "MongoDB" },
  { logo: DI + "tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
  { logo: DI + "redux/redux-original.svg", name: "Redux" },
  { logo: DI + "amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS" },
  { logo: DI + "vercel/vercel-original.svg", name: "Vercel" },
  { logo: DI + "docker/docker-original.svg", name: "Docker" },
  { logo: DI + "git/git-original.svg", name: "Git" },
  { logo: DI + "vitejs/vitejs-original.svg", name: "Vite" },
  { logo: DI + "figma/figma-original.svg", name: "Figma" },
];

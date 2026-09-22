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
  { value: 100, suffix: "", label: "% hands-on work" },
];

export const clients = ["Octavvio", "Xiom Healthcare", "ReferBell", "Vargo Outdoors", "Promom", "Danny Goldberg"];

export const marquee = [
  "AI Engineering", "React", "Vue 3", "Next.js", "Astro", "Remix", "Node.js", "TypeScript",
  "Shopify Apps", "Prisma", "Tailwind", "AWS",
];

export const homeServices = [
  { icon: "ai", title: "AI Engineering", text: "I build AI image and video tools, connect LLMs to real apps and set up the prompt flows behind them." },
  { icon: "blocks", title: "Full-Stack Web Apps", text: "Front-ends in React, Vue 3, Next.js or Astro, with Node.js and Express APIs and a proper database behind them." },
  { icon: "shopify", title: "Shopify Apps", text: "Apps built with Remix and Polaris and published on the Shopify App Store: store locators, referrals, memberships and AI tools." },
  { icon: "cms", title: "CMS Websites", text: "Fast marketing sites built with Astro and React, managed in Sanity CMS and hosted on Vercel." },
  { icon: "dashboard", title: "Dashboards & Admin Panels", text: "HR, inventory and reporting dashboards with charts, maps, user roles and live data." },
  { icon: "plug", title: "APIs & Integrations", text: "REST APIs, file uploads to AWS S3, email, scheduled jobs and third-party services." },
];

const IMG = "https://images.unsplash.com/";
const imgOpts = "?q=80&w=1600&auto=format&fit=crop";

export const projects = [
  {
    img: IMG + "photo-1620712943543-bcc4688e7485" + imgOpts, tag: "AI SaaS · React",
    title: "Octavvio",
    text: "An AI video platform for business leaders. You create a digital twin of yourself, write a short brief, and get a finished video back within hours. I built the front-end: the dark UI, the video creation flow, pricing and testimonials.",
    chips: ["React", "AI Video", "Digital Twin", "SaaS"],
    links: [{ label: "Live site", href: "https://octavvio.com/" }],
  },
  {
    img: IMG + "photo-1518770660439-4636190af475" + imgOpts, tag: "AI Image Generation · Shopify",
    title: "ModeStudio",
    text: "A Shopify app that generates images with AI. Merchants write a prompt, pick a model and watch results come in through a queue. Everything lands in a gallery where they can preview, organise and download it.",
    chips: ["React", "AI Image Gen", "Shopify", "Gallery"],
    links: [{ label: "Shopify App", href: "https://apps.shopify.com/image-generation" }],
  },
  {
    img: IMG + "photo-1553413077-190dd305871c" + imgOpts, tag: "Full-Stack · Vue 3 + Node.js",
    title: "Inventory Management System",
    text: "A full inventory system I built on both sides. The Vue 3 front-end has barcode scanning, map views with clustering and multi-language support. The Node.js and Prisma API runs on MySQL and MongoDB, with files stored on AWS S3 and Wasabi.",
    chips: ["Vue 3", "Node.js", "Prisma", "Maps", "Barcode"],
    links: [],
  },
  {
    img: IMG + "photo-1543286386-2e659306cd6c" + imgOpts, tag: "Shopify App · React",
    title: "ReferBell",
    text: "A referral program app for Shopify stores. Merchants set up rewards, track who referred whom and block fake referrals, all from one simple dashboard.",
    chips: ["React", "Shopify", "Referrals", "Dashboard"],
    links: [{ label: "Live site", href: "https://referbell.com/" }],
  },
  {
    img: IMG + "photo-1524661135-423995f22d0b" + imgOpts, tag: "Store Locator · Shopify",
    title: "StoreScout",
    text: "A store locator app for Shopify. Shoppers search on a map, filter locations and find the store closest to them. It works well on phones too.",
    chips: ["React", "Shopify", "Maps API", "Geolocation"],
    links: [{ label: "Shopify App", href: "https://apps.shopify.com/store-locator-29" }],
  },
  {
    img: IMG + "photo-1504280390367-361c6d9f38f4" + imgOpts, tag: "Shopify App · Remix + Polaris",
    title: "Vargo Outdoors Pro Member App",
    text: "A custom Shopify app for the Vargo Outdoors pro member program. Members apply and upload proof, the files go to AWS S3, and the team reviews them in a Remix and Polaris admin. Scheduled jobs run with node-cron.",
    chips: ["Remix", "Shopify Polaris", "Prisma", "AWS S3", "TypeScript"],
    links: [],
  },
  {
    img: IMG + "photo-1587854692152-cbe660dbde88" + imgOpts, tag: "Healthcare Platform · React",
    title: "Xiom Healthcare",
    text: "A website for Xiom Healthcare. The goal was simple: make services and information easy to find, easy to read and quick to load for patients.",
    chips: ["React", "Healthcare", "Responsive", "UI/UX"],
    links: [{ label: "Live site", href: "https://xiomhealthcare.com/" }],
  },
  {
    img: IMG + "photo-1522071820081-009f0129c71c" + imgOpts, tag: "Dashboard · React + TypeScript",
    title: "HR Module",
    text: "An HR dashboard for managing employees and attendance, with charts for key HR numbers. Built with React 18, TypeScript, Redux Toolkit, Recharts and Tailwind.",
    chips: ["React", "TypeScript", "Redux Toolkit", "Recharts", "Tailwind"],
    links: [],
  },
  {
    img: IMG + "photo-1450101499163-c8848c66ca85" + imgOpts, tag: "Backend API · Node.js + TypeScript",
    title: "Promom Warranty Registration",
    text: "The API behind the Promom warranty form. Customers register a product, upload their receipt (saved to AWS S3) and get a confirmation email. Written in TypeScript with Express and Prisma, with logging and Swagger docs.",
    chips: ["Node.js", "Express", "TypeScript", "Prisma", "AWS S3"],
    links: [{ label: "Live form", href: "https://promom.in/pages/register-warranty" }],
  },
  {
    img: IMG + "photo-1467232004584-a241de8bcf5d" + imgOpts, tag: "CMS Website · Astro + Sanity",
    title: "Danny Goldberg Website",
    text: "A speaker website with a lot of content: videos, galleries, articles and an RSS feed. Built with Astro, React and Tailwind. The team edits everything in Sanity CMS, and it's hosted on Vercel.",
    chips: ["Astro", "React", "Sanity CMS", "Tailwind", "Vercel"],
    links: [{ label: "Live site", href: "https://dannygoldbergspeaks.com/" }],
  },
  {
    img: IMG + "photo-1451187580459-43490279c0fa" + imgOpts, tag: "CMS Website · Astro + Sanity",
    title: "GroundWork Pulse",
    text: "Another Astro, React and Sanity site. This one has its own documented set of UI components, a contact form, and content organised so editors can update pages on their own.",
    chips: ["Astro", "React", "Sanity CMS", "react-hook-form"],
    links: [{ label: "Live site", href: "https://groundworkpulse.com/" }],
  },
  {
    img: IMG + "photo-1551288049-bebda4e38f71" + imgOpts, tag: "Dashboard · React",
    title: "Royal Reporting",
    text: "A reporting tool built around a data sync process. Dashboards show what synced, what failed and how healthy things are, and reports can be exported.",
    chips: ["React", "Dashboards", "Data Sync", "Charts"],
    links: [],
  },
];

// /projects page order: latest work first (the /about journey, reversed).
const LATEST_FIRST = [
  "Royal Reporting", "Octavvio", "Xiom Healthcare", "Promom", "GroundWork Pulse", "Inventory Management System",
  "ReferBell", "Danny Goldberg", "ModeStudio", "Vargo Outdoors", "HR Module", "StoreScout",
];
const rank = (p) => LATEST_FIRST.findIndex((name) => p.title.startsWith(name));
export const projectsLatestFirst = [...projects].sort((a, b) => rank(a) - rank(b));

export const skills = [
  { label: "AI Engineering & Integration", value: 90 },
  { label: "React / Next.js / Remix", value: 92 },
  { label: "Vue 3 / Vuex", value: 84 },
  { label: "Astro + Sanity CMS", value: 85 },
  { label: "Node.js / Express / TypeScript", value: 86 },
  { label: "Databases: Prisma, MySQL, MongoDB", value: 82 },
  { label: "Shopify App Development", value: 88 },
  { label: "UI / Tailwind & Motion (GSAP)", value: 87 },
];

// Journey on /about, in the order the work happened (first to latest).
export const timeline = [
  { year: "01 · Start", title: "Started working on client projects", text: "Began building AI and full-stack products for clients." },
  { year: "02", title: "StoreScout", text: "My first Shopify app on the App Store: a store locator with map search and filters." },
  { year: "03", title: "HR Module", text: "An HR dashboard for employees, attendance and reports, built with React and TypeScript." },
  { year: "04", title: "Vargo Outdoors Pro Member App", text: "A custom Shopify app for member sign-ups, with file uploads to S3 and scheduled jobs." },
  { year: "05", title: "ModeStudio", text: "A Shopify app that creates images with AI, with a queue and a gallery." },
  { year: "06", title: "Danny Goldberg Website", text: "A content-heavy speaker site built with Astro and Sanity CMS." },
  { year: "07", title: "ReferBell", text: "A Shopify referral app with rewards, tracking and a merchant dashboard." },
  { year: "08", title: "Inventory Management System", text: "A full-stack Vue 3 and Node.js system with barcode scanning and maps." },
  { year: "09", title: "GroundWork Pulse", text: "A second Astro and Sanity site, with its own set of UI components." },
  { year: "10", title: "Promom Warranty Registration", text: "A TypeScript API for warranty sign-ups, receipt uploads and confirmation emails." },
  { year: "11", title: "Xiom Healthcare", text: "A clear, easy-to-use healthcare website." },
  { year: "12", title: "Octavvio", text: "The front-end for an AI video platform built around digital twins." },
  { year: "13 · Now", title: "Royal Reporting", text: "Working on dashboards and reports for a data sync process." },
];

export const values = [
  { icon: "target", title: "Care for details", text: "Small things like spacing, loading states and error messages make a product feel finished." },
  { icon: "gauge", title: "Fast by default", text: "Pages should load quickly and scroll smoothly, even with a lot of data on screen." },
  { icon: "handshake", title: "Easy to work with", text: "I share regular updates, ask questions early and deliver on time." },
];

export const services = [
  { n: "01", title: "AI Engineering & Integrations", text: "I add AI to real products: image and video generation, digital twins and LLM features, plus the galleries and previews people use to see the results.", tags: ["AI", "LLM", "Generation Flows"] },
  { n: "02", title: "Full-Stack Web Applications", text: "I handle both sides. Front-ends in React, Vue 3, Next.js or Astro, and back-ends in Node.js and Express with Prisma on MySQL or MongoDB.", tags: ["React", "Vue 3", "Node.js", "Prisma"] },
  { n: "03", title: "Shopify App Development", text: "Public and custom Shopify apps built with Remix and Polaris. I've shipped store locators, referral programs, membership programs and AI tools, with webhooks, App Bridge and session storage.", tags: ["Remix", "Polaris", "App Store"] },
  { n: "04", title: "CMS Websites", text: "Marketing sites built with Astro and React that load fast and are ready for SEO. Content lives in Sanity so your team can edit it, and the site runs on Vercel.", tags: ["Astro", "Sanity", "Vercel"] },
  { n: "05", title: "Dashboards & Admin Panels", text: "HR, inventory and reporting dashboards with charts, maps, barcode scanning, user roles and live data.", tags: ["Dashboards", "Charts", "Maps"] },
  { n: "06", title: "Motion & Responsive UI", text: "Smooth GSAP animations and clean Tailwind layouts that work on every screen, from phones to big monitors.", tags: ["GSAP", "Tailwind", "Responsive"] },
];

export const process = [
  { n: "01", icon: "search", title: "Understand", text: "I start by learning the problem, the users and the data before writing any code." },
  { n: "02", icon: "pen", title: "Plan", text: "I plan the structure up front: components, data models and APIs." },
  { n: "03", icon: "code", title: "Build", text: "I write clean, typed code and keep an eye on speed as I go." },
  { n: "04", icon: "rocket", title: "Polish & Ship", text: "I test edge cases, refine the details and check every screen size before launch." },
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

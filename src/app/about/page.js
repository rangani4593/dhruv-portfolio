import PageShell from "@/components/templates/PageShell";
import AboutBlock from "@/components/organisms/AboutBlock";

export const metadata = { title: "About | Dhruv Rangani" };

// Route: /about
export default function AboutPage() {
  return (
    <PageShell
      badge="About Me"
      title={<>A developer who <span className="gr">builds end to end</span></>}
      lead="I'm Dhruv Rangani, an AI engineer and full-stack developer. I build AI video and image tools, Shopify apps, CMS websites and dashboards using React, Vue 3, Astro and Node.js. I care about clean code, good performance and products that are easy to use."
    >
      <AboutBlock />
    </PageShell>
  );
}

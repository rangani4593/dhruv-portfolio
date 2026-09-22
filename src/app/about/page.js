import PageShell from "@/components/templates/PageShell";
import AboutBlock from "@/components/organisms/AboutBlock";

export const metadata = { title: "About — Dhruv Rangani" };

// Route: /about
export default function AboutPage() {
  return (
    <PageShell
      badge="About Me"
      title={<>An engineer who <span className="gr">ships end to end</span></>}
      lead="I'm Dhruv Rangani — AI engineer and full-stack developer. I build AI video & image platforms, Shopify apps, CMS websites and data-heavy dashboards across React, Vue 3, Astro and Node.js. Clean code, smooth motion, products that just work."
    >
      <AboutBlock />
    </PageShell>
  );
}

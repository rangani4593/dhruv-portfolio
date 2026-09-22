import PageShell from "@/components/templates/PageShell";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";

export const metadata = { title: "Projects — Dhruv Rangani" };

// Route: /projects
export default function ProjectsPage() {
  return (
    <PageShell
      badge="Portfolio"
      title={<>Projects I&apos;ve <span className="gr">delivered</span></>}
      lead="AI platforms, Shopify apps, full-stack systems, CMS websites and dashboards — real products I owned from architecture to launch."
    >
      <ProjectsGrid />
    </PageShell>
  );
}

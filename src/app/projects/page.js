import PageShell from "@/components/templates/PageShell";
import ProjectsGrid from "@/components/organisms/ProjectsGrid";

export const metadata = { title: "Projects | Dhruv Rangani" };

// Route: /projects
export default function ProjectsPage() {
  return (
    <PageShell
      badge="Portfolio"
      title={<>Projects I&apos;ve <span className="gr">delivered</span></>}
      lead="AI tools, Shopify apps, full-stack systems, CMS websites and dashboards. These are real client projects that I worked on from planning to launch."
    >
      <ProjectsGrid />
    </PageShell>
  );
}

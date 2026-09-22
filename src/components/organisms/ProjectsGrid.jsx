import Reveal from "@/components/atoms/Reveal";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projectsLatestFirst as projects } from "@/data/site";

// Organism: ProjectsGrid — 2-column grid of all projects, latest first.
export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 0.06} className="flex">
          <ProjectCard {...p} />
        </Reveal>
      ))}
    </div>
  );
}

import Reveal from "@/components/atoms/Reveal";
import SectionHeading from "@/components/atoms/SectionHeading";
import Button from "@/components/atoms/Button";
import ProjectCard from "@/components/molecules/ProjectCard";
import { projects } from "@/data/site";

// Organism: FeaturedProjects — a 3-card preview of top projects on the home page.
export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="py-12 md:py-[70px]">
      <SectionHeading badge="Selected Work" title="Projects I'm proud of" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px]">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.1} className="flex">
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-[34px]">
          <Button href="/projects" variant="o">
            View all {projects.length} projects →
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

import Reveal from "@/components/atoms/Reveal";
import SectionHeading from "@/components/atoms/SectionHeading";
import ServiceCard from "@/components/molecules/ServiceCard";
import { homeServices } from "@/data/site";

// Organism: ServicesPreview — 6-card grid of what Dhruv does (home page).
export default function ServicesPreview() {
  return (
    <section className="py-12 md:py-[70px]">
      <SectionHeading badge="What I Do" title="What I can help with" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px]">
        {homeServices.map((s, i) => (
          <Reveal key={s.title} variant="scale" delay={(i % 3) * 0.08} className="flex">
            <ServiceCard {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

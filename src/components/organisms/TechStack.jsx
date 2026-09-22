import SectionHeading from "@/components/atoms/SectionHeading";
import { techStack } from "@/data/site";

// Organism: TechStack — the tools & tech Dhruv works with (real logos).
// Motion.jsx pops the items in with a staggered back-ease via [data-gsap-stagger].
export default function TechStack() {
  return (
    <section className="py-12 md:py-[70px]">
      <SectionHeading badge="Tech Stack" title="Tools I build with" />
      <div className="flex flex-wrap gap-3" data-gsap-stagger>
        {techStack.map((t) => (
          <div
            className="inline-flex items-center gap-2.5 px-[18px] py-3 bg-card border border-line rounded-xl font-semibold text-[14.5px] whitespace-nowrap transition-all duration-300 hover:border-b1 hover:-translate-y-[3px] hover:shadow-sh"
            key={t.name}
          >
            <img className="block w-6 h-6 object-contain shrink-0" src={t.logo} alt={t.name} loading="lazy" />
            {t.name}
          </div>
        ))}
      </div>
    </section>
  );
}

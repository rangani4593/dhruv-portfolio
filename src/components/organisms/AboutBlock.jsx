import Reveal from "@/components/atoms/Reveal";
import SkillBar from "@/components/molecules/SkillBar";
import TimelineItem from "@/components/molecules/TimelineItem";
import ServiceCard from "@/components/molecules/ServiceCard";
import { skills, timeline, values } from "@/data/site";

// Organism: AboutBlock — skills + journey timeline + value cards.
const H3 = "text-[26px] font-bold tracking-[-0.02em] mb-6";

export default function AboutBlock() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px] items-start">
        <Reveal variant="left">
          <div>
            <h3 className={H3}>Skills</h3>
            {skills.map((s) => (
              <SkillBar key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
        <Reveal variant="right">
          <div>
            <h3 className={H3}>Journey</h3>
            <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-1.5 before:bottom-1.5 before:w-0.5 before:bg-line2">
              {timeline.map((t, i) => (
                <Reveal key={t.title} variant="left" delay={i * 0.05}>
                  <TimelineItem {...t} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <section className="pb-12 md:pb-[70px] pt-12 md:pt-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[22px]">
          {values.map((v, i) => (
            <Reveal key={v.title} variant="scale" delay={(i % 3) * 0.08} className="flex">
              <ServiceCard {...v} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

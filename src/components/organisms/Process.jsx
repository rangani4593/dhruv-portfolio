import Reveal from "@/components/atoms/Reveal";
import SectionHeading from "@/components/atoms/SectionHeading";
import Icon from "@/components/atoms/Icon";
import { process } from "@/data/site";

// Organism: Process — the 4-step "how I work" grid.
export default function Process() {
  return (
    <section className="py-12 md:py-[70px]">
      <SectionHeading badge="How I Work" title="From idea to shipped" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[22px]">
        {process.map((p, i) => (
          <Reveal key={p.n} variant="scale" delay={(i % 4) * 0.08} className="flex">
            <div className="relative h-full w-full bg-card border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sh hover:border-transparent">
              <div className="font-sans text-sm font-bold text-b1 bg-b1/[.08] w-10 h-10 rounded-[11px] grid place-items-center mb-3.5">{p.n}</div>
              <div className="absolute top-[26px] right-[26px] text-b1 opacity-55">
                <Icon name={p.icon} size={22} />
              </div>
              <h3 className="text-[19px] font-bold tracking-[-0.02em] mb-2">{p.title}</h3>
              <p className="text-body text-[14.5px]">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { marquee } from "@/data/site";

// Organism: Marquee — infinitely scrolling tech keywords strip (GSAP drives `.mt`).
export default function Marquee() {
  const line = marquee.join("  ");
  const Item = () => (
    <span className="flex items-center gap-11 font-sans text-xl font-semibold text-faint whitespace-nowrap after:content-['●'] after:text-b2 after:text-[10px]">
      {line}&nbsp;&nbsp;
    </span>
  );
  return (
    <div className="marquee overflow-hidden py-5 mt-2.5 border-y border-line cursor-default">
      <div className="mt flex w-max gap-11 will-change-transform">
        <Item />
        <Item />
      </div>
    </div>
  );
}

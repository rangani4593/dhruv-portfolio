import Badge from "@/components/atoms/Badge";

// Atom: SectionHeading — badge + title + optional lead, used atop every section.
// `.shead` is a GSAP hook: Motion.jsx staggers its children on scroll.
export default function SectionHeading({ badge, title, lead, big = false }) {
  const titleCls = big
    ? "text-[clamp(34px,5vw,54px)] leading-[1.06] my-5"
    : "text-[clamp(28px,4.4vw,44px)] leading-[1.1] mt-4 mb-3";
  return (
    <div className="shead mb-11">
      {badge && <Badge>{badge}</Badge>}
      <h2 className={`font-bold tracking-[-0.02em] text-ink ${titleCls}`}>{title}</h2>
      {lead && <p className="text-body text-[clamp(16px,2vw,18px)] max-w-[600px]">{lead}</p>}
    </div>
  );
}

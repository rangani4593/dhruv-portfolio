import Chip from "@/components/atoms/Chip";

// Molecule: ProjectCard — image banner + tag + title + text + tech chips + links.
// `.proj` and `.pbanner img` are GSAP hooks (3D tilt + image parallax in Motion.jsx).
export default function ProjectCard({ img, tag, title, text, chips = [], links = [] }) {
  return (
    <div className="proj h-full w-full bg-card border border-line rounded-[18px] overflow-hidden transition-[box-shadow,border-color] duration-300 hover:shadow-sh hover:border-transparent [transform-style:preserve-3d] will-change-transform">
      <div className="pbanner relative h-[180px] overflow-hidden bg-navy after:content-[''] after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(180deg,rgba(10,26,51,.15),rgba(10,26,51,.72))]">
        {img && <img src={img} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover will-change-transform" />}
        <span className="absolute left-4 bottom-3.5 z-[2] text-white text-[11.5px] font-bold tracking-[.06em] uppercase bg-b1/85 px-3 py-1.5 rounded-full backdrop-blur-[4px]">
          {tag}
        </span>
      </div>
      <div className="p-[26px]">
        <div className="text-b1 text-[11.5px] tracking-[.06em] uppercase font-semibold">{tag}</div>
        <h3 className="text-[21px] font-bold tracking-[-0.02em] mt-2 mb-2.5">{title}</h3>
        <p className="text-body text-[14.5px] mb-4">{text}</p>
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold text-b1 bg-bg border border-line2 rounded-[9px] transition-all duration-300 hover:bg-b1 hover:text-white hover:border-b1 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-12px_#0b63e5]"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

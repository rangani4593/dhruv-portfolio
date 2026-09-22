import Chip from "@/components/atoms/Chip";

// Molecule: ServiceRow — numbered service line with description + tags.
export default function ServiceRow({ n, title, text, tags = [] }) {
  return (
    <div className="group flex flex-col sm:flex-row gap-1.5 sm:gap-6 py-7 border-t border-line items-start transition-all duration-300 hover:pl-2">
      <div className="font-sans text-[28px] font-bold text-line2 min-w-[76px] transition-colors duration-300 group-hover:text-b1">{n}</div>
      <div>
        <h3 className="text-[21px] font-bold tracking-[-0.02em] mb-2">{title}</h3>
        <p className="text-body max-w-[560px]">{text}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

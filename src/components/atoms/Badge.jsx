// Atom: Badge — the small pill "eyebrow" label above headings.
export default function Badge({ children, className = "", light = false }) {
  const tone = light ? "bg-white/[.14] text-white" : "bg-b1/[.08] text-b1";
  return (
    <span
      className={`k inline-flex items-center gap-2 tracking-[.1em] text-[12.5px] uppercase font-semibold px-3.5 py-1.5 rounded-full ${tone} ${className}`.trim()}
    >
      {children}
    </span>
  );
}

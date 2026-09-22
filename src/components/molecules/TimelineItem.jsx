// Molecule: TimelineItem — a single point on the journey timeline (dot drawn with ::before).
export default function TimelineItem({ year, title, text }) {
  return (
    <div className="relative pb-7 before:content-[''] before:absolute before:-left-7 before:top-[5px] before:w-[15px] before:h-[15px] before:rounded-full before:bg-card before:border-[3px] before:border-b1">
      <div className="text-b1 text-[12.5px] font-semibold">{year}</div>
      <h4 className="text-[17px] font-bold tracking-[-0.02em] mt-1 mb-[5px]">{title}</h4>
      <p className="text-body text-sm">{text}</p>
    </div>
  );
}

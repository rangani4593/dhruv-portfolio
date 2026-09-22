import CountUp from "@/components/atoms/CountUp";

// Molecule: StatItem — an animated number + label.
export default function StatItem({ value, suffix, label }) {
  return (
    <div>
      <div className="n font-sans text-[28px] sm:text-[34px] font-bold text-b1">
        <CountUp to={value} suffix={suffix} />
      </div>
      <div className="text-xs sm:text-[13px] text-faint">{label}</div>
    </div>
  );
}

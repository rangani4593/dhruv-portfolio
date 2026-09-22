import Icon from "@/components/atoms/Icon";

// Molecule: ContactLine — icon + label + value row (optionally a link).
const ROW =
  "flex gap-[15px] items-center p-[18px] bg-card border border-line rounded-[14px] mb-3.5 transition-all duration-300 hover:border-b1 hover:translate-x-[5px] hover:shadow-sh";

export default function ContactLine({ icon, label, value, href }) {
  const inner = (
    <>
      <span className="w-[46px] h-[46px] rounded-xl bg-grad grid place-items-center text-white shrink-0">
        <Icon name={icon} size={20} />
      </span>
      <span>
        <span className="block text-[12.5px] text-faint">{label}</span>
        <span className="font-semibold text-[15px]">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className={ROW} href={href}>
        {inner}
      </a>
    );
  }
  return <div className={ROW}>{inner}</div>;
}

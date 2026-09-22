import Icon from "@/components/atoms/Icon";

// Molecule: ServiceCard — icon + title + text card (Lucide icon).
export default function ServiceCard({ icon, title, text }) {
  return (
    <div className="group h-full w-full bg-card border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sh hover:border-transparent">
      <div className="w-[54px] h-[54px] rounded-[14px] bg-bg2 grid place-items-center mb-4 text-b1 transition-colors group-hover:bg-b1/10">
        <Icon name={icon} />
      </div>
      <h3 className="text-[19px] font-bold tracking-[-0.02em] mb-2">{title}</h3>
      <p className="text-body text-[14.5px]">{text}</p>
    </div>
  );
}

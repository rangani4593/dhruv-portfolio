import Link from "next/link";

// Atom: Button — renders a Link (when `href` given) or a native button.
// `btn-b` / `btn-o` stay as GSAP hooks (magnetic effect targets .btn-b).
const BASE =
  "inline-flex items-center gap-[9px] px-7 py-3.5 rounded-[11px] font-semibold text-[14.5px] cursor-pointer transition-all duration-300 border-0 font-sans";

const VARIANTS = {
  b: "btn-b relative overflow-hidden will-change-transform bg-b1 text-white shadow-[0_14px_30px_-12px_#0b63e5] hover:bg-[#0a56c9] hover:shadow-[0_20px_40px_-14px_#0b63e5] " +
    "after:content-[''] after:absolute after:top-0 after:left-[-130%] after:w-[55%] after:h-full after:skew-x-[-20deg] after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.4),transparent)] after:transition-[left] after:duration-[600ms] hover:after:left-[150%]",
  o: "btn-o border border-line2 text-ink bg-card hover:border-b1 hover:text-b1",
};

export default function Button({ href, variant = "b", children, className = "", ...rest }) {
  const cls = `${BASE} ${VARIANTS[variant] || VARIANTS.b} ${className}`.trim();
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

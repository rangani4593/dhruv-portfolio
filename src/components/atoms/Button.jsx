import Link from "next/link";

// Atom: Button — renders a Link (when `href` given) or a native button.
// `btn-b` / `btn-o` stay as GSAP hooks; `.magnetic` opts a button into the magnetic pull.
// Hover lift/press use the standalone `translate` / `scale` CSS properties so they
// stack with GSAP's magnetic `transform` instead of fighting it.
const BASE =
  "inline-flex items-center gap-[9px] px-7 py-3.5 rounded-[11px] font-semibold text-[14.5px] cursor-pointer border-0 font-sans select-none " +
  "transition-[background-color,border-color,color,box-shadow,translate,scale] duration-300 ease-out " +
  "hover:[translate:0_-3px] active:[translate:0_0] active:[scale:.97] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-b1 focus-visible:ring-offset-2";

// sweeping light streak across the button on hover
export const SHINE =
  "relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-[-130%] after:w-[55%] after:h-full after:skew-x-[-20deg] " +
  "after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.45),transparent)] after:transition-[left] after:duration-[650ms] hover:after:left-[150%]";

const VARIANTS = {
  b: `btn-b magnetic ${SHINE} will-change-transform bg-b1 text-white shadow-[0_14px_30px_-12px_#0b63e5] hover:bg-[#0a56c9] hover:shadow-[0_22px_44px_-14px_#0b63e5]`,
  o: `btn-o magnetic ${SHINE} will-change-transform border border-line2 text-ink bg-card shadow-[0_8px_20px_-14px_rgba(11,99,229,.35)] ` +
    "hover:border-b1 hover:bg-b1 hover:text-white hover:shadow-[0_22px_44px_-14px_#0b63e5]",
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

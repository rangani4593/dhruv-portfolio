"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Molecule: SkillBar — GSAP fills the bar and counts the % when scrolled into view.
export default function SkillBar({ label, value }) {
  const ref = useRef(null);
  const fill = useRef(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !fill.current) return;
    if (prefersReducedMotion()) {
      setPct(value);
      fill.current.style.width = value + "%";
      return;
    }
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      const st = { trigger: el, start: "top 90%", once: true };
      gsap.fromTo(fill.current, { width: "0%" }, { width: value + "%", duration: 1.3, ease: "power3.out", scrollTrigger: st });
      gsap.to(obj, { v: value, duration: 1.3, ease: "power3.out", snap: { v: 1 }, onUpdate: () => setPct(Math.round(obj.v)), scrollTrigger: st });
    }, el);
    return () => ctx.revert();
  }, [value]);

  return (
    <div className="mb-5" ref={ref}>
      <div className="flex justify-between items-baseline gap-3.5 text-sm mb-2">
        <b className="font-semibold">{label}</b>
        <span className="text-faint shrink-0 tabular-nums">{pct}%</span>
      </div>
      <div className="h-2 bg-bg2 rounded-full overflow-hidden">
        <i ref={fill} className="block h-full w-0 bg-grad rounded-full" />
      </div>
    </div>
  );
}

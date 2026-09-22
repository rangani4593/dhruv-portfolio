"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Atom: CountUp — GSAP tweens a number from 0 to `to` when scrolled into view.
export default function CountUp({ to, suffix = "", duration = 1.4 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setVal(to);
      return;
    }
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: to,
        duration,
        ease: "power2.out",
        snap: { v: 1 },
        onUpdate: () => setVal(Math.round(obj.v)),
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    });
    return () => ctx.revert();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

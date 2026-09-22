"use client";
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Atom: Reveal — GSAP ScrollTrigger reveal. Variants: up (default) | left | right | scale.
// `stagger` animates the wrapper's children one after another instead of the wrapper.
const FROM = {
  up: { y: 40, opacity: 0 },
  left: { x: -40, opacity: 0 },
  right: { x: 40, opacity: 0 },
  scale: { scale: 0.92, y: 20, opacity: 0 },
};

export default function Reveal({ children, delay = 0, variant = "up", stagger = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, FROM[variant] || FROM.up, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay,
        stagger,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, variant, stagger]);

  // `.reveal` is only a hook (will-change); pass e.g. className="flex" inside grids
  // so the child card can stretch to the row height.
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}

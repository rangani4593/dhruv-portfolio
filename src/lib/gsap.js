"use client";
// Single place to import GSAP + register plugins (idempotent).
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.defaults({ ease: "power3.out", duration: 0.8 });
  // dev-only: lets you poke animations from DevTools (window.gsap.globalTimeline, ticker…)
  if (process.env.NODE_ENV !== "production") window.gsap = gsap;
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger, SplitText };

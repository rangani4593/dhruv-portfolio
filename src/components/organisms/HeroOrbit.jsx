"use client";
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import Icon from "@/components/atoms/Icon";
import { techStack, profile } from "@/data/site";

// Organism: HeroOrbit — the hero visual. Two rings of real tech logos orbit a
// glowing photo core while capability pills sit in the square's corners (desktop)
// or in a row underneath (mobile). Ring geometry lives in globals.css (CSS vars);
// everything else is Tailwind. All motion is GSAP.
const INNER = techStack.slice(0, 6);
const OUTER = techStack.slice(6, 16);

const PILLS = [
  { pos: "md:top-0 md:-left-[8%]", icon: "ai", text: "AI Video & Image" },
  { pos: "md:top-0 md:-right-[8%]", icon: "shopify", text: "Shopify Apps" },
  { pos: "md:bottom-0 md:-left-[8%]", icon: "blocks", text: "Full-Stack" },
  { pos: "md:bottom-0 md:-right-[8%]", icon: "cms", text: "CMS Sites" },
];

export default function HeroOrbit() {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // continuous orbit — rings spin, logos counter-spin so they stay readable
      gsap.to(".r1", { rotation: 360, duration: 36, ease: "none", repeat: -1 });
      gsap.to(".r1 .orbit-logo", { rotation: -360, duration: 36, ease: "none", repeat: -1 });
      gsap.to(".r2", { rotation: -360, duration: 54, ease: "none", repeat: -1 });
      gsap.to(".r2 .orbit-logo", { rotation: 360, duration: 54, ease: "none", repeat: -1 });

      // entrance
      const tl = gsap.timeline({ delay: 0.35, defaults: { ease: "back.out(1.6)" } });
      tl.fromTo(".orbit-core", { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 })
        .fromTo(".orbit-glow", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }, 0)
        .fromTo(".r1 .orbit-logo", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.06 }, 0.3)
        .fromTo(".r2 .orbit-logo", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.05 }, 0.5)
        .fromTo(".orbit-pill", { y: 20, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1 }, 0.9);

      // idle float on pills + breathing glow
      gsap.utils.toArray(".orbit-pill").forEach((p, i) => {
        gsap.to(p, { y: i % 2 ? 10 : -10, duration: 2.6 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.8 });
      });
      gsap.to(".orbit-glow", { scale: 1.12, opacity: 0.85, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.6 });
    }, el);

    return () => ctx.revert();
  }, []);

  const ring = (items, cls, r) => (
    <div className={`orbit-ring ${cls} absolute inset-0 rounded-full will-change-transform`} style={{ "--r": `${r}px` }}>
      {items.map((t, i) => (
        <span className="orbit-pos" key={t.name} style={{ "--i": i, "--n": items.length }}>
          <span className="orbit-logo" title={t.name}>
            <img src={t.logo} alt={t.name} loading="eager" />
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="orbit-wrap relative mx-auto" ref={root} aria-hidden="true">
      <div className="orbit relative grid place-items-center">
        <div className="orbit-glow absolute w-[62%] h-[62%] rounded-full pointer-events-none blur-[18px] bg-[radial-gradient(circle,rgba(59,140,255,.45),rgba(0,184,212,.18)_55%,transparent_72%)]" />
        {ring(OUTER, "r2", 165)}
        {ring(INNER, "r1", 100)}
        <div className="orbit-core relative z-[2] rounded-full bg-grad p-[3px] will-change-transform w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] md:w-[92px] md:h-[92px] shadow-[0_24px_60px_-20px_rgba(11,99,229,.7)]">
          <img src={profile.avatar} alt={profile.name} loading="eager" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>

      {/* pills: corners on desktop (logos ride the circle, so they never collide), a row on mobile */}
      <div className="orbit-pills flex flex-wrap justify-center gap-2.5 mt-[18px] md:mt-0 md:absolute md:inset-0 md:pointer-events-none">
        {PILLS.map((p) => (
          <div
            key={p.text}
            className={`orbit-pill ${p.pos} md:absolute pointer-events-auto z-[3] inline-flex items-center gap-[7px] px-[11px] py-[7px] md:px-3.5 md:py-[9px] rounded-full bg-card border border-line shadow-sh text-xs md:text-[13px] font-semibold text-ink whitespace-nowrap will-change-transform [&_svg]:text-b1`}
          >
            <Icon name={p.icon} size={15} /> {p.text}
          </div>
        ))}
      </div>
    </div>
  );
}

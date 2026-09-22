"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "@/lib/gsap";

// Atom: Motion — the site-wide GSAP layer, re-run on every route change:
//  • page enter transition
//  • hero: SplitText word-mask headline + staggered bits, floating panel
//  • section headings stagger (badge → title → lead)
//  • tech-stack pop-in, marquee (GSAP-driven, pauses on hover)
//  • project banners parallax + 3D tilt, magnetic buttons (.magnetic)
//  • background blob parallax
// StrictMode-safe: gsap.context() + explicit fromTo + revert() on cleanup.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const q = (sel) => gsap.utils.toArray(sel);
    const cleanups = [];
    let split;

    const ctx = gsap.context(() => {
      /* ---------- page enter ---------- */
      const page = document.querySelector("main > .page-in");
      if (page) {
        gsap.fromTo(page, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", clearProps: "all" });
      }

      /* ---------- hero ---------- */
      const h1 = document.querySelector(".hero .h1");
      if (h1) {
        split = SplitText.create(h1, { type: "words", mask: "words", wordsClass: "w" });
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".hero [data-hero='badge']", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
          .fromTo(split.words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.06 }, "-=0.3")
          .fromTo(".hero [data-hero='lead']", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
          .fromTo(".hero [data-hero='btns'] > *", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.45")
          .fromTo(".hero [data-hero='stats'] > *", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
          .fromTo(".hero [data-hero='clients'] > *", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, "-=0.35")
          .fromTo("[data-float]", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.25)
          .set([".hero [data-hero]", ".hero [data-hero] > *"], { clearProps: "opacity,transform" });
        gsap.to("[data-float]", { y: -10, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5 });
        // safety net: if the frame loop stalls (throttled/background tab), never leave the hero hidden
        const guard = setTimeout(() => tl.progress(1), 6000);
        cleanups.push(() => clearTimeout(guard));
      }

      /* ---------- section headings ---------- */
      q(".shead").forEach((sh) => {
        gsap.fromTo(
          sh.children,
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out", clearProps: "all", scrollTrigger: { trigger: sh, start: "top 88%", once: true } }
        );
      });

      /* ---------- tech stack pop ---------- */
      q("[data-gsap-stagger]").forEach((grid) => {
        gsap.fromTo(
          grid.children,
          { scale: 0.7, opacity: 0, y: 14 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)", stagger: { each: 0.04, from: "start" }, clearProps: "all", scrollTrigger: { trigger: grid, start: "top 88%", once: true } }
        );
      });

      /* ---------- marquee ---------- */
      const track = document.querySelector(".mt");
      if (track) {
        const tween = gsap.to(track, { xPercent: -50, ease: "none", duration: 28, repeat: -1 });
        const wrap = track.parentElement;
        const slow = () => gsap.to(tween, { timeScale: 0.15, duration: 0.6 });
        const fast = () => gsap.to(tween, { timeScale: 1, duration: 0.6 });
        wrap.addEventListener("mouseenter", slow);
        wrap.addEventListener("mouseleave", fast);
        cleanups.push(() => {
          wrap.removeEventListener("mouseenter", slow);
          wrap.removeEventListener("mouseleave", fast);
        });
      }

      /* ---------- project banners: parallax + tilt ---------- */
      q(".proj").forEach((card) => {
        const img = card.querySelector(".pbanner img");
        if (img) {
          gsap.fromTo(img, { yPercent: -10, scale: 1.18 }, { yPercent: 10, scale: 1.18, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } });
        }
        gsap.set(card, { transformPerspective: 900 });
        const rx = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });
        const ry = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
        const ly = gsap.quickTo(card, "y", { duration: 0.4, ease: "power2.out" });
        const move = (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          rx(-py * 6);
          ry(px * 8);
        };
        const enter = () => ly(-8);
        const leave = () => {
          rx(0);
          ry(0);
          ly(0);
        };
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });

      /* ---------- magnetic buttons ---------- */
      q(".magnetic").forEach((btn) => {
        const x = gsap.quickTo(btn, "x", { duration: 0.35, ease: "power3.out" });
        const y = gsap.quickTo(btn, "y", { duration: 0.35, ease: "power3.out" });
        const move = (e) => {
          const r = btn.getBoundingClientRect();
          x((e.clientX - (r.left + r.width / 2)) * 0.25);
          y((e.clientY - (r.top + r.height / 2)) * 0.35);
        };
        const leave = () => {
          x(0);
          y(0);
        };
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", move);
          btn.removeEventListener("mouseleave", leave);
        });
      });

      /* ---------- background blobs parallax ---------- */
      if (q(".blob.b-1").length) gsap.to(".blob.b-1", { yPercent: 18, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });
      if (q(".blob.b-2").length) gsap.to(".blob.b-2", { yPercent: -20, ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 } });

      /* ---------- generic opt-in ---------- */
      q("[data-gsap]").forEach((el) => {
        gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", clearProps: "all", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 400);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", refresh);
      cleanups.forEach((fn) => fn());
      if (split) split.revert();
      ctx.revert();
    };
  }, [pathname]);

  return null;
}

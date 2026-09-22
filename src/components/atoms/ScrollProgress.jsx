"use client";
import { useEffect } from "react";

// Atom: ScrollProgress — thin gradient bar at the top tracking scroll position.
export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("prog");
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="prog" id="prog" />;
}

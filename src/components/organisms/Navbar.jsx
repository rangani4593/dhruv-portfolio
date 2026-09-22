"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/atoms/Logo";
import { nav } from "@/data/site";

// Organism: Navbar — sticky header with active link state + mobile dropdown.
const LINK = "relative px-4 py-[9px] text-[14.5px] font-medium rounded-[9px] transition-all duration-300";
const ACTIVE = "text-b1 after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-[3px] after:h-0.5 after:rounded after:bg-b1";
const IDLE = "text-body hover:text-ink hover:bg-bg2";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur-2xl border-b border-line">
      <nav className="max-w-wrap mx-auto px-[26px] py-[15px] flex items-center justify-between">
        <Logo />

        <div
          className={`flex gap-0.5 sm:gap-1 items-stretch sm:items-center
            fixed sm:static top-[69px] inset-x-0 flex-col sm:flex-row px-6 py-4 sm:p-0
            bg-white/[.98] sm:bg-transparent backdrop-blur-2xl sm:backdrop-blur-none border-b sm:border-0 border-line
            transition-transform duration-300 sm:translate-y-0 ${open ? "translate-y-0" : "-translate-y-[160%]"}`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={`${LINK} py-[13px] sm:py-[9px] ${pathname === item.href ? ACTIVE : IDLE}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={close}
            className={`${LINK} py-[13px] sm:py-[9px] bg-b1 text-white font-semibold shadow-[0_10px_24px_-10px_#0b63e5] hover:bg-[#0a56c9]`}
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          className="sm:hidden grid place-items-center w-11 h-11 border border-line2 rounded-[11px] text-ink text-[19px]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

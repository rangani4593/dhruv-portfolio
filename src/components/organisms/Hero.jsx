import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import StatItem from "@/components/molecules/StatItem";
import HeroOrbit from "@/components/organisms/HeroOrbit";
import { stats, profile, clients } from "@/data/site";

// Organism: Hero — punchy headline + CTAs + stats + "worked with" on the left,
// the GSAP tech-orbit visual on the right. `.hero`, `.h1`, `.stats`, `[data-hero]`
// and `[data-float]` are GSAP hooks used by Motion.jsx.
export default function Hero() {
  return (
    <section className="hero pt-[66px] pb-12 md:pb-[70px]">
      <div className="grid md:grid-cols-[1.05fr_.95fr] gap-12 items-center">
        <div>
          <span data-hero="badge" className="inline-block">
            <Badge>{profile.title}</Badge>
          </span>
          <h1 className="h1 text-[clamp(40px,6.5vw,68px)] font-bold leading-[1.06] tracking-[-0.02em] text-ink my-5">
            I turn AI ideas into <span className="gr">products people use</span>.
          </h1>
          <p className="text-body text-[clamp(16px,2vw,18px)] max-w-[600px]" data-hero="lead">
            AI video &amp; image platforms, Shopify apps, CMS websites and data-heavy dashboards —
            12+ production builds across React, Vue 3, Astro and Node.js, owned from architecture to launch.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-[34px]" data-hero="btns">
            <Button href="/projects" variant="b">
              See the work →
            </Button>
            <Button href="/contact" variant="o">
              Let&apos;s talk
            </Button>
          </div>
          <div className="stats grid grid-cols-3 gap-3.5 sm:flex sm:flex-wrap sm:gap-9 mt-11" data-hero="stats">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
          <div
            className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 sm:gap-x-[18px] mt-[34px] pt-[22px] border-t border-line"
            data-hero="clients"
          >
            <span className="text-xs tracking-[.12em] uppercase text-faint font-semibold mr-1">Worked with</span>
            {clients.map((c) => (
              <span className="font-sans font-bold text-[13.5px] sm:text-[14.5px] text-body/85" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div data-float>
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}

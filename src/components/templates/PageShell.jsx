// Template: PageShell — standard wrapper giving every routed page its
// section spacing and (optionally) a section heading. `.page-in` is the
// GSAP page-enter hook.
import SectionHeading from "@/components/atoms/SectionHeading";

export default function PageShell({ badge, title, lead, big = true, children }) {
  return (
    <div className="page-in min-h-[40vh]">
      <section className="py-12 md:py-[70px]">
        {(badge || title) && <SectionHeading badge={badge} title={title} lead={lead} big={big} />}
        {children}
      </section>
    </div>
  );
}

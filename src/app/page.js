import Hero from "@/components/organisms/Hero";
import Marquee from "@/components/organisms/Marquee";
import ServicesPreview from "@/components/organisms/ServicesPreview";
import Process from "@/components/organisms/Process";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";
import TechStack from "@/components/organisms/TechStack";
import CtaBand from "@/components/organisms/CtaBand";

// Route: / (Home). `.page-in` is the GSAP page-enter hook.
export default function HomePage() {
  return (
    <div className="page-in min-h-[40vh]">
      <Hero />
      <Marquee />
      <ServicesPreview />
      <FeaturedProjects />
      <Process />
      <TechStack />
      <CtaBand />
    </div>
  );
}

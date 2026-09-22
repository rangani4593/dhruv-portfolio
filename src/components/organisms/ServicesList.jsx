import Reveal from "@/components/atoms/Reveal";
import ServiceRow from "@/components/molecules/ServiceRow";
import { services } from "@/data/site";

// Organism: ServicesList — numbered list of detailed services (rows stagger in).
export default function ServicesList() {
  return (
    <Reveal stagger={0.08}>
      {services.map((s) => (
        <ServiceRow key={s.n} {...s} />
      ))}
    </Reveal>
  );
}

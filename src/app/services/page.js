import PageShell from "@/components/templates/PageShell";
import ServicesList from "@/components/organisms/ServicesList";

export const metadata = { title: "Services | Dhruv Rangani" };

// Route: /services
export default function ServicesPage() {
  return (
    <PageShell
      badge="What I Do"
      title="Services"
      lead="I offer AI engineering and full-stack development, from Shopify apps and CMS websites to dashboards and APIs."
    >
      <ServicesList />
    </PageShell>
  );
}

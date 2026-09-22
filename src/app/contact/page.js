import PageShell from "@/components/templates/PageShell";
import ContactSection from "@/components/organisms/ContactSection";

export const metadata = { title: "Contact — Dhruv Rangani" };

// Route: /contact
export default function ContactPage() {
  return (
    <PageShell
      badge="Get In Touch"
      title={<>Let&apos;s build something <span className="gr">great</span></>}
      lead="Have a project, a role, or just want to say hi? I'd love to hear from you."
    >
      <ContactSection />
    </PageShell>
  );
}

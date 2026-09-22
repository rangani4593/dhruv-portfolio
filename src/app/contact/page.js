import PageShell from "@/components/templates/PageShell";
import ContactSection from "@/components/organisms/ContactSection";

export const metadata = { title: "Contact | Dhruv Rangani" };

// Route: /contact
export default function ContactPage() {
  return (
    <PageShell
      badge="Get In Touch"
      title={<>Let&apos;s work <span className="gr">together</span></>}
      lead="Have a project in mind or a role to fill? Send me a message and I'll get back to you."
    >
      <ContactSection />
    </PageShell>
  );
}

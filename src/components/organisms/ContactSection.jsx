import Reveal from "@/components/atoms/Reveal";
import ContactLine from "@/components/molecules/ContactLine";
import ContactForm from "@/components/organisms/ContactForm";
import { profile } from "@/data/site";

// Organism: ContactSection — contact details + message form (frontend only).
export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
      <Reveal variant="left">
        <div>
          <ContactLine icon="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactLine icon="phone" label="Phone" value={profile.phone} href={`tel:${profile.phoneHref}`} />
          <ContactLine icon="map" label="Location" value={profile.location} />
          <ContactLine icon="clock" label="Response time" value="Usually within a few hours" />
        </div>
      </Reveal>
      <Reveal variant="right">
        <ContactForm />
      </Reveal>
    </div>
  );
}

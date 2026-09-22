import Link from "next/link";
import Icon from "@/components/atoms/Icon";
import { profile } from "@/data/site";

// Organism: Footer — copyright + quick contact icons.
const SOCIAL =
  "w-10 h-10 grid place-items-center border border-line2 rounded-[11px] bg-card text-body transition-all duration-300 hover:bg-b1 hover:text-white hover:-translate-y-0.5";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line mt-[50px] py-10">
      <div className="max-w-wrap mx-auto px-[26px] flex justify-between items-center flex-wrap gap-4 text-faint text-sm">
        <div>
          © {year} {profile.name} · {profile.role}
        </div>
        <div className="flex gap-2.5">
          <a href={`mailto:${profile.email}`} aria-label="Email" className={SOCIAL}>
            <Icon name="mail" size={18} />
          </a>
          <a href={`tel:${profile.phoneHref}`} aria-label="Phone" className={SOCIAL}>
            <Icon name="phone" size={18} />
          </a>
          <Link href="/projects" aria-label="Work" className={SOCIAL}>
            <Icon name="briefcase" size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

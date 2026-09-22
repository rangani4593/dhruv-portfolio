import Link from "next/link";
import { profile } from "@/data/site";

// Atom: Logo — brand mark that links back home.
export default function Logo() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <Link href="/" className="flex items-center gap-2.5 font-sans font-bold text-[19px]">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-[34px] h-[34px] rounded-full object-cover ring-2 ring-b1/40"
      />
      {first}
      <span className="text-b1">{rest.join(" ")}</span>
    </Link>
  );
}

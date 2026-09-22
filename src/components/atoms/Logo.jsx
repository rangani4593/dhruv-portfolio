import Link from "next/link";
import { profile } from "@/data/site";

// Atom: Logo — brand mark that links back home.
export default function Logo() {
  const [first, ...rest] = profile.name.split(" ");
  return (
    <Link href="/" className="flex items-center gap-2.5 font-sans font-bold text-[19px]">
      <span className="w-[30px] h-[30px] rounded-[9px] bg-grad grid place-items-center text-white text-sm font-bold">
        {profile.initials}
      </span>
      {first}
      <span className="text-b1">{rest.join(" ")}</span>
    </Link>
  );
}

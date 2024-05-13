import { ArrowBigDown } from "lucide-react";
import Link from "next/link";

export default function Headerlogo() {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <ArrowBigDown size={28} />
        <p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
}

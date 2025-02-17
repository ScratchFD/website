import Link from "next/link";
import { LogoNextjs, LogoVercel, Slash } from "./logo";

export function LogoVercel_Nextjs() {
  return (
    <>
      <Link
        href={`https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=home`}
        target="block"
        className="relative flex flex-col justify-center items-center"
        aria-label="vercel"
      >
        <LogoVercel />
        <span className="hidden">Vercel</span>
      </Link>
      <Slash />
      <Link
        href={`https://nextjs.org`}
        target="block"
        className="relative flex flex-col justify-center items-center text-sm"
        aria-label="next.js"
      >
        <LogoNextjs />
        <span className="hidden">Next.js</span>
      </Link>
    </>
  );
}

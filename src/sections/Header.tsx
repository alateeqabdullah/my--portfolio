"use client"


import Link from "next/link";
import { navLinks } from "../../lib/constant";
import { usePathname } from "next/navigation";

export const Header = () => {
const activePathName = usePathname()

  return (
    <section className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 list-none rounded-full bg-white/10 backdrop-blur">
        {navLinks.map((nav) => (
          <li key={nav.href} className={`${activePathName === nav.href ? "nav-active" : "nav-item" }`}>
          
            <Link href={nav.href}>{nav.title}</Link>
          </li>
        ))}

     
      </nav>
    </section>
  );
};

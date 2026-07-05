"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About Me" },
];

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="w-full bg-[#A8D478]/25">
      {/* Removed the max-w restriction so it spans the entire screen edge-to-edge */}
      <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="font-serif text-2xl md:text-3xl tracking-tight text-gray-900 hover:opacity-60 transition-opacity"
        >
          ayahs blog
        </Link>
        
        {/* LINKS */}
        <ul className="flex items-center gap-4 sm:gap-8 text-sm md:text-base">
          {items.map((it) => {
            const isActive = pathname === it.href;
            
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={`text-gray-800 hover:text-gray-500 transition-colors underline-offset-4 decoration-gray-400 ${
                    isActive ? "underline" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
        
      </div>
    </nav>
  );
}
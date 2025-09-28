// === src/components/nav.tsx ===
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
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-3xl tracking-tight text-gray-900">
          ayah
        </Link>
        <ul className="flex items-center gap-4 text-sm md:text-base">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={`navlink text-gray-900 hover:text-gray-700 ${pathname === it.href ? "underline" : ""
                  }`}
                aria-current={pathname === it.href ? "page" : undefined}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
}

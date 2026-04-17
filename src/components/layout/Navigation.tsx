"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/about/governance", label: "Governance" },
  { href: "/about/nations", label: "Nations" },
  { href: "/about/objectives", label: "Objectives" },
  { href: "/news", label: "News" },
  { href: "/media", label: "Media" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
            pathname === link.href
              ? "text-ochre-400 bg-charcoal-800"
              : "text-charcoal-200 hover:text-white hover:bg-charcoal-800"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

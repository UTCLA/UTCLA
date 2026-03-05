import Link from "next/link";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-charcoal-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-heading text-xl font-bold text-white tracking-wide">
              UTCLA
            </span>
            <span className="hidden sm:inline text-xs text-charcoal-400 border-l border-charcoal-600 pl-3">
              United Tribal Countries Land Alliance
            </span>
          </Link>
          <Navigation />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

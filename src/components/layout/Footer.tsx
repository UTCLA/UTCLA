import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">UTCLA</h3>
            <p className="text-sm leading-relaxed">
              The United Tribal Countries Land Alliance is a voluntary alliance
              of self-governing Tribal Nations across Terra Australis, united
              under Tjukurpa (Law/Lore).
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/about/governance", label: "Governance" },
                { href: "/about/nations", label: "Member Nations" },
                { href: "/about/objectives", label: "Objectives" },
                { href: "/news", label: "News" },
                { href: "/media", label: "Media" },
                { href: "/resources", label: "Resources" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-ochre-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Diplomatic Contact
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              For diplomatic correspondence and formal enquiries, please use our
              contact form.
            </p>
            <Link
              href="/contact"
              className="text-ochre-400 hover:text-ochre-300 text-sm font-medium transition-colors"
            >
              Contact the Alliance &rarr;
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-charcoal-700 text-center">
          <p className="font-heading text-base text-ochre-400 italic mb-4 tracking-wide">
            Sovereignty was never ceded.
          </p>
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} United Tribal Countries Land Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Logo from "./Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/areas-of-interest", label: "Areas of Interest" },
  { href: "/business-owners", label: "For Business Owners" },
  { href: "/advisors-connectors", label: "Advisors & Connectors" },
  { href: "/contact", label: "Start a Conversation" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-heading text-lg font-bold text-white">
            <Logo className="h-6 w-6 text-brand-500" />
            Quadrant Alliance
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-400">
            Building automation and controls, built around the local teams who
            do the work.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-400">
            <li>
              <Link
                href="/contact"
                className="text-ink-400 transition hover:text-white"
              >
                Start a conversation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800 px-6 py-6 text-center text-xs text-ink-500">
        © 2026 Quadrant Alliance. All rights reserved.
      </div>
    </footer>
  );
}

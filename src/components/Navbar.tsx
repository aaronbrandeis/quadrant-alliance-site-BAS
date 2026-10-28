"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/areas-of-interest", label: "Areas of Interest" },
  { href: "/business-owners", label: "For Business Owners" },
  { href: "/advisors-connectors", label: "Advisors & Connectors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every hero is a light grey surface, so the chrome stays dark on ink
  // throughout. Only the bar's own background changes on scroll.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? "border-b border-ink-200 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {!solid && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-50 via-ink-50/80 to-transparent" />
      )}

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-ink-900"
        >
          <Logo className="h-6 w-6 text-brand-600" />
          Quadrant
          <span className="hidden text-sm font-semibold text-ink-500 sm:inline">
            Alliance
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                solid
                  ? "font-semibold text-ink-700 hover:text-ink-950"
                  : "font-bold text-ink-900 hover:text-brand-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm ring-1 ring-brand-700/20 transition hover:bg-brand-500"
          >
            Start a Conversation
          </Link>
        </div>

        <button
          type="button"
          className="text-ink-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-600"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

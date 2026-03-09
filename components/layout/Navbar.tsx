"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import translations from "@/lib/i18n";

const t = translations.es;

const navLinks = [
  { label: t.nav.home, href: "/" },
  { label: t.nav.about, href: "/about" },
  { label: t.nav.services, href: "/services" },
  { label: t.nav.contact, href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Dra. Fabiola Díaz"
            height={48}
            width={160}
            unoptimized
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors hover:text-[#0297ce] ${
                  pathname === href ? "text-[#0297ce]" : "text-gray-700"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#0297ce] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#0280b0] transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors hover:text-[#0297ce] ${
                    pathname === href ? "text-[#0297ce]" : "text-gray-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

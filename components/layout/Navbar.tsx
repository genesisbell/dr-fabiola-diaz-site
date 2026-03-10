"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/context/LanguageContext";
import { PhoneIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo.svg"
            alt={t.general.doctorName}
            height={48}
            width={48}
            unoptimized
            className="h-12 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-900">{t.general.doctorName}</span>
            <span className="text-xs text-primary">{t.general.specialty}</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${pathname === href ? "text-primary" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Call CTA — always visible, icon-only on mobile */}
          <a
            href={t.footer.phoneUrl}
            className="btn-secondary inline-flex items-center gap-2"
            aria-label={t.nav.callNow}
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden md:inline">{t.nav.callNow}</span>
          </a>

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
        </div>
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
                  className={`nav-link block ${pathname === href ? "text-primary" : ""}`}
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

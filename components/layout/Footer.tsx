"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  const { t, locale, toggle } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/#profile" },
    { label: t.nav.services, href: "/#pricing" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Logo + name + tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt={t.general.doctorName}
                height={48}
                width={48}
                unoptimized
                className="h-12 w-auto flex-shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">{t.general.doctorName}</span>
                <span className="text-xs text-primary">{t.general.specialty}</span>
              </div>
            </div>
            <p className="text-sm text-purple-200">{t.general.tagline}</p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-200 mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact info + social */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-200 mb-4">
                {t.footer.contactUs}
              </h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <a href={t.footer.addressUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                    📍 {t.footer.address}
                  </a>
                </li>
                <li>
                  <a href={t.footer.phoneUrl} className="text-white hover:text-primary transition-colors">
                    📞 {t.footer.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${t.footer.email}`} className="text-white hover:text-primary transition-colors">
                    ✉️ {t.footer.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-200 mb-3">
                {t.footer.followUs}
              </h3>
              <div className="flex items-center gap-4">
                <a href={t.footer.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E1306C] transition-colors" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href={t.footer.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href={t.footer.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={toggle}
                className="self-start mt-4 text-xs font-semibold text-purple-300 hover:text-white transition-colors px-2 py-0.5 rounded border border-purple-700 hover:border-purple-400"
                aria-label="Toggle language"
              >
                {locale === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-800">
        <div className="page-container py-4 text-center text-sm text-purple-300">
          © {year} {t.general.doctorName}. {t.footer.rights}
        </div>
        <div className="page-container pb-4 text-center text-xs text-purple-400">
          {t.footer.madeWith}{" "}
          <a href="https://margaretsoftware.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            {t.footer.madeBy}
          </a>
        </div>
      </div>
    </footer>
  );
}

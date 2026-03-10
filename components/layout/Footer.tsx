import Image from "next/image";
import Link from "next/link";
import translations from "@/lib/i18n";

const t = translations.es;

const navLinks = [
  { label: t.nav.home, href: "/" },
  { label: t.nav.about, href: "/about" },
  { label: t.nav.services, href: "/services" },
  { label: t.nav.contact, href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt={t.general.doctorName}
              height={48}
              width={160}
              unoptimized
              className="h-12 w-auto"
            />
            <p className="text-sm text-purple-200">
              {t.general.tagline}
            </p>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-200 mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-200 mb-4">
              {t.footer.contactUs}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white">
              <li>📍 {t.footer.addressPlaceholder}</li>
              <li>📞 {t.footer.phonePlaceholder}</li>
              <li>✉️ {t.footer.emailPlaceholder}</li>
            </ul>
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
          <a
            href="https://margaretsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {t.footer.madeBy}
          </a>
        </div>
      </div>
    </footer>
  );
}

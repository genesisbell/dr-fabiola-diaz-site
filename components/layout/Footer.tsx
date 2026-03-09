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
    <footer className="bg-[#500c5a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt="Dra. Fabiola Díaz"
              height={48}
              width={160}
              unoptimized
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-purple-200">
              Medicina con calidez y compromiso.
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
                    className="text-sm text-white hover:text-[#0297ce] transition-colors"
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
              <li>📍 Dirección pendiente</li>
              <li>📞 Teléfono pendiente</li>
              <li>✉️ Email pendiente</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-purple-300">
          © {year} Dra. Fabiola Díaz. {t.footer.rights}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 text-center text-xs text-purple-400">
          Hecho con &lt;3 por{" "}
          <a
            href="https://margaretsoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Margaret Software
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CheckIcon, CalendarIcon, PhoneIcon } from "@/components/ui/Icons";
import SectionContainer from "@/components/layout/SectionContainer";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3i3S50LUzB1_hdo6-YSgF8oT_neU8wdBhsLCIPVNtGI2oe3O1YVtJAZeVfDrj0LAMMoIFLqrg-?gv=true";

function openCalendar() {
  const w = 800, h = 700;
  const left = window.screenX + (window.outerWidth - w) / 2;
  const top = window.screenY + (window.outerHeight - h) / 2;
  window.open(CALENDAR_URL, "google-calendar", `width=${w},height=${h},left=${left},top=${top},scrollbars=yes`);
}

export default function ServicesPage() {
  const { t } = useLanguage();
  const { services, pricing, footer, about, nav } = t;

  return (
    <SectionContainer>
      {/* Header */}
      <div className="flex flex-col gap-2 mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {pricing.sectionLabel}
        </p>
        <h1 className="text-4xl font-bold text-secondary">{services.title}</h1>
        <p className="text-gray-500 max-w-xl">{services.subtitle}</p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {pricing.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-5 rounded-2xl border border-gray-200 p-8 hover:border-primary hover:shadow-md transition"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-secondary">{item.title}</h2>
              <p className="text-3xl font-bold text-primary">
                {item.price}
                <span className="text-base align-super">*</span>
              </p>
            </div>

            <ul className="flex flex-col gap-2 flex-1">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            {item.note && (
              <p className="text-xs text-gray-400 italic leading-relaxed">{item.note}</p>
            )}

            {item.ctaType === "call" ? (
              <a
                href={footer.phoneUrl}
                className="btn-accent inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon />
                {nav.callNow}
              </a>
            ) : (
              <button
                onClick={openCalendar}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <CalendarIcon />
                {about.cta}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Disclaimer + CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-8">
        <p className="text-xs text-gray-400 italic">{pricing.disclaimer}</p>
        <Link href="/contact" className="btn-outline whitespace-nowrap">
          {services.cta}
        </Link>
      </div>
    </SectionContainer>
  );
}

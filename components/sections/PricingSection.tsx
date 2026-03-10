"use client";

import { useLanguage } from "@/lib/context/LanguageContext";
import { CheckIcon, CalendarIcon, PhoneIcon } from "@/components/ui/Icons";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3i3S50LUzB1_hdo6-YSgF8oT_neU8wdBhsLCIPVNtGI2oe3O1YVtJAZeVfDrj0LAMMoIFLqrg-?gv=true";

function openCalendar() {
  const w = 800, h = 700;
  const left = window.screenX + (window.outerWidth - w) / 2;
  const top = window.screenY + (window.outerHeight - h) / 2;
  window.open(CALENDAR_URL, "google-calendar", `width=${w},height=${h},left=${left},top=${top},scrollbars=yes`);
}

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-secondary">
      <div className="page-container flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.pricing.sectionLabel}
          </p>
          <h2 className="text-3xl font-bold text-white">{t.pricing.sectionTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.pricing.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-4xl font-bold text-primary">
                {item.price}<span className="text-xl align-super">*</span>
              </p>

              <ul className="flex flex-col gap-2">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-purple-100">
                    <CheckIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {item.note && (
                <p className="text-xs text-purple-300 leading-relaxed italic">{item.note}</p>
              )}
              {item.ctaType === "call" ? (
                <a href={t.footer.phoneUrl} className="mt-auto btn-secondary inline-flex items-center justify-center gap-2">
                  <PhoneIcon />
                  {t.nav.callNow}
                </a>
              ) : (
                <button onClick={openCalendar} className="mt-auto btn-primary inline-flex items-center justify-center gap-2">
                  <CalendarIcon />
                  {t.about.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-purple-300 italic">{t.pricing.disclaimer}</p>
      </div>
    </section>
  );
}

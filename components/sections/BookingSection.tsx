"use client";

import { useLanguage } from "@/lib/context/LanguageContext";

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="page-container flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.booking.sectionLabel}
          </p>
          <h2 className="text-3xl font-bold text-gray-900">{t.booking.sectionTitle}</h2>
          <p className="text-gray-500 max-w-xl">{t.booking.sectionSubtitle}</p>
        </div>

        <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3i3S50LUzB1_hdo6-YSgF8oT_neU8wdBhsLCIPVNtGI2oe3O1YVtJAZeVfDrj0LAMMoIFLqrg-?gv=true"
            width="100%"
            height="700"
            frameBorder="0"
            title={t.booking.sectionTitle}
          />
        </div>
      </div>
    </section>
  );
}

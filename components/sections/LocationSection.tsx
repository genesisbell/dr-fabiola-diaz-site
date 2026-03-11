"use client";

import { useLanguage } from "@/lib/context/LanguageContext";

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="page-container flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.location.sectionLabel}
          </p>
          <h2 className="text-3xl font-bold text-gray-900">{t.location.sectionTitle}</h2>
          <p className="text-gray-500">{t.location.address}</p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6230187343276!2d-103.37755639999999!3d20.6849106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae15bf4f4acd%3A0xbe8e5ac115cdcea5!2sCalle%20Luis%20P%C3%A9rez%20Verd%C3%ADa%20475%2C%20Ladr%C3%B3n%20de%20Guevara%2C%20Ladron%20De%20Guevara%2C%2044650%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1773106465324!5m2!1sen!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t.location.sectionTitle}
          />
        </div>
      </div>
    </section>
  );
}

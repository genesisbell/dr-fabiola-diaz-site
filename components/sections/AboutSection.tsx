"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/LanguageContext";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

const slideIn = (direction: "left" | "right") => ({
  initial: { opacity: 0, x: direction === "left" ? -80 : 80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-accent-texture min-h-screen flex items-center py-16">
      <div className="page-container flex flex-col md:flex-row items-center justify-center w-full">
        {/* Photo — slides in from left, overlaps card by 2rem on desktop */}
        <motion.div
          className="flex-shrink-0 z-10 md:-mr-8 -mb-6 md:mb-0"
          {...slideIn("left")}
        >
          <Image
            src="/doctor-v2.png"
            alt={t.general.doctorName}
            width={460}
            height={600}
            className="w-[280px] md:w-[380px] h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Text — slides in from right */}
        <motion.div
          className="flex flex-col gap-4 bg-white rounded-2xl shadow-md px-10 py-8 md:pl-16"
          {...slideIn("right")}
        >
          <h2 className="text-3xl font-bold text-gray-900">{t.general.doctorName}</h2>
          <p className="text-lg font-medium text-secondary">{t.general.specialty}</p>
          <p className="text-gray-600 leading-relaxed max-w-prose">{t.about.bio}</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-2">
            <a href="https://calendar.app.google/Zmy8KDuCYttNxJKx5" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <CalendarIcon />
              {t.about.cta}
            </a>
            <a href={t.footer.social.whatsapp} className="btn-whatsapp inline-flex items-center gap-2">
              <WhatsAppIcon />
              {t.about.ctaWhatsapp}
            </a>
            <a href={t.footer.phoneUrl} className="btn-secondary inline-flex items-center gap-2">
              <PhoneIcon />
              {t.about.ctaCall}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

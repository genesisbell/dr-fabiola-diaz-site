"use client";

import { useLanguage } from "@/lib/context/LanguageContext";
import { IdCardIcon, GraduationCapIcon, BadgeCheckIcon } from "@/components/ui/Icons";

interface CredentialCardProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function CredentialCard({ icon, label, children }: CredentialCardProps) {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">{label}</h3>
      </div>
      <div className="text-gray-800">{children}</div>
    </div>
  );
}

export default function ProfileSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="page-container flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t.profile.sectionLabel}
          </p>
          <h2 className="text-3xl font-bold text-gray-900">{t.profile.sectionTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cédula */}
          <CredentialCard icon={<IdCardIcon />} label={t.profile.cedula.label}>
            <ul className="flex flex-col gap-3">
              {[t.profile.cedula.medicine, t.profile.cedula.specialty].map((c) => (
                <li key={c.label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{c.label}</span>
                  <span className="text-lg font-bold text-secondary">{c.value}</span>
                </li>
              ))}
            </ul>
          </CredentialCard>

          {/* Education */}
          <CredentialCard icon={<GraduationCapIcon />} label={t.profile.education.label}>
            <ul className="flex flex-col gap-4">
              {t.profile.education.bodies.map((body) => (
                <li key={body.course} className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-gray-900">{body.course}</span>
                  <span className="text-sm text-gray-600">{body.institution}</span>
                  <span className="text-xs text-primary font-medium">{body.dateRange}</span>
                </li>
              ))}
            </ul>
          </CredentialCard>

          {/* Certification */}
          <CredentialCard icon={<BadgeCheckIcon />} label={t.profile.certification.label}>
            <ul className="flex flex-col gap-4">
              {t.profile.certification.bodies.map((body) => (
                <li key={body} className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium text-gray-900 leading-snug">{body}</span>
                  <span className="inline-block self-start text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {t.profile.certification.status}
                  </span>
                </li>
              ))}
            </ul>
          </CredentialCard>
        </div>
      </div>
    </section>
  );
}

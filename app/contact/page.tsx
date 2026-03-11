"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import SocialLinks from "@/components/contact/SocialLinks";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useState } from "react";

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} <span className="text-accent">*</span>
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ parentName: "", name: "", age: "", reason: "", phone: "", lada: "+52" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) formatted = `${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6)}`;
    else if (digits.length > 2) formatted = `${digits.slice(0, 2)} ${digits.slice(2)}`;
    setForm({ ...form, phone: formatted });
  }

  return (
    <SectionContainer>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left — form */}
        <div>
          <SocialLinks />
          <h1 className="text-3xl font-bold text-secondary mb-2">{c.title}</h1>
          <p className="text-gray-500 mb-8">{c.subtitle}</p>

          {submitted ? (
            <div className="rounded-xl bg-primary/10 border border-primary p-6 text-center">
              <p className="text-primary font-semibold text-lg">{c.success}</p>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setError(null);
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(form),
                });
                setLoading(false);
                if (res.ok) {
                  setSubmitted(true);
                } else {
                  const data = await res.json();
                  setError(data.error ?? "Error al enviar. Intenta de nuevo.");
                }
              }}
              className="flex flex-col gap-5"
            >
              <Field id="parentName" label={c.fields.parentName.label}>
                <input id="parentName" name="parentName" type="text" required placeholder={c.fields.parentName.placeholder} value={form.parentName} onChange={handleChange} className="form-input" />
              </Field>

              <Field id="name" label={c.fields.name.label}>
                <input id="name" name="name" type="text" required placeholder={c.fields.name.placeholder} value={form.name} onChange={handleChange} className="form-input" />
              </Field>

              <Field id="age" label={c.fields.age.label}>
                <input id="age" name="age" type="text" inputMode="numeric" maxLength={3} pattern="[0-9]*" required placeholder={c.fields.age.placeholder} value={form.age} onChange={handleChange} className="form-input" />
              </Field>

              <Field id="reason" label={c.fields.reason.label}>
                <textarea id="reason" name="reason" required rows={4} placeholder={c.fields.reason.placeholder} value={form.reason} onChange={handleChange} className="form-input resize-none" />
              </Field>

              <Field id="phone" label={c.fields.phone.label}>
                <div className="flex gap-2">
                  <input id="lada" name="lada" type="text" value={form.lada} onChange={handleChange} className="form-input w-20 text-center" />
                  <input id="phone" name="phone" type="tel" required placeholder="33 1234 5678" value={form.phone} onChange={handlePhoneChange} className="form-input flex-1" />
                </div>
              </Field>

              {error && <p className="text-sm text-accent text-center">{error}</p>}

              <button type="submit" disabled={loading} className="btn-primary mt-2 w-full !rounded-lg !py-3 !text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? "Enviando..." : c.submit}
              </button>
            </form>
          )}
        </div>

        {/* Right — map */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-24">
          <div className="w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.6230187343276!2d-103.37755639999999!3d20.6849106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae15bf4f4acd%3A0xbe8e5ac115cdcea5!2sCalle%20Luis%20P%C3%A9rez%20Verd%C3%ADa%20475%2C%20Ladr%C3%B3n%20de%20Guevara%2C%20Ladron%20De%20Guevara%2C%2044650%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1773106465324!5m2!1sen!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación consultorio"
            />
          </div>
          <a
            href={t.footer.addressUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            📍 {t.footer.address}
          </a>
        </div>

      </div>
    </SectionContainer>
  );
}

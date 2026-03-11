import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "fabioladiaz.ped@gmail.com";
const FROM = process.env.RESEND_FROM ?? "onboarding@resend.dev";

export async function POST(req: Request) {
  const { parentName, name, age, reason, lada, phone } = await req.json();

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    subject: `Nueva solicitud de consulta — ${name}`,
    html: `
      <h2>Nueva solicitud de consulta</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Padre/Madre/Tutor</strong></td><td>${parentName}</td></tr>
        <tr><td><strong>Nombre del niño/a</strong></td><td>${name}</td></tr>
        <tr><td><strong>Edad</strong></td><td>${age} años</td></tr>
        <tr><td><strong>Teléfono</strong></td><td>${lada} ${phone}</td></tr>
        <tr><td><strong>Motivo de consulta</strong></td><td>${reason}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

import type { Metadata } from "next";
import Link from "next/link";

import { FormularioSolicitud } from "@/components/FormularioSolicitud";
import {
  ArrowRightIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { PageBanner, SectionHeading } from "@/components/ui";
import { contact, donation } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a la Fundación Dr. Rodrigo Testart Tobar: solicitud de subvención, consultas, horarios y datos para realizar aportes.",
};

const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Las Pelargonias 60, Concón, Chile",
)}`;

export default function ContactoPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contacto"
        title="Estamos aquí para acompañarte"
        description="Escríbenos para presentar tu solicitud de apoyo, consultar por un servicio o conocer cómo aportar a la fundación."
      />

      <section className="page-wrap grid gap-12 py-20 lg:grid-cols-12">
        <div id="solicitud" className="scroll-mt-32 lg:col-span-7">
          <FormularioSolicitud />
        </div>

        <div className="lg:col-span-5">
          <div className="surface-card p-8">
            <h2 className="font-display text-xl font-bold">Datos de contacto</h2>
            <ul className="mt-6 space-y-5 text-[0.95rem]">
              <li className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-turq-100 text-turq-700">
                  <PinIcon />
                </span>
                <span>
                  <span className="block font-semibold text-turq-800">Dirección</span>
                  <span className="mt-1 block leading-relaxed text-ink/70">
                    {contact.address}
                    <br />
                    {contact.city}
                  </span>
                  <a
                    href={mapa}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-turq-600 transition hover:text-turq-500"
                  >
                    Ver en el mapa
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-turq-100 text-turq-700">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block font-semibold text-turq-800">Teléfono</span>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-ink/70 transition hover:text-turq-600"
                  >
                    {contact.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-turq-100 text-turq-700">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="block font-semibold text-turq-800">WhatsApp</span>
                  <a
                    href="https://wa.me/56955225749"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-ink/70 transition hover:text-turq-600"
                  >
                    {contact.whatsappDisplay}
                  </a>
                  <p className="mt-1 text-sm text-ink/55">Para aclarar dudas</p>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-turq-100 text-turq-700">
                  <MailIcon />
                </span>
                <span>
                  <span className="block font-semibold text-turq-800">Correo electrónico</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block break-all text-ink/70 transition hover:text-turq-600"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`mailto:${contact.emailClinico}`}
                    className="mt-1 block break-all text-ink/70 transition hover:text-turq-600"
                  >
                    {contact.emailClinico}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-turq-100 text-turq-700">
                  <ClockIcon />
                </span>
                <span>
                  <span className="block font-semibold text-turq-800">Horario de atención</span>
                  <span className="mt-1 block text-ink/70">
                    {contact.hours.map((item) => (
                      <span key={item.day} className="block">
                        {item.day}: {item.time}
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl border border-turq-200 bg-turq-50 p-8">
            <h2 className="font-display text-lg font-bold">Para pacientes</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
              Para consultar, agendar y conocer valores llama al {contact.phoneDisplay}. La
              evaluación del equipo de la fundación se realiza de manera individualizada y el
              resultado se comunica a cada paciente.
            </p>
            <Link href="/servicios" className="btn btn-outline mt-6">
              Ver servicios
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section id="donar" className="scroll-mt-32 border-y border-turq-200 bg-turq-100 py-20">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Aportes y donaciones"
              title="Cada acción cuenta, y la tuya es un eslabón de esta cadena de ayuda"
              description={donation.description}
            />
            <ol className="mt-10 space-y-4">
              {[
                "Realiza una contribución única o un aporte periódico mediante transferencia.",
                "Envíanos un correo con tu nombre, tu RUT, tu teléfono y el comprobante.",
                "Te confirmamos la recepción y acreditamos tu contribución al programa de subvención.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4 text-ink/70">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-turq-200 font-display text-sm font-bold text-turq-700">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-turq-200 bg-white/85 p-8 backdrop-blur">
            <h3 className="font-display text-lg font-bold text-turq-800">Datos para transferir</h3>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Nombre
                </dt>
                <dd className="mt-1 text-turq-50">{donation.bank.holder}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Cuenta corriente
                </dt>
                <dd className="mt-1 text-turq-50">{donation.bank.account}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  RUT
                </dt>
                <dd className="mt-1 text-turq-50">{donation.bank.rut}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Correo electrónico
                </dt>
                <dd className="mt-1 break-all text-turq-50">{donation.bank.email}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  WhatsApp
                </dt>
                <dd className="mt-1 text-turq-50">{donation.bank.whatsapp}</dd>
              </div>
            </dl>
            <a
              href={`mailto:${donation.bank.email}?subject=Aporte%20a%20la%20Fundaci%C3%B3n`}
              className="btn btn-primary mt-8 w-full"
            >
              Enviar comprobante
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

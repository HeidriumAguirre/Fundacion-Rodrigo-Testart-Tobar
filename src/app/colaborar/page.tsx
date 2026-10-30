import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { PageBanner, SectionHeading } from "@/components/ui";
import { contact, donation } from "@/content/site";

export const metadata: Metadata = {
  title: "Cómo colaborar",
  description:
    "Cómo colaborar con la Fundación Dr. Rodrigo Testart Tobar: donaciones, voluntariado, alianzas y aportes en especie, con instrucciones claras.",
};

const modalidades = [
  {
    titulo: "Donaciones",
    resumen: "Aportes únicos o periódicos que financian tratamientos de pacientes.",
    icono: "donacion" as const,
    pasos: [
      "Transfiere a la cuenta indicada en la sección Donar.",
      "Envía un correo con tu nombre, RUT, teléfono y comprobante.",
      "Te confirmamos la recepción y acreditamos tu contribución.",
    ],
  },
  {
    titulo: "Voluntariado",
    resumen: "Aportes de tiempo y talento para sostener la red de apoyo.",
    icono: "voluntariado" as const,
    pasos: [
      "Escríbenos indicando tus habilidades y disponibilidad.",
      "Te orientamos sobre las tareas donde más podemos apoyarnos.",
      "Te integras al equipo de colaboradores de la fundación.",
    ],
  },
  {
    titulo: "Alianzas",
    resumen: "Instituciones y empresas que suman cobertura y visibilidad.",
    icono: "alianzas" as const,
    pasos: [
      "Propón tu institución o empresa y el alcance del acuerdo.",
      "Definimos en conjunto qué aportan: atenciones, productos o difusión.",
      "Formalizamos la alianza y publicamos el alcance acordado.",
    ],
  },
  {
    titulo: "Aportes en especie",
    resumen: "Productos, insumos, equipos o espacios que necesita el programa.",
    icono: "especie" as const,
    pasos: [
      "Envíanos el detalle de lo que puedes aportar.",
      "El equipo evalúa su utilidad para el programa de subvención.",
      "Coordinamos la entrega o el uso del aporte.",
    ],
  },
];

export default function ColaborarPage() {
  return (
    <>
      <PageBanner
        eyebrow="Cómo colaborar"
        title="Hay muchas formas de ser parte de esta cadena de ayuda"
        description="Tu participación, ya sea a través de contribuciones únicas, aportes periódicos o la difusión de la misión, fortalece nuestro impacto y nos permite alcanzar metas aún mayores."
      />

      <section className="page-wrap py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {modalidades.map((modalidad) => (
            <div key={modalidad.titulo} className="surface-card p-8 sm:p-10">
              <h2 className="text-2xl font-bold">{modalidad.titulo}</h2>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/70">{modalidad.resumen}</p>
              <ol className="mt-7 space-y-4">
                {modalidad.pasos.map((paso, index) => (
                  <li key={paso} className="flex gap-4">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-turq-100 font-display text-sm font-bold text-turq-700">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-[0.98rem] leading-relaxed text-ink/75">{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section id="donar" className="scroll-mt-32 bg-turq-800 py-20 text-white">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Donaciones"
              title="Cómo transferir tu aporte"
              description={donation.description}
            />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${donation.bank.email}?subject=Aporte%20a%20la%20Fundaci%C3%B3n`}
                className="btn btn-ghost-light"
              >
                <MailIcon />
                Enviar comprobante
              </a>
              <a
                href="https://wa.me/56955225749"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost-light"
              >
                <WhatsAppIcon />
                {contact.whatsappDisplay}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-turq-700 bg-turq-900/50 p-8 backdrop-blur">
            <h3 className="font-display text-lg font-bold text-white">Datos para transferir</h3>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-300">
                  Nombre
                </dt>
                <dd className="mt-1 text-turq-50">{donation.bank.holder}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-300">
                  Cuenta corriente
                </dt>
                <dd className="mt-1 text-turq-50">{donation.bank.account}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-300">
                  RUT
                </dt>
                <dd className="mt-1 text-turq-50">{donation.bank.rut}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-300">
                  Correo electrónico
                </dt>
                <dd className="mt-1 break-all text-turq-50">{donation.bank.email}</dd>
              </div>
            </dl>
            <ul className="mt-7 space-y-2 border-t border-turq-700 pt-5 text-sm text-turq-100/75">
              <li className="flex gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-turq-300" />
                Envía tu nombre, RUT, teléfono y comprobante por correo.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-turq-300" />
                También puedes coordinar un aporte en la sucursal de Concón.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-wrap py-20">
        <div className="rounded-3xl border border-turq-200 bg-turq-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">¿Prefieres partir por una sola consulta?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-ink/70">
            También puedes presentarte como paciente candidato al programa de subvención. Revisa la
            información y completa el formulario de solicitud.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contacto#solicitud" className="btn btn-primary">
              Solicitar apoyo
              <ArrowRightIcon />
            </Link>
            <Link href="/servicios" className="btn btn-outline">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

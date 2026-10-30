import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/icons";
import { PageBanner, SectionHeading } from "@/components/ui";
import { contact, donation } from "@/content/site";

export const metadata: Metadata = {
  title: "Transparencia",
  description:
    "Transparencia de la Fundación Dr. Rodrigo Testart Tobar: uso de los fondos, datos institucionales y documentos disponibles.",
};

const usoDeFondos = [
  {
    categoria: "Subvenciones a tratamientos",
    descripcion:
      "Porcentajes de subvención entregados a pacientes para ozonoterapia, vitamina C endovenosa, ondas escalares y otros tratamientos.",
    estado: "Prioridad del programa",
  },
  {
    categoria: "Productos e insumos",
    descripcion:
      "Adquisición de aceites ozonizados, promesas de melatonina e insumos necesarios para las atenciones.",
    estado: "Segundo nivel",
  },
  {
    categoria: "Difusión y educación",
    descripcion:
      "Material educativo abierto: artículos, videos y contenido de la serie Ozonoterapia en acción.",
    estado: "En ejecución",
  },
  {
    categoria: "Gestión y operación",
    descripcion:
      "Coordinación, atención de pacientes, comunicación y costos administrativos indispensables.",
    estado: "Costos indispensables",
  },
];

const documentos = [
  {
    nombre: "Memoria anual de la fundación",
    estado: "En preparación",
    detalle: "Se publicará al cierre del primer año completo de operación.",
  },
  {
    nombre: "Informe de subvenciones otorgadas",
    estado: "En preparación",
    detalle: "Detalle de solicitudes evaluadas y beneficios entregados, con datos anonimizados.",
  },
  {
    nombre: "Reglamento de admisión y evaluación",
    estado: "Disponible a solicitud",
    detalle: "Documento interno que explica los criterios de evaluación del programa.",
  },
  {
    nombre: "Política de privacidad y datos personales",
    estado: "Disponible a solicitud",
    detalle: "Explica cómo tratamos los datos que nos entregas a través del formulario.",
  },
];

export default function TransparenciaPage() {
  return (
    <>
      <PageBanner
        eyebrow="Transparencia"
        title="Cada peso tiene un destino y cada dato, una historia"
        description="La fundación opera en fase de consolidación. Publicamos cómo se usan los fondos, quién responde por la institución y qué documentos están disponibles para la comunidad."
      />

      <section className="page-wrap grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            align="left"
            eyebrow="Uso de los fondos"
            title="A qué destinamos cada aporte"
            description="El principio es simple: la mayor parte de los recursos debe llegar directamente a los tratamientos de los pacientes."
          />
          <div className="mt-10 space-y-4">
            {usoDeFondos.map((item) => (
              <div key={item.categoria} className="surface-card p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-bold">{item.categoria}</h3>
                  <span className="rounded-full bg-turq-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-turq-700">
                    {item.estado}
                  </span>
                </div>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/70">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="surface-card p-8">
            <p className="eyebrow">Datos institucionales</p>
            <h2 className="mt-4 text-xl font-bold">Quiénes responden</h2>
            <dl className="mt-6 space-y-5 text-[0.95rem]">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Razón social
                </dt>
                <dd className="mt-1 text-ink/75">{donation.bank.holder}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  RUT
                </dt>
                <dd className="mt-1 text-ink/75">{donation.bank.rut}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Cuenta corriente
                </dt>
                <dd className="mt-1 text-ink/75">{donation.bank.account}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Fundador y director
                </dt>
                <dd className="mt-1 text-ink/75">Dr. Rodrigo Testart Tobar</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Contacto
                </dt>
                <dd className="mt-1 text-ink/75">
                  {contact.email}
                  <br />
                  {contact.phoneDisplay}
                </dd>
              </div>
            </dl>
            <a
              href={`mailto:${contact.email}?subject=Consulta%20de%20transparencia`}
              className="btn btn-primary mt-7 w-full"
            >
              <MailIcon />
              Solicitar información
            </a>
          </div>

          <div className="mt-6 rounded-3xl border border-turq-200 bg-turq-50 p-8">
            <h3 className="font-display text-lg font-bold">Compromiso con los pacientes</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Los datos personales y fichas clínicas nunca se publican.",
                "Cada aportación se acredita con nombre, RUT y comprobante.",
                "Las cifras se presentan diferenciadas por programa.",
                "El equipo responde cualquier consulta en un plazo razonable.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/75">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turq-200 text-turq-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="bg-cream py-20">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Documentos"
            title="Información institucional disponible"
            description="Publicamos los documentos a medida que se consolidan. Puedes solicitar los que aún no están en línea."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {documentos.map((documento) => (
              <div key={documento.nombre} className="rounded-2xl border border-turq-100 bg-white p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold">{documento.nombre}</h3>
                  <span className="shrink-0 rounded-full bg-turq-50 px-3 py-1 text-xs font-semibold text-turq-700">
                    {documento.estado}
                  </span>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">{documento.detalle}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contacto" className="btn btn-outline">
              Solicitar un documento
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

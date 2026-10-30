import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, YoutubeIcon } from "@/components/icons";
import { PageBanner, SectionHeading } from "@/components/ui";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Impacto",
  description:
    "Impacto de la Fundación Dr. Rodrigo Testart Tobar: cifras, áreas de intervención, material educativo y[Testimonios con autorización.",
};

const cifras = [
  { value: "+40", label: "Años de experiencia médica del fundador" },
  { value: "+15", label: "Años de experiencia en ozonoterapia" },
  { value: "6", label: "Líneas de servicio y productos gestionadas" },
  { value: "100%", label: "Solicitudes evaluadas de forma individual" },
];

const areas = [
  {
    title: "Enfermedades crónicas",
    description:
      "Personas con diabetes, cáncer y otras enfermedades prolongadas que necesitan tratamientos costosos y continuos.",
  },
  {
    title: "Dolor y inflamación",
    description:
      "Artrosis, hernias discales, fibromialgia, fatiga crónica y enfermedades inflamatorias en general.",
  },
  {
    title: "Deportistas y alto rendimiento",
    description:
      "Atletas que buscan recuperación rápida, mayor energía y mejor desempeño en sus tareas diarias.",
  },
  {
    title: "Prevención y bienestar",
    description:
      "Personas que buscan fortalecer su sistema inmunológico y hábitos de vida más saludables.",
  },
];

const videos = [
  { title: "¿Si soy hipertenso me sirve la ozonoterapia?", duration: "02:20", id: "u38vdwIixHA" },
  {
    title: "¿Para qué enfermedades se recomienda la ozonoterapia?",
    duration: "03:00",
    id: "EUB2K3hVSsc",
  },
  { title: "Ozonoterapia: paciente con pie diabético.", duration: "04:26", id: "uV5T_EcF4Z8" },
  {
    title: "Un caso médico: distrofia miotónica de Steinert",
    duration: "07:07",
    id: "7elSVyyJeog",
  },
];

export default function ImpactoPage() {
  return (
    <>
      <PageBanner
        eyebrow="Impacto"
        title="Queremos que sepas dónde llega cada aporte"
        description="Publicamos de forma abierta lo que hacemos, con cifras verificables y el compromiso de no compartir datos de pacientes sin su autorización expresa."
      />

      <section className="border-b border-turq-100 bg-white">
        <div className="page-wrap grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {cifras.map((cifra) => (
            <div key={cifra.label} className="surface-card p-7 text-center">
              <p className="font-display text-4xl font-bold text-turq-600">{cifra.value}</p>
              <p className="mt-2 text-sm leading-snug text-ink/65">{cifra.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap grid items-center gap-14 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Dónde intervenimos"
            title="Personas a las que llegamos con cada programa"
            description="La fundación prioriza a quienes más necesitan estas terapias y no pueden costearlas por sí mismos."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <div key={area.title} className="rounded-2xl border border-turq-100 bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-turq-100 text-turq-700">
                  <CheckIcon />
                </span>
                <h3 className="mt-4 text-lg font-bold">{area.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src="/images/ozonoterapia-accion.jpg"
              alt="Dr. Rodrigo Testart en la serie Ozonoterapia en acción"
              width={1400}
              height={875}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 max-w-[16rem] rounded-2xl border border-turq-100 bg-white p-5 shadow-card">
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-turq-600">
              Material educativo
            </p>
            <p className="mt-1 text-sm leading-snug text-ink/70">
              Videos y artículos abiertos para la comunidad y los pacientes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-turq-200 bg-turq-100 py-20">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Ozonoterapia en acción"
            title="El doctor explica, en videos breves, cómo funciona cada tratamiento"
            description="Publicamos episodios de forma continua y los compartimos con pacientes y comunidad."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-turq-200 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-turq-500"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turq-200 text-turq-700 transition group-hover:bg-turq-300">
                  <YoutubeIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[1.05rem] font-bold text-turq-800">
                    {video.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink/55">{video.duration}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/channel/UColAFF3-rmaK_FpoOT1pbjQ"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Ver el canal completo
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="page-wrap grid gap-12 py-20 lg:grid-cols-2">
        <div className="surface-card p-8 sm:p-10">
          <p className="eyebrow">Testimonios</p>
          <h2 className="mt-4 text-2xl font-bold">Historias que contaremos con su permiso</h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/75">
            Los testimonios de pacientes se publicarán en este espacio con su autorización expresa.
            Cada persona decide si comparte su experiencia, con qué nombre y en qué términos.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/75">
            Si tu tratamiento fue posible gracias al apoyo de la fundación y quieres compartir tu
            experiencia, escríbenos. Publicaremos tu historia tal como la cuentes.
          </p>
          <Link href="/contacto" className="btn btn-primary mt-7">
            Compartir mi experiencia
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="surface-card p-8 sm:p-10">
          <p className="eyebrow">Compromiso de transparencia</p>
          <h2 className="mt-4 text-2xl font-bold">Datos que protegemos</h2>
          <ul className="mt-6 space-y-4">
            {[
              "No publicamos datos personales ni fichas clínicas de pacientes.",
              "Las cifras publicadas corresponden a la trayectoria de la fundación y pueden verificarse con el equipo.",
              "Toda contribución se acredita con nombre, RUT y comprobante, y puede solicitarse su detalle.",
              "El uso de los fondos se informa de forma diferenciada por programa.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/75">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turq-100 text-turq-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/transparencia" className="btn btn-outline mt-7">
            Ver uso de los fondos
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="page-wrap flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">
            ¿Quieres ser parte de este impacto?
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-relaxed text-ink/70">
            Con una contribución, con tiempo o difundiendo la misión, cada acción cuenta. Escríbenos
            al {contact.email} o por WhatsApp al {contact.whatsappDisplay}.
          </p>
          <Link href="/colaborar" className="btn btn-primary">
            Ver cómo colaborar
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { PageBanner, SectionHeading } from "@/components/ui";
import { noticias } from "@/content/noticias";

export const metadata: Metadata = {
  title: "Noticias y actividades",
  description:
    "Campañas, eventos y novedades de la Fundación Dr. Rodrigo Testart Tobar: programa de subvención, educación en salud, jornadas y alianzas.",
};

const estadoStyles = {
  Activo: "bg-turq-500 text-white",
  Continuo: "bg-turq-100 text-turq-800",
  Próximamente: "bg-cream text-ink/70",
} as const;

export default function NoticiasPage() {
  return (
    <>
      <PageBanner
        eyebrow="Noticias y actividades"
        title="Campañas, jornadas y novedades de la fundación"
        description="Aquí publicamos lo que estamos haciendo: el avance del programa de subvención, las actividades abiertas a la comunidad y los nuevos números de la fundación."
      />

      <section className="page-wrap py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {noticias.map((noticia) => (
            <article key={noticia.slug} className="surface-card overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden bg-turq-50">
                <Image
                  src={noticia.imagen}
                  alt={noticia.imagenAlt}
                  width={900}
                  height={506}
                  className="h-full w-full object-cover"
                />
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${estadoStyles[noticia.estado]}`}
                >
                  {noticia.estado}
                </span>
              </div>
              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-turq-500">
                  {noticia.categoria}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug">{noticia.title}</h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/75">
                  {noticia.descripcion}
                </p>
                <ul className="mt-6 space-y-2">
                  {noticia.acciones.map((accion) => (
                    <li key={accion} className="flex items-center gap-2 text-[0.95rem] text-ink/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-turq-400" />
                      {accion}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/colaborar" className="btn btn-primary">
                    Quiero participar
                    <ArrowRightIcon />
                  </Link>
                  <Link href="/contacto" className="btn btn-outline">
                    Escribir al equipo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-turq-50 py-20">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Mantente al día"
            title="Recibe las novedades de la fundación"
            description="Escríbenos con tu nombre y correo para recibir las novedades del programa, las actividades y los llamados a la acción."
          />
          <div className="mt-10 text-center">
            <Link href="/contacto" className="btn btn-primary">
              Dejar mis datos
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

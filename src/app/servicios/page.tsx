import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { PageBanner, SectionHeading } from "@/components/ui";
import { servicios } from "@/content/servicios";

export const metadata: Metadata = {
  title: "Servicios y productos",
  description:
    "Servicios y productos de la Fundación Dr. Rodrigo Testart Tobar: consulta médica general, ozonoterapia, vitamina C endovenosa, ondas escalares de Tesla, aceites ozonizados y cremas de melatonina MEL13.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageBanner
        eyebrow="Servicios y productos"
        title="Medicina natural preventiva, al alcance de quien la necesita"
        description="Nuestro compromiso es ayudar a nuestros pacientes en todo momento y ofrecer servicios que les ayuden a cubrir sus necesidades. La fundación gestiona el respaldo económico para estas líneas de tratamiento."
      />

      <section className="page-wrap py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <article key={servicio.slug} className="surface-card group overflow-hidden">
              <Link href={`/servicios/${servicio.slug}`} className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-turq-50">
                  <Image
                    src={servicio.image}
                    alt={servicio.imageAlt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-turq-500">
                    {servicio.eyebrow}
                  </p>
                  <h2 className="mt-3 text-xl font-bold leading-snug">{servicio.title}</h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                    {servicio.summary}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-ink/65">
                    {servicio.highlights.slice(0, 2).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turq-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-turq-600">
                    Ver detalle
                    <ArrowRightIcon className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-turq-50 py-20">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Cómo accede un paciente"
              title="El servicio no debería ser el único obstáculo"
              description="Desde la consulta inicial hasta la entrega de los productos, la fundación acompaña el proceso y financia el porcentaje de subvención que cada caso requiere."
            />
            <div className="mt-8 space-y-4 text-[1.02rem] leading-relaxed text-ink/75">
              <p>
                La ozonoterapia, la medicina ortomolecular y los suplementos son tratamientos
                complementarios que muchas veces no están cubiertos por isapres, Fonasa ni seguros.
              </p>
              <p>
                Por eso, con el liderazgo del Dr. Rodrigo Testart Tobar, implementaremos un programa
                de subvención y apoyo: los pacientes accederán a este beneficio mediante la
                presentación de un formulario de solicitud, y la asignación de porcentajes de
                subvención se determinará de manera individualizada, considerando la situación
                particular de cada paciente y los recursos disponibles en ese momento por parte de
                la fundación.
              </p>
            </div>
            <Link href="/contacto#solicitud" className="btn btn-primary mt-8">
              Solicitar apoyo
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="rounded-3xl border border-turq-200 bg-white p-8 shadow-soft">
            <h3 className="font-display text-xl font-bold">Consideraciones generales</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ink/70">
              <li>
                Las atenciones son realizadas por médicos especialistas y bajo indicación médica
                profesional.
              </li>
              <li>
                Los productos se despachan a todo Chile en días hábiles a través de Chilexpress,
                Starken y Correos de Chile.
              </li>
              <li>
                La consulta médica general se agenda llamando al 2 33 65 00 48, de lunes a viernes.
              </li>
              <li>
                Para menores de edad, lactantes o personas embarazadas se debe consultar con un
                especialista antes de usar los productos.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

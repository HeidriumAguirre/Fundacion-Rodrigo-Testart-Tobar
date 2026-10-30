import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";
import { servicios } from "@/content/servicios";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicios.map((servicio) => ({ slug: servicio.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const servicio = servicios.find((item) => item.slug === slug);

  if (!servicio) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: servicio.title,
    description: servicio.summary,
    openGraph: {
      title: servicio.title,
      description: servicio.summary,
      images: [{ url: servicio.image }],
    },
  };
}

export default async function ServicioPage({ params }: Params) {
  const { slug } = await params;
  const servicio = servicios.find((item) => item.slug === slug);

  if (!servicio) {
    notFound();
  }

  const otros = servicios.filter((item) => item.slug !== servicio.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-turq-200 via-turq-100 to-turq-50">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="page-wrap relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <Link
              href="/servicios"
              className="text-sm font-medium text-turq-600 transition hover:text-turq-700"
            >
              ← Servicios y productos
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-turq-600">
              {servicio.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-turq-800 sm:text-4xl lg:text-5xl">
              {servicio.title}
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink/70">
              {servicio.subtitle}
            </p>
            <ul className="mt-8 grid gap-3">
              {servicio.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/75">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-turq-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto#solicitud" className="btn btn-primary">
                Solicitar apoyo
                <ArrowRightIcon />
              </Link>
              <a
                href="https://wa.me/56955225749"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <WhatsAppIcon />
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-turq-200 shadow-card">
            <Image
              src={servicio.image}
              alt={servicio.imageAlt}
              width={1400}
              height={956}
              priority
              className="h-full max-h-[32rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="page-wrap grid gap-12 py-20 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow">Detalle del servicio</p>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">{servicio.summary}</p>

          <div className="mt-12 space-y-12">
            {servicio.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-[1.02rem] leading-relaxed text-ink/75">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/75">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turq-100 text-turq-700">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {servicio.products && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold">Productos disponibles</h2>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/75">
                Productos distribuidos por la red de la fundación. Para consultar disponibilidad y
                valores, escríbenos por WhatsApp o llámanos al 2 33 65 00 48.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {servicio.products.map((product) => (
                  <div key={product.name} className="surface-card overflow-hidden">
                    {product.image && (
                      <div className="relative aspect-square overflow-hidden bg-turq-50">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={600}
                          height={600}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-turq-500">
                        {product.format}
                      </p>
                      <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/70">
                        {product.description}
                      </p>
                      {product.notes && (
                        <ul className="mt-4 space-y-1.5 text-[0.85rem] text-ink/60">
                          {product.notes.map((note) => (
                            <li key={note} className="flex gap-2">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-turq-400" />
                              {note}
                            </li>
                          ))}
                        </ul>
                      )}
                      {product.price && (
                        <p className="mt-5 border-t border-turq-100 pt-4 text-sm font-semibold text-turq-700">
                          {product.price}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="surface-card p-7 lg:sticky lg:top-28">
            <h2 className="font-display text-xl font-bold">¿Necesitas este tratamiento?</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
              La fundación evalúa cada solicitud de forma individualizada. Completa el formulario y
              te contactaremos para coordinar la evaluación.
            </p>
            <Link href="/contacto#solicitud" className="btn btn-primary mt-6 w-full">
              Solicitar apoyo
              <ArrowRightIcon />
            </Link>
            <div className="mt-6 border-t border-turq-100 pt-5 text-sm text-ink/70">
              <p className="font-semibold text-turq-800">Consultas y agendas</p>
              <p className="mt-1">2 33 65 00 48</p>
              <p className="mt-1">Lunes a viernes, 09:00 – 18:00</p>
            </div>
            <div className="mt-4 border-t border-turq-100 pt-5 text-sm text-ink/70">
              <p className="font-semibold text-turq-800">Tratamientos complementarios</p>
              <p className="mt-1">
                La ozonoterapia y las ondas escalares son tratamientos complementarios que no
                reemplazan la indicación médica ni el tratamiento convencional.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-turq-50 py-16">
        <div className="page-wrap">
          <h2 className="text-2xl font-bold">Otros servicios y productos</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {otros.map((item) => (
              <Link
                key={item.slug}
                href={`/servicios/${item.slug}`}
                className="group rounded-2xl border border-turq-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-turq-500">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-turq-600">
                  Ver más
                  <ArrowRightIcon className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { PageBanner } from "@/components/ui";
import { articulos } from "@/content/articulos";

export const metadata: Metadata = {
  title: "Artículos",
  description:
    "Artículos de educación en salud de la Fundación Dr. Rodrigo Testart Tobar: ozonoterapia, melatonina, psoriasis, dermatitis atópica y mucho más.",
};

export default function ArticulosPage() {
  const [destacado, ...resto] = articulos;

  return (
    <>
      <PageBanner
        eyebrow="Artículos"
        title="Conocimiento que transforma y mejora la salud"
        description="Publicamos contenidos de educación en salud para que cada persona pueda tomar decisiones informadas sobre su tratamiento y su bienestar."
      />

      <section className="page-wrap py-20">
        <article className="surface-card group grid overflow-hidden lg:grid-cols-2">
          <Link href={`/articulos/${destacado.slug}`} className="relative min-h-[18rem] overflow-hidden bg-turq-50">
            <Image
              src={destacado.image}
              alt={destacado.imageAlt}
              width={1200}
              height={750}
              priority
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-turq-500">
              <span>Destacado</span>
              <span className="h-1 w-1 rounded-full bg-turq-300" />
              <span className="normal-case tracking-normal text-ink/45">
                {destacado.dateLabel}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight">{destacado.title}</h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/70">{destacado.excerpt}</p>
            <Link
              href={`/articulos/${destacado.slug}`}
              className="mt-7 inline-flex items-center gap-2 font-semibold text-turq-600"
            >
              Leer artículo completo
              <ArrowRightIcon className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </article>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {resto.map((post) => (
            <article key={post.slug} className="surface-card group flex flex-col overflow-hidden">
              <Link href={`/articulos/${post.slug}`} className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-turq-50">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-turq-500">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-turq-300" />
                    <span className="normal-case tracking-normal text-ink/45">
                      {post.dateLabel}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold leading-snug">{post.title}</h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-turq-600">
                    Leer artículo
                    <ArrowRightIcon className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="page-wrap flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">
            ¿Tienes dudas sobre tu tratamiento? Conversemos
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-relaxed text-ink/70">
            El equipo de la fundación responde tus preguntas y te orienta sobre las alternativas
            disponibles para tu caso.
          </p>
          <Link href="/contacto" className="btn btn-primary">
            Contactar a la fundación
            <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </>
  );
}

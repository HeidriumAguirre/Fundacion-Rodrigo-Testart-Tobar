import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowRightIcon } from "@/components/icons";
import { SocialLinks } from "@/components/Header";
import { articulos } from "@/content/articulos";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articulos.map((artículo) => ({ slug: artículo.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const artículo = articulos.find((item) => item.slug === slug);

  if (!artículo) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: artículo.title,
    description: artículo.excerpt,
    openGraph: {
      title: artículo.title,
      description: artículo.excerpt,
      type: "article",
      publishedTime: artículo.date,
      images: [{ url: artículo.image }],
    },
  };
}

export default async function ArticuloPage({ params }: Params) {
  const { slug } = await params;
  const artículo = articulos.find((item) => item.slug === slug);

  if (!artículo) {
    notFound();
  }

  const otros = articulos.filter((item) => item.slug !== artículo.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-turq-800">
        <div
          className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-turq-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="page-wrap relative py-16 sm:py-20">
          <Link
            href="/articulos"
            className="text-sm font-medium text-turq-300 transition hover:text-turq-200"
          >
            ← Artículos
          </Link>
          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-turq-300">
              <span>{artículo.category}</span>
              <span className="h-1 w-1 rounded-full bg-turq-400" />
              <span className="normal-case tracking-normal text-turq-100/60">
                {artículo.dateLabel}
              </span>
              <span className="h-1 w-1 rounded-full bg-turq-400" />
              <span className="normal-case tracking-normal text-turq-100/60">
                {artículo.readingTime}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[3rem]">
              {artículo.title}
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-turq-100/85">{artículo.excerpt}</p>
            <p className="mt-6 text-sm text-turq-100/60">Por {artículo.author}</p>
          </div>
        </div>
      </section>

      <section className="page-wrap grid gap-12 py-16 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <div className="overflow-hidden rounded-[1.5rem] border border-turq-100">
            <Image
              src={artículo.image}
              alt={artículo.imageAlt}
              width={1400}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="article-body mt-10">
            {artículo.blocks.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={index}>{block.text}</h2>;
              }
              if (block.type === "list") {
                return (
                  <ul key={index}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={index}>
                    <p>{block.text}</p>
                    {block.source && (
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-turq-600">
                        {block.source}
                      </p>
                    )}
                  </blockquote>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </div>

          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-turq-100 bg-turq-50 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-lg font-bold">Comparte este artículo</h2>
              <p className="mt-1 text-sm text-ink/65">
                Difundir la misión ayuda a que más personas accedan a estos tratamientos.
              </p>
            </div>
            <SocialLinks />
          </div>
        </article>

        <aside className="lg:col-span-4">
          <div className="surface-card p-7 lg:sticky lg:top-28">
            <h2 className="font-display text-xl font-bold">¿Necesitas apoyo?</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
              Si el tratamiento que necesitas no está cubierto por tu sistema de salud o
              seguro, la fundación puede evaluarte y otorgarte un porcentaje de subvención.
            </p>
            <Link href="/contacto#solicitud" className="btn btn-primary mt-6 w-full">
              Solicitar apoyo
              <ArrowRightIcon />
            </Link>
            <div className="mt-6 border-t border-turq-100 pt-5 text-sm text-ink/70">
              <p className="font-semibold text-turq-800">Aviso</p>
              <p className="mt-1">
                Este contenido es informativo y no reemplaza la consulta con un profesional de la
                salud.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-turq-50 py-16">
        <div className="page-wrap">
          <h2 className="text-2xl font-bold">Sigue leyendo</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {otros.map((item) => (
              <Link
                key={item.slug}
                href={`/articulos/${item.slug}`}
                className="group rounded-2xl border border-turq-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-turq-500">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug">{item.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-turq-600">
                  Leer
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

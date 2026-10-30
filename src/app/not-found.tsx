import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-wrap flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <p className="eyebrow justify-center">Error 404</p>
      <h1 className="text-4xl font-bold sm:text-5xl">Esta página no existe</h1>
      <p className="max-w-md text-[1.02rem] leading-relaxed text-ink/70">
        El contenido que buscas puede haber cambiado de dirección. Vuelve al inicio o revisa
        nuestros servicios y artículos.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
        <Link href="/servicios" className="btn btn-outline">
          Ver servicios
        </Link>
      </div>
    </section>
  );
}

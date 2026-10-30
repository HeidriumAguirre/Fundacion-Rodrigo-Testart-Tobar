import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardIcon,
  HeartIcon,
  NetworkIcon,
  QuoteIcon,
  ShareIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { BulletList, SectionHeading } from "@/components/ui";
import { articulos } from "@/content/articulos";
import { noticias } from "@/content/noticias";
import { donation, pillars, process, stats } from "@/content/site";
import { servicios } from "@/content/servicios";

const pillarIcons = {
  heart: HeartIcon,
  clipboard: ClipboardIcon,
  network: NetworkIcon,
  share: ShareIcon,
} as const;

export default function HomePage() {
  const destacados = servicios.slice(0, 3);
  const posts = articulos.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-turq-50 via-white to-white">
        <div
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-turq-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-turq-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div className="page-wrap relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Fundación Dr. Rodrigo Testart Tobar</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Salud integral para quienes más la necesitan
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Nacimos con el propósito de apoyar la salud integral y facilitar el acceso a
              terapias esenciales como la ozonoterapia, la medicina ortomolecular y los
              suplementos, que el sistema de salud y los seguros no cubren para todos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto#solicitud" className="btn btn-primary">
                Solicitar apoyo
                <ArrowRightIcon />
              </Link>
              <Link href="/colaborar" className="btn btn-outline">
                Quiero ayudar
              </Link>
              <Link href="/acerca-de" className="btn btn-outline">
                Conócenos
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/70">
              <a
                href="https://wa.me/56955225749"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-turq-700 transition hover:text-turq-500"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp {donation.bank.whatsapp}
              </a>
              <Link href="/contacto" className="inline-flex items-center gap-2 font-medium transition hover:text-turq-600">
                <CheckIcon className="h-4 w-4 text-turq-500" />
                Contáctanos
              </Link>
              <span className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-turq-500" />
                Atención de lunes a viernes
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-turq-100 bg-white shadow-card">
              <Image
                src="/images/dr-rodrigo-testart.jpg"
                alt="Dr. Rodrigo Testart Tobar, fundador y director de la fundación"
                width={1400}
                height={1360}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 max-w-[15rem] rounded-2xl border border-turq-100 bg-white/95 p-5 shadow-card backdrop-blur sm:left-8">
              <p className="font-display text-2xl font-bold text-turq-700">+40 años</p>
              <p className="mt-1 text-sm leading-snug text-ink/70">
                de experiencia médica del Dr. Rodrigo Testart Tobar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-turq-100 bg-white">
        <div className="page-wrap grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-bold text-turq-600">{stat.value}</p>
              <p className="mt-1 text-sm text-ink/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-wrap py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Nuestra misión"
              title="Un proyecto nacido para cuidar la salud de los pacientes"
            />
            <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink/75">
              <p>
                Nos complace anunciar la creación de la Fundación Dr. Rodrigo Testart Tobar, un
                proyecto nacido con el propósito de apoyar la salud integral. Sabemos que muchos
                tratamientos, como la ozonoterapia y la medicina ortomolecular, no están cubiertos
                por isapres, Fonasa ni seguros.
              </p>
              <p>
                Entendemos que estos tratamientos pueden ser costosos y prolongados, especialmente
                para quienes enfrentan enfermedades crónicas como la diabetes o el cáncer. Por
                eso hemos avanzado en este proyecto creando esta fundación, para brindarles el
                respaldo económico necesario y facilitar su acceso a estas terapias esenciales.
              </p>
              <p>
                Bajo el liderazgo del Dr. Rodrigo Testart Tobar, fundador y director de la
                fundación, implementaremos un programa de subvención y apoyo: los pacientes
                accederán a este beneficio mediante la presentación de un formulario de solicitud,
                y la asignación de porcentajes de subvención se determinará de manera
                individualizada.
              </p>
            </div>
            <Link href="/acerca-de" className="btn btn-outline mt-8">
              Conoce la fundación
              <ArrowRightIcon />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon];
              return (
                <div key={pillar.title} className="surface-card p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-turq-100 text-turq-700">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-turq-200 bg-turq-100 py-20">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Programa de subvención"
            title="Así funciona el acompañamiento a un paciente"
            description="Tres pasos claros, con evaluación individualizada y seguimiento permanente por parte del equipo de la fundación."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-turq-200 bg-white/80 p-8"
              >
                <span className="font-display text-4xl font-bold text-turq-500">{item.step}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-turq-800">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contacto#solicitud" className="btn btn-primary">
              Presentar mi solicitud
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-wrap py-20">
        <SectionHeading
          eyebrow="Servicios y productos"
          title="Terapias y productos a los que puedes acceder"
          description="La fundación gestiona el respaldo económico para estas líneas de tratamiento, realizadas por profesionales habilitados."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {destacados.map((servicio) => (
            <article key={servicio.slug} className="surface-card group overflow-hidden">
              <Link href={`/servicios/${servicio.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-turq-50">
                  <Image
                    src={servicio.image}
                    alt={servicio.imageAlt}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-turq-500">
                    {servicio.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{servicio.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                    {servicio.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-turq-600">
                    Ver más
                    <ArrowRightIcon className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/servicios" className="btn btn-outline">
            Ver todos los servicios y productos
          </Link>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="page-wrap grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/images/servicio-ozonoterapia.jpg"
                alt="Aplicación de ozonoterapia"
                width={1400}
                height={956}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Experiencia del fundador"
              title="Una trayectoria clínica de más de 40 años"
              description="Médico cirujano anestesista de la Universidad Católica de Lovaina, Bélgica, el Dr. Testart lidera la fundación y su red de especialistas."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <BulletList
                items={[
                  "Licenciado de medicina, Universidad de Chile (1981)",
                  "Médico cirujano, Universidad de Valparaíso (1983)",
                  "Especialización en anestesia, Lovaina, Bélgica (1987)",
                  "Postgrado TIVA, King's College, Cambridge (1996)",
                ]}
              />
            </div>
            <Link href="/acerca-de" className="btn btn-primary mt-9">
              Conocer al equipo
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-wrap py-20">
        <SectionHeading
          eyebrow="Impacto"
          title="Cifras que explican por qué existimos"
          description="Publicamos de forma abierta nuestro trabajo, con datos verificables y sin exponer la información de los pacientes."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card p-7 text-center">
              <p className="font-display text-4xl font-bold text-turq-600">{stat.value}</p>
              <p className="mt-2 text-sm leading-snug text-ink/65">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/impacto" className="btn btn-outline">
            Ver nuestro impacto
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="page-wrap py-20">
        <SectionHeading
          eyebrow="Artículos"
          title="Información para cuidar mejor tu salud"
          description="Publicamos contenidos de educación en salud, escritos por el equipo médico de la fundación."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
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
                  <h3 className="mt-3 text-xl font-bold leading-snug">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-ink/70">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-turq-600">
                    Leer artículo
                    <ArrowRightIcon className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/articulos" className="btn btn-outline">
            Ver todos los artículos
          </Link>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="page-wrap">
          <SectionHeading
            eyebrow="Noticias y actividades"
            title="Lo que estamos haciendo por los pacientes"
            description="El avance del programa de subvención, las actividades abiertas a la comunidad y las novedades de la fundación."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {noticias.slice(0, 3).map((noticia) => (
              <article key={noticia.slug} className="surface-card group flex flex-col overflow-hidden">
                <Link href="/noticias" className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-turq-50">
                    <Image
                      src={noticia.imagen}
                      alt={noticia.imagenAlt}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-turq-700">
                      {noticia.estado}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-turq-500">
                      {noticia.categoria}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-snug">{noticia.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                      {noticia.resumen}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-turq-600">
                      Ver actividad
                      <ArrowRightIcon className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/noticias" className="btn btn-outline">
              Ver todas las novedades
            </Link>
          </div>
        </div>
      </section>

      <section className="page-wrap py-20">
        <SectionHeading
          eyebrow="Cómo colaborar"
          title="Elige cómo quieres sumar a esta cadena de ayuda"
          description="Cada acción cuenta. Hay un lugar para ti, sin importar si puedes aportar con tiempo, con recursos o con difusión."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: "Donaciones",
              texto:
                "Aportes únicos o periódicos que financian tratamientos de pacientes.",
            },
            {
              titulo: "Voluntariado",
              texto: "Tu tiempo y tu talento para sostener la red de apoyo y la difusión.",
            },
            {
              titulo: "Alianzas",
              texto: "Clínicas, farmacias y empresas que suman atenciones y cobertura.",
            },
            {
              titulo: "Aportes en especie",
              texto: "Productos, insumos, equipos o espacios que necesita el programa.",
            },
          ].map((item) => (
            <div key={item.titulo} className="surface-card p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-turq-100 text-turq-700">
                <HeartIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{item.titulo}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">{item.texto}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/colaborar" className="btn btn-primary">
            Ver cómo colaborar
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      <section className="border-y border-turq-200 bg-turq-100 py-20">
        <div className="page-wrap grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Transparencia</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-turq-800 sm:text-4xl">
              Cada peso tiene un destino y cada dato, una historia
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink/70">
              Publicamos cómo se usan los fondos, quién responde por la institución y qué documentos
              están disponibles. La fundación opera en fase de consolidación y reporta cada avance
              con la misma transparencia con la que acompaña a sus pacientes.
            </p>
            <Link href="/transparencia" className="btn btn-primary mt-8">
              Ver uso de los fondos
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { titulo: "Subvenciones a tratamientos", detalle: "Prioridad del programa" },
              { titulo: "Productos e insumos", detalle: "Para las atenciones" },
              { titulo: "Difusión y educación", detalle: "Artículos y videos abiertos" },
              { titulo: "Gestión y operación", detalle: "Coordinación y soporte" },
            ].map((item) => (
              <div key={item.titulo} className="rounded-2xl border border-turq-200 bg-white/80 p-6">
                <p className="font-display text-[1.05rem] font-bold text-turq-800">{item.titulo}</p>
                <p className="mt-1 text-sm text-ink/65">{item.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-turq-200 py-20">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="page-wrap relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <QuoteIcon className="h-10 w-10 text-turq-600" />
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-turq-800 sm:text-4xl">
              Cada acción cuenta, y la tuya es un eslabón de esta cadena de ayuda
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink/75">
              Tu participación, ya sea a través de contribuciones únicas, aportes periódicos o la
              difusión de nuestra misión, fortalece nuestro impacto y nos permite alcanzar metas
              aún mayores. ¡Contáctanos contigo!
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto#donar" className="btn btn-primary">
                Cómo aportar
                <ArrowRightIcon />
              </Link>
              <Link href="/contacto" className="btn btn-outline">
                Hablar con la fundación
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-turq-300 bg-white/85 p-8 shadow-soft backdrop-blur">
            <h3 className="font-display text-lg font-bold text-turq-800">Datos para transferir</h3>
            <dl className="mt-6 space-y-4 text-[0.95rem]">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Nombre
                </dt>
                <dd className="mt-1 text-ink/80">{donation.bank.holder}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  Cuenta corriente
                </dt>
                <dd className="mt-1 text-ink/80">{donation.bank.account}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-turq-600">
                  RUT
                </dt>
                <dd className="mt-1 text-ink/80">{donation.bank.rut}</dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-turq-200 pt-5 text-sm text-ink/65">
              Envíanos un correo con tu nombre, RUT, teléfono y comprobante para acreditar tu
              contribución.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

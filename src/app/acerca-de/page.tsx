import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, QuoteIcon, WhatsAppIcon } from "@/components/icons";
import { PageBanner, SectionHeading } from "@/components/ui";
import { contact, experienceTimeline, faq, team, values } from "@/content/site";

export const metadata: Metadata = {
  title: "Acerca de",
  description:
    "Conoce la Fundación Dr. Rodrigo Testart Tobar: historia, misión, visión, valores, equipo de trabajo y compromiso con los pacientes.",
};

export default function AcercaDePage() {
  return (
    <>
      <PageBanner
        eyebrow="Acerca de"
        title="Una fundación creada para que la salud no dependa del bolsillo"
        description="Conocemos nuestra historia, nuestro equipo y el compromiso que sostiene cada decisión que tomamos."
      />

      <section className="page-wrap grid items-center gap-14 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Nuestra historia"
            title="Un proyecto nacido de la experiencia clínica"
          />
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink/75">
            <p>
              Hace más de quince años el Dr. Rodrigo Testart ha visto los efectos médicos
              extraordinarios de la buena aplicación en ozonoterapia, desde aplicaciones de ozono
              locales a salvar vidas con aceite ozonizado, disminuyendo niveles de azúcar en
              pacientes diabéticos, disminuyendo dolores gracias a las propiedades
              antiinflamatorias del ozono.
            </p>
            <p>
              La cantidad de personas únicas tratadas es enorme gracias a la enorme eficacia de
              la ozonoterapia. Te invitamos a que veas por ti mismo los beneficios en tu salud,
              desde enfermedades degenerativas, virales, infecciosas, crónicas, hasta el cáncer y
              deportistas de alto rendimiento.
            </p>
            <p>
              Con esa experiencia y ante la realidad de que muchos tratamientos no están
              cubiertos por isapres, Fonasa ni seguros, se creó la Fundación Dr. Rodrigo Testart
              Tobar: un proyecto para brindar el respaldo económico necesario y facilitar el
              acceso de los pacientes a estas terapias esenciales.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src="/images/dr-rodrigo-testart.jpg"
              alt="Dr. Rodrigo Testart Tobar, fundador y director de la fundación"
              width={1400}
              height={1360}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-turq-100 bg-white px-6 py-4 shadow-soft">
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-turq-600">
              Fundador y director
            </p>
            <p className="mt-1 font-display text-lg font-bold">Dr. Rodrigo Testart Tobar</p>
          </div>
        </div>
      </section>

      <section className="border-y border-turq-200 bg-turq-100 py-20">
        <div className="page-wrap grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-turq-600">Misión</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-turq-800">
              Brindar el respaldo económico necesario para el acceso a terapias esenciales
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/70">
              Acompañar a pacientes con enfermedades crónicas para que un obstáculo económico no
              impida recibir un tratamiento que puede mejorar su salud y su calidad de vida.
            </p>
          </div>
          <div>
            <p className="eyebrow text-turq-600">Visión</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-turq-800">
              Construir una sólida red de apoyo mutuo
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/70">
              Un espacio donde también puedes encontrar ayuda cuando lo necesites, y donde la
              solidaridad y la colaboración transforman la salud y la calidad de vida.
            </p>
          </div>
          <div>
            <p className="eyebrow text-turq-600">Compromiso</p>
            <h2 className="mt-4 font-display text-2xl font-bold text-turq-800">
              Cada acción cuenta
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/70">
              Tu participación, ya sea a través de contribuciones únicas, aportes periódicos o la
              difusión de nuestra misión, fortalece nuestro impacto y nos permite alcanzar metas
              aún mayores. Agradecemos tu generosidad mediante aportes que permiten sostener el
              programa de subvención.
            </p>
          </div>
        </div>
      </section>

      <section className="page-wrap py-20">
        <SectionHeading
          eyebrow="Nuestros valores"
          title="Los principios que guían cada decisión"
          description="Cuatro compromisos que sostenemos en cada evaluación, cada atención y cada aporte que administramos."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="surface-card p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-turq-100 text-turq-700">
                <CheckIcon />
              </span>
              <h3 className="mt-5 text-xl font-bold">{value.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="page-wrap grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Formación y experiencia"
              title="Más de 40 años de trayectoria médica"
            />
            <ol className="mt-8 space-y-6 border-l-2 border-turq-200 pl-6">
              {experienceTimeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[1.9rem] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-turq-500 ring-4 ring-cream" />
                  <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-turq-600">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Nuestro equipo"
              title="Personas que acompañan a los pacientes"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="surface-card overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-turq-50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold leading-tight">{member.name}</h3>
                    <p className="mt-1 text-[0.85rem] leading-snug text-ink/65">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-turq-200 bg-white p-7">
              <QuoteIcon className="h-7 w-7 text-turq-400" />
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/75">
                Con gran entusiasmo, extendemos una cordial invitación a convertirte en un pilar y
                ser parte activa de nuestra fundación. Únete a nosotros en la construcción de una
                sólida red de apoyo mutuo donde también puedes encontrar ayuda cuando lo necesites,
                la solidaridad y la colaboración se entrelazan para transformar y mejorar la salud y
                la calidad de vida.
              </p>
              <Link href="/contacto#donar" className="btn btn-primary mt-6">
                Quiero ser parte
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap py-20">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Tú preguntas, nosotros respondemos"
          description="Las dudas más frecuentes que recibimos de pacientes y comunidad."
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-turq-100 bg-white px-6 py-5 transition open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[1.05rem] font-bold text-turq-800">
                {item.question}
                <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-turq-200 text-turq-600 transition group-open:rotate-45">
                  <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                  <span className="absolute h-3 w-0.5 rounded-full bg-current" />
                </span>
              </summary>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-turq-200 py-16">
        <div className="page-wrap flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl font-bold text-turq-800 sm:text-3xl">
            ¿Tienes un tratamiento que necesitas y no puedes cubrir?
          </h2>
          <p className="max-w-xl text-[1.02rem] leading-relaxed text-ink/70">
            Escríbenos y te orientamos. Atendemos de lunes a viernes, de 09:00 a 18:00 horas.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto#solicitud" className="btn btn-primary">
              Solicitar apoyo
              <ArrowRightIcon />
            </Link>
            <a
              href="https://wa.me/56955225749"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <WhatsAppIcon />
              {contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

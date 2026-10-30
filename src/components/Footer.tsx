import Link from "next/link";

import { SocialLinks } from "@/components/Header";
import { Logo } from "@/components/Logo";
import {
  ArrowRightIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { contact, donation } from "@/content/site";
import { servicios } from "@/content/servicios";

export function Footer() {
  return (
    <footer className="bg-turq-800 text-turq-100">
      <div className="page-wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Logo light />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-turq-100/80">
            Nacimos para que ninguna persona quede fuera de una terapia esencial por razones
            económicas. Acompañamos, financiamos y orientamos.
          </p>
          <div className="mt-6">
            <SocialLinks light />
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
            La fundación
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              { href: "/acerca-de", label: "Quiénes somos" },
              { href: "/impacto", label: "Impacto" },
              { href: "/noticias", label: "Noticias y actividades" },
              { href: "/colaborar", label: "Cómo colaborar" },
              { href: "/transparencia", label: "Transparencia" },
              { href: "/contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] text-turq-100/80 transition hover:text-turq-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
            Servicios y productos
          </h3>
          <ul className="mt-5 space-y-3">
            {servicios.map((servicio) => (
              <li key={servicio.slug}>
                <Link
                  href={`/servicios/${servicio.slug}`}
                  className="text-[0.95rem] text-turq-100/80 transition hover:text-turq-300"
                >
                  {servicio.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
            Contacto
          </h3>
          <ul className="mt-5 space-y-4 text-[0.95rem] text-turq-100/80">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-turq-300" />
              <span>
                {contact.address}
                <br />
                {contact.city}
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-turq-300" />
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="transition hover:text-turq-300"
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-turq-300" />
              <a
                href={`mailto:${contact.email}`}
                className="break-all transition hover:text-turq-300"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-turq-300" />
              <a
                href="https://wa.me/56955225749"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-turq-300"
              >
                {contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-turq-300" />
              <span>
                {contact.hours.map((item) => (
                  <span key={item.day} className="block">
                    {item.day}: {item.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-y border-turq-700/70 bg-turq-900/40">
        <div className="page-wrap flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-lg font-bold text-white">{donation.title}</h3>
            <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-turq-100/80">
              {donation.bank.holder} · {donation.bank.account} · RUT {donation.bank.rut}
            </p>
          </div>
          <Link href="/contacto#donar" className="btn btn-ghost-light shrink-0">
            Cómo aportar
            <ArrowRightIcon />
          </Link>
        </div>
      </div>

      <div className="page-wrap flex flex-col gap-4 py-8 text-[0.8rem] text-turq-100/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Fundación Dr. Rodrigo Testart Tobar.</p>
        <p className="max-w-xl md:text-right">
          La información publicada en este sitio es orientativa y no reemplaza la consulta médica
          profesional.
        </p>
      </div>
    </footer>
  );
}

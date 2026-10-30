"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LogoLink } from "@/components/Logo";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from "@/components/icons";
import { contact, nav, social } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-turq-100 text-turq-800 lg:block">
        <div className="page-wrap flex h-10 items-center justify-between text-[0.8rem]">
          <p className="tracking-wide text-turq-700">
            Fundación Dr. Rodrigo Testart Tobar · Salud integral para quienes más lo necesitan
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 transition hover:text-turq-600"
            >
              <MailIcon className="h-4 w-4" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition hover:text-turq-600"
            >
              <PhoneIcon className="h-4 w-4" />
              {contact.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/56955225749`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-turq-600"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-turq-100/80 bg-white/90 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_10px_30px_-24px_rgba(13,45,42,0.6)]" : ""
        }`}
      >
        <div className="page-wrap flex h-20 items-center justify-between gap-6">
          <LogoLink />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-turq-700"
                    : "text-ink/75 hover:text-turq-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-turq-400 transition-all ${
                    isActive(item.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contacto#solicitud" className="btn btn-primary hidden sm:inline-flex">
              Solicitar apoyo
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-turq-200 text-turq-700 transition hover:bg-turq-50 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-turq-100 bg-white lg:hidden">
            <nav className="page-wrap flex flex-col gap-1 py-4" aria-label="Navegación móvil">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[1.05rem] font-medium transition ${
                    isActive(item.href)
                      ? "bg-turq-50 text-turq-700"
                      : "text-ink/80 hover:bg-turq-50/60"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto#solicitud"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-3"
              >
                Solicitar apoyo
              </Link>
              <div className="mt-3 flex flex-col gap-2 border-t border-turq-100 pt-4 text-sm text-ink/75">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4 text-turq-600" />
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2"
                >
                  <PhoneIcon className="h-4 w-4 text-turq-600" />
                  {contact.phoneDisplay}
                </a>
                <a
                  href="https://wa.me/56955225749"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4 text-turq-600" />
                  {contact.whatsappDisplay}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function SocialLinks() {
  const icons = {
    YouTube: "youtube",
    Instagram: "instagram",
    Facebook: "facebook",
    WhatsApp: "whatsapp",
  } as const;

  return (
    <div className="flex items-center gap-3">
      {social.map((item) => {
        const Icon = {
          youtube: YoutubeIcon,
          instagram: InstagramIcon,
          facebook: FacebookIcon,
          whatsapp: WhatsAppIcon,
        }[icons[item.label]];
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-turq-300 text-turq-700 transition hover:border-turq-500 hover:bg-white hover:text-turq-600"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

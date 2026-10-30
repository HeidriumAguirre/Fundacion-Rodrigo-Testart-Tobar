import type { ReactNode } from "react";

import { CheckIcon } from "@/components/icons";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {eyebrow && (
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""} ${light ? "text-turq-300" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[1.05rem] leading-relaxed ${
            light ? "text-turq-100/85" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PageBanner({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-turq-800 text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-turq-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-turq-400/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="page-wrap relative py-16 sm:py-20">
        <p className="eyebrow justify-center text-turq-300">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-center text-[1.05rem] leading-relaxed text-turq-100/85">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function BulletList({
  items,
  light = false,
  columns = false,
}: {
  items: readonly string[];
  light?: boolean;
  columns?: boolean;
}) {
  return (
    <ul
      className={`grid gap-3 ${columns ? "sm:grid-cols-2" : ""} ${light ? "" : ""}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              light ? "bg-turq-400/20 text-turq-200" : "bg-turq-100 text-turq-700"
            }`}
          >
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span className={light ? "text-turq-100/85" : "text-ink/75"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

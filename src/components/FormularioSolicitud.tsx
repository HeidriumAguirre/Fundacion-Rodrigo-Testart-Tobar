"use client";

import { useState } from "react";

import { ArrowRightIcon, CheckIcon } from "@/components/icons";

type Estado = "idle" | "enviando" | "exito" | "error";

const motivos = [
  "Solicitud de subvención para tratamiento",
  "Consulta sobre servicios y productos",
  "Aporte o donación a la fundación",
  "Prensa y colaboración",
  "Otro motivo",
];

export function FormularioSolicitud() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensaje, setMensaje] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEstado("enviando");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      setEstado("exito");
      setMensaje(
        "¡Gracias por tu mensaje! Recibimos tu solicitud y tomaremos contacto contigo dentro de los próximos días hábiles.",
      );
      form.reset();
    } catch {
      setEstado("error");
      setMensaje(
        "No pudimos enviar el formulario en este momento. Por favor escríbenos directamente a fundacionrodrigotestart@gmail.com o por WhatsApp.",
      );
    }
  }

  if (estado === "exito") {
    return (
      <div className="rounded-3xl border border-turq-200 bg-turq-50 p-10 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-turq-500 text-white">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">¡Gracias por tu mensaje!</h3>
        <p className="mx-auto mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink/75">
          {mensaje}
        </p>
        <button
          type="button"
          onClick={() => setEstado("idle")}
          className="btn btn-outline mt-8"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-7 sm:p-9">
      <h2 className="font-display text-2xl font-bold">Formulario de solicitud</h2>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/65">
        Completa tus datos y cuéntanos brevemente tu situación. Todos los campos marcados con *
        son obligatorios.
      </p>

      {estado === "error" && (
        <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {mensaje}
        </p>
      )}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-turq-800">
          Nombre completo *
          <input
            name="nombre"
            required
            type="text"
            autoComplete="name"
            className="rounded-xl border border-turq-100 bg-white px-4 py-3 font-normal text-ink outline-none transition focus:border-turq-400"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-turq-800">
          RUT *
          <input
            name="rut"
            required
            type="text"
            placeholder="12.345.678-9"
            className="rounded-xl border border-turq-100 bg-white px-4 py-3 font-normal text-ink outline-none transition focus:border-turq-400"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-turq-800">
          Correo electrónico *
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            className="rounded-xl border border-turq-100 bg-white px-4 py-3 font-normal text-ink outline-none transition focus:border-turq-400"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-turq-800">
          Teléfono *
          <input
            name="telefono"
            required
            type="tel"
            autoComplete="tel"
            placeholder="+56 9 1234 5678"
            className="rounded-xl border border-turq-100 bg-white px-4 py-3 font-normal text-ink outline-none transition focus:border-turq-400"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-turq-800 sm:col-span-2">
          Motivo del contacto
          <select
            name="motivo"
            defaultValue={motivos[0]}
            className="rounded-xl border border-turq-100 bg-white px-4 py-3 font-normal text-ink outline-none transition focus:border-turq-400"
          >
            {motivos.map((motivo) => (
              <option key={motivo} value={motivo}>
                {motivo}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-turq-800 sm:col-span-2">
          Tratamiento requerido y situación actual
          <textarea
            name="mensaje"
            rows={5}
            placeholder="Cuéntanos qué tratamiento necesitas, desde cuándo y cualquier antecedente relevante para poder evaluarte."
            className="rounded-xl border border-turq-100 bg-white px-4 py-3 font-normal text-ink outline-none transition focus:border-turq-400"
          />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-[0.85rem] leading-relaxed text-ink/65">
        <input
          name="autorizacion"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-turq-200 text-turq-600"
        />
        Autorizo a la Fundación Dr. Rodrigo Testart Tobar a contactarme y tratar mis datos para
        gestionar esta solicitud.
      </label>

      <button type="submit" disabled={estado === "enviando"} className="btn btn-primary mt-8 w-full">
        {estado === "enviando" ? "Enviando..." : "Enviar solicitud"}
        {estado !== "enviando" && <ArrowRightIcon />}
      </button>
    </form>
  );
}

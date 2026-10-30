import { NextResponse } from "next/server";

type Payload = {
  nombre?: unknown;
  email?: unknown;
  telefono?: unknown;
  mensaje?: unknown;
  motivo?: unknown;
};

function texto(valor: unknown) {
  return typeof valor === "string" ? valor.trim() : "";
}

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
  }

  const nombre = texto(payload.nombre);
  const email = texto(payload.email);
  const telefono = texto(payload.telefono);
  const motivo = texto(payload.motivo);
  const mensaje = texto(payload.mensaje);

  if (!nombre || !email || !telefono) {
    return NextResponse.json(
      { error: "Nombre, correo y teléfono son obligatorios" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Correo electrónico inválido" }, { status: 400 });
  }

  console.log("[fundacion] Nueva solicitud", {
    nombre,
    email,
    telefono,
    motivo,
    mensaje,
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}

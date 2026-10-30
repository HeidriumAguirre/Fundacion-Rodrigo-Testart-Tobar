export type Estado = "Activo" | "Continuo" | "Próximamente";

export interface Noticia {
  slug: string;
  title: string;
  estado: Estado;
  categoria: string;
  resumen: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  acciones: string[];
}

export const noticias: Noticia[] = [
  {
    slug: "fase-de-consolidacion",
    title: "Fase de consolidación del programa de subvención",
    estado: "Activo",
    categoria: "Programa",
    resumen:
      "Estamos fortaleciendo la fundación para que más pacientes accedan a tratamientos esenciales.",
    descripcion:
      "Durante esta fase de consolidación tus contribuciones son vitales: cada aporte permite financiar más tratamientos, ordenar el proceso de solicitudes y acompañar a los pacientes que están esperando una respuesta.",
    imagen: "/images/servicio-ozonoterapia.jpg",
    imagenAlt: "Aplicación de ozonoterapia en un paciente",
    acciones: [
      "Presenta tu solicitud de apoyo",
      "Realiza un aporte único o periódico",
      "Difunde la misión en tus redes",
    ],
  },
  {
    slug: "ozonoterapia-en-accion",
    title: "Ozonoterapia en acción: serie de videos del Dr. Rodrigo Testart",
    estado: "Continuo",
    categoria: "Educación",
    resumen:
      "El doctor explica, en videos breves, para qué enfermedades se recomienda la ozonoterapia y cómo se aplica.",
    descripcion:
      "La serie Ozonoterapia en acción reúne material educativo abierto: explicaciones del Dr. Rodrigo Testart sobre ozonoterapia, pie diabético, casos médicos y la relación entre ozonoterapia y diabetes. Publicamos nuevos episodios de forma continua y los compartimos con pacientes y comunidad.",
    imagen: "/images/ozonoterapia-accion.jpg",
    imagenAlt: "Dr. Rodrigo Testart en la serie Ozonoterapia en acción",
    acciones: ["Ver la serie en YouTube", "Compartir un video con un paciente"],
  },
  {
    slug: "ciclo-de-educacion-en-salud",
    title: "Ciclo de educación en salud",
    estado: "Continuo",
    categoria: "Difusión",
    resumen:
      "Publicamos artículos de educación en salud para que cada persona pueda tomar decisiones informadas.",
    descripcion:
      "La difusión de la misión es una de las líneas de trabajo de la fundación. Cada artículo publicado busca aportar orientación práctica sobre tratamientos complementarios y estilos de vida, para que más personas puedan valorar su salud con criterios.",
    imagen: "/images/articulos.jpg",
    imagenAlt: "Persona leyendo un libro",
    acciones: ["Leer los artículos", "Compartir el contenido"],
  },
  {
    slug: "jornadas-de-atencion-y-orientacion",
    title: "Jornadas de atención y orientación",
    estado: "Próximamente",
    categoria: "Actividades",
    resumen:
      "Jornadas presenciales de evaluación inicial y orientación para pacientes candidatos al programa.",
    descripcion:
      "Estamos organizando jornadas de atención y orientación en las que el equipo de la fundación evaluará casos, resolviendo dudas sobre los tratamientos disponibles y el programa de subvención. Las fechas se comunicarán a través de nuestros canales oficiales.",
    imagen: "/images/dr-rodrigo-testart.jpg",
    imagenAlt: "Dr. Rodrigo Testart Tobar, fundador de la fundación",
    acciones: ["Dejar tus datos para ser avisado", "Escribir por WhatsApp"],
  },
  {
    slug: "red-de-alianzas",
    title: "Red de alianzas con clínicas y farmacias",
    estado: "Próximamente",
    categoria: "Alianzas",
    resumen:
      "Buscamos instituciones que sumen atenciones y productos para ampliar la cobertura del programa.",
    descripcion:
      "Estamos construyendo una red de apoyo mutuo con clínicas, farmacias, centros de salud y empresas que tengan ganas de contribuir. Cada alianza suma cobertura, visibilidad y recursos para sostener el programa de subvención.",
    imagen: "/images/servicio-mel13.jpg",
    imagenAlt: "Productos de cuidado de la piel MEL13",
    acciones: ["Proponer una alianza", "Conocer el programa"],
  },
];

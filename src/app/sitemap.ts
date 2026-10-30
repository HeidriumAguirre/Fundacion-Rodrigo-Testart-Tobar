import type { MetadataRoute } from "next";

import { articulos } from "@/content/articulos";
import { site } from "@/content/site";
import { servicios } from "@/content/servicios";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/servicios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/articulos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/acerca-de`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impacto`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/noticias`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/colaborar`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/transparencia`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contacto`, changeFrequency: "monthly", priority: 0.9 },
    ...servicios.map((servicio) => ({
      url: `${base}/servicios/${servicio.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articulos.map((artículo) => ({
      url: `${base}/articulos/${artículo.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

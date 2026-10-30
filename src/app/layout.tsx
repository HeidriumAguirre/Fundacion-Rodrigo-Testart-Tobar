import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Fundación Dr. Rodrigo Testart Tobar",
    "ozonoterapia",
    "medicina natural preventiva",
    "subvención de tratamientos",
    "salud integral",
    "Chile",
  ],
  openGraph: {
    title: `${site.name}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_CL",
    type: "website",
    images: [{ url: "/images/dr-rodrigo-testart.jpg", width: 1400, height: 1360 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/dr-rodrigo-testart.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${outfit.variable} min-h-screen bg-white antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-turq-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

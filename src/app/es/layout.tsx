import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vittiva Coworking | Manizales",
  description:
    "Espacios de coworking en Manizales con planes flexibles, salas de reuniones y comunidad para impulsar tus proyectos.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    locale: "es_ES",
    url: "/es",
    title: "Vittiva Coworking | Manizales",
    description:
      "Coworking en Manizales con espacios cómodos, internet rápido y comunidad activa.",
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vittivacoworking.com"),
  title: {
    default: "Vittiva Coworking Manizales",
    template: "%s | Vittiva Coworking",
  },
  description:
    "Espacios de coworking en Manizales con planes flexibles, salas de reuniones y comunidad para impulsar tus proyectos.",
  keywords: [
    "Vittiva Coworking",
    "coworking Manizales",
    "oficinas compartidas",
    "salas de reuniones Manizales",
    "espacios de trabajo flexibles",
    "coworking Colombia",
  ],
  authors: [{ name: "Vittiva Coworking", url: "https://www.vittivacoworking.com" }],
  creator: "Vittiva Coworking",
  publisher: "Vittiva Coworking",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vittiva Coworking",
    title: "Vittiva Coworking Manizales",
    description:
      "Coworking en Manizales con espacios cómodos, conectividad y comunidad profesional.",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Vittiva Coworking Manizales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vittiva Coworking Manizales",
    description:
      "Espacios de coworking en Manizales para freelancers, emprendedores y equipos.",
    images: ["/assets/hero/dashboard.png"],
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

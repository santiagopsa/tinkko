import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";

export const metadata: Metadata = {
  title: "Vittiva Coworking Manizales | Espacios de trabajo flexibles",
  description:
    "Vittiva Coworking en Manizales ofrece espacios de trabajo flexibles, salas de reuniones y una comunidad activa para freelancers, emprendedores y equipos.",
  alternates: {
    canonical: "/es",
  },
  openGraph: {
    locale: "es_ES",
    title: "Vittiva Coworking Manizales",
    description:
      "Conoce Vittiva Coworking en Manizales: espacios cómodos, internet de alta velocidad y comunidad para crecer.",
    url: "/es",
    images: [
      {
        url: "/assets/hero/dashboard.png",
        width: 1200,
        height: 800,
        alt: "Vittiva Coworking en Manizales",
      },
    ],
  },
};

export default function PageEs() {
  return (
    <main id="top">
      <Nav locale="es" />
      <VideoHero locale="es" />
      <Lore locale="es" />
      <Levels locale="es" />
      <StickySwap locale="es" />
      <Rewards locale="es" />
      <Join locale="es" />
    </main>
  );
}

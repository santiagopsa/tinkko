"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Natural and productive environment", desc: "Warm lighting, comfortable furniture, and calm spaces to maintain deep focus." },
  { title: "Reliable connectivity", desc: "Stable high-speed internet for calls, remote work, and daily collaboration." },
  { title: "Professional meeting spaces", desc: "Host clients and teams in rooms prepared for presentations and strategic sessions." },
  { title: "Community that supports growth", desc: "Share ideas, opportunities, and partnerships with people building in Manizales." },
];
const cardsEs = [
  { title: "Ambiente natural y productivo", desc: "Iluminación cálida, mobiliario cómodo y espacios tranquilos para enfocarte mejor." },
  { title: "Conectividad confiable", desc: "Internet de alta velocidad y estabilidad para reuniones y trabajo remoto diario." },
  { title: "Salas profesionales", desc: "Recibe clientes y equipos en espacios listos para presentaciones y sesiones estratégicas." },
  { title: "Comunidad que impulsa", desc: "Comparte ideas, oportunidades y alianzas con personas que construyen en Manizales." },
];

type StickySwapProps = {
  locale?: "en" | "es";
};

export default function StickySwap({ locale = "en" }: StickySwapProps) {
  const isEs = locale === "es";
  const cardsToRender = isEs ? cardsEs : cards;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-swap-item]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-firo-bg py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="tabular text-sm font-semibold text-[#435C3D]">{isEs ? "Resultados esperados" : "Expected outcomes"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que obtienes al elegir Vittiva Coworking" : "What you get at Vittiva Coworking"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "Más que un escritorio: un lugar pensado para producir, conectar y hacer crecer tus proyectos."
                : "More than a desk: a place built to produce, connect, and grow your projects."}
            </p>
          </div>

          <div className="grid gap-5">
            {cardsToRender.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-lg border border-[#CDD4D4] bg-[#F6F4E8] p-6 shadow-soft"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-firo-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

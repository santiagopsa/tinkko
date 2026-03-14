"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type LoreProps = {
  locale?: "en" | "es";
};

export default function Lore({ locale = "en" }: LoreProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="beneficios" className="bg-white py-28 text-black">
      <Container>
        <div className="max-w-4xl">
          <div data-reveal className="tabular text-sm font-semibold text-black">
            {isEs ? "Beneficios para la alianza Tinkko + PeakU" : "Benefits for Tinkko + PeakU alliance"}
          </div>
          <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "Publica vacantes con una ventaja real de selección."
              : "Post openings with a real hiring edge."}
          </h2>
          <p data-reveal className="mt-4 text-[#6B7280]">
            {isEs
              ? "Las empresas vinculadas a Tinkko obtienen acceso a la infraestructura de PeakU para contratar talento especializado en LatAm con mejor señal de evaluación."
              : "Companies connected through Tinkko get access to PeakU's hiring infrastructure to attract specialized LatAm talent with better assessment signal."}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Card
              title={isEs ? "Talento especializado, a escala" : "Specialized talent, at scale"}
              desc={isEs ? "Conecta con perfiles de alto nivel para roles críticos de tecnología y crecimiento." : "Reach high-level profiles for critical technology and growth positions."}
            />
            <Card
              title={isEs ? "Más volumen con calidad" : "More volume with quality"}
              desc={isEs ? "Atrae más de 250 aplicaciones por vacante sin perder foco en candidatos de alto ajuste." : "Attract over 250 applications per opening without sacrificing candidate fit."}
            />
            <Card
              title={isEs ? "Evaluación con señal real" : "Signal-rich evaluation"}
              desc={isEs ? "Usa evaluaciones técnicas y de comportamiento para shortlist más confiables." : "Use technical and behavioral assessments to build stronger shortlists."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-soft">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#6B7280]">{desc}</div>
    </div>
  );
}

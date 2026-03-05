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
    <section ref={root} id="beneficios" className="bg-firo-bg py-28 text-firo-text">
      <Container>
        <div className="max-w-4xl">
          <div data-reveal className="tabular text-sm font-semibold text-[#435C3D]">
            {isEs ? "Beneficios de Vittiva" : "Vittiva benefits"}
          </div>
          <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "Todo lo que necesitas para trabajar comodo y enfocado."
              : "Everything you need to work comfortably and stay focused."}
          </h2>
          <p data-reveal className="mt-4 text-firo-muted">
            {isEs
              ? "En Vittiva Coworking, en Manizales, encuentras espacios funcionales, internet estable y un ambiente profesional para impulsar tus proyectos."
              : "At Vittiva Coworking in Manizales, you get functional spaces, reliable internet, and a professional environment that helps projects move forward."}
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Card
              title={isEs ? "Espacios flexibles" : "Flexible spaces"}
              desc={isEs ? "Elige entre puestos por día, planes mensuales y salas privadas según tu ritmo de trabajo." : "Choose daily passes, monthly plans, and private rooms based on your work style."}
            />
            <Card
              title={isEs ? "Ubicación estratégica" : "Strategic location"}
              desc={isEs ? "Estamos en Manizales con acceso fácil, cerca de servicios y zonas comerciales." : "Located in Manizales with easy access and close to key city services."}
            />
            <Card
              title={isEs ? "Comunidad activa" : "Active community"}
              desc={isEs ? "Conecta con otros profesionales, emprendedores y equipos en eventos y espacios compartidos." : "Connect with professionals, founders, and teams through events and shared spaces."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div data-reveal className="rounded-lg border border-[#CDD4D4] bg-[#F6F4E8] p-6 shadow-soft">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-firo-muted">{desc}</div>
    </div>
  );
}

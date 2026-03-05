"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Choose your plan",
    earns: "Daily pass, weekly, or monthly",
    does: "Select the option that matches your pace and team size",
  },
  {
    level: "Step 2",
    title: "Reserve your space",
    earns: "Cowork desk or meeting room",
    does: "Book quickly with support from our local team",
  },
  {
    level: "Step 3",
    title: "Start working",
    earns: "Fast internet and comfortable setup",
    does: "Focus from day one in a professional environment",
  },
  {
    level: "Step 4",
    title: "Grow with community",
    earns: "Networking and collaboration opportunities",
    does: "Build valuable connections in Manizales",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Elige tu plan",
    earns: "Pase diario, semanal o mensual",
    does: "Escoge la modalidad que se ajusta a tu ritmo y equipo",
  },
  {
    level: "Paso 2",
    title: "Reserva tu espacio",
    earns: "Puesto de cowork o sala de reuniones",
    does: "Agenda fácilmente con apoyo de nuestro equipo",
  },
  {
    level: "Paso 3",
    title: "Empieza a trabajar",
    earns: "Internet rápido y ambiente cómodo",
    does: "Enfócate desde el primer día en un entorno profesional",
  },
  {
    level: "Paso 4",
    title: "Crece en comunidad",
    earns: "Eventos y oportunidades de networking",
    does: "Conecta con profesionales y emprendedores de Manizales",
  },
];

type LevelsProps = {
  locale?: "en" | "es";
};

export default function Levels({ locale = "en" }: LevelsProps) {
  const isEs = locale === "es";
  const levelItems = isEs ? levelsEs : levels;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-level]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="proceso" className="bg-firo-bg py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <div className="tabular text-sm font-semibold text-[#435C3D]">{isEs ? "Proceso" : "Process"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Así funciona Vittiva Coworking" : "How Vittiva Coworking works"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Un proceso simple para que encuentres el espacio ideal y empieces a producir sin fricción."
                : "A simple flow so you find the right space and start producing without friction."}
            </p>
          </div>

          <div className="grid gap-5">
            {levelItems.map((l) => (
              <div
                key={l.title}
                data-level
                className="group rounded-lg border border-[#CDD4D4] bg-[#F6F4E8] p-6 shadow-soft transition hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="tabular text-xs font-semibold text-firo-muted">{l.level}</div>
                  <div className="h-2 w-2 rounded-full bg-[#A7683D] opacity-70 group-hover:opacity-100" />
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight">{l.title}</div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Stat label={isEs ? "Que incluye" : "Included"} value={l.earns} />
                  <Stat label={isEs ? "Resultado" : "Outcome"} value={l.does} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#CDD4D4] bg-[#F0EEDF] p-4">
      <div className="tabular text-xs font-semibold text-firo-muted">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}

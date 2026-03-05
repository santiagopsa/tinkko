"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type VideoHeroProps = {
  locale?: "en" | "es";
};

export default function VideoHero({ locale = "en" }: VideoHeroProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-counter]",
        { innerText: 0 },
        {
          innerText: 24,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: root.current!, start: "top 70%" },
        } as any
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100vh] overflow-hidden bg-firo-bg text-firo-text"
    >
      <Container>
        <div className="relative z-10 flex min-h-[100vh] items-center py-24 md:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-xs text-firo-text">
              <a
                href="/"
                className={`tabular rounded-md border border-firo-line px-2.5 py-1 hover:text-firo-text ${
                  !isEs ? "border-[#435C3D] bg-white/70 text-firo-text" : ""
                }`}
              >
                EN
              </a>
              <a
                href="/es"
                className={`tabular rounded-md border border-firo-line px-2.5 py-1 hover:text-firo-text ${
                  isEs ? "border-[#435C3D] bg-white/70 text-firo-text" : ""
                }`}
              >
                ES
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-firo-line bg-white/70 px-4 py-2 text-sm text-firo-text">
              <span className="h-2 w-2 rounded-full bg-[#435C3D]" />
              {isEs ? "Coworking en Manizales" : "Coworking in Manizales"}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {isEs ? (
                <>
                  Trabaja, crea y conecta en
                  <span className="text-[#A7683D]">
                    {" "}Vittiva Coworking.
                  </span>
                </>
              ) : (
                <>
                  Work, create, and connect at
                  <span className="text-[#A7683D]">
                    {" "}Vittiva Coworking.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-firo-muted md:text-lg">
              {isEs
                ? "Un espacio flexible en Manizales para freelancers, equipos y emprendedores. Oficinas compartidas, salas de reuniones y una comunidad que impulsa tu crecimiento."
                : "A flexible space in Manizales for freelancers, teams, and founders. Shared workspaces, meeting rooms, and a community that helps your projects grow."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="tabular rounded-lg bg-[#435C3D] px-5 py-3 text-sm font-semibold text-[#F0EEDF] shadow-soft transition hover:brightness-95"
              >
                {isEs ? "Agenda tu visita" : "Book a tour"}
              </a>
              <a
                href="#beneficios"
                className="tabular rounded-lg border border-[#435C3D] px-5 py-3 text-sm font-semibold text-[#435C3D] transition hover:bg-white/70"
              >
                {isEs ? "Conocer espacios" : "Explore spaces"}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 text-sm md:grid-cols-3">
              <div className="rounded-lg border border-firo-line bg-[#F6F4E8] p-4 shadow-soft">
                <div className="text-firo-muted">{isEs ? "Puestos de trabajo" : "Work stations"}</div>
                <div className="tabular mt-1 text-xl font-semibold text-firo-text">+<span data-counter>0</span></div>
              </div>
              <div className="rounded-lg border border-firo-line bg-[#F6F4E8] p-4 shadow-soft">
                <div className="text-firo-muted">{isEs ? "Salas de reunión" : "Meeting rooms"}</div>
                <div className="mt-1 text-xl font-semibold text-[#435C3D]">{isEs ? "Equipadas" : "Fully equipped"}</div>
              </div>
              <div className="rounded-lg border border-firo-line bg-[#F6F4E8] p-4 shadow-soft">
                <div className="text-firo-muted">{isEs ? "Comunidad" : "Community"}</div>
                <div className="mt-1 text-xl font-semibold text-[#A7683D]">{isEs ? "Networking y eventos" : "Networking and events"}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

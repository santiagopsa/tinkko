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
      className="relative min-h-[100vh] overflow-hidden bg-white text-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero/dashboard.png"
      >
        <source src="/video/firo-hero.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-white/58" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/52 to-white/74" />

      <Container>
        <div className="relative z-10 flex min-h-[100vh] items-center py-24 md:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-xs text-black">
              <a
                href="/"
                className={`tabular rounded-md border border-[#E5E7EB] px-2.5 py-1 hover:text-black ${
                  !isEs ? "border-black bg-white/70 text-black" : ""
                }`}
              >
                EN
              </a>
              <a
                href="/es"
                className={`tabular rounded-md border border-[#E5E7EB] px-2.5 py-1 hover:text-black ${
                  isEs ? "border-black bg-white/70 text-black" : ""
                }`}
              >
                ES
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/70 px-4 py-2 text-sm text-black">
              <span className="h-2 w-2 rounded-full bg-black" />
              {isEs ? "Tinkko + PeakU | Alianza de contratación" : "Tinkko + PeakU | Hiring alliance"}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {isEs ? (
                <>
                  Publica tus vacantes desde Tinkko y recibe
                  <span className="text-[#FF6B00]">
                    {" "}talento especializado con respaldo de PeakU.
                  </span>
                </>
              ) : (
                <>
                  Stop hiring blind. Launch your openings through Tinkko and get
                  <span className="text-[#FF6B00]">
                    {" "}specialized talent powered by PeakU.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#6B7280] md:text-lg">
              {isEs
                ? "La alianza Tinkko + PeakU conecta tu empresa con talento especializado en LatAm, evaluaciones técnicas y reportes para decidir con más claridad."
                : "The Tinkko + PeakU alliance gives your company access to specialized LatAm talent, technical assessments, and decision-ready candidate reports."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="tabular rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-95"
              >
                {isEs ? "Publicar oferta en PeakU" : "Launch your opening on PeakU"}
              </a>
              <a
                href="#beneficios"
                className="tabular rounded-lg border border-black px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/70"
              >
                {isEs ? "Ver beneficios" : "View benefits"}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 text-sm md:grid-cols-3">
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-soft">
                <div className="text-[#6B7280]">{isEs ? "Aplicaciones por vacante" : "Applications per opening"}</div>
                <div className="tabular mt-1 text-xl font-semibold text-black">+<span data-counter>250</span></div>
              </div>
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-soft">
                <div className="text-[#6B7280]">{isEs ? "Base de talento" : "Talent network"}</div>
                <div className="mt-1 text-xl font-semibold text-black">{isEs ? "Especializado" : "Specialized"}</div>
              </div>
              <div className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-soft">
                <div className="text-[#6B7280]">{isEs ? "Calidad de selección" : "Screening quality"}</div>
                <div className="mt-1 text-xl font-semibold text-[#FF6B00]">{isEs ? "Pruebas + reportes" : "Assessments + reports"}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

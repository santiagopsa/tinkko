"use client";

import { usePathname } from "next/navigation";

type NavProps = {
  locale?: "en" | "es";
};

export default function Nav({ locale = "en" }: NavProps) {
  const pathname = usePathname();
  const pathIsEs = pathname === "/es" || pathname.startsWith("/es/");
  const isEs = locale === "es" || pathIsEs;
  const isHomePath = pathname === "/" || pathname === "/es";

  const switchHref = pathIsEs
    ? pathname.replace(/^\/es/, "") || "/"
    : pathname === "/"
      ? "/es"
      : `/es${pathname}`;
  const homePath = isEs ? "/es" : "/";
  const homeHref = isHomePath ? "#top" : homePath;
  const anchorHref = (id: "beneficios" | "proceso" | "join") =>
    isHomePath ? `#${id}` : `${homePath}#${id}`;
  const benefitsHref = anchorHref("beneficios");
  const processHref = anchorHref("proceso");
  const joinHref = anchorHref("join");

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-[#E5E7EB] bg-white/92 text-black backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 md:px-10">
        <a href={homeHref} className="inline-flex items-center" aria-label="Go to main page">
          <img
            src="/assets/brand/descarga.png"
            alt="Tinkko Coworking logo"
            width={132}
            height={40}
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-[#6B7280] md:flex">
          <a href={benefitsHref} className="hover:text-black">{isEs ? "Beneficios" : "Benefits"}</a>
          <a href={processHref} className="hover:text-black">{isEs ? "Proceso" : "Process"}</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={switchHref}
            className="tabular rounded-lg border border-[#E5E7EB] px-2.5 py-1 text-xs text-[#6B7280] hover:border-black hover:text-black"
          >
            {isEs ? "EN" : "ES"}
          </a>
          <a
            href={joinHref}
            className="tabular rounded-lg bg-black px-3.5 py-2 text-sm font-semibold text-white transition hover:brightness-95 md:px-4"
          >
            {isEs ? "Publicar oferta en PeakU" : "Start hiring on PeakU"}
          </a>
        </div>
      </div>
    </div>
  );
}

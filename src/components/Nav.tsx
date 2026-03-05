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
    <div className="fixed inset-x-0 top-0 z-50 border-b border-firo-line bg-[#F0EEDF]/92 text-firo-text backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 md:px-10">
        <a href={homeHref} className="inline-flex items-center" aria-label="Go to main page">
          <span className="text-base font-semibold tracking-tight md:text-lg">
            Vittiva Coworking
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-firo-muted md:flex">
          <a href={benefitsHref} className="hover:text-[#435C3D]">{isEs ? "Beneficios" : "Benefits"}</a>
          <a href={processHref} className="hover:text-[#435C3D]">{isEs ? "Proceso" : "Process"}</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            className="tabular rounded-lg border border-firo-line px-2.5 py-1 text-xs text-firo-muted hover:border-[#435C3D] hover:text-firo-text"
          >
            {isEs ? "EN" : "ES"}
          </a>
          <a
            href={joinHref}
            className="tabular rounded-lg bg-[#435C3D] px-3.5 py-2 text-sm font-semibold text-[#F0EEDF] transition hover:brightness-95 md:px-4"
          >
            {isEs ? "Agenda tu visita" : "Book a tour"}
          </a>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="resultados" className="bg-firo-bg py-28 text-firo-text">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="tabular text-sm font-semibold text-[#435C3D]">{isEs ? "Vittiva Coworking Manizales" : "Vittiva Coworking Manizales"}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Espacios que combinan comodidad, diseño y productividad" : "Spaces that combine comfort, design, and productivity"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Diseñamos cada área para que trabajes con enfoque: zonas compartidas, salas para reuniones y una comunidad profesional en el corazón de Manizales."
                : "Each area is designed for focused work: shared zones, meeting rooms, and a professional community in the heart of Manizales."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot title={isEs ? "Internet" : "Internet"} value={isEs ? "Alta velocidad" : "High speed"} />
              <Loot title={isEs ? "Salas" : "Rooms"} value={isEs ? "Privadas y compartidas" : "Private and shared"} />
              <Loot title={isEs ? "Ubicación" : "Location"} value={isEs ? "Manizales centro" : "Manizales downtown"} accent />
            </div>
          </div>

          <div className="relative rounded-lg border border-[#CDD4D4] bg-[#F6F4E8] p-4 shadow-soft">
            <Image
              src="/assets/hero/dashboard.png"
              alt="Vittiva Coworking spaces"
              width={1400}
              height={900}
              className="relative w-full rounded-md"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Loot({ title, value, accent = false }: { title: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-[#CDD4D4] bg-[#F6F4E8] p-5 shadow-soft">
      <div className="tabular text-xs font-semibold text-firo-muted">{title}</div>
      <div className={`mt-2 text-xl font-semibold ${accent ? "text-[#A7683D]" : ""}`}>{value}</div>
    </div>
  );
}

import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-firo-bg py-28">
      <Container>
        <div className="rounded-xl border border-[#CDD4D4] bg-[#F6F4E8] p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="tabular text-sm font-semibold text-[#435C3D]">{isEs ? "Reserva tu espacio" : "Book your workspace"}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Únete a Vittiva Coworking en Manizales"
                  : "Join Vittiva Coworking in Manizales"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Completa el formulario y te contactamos para recomendarte el plan ideal y agendar tu visita."
                  : "Fill out the form and we will contact you to recommend the best plan and schedule your tour."}
              </p>
            </div>

            <div className="rounded-lg border border-[#CDD4D4] bg-[#F0EEDF] p-6 shadow-soft">
              <form
                action="https://formsubmit.co/santiagopsa@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Vittiva Coworking - solicitud de información" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="company">
                    {isEs ? "Empresa" : "Company"}
                  </label>
                  <input
                    id="company"
                    name="company"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "Nombre de tu empresa o proyecto" : "Your company or project name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="email">
                    {isEs ? "Correo electronico" : "Email"}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "tu@email.com" : "you@email.com"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="vacancy">
                    {isEs ? "Plan de interés" : "Preferred plan"}
                  </label>
                  <input
                    id="vacancy"
                    name="vacancy"
                    required
                    className="tabular w-full rounded-md border border-[#CDD4D4] bg-[#F6F4E8] px-4 py-3 text-sm text-firo-text outline-none focus:border-[#435C3D]"
                    placeholder={isEs ? "Ej: Plan mensual cowork" : "Ex: Monthly cowork plan"}
                  />
                </div>

                <button
                  type="submit"
                  className="tabular w-full rounded-md bg-[#435C3D] px-5 py-3 text-sm font-semibold text-[#F0EEDF] transition hover:brightness-95"
                >
                  {isEs ? "Solicitar información" : "Request information"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Nuestro equipo te responderá para confirmar disponibilidad, tarifas y beneficios."
              : "Our team will reply with availability, pricing, and membership benefits."}
          </div>
        </div>
      </Container>
    </section>
  );
}

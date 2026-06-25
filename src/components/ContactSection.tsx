const CONTACT_EMAIL = 'saul.contreras.agents@gmail.com'

export function ContactSection() {
  return (
    <section className="px-6 py-16" aria-labelledby="contact-heading">
      <div className="surface-card mx-auto max-w-2xl px-6 py-10 text-center sm:px-10">
        <p className="section-label">¿Listo para vender más?</p>
        <h2 id="contact-heading" className="mt-2 text-2xl font-semibold text-zinc-50">
          Hablemos de tu caso de uso
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          Cuéntame sobre tu clínica o restaurante y diseñamos un agente de voz adaptado a
          cómo atiendes hoy.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20agente%20de%20voz`}
            className="inline-flex min-w-[220px] cursor-pointer items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
          >
            Escríbeme por correo
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-muted transition-colors duration-200 hover:text-zinc-200"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

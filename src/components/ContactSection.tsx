const CONTACT_EMAIL = 'saul.contreras.agents@gmail.com'

const primaryLinkClass =
  'inline-flex min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface'

export function ContactSection() {
  return (
    <section
      className="border-t border-border/60 bg-surface-elevated/50 px-6 py-14"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-soft">
          ¿Listo para tu negocio?
        </p>
        <h2 id="contact-heading" className="mt-3 text-2xl font-bold sm:text-3xl">
          Hablemos de tu caso de uso
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Cuéntame sobre tu clínica o restaurante y diseñamos un agente de voz adaptado a
          cómo atiendes hoy.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20agente%20de%20voz`}
            className={primaryLinkClass}
          >
            Escríbeme por correo
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-muted transition-colors hover:text-accent-soft"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

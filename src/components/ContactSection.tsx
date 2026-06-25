import { CalendarIcon } from './ui/Icon'

const CAL_URL = 'https://cal.com/saul-contreras-agents/quick-chat'
const CONTACT_EMAIL = 'saul.contreras.agents@gmail.com'

export function ContactSection() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">¿Listo para empezar?</p>
        <h2
          id="contact-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          ¿Listo para que tu negocio nunca duerma?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
          Cuéntanos sobre tu clínica o restaurante y diseñamos un agente de voz adaptado
          a cómo atiendes hoy.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-8 py-3 text-sm font-bold text-white shadow-sm transition-colors duration-200 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 focus-visible:ring-offset-2 sm:w-auto"
          >
            <CalendarIcon className="h-4 w-4" />
            Reservar llamada gratuita
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20agente%20de%20voz`}
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:ring-offset-2 sm:w-auto"
          >
            Contactar por correo
          </a>
        </div>

        <p className="mt-5 text-sm text-slate-400">
          Sin compromiso · Primera llamada gratuita
        </p>
      </div>
    </section>
  )
}

import { CalendarIcon, MailIcon, ShieldCheckIcon } from './ui/Icon'

const CAL_URL = 'https://cal.com/saul-contreras-agents/quick-chat'
const CONTACT_EMAIL = 'saul.contreras.agents@gmail.com'

export function ContactSection() {
  return (
    <section className="bg-gray-100 px-6 py-16 sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="contact-heading"
          className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          ¿Listo para que tu negocio<br className="hidden sm:block" /> nunca duerma?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-500">
          Únete a las{' '}
          <span className="font-semibold text-slate-700">+500 empresas</span>{' '}
          que ya han automatizado su recepción telefónica.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-slate-900 px-7 py-3 text-sm font-bold text-white shadow-sm transition-colors duration-200 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 focus-visible:ring-offset-2 sm:w-auto"
          >
            <CalendarIcon className="h-4 w-4" />
            Reservar llamada ahora
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20agente%20de%20voz`}
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:ring-offset-2 sm:w-auto"
          >
            <MailIcon className="h-4 w-4 text-slate-400" />
            Contactar por correo
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <ShieldCheckIcon className="h-3.5 w-3.5 shrink-0" />
          Configuración en 48h · Sin compromiso · Soporte VIP
        </p>
      </div>
    </section>
  )
}

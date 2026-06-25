import { CalendarIcon } from './ui/Icon'
import { PhoneMockup } from './PhoneMockup'

const CAL_URL = 'https://cal.com/saul-contreras-agents/quick-chat'

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Text column */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-xs font-semibold text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
<span className="font-brand font-bold tracking-tight">Voize</span> · IA disponible 24/7
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[52px] lg:leading-[1.12]">
            Menos llamadas perdidas,{' '}
            <span className="text-accent">más reservas confirmadas.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Nuestros agentes de voz IA atienden a tus clientes 24/7, con un lenguaje
            natural, toman reservas y responden las mismas preguntas de siempre —
            sin que tú levantes el teléfono.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 focus-visible:ring-offset-2"
            >
              <CalendarIcon className="h-4 w-4" />
              Reservar llamada de inicio
            </a>

            <a
              href="mailto:saul.contreras.agents@gmail.com"
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/30 focus-visible:ring-offset-2"
            >
              Contactar por correo
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-6 border-t border-border pt-6">
            <div className="text-center">
              <p className="text-xl font-bold text-slate-900">24/7</p>
              <p className="text-xs text-slate-500">Disponibilidad</p>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden="true" />
            <div className="text-center">
              <p className="text-xl font-bold text-slate-900">−60%</p>
              <p className="text-xs text-slate-500">Llamadas perdidas</p>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden="true" />
            <div className="text-center">
              <p className="text-xl font-bold text-slate-900">+30%</p>
              <p className="text-xs text-slate-500">Reservas confirmadas</p>
            </div>
          </div>
        </div>

        {/* Phone column */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

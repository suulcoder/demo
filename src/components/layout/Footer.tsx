import { WaveformIcon, CalendarIcon } from '../ui/Icon'

const CAL_URL = 'https://cal.com/saul-contreras-agents/quick-chat'
const CONTACT_EMAIL = 'saul.contreras.agents@gmail.com'

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <WaveformIcon className="h-4 w-4" />
              </div>
              <p className="text-sm font-bold text-slate-900">Voize</p>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
              Atención automatizada con IA para clínicas dentales y restaurantes.
              Disponible las 24 horas, los 7 días de la semana.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm text-slate-400 transition-colors hover:text-slate-600"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Actions */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-accent"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Agendar una cita
                </a>
              </li>
              <li>
                <p className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">Precios:</span>{' '}
                  Planes flexibles desde{' '}
                  <span className="font-semibold text-slate-900">400 €</span>/mes
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Voize · Todos los derechos reservados
          </p>
          <p className="text-xs text-slate-400">
            Habla con el agente como lo haría un cliente real.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { CalendarIcon, WaveformIcon } from '../ui/Icon'

const CAL_URL = 'https://cal.com/saul-contreras-agents/quick-chat'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
            <WaveformIcon className="h-4 w-4" />
          </div>
          <div>
          <p className="text-sm font-bold text-slate-900 leading-none">Voize</p>
          <p className="text-[10px] text-slate-500 leading-none mt-0.5">IA · Disponible 24/7</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 cursor-pointer items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 focus-visible:ring-offset-2"
        >
          <CalendarIcon className="h-3.5 w-3.5" />
          Reservar llamada
        </a>
      </div>
    </header>
  )
}

import { WaveformIcon } from '../ui/Icon'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-soft ring-1 ring-accent/30">
          <WaveformIcon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-100">Agentes de Voz</p>
          <p className="text-xs text-muted">Atención automatizada para tu negocio</p>
        </div>
      </div>
    </header>
  )
}

import { MicIcon } from '../ui/Icon'

export function Header() {
  return (
    <header className="border-b border-border/80 bg-surface">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-elevated text-zinc-300">
          <MicIcon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-100">Agentes de Voz</p>
          <p className="text-xs text-muted">Atención automatizada para tu negocio</p>
        </div>
      </div>
    </header>
  )
}

import { MicIcon } from '../ui/Icon'

export function Header() {
  return (
    <header className="border-b border-border/60 bg-surface/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <MicIcon />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight">Agentes de Voz</p>
          <p className="text-xs text-muted">Atención automatizada para tu negocio</p>
        </div>
      </div>
    </header>
  )
}

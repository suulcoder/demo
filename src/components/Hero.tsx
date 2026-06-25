import { MicIcon } from './ui/Icon'

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
        <MicIcon className="h-4 w-4" />
        Prueba en vivo con tu voz
      </div>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Escucha cómo un agente de voz atiende a tus clientes
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Estás en una demo interactiva. Elige un sector, pulsa el botón del widget y
        conversa como si fueras un paciente, un comensal o un cliente del salón. Así verás
        el valor antes de contratar.
      </p>

      <ol className="mx-auto mt-10 grid max-w-xl gap-3 text-left text-sm text-muted sm:grid-cols-3">
        <li className="rounded-xl border border-border bg-surface-elevated/50 px-4 py-3">
          <span className="font-semibold text-white">1.</span> Elige tu sector
        </li>
        <li className="rounded-xl border border-border bg-surface-elevated/50 px-4 py-3">
          <span className="font-semibold text-white">2.</span> Abre el widget de voz
        </li>
        <li className="rounded-xl border border-border bg-surface-elevated/50 px-4 py-3">
          <span className="font-semibold text-white">3.</span> Habla con el agente
        </li>
      </ol>
    </section>
  )
}

const STEPS = [
  {
    number: '1',
    title: 'Elige tu industria',
    description: 'Clínicas dentales o restaurantes — elige el escenario más cercano a tu negocio.',
  },
  {
    number: '2',
    title: 'Inicia la conversación',
    description: 'Pulsa el botón y habla con naturalidad, como lo haría un cliente real.',
  },
  {
    number: '3',
    title: 'Imagina el impacto',
    description: 'Menos llamadas perdidas, más reservas y atención disponible las 24 horas.',
  },
] as const

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label mb-5">Prueba en 30 segundos · Gratis</p>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
          Tu negocio atendiendo clientes{' '}
          <span className="bg-gradient-to-r from-zinc-100 to-accent-soft bg-clip-text text-transparent">
            mientras duermes
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Escucha cómo un agente de voz responde citas, reservas y preguntas frecuentes con un
          tono natural. Cada llamada que no contestas es dinero que se va — pruébalo ahora.
        </p>
      </div>

      <ol className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {STEPS.map((step) => (
          <li key={step.number} className="bg-surface-elevated px-5 py-6 sm:px-6">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-xs font-semibold text-zinc-300">
              {step.number}
            </span>
            <h2 className="mt-4 text-sm font-semibold text-zinc-100">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

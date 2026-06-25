const STEPS = [
  {
    number: '01',
    title: 'Elige tu industria',
    description: 'Clínicas dentales o restaurantes — elige el escenario más cercano a tu negocio.',
  },
  {
    number: '02',
    title: 'Inicia la conversación',
    description: 'Pulsa el botón y habla con naturalidad, como lo haría un cliente real.',
  },
  {
    number: '03',
    title: 'Imagina el impacto',
    description: 'Menos llamadas perdidas, más reservas y atención disponible las 24 horas.',
  },
] as const

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-soft">
        Prueba en 30 segundos · Gratis
      </div>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Tu negocio atendiendo clientes{' '}
        <span className="bg-gradient-to-r from-accent-soft via-accent to-highlight bg-clip-text text-transparent">
          mientras duermes
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Escucha cómo un agente de voz responde citas, reservas y preguntas frecuentes con un
        tono natural. Cada llamada que no contestas es dinero que se va — pruébalo ahora.
      </p>

      <ol className="mx-auto mt-14 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
        {STEPS.map((step, index) => (
          <li
            key={step.number}
            className="relative rounded-2xl border border-border bg-surface-elevated/80 p-5 backdrop-blur-sm"
          >
            {index < STEPS.length - 1 && (
              <span
                className="absolute top-1/2 -right-2 hidden h-px w-4 -translate-y-1/2 bg-accent/20 sm:block"
                aria-hidden="true"
              />
            )}
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
              {step.number}
            </span>
            <h2 className="mt-4 text-base font-semibold text-white">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

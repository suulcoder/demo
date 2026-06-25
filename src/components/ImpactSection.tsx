const METRICS = [
  {
    value: '24/7',
    label: 'Nunca pierdas el hilo',
    description: 'El agente atiende mientras tú descansas.',
  },
  {
    value: '−60%',
    label: 'Llamadas perdidas',
    description: 'Cada llamada sin contestar es dinero que se va.',
  },
  {
    value: '+30%',
    label: 'Reservas confirmadas',
    description: 'Más conversiones sin esfuerzo de tu parte.',
  },
]

export function ImpactSection() {
  return (
    <section
      className="bg-slate-900 px-6 py-16 sm:py-20"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Resultados reales
          </p>
          <h2
            id="impact-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Imagina el impacto en tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            Menos llamadas perdidas, más reservas y atención disponible las 24 horas.
          </p>
        </div>

        <dl className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {METRICS.map((m) => (
            <div
              key={m.value}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center"
            >
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <p className="text-4xl font-bold text-white">{m.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-200">{m.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{m.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

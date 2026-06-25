export function ImpactSection() {
  const benefits = [
    { value: '24/7', label: 'Atención sin interrupciones' },
    { value: '−60%', label: 'Llamadas perdidas' },
    { value: '+30%', label: 'Reservas confirmadas' },
  ]

  return (
    <section className="border-t border-border/60 px-6 py-14 sm:py-16" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">Beneficios</p>
        <h2 id="impact-heading" className="mt-2 text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Imagina el impacto en tu negocio
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Menos llamadas perdidas, más reservas y atención disponible las 24 horas.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {benefits.map((item) => (
            <li
              key={item.label}
              className="surface-card px-5 py-6 text-center"
            >
              <p className="text-2xl font-semibold text-accent-soft">{item.value}</p>
              <p className="mt-2 text-sm text-muted">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

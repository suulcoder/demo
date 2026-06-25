import { BarChartIcon, ClockIcon, TrendUpIcon } from './ui/Icon'

const METRICS = [
  {
    Icon: ClockIcon,
    label: 'Disponibilidad',
    value: '24/7',
    description: 'Nunca pierdas un cliente',
  },
  {
    Icon: BarChartIcon,
    label: 'Eficiencia',
    value: '−60%',
    description: 'Llamadas perdidas',
  },
  {
    Icon: TrendUpIcon,
    label: 'Crecimiento',
    value: '+30%',
    description: 'Reservas mensuales',
  },
]

export function ImpactSection() {
  return (
    <section
      className="bg-gray-100 px-6 py-16 sm:py-20"
      aria-labelledby="impact-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            id="impact-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Imagina el impacto en tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Automatiza lo repetitivo, humaniza la respuesta y escala tu capacidad de
            atención sin aumentar tu plantilla.
          </p>
        </div>

        {/* Metric cards */}
        <dl className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {METRICS.map(({ Icon, label, value, description }) => (
            <div
              key={label}
              className="rounded-2xl bg-white px-7 py-8 shadow-sm"
            >
              <dt>
                <Icon className="h-6 w-6 text-slate-400" />
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  {label}
                </p>
              </dt>
              <dd>
                <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                  {value}
                </p>
                <p className="mt-1.5 text-sm text-slate-500">{description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

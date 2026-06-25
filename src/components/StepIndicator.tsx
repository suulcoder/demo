const STEPS = [
  {
    number: 1,
    title: 'Elige tu sector',
    description: 'Clínica dental o restaurante',
  },
  {
    number: 2,
    title: 'Habla con el agente',
    description: 'Prueba la voz en vivo',
  },
  {
    number: 3,
    title: 'Contacta con nosotros',
    description: 'Adaptamos el agente a tu negocio',
  },
] as const

interface StepIndicatorProps {
  activeStep?: 1 | 2 | 3
}

export function StepIndicator({ activeStep = 1 }: StepIndicatorProps) {
  return (
    <ol className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3 sm:gap-4">
      {STEPS.map((step, index) => {
        const isActive = step.number === activeStep
        const isCompleted = step.number < activeStep

        return (
          <li
            key={step.number}
            className={`relative flex items-start gap-3 rounded-xl border px-4 py-3.5 transition-colors duration-200 sm:flex-col sm:items-center sm:px-4 sm:py-5 sm:text-center ${
              isActive
                ? 'border-accent/50 bg-accent/10'
                : isCompleted
                  ? 'border-border bg-surface-elevated/60'
                  : 'border-border/60 bg-surface-elevated/30'
            }`}
          >
            {index < STEPS.length - 1 && (
              <span
                className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border sm:block"
                aria-hidden="true"
              />
            )}

            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                isActive
                  ? 'bg-accent text-white'
                  : isCompleted
                    ? 'bg-accent/20 text-accent-soft'
                    : 'bg-surface-muted text-muted'
              }`}
              aria-current={isActive ? 'step' : undefined}
            >
              {step.number}
            </span>

            <div className="min-w-0 sm:mt-3">
              <p
                className={`text-sm font-semibold leading-snug ${
                  isActive ? 'text-zinc-50' : 'text-zinc-300'
                }`}
              >
                {step.title}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">{step.description}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

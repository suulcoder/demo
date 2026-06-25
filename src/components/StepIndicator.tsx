import { CheckIcon } from './ui/Icon'

const STEPS = [
  {
    number: 1,
    title: 'Elige tu sector',
    description: 'Clínica dental o restaurante.',
  },
  {
    number: 2,
    title: 'Prueba la Demo',
    description: 'Habla con el agente en vivo.',
  },
  {
    number: 3,
    title: 'Empieza hoy',
    description: 'Reserva una llamada con nosotros.',
  },
] as const

export function StepIndicator() {
  return (
    <ol className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
      {STEPS.map((step, index) => {
        const isLast = index === STEPS.length - 1

        return (
          <li key={step.number} className="relative flex flex-col items-center text-center">
            {/* Connector line */}
            {!isLast && (
              <span
                className="absolute left-[calc(50%+20px)] top-5 hidden h-px flex-1 bg-border sm:block"
                style={{ right: 'calc(-50% + 20px)' }}
                aria-hidden="true"
              />
            )}

            {/* Circle */}
            <span
              className={`relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors duration-200 ${
                step.number < 3
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-white text-slate-400'
              }`}
              aria-label={`Paso ${step.number}`}
            >
              {step.number < 3 ? (
                step.number === 1 ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <span>{step.number}</span>
                )
              ) : (
                <span>{step.number}</span>
              )}
            </span>

            <p className="text-sm font-semibold text-slate-800">{step.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{step.description}</p>
          </li>
        )
      })}
    </ol>
  )
}

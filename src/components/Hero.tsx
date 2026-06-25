import { StepIndicator } from './StepIndicator'

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-10 pt-12 sm:pb-12 sm:pt-14">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-cta" aria-hidden="true" />
          Prueba en 30 segundos · Gratis
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
          Tu negocio atendiendo clientes{' '}
          <span className="bg-gradient-to-r from-indigo-200 to-accent-soft bg-clip-text text-transparent">
            mientras duermes
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Escucha cómo un agente de voz responde citas, reservas y preguntas frecuentes con un
          tono natural. Cada llamada que no contestas es dinero que se va — pruébalo ahora.
        </p>
      </div>

      <div className="mt-10">
        <StepIndicator activeStep={1} />
      </div>
    </section>
  )
}

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-12 pt-14 sm:pb-14 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-soft">
          Prueba en 30 segundos · Gratis
        </div>

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
    </section>
  )
}

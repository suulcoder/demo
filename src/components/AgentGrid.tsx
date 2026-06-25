import { AGENTS } from '../config/agents'
import type { AgentConfig } from '../types/agent'
import { AgentCard } from './AgentCard'
import { StepIndicator } from './StepIndicator'

interface AgentGridProps {
  onSelectAgent: (agent: AgentConfig) => void
}

export function AgentGrid({ onSelectAgent }: AgentGridProps) {
  return (
    <section
      className="border-t border-border bg-surface px-6 py-16 sm:py-20"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Steps */}
        <div className="mx-auto mb-14 max-w-3xl">
          <div className="mb-8 text-center">
            <p className="section-label">Tu asistente listo en 3 pasos</p>
          </div>
          <StepIndicator />
        </div>

        {/* Demo section header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2
            id="demo-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Especializados en tu sector
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Selecciona tu industria y prueba el agente de voz ahora mismo.
            <br />
            <span className="font-semibold text-accent">
              Haz clic en cualquier tarjeta para abrir la demo interactiva.
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} onSelect={onSelectAgent} />
          ))}
        </div>

        {/* Helper note */}
        <p className="mt-6 text-center text-sm text-slate-400">
          Las demos usan IA real · Sin registro · Gratis
        </p>
      </div>
    </section>
  )
}

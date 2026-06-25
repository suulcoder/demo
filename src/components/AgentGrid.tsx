import { AGENTS } from '../config/agents'
import type { AgentConfig } from '../types/agent'
import { AgentCard } from './AgentCard'

interface AgentGridProps {
  onSelectAgent: (agent: AgentConfig) => void
}

export function AgentGrid({ onSelectAgent }: AgentGridProps) {
  return (
    <section
      className="border-t border-border/60 bg-surface-elevated/30 px-6 py-14 sm:py-16"
      aria-labelledby="sectors-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="section-label">Paso 1</p>
          <h2 id="sectors-heading" className="mt-2 text-2xl font-semibold text-zinc-50 sm:text-3xl">
            Elige tu sector
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Selecciona el tipo de negocio y abre la demo de voz en un clic.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} onSelect={onSelectAgent} />
          ))}
        </div>
      </div>
    </section>
  )
}

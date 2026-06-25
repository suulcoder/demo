import { AGENTS } from '../config/agents'
import type { AgentConfig } from '../types/agent'
import { AgentCard } from './AgentCard'

interface AgentGridProps {
  onSelectAgent: (agent: AgentConfig) => void
}

export function AgentGrid({ onSelectAgent }: AgentGridProps) {
  return (
    <section
      className="border-t border-border/80 bg-surface-elevated/40 px-6 py-16"
      aria-labelledby="sectors-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-medium text-accent-soft">Paso 1</p>
          <h2 id="sectors-heading" className="mt-1 text-2xl font-semibold text-zinc-50">
            Elige tu sector
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Selecciona clínicas dentales o restaurantes y abre la demo de voz.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {AGENTS.map((agent) => (
            <AgentCard key={agent.id} agent={agent} onSelect={onSelectAgent} />
          ))}
        </div>
      </div>
    </section>
  )
}

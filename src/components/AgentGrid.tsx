import { AGENTS } from '../config/agents'
import type { AgentConfig } from '../types/agent'
import { AgentCard } from './AgentCard'

interface AgentGridProps {
  onSelectAgent: (agent: AgentConfig) => void
}

export function AgentGrid({ onSelectAgent }: AgentGridProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-8" aria-label="Selecciona tu industria">
      <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-muted">
        Elige tu sector
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {AGENTS.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onSelect={onSelectAgent} />
        ))}
      </div>
    </section>
  )
}

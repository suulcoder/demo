import { AGENTS } from '../config/agents'
import type { AgentConfig } from '../types/agent'
import { AgentCard } from './AgentCard'

interface AgentGridProps {
  onSelectAgent: (agent: AgentConfig) => void
}

export function AgentGrid({ onSelectAgent }: AgentGridProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-8" aria-label="Selecciona un sector">
      <div className="grid gap-6 sm:grid-cols-2">
        {AGENTS.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onSelect={onSelectAgent} />
        ))}
      </div>
    </section>
  )
}

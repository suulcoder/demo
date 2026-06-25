import type { AgentConfig } from '../types/agent'
import { Button } from './ui/Button'
import { SectorIcon } from './ui/Icon'

interface AgentCardProps {
  agent: AgentConfig
  onSelect: (agent: AgentConfig) => void
}

export function AgentCard({ agent, onSelect }: AgentCardProps) {
  const isPlaceholder = agent.agentId.includes('PLACEHOLDER')

  return (
    <article className="surface-card flex flex-col p-6 transition-colors duration-200 hover:border-zinc-500">
      <SectorIcon name={agent.icon} className="mb-5" />

      <h2 className="text-lg font-semibold text-zinc-50">{agent.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{agent.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {agent.highlights.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border/80 bg-surface px-2.5 py-1 text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>

      <Button
        className="mt-6 w-full"
        onClick={() => onSelect(agent)}
        disabled={isPlaceholder}
        aria-label={`Escuchar agente para ${agent.title}`}
      >
        {isPlaceholder ? 'Próximamente' : 'Probar ahora — gratis'}
      </Button>
    </article>
  )
}

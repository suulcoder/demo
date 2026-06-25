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
    <article className="surface-card group flex h-full flex-col p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-7">
      <div className="flex items-start gap-4">
        <SectorIcon name={agent.icon} className="shrink-0" />
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold text-zinc-50">{agent.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{agent.description}</p>
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {agent.highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border/80 bg-surface px-3 py-1 text-xs text-zinc-300"
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

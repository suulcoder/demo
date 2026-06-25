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
    <article className="group flex flex-col rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
        <SectorIcon name={agent.icon} />
      </div>

      <h2 className="text-xl font-semibold">{agent.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{agent.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {agent.highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-surface-muted/50 px-3 py-1 text-xs text-muted"
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

import type { AgentConfig } from '../types/agent'
import { MicIcon } from './ui/Icon'
import { SectorIcon } from './ui/Icon'

interface AgentCardProps {
  agent: AgentConfig
  onSelect: (agent: AgentConfig) => void
}

export function AgentCard({ agent, onSelect }: AgentCardProps) {
  const isPlaceholder = agent.agentId.includes('PLACEHOLDER')

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-white transition-all duration-200 ${
        isPlaceholder
          ? 'cursor-not-allowed border-border opacity-60'
          : 'cursor-pointer border-border hover:border-accent hover:shadow-xl hover:shadow-accent/10'
      }`}
      onClick={() => !isPlaceholder && onSelect(agent)}
      role="button"
      tabIndex={isPlaceholder ? -1 : 0}
      onKeyDown={(e) => {
        if (!isPlaceholder && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onSelect(agent)
        }
      }}
      aria-label={`Probar demo: ${agent.title}`}
      aria-disabled={isPlaceholder}
    >
      {/* Demo badge */}
      {!isPlaceholder && (
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
            Demo interactiva
          </span>
          <span className="text-[10px] font-medium text-slate-400">Click para probar</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {/* Icon + title */}
        <div className="flex items-start gap-4">
          <SectorIcon name={agent.icon} className="shrink-0" />
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-slate-900">{agent.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{agent.description}</p>
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {agent.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-slate-600"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Demo CTA */}
        <div className="mt-6">
          {isPlaceholder ? (
            <div className="flex h-12 w-full items-center justify-center rounded-xl border-2 border-dashed border-border text-sm font-medium text-slate-400">
              Próximamente
            </div>
          ) : (
            <div className="relative flex h-12 w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-accent text-sm font-bold text-white shadow-md shadow-accent/25 transition-all duration-200 group-hover:bg-accent-hover group-hover:shadow-lg group-hover:shadow-accent/30">
              {/* Pulse ring on hover */}
              <span
                className="absolute left-[30px] h-8 w-8 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-[8]"
                aria-hidden="true"
              />
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <MicIcon className="h-4 w-4" />
              </span>
              <span className="relative">Iniciar Demo de Voz</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom accent line on hover */}
      {!isPlaceholder && (
        <div
          className="h-1 w-full bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </article>
  )
}

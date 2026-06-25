import { useEffect, useRef } from 'react'
import type { AgentConfig } from '../types/agent'
import { Button } from './ui/Button'
import { CloseIcon, SectorIcon } from './ui/Icon'
import { ElevenLabsWidget } from './ElevenLabsWidget'

interface AgentDemoPanelProps {
  agent: AgentConfig
  onClose: () => void
}

export function AgentDemoPanel({ agent, onClose }: AgentDemoPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-panel-title"
      onClick={onClose}
    >
      <div
        className="surface-card w-full max-w-lg shadow-2xl shadow-black/40"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-5 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-zinc-300">
              <SectorIcon name={agent.icon} />
            </div>
            <div>
              <h2 id="demo-panel-title" className="text-lg font-semibold text-zinc-50">
                {agent.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Simula una llamada real de un cliente preguntando por citas, reservas o
                servicios.
              </p>
            </div>
          </div>

          <Button
            ref={closeButtonRef}
            variant="ghost"
            className="shrink-0 px-2 py-2"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <CloseIcon />
          </Button>
        </div>

        <div className="p-5 sm:p-6">
          <ElevenLabsWidget key={agent.id} agentId={agent.agentId} />
        </div>
      </div>
    </div>
  )
}

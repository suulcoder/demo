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
        className="w-full max-w-lg rounded-2xl border border-border bg-surface-elevated shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <SectorIcon name={agent.icon} />
            </div>
            <div>
              <h2 id="demo-panel-title" className="text-lg font-semibold">
                {agent.title}
              </h2>
              <p className="mt-1 text-sm text-muted">
                Pulsa el botón flotante del widget y habla. Pregunta por citas, horarios o
                el menú.
              </p>
            </div>
          </div>

          <Button
            ref={closeButtonRef}
            variant="ghost"
            className="shrink-0 px-3 py-2"
            onClick={onClose}
            aria-label="Cerrar demo"
          >
            <CloseIcon />
          </Button>
        </div>

        <div className="p-6">
          <ElevenLabsWidget key={agent.id} agentId={agent.agentId} />
        </div>
      </div>
    </div>
  )
}

import { useCallback, useRef } from 'react'
import { Button } from './ui/Button'
import { MicIcon } from './ui/Icon'
import type { ElevenLabsConvaiElement } from '../types/elevenlabs'

interface ElevenLabsWidgetProps {
  agentId: string
}

export function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  const widgetRef = useRef<ElevenLabsConvaiElement>(null)

  const handleStart = useCallback(() => {
    widgetRef.current?.startConversation?.()
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-col items-center rounded-2xl border border-border/80 bg-surface-muted/40 px-6 py-10 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-soft to-highlight shadow-lg shadow-accent/25">
          <MicIcon className="h-9 w-9 text-white" />
        </div>

        <p className="text-base font-medium text-white">Listo para escuchar</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Pulsa el botón y habla con naturalidad. El navegador te pedirá permiso para usar
          el micrófono.
        </p>

        <Button className="mt-6 min-w-[220px]" onClick={handleStart}>
          Iniciar conversación
        </Button>
      </div>

      <elevenlabs-convai
        ref={widgetRef}
        className="convai-hidden"
        agent-id={agentId}
        start-call-text="Iniciar conversación"
        end-call-text="Finalizar"
        action-text="Hablar con el agente"
        avatar-orb-color-1="#2563eb"
        avatar-orb-color-2="#38bdf8"
      />
    </div>
  )
}

import { useState } from 'react'
import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
} from '@elevenlabs/react'
import { Button } from './ui/Button'
import { MicIcon } from './ui/Icon'

interface ElevenLabsWidgetProps {
  agentId: string
}

function VoiceDemoControls() {
  const { startSession, endSession } = useConversationControls()
  const { status, message } = useConversationStatus()
  const [isStarting, setIsStarting] = useState(false)

  const isActive = status === 'connected' || status === 'connecting'

  const handleStart = () => {
    setIsStarting(true)
    startSession({
      onConnect: () => setIsStarting(false),
      onError: () => setIsStarting(false),
    })
  }

  return (
    <div className="flex flex-col items-center rounded-2xl border border-border/80 bg-surface-muted/40 px-6 py-10 text-center">
      <div
        className={`mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-soft to-highlight shadow-lg shadow-accent/20 ${isActive ? 'animate-pulse' : ''}`}
      >
        <MicIcon className="h-9 w-9 text-surface" />
      </div>

      {isActive ? (
        <>
          <p className="text-base font-medium text-white">
            {status === 'connecting' ? 'Conectando…' : 'Conversación en curso'}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Habla con naturalidad. Cuando termines, pulsa finalizar.
          </p>
          <Button className="mt-6 min-w-[220px]" variant="secondary" onClick={() => endSession()}>
            Finalizar conversación
          </Button>
        </>
      ) : (
        <>
          <p className="text-base font-medium text-white">Listo para escuchar</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Pulsa el botón y habla con naturalidad. El navegador te pedirá permiso para usar
            el micrófono.
          </p>
          <Button
            className="mt-6 min-w-[220px]"
            onClick={handleStart}
            disabled={isStarting}
          >
            {isStarting ? 'Conectando…' : 'Iniciar conversación'}
          </Button>
        </>
      )}

      {status === 'error' && message && (
        <p className="mt-4 text-sm text-red-400" role="alert">
          {message}
        </p>
      )}
    </div>
  )
}

export function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  return (
    <ConversationProvider agentId={agentId}>
      <VoiceDemoControls />
    </ConversationProvider>
  )
}

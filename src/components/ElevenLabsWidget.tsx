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
    <div className="surface-card px-6 py-8 text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-zinc-300">
        <MicIcon className="h-6 w-6" />
      </div>

      {isActive ? (
        <>
          <p className="text-base font-medium text-zinc-100">
            {status === 'connecting' ? 'Conectando…' : 'Conversación en curso'}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Habla con naturalidad. Cuando termines, pulsa finalizar.
          </p>
          <Button className="mt-6 min-w-[220px]" variant="secondary" onClick={() => endSession()}>
            Finalizar conversación
          </Button>
        </>
      ) : (
        <>
          <p className="text-base font-medium text-zinc-100">Listo para escuchar</p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
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

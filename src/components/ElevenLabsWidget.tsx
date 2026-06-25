import { useState } from 'react'
import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus,
} from '@elevenlabs/react'
import { Button } from './ui/Button'
import { MicIcon, PlayIcon } from './ui/Icon'

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
    <div className="rounded-xl border border-border/80 bg-surface px-6 py-8 text-center">
      <div
        className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ring-1 transition-colors duration-200 ${
          isActive
            ? 'bg-accent/15 text-accent-soft ring-accent/40'
            : 'bg-surface-muted text-zinc-300 ring-border'
        }`}
      >
        <MicIcon className="h-7 w-7" />
      </div>

      {isActive ? (
        <>
          <p className="text-base font-semibold text-zinc-100">
            {status === 'connecting' ? 'Conectando…' : 'Conversación en curso'}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Habla con naturalidad. Cuando termines, cierra el modal o pulsa finalizar.
          </p>
          <Button className="mt-6 min-w-[240px]" variant="secondary" onClick={() => endSession()}>
            Finalizar conversación
          </Button>
        </>
      ) : (
        <>
          <p className="text-base font-semibold text-zinc-100">Listo para escuchar</p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
            El navegador pedirá acceso al micrófono. Acepta y empieza a hablar.
          </p>
          <Button
            className="mt-6 min-w-[240px]"
            onClick={handleStart}
            disabled={isStarting}
          >
            <PlayIcon className="h-4 w-4" />
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

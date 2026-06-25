interface ElevenLabsWidgetProps {
  agentId: string
}

export function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  return (
    <div className="widget-shell">
      <elevenlabs-convai
        agent-id={agentId}
        variant="expanded"
        start-call-text="Iniciar conversación"
        end-call-text="Finalizar"
        action-text="Hablar con el agente"
        avatar-orb-color-1="#f59e0b"
        avatar-orb-color-2="#6366f1"
      />
    </div>
  )
}

interface ElevenLabsWidgetProps {
  agentId: string
}

export function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  return (
    <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-border bg-surface/50 p-6">
      <elevenlabs-convai agent-id={agentId} />
    </div>
  )
}
